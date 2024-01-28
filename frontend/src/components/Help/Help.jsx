import React, { useState } from 'react';

const HelpSection = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button and follow the prompts to enter your information.",
    },
    {
      id: 2,
      question: "How can I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions sent to your email.",
    },
    {
      id: 3,
      question: "Is my personal information secure?",
      answer: "Yes, we prioritize the security of your personal information. We use encryption and follow best practices to protect your data.",
    },
    // New questions for sustainable tourism platform:
    {
      id: 4,
      question: "How do I find sustainable destinations?",
      answer: "You can use our search filters to find destinations that meet your sustainability criteria, such as eco-friendly accommodations, low-impact activities, and support for local communities.",
    },
    {
      id: 5,
      question: "What are the benefits of sustainable tourism?",
      answer: "Sustainable tourism has many benefits, including reducing environmental impact, supporting local economies, and preserving cultural heritage.",
    },
    {
      id: 6,
      question: "How can I travel more sustainably?",
      answer: "Here are some tips for traveling more sustainably: choose eco-friendly accommodations, use public transportation or walk whenever possible, support local businesses, and respect the environment and culture of the places you visit.",
    },
    {
      id: 7,
      question: "How do I offset my carbon emissions from travel?",
      answer: "You can offset your carbon emissions by donating to organizations that support carbon reduction projects, such as planting trees or investing in renewable energy.",
    },
    {
      id: 8,
      question: "What are the features of your sustainable tourism packages?",
      answer: "Our sustainable tourism packages include eco-friendly accommodations, low-impact activities, and support for local communities. We also offset the carbon emissions from your travel.",
    },
  ];

  const handleQuestionClick = (id) => {
    if (expandedQuestion === id) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(id);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4">Help Center</h2>
      <div>
        {questions.map((q) => (
          <div key={q.id} className="mb-4">
            <button
              className="flex justify-between w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md focus:outline-none"
              onClick={() => handleQuestionClick(q.id)}
            >
              <span className="text-lg">{q.question}</span>
              <span>{expandedQuestion === q.id ? '▲' : '▼'}</span>
            </button>
            {expandedQuestion === q.id && (
              <p className="mt-2 bg-gray-100 px-4 py-2 rounded-md">{q.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpSection;