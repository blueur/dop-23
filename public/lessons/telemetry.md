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
