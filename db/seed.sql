INSERT INTO department (id, department_name)
VALUES (1, "Admininistration"),
       (2,"Business Development"),
       (3,"Product"),
       (4,"Sales"),
       (5,"IT");

INSERT INTO employee_role (id, title, salary, department_id)
VALUES (1, "Admin", 85000, 1),
       (2, "Finance", 100000, 1),
       (3, "CEO", 500000, 2),
       (4, "Product Engineer", 110000, 3),
       (5, "Sales Lead", 120000, 4),
       (6, "IT Support", 75000, 5);



INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1, "Starry", "Starseed", 1),
       (2, "Roanoke", "Ragingbull", 2),
       (3, "Kiara", "Cole", 3),
       (4, "Hiram", "Maxim", 4),
       (5, "Robert", "Kiyosaki", 5),
       (6, "Lex", "Freedman", 6);