# Kuvatuholaiset

**Kuvatuholaiset** on Django-pohjainen verkkosovellus, joka on luotu sitä varten että ihmiset voivat jakaa kuvia toisilleen sekä ihailla toisten ottamia kuvia. Voit hakea erikseen tagilla erilaisia kuvia ja laittaa omiin kuviisi haluamasi tagit jotta muut löytävät kuvat helpommin.

## Sisältö

- Django-projekti (sisältää `manage.py` ja konfiguraatiot)
- `.gitignore` ja Git-versionhallinta
- Palaverimuistio (Word-dokumenttina)

## Asennus

1. **Luo virtuaaliympäristö:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   ```

2. **Asenna riippuvuudet:**
   ```bash
   pip install -r requirements.txt
   ```
   *(Jos requirements.txt puuttuu, voidaan luoda komennolla `pip freeze > requirements.txt` projektin ollessa asennettuna.)*

3. **Suorita tietokantamigraatiot:**
   ```bash
   python manage.py migrate
   ```

4. **Käynnistä kehityspalvelin:**
   ```bash
   python manage.py runserver
   ```

## Projektin rakenne

```
kuvatuholaiset/
├── manage.py
├── projekti/           # Django-sovellukset ja asetukset
├── .gitignore
└── Palaverimuistio.docx
```

## Kehittäjät

*(John, Topi, Trevor, Miro)*

