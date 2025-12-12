import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SIZE_CHART } from "@/lib/constants";
import { Ruler, CircleDot, Info } from "lucide-react";

const SizeGuide = () => {
  const [bandSize, setBandSize] = useState("");
  const [bustSize, setBustSize] = useState("");
  const [calculatedSize, setCalculatedSize] = useState<{ band: string; cup: string; sister: string[] } | null>(null);

  const calculateBraSize = () => {
    const band = parseFloat(bandSize);
    const bust = parseFloat(bustSize);

    if (isNaN(band) || isNaN(bust) || band <= 0 || bust <= 0) {
      return;
    }

    // Round band to nearest even number
    const roundedBand = Math.round(band / 2) * 2;
    const cupDifference = bust - band;

    let cupSize = "A";
    if (cupDifference < 1) cupSize = "AA";
    else if (cupDifference < 2) cupSize = "A";
    else if (cupDifference < 3) cupSize = "B";
    else if (cupDifference < 4) cupSize = "C";
    else if (cupDifference < 5) cupSize = "D";
    else if (cupDifference < 6) cupSize = "DD";
    else if (cupDifference < 7) cupSize = "E";
    else cupSize = "F";

    // Calculate sister sizes
    const cupOrder = ["AA", "A", "B", "C", "D", "DD", "E", "F"];
    const cupIndex = cupOrder.indexOf(cupSize);
    const sisterSizes = [];
    
    if (cupIndex > 0 && roundedBand < 42) {
      sisterSizes.push(`${roundedBand + 2}${cupOrder[cupIndex - 1]}`);
    }
    if (cupIndex < cupOrder.length - 1 && roundedBand > 28) {
      sisterSizes.push(`${roundedBand - 2}${cupOrder[cupIndex + 1]}`);
    }

    setCalculatedSize({ band: roundedBand.toString(), cup: cupSize, sister: sisterSizes });
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Perfect Fit
          </p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Size Guide</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Finding your perfect fit is the key to comfort and confidence. Follow our comprehensive guide
            to discover your ideal size.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* What You'll Need */}
            <div className="mb-12 p-6 bg-gold/5 border border-gold/20">
              <h3 className="font-medium flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-gold" />
                Before You Start
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Use a soft, flexible measuring tape (not a metal one)</li>
                <li>• Wear an unpadded bra or no bra for the most accurate measurements</li>
                <li>• Stand in front of a mirror to ensure the tape is level</li>
                <li>• Take measurements in inches for best results</li>
                <li>• Measure 2-3 times to ensure accuracy</li>
              </ul>
            </div>

            {/* How to Measure */}
            <div className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">How to Measure</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Band Measurement */}
                <div className="bg-secondary/30 p-8 border border-border">
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    <Ruler className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl mb-2">Step 1: Band Size</h3>
                  <p className="text-xs text-gold uppercase tracking-wider mb-4">Underbust Measurement</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Stand up straight and wrap a soft measuring tape snugly around your ribcage, directly under your bust. 
                    The tape should be level all the way around and lie flat against your skin.
                  </p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <span>Keep the tape snug but comfortable—you should be able to fit one finger underneath</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <span>Make sure the tape is parallel to the floor and doesn't ride up your back</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <span>Round to the nearest whole number (if odd, round up to the next even number)</span>
                    </div>
                  </div>
                </div>

                {/* Bust Measurement */}
                <div className="bg-secondary/30 p-8 border border-border">
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    <CircleDot className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl mb-2">Step 2: Bust Size</h3>
                  <p className="text-xs text-gold uppercase tracking-wider mb-4">Fullest Point Measurement</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Keeping the tape around your back at band level, measure around the fullest part of your bust. 
                    Don't pull too tight—the tape should rest gently on the skin without compressing breast tissue.
                  </p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <span>Stand with arms relaxed at your sides in a natural position</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <span>Measure at the fullest part of your bust (usually at nipple level)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <span>Round to the nearest whole number</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gold/5 border border-gold/20">
                <h4 className="font-medium mb-3">Calculate Your Cup Size</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Subtract your band measurement from your bust measurement. The difference determines 
                  your cup size:
                </p>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2 text-center text-sm">
                  <div className="bg-background p-2">
                    <p className="font-medium">0-1"</p>
                    <p className="text-muted-foreground text-xs">AA/A</p>
                  </div>
                  <div className="bg-background p-2">
                    <p className="font-medium">1-2"</p>
                    <p className="text-muted-foreground text-xs">A/B</p>
                  </div>
                  <div className="bg-background p-2">
                    <p className="font-medium">2-3"</p>
                    <p className="text-muted-foreground text-xs">B/C</p>
                  </div>
                  <div className="bg-background p-2">
                    <p className="font-medium">3-4"</p>
                    <p className="text-muted-foreground text-xs">C/D</p>
                  </div>
                  <div className="bg-background p-2">
                    <p className="font-medium">4-5"</p>
                    <p className="text-muted-foreground text-xs">D/DD</p>
                  </div>
                  <div className="bg-background p-2">
                    <p className="font-medium">5-6"</p>
                    <p className="text-muted-foreground text-xs">DD/E</p>
                  </div>
                  <div className="bg-background p-2">
                    <p className="font-medium">6-7"</p>
                    <p className="text-muted-foreground text-xs">E/F</p>
                  </div>
                  <div className="bg-background p-2">
                    <p className="font-medium">7+"</p>
                    <p className="text-muted-foreground text-xs">F+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bra Size Calculator */}
            <div className="mb-16 bg-secondary/30 p-8 border border-border">
              <h2 className="font-serif text-2xl mb-6 text-center">Bra Size Calculator</h2>
              <p className="text-muted-foreground text-center mb-8 max-w-md mx-auto">
                Enter your measurements in inches to find your recommended size.
              </p>

              <div className="max-w-md mx-auto">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-sm font-medium block mb-2">Band Size (inches)</label>
                    <input
                      type="number"
                      step="0.5"
                      value={bandSize}
                      onChange={(e) => setBandSize(e.target.value)}
                      placeholder="e.g., 34"
                      className="w-full h-12 px-4 bg-background border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-2">Bust Size (inches)</label>
                    <input
                      type="number"
                      step="0.5"
                      value={bustSize}
                      onChange={(e) => setBustSize(e.target.value)}
                      placeholder="e.g., 37"
                      className="w-full h-12 px-4 bg-background border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                </div>

                <Button
                  variant="luxury"
                  className="w-full"
                  onClick={calculateBraSize}
                  disabled={!bandSize || !bustSize}
                >
                  Calculate My Size
                </Button>

                {calculatedSize && (
                  <div className="mt-6 p-6 bg-gold/10 text-center">
                    <p className="text-sm text-muted-foreground mb-2">Your Recommended Size</p>
                    <p className="font-serif text-4xl text-gold mb-4">
                      {calculatedSize.band}{calculatedSize.cup}
                    </p>
                    {calculatedSize.sister.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gold/20">
                        <p className="text-xs text-muted-foreground mb-2">Sister Sizes to Try</p>
                        <div className="flex justify-center gap-4">
                          {calculatedSize.sister.map((size) => (
                            <span key={size} className="text-sm font-medium">{size}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground mt-4">
                      This is an estimate. We recommend trying on for the perfect fit.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Size Charts */}
            <div className="space-y-12">
              {/* Bra Size Chart */}
              <div>
                <h2 className="font-serif text-2xl mb-6">Bra & Top Size Chart</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-foreground">
                      <tr>
                        <th className="text-left py-3 font-medium">Size</th>
                        <th className="text-left py-3 font-medium">Bust (inches)</th>
                        <th className="text-left py-3 font-medium">Band (inches)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SIZE_CHART.bras.map((row) => (
                        <tr key={row.size} className="border-b border-border">
                          <td className="py-4 font-medium">{row.size}</td>
                          <td className="py-4 text-muted-foreground">{row.bust}</td>
                          <td className="py-4 text-muted-foreground">{row.band}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Panty Size Chart */}
              <div>
                <h2 className="font-serif text-2xl mb-6">Panty & Bottom Size Chart</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-foreground">
                      <tr>
                        <th className="text-left py-3 font-medium">Size</th>
                        <th className="text-left py-3 font-medium">Waist (inches)</th>
                        <th className="text-left py-3 font-medium">Hips (inches)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SIZE_CHART.bottoms.map((row) => (
                        <tr key={row.size} className="border-b border-border">
                          <td className="py-4 font-medium">{row.size}</td>
                          <td className="py-4 text-muted-foreground">{row.waist}</td>
                          <td className="py-4 text-muted-foreground">{row.hips}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Still Need Help */}
            <div className="mt-16 text-center p-8 bg-foreground text-background">
              <h3 className="font-serif text-xl mb-4">Still Unsure?</h3>
              <p className="text-background/70 mb-6">
                Our fit specialists are here to help. Contact us for personalized sizing recommendations.
              </p>
              <a href="mailto:fit@ocran.com">
                <Button variant="luxury-outline" className="border-background text-background hover:bg-background hover:text-foreground">
                  Contact Fit Specialist
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SizeGuide;
