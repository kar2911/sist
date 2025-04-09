import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, GraduationCap, BookOpen, Users, Award, Globe, FlaskRound as Flask, Building } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
          alt="University Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Sathyabama Institute of Science and Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Transforming Lives Through Knowledge and Innovation
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-[#800000] hover:bg-[#600000]">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#800000]">
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <GraduationCap className="h-8 w-8 text-[#800000]" />
                <CardTitle>15,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Students Enrolled</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <Globe className="h-8 w-8 text-[#800000]" />
                <CardTitle>50+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Countries Represented</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <Flask className="h-8 w-8 text-[#800000]" />
                <CardTitle>100+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Research Labs</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <Award className="h-8 w-8 text-[#800000]" />
                <CardTitle>A++</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">NAAC Accreditation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Computer Science Engineering</li>
                  <li>• Mechanical Engineering</li>
                  <li>• Electronics & Communication</li>
                  <li>• Civil Engineering</li>
                </ul>
                <Button variant="link" className="mt-4 text-[#800000]">
                  Explore Programs →
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Flask className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Sciences</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Biotechnology</li>
                  <li>• Marine Biology</li>
                  <li>• Physics & Nanotechnology</li>
                  <li>• Chemistry</li>
                </ul>
                <Button variant="link" className="mt-4 text-[#800000]">
                  Discover More →
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Research</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Doctoral Programs</li>
                  <li>• Research Centers</li>
                  <li>• Industry Collaborations</li>
                  <li>• Publications</li>
                </ul>
                <Button variant="link" className="mt-4 text-[#800000]">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News & Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-[#800000]" />
                  <span className="text-sm text-gray-500">April 15, 2024</span>
                </div>
                <CardTitle className="mt-2">International Conference on Emerging Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join us for ICET 2024, featuring keynote speakers from leading global institutions.
                </p>
                <Button variant="link" className="mt-4 text-[#800000]">
                  Read More →
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-[#800000]" />
                  <span className="text-sm text-gray-500">April 20, 2024</span>
                </div>
                <CardTitle className="mt-2">NASA Space Apps Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sathyabama students win first place in the NASA Space Apps Challenge 2024.
                </p>
                <Button variant="link" className="mt-4 text-[#800000]">
                  Read More →
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-[#800000]" />
                  <span className="text-sm text-gray-500">April 25, 2024</span>
                </div>
                <CardTitle className="mt-2">Industry Partnership Summit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Annual industry-academia partnership summit featuring leading tech companies.
                </p>
                <Button variant="link" className="mt-4 text-[#800000]">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#800000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Begin Your Journey at Sathyabama</h2>
          <p className="text-xl mb-8">Join us in shaping the future through excellence in education and research</p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#800000]">
            Apply for Admission
          </Button>
        </div>
      </section>
    </div>
  )
}