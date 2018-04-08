props:
	@python -c 'import yaml; import io; fd = io.open("ipynblog.yaml"); props=yaml.load(fd); print(props)'

render:
	ipynblog-render --config ./ipynblog.yaml
	@echo 'done rendering'
