// MongoDB init script for mongo-minimal-lab
// Creates labdb and seeds a minimal students collection

const dbName = "labdb";
const cName = "students";

const db = db.getSiblingDB(dbName);

db.createCollection(cName);

db[cName].insertMany([
  { name: "Daniel",  course: "DevOps",  score: 88 },
  { name: "Maya",    course: "Cloud",   score: 92 },
  { name: "Ron",     course: "Kubernetes", score: 81 }
]);

print(`✅ Seeded ${dbName}.${cName} with sample documents`);
