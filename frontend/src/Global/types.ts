export type EmployeeType = { type: String, payload: { empId: String },
    _id: String, };
export type FormEmployeeType = {
    _id: String,
    firstName: String,
    birthDate: Date,
    salary: Number,
    sex: String,
}
export type StoreType={employees: []}