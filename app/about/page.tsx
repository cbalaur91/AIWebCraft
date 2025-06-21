import { Scroll } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-[#111111] pt-32 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            About AIWebHub
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            We're a team of passionate designers, developers, and strategists dedicated to crafting exceptional digital experiences.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full opacity-30"></div>
        
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At AIWebHub, our mission is to harness the power of AI and human creativity to deliver websites that not only look stunning but also perform exceptionally well. We believe that great design should be accessible to businesses of all sizes.
              </p>
              <p className="text-gray-300">
                Every project we undertake is approached with meticulous attention to detail, ensuring that each website we create is not just a digital presence, but a powerful business tool that drives growth and engagement.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="bg-black h-full w-full rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/video/Website_Mission_Video_Creation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-xl bg-[#1a1a1a] flex items-center justify-center shadow-xl">
                <Scroll className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full opacity-30"></div>
        
        <div className="container relative mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-white text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Innovation",
                description: "We push boundaries and explore new technologies to create cutting-edge solutions.",
              },
              {
                title: "Quality",
                description: "We never compromise on quality, ensuring every pixel and line of code meets our high standards.",
              },
              {
                title: "Collaboration",
                description: "We work closely with our clients, treating their projects as if they were our own.",
              },
              {
                title: "Transparency",
                description: "We believe in open communication and keeping our clients informed at every stage.",
              },
              {
                title: "Adaptability",
                description: "We stay agile and responsive to changing trends and client needs.",
              },
              {
                title: "Results",
                description: "We focus on creating websites that achieve tangible, measurable results for our clients.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-xl p-8 shadow-xl border-t-2 border-transparent hover:border-t-blue-500 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}