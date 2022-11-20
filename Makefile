include .env
export

types:
	npm run generate:types --prefix ./js

schema:
	cargo run --bin schema 

build: 
	- docker run --rm -v "$(shell pwd)":/code --platform linux/amd64 --mount type=volume,source="$(shell basename `pwd`)_cache",target=/code/target --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry cosmwasm/rust-optimizer:0.12.9
	- npm install --prefix ./js
upload:
	- npm run upload --prefix ./js
instantaite:
	- npm run instantiate --prefix ./js