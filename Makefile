CSS_C=sassc

build:
	$(CSS_C) src/scss/main.scss css/main.css -t compressed

watch:
		  while inotifywait -r -e close_write src/scss ; do \
					 make build ; \
		  done

test:
	make
	make watch

clean:
	rm -rf css/main.css

.PHONY: test
