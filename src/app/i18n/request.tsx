// import {getRequestConfig} from 'next-intl/server';
// import {cookies} from 'next/headers';

// export default getRequestConfig(async () => {
//   // Get the locale from the cookie
   
//     const cookieLocale =(await cookies()).get('MYNEXTAPP_LOCALE')?.value || 'en';
//     const locale = cookieLocale;
    
//   return {
//     locale,
//     messages: (await import(`../../messages/${locale}.json`)).default
//   };
// });