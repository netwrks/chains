## **⛓️.storage(📦)**
- data management
- data is managed within **📦.containers** as key / value pairs  
- **📦.containers** are wrapped instances **📦.types**  

#### 📦.add(*id*, *type*)
- add new storage container

#### 📦🔙⚙️.all()
- get all storage containers

#### 📦.addTo(*container_id*, *key*, *value*)
- add data to storage container

#### 📦.conn(*container_id*, *render*)
- attach renders to storage containers

#### 📦.conns
- active connections

#### 📦🔙⚙️.del(*container_id*)
- delete a storage container by id

#### 📦🔙⚙️.doc()
- display available documentation on 📦 in the console

#### 📦🔙⚙️.end()
- end injection / close link

#### 📦.get(*container_id*)
- get a storage container by id

#### 📦.types
- localStorage as *persist*
- object
- sessionStorage as *session*
