import Title from "@/components/ui/title";
import Section from "../components/sections/section";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import Card from "@/components/common/card";
import { Settings, Shield, Code, Wrench, Headphones } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="">
        <Section>
          <Title
            title="Excellent IT Services for Businesses "
            subtitle="BEST IT SOLUTION PROVIDER"
          />
          <Text size="sm">
            Consectetur adipiscing elit aenean scelerisque at augue vitae
            consequat quisque eget congue velit in cursus leo sed sodales est
            eget turpis.
          </Text>
          <Button
            variant="primary"
            size="lg"
            className="mt-6"
            as="a"
            href="/about"
          >
            Explore more
          </Button>
        </Section>
        <Section background="white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <Title
              title="Excellent It Services "
              subtitle="WHAT WE OFFER"
              titleSize="md"
              subtitleSize="sm"
            />
            <Button
              variant="primary"
              size="lg"
              className="md:ml-6 flex-shrink-0"
              as="a"
              href="/services"
            >
              View All Services
            </Button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              icon={
                <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:text-blue-200" />
              }
              title="Tech consultancy"
              description="We facilitate in giving insights in technology and consultancy services in setting up system for business and organizations."
            />

            <Card
              icon={
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:text-blue-200" />
              }
              title="Cyber Security"
              description="We build system defensive technologies against various attacks from all across the internet."
            />

            <Card
              icon={
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:text-blue-200" />
              }
              title="Software development"
              description="Our services aim to improve smooth operations for organizations and entities using technological innovations. "
            />
          </div>
        </Section>
        <Section
          background="gray"
          className="flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div>Hello</div>
          <div>
            <Title
              title="Excellent IT Services for Businesses "
              subtitle="ABOUT HOUSE MAJOR"
              titleSize="md"
            ></Title>
            <Text size="xs" className="max-w-xl">
              HOUSE MAJOR Ltd is a tech startup company focusing on Ai solutions and system development for businesses and organizations for organization’s scalability and data-driven decision support. 
            </Text>
            
            {/* Feature Cards */}
            <div className="grid grid-cols- sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-4 p-6  rounded-lg">
                <div className="p-3 bg-blue-100 flex-shrink-0">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Best Services</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Scelerisque augue the consequat sodales
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6  rounded-lg">
                <div className="p-3 bg-blue-100 flex-shrink-0">
                  <Headphones className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">24/7 Call Support</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Scelerisque augue the consequat sodales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
