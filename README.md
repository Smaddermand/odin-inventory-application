# odin-inventory-application

TODO

- [x] Set up GIT
- [x] list models incl diagram
- [ ] Create skeleton with express-generator
- [ ] Create MongoDB
- [ ] Set up schemas and models
- [ ] Populate db
- [ ] Set up routes and controllers
- [ ] Create read views
- [ ] Create forms and controllers for CRUD actions
- [ ] Deploy

Models

Items

- name: String
- description: String
- category: category [0..*]
- price: Int
- number_in_stock: Int
- url: String

Category

- name: String
- description: String
- url: String
