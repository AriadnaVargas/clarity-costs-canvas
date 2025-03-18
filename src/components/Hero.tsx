
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, DollarSign, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-animation space-y-6 max-w-2xl">
            <div className="inline-block animate-fade-in">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
                Business Analytics Tool
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in text-balance">
              Visualize and optimize your business profitability in real time
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 animate-fade-in text-balance">
              Get clear reports on your profit margins and make smarter decisions without needing to be an accounting expert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in">
              <Button size="lg" className="group">
                Start Free Trial
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                See Demo
              </Button>
            </div>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">30% Time Saving</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Clear Metrics</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Real-time Data</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in lg:animate-fade-in-right">
            <div className="glassmorphism rounded-2xl p-1 shadow-xl">
              <div className="bg-white rounded-xl overflow-hidden">
                <img 
                  src="https://placehold.co/800x600/f5f9ff/e2e8f0?text=Dashboard+Preview" 
                  alt="Dashboard Preview" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
