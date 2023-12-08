import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
  const [English, setEnglish] = useState(0);
  const [Japanese, setJapanese] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (English < 90) {
        setEnglish((prevCount) => prevCount + 2);
      }
      if (Japanese < 95 ) {
        setJapanese((prevCount) => prevCount + 2);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [English, Japanese]);
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">Languages</span>
        <div className="flex flex-row items-center justify-center space-x-6">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf64"
              type="circle"
              percent={English}
              size={60}
            />
            <span className="text-xs font-bold text-Snow">English</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf64"
              type="circle"
              percent={Japanese}
              size={60}
            />
            <span className="text-xs font-bold text-Snow">Japanese</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
