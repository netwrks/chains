
# ⛓️.dom(🎨)
allows you to interact with elements on the screen / within the chain's container.

### 🎨.clear()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clears the window, and returns it to its initial state.


### 🎨.button(*obj*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;creates a button element.


### 🎨.elem(*obj*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;creates an element.
```
⛓️.dom(🎨 =>
  🎨.elem(
    {
      class: string
      id: string
      type: elementType
      visible: boolean
    },
    ...
  )
)
```


### 🎨.elems
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;returns a list of available elements.
```
⛓️.dom(🎨 =>
  🎨.elems
)
```


### 🎨.template(*path_to_template_file*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;registers a template within the chain
```
⛓️.dom(🎨 =>
  🎨.template('./src/templates/template')
)
```


### 🎨.title(*string*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modify the browser / browser tab's title.
```
⛓️.dom(🎨 =>
  🎨.title('really cool new title')
)
```
