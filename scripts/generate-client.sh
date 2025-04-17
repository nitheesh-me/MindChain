#! /usr/bin/env bash

set -e
set -x

cd mindchain-serve
python -c "import app.main; import json; print(json.dumps(app.main.app.openapi()))" > ../openapi.json
cd ..
mv openapi.json mindchain-ui/
cd mindchain-ui
bun run generate-client
bunx biome format --write ./src/client
