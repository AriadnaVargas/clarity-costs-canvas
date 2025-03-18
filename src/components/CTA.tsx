
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, DollarSign, TrendingUp } from "lucide-react";

const CTA = () => {
  return (
    <section id="pricing" className="section-padding bg-primary/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 lg:pr-12 reveal-animation">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold animate-fade-in">
              Start Today
            </span>
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in text-balance">
              Ready to optimize your business profitability?
            </h2>
            <p className="text-lg text-foreground/80 animate-fade-in text-balance">
              Join thousands of small business owners who have transformed their financial decision-making with our intuitive platform.
            </p>
            
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">14-day free trial</h4>
                  <p className="text-sm text-foreground/70">No credit card required. Full access to all features.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                  <DollarSign className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Simple, transparent pricing</h4>
                  <p className="text-sm text-foreground/70">Starting at just $29/month for small businesses.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                  <LineChart className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">ROI in first month</h4>
                  <p className="text-sm text-foreground/70">Most customers see positive ROI within 30 days.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-2 animate-fade-in">
              <Button size="lg" className="group">
                Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="relative glassmorphism p-8 rounded-2xl animate-fade-in lg:animate-fade-in-right">
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold mb-6">Pricing Plans</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-xl">Starter</h4>
                    <p className="text-sm text-foreground/70">Perfect for new businesses</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold">$29</span>
                    <span className="text-sm text-foreground/70">/month</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm">Up to 100 products/services</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm">Basic reporting features</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full">Choose Plan</Button>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 shadow-sm relative">
                <div className="absolute -top-3 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-xl">Business</h4>
                    <p className="text-sm text-foreground/70">For growing companies</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold">$79</span>
                    <span className="text-sm text-foreground/70">/month</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm">Unlimited products/services</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm">Advanced analytics & forecasting</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm">Custom reporting</span>
                  </li>
                </ul>
                
                <Button className="w-full">Choose Plan</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
