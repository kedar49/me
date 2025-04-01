'use client';

import { GeistMono } from 'geist/font/mono';

import { useEffect, useState } from 'react';

import { skillCategories as importedSkillCategories } from '@/constants';

import { SkillIcons } from './icons/SkillIcons';

export function SkillsSection() {
  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    // Initialize state based on imported skill categories
    const initialState: Record<string, boolean> = {};
    
    // Use imported categories from constants.ts
    importedSkillCategories.forEach((category, index) => {
      const sectionId = category.title.toLowerCase().replace(/\s+/g, '-') + '-skills';
      initialState[sectionId] = index === 0; // Only first category expanded by default
    });
    
    return initialState;
  });
  
  // Track hovered skill for enhanced interactivity
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  // Track which skills are visible for animations
  const [visibleSkills, setVisibleSkills] = useState<Record<string, boolean>>({});
  
  // Track if component has mounted for initial animations
  const [mounted, setMounted] = useState(false);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
    
    // Reset visible skills when closing a section
    if (expandedSections[sectionId]) {
      const categorySkills = importedSkillCategories.find(
        category => category.title.toLowerCase().replace(/\s+/g, '-') + '-skills' === sectionId
      )?.skills || [];
      
      const updatedVisibleSkills = { ...visibleSkills };
      categorySkills.forEach(skill => {
        updatedVisibleSkills[`${sectionId}-${skill.name}`] = false;
      });
      
      setVisibleSkills(updatedVisibleSkills);
    }
  };
  
  // Effect to handle animations when sections expand
  useEffect(() => {
    setMounted(true);
    
    // For each expanded section, animate skills appearing one by one
    Object.entries(expandedSections).forEach(([sectionId, isExpanded]) => {
      if (isExpanded) {
        const categorySkills = importedSkillCategories.find(
          category => category.title.toLowerCase().replace(/\s+/g, '-') + '-skills' === sectionId
        )?.skills || [];
        
        categorySkills.forEach((skill, index) => {
          const skillId = `${sectionId}-${skill.name}`;
          
          // Stagger the animations
          setTimeout(() => {
            setVisibleSkills(prev => ({
              ...prev,
              [skillId]: true
            }));
          }, 50 * index);
        });
      }
    });
  }, [expandedSections]);

  // Use the imported skill categories from constants.ts
  // This ensures consistency across the application

  return (
    <div className="space-y-4 animate-fade-in">
      {importedSkillCategories.map((category, categoryIndex) => {
        const sectionId = category.title.toLowerCase().replace(/\s+/g, '-') + '-skills';
        const isExpanded = expandedSections[sectionId];
        
        return (
          <div 
            key={sectionId}
            className="border border-muted rounded-lg transition-all duration-300 hover:border-primary overflow-hidden shadow-sm hover:shadow-md" 
            style={{
              animationDelay: `${categoryIndex * 100}ms`,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}  
          >
            <div 
              className="p-4 flex justify-between items-center cursor-pointer bg-background/50 hover:bg-background/80 transition-colors duration-300"
              onClick={() => toggleSection(sectionId)}
            >
              <h3 className="text-sm font-semibold flex items-center group">
                <span className={`inline-block w-3 h-3 ${category.color} rounded-full mr-3 transition-all duration-500 ${isExpanded ? 'animate-pulse scale-110' : 'group-hover:animate-pulse'}`}></span>
                <span className="transition-colors duration-300 group-hover:text-primary">{category.title}</span>
              </h3>
              <div className="flex items-center">
                <span className={`text-xs mr-2 font-mono transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                  {category.skills.length} skills
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transform transition-transform duration-500 ${isExpanded ? 'rotate-180 text-primary' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {category.skills.map((skill, index) => {
                  const skillId = `${sectionId}-${skill.name}`;
                  const isVisible = visibleSkills[skillId];
                  
                  return (
                    <div 
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-3 border border-muted rounded-md transition-all duration-300 hover:border-primary hover:shadow-md hover:bg-background/50 group"
                      style={{ 
                        opacity: isExpanded && (isVisible || !mounted) ? 1 : 0,
                        transform: isExpanded && (isVisible || !mounted) ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                        transition: `all 0.4s ease ${index * 50}ms`,
                      }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="text-2xl mb-3 transition-all duration-300 group-hover:scale-125 group-hover:text-primary">
                        <div className="w-7 h-7 relative">
                          <div className="absolute inset-0 transition-all duration-300 group-hover:opacity-0">
                            {SkillIcons[skill.iconComponent]()}
                          </div>
                          <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 text-primary">
                            {SkillIcons[skill.iconComponent]()}
                          </div>
                        </div>
                      </div>
                      <span 
                        className={`text-xs font-medium text-center truncate w-full ${GeistMono.className} transition-colors duration-300 group-hover:text-primary`} 
                        title={skill.name}
                      >
                        {skill.name}
                      </span>
                      
                      {/* Enhanced skill level indicator */}
                      <div className="flex justify-center mt-3 space-x-1 h-1.5">
                        {[...Array(5)].map((_, i) => {
                          const isActive = i < Math.round(skill.level / 20);
                          return (
                            <div 
                              key={i}
                              className={`
                                h-1.5 rounded-full transition-all duration-500 
                                ${isActive ? category.color : 'bg-muted'} 
                                ${hoveredSkill === skill.name ? 'opacity-100' : 'opacity-70'}
                                ${isActive && hoveredSkill === skill.name ? 'w-3' : 'w-1.5'}
                              `}
                              style={{
                                transitionDelay: `${i * 50}ms`,
                              }}
                            />
                          );
                        })}
                      </div>
                      
                      {/* Show skill level on hover */}
                      <div 
                        className={`
                          mt-2 text-[10px] font-mono transition-opacity duration-300 
                          ${hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'}
                        `}
                      >
                        {skill.level}%
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}