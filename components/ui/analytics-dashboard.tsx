"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, BarChart3, Brain } from "lucide-react"

export function AnalyticsDashboard() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 rounded-2xl border border-purple-500/20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Real-Time Tracking Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
                  Live
                </Badge>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <div className="w-2 h-2 bg-pink-400 rounded-full" />
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                </div>
              </div>
              <CardTitle className="text-white text-lg">Real-Time Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200 text-sm">Active Sessions</span>
                  <span className="text-white font-bold">234</span>
                </div>
                <Progress value={75} className="h-2 bg-purple-900/50" />
                <div className="flex justify-between items-center">
                  <span className="text-pink-200 text-sm">Processing</span>
                  <span className="text-white font-bold">145</span>
                </div>
                <Progress value={60} className="h-2 bg-pink-900/50" />
              </div>
              <p className="text-purple-300 text-xs mt-3">
                Stay updated with live data levels across multiple locations.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Automated Stock Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-pink-800/50 to-purple-800/50 border-pink-500/30 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                  Confirmation
                </Badge>
                <TrendingUp className="h-5 w-5 text-pink-400" />
              </div>
              <CardTitle className="text-white text-lg">Automated Stock</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-col gap-2">
                  <div className="bg-purple-600/30 rounded-lg p-2 text-center">
                    <span className="text-purple-200 text-sm">Confirmation</span>
                  </div>
                  <div className="bg-pink-600/30 rounded-lg p-2 text-center">
                    <span className="text-pink-200 text-sm">Confirmation</span>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-2 text-center">
                    <span className="text-purple-200 text-sm">Confirmation</span>
                  </div>
                </div>
              </div>
              <p className="text-pink-300 text-xs mt-3">
                Never run out of stock—AI detects low levels and automates restocking.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Forecasting Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-purple-800/50 to-cyan-800/50 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <BarChart3 className="h-5 w-5 text-cyan-400" />
                <div className="flex gap-2">
                  <div className="bg-purple-500 rounded px-2 py-1 text-xs text-white">60%</div>
                  <div className="bg-pink-500 rounded px-2 py-1 text-xs text-white">45%</div>
                  <div className="bg-cyan-500 rounded px-2 py-1 text-xs text-white">80%</div>
                </div>
              </div>
              <CardTitle className="text-white text-lg">AI Forecasting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-16 bg-gradient-to-t from-purple-600/30 to-transparent rounded flex items-end justify-center">
                  <div className="w-full h-12 bg-gradient-to-t from-purple-500 to-pink-500 rounded-b" />
                </div>
              </div>
              <p className="text-cyan-300 text-xs mt-3">
                Predict future inventory needs with intelligent analytics and insights.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Multi-Channel Sync Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-1 lg:col-span-1"
        >
          <Card className="bg-gradient-to-br from-cyan-800/50 to-purple-800/50 border-cyan-500/30 backdrop-blur-sm h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg">Multi-Channel Sync</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-24 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-2 left-2 w-8 h-8 bg-cyan-500/30 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-pink-500/30 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-pink-400 rounded-full" />
                </div>
                <div className="absolute bottom-2 left-4 w-6 h-6 bg-purple-500/30 rounded-full" />
                <div className="absolute bottom-2 right-4 w-6 h-6 bg-green-500/30 rounded-full" />
              </div>
              <p className="text-cyan-300 text-xs mt-3">
                Seamlessly integrate and sync inventory across e-commerce, POS, and warehouses.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Assistance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:col-span-1 lg:col-span-2"
        >
          <Card className="bg-gradient-to-br from-pink-800/50 to-purple-800/50 border-pink-500/30 backdrop-blur-sm h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg">AI Assistance for Smarter Decisions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-24 relative">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full animate-ping" />
                </div>
              </div>
              <p className="text-pink-300 text-xs mt-3">
                Get AI-driven recommendations on purchasing, pricing, and inventory optimization.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
