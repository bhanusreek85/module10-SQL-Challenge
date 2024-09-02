BEGIN;

INSERT INTO departments (dept_name)
VALUES('IT'),
('Legal'),
('Research and Development'),
('Operations');


INSERT INTO roles (job_title, salary, deptid)
VALUES
('Software Engineer', 80000, 1),
('System Administrator', 70000, 1),
('Legal Advisor', 90000, 2),
('Paralegal', 60000, 2),
('Research Scientist', 95000, 3),
('Lab Technician', 55000, 3),
('Operations Manager', 85000, 4),
('Operations Coordinator', 60000, 4);


INSERT INTO employees (first_name, last_name, role_id, manager)
VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Robert', 'Brown', 3, NULL),
('Emily', 'Davis', 4, 3),
('Michael', 'Wilson', 5, NULL),
('Sarah', 'Miller', 6, 5),
('David', 'Moore', 7, NULL),
('Laura', 'Taylor', 8, 7);

COMMIT;

