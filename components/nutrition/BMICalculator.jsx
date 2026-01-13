import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Scale, Ruler, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function BMICalculator({ onSave, initialData }) {
  const [weight, setWeight] = useState(initialData?.weight || "");
  const [height, setHeight] = useState(initialData?.height || "");
  const [age, setAge] = useState(initialData?.age || "");
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100;
    const ageNum = parseInt(age);

    if (!weightNum || !heightNum || !ageNum) return;

    const bmi = (weightNum / (heightNum * heightNum)).toFixed(1);
    let category = "";
    let color = "";
    let message = "";

    if (bmi < 18.5) {
      category = "Abaixo do peso";
      color = "text-blue-600";
      message = "Você está abaixo do peso ideal. Considere aumentar a ingestão calórica com orientação profissional.";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Peso normal";
      color = "text-green-600";
      message = "Parabéns! Você está no peso ideal. Continue mantendo hábitos saudáveis.";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Sobrepeso";
      color = "text-yellow-600";
      message = "Você está com sobrepeso. Uma alimentação balanceada e exercícios podem ajudar.";
    } else {
      category = "Obesidade";
      color = "text-red-600";
      message = "Você está com obesidade. É importante buscar orientação profissional para sua saúde.";
    }

    setResult({ bmi, category, color, message });
    
    if (onSave) {
      onSave({
        weight: weightNum,
        height: heightNum * 100,
        age: ageNum,
        bmi: parseFloat(bmi),
        bmi_category: category
      });
    }
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Calculadora de IMC
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label className="flex items-center gap-2 text-gray-700 mb-2">
              <Scale className="w-4 h-4" />
              Peso (kg)
            </Label>
            <Input
              type="number"
              placeholder="Ex: 70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="text-lg"
            />
          </div>

          <div>
            <Label className="flex items-center gap-2 text-gray-700 mb-2">
              <Ruler className="w-4 h-4" />
              Altura (cm)
            </Label>
            <Input
              type="number"
              placeholder="Ex: 175"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="text-lg"
            />
          </div>

          <div>
            <Label className="flex items-center gap-2 text-gray-700 mb-2">
              <Calendar className="w-4 h-4" />
              Idade (anos)
            </Label>
            <Input
              type="number"
              placeholder="Ex: 25"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="text-lg"
            />
          </div>
        </div>

        <Button
          onClick={calculateBMI}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-6 text-lg"
        >
          Calcular IMC
        </Button>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl"
          >
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {result.bmi}
              </div>
              <div className={`text-xl font-semibold ${result.color}`}>
                {result.category}
              </div>
            </div>
            <p className="text-gray-700 text-center leading-relaxed">
              {result.message}
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
📄 components/nutrition/StreakCounter.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Flame } from "lucide-react";
import { motion } from "framer-motion";

export default function StreakCounter({ startDate }) {
  const calculateStreak = () => {
    if (!startDate) return 0;
    const start = new Date(startDate);
    const today = new Date();
    const diffTime = Math.abs(today - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const streak = calculateStreak();

  return (
    <Card className="bg-gradient-to-br from-orange-500 to-red-500 border-0 shadow-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-black/10"></div>
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/90 text-sm font-medium mb-1">
              Dias de Jornada
            </p>
            <motion.div
              key={streak}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl font-bold text-white"
            >
              {streak}
            </motion.div>
            <p className="text-white/80 text-xs mt-1">
              dias consecutivos
            </p>
          </div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Flame className="w-20 h-20 text-yellow-300 drop-shadow-lg" />
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}
