all: index mgtc
index: 
	bun run next build
	rm _next -rf
	mv out/* .
	rmdir out
	rm 404.html
mgtc:
	cd mgtc; ./build.sh
.PHONY: mgtc index