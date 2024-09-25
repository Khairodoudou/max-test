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
        // استدعاء واجهة برمجة التطبيقات ip-api.com للحصول على الموقع الجغرافي حسب IP
        const response = await axios.get('http://ip-api.com/json/');
        console.log('رد من واجهة برمجة التطبيقات:', response.data); // عرض البيانات المستلمة
        const countryCode = response.data.countryCode; // استرداد رمز البلد
        console.log('رمز البلد:', countryCode); // عرض رمز البلد

        // التحقق مما إذا كان رمز البلد ينتمي إلى الجزائر (DZ) أو تونس (TN) أو المغرب (MA)
        if (countryCode === 'DZ' || countryCode === 'TN' || countryCode === 'MA') {
          setIsNorthAfricanUser(true);
        } else {
          setIsNorthAfricanUser(false);
        }
      } catch (error) {
        console.error("خطأ أثناء استرجاع عنوان IP: ", error);
        setIsNorthAfricanUser(false); // بشكل افتراضي، عرض <Test /> في حالة الخطأ
      }
    };

    checkLocation();
  }, []);

  if (isNorthAfricanUser === null) {
    // عرض صفحة تحميل أثناء التحقق من الموقع
    return <div>جارٍ التحميل...</div>;
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
