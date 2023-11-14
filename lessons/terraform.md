# Terraform

## Mission

Essayez d'accomplir le plus de tâches possibles dans le temps imparti. Ne regardez pas les corrections avant d'avoir tout fini.

Temps à disposition : 1h30

Tâches à accomplir :

1. Créer un cluster Kubernetes sur Google Kubernetes Engine (GKE) avec Terraform
   - Utilisez `heig-vd-devops` comme projet
   - Utilisez `heig-vd-dop-{votre nom}` comme nom du cluster
   - Utilisez `europe-west6` comme [région](https://cloud.google.com/compute/docs/regions-zones?hl=fr)
   - Le cluster doit être en mode [Autopilot](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview?hl=fr)
   - `terraform apply` doit fonctionner créer le cluster
2. Créer une VM sur Google Cloud Platform (GCP) avec Terraform
   - Utilisez `heig-vd-devops` comme projet
   - Utilisez `heig-vd-dop-{votre nom}` comme nom de la VM
   - Utilisez `europe-west6-b` comme [zone](https://cloud.google.com/compute/docs/regions-zones?hl=fr)
   - Utilisez `f1-micro` comme [type de machine](https://cloud.google.com/compute/docs/machine-types?hl=fr)
   - Utilisez `debian-cloud/debian-11` comme [image](https://cloud.google.com/compute/docs/images?hl=fr)
   - `terraform apply` doit fonctionner créer la VM
   - On doit pouvoir se connecter à la VM avec SSH
3. Continuer la tâche 2 en démarrant le Docker Compose de https://gitlab.com/blueur/heig-vd-devops (ou votre projet) sur votre VM
   - `terraform apply` doit fonctionner créer la VM et démarrer le Docker Compose
   - L'application doit être accessible depuis l'extérieur sur le port 80

::: tip Conseil

Parallélisez les tâches. Par exemple, pendant que Terraform crée le cluster, vous pouvez commencer à travailler sur la tâche suivante.

:::

::: details Correction tâche 1

Check :

- Fichiers de configuration Terraform versionné ?

Références :

- https://www.hashicorp.com/blog/terraform-adds-support-for-gke-autopilot

::: code-group

```hcl [gke.tf]
variable "gke_username" {
  default     = ""
  description = "gke username"
}

variable "gke_password" {
  default     = ""
  description = "gke password"
}

resource "google_container_cluster" "primary" {
  name     = "heig-vd-dop-blueur"
  location = var.region

  network    = google_compute_network.vpc.name
  subnetwork = google_compute_subnetwork.subnet.name

  # Enabling Autopilot for this cluster
  enable_autopilot = true
}
```

```hcl [terraform.tfvars]
project_id = "heig-vd-devops"
region     = "europe-west6"
```

```hcl [versions.tf]
terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.74.0"
    }
  }

  required_version = ">= 0.14"
}
```

:::

::: details Correction tâche 2

Check :

- Fichiers de configuration Terraform versionné ?

Références :

- https://developer.hashicorp.com/terraform/tutorials/gcp-get-started/google-cloud-platform-build
- https://cloud.google.com/docs/terraform/get-started-with-terraform?hl=fr

::: code-group

```hcl [main.tf]
terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.51.0"
    }
  }
}

provider "google" {
  credentials = file("heig-vd-devops-[...].json")

  project = "heig-vd-devops"
  region  = "europe-west6"
  zone    = "europe-west6-b"
}

resource "google_compute_network" "vpc_network" {
  name = "terraform-network"
}

resource "google_compute_instance" "default" {
  name         = "terraform-instance"
  machine_type = "f1-micro"
  tags         = ["allow-ssh"]

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  network_interface {
    network = google_compute_network.vpc_network.name
    access_config {
    }
  }
}

resource "google_compute_firewall" "ssh-rule" {
  name = "allow-ssh"
  network = google_compute_network.vpc_network.name
  allow {
    protocol = "tcp"
    ports = ["22"]
  }
  target_tags = ["allow-ssh"]
  source_ranges = ["0.0.0.0/0"]
}
```

:::

::: details Correction tâche 3

Références :

- https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_firewall
- https://ion-utale.medium.com/create-a-vm-with-docker-installed-using-terraform-20812f6fd981
- https://cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance?hl=fr

::: code-group

```hcl [main.tf]
terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.51.0"
    }
  }
}

provider "google" {
  credentials = file("heig-vd-devops-[...].json")

  project = "heig-vd-devops"
  region  = "europe-west6"
  zone    = "europe-west6-b"
}

resource "google_compute_network" "vpc_network" {
  name = "terraform-network"
}

resource "google_compute_instance" "default" {
  name         = "terraform-instance"
  machine_type = "f1-micro"
  tags         = ["allow-ssh", "web"]

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  network_interface {
    network = google_compute_network.vpc_network.name
    access_config {
    }
  }
}

resource "google_compute_firewall" "ssh-rule" {
  name = "allow-ssh"
  network = google_compute_network.vpc_network.name
  allow {
    protocol = "tcp"
    ports = ["22"]
  }
  target_tags = ["allow-ssh"]
  source_ranges = ["0.0.0.0/0"]
}

resource "google_compute_firewall" "default" {
  name    = "allow-http"
  network = google_compute_network.vpc_network.name
  allow {
    protocol = "tcp"
    ports    = ["80"]
  }
  target_tags = ["web"]
}
```

```sh [startup.sh]
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources:
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

git clone https://gitlab.com/blueur/heig-vd-devops.git

cd heig-vd-devops && docker compose up -d
```

:::
