// Simple gender determination based on name patterns

export const determineGender = (name) => {
  if (!name) return 'unknown';
  
  // Check for explicit gender indicators
  if (name.toLowerCase().includes('mrs') || name.toLowerCase().includes('ms')) {
    return 'female';
  }
  
  // Simple heuristic: names ending in typical female endings
  const femaleEndings = ['a', 'ina', 'ette', 'ice', 'ie'];
  const lowerName = name.toLowerCase().trim();
  
  if (femaleEndings.some(ending => lowerName.endsWith(ending))) {
    return 'female';
  }
  
  // Default to male for simplicity
  return 'male';
};

export const getGenderEmoji = (gender) => {
  return gender === 'female' ? '👧' : '👦';
};

export const getGenderLabel = (gender) => {
  return gender === 'female' ? 'Girl' : 'Boy';
};
