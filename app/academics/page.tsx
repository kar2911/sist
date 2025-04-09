import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Users, Award, FlaskRound as Flask } from 'lucide-react'

export default function Academics() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Academic Programs</h1>
        
        {/* Undergraduate Programs */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Undergraduate Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#800000]">School of Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• B.Tech in Computer Science</li>
                  <li>• B.Tech in Mechanical Engineering</li>
                  <li>• B.Tech in Civil Engineering</li>
                  <li>• B.Tech in Electronics & Communication</li>
                  <li>• B.Tech in Information Technology</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#800000]">School of Science</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• B.Sc in Biotechnology</li>
                  <li>• B.Sc in Marine Biology</li>
                  <li>• B.Sc in Physics</li>
                  <li>• B.Sc in Chemistry</li>
                  <li>• B.Sc in Mathematics</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#800000]">School of Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• BBA in Business Administration</li>
                  <li>• B.Com in Commerce</li>
                  <li>• BBA in Aviation Management</li>
                  <li>• BBA in Hospital Management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Postgraduate Programs */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Postgraduate Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#800000]">Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• M.Tech in Data Science</li>
                  <li>• M.Tech in Robotics</li>
                  <li>• M.Tech in Structural Engineering</li>
                  <li>• M.Tech in Power Electronics</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#800000]">Science & Research</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• M.Sc in Biotechnology</li>
                  <li>• M.Sc in Marine Biology</li>
                  <li>• M.Sc in Nanotechnology</li>
                  <li>• M.Phil Programs</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#800000]">Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• MBA in Business Analytics</li>
                  <li>• MBA in Healthcare Management</li>
                  <li>• MBA in International Business</li>
                  <li>• Executive MBA</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Programs */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Doctoral Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#800000]">Ph.D. Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Engineering & Technology</li>
                  <li>• Science & Humanities</li>
                  <li>• Management Studies</li>
                  <li>• Interdisciplinary Research</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#800000]">Research Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Centre for Ocean Research</li>
                  <li>• Centre for Remote Sensing & GIS</li>
                  <li>• Centre for Waste Management</li>
                  <li>• Centre for Climate Change Studies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}