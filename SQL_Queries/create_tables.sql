
--Login table
CREATE TABLE report.login
(
	LoginID int IDENTITY(1,1) primary key,
	Username varchar(500),
	Password nvarchar(max),
	Role varchar(50),
	CreatedAt DATETIME DEFAULT GETDATE(),
	ActiveYN bit DEFAULT 1
)
--admin table
CREATE TABLE report.admin
(
	AdminID int IDENTITY(1,1) primary key,
	Name varchar(500),
	Username varchar(500),
	Password nvarchar(max),
	CreatedAt DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE(),
	ActiveYN bit DEFAULT 1
)
--teacher table
CREATE TABLE report.teacher
(
	TeacherID int IDENTITY(1,1) primary key,
	Name varchar(500),
	Username varchar(500),
	Password nvarchar(max),
	CreatedAt DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE(),
	ActiveYN bit DEFAULT 1
)
--student table
CREATE TABLE report.student
(
	StudentID int IDENTITY(1,1) primary key,
	FirstName varchar(500),
	LastName varchar(500),
	Username varchar(500),
	Password nvarchar(max),
	CreatedAt DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE(),
	ActiveYN bit DEFAULT 1
)

--class table
CREATE TABLE report.class
(
	ClassID int IDENTITY(1,1) primary key,
	Name varchar(500),
	Year varchar(500),
	NumberStudents int DEFAULT 0,
	CreatedAt DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE()
)
--subject table
CREATE TABLE report.subject
(
	SubjectID int IDENTITY(1,1) primary key,
	Name varchar(500),
	Semester varchar(500),
	Credits varchar(500),
	CreatedAt DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE(),
) 
--document table
CREATE TABLE report.document
(
	DocumentID int IDENTITY(1,1) primary key,
	FileType varchar(500),
	Size int,
	DateOfPublication DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE()
)
--classTeacher table
CREATE TABLE report.class_teacher
(
	ID int IDENTITY(1,1) primary key,
	ClassID int FOREIGN KEY REFERENCES report.class(ClassID),
	TeacherID int FOREIGN KEY REFERENCES report.teacher(TeacherID)
)
--subject_teacher table
CREATE TABLE report.subject_teacher
(	
	ID int IDENTITY(1,1) primary key,
	SubjectID int FOREIGN KEY REFERENCES report.subject(SubjectID),
	TeacherID int FOREIGN KEY REFERENCES report.teacher(TeacherID),
	ClassID int FOREIGN KEY REFERENCES report.class(ClassID)
)
--class_subject table
CREATE TABLE report.class_student
(
	ID int IDENTITY(1,1) primary key,
	ClassID int FOREIGN KEY REFERENCES report.class(ClassID),
	StudentID int FOREIGN KEY REFERENCES report.student(StudentID)
)
--Document_details table
CREATE TABLE report.document_details
(
	ID int IDENTITY(1,1) primary key,
	DocumentID int FOREIGN KEY REFERENCES report.document(DocumentID),
	TeacherID int FOREIGN KEY REFERENCES report.teacher(TeacherID),
	SubjectID int FOREIGN KEY REFERENCES report.subject(SubjectID),
	StudentID int FOREIGN KEY REFERENCES report.student(StudentID)
)

--uploads table
CREATE TABLE report.uploads
(
	ID int IDENTITY(1,1) PRIMARY KEY,
	TeacherID int FOREIGN KEY REFERENCES report.teacher(TeacherID),
	SubjectID int FOREIGN KEY REFERENCES report.subject(SubjectID),
	DocumentID int FOREIGN KEY REFERENCES report.document(DocumentID),
	ClassID int FOREIGN KEY REFERENCES report.class(ClassID),
	ActiveYN bit default 1,
	CreatedAt DATETIME DEFAULT GETDATE(),
	EditedAt DATETIME DEFAULT GETDATE(),
)
--mapping table
CREATE TABLE report.mapping
(
	ID int PRIMARY KEY,
	Name varchar(500)
)