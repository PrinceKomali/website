all: index mgtc wrs
index.html: $(wildcard pages/*) $(wildcard styles/*)
	bun run next build --no-lint --no-mangling
	rm _next -rf
	mv out/* .
	rmdir out
	rm 404.html
mgtc: mgtc
	cd mgtc; ./build.sh
wrs: 
	cd wrs; $(MAKE)
.PHONY: mgtc index wrs
