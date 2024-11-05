"use client";

import { motion } from "framer-motion";
import { templates } from "../../lib/consts";
import TemplateContainer from "../../components/template-container";

export default function Component() {

  return (
    <div className="w-full h-full bg-gradient-to-b from-violet-100/30 to-indigo-100/30">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Choose your template
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TemplateContainer template={template} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
