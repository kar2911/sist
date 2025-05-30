"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { CheckCircle, Clock, BookOpen, Award, ArrowRight, RotateCcw } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  category: string
}

interface QuizResult {
  category: string
  correct: number
  total: number
  percentage: number
}

export default function Research() {
  const [currentStep, setCurrentStep] = useState<'start' | 'quiz' | 'results'>('start')
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes
  const [quizResults, setQuizResults] = useState<QuizResult[]>([])
  const [recommendedCourse, setRecommendedCourse] = useState<string>('')

  // Sample questions for different course categories
  const questionBank = {
    'Engineering Programmes (B.E. / B.Tech / B.Des)': [
      {
        question: "What is the basic unit of electric current?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correctAnswer: 1
      },
      {
        question: "Which programming language is primarily used for web development?",
        options: ["C++", "Java", "JavaScript", "Assembly"],
        correctAnswer: 2
      },
      {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Computer Processing Unit"],
        correctAnswer: 0
      },
      {
        question: "Which of the following is a renewable energy source?",
        options: ["Coal", "Natural Gas", "Solar Energy", "Nuclear Energy"],
        correctAnswer: 2
      },
      {
        question: "What is the chemical symbol for Iron?",
        options: ["Ir", "Fe", "In", "I"],
        correctAnswer: 1
      },
      {
        question: "In which year was the first computer bug found?",
        options: ["1945", "1947", "1950", "1955"],
        correctAnswer: 1
      },
      {
        question: "What is the SI unit of force?",
        options: ["Joule", "Newton", "Pascal", "Watt"],
        correctAnswer: 1
      },
      {
        question: "Which data structure follows LIFO principle?",
        options: ["Queue", "Stack", "Array", "Tree"],
        correctAnswer: 1
      }
    ],
    'Architecture Programmes': [
      {
        question: "Who designed the famous Guggenheim Museum in Bilbao?",
        options: ["Frank Gehry", "Zaha Hadid", "Norman Foster", "Tadao Ando"],
        correctAnswer: 0
      },
      {
        question: "What is the Golden Ratio approximately equal to?",
        options: ["1.414", "1.618", "1.732", "2.718"],
        correctAnswer: 1
      },
      {
        question: "Which architectural style is characterized by pointed arches?",
        options: ["Romanesque", "Gothic", "Baroque", "Classical"],
        correctAnswer: 1
      },
      {
        question: "What does HVAC stand for in building systems?",
        options: ["Heating, Ventilation, Air Conditioning", "High Voltage Alternating Current", "Heavy Vehicle Access Control", "Home Video Audio Control"],
        correctAnswer: 0
      },
      {
        question: "Which material is commonly used for earthquake-resistant construction?",
        options: ["Brick", "Steel", "Wood", "All of the above"],
        correctAnswer: 3
      },
      {
        question: "What is the standard height of a residential ceiling?",
        options: ["8 feet", "9 feet", "10 feet", "12 feet"],
        correctAnswer: 1
      },
      {
        question: "Which software is commonly used for architectural drafting?",
        options: ["Photoshop", "AutoCAD", "Excel", "PowerPoint"],
        correctAnswer: 1
      },
      {
        question: "What is the purpose of a foundation in construction?",
        options: ["Decoration", "Load distribution", "Insulation", "Ventilation"],
        correctAnswer: 1
      }
    ],
    'Pharmacy Programmes': [
      {
        question: "What is the study of drug absorption, distribution, metabolism, and excretion called?",
        options: ["Pharmacology", "Pharmacokinetics", "Pharmacodynamics", "Pharmacy"],
        correctAnswer: 1
      },
      {
        question: "Which vitamin is synthesized in the skin upon exposure to sunlight?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        correctAnswer: 2
      },
      {
        question: "What is the generic name for Tylenol?",
        options: ["Ibuprofen", "Acetaminophen", "Aspirin", "Naproxen"],
        correctAnswer: 1
      },
      {
        question: "Which organ is primarily responsible for drug metabolism?",
        options: ["Kidney", "Liver", "Heart", "Lungs"],
        correctAnswer: 1
      },
      {
        question: "What does 'bid' mean in prescription writing?",
        options: ["Once daily", "Twice daily", "Three times daily", "Four times daily"],
        correctAnswer: 1
      },
      {
        question: "Which class of drugs is used to treat high blood pressure?",
        options: ["Antibiotics", "Antihypertensives", "Antihistamines", "Analgesics"],
        correctAnswer: 1
      },
      {
        question: "What is the pH range of blood?",
        options: ["6.8-7.2", "7.35-7.45", "7.5-8.0", "8.0-8.5"],
        correctAnswer: 1
      },
      {
        question: "Which route of administration provides 100% bioavailability?",
        options: ["Oral", "Topical", "Intravenous", "Sublingual"],
        correctAnswer: 2
      }
    ],
    'Nursing Programmes': [
      {
        question: "What is the normal range for adult heart rate?",
        options: ["40-60 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"],
        correctAnswer: 1
      },
      {
        question: "Which position is best for a patient with difficulty breathing?",
        options: ["Supine", "Prone", "Fowler's", "Trendelenburg"],
        correctAnswer: 2
      },
      {
        question: "What does HIPAA protect?",
        options: ["Patient safety", "Patient privacy", "Hospital profits", "Nurse schedules"],
        correctAnswer: 1
      },
      {
        question: "What is the first step in the nursing process?",
        options: ["Planning", "Assessment", "Implementation", "Evaluation"],
        correctAnswer: 1
      },
      {
        question: "Normal blood pressure for adults is:",
        options: ["90/60 mmHg", "120/80 mmHg", "140/90 mmHg", "160/100 mmHg"],
        correctAnswer: 1
      },
      {
        question: "Which vital sign is measured in degrees?",
        options: ["Pulse", "Respiration", "Temperature", "Blood pressure"],
        correctAnswer: 2
      },
      {
        question: "What does NPO mean?",
        options: ["Nothing by mouth", "No physical output", "Normal patient order", "New patient orientation"],
        correctAnswer: 0
      },
      {
        question: "How often should bedridden patients be repositioned?",
        options: ["Every hour", "Every 2 hours", "Every 4 hours", "Every 6 hours"],
        correctAnswer: 1
      }
    ],
    'Law Programmes': [
      {
        question: "What is the highest court in India?",
        options: ["High Court", "District Court", "Supreme Court", "Sessions Court"],
        correctAnswer: 2
      },
      {
        question: "Which article of the Indian Constitution deals with Right to Equality?",
        options: ["Article 14", "Article 19", "Article 21", "Article 25"],
        correctAnswer: 0
      },
      {
        question: "What does 'habeas corpus' mean?",
        options: ["Have the body", "Speak the truth", "Let justice be done", "Innocent until proven guilty"],
        correctAnswer: 0
      },
      {
        question: "Who is known as the father of the Indian Constitution?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Patel"],
        correctAnswer: 2
      },
      {
        question: "What is the minimum age to become a judge of the Supreme Court?",
        options: ["35 years", "40 years", "45 years", "No minimum age"],
        correctAnswer: 3
      },
      {
        question: "Which writ is issued to quash the order of a lower court?",
        options: ["Habeas Corpus", "Mandamus", "Certiorari", "Prohibition"],
        correctAnswer: 2
      },
      {
        question: "What is the term of office for a Supreme Court judge?",
        options: ["5 years", "6 years", "Until age 65", "Until age 62"],
        correctAnswer: 2
      },
      {
        question: "Which part of the Constitution deals with Fundamental Rights?",
        options: ["Part II", "Part III", "Part IV", "Part V"],
        correctAnswer: 1
      }
    ],
    'Arts, Science and Humanities Programmes': [
      {
        question: "Who wrote the novel 'Pride and Prejudice'?",
        options: ["Charlotte Bronte", "Jane Austen", "Emily Dickinson", "Virginia Woolf"],
        correctAnswer: 1
      },
      {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "NaCl", "CH4"],
        correctAnswer: 0
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: 2
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: 2
      },
      {
        question: "Which gas makes up approximately 78% of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        correctAnswer: 2
      },
      {
        question: "Who composed 'The Four Seasons'?",
        options: ["Mozart", "Beethoven", "Vivaldi", "Bach"],
        correctAnswer: 2
      },
      {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctAnswer: 3
      }
    ]
  }

  // Course details for recommendations
  const courseDetails = {
    'Engineering Programmes (B.E. / B.Tech / B.Des)': {
      title: 'Engineering Programmes',
      description: 'Comprehensive engineering education covering multiple disciplines including Computer Science, Electronics, Mechanical, Civil, and Design Engineering.',
      duration: '4 Years',
      eligibility: '10+2 with Physics, Chemistry, Mathematics',
      careerProspects: ['Software Engineer', 'Design Engineer', 'Project Manager', 'Research Scientist', 'Entrepreneur'],
      averageSalary: '₹6-15 LPA',
      topRecruiters: ['TCS', 'Infosys', 'Microsoft', 'Google', 'Amazon', 'L&T'],
      specializations: ['Computer Science', 'Electronics & Communication', 'Mechanical', 'Civil', 'Aerospace', 'Design']
    },
    'Architecture Programmes': {
      title: 'Architecture Programmes',
      description: 'Professional architecture education focusing on design, planning, and construction of buildings and spaces.',
      duration: '5 Years',
      eligibility: '10+2 with Mathematics and NATA qualification',
      careerProspects: ['Architect', 'Urban Planner', 'Interior Designer', 'Landscape Architect', 'Construction Manager'],
      averageSalary: '₹4-12 LPA',
      topRecruiters: ['DLF', 'Godrej Properties', 'Architecture Firms', 'Government PWD', 'Private Consultancies'],
      specializations: ['Sustainable Architecture', 'Urban Planning', 'Interior Design', 'Landscape Architecture']
    },
    'Pharmacy Programmes': {
      title: 'Pharmacy Programmes',
      description: 'Comprehensive pharmaceutical education covering drug development, clinical pharmacy, and healthcare management.',
      duration: '4 Years (B.Pharm) / 6 Years (Pharm.D)',
      eligibility: '10+2 with Physics, Chemistry, Biology/Mathematics',
      careerProspects: ['Clinical Pharmacist', 'Drug Inspector', 'Medical Representative', 'Research Scientist', 'Hospital Pharmacist'],
      averageSalary: '₹3-8 LPA',
      topRecruiters: ['Sun Pharma', 'Dr. Reddy\'s', 'Cipla', 'Lupin', 'Apollo Hospitals', 'Fortis Healthcare'],
      specializations: ['Clinical Pharmacy', 'Pharmaceutical Chemistry', 'Pharmacology', 'Industrial Pharmacy']
    },
    'Nursing Programmes': {
      title: 'Nursing Programmes',
      description: 'Professional nursing education focusing on patient care, healthcare management, and clinical practice.',
      duration: '4 Years',
      eligibility: '10+2 with Physics, Chemistry, Biology',
      careerProspects: ['Staff Nurse', 'Nursing Supervisor', 'Clinical Specialist', 'Nurse Educator', 'Healthcare Administrator'],
      averageSalary: '₹2.5-6 LPA',
      topRecruiters: ['Apollo Hospitals', 'Fortis Healthcare', 'Max Healthcare', 'AIIMS', 'Government Hospitals'],
      specializations: ['Critical Care Nursing', 'Pediatric Nursing', 'Psychiatric Nursing', 'Community Health Nursing']
    },
    'Law Programmes': {
      title: 'Law Programmes',
      description: 'Comprehensive legal education covering various aspects of law, jurisprudence, and legal practice.',
      duration: '5 Years (Integrated) / 3 Years (LLB)',
      eligibility: '10+2 for 5-year course / Graduation for 3-year course',
      careerProspects: ['Advocate', 'Legal Advisor', 'Judge', 'Legal Consultant', 'Corporate Lawyer'],
      averageSalary: '₹3-10 LPA',
      topRecruiters: ['Law Firms', 'Corporate Legal Departments', 'Government Legal Services', 'Courts', 'Legal Consultancies'],
      specializations: ['Corporate Law', 'Criminal Law', 'Constitutional Law', 'International Law', 'Cyber Law']
    },
    'Arts, Science and Humanities Programmes': {
      title: 'Arts, Science and Humanities',
      description: 'Diverse academic programs covering literature, sciences, social sciences, and humanities.',
      duration: '3 Years',
      eligibility: '10+2 in relevant stream',
      careerProspects: ['Teacher', 'Researcher', 'Content Writer', 'Civil Services', 'Media Professional'],
      averageSalary: '₹2-6 LPA',
      topRecruiters: ['Educational Institutions', 'Media Houses', 'Government Departments', 'NGOs', 'Research Organizations'],
      specializations: ['English Literature', 'Psychology', 'Economics', 'Political Science', 'Mathematics', 'Physics']
    }
  }

  // Generate questions based on selected courses (simulated)
  const generateQuestions = () => {
    // In a real implementation, you would get selected courses from the counseling component
    // For now, we'll simulate with 3 random course categories
    const selectedCourses = [
      'Engineering Programmes (B.E. / B.Tech / B.Des)',
      'Pharmacy Programmes',
      'Law Programmes'
    ]
    
    const generatedQuestions: Question[] = []
    let questionId = 1
    
    selectedCourses.forEach(course => {
      const courseQuestions = questionBank[course as keyof typeof questionBank] || []
      courseQuestions.forEach(q => {
        generatedQuestions.push({
          id: questionId++,
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer,
          category: course
        })
      })
    })
    
    // Shuffle questions
    const shuffled = generatedQuestions.sort(() => Math.random() - 0.5)
    setQuestions(shuffled.slice(0, 24)) // Take 24 questions
  }

  // Timer effect
  useEffect(() => {
    if (currentStep === 'quiz' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && currentStep === 'quiz') {
      handleQuizComplete()
    }
  }, [timeLeft, currentStep])

  const startQuiz = () => {
    generateQuestions()
    setCurrentStep('quiz')
    setTimeLeft(1800) // Reset timer
  }

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value)
  }

  const handleNextQuestion = () => {
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestionIndex] = parseInt(selectedAnswer)
    setUserAnswers(newAnswers)
    setSelectedAnswer('')
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      handleQuizComplete()
    }
  }

  const handleQuizComplete = () => {
    // Calculate results by category
    const categoryResults: { [key: string]: { correct: number; total: number } } = {}
    
    questions.forEach((question, index) => {
      if (!categoryResults[question.category]) {
        categoryResults[question.category] = { correct: 0, total: 0 }
      }
      categoryResults[question.category].total++
      
      if (userAnswers[index] === question.correctAnswer) {
        categoryResults[question.category].correct++
      }
    })
    
    const results: QuizResult[] = Object.entries(categoryResults).map(([category, data]) => ({
      category,
      correct: data.correct,
      total: data.total,
      percentage: Math.round((data.correct / data.total) * 100)
    }))
    
    // Find best performing category
    const bestCategory = results.reduce((best, current) => 
      current.percentage > best.percentage ? current : best
    )
    
    setQuizResults(results)
    setRecommendedCourse(bestCategory.category)
    setCurrentStep('results')
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const restartQuiz = () => {
    setCurrentStep('start')
    setCurrentQuestionIndex(0)
    setSelectedAnswer('')
    setUserAnswers([])
    setQuestions([])
    setQuizResults([])
    setRecommendedCourse('')
  }

  if (currentStep === 'start') {
    return (
      <div className="min-h-screen py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Aptitude Assessment</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take our comprehensive aptitude test to discover which course aligns best with your interests and abilities.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <BookOpen className="h-6 w-6 text-[#800000]" />
                Assessment Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#800000]" />
                  <span>30 minutes duration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#800000]" />
                  <span>24 questions total</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-[#800000]" />
                  <span>Multiple choice format</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-[#800000]" />
                  <span>Course-specific questions</span>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Important Instructions:</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Read each question carefully before selecting an answer</li>
                  <li>• You cannot go back to previous questions</li>
                  <li>• The test will auto-submit when time expires</li>
                  <li>• Your performance will determine course recommendations</li>
                </ul>
              </div>
              
              <Button 
                onClick={startQuiz}
                className="w-full bg-[#800000] hover:bg-[#600000] text-white py-3 text-lg"
              >
                Start Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (currentStep === 'quiz') {
    const currentQuestion = questions[currentQuestionIndex]
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100

    return (
      <div className="min-h-screen py-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-900">Course Aptitude Assessment</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-[#800000]">
                  <Clock className="h-5 w-5" />
                  <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>

          {/* Question Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">
                {currentQuestion?.question}
              </CardTitle>
              <p className="text-sm text-gray-500">Category: {currentQuestion?.category}</p>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                {currentQuestion?.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <div></div>
            <Button 
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className="bg-[#800000] hover:bg-[#600000] text-white"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Complete Assessment' : 'Next Question'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 'results') {
    const recommendedCourseDetails = courseDetails[recommendedCourse as keyof typeof courseDetails]

    return (
      <div className="min-h-screen py-12 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Assessment Results</h1>
            <p className="text-xl text-gray-600">
              Based on your performance, here are your results and recommendations
            </p>
          </div>

          {/* Performance Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {quizResults.map((result, index) => (
              <Card key={index} className={`${result.category === recommendedCourse ? 'ring-2 ring-[#800000] bg-red-50' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {result.category.split(' ')[0]} {result.category.split(' ')[1]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#800000] mb-2">
                      {result.percentage}%
                    </div>
                    <p className="text-gray-600">
                      {result.correct} out of {result.total} correct
                    </p>
                    {result.category === recommendedCourse && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#800000] text-white">
                          <Award className="h-3 w-3 mr-1" />
                          Recommended
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Recommendation */}
          {recommendedCourseDetails && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#800000] flex items-center gap-2">
                  <Award className="h-6 w-6" />
                  Recommended Course: {recommendedCourseDetails.title}
                </CardTitle>
                <p className="text-gray-600 text-lg">
                  {recommendedCourseDetails.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Course Details</h3>
                      <div className="space-y-2 text-gray-600">
                        <p><strong>Duration:</strong> {recommendedCourseDetails.duration}</p>
                        <p><strong>Eligibility:</strong> {recommendedCourseDetails.eligibility}</p>
                        <p><strong>Average Salary:</strong> {recommendedCourseDetails.averageSalary}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Specializations</h3>
                      <div className="flex flex-wrap gap-2">
                        {recommendedCourseDetails.specializations.map((spec, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Career Prospects</h3>
                      <ul className="space-y-1 text-gray-600">
                        {recommendedCourseDetails.careerProspects.map((career, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {career}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Top Recruiters</h3>
                      <div className="flex flex-wrap gap-2">
                        {recommendedCourseDetails.topRecruiters.map((recruiter, index) => (
                          <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            {recruiter}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <Button 
              onClick={restartQuiz}
              variant="outline"
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Retake Assessment
            </Button>
            <Button 
              className="bg-[#800000] hover:bg-[#600000] text-white"
              onClick={() => window.location.href = '/admissions'}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return null
}