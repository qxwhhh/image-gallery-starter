import { motion, useScroll, Variants } from "framer-motion";

// 定义动画状态的变体
const headerVariants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

// 使用 useScroll 钩子来获取滚动位置
const headerControl = useScroll();

// 定义一个函数来根据滚动位置确定当前的动画状态
const determineHeaderStatus = (scrollY: number, headerHeight: number) => {
  const threshold = headerHeight / 2;
  if (scrollY < -threshold) {
    return "enter";
  } else if (scrollY > threshold) {
    return "exit";
  } else {
    return "center";
  }
};

// 使用 motion.div 创建一个响应式头部组件
const Header = () => {
  return (
    <motion.div
      className="header"
      animate={headerControl(determineHeaderStatus)}
      variants={headerVariants}
      initial="center"
      // 其他属性，如过渡属性等
    >
      {/* 头部内容 */}
    </motion.div>
  );
};

export default Header;
