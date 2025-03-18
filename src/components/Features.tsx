
import { useEffect, useRef } from "react";
import { BarChart4, PieChart, LineChart, ArrowUpRight, CheckCircle } from "lucide-react";

const Features = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center reveal-animation mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4 animate-fade-in">
            Core Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in text-balance">
            Visualize your profit margins in seconds
          </h2>
          <p className="text-lg text-foreground/80 animate-fade-in text-balance">
            Our platform provides the tools you need to track, analyze, and optimize your business financials.
          </p>
        </div>

        {/* Feature 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20" ref={(el) => (featureRefs.current[0] = el)}>
          <div className="order-2 lg:order-1">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Cost Breakdown
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Detailed cost metrics for every item or service
            </h3>
            <p className="text-lg text-foreground/80 mb-6 text-balance">
              Track expenses, categorize costs, and identify where your money is going with beautiful visual analytics.
            </p>
            
            <ul className="space-y-3">
              {['Automatic cost allocation', 'Category-based expense tracking', 'Supplier cost comparison', 'Historical expense trends'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="glassmorphism rounded-2xl p-1 shadow-xl">
              <div className="bg-white rounded-xl overflow-hidden relative aspect-[4/3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart4 className="w-24 h-24 text-primary opacity-70" />
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20" ref={(el) => (featureRefs.current[1] = el)}>
          <div className="relative">
            <div className="glassmorphism rounded-2xl p-1 shadow-xl">
              <div className="bg-white rounded-xl overflow-hidden relative aspect-[4/3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PieChart className="w-24 h-24 text-primary opacity-70" />
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
          </div>
          
          <div>
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Profit Analysis
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Clear and easy to understand profit reports
            </h3>
            <p className="text-lg text-foreground/80 mb-6 text-balance">
              Get instant insights into your profit margins with intuitive visualizations designed for business owners, not accountants.
            </p>
            
            <ul className="space-y-3">
              {['Product/service profitability breakdown', 'Margin analysis by customer segment', 'Real-time P&L statements', 'Custom reporting options'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={(el) => (featureRefs.current[2] = el)}>
          <div className="order-2 lg:order-1">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Performance Tracking
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Track performance trends in real-time
            </h3>
            <p className="text-lg text-foreground/80 mb-6 text-balance">
              Monitor your business growth over time and identify opportunities to optimize your operations and pricing.
            </p>
            
            <ul className="space-y-3">
              {['Year-over-year comparison', 'Growth metrics dashboard', 'Pricing optimization suggestions', 'Inventory cost analysis'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="glassmorphism rounded-2xl p-1 shadow-xl">
              <div className="bg-white rounded-xl overflow-hidden relative aspect-[4/3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <LineChart className="w-24 h-24 text-primary opacity-70" />
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
