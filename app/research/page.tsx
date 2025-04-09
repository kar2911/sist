import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FlaskRound as Flask, Book, Users, Award, Globe, Microscope, ChartBar, Brain } from 'lucide-react'

export default function Research() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Research at Sathyabama</h1>

        {/* Research Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Flask className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>500+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Research Projects</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Book className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>2000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Publications</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>100+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Patents Filed</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>50+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">International Collaborations</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Centers */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Research Centers of Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Microscope className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Centre for Ocean Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Focusing on marine biodiversity, ocean resources, and coastal ecosystem management.
                  Key research areas include:
                </p>
                <ul className="mt-4 space-y-2">
                  <li>• Marine Biotechnology</li>
                  <li>• Coastal Zone Management</li>
                  <li>• Marine Resources</li>
                  <li>• Ocean Engineering</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Brain className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Centre for AI and Robotics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced research in artificial intelligence, machine learning, and robotics.
                  Focus areas include:
                </p>
                <ul className="mt-4 space-y-2">
                  <li>• Deep Learning</li>
                  <li>• Computer Vision</li>
                  <li>• Autonomous Systems</li>
                  <li>• Industrial Automation</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <ChartBar className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Centre for Sustainable Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Research in renewable energy and sustainable development.
                  Key areas include:
                </p>
                <ul className="mt-4 space-y-2">
                  <li>• Solar Energy</li>
                  <li>• Waste Management</li>
                  <li>• Green Buildings</li>
                  <li>• Environmental Engineering</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Publications */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Recent Research Publications</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Advanced Materials Research</h3>
                <p className="text-gray-600 mb-4">
                  Development of Novel Nanomaterials for Enhanced Energy Storage Applications
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Published in: Nature Materials</span>
                  <span>Impact Factor: 43.841</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Marine Biotechnology</h3>
                <p className="text-gray-600 mb-4">
                  Novel Bioactive Compounds from Marine Organisms of the Indian Coast
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Published in: Marine Drugs</span>
                  <span>Impact Factor: 5.978</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Artificial Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Deep Learning Approaches for Early Disease Detection Using Medical Imaging
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Published in: IEEE Transactions on Medical Imaging</span>
                  <span>Impact Factor: 10.048</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Funding */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Research Funding</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Major Funding Sources</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between">
                      <span>DST-SERB Projects</span>
                      <span className="text-[#800000]">₹25 Crores</span>
                    </li>
                    <li className="flex justify-between">
                      <span>DRDO Grants</span>
                      <span className="text-[#800000]">₹15 Crores</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Industry Collaborations</span>
                      <span className="text-[#800000]">₹20 Crores</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Research Scholarships</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between">
                      <span>PhD Scholarships</span>
                      <span className="text-[#800000]">100+ Students</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Research Fellowships</span>
                      <span className="text-[#800000]">50+ Fellows</span>
                    </li>
                    <li className="flex justify-between">
                      <span>International Grants</span>
                      <span className="text-[#800000]">25+ Projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}