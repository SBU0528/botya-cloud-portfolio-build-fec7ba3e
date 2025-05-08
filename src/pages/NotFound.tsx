
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-softgray">
        <div className="text-center px-4 py-16 animate-fade-up">
          <h1 className="text-7xl md:text-9xl font-bold font-montserrat text-navy mb-4">404</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
          <Button href="/" variant="primary" size="lg">
            Return to Home
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
