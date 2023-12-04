# Observabilité

DevOps

---

## Monitoring (supervision)

- &shy;<!-- .element: class="fragment" --> **Collecte** de **métriques** sur les
  - &shy;<!-- .element: class="fragment" --> **ressources** (CPU, mémoire, disque, réseau)
  - &shy;<!-- .element: class="fragment" --> **performances** (temps de réponse, latence, débit)
  - &shy;<!-- .element: class="fragment" --> **erreurs** (code HTTP, exceptions, logs)
  - &shy;<!-- .element: class="fragment" --> ...

---

## Observabilité

- &shy;<!-- .element: class="fragment" --> **Mesure** de l'inférence de l'**état interne** d'un système à partir de ses **observations externes**
- &shy;<!-- .element: class="fragment" --> Trois piliers
  - &shy;<!-- .element: class="fragment" --> **Logs** (journalisation)
  - &shy;<!-- .element: class="fragment" --> **Métriques** (monitoring)
  - &shy;<!-- .element: class="fragment" --> **Traces** (suivi)

---

## Observabilité vs Monitoring

- **Monitoring**
  - &shy;<!-- .element: class="fragment" --> **action** de surveiller
  - &shy;<!-- .element: class="fragment" --> dit s'il y a un problème
- **Observabilité**
  - &shy;<!-- .element: class="fragment" --> **capacité** à être surveillé
  - &shy;<!-- .element: class="fragment" --> capacité à trouver et comprendre le problème
  - &shy;<!-- .element: class="fragment" --> = Monitoring + Logs + Traces

---

## Métriques DORA

- &shy;<!-- .element: class="fragment" --> **D**ev**O**ps **R**esearch and **A**ssessment de Google
- &shy;<!-- .element: class="fragment" --> 4 indicateurs de performance
  - &shy;<!-- .element: class="fragment" --> **Deployment Frequency** : fréquence de déploiement réussi en prod
  - &shy;<!-- .element: class="fragment" --> **Lead Time for Changes** : temps d'exécution des changements (commit → prod)
  - &shy;<!-- .element: class="fragment" --> **Change Failure Rate** : taux d'échec des changements
  - &shy;<!-- .element: class="fragment" --> (Mean) **Time to Restore Service** (MTTR) : temps de rétablissement (moyen) du service

---

### Métriques DORA

![](https://assets-global.website-files.com/6489e23dd070ba71d41a33b2/649162604bc89d9efb8b872d_622b0fd3d9180a667627f3d6_fanSpr5qRM0FUYbCT8V2s-rmjc4zcCk7nKsFnX02paZHKU7q3Y1XXxXSxqHgcCJ8kIbneLfjgXBGvow6eDRdThg-c0AI2MHWgi90vMufVQrn7gCuCGh04QqcIQDBKqXow9E4-6K4.png)

https://platformengineering.org/talks-library/track-dora-devops-metrics-with-logilica-and-humanitec <!-- .element: class="reference" target="_blank" -->

---

### Dashboard DORA

![](https://storage.googleapis.com/gweb-cloudblog-publish/images/The_dashboard.max-1500x1500.jpg)

https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance <!-- .element: class="reference" target="_blank" -->

---

### Niveau de performance DORA

![](https://storage.googleapis.com/gweb-cloudblog-publish/images/Calculating_the_metrics_frOhcbp.max-2000x2000.jpg)

https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance <!-- .element: class="reference" target="_blank" -->

---

## Monitoring avec ELK

- &shy;<!-- .element: class="fragment" --> **E**lasticsearch : moteur de recherche et **base de données**
- &shy;<!-- .element: class="fragment" --> **L**ogstash : agrège et **transforme** les données
  - ETL : Extract-transform-load
- &shy;<!-- .element: class="fragment" --> **K**ibana : interface de **visualisation** et d'exploration de données
- &shy;<!-- .element: class="fragment" --> Beats : **collecte** de données (agent)
- &shy;<!-- .element: class="fragment" --> **Open source** par **Elastic**

---

### ELK Stack

![](https://user.oc-static.com/upload/2021/01/25/16115946512541_P3C1.1%20Stack%20ELK.png)

https://openclassrooms.com/fr/courses/1750566-optimisez-la-securite-informatique-grace-au-monitoring/7145268-decouvrez-la-stack-elk <!-- .element: class="reference" target="_blank" -->

---

### ELK Stack

![](https://datawrangler.mo.cloudinary.net/images/post/14-ELK-stack/img1.png)

https://www.datawrangler.in/blog/14-elk-stack/ <!-- .element: class="reference" target="_blank" -->

---

## Monitoring Stack

|               | ELK           | Alternative  |
| ------------- | ------------- | ------------ |
| **Collect**   | Beats         | Fluentd      |
| **Process**   | Logstash      | Grafana Loki |
| **Store**     | Elasticsearch | Grafana Loki |
| **Visualize** | Kibana        | Grafana      |
| **Alert**     | Kibana        | Grafana      |

&shy;<!-- .element: class="fragment" --> Combinable !

---

## Collecte

- **Agent**
  - &shy;<!-- .element: class="fragment" --> **Indépendant** du code
  - &shy;<!-- .element: class="fragment" --> Lis la sortie standard (**stdout**) ou les fichiers de logs
  - &shy;<!-- .element: class="fragment" --> Définition des métriques dans l'agent
- **Client/Library**
  - &shy;<!-- .element: class="fragment" --> Ajoute une **nouvelle dépendance** au code
  - &shy;<!-- .element: class="fragment" --> **Modification** du code pour envoyer les logs
  - &shy;<!-- .element: class="fragment" --> Définition des métriques dans le code

---

### Agent

[![](https://opentelemetry.io/docs/collector/img/otel-agent-sdk.svg)](https://opentelemetry.io/docs/collector/deployment/agent/)

### Client/Library

[![](https://opentelemetry.io/docs/collector/img/otel-sdk.svg)](https://opentelemetry.io/docs/collector/deployment/no-collector/)

---

## Fluentd Java

```java [1-16|3,6,13|10-13]
import java.util.HashMap;
import java.util.Map;
import org.fluentd.logger.FluentLogger;

public class Main {
    private static FluentLogger LOG = FluentLogger.getLogger("fluentd.test");

    public void doApplicationLogic() {
        // ...
        Map<String, Object> data = new HashMap<String, Object>();
        data.put("from", "userA");
        data.put("to", "userB");
        LOG.log("follow", data);
        // ...
    }
}
```

https://docs.fluentd.org/language-bindings/java <!-- .element: class="reference" target="_blank" -->

---

## Elasticsearch

- &shy;<!-- .element: class="fragment" --> **Moteur de recherche** et **base de données**
- &shy;<!-- .element: class="fragment" --> Utilise **Lucene** pour l'indexation et la recherche de **texte**
- &shy;<!-- .element: class="fragment" --> **Cluster** de **nœuds** (distribué)
- &shy;<!-- .element: class="fragment" --> **API** REST
