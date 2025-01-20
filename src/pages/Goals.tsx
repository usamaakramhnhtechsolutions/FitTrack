import React from 'react';
import { Target, TrendingUp, Award } from 'lucide-react';

export default function Goals() {
  const goals = [
    {
      id: 1,
      title: 'Weight Goal',
      current: 75,
      target: 70,
      unit: 'kg',
      progress: 60,
      category: 'Weight Management',
    },
    {
      id: 2,
      title: 'Weekly Workouts',
      current: 3,
      target: 5,
      unit: 'sessions',
      progress: 60,
      category: 'Exercise',
    },
    {
      id: 3,
      title: 'Daily Steps',
      current: 8000,
      target: 10000,
      unit: 'steps',
      progress: 80,
      category: 'Activity',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Fitness Goals</h1>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Target className="h-5 w-5 mr-2" />
            Add New Goal
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">{goal.title}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  {goal.category}
                </span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-500">Progress</span>
                  <span className="text-sm font-medium text-gray-900">
                    {goal.current} / {goal.target} {goal.unit}
                  </span>
                </div>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-indigo-200">
                    <div
                      style={{ width: `${goal.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Edit
                </button>
                <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Update Progress
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">Achievements</h3>
          <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'First Workout', icon: Award, date: '2024-01-01' },
              { title: '5 Day Streak', icon: TrendingUp, date: '2024-01-05' },
              { title: 'Goal Achieved', icon: Target, date: '2024-01-07' },
            ].map((achievement, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <achievement.icon className="h-8 w-8 text-indigo-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{achievement.title}</p>
                  <p className="text-sm text-gray-500">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}