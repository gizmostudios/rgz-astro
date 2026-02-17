from openai import OpenAI
import json
client = OpenAI()

input = "klant-interview.mp3"
output = "klant-interview.json"

with open(input, "rb") as f:
    out = client.audio.transcriptions.create(
        model="whisper-1",
        file=f,
        language="nl",
        prompt=(
            "Dit is een interview in het Nederlands. "
            "Transcribeer uitsluitend in het Nederlands. "
            "Gebruik geen Engels. "
            "Behoud spreektaal en maak geen samenvatting."
        ),
        response_format="verbose_json",
        timestamp_granularities=["segment"],
    )

d = out.model_dump()

# Opslaan naar bestand
with open(output, "w", encoding="utf-8") as w:
    json.dump(d, w, ensure_ascii=False, indent=2)

print("Klaar met transcriptie, output naar folder geschreven.")
