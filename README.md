# mongo-minimal-lab
Minimal MongoDB lab project for learning and testing  
Includes a seed script and an optional mongo-express UI

## Run with Docker Compose
```bash
docker-compose up -d
Mongo: mongodb://admin:admin123@localhost:27017/

UI (optional): http://localhost:8081/

Verify with mongosh:
docker exec -it mongo mongosh -u admin -p admin123 --authenticationDatabase admin

Then:
show dbs
use labdb
db.students.find()

Project Structure:
├── docker-compose.yml      # Runs MongoDB + optional mongo-express
├── init.js                 # Seeds labdb.students with sample docs
├── README.md               # Usage and verification steps
├── output_show_dbs.txt     # Sample output of `show dbs`
└── output_students_find.txt# Sample output of `db.students.find()`

---

### 
```bash
# start
docker-compose up -d

# logs
docker-compose logs -f mongo

# stop
docker-compose down
