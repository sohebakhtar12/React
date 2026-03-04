import React, { useState } from "react";

function StudentsList() {

    const [students, setStudents] = useState([]);
    const [passingYear, setPassingYear] = useState();
    const [fullName, setFullName] = useState("");
    const [collegeName, setCollegeName] = useState("");
    const [branch, setBranch] = useState("");

    function handleAddStudent() {

        if(fullName.trim() === "" || collegeName.trim() === "" || branch.trim() === "") {
            return; // prevent empty values
        }

        const newStudent = {
            year: passingYear,
            name: fullName,
            college: collegeName,
            branch: branch
        };

        setStudents(s => [...s, newStudent]);

        // Reset inputs
        setPassingYear(new Date().getFullYear());
        setFullName("");
        setCollegeName("");
        setBranch("");
    }

    function handleRemoveStudent(index) {
        setStudents(s => s.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Students</h2>

            <ul>
                {students.map((student, index) =>
                    <li key={index} onClick={() => handleRemoveStudent(index)}>
                        {student.year} - {student.name} - {student.college} - {student.branch}
                    </li>
                )}
            </ul>

            <input
                type="number"
                value={passingYear}
                onChange={(e) => setPassingYear(e.target.value)}
                placeholder="Passing Year"
            /><br/>

            <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Student Full Name"
            /><br/>

            <input
                type="text"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                placeholder="College Name"
            /><br/>

            <input
                type="text"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                placeholder="Branch (CSE, IT, ECE...)"
            /><br/>

            <button onClick={handleAddStudent}>Add Student</button>
        </div>
    );
}

export default StudentsList;