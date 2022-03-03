# ⛓️
chains is not a **framework**  
chains is a **way of life**

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


# ⛓️.done()
ends the chain it's attached to.


# ⛓️.renders(📿)
render management


### 📿.add(*render_id*, *render_type*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;add new render


### 📿🔙⚙️.del(*render_id*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delete a render by id


### 📿🔙⚙️.doc()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display available documentation on 📿 in the console


### 📿🔙⚙️.end()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end injection / close link


### 📿.run(*render_id*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;run a render


# ⛓️.shortcuts(❤️)
chainlink shortcut management  

⛓️ are sequences of 🔗.  
what is a sequence of ⛓️s?  
... to be honest i couldnt figure out a great name for them so for now im using **shortcuts**

### ❤️🔙⚙️.add(*shortcut_id*, *chain_instance*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;add new shortcut


### ❤️🔙⚙️.all()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;get all shortcuts


### ❤️🔙⚙️.del(*shortcut_id*)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delete a shortcut by id


### ❤️🔙⚙️.doc()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display available documentation on ❤️ in the console


### ❤️🔙⚙️.get(*shortcut_id*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;get a shortcut by id


# ⛓️.storage(📦)
**data management**

data is managed within **📦.containers** as key / value pairs  
**📦.containers** are wrapped instances **📦.types**  
```
📦.types = {
  object: object
  persist: localStorage
  session: sessionStorage
}
```

### 📦.add(*id*, *type*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;add new storage container


### 📦🔙⚙️.all()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;get all storage containers


### 📦.addTo(*container_id*, *key*, *value*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;add data to storage container


### 📦.conn(*container_id*, *render*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attach renders to storage containers


### 📦.conns
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active connections


### 📦🔙⚙️.del(*container_id*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delete a storage container by id


### 📦🔙⚙️.doc()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display available documentation on 📦 in the console


### 📦🔙⚙️.end()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end injection / close link


### 📦.get(*container_id*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;get a storage container by id


# ⛓️.util
utility methods

misc. useful methods

### ⛓️⚙️.bruh()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the standard bruh command


### ⛓️⚙️.elems()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array of active elements


### ⛓️⚙️.end()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;finish & proceed to next link


### ⛓️⚙️.links()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;object of active chain links


### ⛓️⚙️.panel()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;panel generator


### ⛓️⚙️.start()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start the chain


### ⛓️⚙️.test()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test the chain


# ⛓️.watch()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;observation manager


### ⛓️⚙️.elem(*elem_id*)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;observe an element
