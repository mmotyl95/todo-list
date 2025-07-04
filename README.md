# 📝 Flask To-Do App

Prosta aplikacja To-Do zbudowana w Pythonie (Flask) i JavaScript, wspierająca dodawanie, usuwanie i oznaczanie zadań jako ukończone.  
Zintegrowana z pipeline CI/CD oraz automatycznym wdrażaniem na Azure App Service.

---

## 🚀 Szybki start

### 🔧 Wymagania
- Python 3.10+
- Node.js 20+
- npm
- pip

### 🔄 Instalacja i uruchomienie lokalne

```bash
# backend
pip install -r requirements.txt
python app.py

# frontend
npm ci
npm test
```

Otwórz: [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## 🧪 Testy

### Frontend (Jest)

```bash
npm test
```

### Backend (pytest)

```bash
pytest
```

---

## 🧩 CI/CD (GitHub Actions + Azure)

### CI (ciągła integracja)

- Uruchamiana przy każdym pushu i PR do `main`
- Wykonywane są:
  - Instalacja zależności (`npm`, `pip`)
  - Testy frontendowe (`Jest`)
  - (opcjonalnie) Testy backendowe (`pytest`)
  - Budowa aplikacji (Docker, jeśli obecny)

### CD (ciągłe wdrażanie)

- Deployment do Azure App Service po pushu do `main`:
  - Publikacja do slotu `staging`
  - Health check na endpointzie `/health`
  - Swap staging → production tylko po sukcesie
  - Rollback = brak swapu, jeśli health check zawiedzie

---

## 🏗️ Struktura projektu

```
.
├── app.py
├── requirements.txt
├── todo.js
├── todo.test.js
├── templates/
│   └── index.html
├── test_app.py
├── package.json
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
```

---

## 🔐 Sekrety GitHub Actions

| Nazwa                           | Opis |
|--------------------------------|------|
| `AZURE_CREDENTIALS`            | JSON z `az ad sp create-for-rbac` |
| `AZURE_PUBLISH_PROFILE_STAGING`| Zawartość `.PublishSettings` z Azure App Service |

---

## 🩺 Endpoint Health Check

```python
@app.route('/health')
def health():
    return 'OK', 200
```

---

## 📄 Licencja

Projekt dostępny na licencji MIT.

---