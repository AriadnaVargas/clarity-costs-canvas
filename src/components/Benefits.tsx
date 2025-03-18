
import { TrendingUp, AlertCircle, DollarSign, Clock, CheckCircle, LineChart } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Save valuable time",
      description: "Reduce financial analysis time by 30% with automated reports and intuitive visualizations.",
      delay: "0.1s"
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Make faster decisions",
      description: "Clear, actionable reports delivered in seconds so you can respond to market changes immediately.",
      delay: "0.3s"
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-primary" />,
      title: "Hassle-free analysis",
      description: "You don't need to be an accounting expert to understand your profit margins and cost metrics.",
      delay: "0.5s"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Track performance trends",
      description: "Monitor your business growth and identify areas for improvement with historical data analysis.",
      delay: "0.7s"
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Optimize your pricing",
      description: "Analyze costs per item or service to set the perfect price point for maximum profitability.",
      delay: "0.9s"
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Visual profit insights",
      description: "Transform complex financial data into easy-to-understand visual reports and actionable insights.",
      delay: "1.1s"
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center reveal-animation mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4 animate-fade-in">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in text-balance">
            Optimize your profitability with clear, actionable metrics
          </h2>
          <p className="text-lg text-foreground/80 animate-fade-in text-balance">
            Our platform helps small businesses make better financial decisions without the complexity of traditional accounting software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glassmorphism rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ 
                opacity: 0,
                animation: `fade-in 0.5s ease-out forwards`,
                animationDelay: benefit.delay
              }}
            >
              <div className="bg-primary/10 rounded-full p-3 inline-block mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-foreground/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
