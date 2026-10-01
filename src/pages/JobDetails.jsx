import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function JobDetails() {
    return (
        <>
            <Navbar />

            <main>
                {/* Job Header */}
                <section className="job-header">
                    <h1>Frontend Developer</h1>

                    <p>Example Company</p>
                    <p>Remote</p>
                </section>

                {/* Job Information */}
                <section className="job-information">
                    <div>
                        <strong>Employment Type</strong>
                        <p>Full-time</p>
                    </div>

                    <div>
                        <strong>Experience Level</strong>
                        <p>Junior</p>
                    </div>

                    <div>
                        <strong>Salary</strong>
                        <p>Not specified</p>
                    </div>
                </section>

                {/* Description */}
                <section className="job-description">
                    <h2>Job Description</h2>

                    <p>
                        Job description will appear here.
                    </p>
                </section>

                {/* Requirements */}
                <section className="job-requirements">
                    <h2>Requirements</h2>

                    <ul>
                        <li>Requirement 1</li>
                        <li>Requirement 2</li>
                        <li>Requirement 3</li>
                    </ul>
                </section>

                {/* Application */}
                <section className="job-application">
                    <a href="#">
                        Apply for this Job
                    </a>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default JobDetails;