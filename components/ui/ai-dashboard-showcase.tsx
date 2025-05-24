"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, BarChart3, Brain } from "lucide-react"

export function AIDashboardShowcase() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 rounded-2xl p-8 border border-purple-500/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI-Powered Analytics Dashboard
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Our team has developed cutting-edge AI analytics that provide real-time insights, automated decision-making,
            and predictive forecasting. The dashboard showcases our expertise in creating intelligent systems that
            transform raw data into actionable business intelligence.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-pink-500"></div>
              <span className="text-gray-200">Real-time AI monitoring and tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-gray-200">Automated stock management with AI predictions</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
              <span className="text-gray-200">Multi-channel synchronization and smart decisions</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Real-Time Tracking */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="col-span-1"
              >
                <Card className="bg-gradient-to-br from-purple-700/50 to-purple-600/50 border-purple-400/30 h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
                        Live
                      </Badge>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <div className="w-2 h-2 bg-pink-400 rounded-full" />
                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      </div>
                    </div>
                    <CardTitle className="text-white text-sm font-bold">Real-Time Tracking</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-200 text-xs">Active Sessions</span>
                      <span className="text-white font-bold text-lg">234</span>
                    </div>
                    <Progress value={75} className="h-1.5 bg-purple-900/50" />
                    <div className="flex justify-between items-center">
                      <span className="text-pink-200 text-xs">Processing</span>
                      <span className="text-white font-bold text-lg">145</span>
                    </div>
                    <Progress value={60} className="h-1.5 bg-pink-900/50" />
                    <p className="text-purple-300 text-xs mt-2">
                      Stay updated with live data levels across multiple locations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Automated Stock */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="col-span-1"
              >
                <Card className="bg-gradient-to-br from-pink-700/50 to-purple-700/50 border-pink-400/30 h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
                        Confirmation
                      </Badge>
                      <TrendingUp className="h-4 w-4 text-pink-400" />
                    </div>
                    <CardTitle className="text-white text-sm font-bold">Automated Stock</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-2">
                      <div className="bg-purple-600/40 rounded-md p-2 text-center">
                        <span className="text-purple-200 text-xs">Confirmation</span>
                      </div>
                      <div className="bg-pink-600/40 rounded-md p-2 text-center">
                        <span className="text-pink-200 text-xs">Confirmation</span>
                      </div>
                      <div className="bg-purple-600/40 rounded-md p-2 text-center">
                        <span className="text-purple-200 text-xs">Confirmation</span>
                      </div>
                    </div>
                    <p className="text-pink-300 text-xs mt-2">
                      Never run out of stock—AI detects low levels and automates restocking.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI Forecasting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="col-span-2 lg:col-span-1"
              >
                <Card className="bg-gradient-to-br from-purple-700/50 to-cyan-700/50 border-cyan-400/30 h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <BarChart3 className="h-4 w-4 text-cyan-400" />
                      <div className="flex gap-1">
                        <div className="bg-purple-500 rounded px-2 py-1 text-xs text-white">60%</div>
                        <div className="bg-pink-500 rounded px-2 py-1 text-xs text-white">45%</div>
                        <div className="bg-cyan-500 rounded px-2 py-1 text-xs text-white">80%</div>
                      </div>
                    </div>
                    <CardTitle className="text-white text-sm font-bold">AI Forecasting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-16 bg-gradient-to-t from-purple-600/30 to-transparent rounded flex items-end justify-center mb-2">
                      <div className="w-full h-12 bg-gradient-to-t from-purple-500 to-pink-500 rounded-b" />
                    </div>
                    <p className="text-cyan-300 text-xs">
                      Predict future inventory needs with intelligent analytics and insights.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Multi-Channel Sync */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="col-span-1"
              >
                <Card className="bg-gradient-to-br from-cyan-700/50 to-purple-700/50 border-cyan-400/30 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-sm font-bold">Multi-Channel Sync</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-16 relative mb-2">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Zap className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-1 left-1 w-6 h-6 bg-cyan-500/40 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                      </div>
                      <div className="absolute top-1 right-1 w-6 h-6 bg-pink-500/40 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-pink-400 rounded-full" />
                      </div>
                      <div className="absolute bottom-1 left-2 w-4 h-4 bg-purple-500/40 rounded-full" />
                      <div className="absolute bottom-1 right-2 w-4 h-4 bg-green-500/40 rounded-full" />
                    </div>
                    <p className="text-cyan-300 text-xs">
                      Seamlessly integrate and sync inventory across e-commerce, POS, and warehouses.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI Assistance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="col-span-1"
              >
                <Card className="bg-gradient-to-br from-pink-700/50 to-purple-700/50 border-pink-400/30 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-sm font-bold">AI Assistance for Smarter Decisions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-16 relative mb-2">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                          <Brain className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full animate-ping" />
                      </div>
                    </div>
                    <p className="text-pink-300 text-xs">
                      Get AI-driven recommendations on purchasing, pricing, and inventory optimization.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
