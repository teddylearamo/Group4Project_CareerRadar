# Group4Project_CareerRadar

CareerRadar

A Personalized Job Discovery and Skill-Gap Platform

 CareerRadar is a web application designed to help job seekers discover employment opportunities, identify the skills required for their desired careers, save interesting jobs, and manage their job applications.

1. Introduction

CareerRadar is a web-based career and job discovery platform that connects job seekers with employment opportunities relevant to their interests, skills, experience, and career goals.

The application will allow users to search for jobs, filter opportunities by different criteria, view job descriptions, and access the original application links. As the project develops, users will be able to create accounts, save jobs, track applications, build skills profiles, and identify skills they need to learn to qualify for their preferred positions.

CareerRadar will initially focus on building a simple and responsive job search interface using React. Future development phases will introduce a Python Flask backend, a PostgreSQL database, user authentication, and personalized career tools.

The long-term goal is to make CareerRadar a centralized platform that supports users throughout their job search and career development journey.


2. Problem Statement

Finding suitable employment opportunities can be challenging because job vacancies are published across different websites, and job seekers may struggle to identify opportunities that match their qualifications and skills. Additionally,keeping track of applications and understanding the skills required for a desired career can be difficult. 
CareerRadar aims to address these challenges by providing a centralized platform where users can search and filter job opportunities, save relevant vacancies, track their applications, and identify skill gaps to guide their professional development.

3. Who Are Our Users?

->CareerRadar is being developed for people who are looking for employment opportunities or planning their next career move.

* University students and recent graduates

->People searching for internships, graduate trainee programmes, and entry-level jobs.

* Junior developers and early-career professionals

->People looking for junior software development, IT, and other professional opportunities.

* Career changers

->People exploring a new career path and identifying the skills they need to acquire.

* Freelancers and experienced professionals

->People seeking remote work, contract opportunities, or new full-time positions.



Primary target market

-> CareerRadar can initially serve job seekers in Kenya and other regions, 
with a particular emphasis on remote opportunities. The actual geographic coverage will depend on the job data source selected and the locations supported by its listings.




4. What We Will Build in Each Phase

The project will be developed in phases so that each stage delivers a working application before additional complexity is introduced.

*** Phase 1 — React Job Explorer (MVP)
React assignment

The first phase will focus on the frontend, job search functionality, and integration with an external jobs API.

* Feature 1: Job Search

Users can enter a job title, keyword, or skill, such as “Frontend Developer”, “Python”, or “Data Analyst”. The application retrieves matching job listings from the selected jobs API and displays the results.

* Feature 2: Job Filters

Users can filter available listings by employment type, job category, location or remote eligibility, and experience level where the API provides that information.

* Feature 3: Job Listings

The application displays job cards containing the job title, company, location, employment type, short description, and publication date when available.

* Feature 4: Job Details

Users can select a job to view its available description, requirements, salary information, and original job listing or application link.

* Feature 5: Apply for a Job

Users can follow the original job link to visit the employer's application page or the job board hosting the vacancy.

* Feature 6: Responsive Design

The interface will adapt to desktop, tablet, and mobile screens so users can search for jobs on different devices.

* Feature 7: Loading, Empty, and Error States

Users will see a loading indicator while jobs are retrieved, a helpful message when no jobs match, and an error message when a request fails.



NOTE/N/B
Phase 1 deliverable: A working React application that retrieves real job listings, lets users search and filter them, and links to the original vacancies.


Phase 2 — Flask Backend and PostgreSQL
***Backend and database

In this phase, CareerRadar will move from a primarily frontend application to a full-stack system.

Feature                                                     Description
Flask REST API		Creates backend endpoints that the React frontend can call.

PostgreSQL database       	Stores application data in a structured relational database.

Job data management     	Normalizes job data and optionally caches listings to reduce unnecessary API requests.

Search through backend    React sends search and filter parameters to Flask, which retrieves or processes matching jobs.

Data validation     	Validates incoming requests and handles invalid inputs.

Error handling	      Returns consistent error responses when requests or database operations fail.



NOTE /N/B
Phase 2 deliverable: React communicates with a Flask REST API, which connects to PostgreSQL and manages the application's data.



Phase 3 — User Accounts and Personal Dashboard
Personalization

Feature						Description

User registration			Users can create an account with their name, email, and password.

User login and logout		Users can securely access and leave their accounts.

My Profile		Users can manage their personal information, career interests, and skills.

Saved Jobs					Users can bookmark jobs and access them later.

Application Tracker                     Users can track applications using statuses such as Saved, Applied, Interview, Offer, and Rejected.

Personal Dashboard		Users can see saved jobs, application totals, and upcoming tasks.

NOTE/N/B
Phase 3 deliverable: Each registered user has a personal account where they can manage their job search.


Phase 4 — Skills and Career Development



Feature						Description		

Skills Profile			Users can add their existing technical and professional skills.

Job Skill Extraction		The system identifies skills mentioned in available job descriptions.

Skill-Gap Analysis		Compares a user's skills with the skills listed for a selected job.

Learning Checklist		Users can mark missing skills as skills they plan to learn or have learned.

Career Recommendations	Suggests relevant jobs based on the user's selected skills and interests.

Skill Progress			users can track their progress toward their career goals.



Phase 4 deliverable: A personalized career development tool that helps users understand job requirements and plan their learning.





