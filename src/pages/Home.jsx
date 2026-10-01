import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Jobcard from "../components/Jobcard";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />

            <main>
                {/* Hero / Introduction */}
                <section className="hero">
                    <h1>Find Your Next Opportunity</h1>

                    <p>
                        Discover job opportunities that match your
                        skills, interests, and career goals.
                    </p>

                    <Searchbar />
                </section>

                {/* Recent Jobs */}
                <section className="recent-jobs">
                    <h2>Recent Jobs</h2>

                    <div className="job-list">
                        <Jobcard />
                        <Jobcard />
                        <Jobcard />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Home;