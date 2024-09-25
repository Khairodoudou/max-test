import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import App from './App.jsx';
import Test from './Test.jsx';
import './index.css';

function RootComponent() {
  const [isNorthAfricanUser, setIsNorthAfricanUser] = useState(null);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        // استدعاء API من ipinfo.io باستخدام HTTPS ورمز الـ API الخاص بك
        const response = await axios.get('https://ipinfo.io/json?token=b313b3172f443f');
        console.log('رد من API:', response.data);  // طباعة الرد في console للتحقق
        const countryCode = response.data.country;  // الحصول على رمز البلد
        console.log('رمز البلد:', countryCode);  // طباعة رمز البلد للتحقق

        // التحقق مما إذا كان رمز البلد ينتمي إلى الجزائر (DZ) أو تونس (TN) أو المغرب (MA)
        if (countryCode === 'DZ' || countryCode === 'TN' || countryCode === 'MA') {
          setIsNorthAfricanUser(true);  // المستخدم من شمال إفريقيا
        } else {
          setIsNorthAfricanUser(false);  // المستخدم ليس من شمال إفريقيا
        }
      } catch (error) {
        console.error("خطأ أثناء استرجاع الموقع:", error);
        setIsNorthAfricanUser(false);  // في حال حدوث خطأ، عرض <Test />
      }
    };

    checkLocation();
  }, []);

  if (isNorthAfricanUser === null) {
    // عرض صفحة تحميل أثناء التحقق من الموقع
    return <div><h1 className='flex text-center text-2xl h-100 md:text-5xl items-center justify-center'>جارٍ التحميل...</h1></div>;
  }

  // عرض المكون المناسب وفقًا للموقع
  return isNorthAfricanUser ? <App /> : <Test />;
}

// بدء التطبيق
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>,
);
