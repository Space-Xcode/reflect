"use client"

import { useState } from "react"
import Link from "next/link"
import { useFormState } from "react-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Brain, Mail, Lock, User, ArrowLeft, Github, Chrome, Eye, EyeOff, AlertCircle } from "lucide-react"


export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [state, formAction] = useFormState((state: any, payload: any) => register(state, payload), {
    success: false,
    errors: {
      confirmPassword: [],
      firstName: [],
      lastName: [],
      email: [],
      password: [],
      terms: [],
    },
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Brain className="w-12 h-12 text-purple-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">Create Your Account</CardTitle>
            <CardDescription className="text-slate-300">
              Join ReflectAI and start your journey of self-discovery with AI-powered insights
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Social Registration */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full border-slate-600 text-white hover:bg-slate-700" type="button">
                <Chrome className="w-4 h-4 mr-2" />
                Sign up with Google
              </Button>
              <Button variant="outline" className="w-full border-slate-600 text-white hover:bg-slate-700" type="button">
                <Github className="w-4 h-4 mr-2" />
                Sign up with GitHub
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-slate-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-800 px-2 text-slate-400">Or create account with email</span>
              </div>
            </div>

            {/* Form Error */}
            {/* Form Error */}
            {state.errors?.confirmPassword.length > 0 && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-md p-3 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                <div className="text-sm text-red-200">Please fix the errors in the form.</div>
              </div>
            )}

            {/* Registration Form */}
            <form className="space-y-4" action={formAction}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-200">
                    First Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      className={`pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-400 ${
                        state.errors?.firstName ? "border-red-500 focus:border-red-500" : ""
                      }`}
                    />
                  </div>
                  {state.errors?.firstName && <p className="text-red-500 text-sm mt-1">{state.errors.firstName[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-200">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    className={`bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-400 ${
                      state.errors?.lastName ? "border-red-500 focus:border-red-500" : ""
                    }`}
                  />
                  {state.errors?.lastName && <p className="text-red-500 text-sm mt-1">{state.errors.lastName[0]}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-200">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className={`pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-400 ${
                      state.errors?.email ? "border-red-500 focus:border-red-500" : ""
                    }`}
                  />
                </div>
                {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-200">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className={`pl-10 pr-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-400 ${
                      state.errors?.password ? "border-red-500 focus:border-red-500" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {state.errors?.password && <p className="text-red-500 text-sm mt-1">{state.errors.password[0]}</p>}
                <p className="text-xs text-slate-400">
                  Password must be at least 8 characters with uppercase, lowercase, and numbers
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-slate-200">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className={`pl-10 pr-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-400 ${
                      state.errors?.confirmPassword ? "border-red-500 focus:border-red-500" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-300"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {state.errors?.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{state.errors.confirmPassword[0]}</p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  name="terms"
                  className={`mt-1 border-slate-600 data-[state=checked]:bg-purple-600 ${
                    state.errors?.terms ? "border-red-500" : ""
                  }`}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="terms" className="text-sm text-slate-300 leading-relaxed cursor-pointer">
                    I agree to the{" "}
                    <Link href="/terms" className="text-purple-400 hover:text-purple-300 underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-purple-400 hover:text-purple-300 underline">
                      Privacy Policy
                    </Link>
                  </Label>
                  {state.errors?.terms && <p className="text-red-500 text-sm mt-1">{state.errors.terms[0]}</p>}
                </div>
              </div>

              {/* Marketing Consent */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="marketing"
                  name="marketing"
                  className="mt-1 border-slate-600 data-[state=checked]:bg-purple-600"
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="marketing" className="text-sm text-slate-300 leading-relaxed cursor-pointer">
                    I would like to receive product updates and insights via email (optional)
                  </Label>
                </div>
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Create Account</Button>
            </form>

            <div className="text-center">
              <p className="text-slate-400">
                Already have an account?{" "}
                <Link href="/log-in" className="text-purple-400 hover:text-purple-300 font-medium">
                  Sign in
                </Link>
              </p>
            </div>

            {/* Security Notice */}
            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-slate-300 font-medium">Your data is secure</p>
                  <p className="text-xs text-slate-400 mt-1">
                    We use industry-standard encryption to protect your personal information and reflections.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
function register(state: any, payload: any): any {
    throw new Error("Function not implemented.")
}

