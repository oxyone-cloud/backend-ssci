[![ORCID](https://img.shields.io/badge/ORCID-0009--0000--1250--8205-A6CE39?style=flat&logo=orcid&logoColor=white)](https://orcid.org/0009-0000-1250-8205)

# 🧊 OxyONE / SSCI Cloud Backend

Backend Node.js / Express déployé sur Render pour la collecte et la gestion des données de capteurs IoT de la chaîne du froid.

## 📐 Architecture du Système

```mermaid
graph TD
    subgraph CLIENTS ["📱 Clients & Sources de Données"]
        App["Application Mobile / IoT"]
        Web["Navigateur Web"]
    end

    subgraph RENDER ["🚀 Render Web Service"]
        Express["Serveur Express (Port 10000)"]
        Root["GET / (Healthcheck)"]
        AddData["POST /addData (Sensors)"]
    end

    subgraph GCP ["☁️ Google Cloud Platform"]
        Datastore[("Datastore (SensorData)")]
    end

    App -->|HTTPS POST| AddData
    Web -->|HTTPS GET| Root
    AddData -->|Save Entity| Datastore
```

## 🔌 API Endpoints

| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Healthcheck & statut de l'API |
| `GET` | `/helloWorld` | Test rapide de connectivité |
| `POST` | `/addData` | Enregistrement d'un relevé de température dans GCP Datastore |

## 🧪 Exemple de requête POST `/addData`

```bash
curl -X POST [https://backend-ssci-cloudrun.onrender.com/addData](https://backend-ssci-cloudrun.onrender.com/addData) \
  -H "Content-Type: application/json" \
  -d '{
    "sensor_id": "COLD-ROOM-01",
    "temperature": 3.8,
    "humidity": 85
  }'
```
