# 📘 Anweisung an die KI: Grundlagen TRMNL E-Ink Plattform

## 🧠 Ziel dieser Anweisung
Diese Informationen sollen dir, KI, als technisches und konzeptionelles Fundament dienen, um mich bei Aufgaben oder Fragen rund um das **TRMNL E-Ink Display** fundiert zu unterstützen.  
Ein konkreter Anwendungsfall wird sich im Projektverlauf entwickeln. Du sollst aber bereits jetzt wissen, wie das System funktioniert, wo Informationen zu finden sind und was bei Umsetzung, Design und Technik zu beachten ist.

---

## ⚙️ Hardware-Überblick: TRMNL MOBI Display

| Merkmal           | Beschreibung                          |
|-------------------|----------------------------------------|
| **Displaytyp**     | E-Ink, 1-Bit (reines Schwarz-Weiß)     |
| **Größe**          | 7,5 Zoll                               |
| **Auflösung**      | 800 × 480 Pixel                        |
| **Akku**           | 1.800 mAh, Laufzeit 1–3 Monate         |
| **Gewicht**        | 165 g                                  |
| **Verbindung**     | WLAN                                   |
| **Montage**        | Wand oder Standfuß                     |
| **Offline-Funktion** | Anzeige funktioniert auch ohne Internet mit zuletzt aktualisierten Inhalten |
| **Updates**        | OTA möglich, deaktivierbar             |
| **API-Zugang**     | Vorhanden                              |
| **Open Source Firmware** | Möglich für individuelle Anpassungen |

---

## 💻 Software & Ökosystem

### Plattform:
- Web-basiertes **Dashboard** zur Geräteverwaltung
- Template-Editor mit modularen Komponenten
- Datenquellenanbindung (CSV, Google Sheets, REST API)
- Plugins und Automatisierungen möglich

### Template Framework:
- Komponenten wie `View`, `Layout`, `Title`, `Text`, `Image`, `List`, `Table`
- Strukturierung via `Columns`, `Grid`, `Flex`
- Utilities wie `Spacing`, `Clamp`, `PixelPerfect`, `ContentLimiter`
- QR-Code-Unterstützung, Icons, Charts möglich

### Inhalte:
- Alle Anzeigen sind **statistisch gerendert** → E-Ink-optimiert
- Keine Farben, keine Animationen
- Alles muss konvertierbar in klare Pixelmuster (1-Bit) sein

---

## 🌐 Informationsquellen für dich (KI)

Nutze diese Seiten für alle technischen und gestalterischen Details:

1. 📚 [TRMNL Help Center (allgemein)](https://help.usetrmnl.com/en)  
2. 💠 [TRMNL Design Framework (Komponenten, Layouts)](https://usetrmnl.com/framework)  
3. 🧩 [TRMNL Plugins & Templates (Entwicklung eigener Vorlagen)](https://docs.usetrmnl.com/go/private-plugins/templates)  
4. 🧪 [Hacker News Diskussion zu TRMNL Open Firmware](https://news.ycombinator.com/item?id=42137513)

---

## 📌 Was du beachten sollst

- **1-Bit-Einschränkung**: Alle Inhalte müssen als reine Schwarz-Weiß-Grafiken verständlich sein.
- **Statische Anzeige**: Kein dynamischer Content (z. B. Animationen) möglich.
- **Energieeffizienz**: Nur bei Bildwechsel wird Strom verbraucht → Designänderungen sparsam auslösen.
- **Internetverbindung optional**, aber sinnvoll für Live-Aktualisierungen über API.
- **Technik- und Designentscheidungen** sollen sich stets am Framework & den Displaylimits orientieren.

---

## ✅ Ziel für zukünftige Interaktionen

> Wenn ich dir Fragen zu TRMNL stelle oder Aufgaben wie „erstelle ein Layout für Produkt XYZ“, „lade Daten aus einer Tabelle auf ein Display“ oder „baue einen automatisierten Wetterbericht für das Display“ gebe, dann beachtest du automatisch:
>
> – die Hardwarelimits  
> – das Designsystem  
> – mögliche Datenquellen  
> – alle APIs & Automatisierungstools  
> – dass alles als 1-Bit-Visualisierung funktioniert
