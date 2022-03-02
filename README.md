# ⛓️
chains is not a **framework**  
chains is a **way of life**


# ⛓️.dom(🎨)
allows you to interact with elements on the screen / within the chain's container.

#### 🎨.clear()
clears the window, and returns it to its initial state.

#### 🎨.button(*obj*)
creates a button element.

#### 🎨.elem(*obj*)
creates an element.
```
obj = {
  class: string
  id: string
  type: elementType
  visible: boolean
}
```
##### how do i use?
```
⛓️.dom(🎨 =>
  🎨.elem(
    { id: string, type: elementType },
    { id: string, type: elementType },
    ...
  )
)
```

#### 🎨.elems
returns a list of available elements.
##### how do i use?
```
⛓️.dom(🎨 =>
  🎨.elems
)
```
#### 🎨.template(*path_to_template_file*)
registers a template within the chain

#### 🎨.title(*string*)
modify the browser / browser tab's title.
##### how do i use?

```
⛓️.dom(🎨 =>
  🎨.title('really cool new title')
)
```

## ⛓️.done()
ends the chain it's attached to.

# ⛓️.renders(📿)
render management

#### 📿.add(*render_id*, *render_type*)
add new render

#### 📿🔙⚙️.del(*render_id*)
delete a render by id

#### 📿🔙⚙️.doc()
display available documentation on 📿 in the console

#### 📿🔙⚙️.end()
end injection / close link

#### 📿.run(*render_id*)
run a render

# ⛓️.shortcuts(❤️)
chainlink shortcut management  

⛓️ are sequences of 🔗.  
what is a sequence of ⛓️s?  
... to be honest i couldnt figure out a great name for them so for now im using **shortcuts**

## available methods
#### ❤️🔙⚙️.add(*shortcut_id*, *chain_instance*)
add new shortcut

#### ❤️🔙⚙️.all()
get all shortcuts

#### ❤️🔙⚙️.del(*shortcut_id*)
delete a shortcut by id

#### ❤️🔙⚙️.doc()
display available documentation on ❤️ in the console

#### ❤️🔙⚙️.get(*shortcut_id*)
get a shortcut by id

# ⛓️.storage(📦)
data management  

every knows what a key / value pair is right?  great.  
*all data stored within the chain is stored as key value pairs*

## concept:  
data is managed within **📦.containers** as key / value pairs  
**📦.containers** are wrapped instances **📦.types**  
```
📦.types = {
  object: object
  persist: localStorage
  session: sessionStorage
}
```

## available methods
#### 📦.add(*id*, *type*)
add new storage container

#### 📦🔙⚙️.all()
get all storage containers

#### 📦.addTo(*container_id*, *key*, *value*)
add data to storage container

#### 📦.conn(*container_id*, *render*)
attach renders to storage containers

#### 📦.conns
active connections

#### 📦🔙⚙️.del(*container_id*)
delete a storage container by id

#### 📦🔙⚙️.doc()
display available documentation on 📦 in the console

#### 📦🔙⚙️.end()
end injection / close link

#### 📦.get(*container_id*)
get a storage container by id

# ⛓️.util
utility methods

misc. useful methods

#### ⛓️⚙️.bruh()
the standard bruh command

#### ⛓️⚙️.elems()
array of active elements

#### ⛓️⚙️.end()
finish & proceed to next link

#### ⛓️⚙️.links()
object of active chain links

#### ⛓️⚙️.panel()
panel generator

#### ⛓️⚙️.start()
start the chain

#### ⛓️⚙️.test()
test the chain

# ⛓️.watch()
observation manager

#### ⛓️⚙️.elem(*elem_id*)
observe an element
