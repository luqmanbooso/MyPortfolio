import React from 'react';
import { FaGithub, FaDocker, FaReact } from 'react-icons/fa';
import { SiRedux, SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';
import { BsLightbulbFill, BsChatDotsFill, BsClockFill } from 'react-icons/bs';
import { FiUsers, FiRefreshCw } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

const SkillCard = ({ name, icon, isDarkMode }) => {
  const getIcon = () => {
    const iconSize = 36;
    const iconColor = isDarkMode ? "#60a5fa" : "#3b82f6";
    
    switch(icon.toLowerCase()) {
      case 'git':
        return <FaGithub size={iconSize} color={iconColor} />;
      case 'docker':
        return <FaDocker size={iconSize} color={iconColor} />;
      case 'redux':
        return <SiRedux size={iconSize} color={iconColor} />;
      case 'nextjs':
        return <SiNextdotjs size={iconSize} color={iconColor} />;
      case 'tailwind':
        return <SiTailwindcss size={iconSize} color={iconColor} />;
      case 'mongodb':
        return <SiMongodb size={iconSize} color={iconColor} />;
      case 'typescript':
        return <TbBrandTypescript size={iconSize} color={iconColor} />;
      case 'lightbulb':
        return <BsLightbulbFill size={iconSize} color={iconColor} />;
      case 'chat':
        return <BsChatDotsFill size={iconSize} color={iconColor} />;
      case 'users':
        return <FiUsers size={iconSize} color={iconColor} />;
      case 'refresh':
        return <FiRefreshCw size={iconSize} color={iconColor} />;
      case 'clock':
        return <BsClockFill size={iconSize} color={iconColor} />;
      case 'star':
        return <AiFillStar size={iconSize} color={iconColor} />;
      default:
        return <FaReact size={iconSize} color={iconColor} />;
    }
  };

  return (
    <div 
      className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-700 hover:bg-gray-600' 
          : 'bg-gray-100 hover:bg-gray-200'
      }`}
    >
      <div className="mb-2">{getIcon()}</div>
      <p className="text-center font-medium">{name}</p>
    </div>
  );
};

export default SkillCard;
