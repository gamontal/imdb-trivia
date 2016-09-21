test: ;@echo "Initializing tests....."; \
       ./node_modules/.bin/jshint --exclude ./node_modules && ./node_modules/.bin/mocha --harmony -t 100000

.PHONY: test