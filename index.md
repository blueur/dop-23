---
footer: true
sidebar: false
title: Home
---

# DevOps

## Calendrier

| Date       | Semaine | Cours (13:15 - 14:45)                                            | Laboratoires (14:55 - 16:30)                     |
| ---------- | :-----: | ---------------------------------------------------------------- | ------------------------------------------------ |
| 2023-09-20 |   01    | [Introduction](./lessons/introduction)<br>[Code](./lessons/code) | [Outils](./labs/tools)                           |
| 2023-09-27 |   02    | [Artefact](./lessons/artefact)<br>[Développement](./lessons/dev) | [Docker](./labs/docker) (**noté**)               |
| 2023-10-04 |   03    | [Test automatisé](./lessons/test)                                | [Compose](./labs/compose)                        |
| 2023-10-11 |   04    | [CI/CD](./lessons/cicd)                                          | [CI/CD](./labs/cicd)                             |
| 2023-10-18 |   05    | **Test** (45')                                                   | [CI/CD](./labs/cicd)                             |
| 2023-10-25 |         | _Activités interdisciplinaires_                                  | _Activités interdisciplinaires_                  |
| 2023-11-01 |   06    | [Orchestration](./lessons/orchestration)                         | [Kubernetes](./labs/kubernetes)                  |
| 2023-11-08 |   07    | [Déploiement](./lessons/deploy)                                  | [CI/CD Java](./labs/cicd-java) (**noté**)        |
| 2023-11-15 |   08    | [Terraform](./lessons/terraform)                                 | [Kubernetes & Helm](./labs/kubernetes-helm)      |
| 2023-11-22 |   09    | [GitOps](./lessons/gitops)                                       | [CI/CD Java](./labs/cicd-java) (**remédiation**) |
| 2023-11-29 |   10    | [Observabilité](./lessons/observability)                         | [Logs](./labs/logs)                              |
| 2023-12-06 |   11    | [Télémesure](./lessons/telemetry)                                | [Métriques](./labs/metrics)                      |
| 2023-12-13 |   12    | Trace                                                            | Traces                                           |
| 2023-12-20 |   13    | **Test** (45')                                                   | Observabilité (**noté**)                         |
| 2023-12-27 |         | _Vacances_                                                       | _Vacances_                                       |
| 2024-01-03 |         | _Vacances_                                                       | _Vacances_                                       |
| 2024-01-10 |   14    | Chaos engineering                                                | Observabilité (**noté**)                         |
| 2024-01-17 |   15    | Sécurité                                                         | [Release](./labs/release)                        |
| 2024-01-24 |   16    | Design Pattern                                                   | Révision                                         |
|            |         | **Examen**                                                       | _Examen_                                         |

## Liens

- [Cyberlearn](https://cyberlearn.hes-so.ch/course/view.php?id=9480)
- [Fiche d'unité](https://gaps.heig-vd.ch/public/fiches/uv/uv.php?id=7181&plan=792)
- [Calendrier académique](https://heig-vd.ch/formation/bachelor/calendrier-academique/)

## Ressources additionnelles

- [Google Site Reliability Engineering](https://sre.google/)

<script setup>
import { onMounted, nextTick } from 'vue'

const date = new Date()
const day = date.getDay()
const currentDate = new Date(date.setDate(date.getDate() - day + (day === 0 ? -4 : 3)))
const dateText = currentDate.toISOString().split('T')[0]
const weekend = day === 0 || day === 6

onMounted(() => {
    Array.from(document.querySelectorAll("td"))
        .filter(a => a.textContent === dateText)
        .forEach(element => {
            const parent = element.parentElement
            parent.classList.add("current", weekend ? "weekend" : "week")
            nextTick(() => parent.scrollIntoView({ behavior: 'smooth' }))
        })
})
</script>
