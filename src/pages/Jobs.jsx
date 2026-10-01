import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Jobfilters from "../components/Jobfilters";
import Jobcard from "../components/Jobcard";
import Footer from "../components/Footer";
import EmptyState from "../components/EmptyState";
import ErrorMessage from "../components/ErrorMessage";

function Jobs() {
    return (
        <>
            <Navbar />

            <main>
                {/* Search */}
                <section className="job-search">
                    <h1>Find Jobs</h1>

                    <Searchbar />
                </section>

                {/* Search Results */}
                <section className="job-results">

                    {/* Filters */}
                    <aside className="filters">
                        <Jobfilters />
                    </aside>

                    {/* Results */}
                    <section className="results">
                        <div className="results-header">
                            <h2>Job Opportunities</h2>
                        </div>

                        <div className="job-list">
                            <Jobcard />
                            <Jobcard />
                            <Jobcard />
                        </div>

                    </section>
                 {/* EmptyState */}
                 {/* ErrorMessage */}
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Jobs;