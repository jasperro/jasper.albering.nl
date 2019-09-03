CSS_C=sassc

build:
	$(CSS_C) scss/main.scss css/main.css -t compressed

watch:
		  while inotifywait -r -e close_write scss ; do \
					 make build ; \
		  done

test:
	make
	make watch

clean:
	rm -rf css/main.css

.PHONY: test
