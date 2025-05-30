"use client"

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { BookOpen, Calendar, GraduationCap, ChevronRight, ChevronLeft } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { useNavigation } from 'react-day-picker'

const StudentCounseling = () => {
  const [open, setOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState('info')
  const [selectedDate, setSelectedDate] = useState(null)
  const [formData, setFormData] = useState({
    tenthMarks: '',
    twelfthMarks: '',
    hasEntranceExam: false,
    entranceExamName: '',
    entranceExamScore: '',
    courseAfterTenth: '',
    selectedCourses: [] as string[],
  })

  const programOptions = [
    'Engineering Programmes (B.E. / B.Tech / B.Des)',
    'Architecture Programmes',
    'Pharmacy Programmes',
    'Nursing Programmes',
    'Physiotherapy Programmes',
    'Dental Programmes',
    'Law Programmes',
    'Arts, Science and Humanities Programmes',
    'Engineering Programmes (B.E. / B.Tech)'
  ]

  // Open the dialog automatically when component mounts
  useEffect(() => {
    // Small delay to ensure it doesn't interfere with initial page load
    const timer = setTimeout(() => {
      setOpen(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ 
      ...prev, 
      hasEntranceExam: checked,
      // Reset entrance exam fields if unchecked
      entranceExamName: checked ? prev.entranceExamName : '',
      entranceExamScore: checked ? prev.entranceExamScore : ''
    }))
  }

  const handleCourseSelection = (course: string) => {
    setFormData(prev => {
      // If already selected, remove it
      if (prev.selectedCourses.includes(course)) {
        return {
          ...prev,
          selectedCourses: prev.selectedCourses.filter(c => c !== course)
        }
      }
      
      // If already have 3 selections, don't add more
      if (prev.selectedCourses.length >= 3) {
        return prev
      }
      
      // Add the new selection
      return {
        ...prev,
        selectedCourses: [...prev.selectedCourses, course]
      }
    })
  }

  const handleSubmitInfo = () => {
    setCurrentStep('courseSelection')
  }

  const handleSubmitCourses = () => {
    setCurrentStep('results')
  }

  const isInfoComplete = () => {
    return (
      formData.tenthMarks !== '' && 
      formData.twelfthMarks !== '' && 
      formData.courseAfterTenth !== '' && 
      (!formData.hasEntranceExam || 
        (formData.entranceExamName !== '' && formData.entranceExamScore !== ''))
    )
  }

  const isCourseSelectionComplete = () => {
    return formData.selectedCourses.length === 3
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-[#800000]">
            <GraduationCap className="h-5 w-5" />
            Student Counseling Services
          </DialogTitle>
          <DialogDescription>
            Get personalized guidance for your academic journey
          </DialogDescription>
        </DialogHeader>
        
        {currentStep === 'info' && (
          <div className="space-y-4 py-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tenthMarks">10th Marks (%)</Label>
                  <Input
                    id="tenthMarks"
                    name="tenthMarks"
                    type="number"
                    placeholder="e.g. 85"
                    value={formData.tenthMarks}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twelfthMarks">12th Marks (%)</Label>
                  <Input
                    id="twelfthMarks"
                    name="twelfthMarks"
                    type="number"
                    placeholder="e.g. 90"
                    value={formData.twelfthMarks}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="courseAfterTenth">Course after 10th</Label>
                <Select 
                  value={formData.courseAfterTenth} 
                  onValueChange={(value) => handleSelectChange('courseAfterTenth', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="science">Science (PCM/PCB)</SelectItem>
                    <SelectItem value="commerce">Commerce</SelectItem>
                    <SelectItem value="arts">Arts/Humanities</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="iti">ITI</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox 
                  id="hasEntranceExam" 
                  checked={formData.hasEntranceExam}
                  onCheckedChange={handleCheckboxChange}
                />
                <Label htmlFor="hasEntranceExam">I have taken an entrance exam</Label>
              </div>
              
              {formData.hasEntranceExam && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="entranceExamName">Entrance Exam Name</Label>
                    <Select 
                      value={formData.entranceExamName} 
                      onValueChange={(value) => handleSelectChange('entranceExamName', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select exam" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jee">JEE Main/Advanced</SelectItem>
                        <SelectItem value="neet">NEET</SelectItem>
                        <SelectItem value="bitsat">BITSAT</SelectItem>
                        <SelectItem value="viteee">VITEEE</SelectItem>
                        <SelectItem value="srmjeee">SRMJEEE</SelectItem>
                        <SelectItem value="comedk">COMEDK</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="entranceExamScore">Entrance Exam Score/Rank</Label>
                    <Input
                      id="entranceExamScore"
                      name="entranceExamScore"
                      placeholder="Enter score or rank"
                      value={formData.entranceExamScore}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}
              
              <Button 
                className="w-full bg-[#800000] hover:bg-[#600000] mt-4"
                onClick={handleSubmitInfo}
                disabled={!isInfoComplete()}
              >
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        
        {currentStep === 'courseSelection' && (
          <div className="space-y-4 py-4">
            <div className="space-y-4">
              <h3 className="font-medium text-center">Select 3 Programs of Interest</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Choose any 3 programs you are interested in pursuing
              </p>
              
              <div className="grid gap-3">
                {programOptions.map((program) => (
                  <Card 
                    key={program} 
                    className={`cursor-pointer transition-all ${formData.selectedCourses.includes(program) ? 'border-[#800000] bg-[#800000]/10' : ''}`}
                    onClick={() => handleCourseSelection(program)}
                  >
                    <CardContent className="p-3 flex items-center justify-between">
                      <span className="text-sm">{program}</span>
                      {formData.selectedCourses.includes(program) && (
                        <Checkbox checked={true} className="pointer-events-none" />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-between mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep('info')}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                
                <Button 
                  className="bg-[#800000] hover:bg-[#600000]"
                  onClick={handleSubmitCourses}
                  disabled={!isCourseSelectionComplete()}
                >
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                Selected: {formData.selectedCourses.length}/3 programs
              </div>
            </div>
          </div>
        )}
        
        {currentStep === 'results' && (
          <div className="space-y-4 py-4">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Your Selected Programs
              </h3>
              
              <ul className="list-disc list-inside space-y-2 text-sm">
                {formData.selectedCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
              
              <div className="mt-4 pt-4 border-t border-border">
                <h4 className="font-medium mb-2">Next Steps:</h4>
                <p className="text-sm">Our counselors will analyze your profile and provide personalized recommendations for these programs. Schedule a one-on-one session for detailed guidance.</p>
              </div>
            </div>
            
            <Button 
              className="w-full bg-[#800000] hover:bg-[#600000]"
              onClick={() => window.location.href = '/research'}
            >
              Schedule Counseling Session
            </Button>
            
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => setCurrentStep('courseSelection')}
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Program Selection
            </Button>
          </div>
        )}

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default StudentCounseling