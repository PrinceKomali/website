all: index mgtc wrs
index: 
	bun run next build --no-lint
	rm _next -rf
	mv out/* .
	rmdir out
	rm 404.html
mgtc:
	cd mgtc; ./build.sh
wrs: 
	cd wrs; $(MAKE)
.PHONY: mgtc index wrs