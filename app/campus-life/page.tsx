import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, Users, Coffee, Book, ShoppingBasket as Basketball, Music, Heart, Utensils } from 'lucide-react'
import Image from 'next/image'

export default function CampusLife() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Campus Life at Sathyabama</h1>

        {/* Campus Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Home className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>10+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Hostels</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Coffee className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>15+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Cafeterias</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Basketball className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>20+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Sports Facilities</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>50+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Student Clubs</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Student Accommodation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Boys Hostels</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• AC and Non-AC rooms available</li>
                  <li>• 24/7 security and surveillance</li>
                  <li>• In-house laundry facilities</li>
                  <li>• High-speed internet connectivity</li>
                  <li>• Recreation rooms</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Girls Hostels</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Separate wing for international students</li>
                  <li>• 24/7 female security staff</li>
                  <li>• Modern amenities</li>
                  <li>• Dedicated study areas</li>
                  <li>• Indoor gym facility</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dining Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Multiple cuisine options</li>
                  <li>• Hygienic food preparation</li>
                  <li>• Special diet considerations</li>
                  <li>• Modern kitchen equipment</li>
                  <li>• Regular menu rotation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sports & Recreation */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Sports & Recreation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Sports Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Olympic-size swimming pool</li>
                  <li>• Indoor sports complex</li>
                  <li>• Cricket ground with pavilion</li>
                  <li>• Basketball and volleyball courts</li>
                  <li>• Modern gymnasium</li>
                  <li>• Athletics track</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recreation Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Student activity center</li>
                  <li>• Music and dance rooms</li>
                  <li>• Art and craft center</li>
                  <li>• Gaming zones</li>
                  <li>• Meditation center</li>
                  <li>• Open air theatre</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Student Clubs */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Student Clubs & Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Book className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Academic Clubs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Coding Club</li>
                  <li>• Robotics Society</li>
                  <li>• IEEE Student Branch</li>
                  <li>• Research Forum</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Music className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Cultural Clubs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Music Club</li>
                  <li>• Dance Troupe</li>
                  <li>• Theatre Group</li>
                  <li>• Photography Club</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Social Service</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• NSS Unit</li>
                  <li>• Environmental Club</li>
                  <li>• Social Outreach Team</li>
                  <li>• Red Cross Society</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Campus Amenities */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Campus Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Utensils className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Food Courts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Multiple cuisine options</li>
                  <li>• Cafeterias in each block</li>
                  <li>• Juice corners</li>
                  <li>• Snack stations</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Book className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Learning Spaces</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Central library</li>
                  <li>• Digital learning center</li>
                  <li>• Discussion rooms</li>
                  <li>• Innovation labs</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-[#800000] mb-2" />
                <CardTitle>Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• 24/7 medical center</li>
                  <li>• Ambulance service</li>
                  <li>• Pharmacy</li>
                  <li>• Counseling center</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}