# odin-inventory-application

TODO

- [x] Set up GIT
- [x] list models incl diagram
- [x] Create skeleton with express-generator
- [x] Create MongoDB namespace and connection
- [x] Set up schemas and models
- [x] Populate db
- [ ] Set up routes and controllers
- [ ] Create read views
- [ ] Create forms and controllers for CRUD actions
- [ ] Deploy

Models

Items

- name: String
- description: String
- category: category [0..*]
- price: Number, float
- number_in_stock: Number, Int
- url: String

Category

- name: String
- description: String
- url: String
