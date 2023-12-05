# Télémesure

DevOps

---

## Télémesure vs Télémétrie

- **Télémesure**
  - &shy;<!-- .element: class="fragment" --> Technique de mesure **à** distance
- **Télémétrie**
  - &shy;<!-- .element: class="fragment" --> Technique de mesure **des** distances
- &shy;<!-- .element: class="fragment" --> **Telemetry** = Télémesure

---

## Pourquoi la télémesure ?

- &shy;<!-- .element: class="fragment" --> **Centralisation** des données
- &shy;<!-- .element: class="fragment" --> **Visualisation** des données
- &shy;<!-- .element: class="fragment" --> **Alerting** sur les données
- &shy;<!-- .element: class="fragment" --> Utilisation d'un **APM** (Application Performance Monitoring)
  - **Outils** de télémétrie pour les applications

---

## OpenTelemetry

- &shy;<!-- .element: class="fragment" --> **Standard** open source des données de télémétrie (observabilité)
- &shy;<!-- .element: class="fragment" --> **Compatibilité** et **Interopérabilité** entre les outils de télémétrie
- &shy;<!-- .element: class="fragment" --> **Facilite** l'instrumentation des applications

---

![](https://imgs.xkcd.com/comics/universal_converter_box.png)

https://xkcd.com/1406 <!-- .element: class="reference" target="_blank" -->

---

### Signaux

- 4 [signals](https://opentelemetry.io/docs/concepts/signals/) (catégories de télémesure) :
  - &shy;<!-- .element: class="fragment" --> [Traces](https://opentelemetry.io/docs/concepts/signals/traces/) (déroulement d'une requête)
  - &shy;<!-- .element: class="fragment" --> [Metrics](https://opentelemetry.io/docs/concepts/signals/metrics/) (valeurs mesurées)
  - &shy;<!-- .element: class="fragment" --> [Logs](https://opentelemetry.io/docs/concepts/signals/logs/) (texte structuré ou non)
  - &shy;<!-- .element: class="fragment" --> [Baggage](https://opentelemetry.io/docs/concepts/signals/baggage/) (données partagées entre les spans)

---

#### Trace & Span

![](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Yu0bCux_sulHPy6MhT9Ytg.png)
https://medium.com/nikeengineering/hit-the-ground-running-with-distributed-tracing-core-concepts-ff5ad47c7058 <!-- .element: class="reference" target="_blank" -->

- &shy;<!-- .element: class="fragment" --> **Trace** : ensemble de **spans** (étapes d'une requête)

---

#### Relations

![](https://opentracing.io/img/OTHT_0.png)
![](https://opentracing.io/img/OTHT_1.png)
https://opentracing.io/docs/best-practices/instrumenting-your-application/ <!-- .element: class="reference" target="_blank" -->

---

### Instrumentation

- &shy;<!-- .element: class="fragment" --> Pour rendre un système **observable**, il faut l'**instrumenter**
- &shy;<!-- .element: class="fragment" --> Il émets des **signaux** qui seront **collectés**
- &shy;<!-- .element: class="fragment" --> l'instrumentation peut être **automatique** ou **manuel**

---

## Prometheus

[![](https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg)](https://commons.wikimedia.org/wiki/File:Prometheus_software_logo.svg) <!-- .element: target="_blank" -->

- &shy;<!-- .element: class="fragment" --> **Collecte** et **stockage** de métriques en **time series**
- &shy;<!-- .element: class="fragment" --> **Alerting** sur les métriques
- &shy;<!-- .element: class="fragment" --> Visualisation avec **Grafana**
- &shy;<!-- .element: class="fragment" --> Depuis 2012 par SoundCloud, CNCF depuis 2016

---

### Architecture

![](https://training.promlabs.com/static/prometheus-architecture-81d1251aedaf0676f61ad31e4cf19363.svg) <!-- .element: style="height: var(--slides-height)" -->
https://training.promlabs.com/training/introduction-to-prometheus/prometheus-an-overview/system-architecture <!-- .element: class="reference" target="_blank" -->

---

## Grafana

![](https://grafana.com/media/docs/grafana/dashboards-overview/complex-dashboard-example.png) <!-- .element: style="height: var(--slides-height)" -->
https://grafana.com/docs/grafana/latest/fundamentals/dashboards-overview/ <!-- .element: class="reference" target="_blank" -->

---

### Grafana vs Kibana

- **Grafana**
  - &shy;<!-- .element: class="fragment" --> Visualisation de **métriques** (time series)
  - &shy;<!-- .element: class="fragment" --> **Alerting** intégré
  - &shy;<!-- .element: class="fragment" --> **Logs** avec Loki
- **Kibana**
  - &shy;<!-- .element: class="fragment" --> Recherche et analyse de **logs** (texte)
  - &shy;<!-- .element: class="fragment" --> Ne fonctionne qu'avec **Elasticsearch**
  - &shy;<!-- .element: class="fragment" --> **Alerting** avec Watcher

---

## Service Discovery

![](https://www.nginx.com/wp-content/uploads/2016/04/Richardson-microservices-part4-1_difficult-service-discovery.png) <!-- .element: style="height: var(--slides-height)" -->
https://www.nginx.com/blog/service-discovery-in-a-microservices-architecture/ <!-- .element: class="reference" target="_blank" -->

---

## Client‑Side Discovery

![](https://www.nginx.com/wp-content/uploads/2016/04/Richardson-microservices-part4-2_client-side-pattern.png) <!-- .element: style="height: var(--slides-height)" -->
https://www.nginx.com/blog/service-discovery-in-a-microservices-architecture/ <!-- .element: class="reference" target="_blank" -->

---

### Server‑Side Discovery

![](https://www.nginx.com/wp-content/uploads/2016/04/Richardson-microservices-part4-3_server-side-pattern.png) <!-- .element: style="height: var(--slides-height)" -->
https://www.nginx.com/blog/service-discovery-in-a-microservices-architecture/ <!-- .element: class="reference" target="_blank" -->

---

## Cardinalité

- &shy;<!-- .element: class="fragment" --> Nombre d'**éléments distincts** dans un ensemble
- &shy;<!-- .element: class="fragment" --> Métriques : **Nombre** de **valeurs** d'un **attribut**

![](https://grafana.com/static/assets/img/blog/cardinality-spikes-diagram.jpg) <!-- .element: class="fragment" style="height: 420px" -->
https://grafana.com/blog/2022/02/15/what-are-cardinality-spikes-and-why-do-they-matter/ <!-- .element: class="reference" target="_blank" -->

---

### High cardinality

![](https://victoriametrics.com/blog/cardinality-explorer/cardinality_calculation.png)
https://victoriametrics.com/blog/cardinality-explorer/ <!-- .element: class="reference" target="_blank" -->

---

### VM → container

![](https://chronosphere.io/wp-content/uploads/2023/10/cardinality-growth-1024x576.webp)
https://chronosphere.io/learn/what-is-high-cardinality/ <!-- .element: class="reference" target="_blank" -->

---

### Coûts et Problèmes

- &shy;<!-- .element: class="fragment" --> **Stockage** : volume des données
- &shy;<!-- .element: class="fragment" --> **Ressources** : CPU et RAM du système de monitoring
- &shy;<!-- .element: class="fragment" --> **Pertes** : throughput du système de monitoring
- &shy;<!-- .element: class="fragment" --> **Visualisation** : lisibilité des graphiques
- &shy;<!-- .element: class="fragment" --> **Coûts** : infrastructure et maintenance ou SaaS

---

![](https://grafana.com/static/assets/img/blog/grafana-cardinality-metrics-quadrants.png)
https://grafana.com/blog/2022/10/20/how-to-manage-high-cardinality-metrics-in-prometheus-and-kubernetes/ <!-- .element: class="reference" target="_blank" -->

---

### Optimisations

- &shy;<!-- .element: class="fragment" --> **Suppression** : supprimer les labels inutiles
  - &shy;<!-- .element: class="fragment" --> **Inutilisé**
  - &shy;<!-- .element: class="fragment" --> **Redondant**
- &shy;<!-- .element: class="fragment" --> **Agrégation** : réduire le nombre de valeurs
  - &shy;<!-- .element: class="fragment" --> **Histogram** : découper les valeurs en intervalles (agrégation temporelle)
  - &shy;<!-- .element: class="fragment" --> **Summary** : minimale, maximale, moyenne, quantiles (agrégation statistique)

---

## Semantic Conventions

https://opentelemetry.io/docs/concepts/semantic-conventions/

- &shy;<!-- .element: class="fragment" --> **Standard** pour les labels des métriques
- &shy;<!-- .element: class="fragment" --> **Attribut** (key) en lowercase séparé par des points
- &shy;<!-- .element: class="fragment" --> **Valeur** (value) en snake_case

---

![](https://imgs.xkcd.com/comics/iso_8601.png)
https://xkcd.com/1179 <!-- .element: class="reference" target="_blank" -->

---

![](https://imgs.xkcd.com/comics/standards.png)
https://xkcd.com/927 <!-- .element: class="reference" target="_blank" -->

---
