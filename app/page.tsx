"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Target, Network, BarChart3, ArrowRight, Car, Shield, Brain, TrendingUp } from "lucide-react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, CheckCircle, DollarSign, Clock, Zap } from "lucide-react"

export default function HomePage() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Car className="h-12 w-12 text-blue-600" />
            <h1 className="text-5xl font-bold text-gray-900">Ford Bank Analysis</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive customer journey mapping and risk analysis for Ford Bank's auto lending and leasing business
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">3.2%</div>
              <div className="text-sm text-gray-600">Current Default Rate</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">68%</div>
              <div className="text-sm text-gray-600">Approval Rate</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Brain className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">4.2 days</div>
              <div className="text-sm text-gray-600">Avg Processing Time</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">42</div>
              <div className="text-sm text-gray-600">NPS Score</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                Customer Journey Map
              </CardTitle>
              <CardDescription>
                Interactive journey mapping showing customer touchpoints, pain points, and opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Explore the complete customer experience from initial interest to loan completion, including digital and
                physical touchpoints.
              </p>
              <Link href="/journey">
                <Button className="w-full">
                  View Journey Map
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-green-600" />
                Comprehensive Case Study
              </CardTitle>
              <CardDescription>
                Deep dive analysis including risk framework, AI features, and competitive landscape
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Detailed analysis of Ford Bank's lending business with AI-driven risk management, data flow diagrams,
                and strategic recommendations.
              </p>
              <Link href="/case-study">
                <Button className="w-full">
                  View Case Study
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-purple-600" />
                Customer Personas
              </CardTitle>
              <CardDescription>Detailed customer segments with behaviors, needs, and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Understand different customer types, their financial profiles, and how they interact with Ford Bank's
                services.
              </p>
              <Link href="/personas">
                <Button className="w-full bg-transparent" variant="outline">
                  View Personas
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-6 w-6 text-orange-600" />
                Touchpoint Analysis
              </CardTitle>
              <CardDescription>
                Detailed analysis of all customer interaction points and optimization opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Examine each touchpoint in detail, identify friction points, and discover opportunities for improvement.
              </p>
              <Link href="/touchpoints">
                <Button className="w-full bg-transparent" variant="outline">
                  View Touchpoints
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Key Insights */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Key Insights & Opportunities</CardTitle>
            <CardDescription>Strategic recommendations based on comprehensive analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI-Driven Automation</h3>
                <p className="text-sm text-gray-600">
                  Implement ML-based risk scoring to reduce processing time from 4.2 days to under 2 hours
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Risk Optimization</h3>
                <p className="text-sm text-gray-600">
                  Advanced fraud detection and behavioral analytics to reduce default rates by 15%
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Customer Experience</h3>
                <p className="text-sm text-gray-600">
                  Digital-first approach with personalized offerings to improve NPS from 42 to 60+
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function FordBankCaseStudy() {
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
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="risk-framework">Risk Framework</TabsTrigger>
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

            <Card>
              <CardHeader>
                <CardTitle>Customer Journey Optimization</CardTitle>
                <CardDescription>End-to-end experience improvements across all touchpoints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Discovery</h4>
                    <p className="text-sm text-gray-600">Pre-approval tools, finance calculators</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Application</h4>
                    <p className="text-sm text-gray-600">AI-powered document processing</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Approval</h4>
                    <p className="text-sm text-gray-600">Real-time decisioning engine</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Car className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Lifecycle</h4>
                    <p className="text-sm text-gray-600">Proactive customer management</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="h-5 w-5 text-yellow-600" />
                      <h4 className="font-medium">Instant Pre-Approval</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Real-time credit assessment with soft pulls and open banking data for immediate qualification.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Response Time</span>
                        <span className="font-medium">{"<30 seconds"}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Conversion Lift</span>
                        <span className="font-medium text-green-600">+34%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Car className="h-5 w-5 text-purple-600" />
                      <h4 className="font-medium">Telematics Scoring</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Driving behavior analysis for usage-based pricing and risk adjustment in real-time.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Risk Accuracy</span>
                        <span className="font-medium">89%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Premium Savings</span>
                        <span className="font-medium text-green-600">Up to 25%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      <h4 className="font-medium">Dynamic Pricing</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      AI adjusts interest rates and terms based on risk profile, market conditions, and customer
                      segment.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Margin Optimization</span>
                        <span className="font-medium">+12%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Customer Satisfaction</span>
                        <span className="font-medium text-green-600">+18%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Implementation Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Document OCR & Fraud Detection</span>
                          <Badge variant="default" className="bg-green-100 text-green-800">
                            Live
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">Q1 2024 - Deployed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Real-time Credit Scoring</span>
                          <Badge variant="default" className="bg-blue-100 text-blue-800">
                            In Progress
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">Q2 2024 - 70% Complete</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Telematics Integration</span>
                          <Badge variant="outline">Planned</Badge>
                        </div>
                        <p className="text-sm text-gray-600">Q3 2024 - Design Phase</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Behavioral Analytics</span>
                          <Badge variant="outline">Future</Badge>
                        </div>
                        <p className="text-sm text-gray-600">Q4 2024 - Research</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ROI Projections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-green-900">Cost Reduction</span>
                      <span className="text-lg font-bold text-green-600">€2.3M/year</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-blue-900">Revenue Increase</span>
                      <span className="text-lg font-bold text-blue-600">€4.1M/year</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium text-purple-900">Risk Reduction</span>
                      <span className="text-lg font-bold text-purple-600">€1.8M/year</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900">Total Annual Impact</span>
                        <span className="text-xl font-bold text-green-600">€8.2M</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Competitive Tab */}
          <TabsContent value="competitive" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Competitive Landscape Analysis</CardTitle>
                <CardDescription>Key competitors and differentiation strategies in auto financing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Direct Competitors</h3>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900">Volkswagen Financial</h4>
                          <Badge variant="destructive">High Threat</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Strong digital platform, competitive EV financing, extensive dealer network
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            Digital-First
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            EV Focus
                          </Badge>
                        </div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900">BMW Financial</h4>
                          <Badge variant="default" className="bg-yellow-100 text-yellow-800">
                            Medium Threat
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Premium positioning, innovative lease programs, strong brand loyalty
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            Premium
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Innovation
                          </Badge>
                        </div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900">Tesla Financial</h4>
                          <Badge variant="default" className="bg-orange-100 text-orange-800">
                            Emerging
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Direct-to-consumer model, integrated ecosystem, subscription options
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            D2C
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Subscription
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Fintech Disruptors</h3>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900">Auto1 Finance</h4>
                          <Badge variant="destructive">High Threat</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Fast approvals, digital-first experience, competitive rates
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            Speed
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            UX
                          </Badge>
                        </div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900">Finn/Cluno</h4>
                          <Badge variant="default" className="bg-yellow-100 text-yellow-800">
                            Medium Threat
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Car subscription model, flexible terms, all-inclusive pricing
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            Subscription
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Flexibility
                          </Badge>
                        </div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900">Traditional Banks</h4>
                          <Badge variant="default" className="bg-green-100 text-green-800">
                            Low Threat
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Generic auto loans, slower processes, limited automotive expertise
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            Generic
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Slow
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Competitive Advantages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900">OEM Integration</h4>
                        <p className="text-sm text-gray-600">
                          Deep integration with Ford manufacturing and dealer network
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900">Residual Value Expertise</h4>
                        <p className="text-sm text-gray-600">
                          Superior knowledge of Ford vehicle depreciation patterns
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900">Brand Loyalty</h4>
                        <p className="text-sm text-gray-600">Existing Ford customer base with high retention rates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900">EV Transition Leadership</h4>
                        <p className="text-sm text-gray-600">Early mover in electric vehicle financing solutions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Strategic Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-1">Speed & Automation</h4>
                      <p className="text-sm text-blue-700">Match fintech approval speeds with AI-powered decisioning</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-1">Flexible Products</h4>
                      <p className="text-sm text-green-700">Introduce subscription and usage-based pricing models</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-900 mb-1">Digital Experience</h4>
                      <p className="text-sm text-purple-700">End-to-end digital journey with omnichannel support</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <h4 className="font-medium text-orange-900 mb-1">EV Specialization</h4>
                      <p className="text-sm text-orange-700">
                        Become the go-to financing partner for electric vehicles
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Strategic Implementation Roadmap</CardTitle>
                <CardDescription>Phased approach to digital transformation and AI implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Phase 1 */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-100 text-blue-800">Phase 1</Badge>
                      <h3 className="text-lg font-semibold text-gray-900">Foundation (Q1-Q2 2024)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Core Infrastructure</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• API integration with credit bureaus</li>
                          <li>• Document OCR and fraud detection</li>
                          <li>• Basic risk scoring engine</li>
                          <li>• Customer data platform</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Expected Outcomes</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 50% reduction in manual processing</li>
                          <li>• 90% fraud detection accuracy</li>
                          <li>• 2-day average approval time</li>
                          <li>• Unified customer view</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-100 text-green-800">Phase 2</Badge>
                      <h3 className="text-lg font-semibold text-gray-900">Intelligence (Q3-Q4 2024)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">AI Enhancement</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• ML-based credit scoring</li>
                          <li>• Real-time pre-approval engine</li>
                          <li>• Behavioral analytics platform</li>
                          <li>• Dynamic pricing algorithms</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Expected Outcomes</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 60% auto-approval rate</li>
                          <li>• {"<2 hour"} decision time</li>
                          <li>• 15% improvement in risk assessment</li>
                          <li>• Personalized pricing</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-purple-100 text-purple-800">Phase 3</Badge>
                      <h3 className="text-lg font-semibold text-gray-900">Innovation (Q1-Q2 2025)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Advanced Features</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Telematics integration</li>
                          <li>• Usage-based pricing</li>
                          <li>• EV-specific products</li>
                          <li>• Subscription models</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Expected Outcomes</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 25% increase in customer satisfaction</li>
                          <li>• New revenue streams</li>
                          <li>• Competitive differentiation</li>
                          <li>• Market leadership in EV financing</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase 4 */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-orange-100 text-orange-800">Phase 4</Badge>
                      <h3 className="text-lg font-semibold text-gray-900">Ecosystem (Q3-Q4 2025)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Platform Expansion</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Digital marketplace</li>
                          <li>• Partner integrations</li>
                          <li>• Cross-border services</li>
                          <li>• Ecosystem partnerships</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Expected Outcomes</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Platform business model</li>
                          <li>• 40% increase in customer LTV</li>
                          <li>• European market expansion</li>
                          <li>• Industry benchmark status</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Investment Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-blue-900">Technology Infrastructure</span>
                      <span className="text-lg font-bold text-blue-600">€12M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-green-900">AI/ML Development</span>
                      <span className="text-lg font-bold text-green-600">€8M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium text-purple-900">Team & Training</span>
                      <span className="text-lg font-bold text-purple-600">€5M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium text-orange-900">Change Management</span>
                      <span className="text-lg font-bold text-orange-600">€3M</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900">Total Investment</span>
                        <span className="text-xl font-bold text-gray-900">€28M</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Success Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Operational Excellence</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Approval Time</span>
                          <span className="font-medium">4.2d → {"<2h"}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Auto-approval Rate</span>
                          <span className="font-medium">25% → 60%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Processing Cost</span>
                          <span className="font-medium">-45%</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Risk Management</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Default Rate</span>
                          <span className="font-medium">3.2% → {"<2.5%"}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Fraud Detection</span>
                          <span className="font-medium">85% → 96%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Risk-adjusted Returns</span>
                          <span className="font-medium">+18%</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Customer Experience</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>NPS Score</span>
                          <span className="font-medium">42 → 60+</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Digital Adoption</span>
                          <span className="font-medium">35% → 80%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Customer Retention</span>
                          <span className="font-medium">+25%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
