"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  TrendingUp,
  Shield,
  Users,
  Car,
  Brain,
  Target,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  Database,
  Network,
  FileText,
  Smartphone,
} from "lucide-react"

export default function CaseStudyPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const riskMetrics = [
    { name: "Credit Risk", level: 75, color: "bg-red-500" },
    { name: "Fraud Risk", level: 45, color: "bg-orange-500" },
    { name: "Residual Value Risk", level: 60, color: "bg-yellow-500" },
    { name: "Market Risk", level: 55, color: "bg-blue-500" },
  ]

  const kpis = [
    { metric: "Approval Rate", current: "68%", target: "75%", trend: "up" },
    { metric: "Default Rate", current: "3.2%", target: "<2.5%", trend: "down" },
    { metric: "Processing Time", current: "4.2 days", target: "<2 hours", trend: "down" },
    { metric: "NPS Score", current: "42", target: "60+", trend: "up" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Journey Map
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Car className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Ford Bank Case Study</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Analysis of Auto Lending & Leasing Business with AI-Driven Risk Management
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="risk-framework">Risk Framework</TabsTrigger>
            <TabsTrigger value="data-flow">Data Flow</TabsTrigger>
            <TabsTrigger value="product-strategy">Product Strategy</TabsTrigger>
            <TabsTrigger value="ai-features">AI Features</TabsTrigger>
            <TabsTrigger value="competitive">Competitive</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpis.map((kpi, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">{kpi.metric}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900">{kpi.current}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <TrendingUp className={`h-4 w-4 ${kpi.trend === "up" ? "text-green-500" : "text-red-500"}`} />
                      <span className="text-sm text-gray-500">Target: {kpi.target}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    Business Context
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Market Position</h4>
                    <p className="text-gray-600 text-sm">
                      Ford Bank operates in the competitive auto financing space, providing loans and leases for Ford
                      vehicles across Europe. Key challenge: balancing risk management with customer acquisition in an
                      evolving EV market.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Challenges</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Rising default rates in post-pandemic economy</li>
                      <li>• EV transition affecting residual value predictions</li>
                      <li>• Fintech competitors offering faster approvals</li>
                      <li>• Manual processes causing approval delays</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red-600" />
                    Risk Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {riskMetrics.map((risk, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">{risk.name}</span>
                          <span className="text-sm text-gray-500">{risk.level}%</span>
                        </div>
                        <Progress value={risk.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Links to Original Journey Map */}
            <Card>
              <CardHeader>
                <CardTitle>Related Analysis</CardTitle>
                <CardDescription>Explore detailed customer journey and process flows</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col items-center justify-center bg-transparent"
                    >
                      <Users className="h-6 w-6 mb-2" />
                      Customer Journey Map
                    </Button>
                  </Link>
                  <Link href="/personas">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col items-center justify-center bg-transparent"
                    >
                      <Target className="h-6 w-6 mb-2" />
                      Customer Personas
                    </Button>
                  </Link>
                  <Link href="/touchpoints">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col items-center justify-center bg-transparent"
                    >
                      <Network className="h-6 w-6 mb-2" />
                      Touchpoint Analysis
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data Flow Tab */}
          <TabsContent value="data-flow" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-5 w-5 text-purple-600" />
                  Automated Risk Assessment Data Flow
                </CardTitle>
                <CardDescription>
                  Real-time data processing pipeline for loan application risk evaluation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Data Flow Diagram */}
                  <div className="relative">
                    <svg viewBox="0 0 1200 400" className="w-full h-auto border rounded-lg bg-white">
                      {/* Background Grid */}
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />

                      {/* Application Input */}
                      <rect
                        x="50"
                        y="50"
                        width="150"
                        height="80"
                        rx="10"
                        fill="#3b82f6"
                        stroke="#1e40af"
                        strokeWidth="2"
                      />
                      <text x="125" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                        Loan Application
                      </text>
                      <text x="125" y="105" textAnchor="middle" fill="white" fontSize="12">
                        Customer Input
                      </text>

                      {/* Data Sources */}
                      <rect
                        x="300"
                        y="20"
                        width="120"
                        height="60"
                        rx="8"
                        fill="#10b981"
                        stroke="#059669"
                        strokeWidth="2"
                      />
                      <text x="360" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                        SCHUFA API
                      </text>
                      <text x="360" y="60" textAnchor="middle" fill="white" fontSize="10">
                        Credit Bureau
                      </text>

                      <rect
                        x="300"
                        y="100"
                        width="120"
                        height="60"
                        rx="8"
                        fill="#f59e0b"
                        stroke="#d97706"
                        strokeWidth="2"
                      />
                      <text x="360" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                        Document OCR
                      </text>
                      <text x="360" y="140" textAnchor="middle" fill="white" fontSize="10">
                        ID & Income Docs
                      </text>

                      <rect
                        x="300"
                        y="180"
                        width="120"
                        height="60"
                        rx="8"
                        fill="#8b5cf6"
                        stroke="#7c3aed"
                        strokeWidth="2"
                      />
                      <text x="360" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                        Telematics
                      </text>
                      <text x="360" y="220" textAnchor="middle" fill="white" fontSize="10">
                        Driving Behavior
                      </text>

                      <rect
                        x="300"
                        y="260"
                        width="120"
                        height="60"
                        rx="8"
                        fill="#ef4444"
                        stroke="#dc2626"
                        strokeWidth="2"
                      />
                      <text x="360" y="285" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                        Open Banking
                      </text>
                      <text x="360" y="300" textAnchor="middle" fill="white" fontSize="10">
                        Financial Data
                      </text>

                      {/* AI Processing Engine */}
                      <rect
                        x="500"
                        y="120"
                        width="200"
                        height="120"
                        rx="15"
                        fill="#1f2937"
                        stroke="#374151"
                        strokeWidth="3"
                      />
                      <text x="600" y="150" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                        AI Risk Engine
                      </text>
                      <text x="600" y="170" textAnchor="middle" fill="#9ca3af" fontSize="12">
                        Machine Learning Models
                      </text>
                      <text x="600" y="190" textAnchor="middle" fill="#9ca3af" fontSize="11">
                        • Credit Scoring
                      </text>
                      <text x="600" y="205" textAnchor="middle" fill="#9ca3af" fontSize="11">
                        • Fraud Detection
                      </text>
                      <text x="600" y="220" textAnchor="middle" fill="#9ca3af" fontSize="11">
                        • Behavioral Analysis
                      </text>

                      {/* Decision Outputs */}
                      <rect
                        x="780"
                        y="50"
                        width="140"
                        height="70"
                        rx="10"
                        fill="#059669"
                        stroke="#047857"
                        strokeWidth="2"
                      />
                      <text x="850" y="80" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                        Auto Approve
                      </text>
                      <text x="850" y="100" textAnchor="middle" fill="white" fontSize="12">
                        Low Risk (60%)
                      </text>

                      <rect
                        x="780"
                        y="140"
                        width="140"
                        height="70"
                        rx="10"
                        fill="#d97706"
                        stroke="#b45309"
                        strokeWidth="2"
                      />
                      <text x="850" y="170" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                        Manual Review
                      </text>
                      <text x="850" y="190" textAnchor="middle" fill="white" fontSize="12">
                        Medium Risk (30%)
                      </text>

                      <rect
                        x="780"
                        y="230"
                        width="140"
                        height="70"
                        rx="10"
                        fill="#dc2626"
                        stroke="#b91c1c"
                        strokeWidth="2"
                      />
                      <text x="850" y="260" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                        Reject/Special
                      </text>
                      <text x="850" y="280" textAnchor="middle" fill="white" fontSize="12">
                        High Risk (10%)
                      </text>

                      {/* Monitoring & Feedback */}
                      <rect
                        x="500"
                        y="320"
                        width="200"
                        height="80"
                        rx="10"
                        fill="#6366f1"
                        stroke="#4f46e5"
                        strokeWidth="2"
                      />
                      <text x="600" y="350" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                        Continuous Learning
                      </text>
                      <text x="600" y="370" textAnchor="middle" fill="white" fontSize="12">
                        Model Updates & Monitoring
                      </text>

                      {/* Data Storage */}
                      <rect
                        x="980"
                        y="120"
                        width="150"
                        height="100"
                        rx="10"
                        fill="#374151"
                        stroke="#1f2937"
                        strokeWidth="2"
                      />
                      <text x="1055" y="150" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                        Data Warehouse
                      </text>
                      <text x="1055" y="170" textAnchor="middle" fill="#9ca3af" fontSize="11">
                        • Decision History
                      </text>
                      <text x="1055" y="185" textAnchor="middle" fill="#9ca3af" fontSize="11">
                        • Performance Metrics
                      </text>
                      <text x="1055" y="200" textAnchor="middle" fill="#9ca3af" fontSize="11">
                        • Audit Trail
                      </text>

                      {/* Arrows */}
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
                        </marker>
                      </defs>

                      {/* Input to Data Sources */}
                      <line
                        x1="200"
                        y1="90"
                        x2="300"
                        y2="50"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <line
                        x1="200"
                        y1="90"
                        x2="300"
                        y2="130"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <line
                        x1="200"
                        y1="90"
                        x2="300"
                        y2="210"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <line
                        x1="200"
                        y1="90"
                        x2="300"
                        y2="290"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />

                      {/* Data Sources to AI Engine */}
                      <line
                        x1="420"
                        y1="50"
                        x2="500"
                        y2="150"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <line
                        x1="420"
                        y1="130"
                        x2="500"
                        y2="160"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <line
                        x1="420"
                        y1="210"
                        x2="500"
                        y2="190"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <line
                        x1="420"
                        y1="290"
                        x2="500"
                        y2="220"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />

                      {/* AI Engine to Decisions */}
                      <line
                        x1="700"
                        y1="150"
                        x2="780"
                        y2="85"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <line
                        x1="700"
                        y1="180"
                        x2="780"
                        y2="175"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <line
                        x1="700"
                        y1="210"
                        x2="780"
                        y2="265"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />

                      {/* Decisions to Data Warehouse */}
                      <line
                        x1="920"
                        y1="85"
                        x2="980"
                        y2="150"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <line
                        x1="920"
                        y1="175"
                        x2="980"
                        y2="170"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      <line
                        x1="920"
                        y1="265"
                        x2="980"
                        y2="190"
                        stroke="#374151"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />

                      {/* Feedback Loop */}
                      <line
                        x1="600"
                        y1="320"
                        x2="600"
                        y2="240"
                        stroke="#6366f1"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="1055"
                        y1="220"
                        x2="600"
                        y2="320"
                        stroke="#6366f1"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                        strokeDasharray="5,5"
                      />

                      {/* Processing Time Labels */}
                      <text x="250" y="40" textAnchor="middle" fill="#6b7280" fontSize="10">
                        Real-time
                      </text>
                      <text x="600" y="110" textAnchor="middle" fill="#6b7280" fontSize="10">
                        {"<30 seconds"}
                      </text>
                      <text x="850" y="40" textAnchor="middle" fill="#6b7280" fontSize="10">
                        Instant Decision
                      </text>
                    </svg>
                  </div>

                  {/* Process Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm flex items-center gap-2">
                          <Database className="h-4 w-4 text-green-600" />
                          Data Collection
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-xs text-gray-600">
                          <div className="font-medium">SCHUFA Integration</div>
                          <div>• Credit score & history</div>
                          <div>• Payment behavior</div>
                          <div>• Existing obligations</div>
                        </div>
                        <div className="text-xs text-gray-600">
                          <div className="font-medium">Document Processing</div>
                          <div>• ID verification</div>
                          <div>• Income proof OCR</div>
                          <div>• Address validation</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm flex items-center gap-2">
                          <Brain className="h-4 w-4 text-purple-600" />
                          AI Processing
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-xs text-gray-600">
                          <div className="font-medium">Risk Scoring Models</div>
                          <div>• Credit risk probability</div>
                          <div>• Fraud detection score</div>
                          <div>• Behavioral patterns</div>
                        </div>
                        <div className="text-xs text-gray-600">
                          <div className="font-medium">Decision Engine</div>
                          <div>• Rule-based logic</div>
                          <div>• ML predictions</div>
                          <div>• Risk segmentation</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          Decision Output
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-xs text-gray-600">
                          <div className="font-medium">Automated Decisions</div>
                          <div>• Instant approval (60%)</div>
                          <div>• Automatic rejection (10%)</div>
                          <div>• Manual review queue (30%)</div>
                        </div>
                        <div className="text-xs text-gray-600">
                          <div className="font-medium">Personalized Terms</div>
                          <div>• Interest rate adjustment</div>
                          <div>• Loan amount limits</div>
                          <div>• Special conditions</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-orange-600" />
                          Continuous Learning
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-xs text-gray-600">
                          <div className="font-medium">Model Updates</div>
                          <div>• Performance monitoring</div>
                          <div>• A/B testing</div>
                          <div>• Bias detection</div>
                        </div>
                        <div className="text-xs text-gray-600">
                          <div className="font-medium">Feedback Loop</div>
                          <div>• Default tracking</div>
                          <div>• Model retraining</div>
                          <div>• Accuracy improvement</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Implementation Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-blue-600" />
                    API Integration Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-1">SCHUFA API</h4>
                      <p className="text-sm text-green-700 mb-2">Real-time credit bureau integration</p>
                      <div className="text-xs text-green-600 space-y-1">
                        <div>• Response time: {"<2 seconds"}</div>
                        <div>• Availability: 99.9%</div>
                        <div>• Data freshness: Real-time</div>
                      </div>
                    </div>

                    <div className="p-3 bg-orange-50 rounded-lg">
                      <h4 className="font-medium text-orange-900 mb-1">Document OCR Service</h4>
                      <p className="text-sm text-orange-700 mb-2">AI-powered document processing</p>
                      <div className="text-xs text-orange-600 space-y-1">
                        <div>• Accuracy: 98.5%</div>
                        <div>• Processing time: {"<10 seconds"}</div>
                        <div>• Supported formats: PDF, JPG, PNG</div>
                      </div>
                    </div>

                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-900 mb-1">Telematics Platform</h4>
                      <p className="text-sm text-purple-700 mb-2">Driving behavior analysis</p>
                      <div className="text-xs text-purple-600 space-y-1">
                        <div>• Data points: 50+ metrics</div>
                        <div>• Update frequency: Real-time</div>
                        <div>• Privacy compliant: GDPR</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red-600" />
                    Security & Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Alert>
                      <Shield className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Data Encryption:</strong> All data in transit and at rest encrypted using AES-256
                      </AlertDescription>
                    </Alert>

                    <Alert>
                      <FileText className="h-4 w-4" />
                      <AlertDescription>
                        <strong>GDPR Compliance:</strong> Full data protection compliance with right to be forgotten
                      </AlertDescription>
                    </Alert>

                    <Alert>
                      <Database className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Audit Trail:</strong> Complete logging of all decisions and data access
                      </AlertDescription>
                    </Alert>

                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900 mb-2">Processing Metrics</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Daily Applications:</span>
                          <div className="font-bold text-blue-600">2,500+</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Auto-Decisions:</span>
                          <div className="font-bold text-green-600">70%</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Avg Processing:</span>
                          <div className="font-bold text-purple-600">45 seconds</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Accuracy Rate:</span>
                          <div className="font-bold text-orange-600">94.2%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Risk Framework Tab */}
          <TabsContent value="risk-framework" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  Loan Credibility Assessment Framework
                </CardTitle>
                <CardDescription>Comprehensive risk evaluation process for auto loans and leases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Assessment Criteria</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">Credit Score Analysis</h4>
                          <p className="text-sm text-gray-600">
                            Schufa integration for real-time scoring with risk tier classification
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">Income Verification</h4>
                          <p className="text-sm text-gray-600">
                            AI-powered document parsing with OCR for payslips and tax returns
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">Debt-to-Income Ratio</h4>
                          <p className="text-sm text-gray-600">
                            Open banking integration for comprehensive affordability assessment
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">Collateral Evaluation</h4>
                          <p className="text-sm text-gray-600">AI-based vehicle valuation with depreciation modeling</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Risk Categories</h3>
                    <div className="space-y-3">
                      <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Credit Risk:</strong> Customer defaults on loan payments. Mitigated through ML-based
                          probability scoring and dynamic pricing.
                        </AlertDescription>
                      </Alert>
                      <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Residual Value Risk:</strong> Vehicle worth less than predicted at lease-end.
                          Addressed with AI pricing models and market data integration.
                        </AlertDescription>
                      </Alert>
                      <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Fraud Risk:</strong> Identity theft and document forgery. Prevented through biometric
                          verification and cross-bureau validation.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Risk Segmentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Low Risk
                      </Badge>
                      <span className="text-sm">Auto-approve (60%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="default" className="bg-yellow-100 text-yellow-800">
                        Medium Risk
                      </Badge>
                      <span className="text-sm">Manual review (30%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="default" className="bg-red-100 text-red-800">
                        High Risk
                      </Badge>
                      <span className="text-sm">Reject/Special terms (10%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Processing Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Current Average</span>
                      <span className="font-medium">4.2 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">AI-Enhanced Target</span>
                      <span className="font-medium text-green-600">{"<2 hours"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Auto-approval Rate</span>
                      <span className="font-medium">60%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Default Prediction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Current Default Rate</span>
                      <span className="font-medium text-red-600">3.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">AI Model Accuracy</span>
                      <span className="font-medium">87%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Early Warning</span>
                      <span className="font-medium text-green-600">45 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Other tabs remain the same as in the original code... */}
          {/* I'll include the remaining tabs for completeness */}

          {/* Product Strategy Tab */}
          <TabsContent value="product-strategy" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Customer Segmentation Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900">Young Professionals (25-35)</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Low down payment options, usage-based pricing, EV incentives
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          Flexible Terms
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Digital-First
                        </Badge>
                      </div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900">Families (35-50)</h4>
                      <p className="text-sm text-green-700 mt-1">
                        Bundled insurance + maintenance, safety-focused vehicles
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          Bundle Deals
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Long-term
                        </Badge>
                      </div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-900">EV Early Adopters</h4>
                      <p className="text-sm text-purple-700 mt-1">
                        Green incentives, charging infrastructure financing
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          EV Focused
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Tech-Savvy
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    Product Innovation Pipeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">DriveScore Engine</h4>
                        <p className="text-sm text-gray-600">
                          Dynamic risk scoring using telematics and behavioral data
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">Pay-as-You-Drive Leasing</h4>
                        <p className="text-sm text-gray-600">Variable payments based on actual usage patterns</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">EV Transition Platform</h4>
                        <p className="text-sm text-gray-600">Seamless ICE to EV upgrade with flexible terms</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">Digital Asset Marketplace</h4>
                        <p className="text-sm text-gray-600">AI-powered resale platform for off-lease vehicles</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* AI Features Tab */}
          <TabsContent value="ai-features" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                  AI-Powered Features & Automation
                </CardTitle>
                <CardDescription>
                  Advanced machine learning capabilities for risk management and customer experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="h-5 w-5 text-blue-600" />
                      <h4 className="font-medium">Residual Value Prediction</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      ML models predict vehicle depreciation using market trends, mileage patterns, and EV adoption
                      rates.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Accuracy</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Risk Reduction</span>
                        <span className="font-medium text-green-600">-15%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="h-5 w-5 text-red-600" />
                      <h4 className="font-medium">Fraud Detection</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Computer vision and NLP analyze documents for authenticity and detect identity fraud patterns.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Detection Rate</span>
                        <span className="font-medium">96%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>False Positives</span>
                        <span className="font-medium text-green-600">{"<2%"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <h4 className="font-medium">Default Prediction</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Behavioral analytics identify early warning signs of payment difficulties for proactive
                      intervention.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Early Warning</span>
                        <span className="font-medium">45 days</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Recovery Rate</span>
                        <span className="font-medium text-green-600">+23%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Competitive Tab */}
          <TabsContent value="competitive" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Competitive Landscape Analysis</CardTitle>
                <CardDescription>Key competitors and differentiation strategies in auto financing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-600">Competitive analysis content would go here...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Strategic Implementation Roadmap</CardTitle>
                <CardDescription>Phased approach to digital transformation and AI implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-600">Implementation roadmap content would go here...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