5. Which External API Will Be Used?
Recommended API: Jobicy Remote Jobs API
Jobicy ->Public remote job listings API

Jobicy provides structured job listings that can be retrieved using HTTP requests. Its public API does not require an API key, making it convenient for a React learning project. 


Official API documentation

API documentation table

Requirement		Details

API name		Jobicy Remote Jobs API

Provider		Jobicy

Documentation link	jobicy.com/jobs-rss-feed 

API endpoint		https://jobicy.com/api/v2/remote-jobs

Request method		GET

Response format		JSON

Authentication		No API key required for public job listings

Feature supported	Retrieve and filter remote job listings

Information needed	Job title, company, job description, location eligibility, job type, experience level, salary when provided, publication date, and listing URL

API key			Not required for the public endpoint

Accessibility test	Documentation and endpoint are identified; live API response is not yet confirmed from this session

The endpoint and authentication details are documented by Jobicy. The API supports filters such as count, geo, industry, and tag. 


How CareerRadar will use the API

->The React application will send a GET request to Jobicy, receive a JSON response, and display the returned jobs in the interface.

Example API request:

https://jobicy.com/api/v2/remote-jobs?count=10&tag=python

This requests up to 10 recent remote job listings matching the keyword python. The response contains a jobs array with fields that can be used to build the job cards. 


Example of the information CareerRadar will use:

{
  "jobTitle": "Frontend Developer",
  "companyName": "Example Company",
  "jobGeo": "Anywhere",
  "jobType": ["full-time"],
  "jobLevel": "Junior",
  "jobExcerpt": "Build modern web applications.",
  "url": "https://jobicy.com/jobs/example-role"
}

N/B
This is an illustrative example of the response structure, not a verified live vacancy.





6. What Pages Will Our Application Have?

CareerRadar will contain the following pages. Some belong to the first React release, while others will be introduced as the project grows.

1. Home Page

Phase 1
Introduces CareerRadar, explains its purpose, and provides a prominent job search bar. It can also show featured or recently retrieved jobs.

2. Job Search Page

Phase 1
Displays job results and search filters. Users can search by keyword and narrow results by available job attributes.

3. Job Details Page

Phase 1
Shows the full available job description, employer, requirements, location, salary when provided, and an external link to the original vacancy.

4. About Page

Phase 1
Explains CareerRadar's mission, target users, key features, and the problem the platform aims to solve.

5. Login and Registration Pages

Phase 3
Allow users to register, sign in, and access their personal CareerRadar accounts.

6. Dashboard Page

Phase 3
Provides an overview of saved jobs, application statuses, and upcoming application tasks.

7. My Profile Page

Phase 3
Allows users to maintain their career interests, education, experience, and skills.

8. Saved Jobs and Applications Page

Phase 3
Shows bookmarked opportunities and enables users to record and update their application progress.

9. Skills and Career Development Page

Phase 4
Compares user skills with job requirements and provides a checklist of skills to develop.
Shared elements across pages



N/B
The application will also have reusable interface elements:

** Navigation bar: Links to Home, Jobs, About, and account pages when available.

** Footer: Contains useful links, project information, and the job data source attribution.

** Search bar: Allows users to search without returning to the home page.

** Job card: Displays a consistent summary of each vacancy.

** Loading and error components: Provide feedback when retrieving data.

** Protected routes: In later phases, restrict personal pages to authenticated users.



8. Proposed Technology Stack

Layer				Technology		Purpose

Frontend			React			Builds the user interface

Programming language	JavaScript		Implements frontend logic

Styling				CSS			Responsive design and layout

Routing			React Router		Navigates between pages

API requests			Fetch API		Retrieves external job data

Backend			Python + Flask		Provides application endpoints

Database			PostgreSQL			Stores users, saved jobs, and applications

Database integration		SQLAlchemy			Connects Flask to PostgreSQL

Authentication	   	 Flask-based authentication		Manages user sessions or tokens


Version control			Git and GitHub		Tracks code changes







9. Proposed Database Tables

These tables are planned for the backend phases.

Table		Purpose

users		Stores user account details

jobs		Stores normalized job listing data

saved_jobs	Connects users to their bookmarked jobs

applications	Tracks applications and their statuses

user_skills	Stores skills associated with each user

job_skills	Stores skills extracted from job requirements

Learning_goals 	Tracks skills a user plans to learn



10. Proposed Application Architecture


->React Frontend

Home • Search • Job Details • Dashboard

->Flask REST API

Search • Authentication • Saved Jobs • Applications

->PostgreSQL

Users • Jobs • Saved Jobs • Applications • Skills

->External Job API

Jobicy listings and original job links







11. Functional Requirements and Success Criteria

CareerRadar Phase 1 will be considered complete when the following requirements work:

Phase 1 

Users can open the home page and navigate to job search.
Users can enter a keyword and retrieve job listings.
Job cards display the available job information correctly.
Users can apply the supported filters.
Users can open job details and follow the original listing link.
The application handles loading, empty results, and API errors.
The layout works on mobile and desktop screens.
The project runs locally using documented installation steps.


12. Conclusion

CareerRadar is a job discovery and career development application that will help users find relevant opportunities and organize their job search. 
The first phase will deliver a functional React job explorer using an external job listings API. Subsequent phases will expand the application with a Flask backend, 
PostgreSQL database, user accounts, saved jobs, application tracking, and personalized skill-gap analysis.



