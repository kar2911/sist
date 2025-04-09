import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, Calendar, FileText, Globe } from 'lucide-react'

export default function Admissions() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Admissions</h1>

        {/* Admission Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Apply Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Fill out the online application form with your personal and academic details</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Entrance Exam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Take the university entrance examination or submit national test scores</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Document Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Submit and verify your academic documents and certificates</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Admission Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Receive and accept your admission offer to secure your place</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Dates */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Important Dates</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Undergraduate Admissions</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between">
                      <span>Application Opens</span>
                      <span className="text-[#800000]">March 1, 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Early Decision Deadline</span>
                      <span className="text-[#800000]">April 15, 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Regular Decision Deadline</span>
                      <span className="text-[#800000]">May 30, 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Classes Begin</span>
                      <span className="text-[#800000]">July 15, 2024</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Postgraduate Admissions</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between">
                      <span>Application Opens</span>
                      <span className="text-[#800000]">February 1, 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Application Deadline</span>
                      <span className="text-[#800000]">April 30, 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Interview Dates</span>
                      <span className="text-[#800000]">May 15-30, 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Classes Begin</span>
                      <span className="text-[#800000]">August 1, 2024</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Fee Structure */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Fee Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Undergraduate Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span>Engineering</span>
                    <span className="text-[#800000]">₹2,00,000/year</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Science</span>
                    <span className="text-[#800000]">₹1,50,000/year</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Management</span>
                    <span className="text-[#800000]">₹1,75,000/year</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Postgraduate Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span>M.Tech</span>
                    <span className="text-[#800000]">₹2,50,000/year</span>
                  </li>
                  <li className="flex justify-between">
                    <span>MBA</span>
                    <span className="text-[#800000]">₹3,00,000/year</span>
                  </li>
                  <li className="flex justify-between">
                    <span>M.Sc</span>
                    <span className="text-[#800000]">₹1,75,000/year</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Apply Now Section */}
        <section className="bg-[#800000] text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-lg mb-8">Take the first step towards your future at Sathyabama</p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#800000]">
            Start Application
          </Button>
        </section>
      </div>
    </div>
  )
}