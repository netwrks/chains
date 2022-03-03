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
