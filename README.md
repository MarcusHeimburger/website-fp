# Malermeister-Website

Eine statische, responsive Ein-Seiten-Website für einen Maler- und Lackierermeister. Sie funktioniert ohne Node.js, Datenbank oder Webserver-Code.

## Vor dem Veröffentlichen anpassen

1. `index.html` in VS Code öffnen und alle Platzhalter in eckigen Klammern ersetzen: `[NAME]`, `[STADT]`, `[REGION]`, `[TELEFON]`, `[E-MAIL]` und Anschrift.
2. Die drei Beispielbilder in der Galerie durch eigene, optimierte Projektfotos ersetzen. Eigene Bilder gehören zum Beispiel in einen Ordner `images`; dann im `src`-Attribut `images/mein-projekt.jpg` eintragen.
3. Die Karte mit der echten Adresse bzw. dem wirklichen Einsatzort aktualisieren.
4. `impressum.html` und `datenschutz.html` vollständig mit den echten Daten ausfüllen und vor Livegang rechtlich prüfen lassen. Die Vorlagen sind keine Rechtsberatung.

## Kontaktformular mit Netlify Forms

Das Formular ist bereits für Netlify Forms konfiguriert. Nach dem ersten Deployment erkennt Netlify das Formular mit dem Namen `kontakt` automatisch.

1. In Netlify die veröffentlichte Website öffnen und **Forms** wählen.
2. Das Formular `kontakt` auswählen und unter **Form notifications** eine E-Mail-Benachrichtigung an `[E-MAIL]` einrichten.
3. Eine Testanfrage über die veröffentlichte Website senden. Die Einträge erscheinen unter **Forms** und werden zusätzlich per E-Mail weitergeleitet.
4. Die Datei `danke.html` ist die Seite, die Kunden nach erfolgreichem Versand sehen.

## Empfohlen: Lokal bearbeiten, zu GitHub pushen, automatisch mit Netlify veröffentlichen

### Einmalig einrichten

1. [Git für Windows](https://git-scm.com/download/win) installieren und VS Code danach einmal neu starten. Im VS-Code-Terminal muss `git --version` anschließend eine Versionsnummer ausgeben.
2. Kostenlosen Account bei [GitHub](https://github.com/) anlegen und oben rechts **New repository** wählen.
3. Repository `malermeister-website` nennen, auf **Public** stellen und ohne README erstellen.
4. In VS Code den Ordner `malermeister-website` öffnen. Im integrierten Terminal die folgenden Befehle ausführen. `GITHUB-USERNAME` durch den GitHub-Benutzernamen ersetzen:

```powershell
cd "$HOME\Desktop\malermeister-website"
git init
git add .
git commit -m "Erste Version der Malermeister-Website"
git branch -M main
git remote add origin https://github.com/GITHUB-USERNAME/malermeister-website.git
git push -u origin main
```

5. Kostenlos bei [Netlify](https://www.netlify.com/) anmelden, idealerweise über **Sign up with GitHub**.
6. **Add new site** > **Import an existing project** > **GitHub** wählen und das Repository `malermeister-website` auswählen.
7. Bei den Build-Einstellungen nichts eintragen: kein Build-Befehl, Publish directory `.`. Dann **Deploy site** wählen.
8. Netlify gibt der Website eine vorläufige Adresse wie `https://dein-name.netlify.app`. Unter **Site configuration** kann der Name angepasst werden.

### Alltag: Änderungen veröffentlichen

Datei in VS Code ändern, speichern und anschließend im Terminal ausführen:

```powershell
git add .
git commit -m "Beschreibe kurz die Änderung"
git push
```

Netlify startet daraufhin automatisch ein neues Deployment. Im Netlify-Dashboard kann der Fortschritt unter **Deploys** verfolgt werden. Nach wenigen Augenblicken ist die Änderung unter der `netlify.app`-Adresse und später unter der eigenen Domain sichtbar.

## Eigene .de-Domain verbinden

1. Eine `.de`-Domain bei einem Registrar bestellen, zum Beispiel IONOS, STRATO, INWX oder netcup. Die Website selbst bleibt bei Netlify kostenlos.
2. In Netlify **Domain management** > **Add a domain** wählen und die gekaufte Domain eintragen.
3. Beim Domain-Anbieter exakt die DNS-Einträge setzen, die Netlify anzeigt. Für `www` ist das häufig ein CNAME-Eintrag; die Hauptdomain benötigt die von Netlify vorgegebenen A- oder ALIAS-Einträge.
4. Warten, bis die DNS-Änderung übernommen wurde. Netlify stellt danach automatisch ein HTTPS-Zertifikat bereit.
5. In `index.html` die Beispieladresse `https://www.deine-domain.de/` in Meta-Tags und JSON-LD durch die neue echte Domain ersetzen.

## Lokal anschauen

Die `index.html` kann per Doppelklick geöffnet werden. Für die realistischere Vorschau in VS Code eignet sich die Erweiterung **Live Server**; alternativ kann der Ordner mit jedem lokalen HTTP-Server bereitgestellt werden.
