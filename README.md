# ⚡ ÉnergieClaire

**Plateforme automatisée de courtage en énergie pour le marché français.**

ÉnergieClaire aide les restaurants, cafés et commerces à réduire leurs factures d'électricité et de gaz via un système 100% automatisé combinant IA conversationnelle et prospection intelligente.

---

## 🔗 URLs du projet

| Élément | URL |
|---------|-----|
| 🌐 Landing page | https://energieclaire.vercel.app |
| 📊 Dashboard Analytics | https://energieclaire.vercel.app/energieclaire-dashboard-v2.html |
| 📋 Google Sheet Analytics | https://docs.google.com/spreadsheets/d/1o7-c9Qm6aiyoWsMGANemehQf7rylxZHSUwaRtyP7FkI |

---

## 🏗️ Architecture

```
Landing Page (Next.js / Vercel)
        ↓
Chatbot Voiceflow → n8n → DeepSeek API → Airtable CRM → Brevo Email
        ↓
Outbound : Outscraper → Airtable → n8n → Instantly.ai
        ↓
Dashboard : Airtable → n8n → Google Sheets → HTML (Vercel)
```

## 🛠️ Stack technique

- **Frontend :** Next.js 14 + React 18 + Tailwind CSS
- **Automation :** n8n (Sliplane)
- **IA :** DeepSeek API
- **CRM :** Airtable
- **Email transactionnel :** Brevo
- **Cold email :** Instantly.ai
- **Scraping :** Outscraper
- **Signature :** Yousign
- **Dashboard :** HTML statique + Google Sheets

---

## 📊 Statut du projet

**Version :** 10.0 — Février 2026  
**Complétion technique :** 99%  
**Lancement prévu :** ~10 mars 2026
