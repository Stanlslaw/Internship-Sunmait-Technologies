import { useEffect } from 'react';

export default function usePageSettings (title){
   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = title;

   }, [title]);

}
