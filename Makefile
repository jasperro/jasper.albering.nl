CSS_C=/usr/bin/sassc

build:
	$(CSS_C) css/scss/main.scss css/main.css -t compressed

watch:
		  while inotifywait -r -e close_write css/scss ; do \
					 make build ; \
		  done

test:
	make
	make watch

clean:
	rm -rf css/main.css

.PHONY: test
