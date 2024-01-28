import Editor, { useMonaco } from '@monaco-editor/react';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import type { ThemeType } from '../types/themeTypes';


const placeholderCode = 
`const func = () => {
  console.log("Hello World")
}`;

export default function CodeEditor() {
  const [code, setCode] = useState(placeholderCode);
  const [language, setLanguage] = useState('python');
  const [theme, setTheme] = useState('dark');
  
  const monaco = useMonaco();
  if(theme === 'dark') {
    import('monaco-themes/themes/twilight.json').then((themeData) => {
      monaco?.editor.defineTheme('twilight',themeData as ThemeType);
      monaco?.editor.setTheme('twilight');
    })
  } else {
    import('monaco-themes/themes/Xcode_default.json').then((themeData) => {
      monaco?.editor.defineTheme('Xcode_default', themeData as ThemeType);
      monaco?.editor.setTheme('Xcode_default');
    });
  }
  return (
    <div className='flex flex-col space-y-5'>
      <div className='flex flex-row w-1/2'>
        <Select onValueChange={(value) => setLanguage(value)}>
          <SelectTrigger className='mx-auto my-4 w-[180px]'>
            <SelectValue placeholder='Language' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='python'>Python</SelectItem>
            <SelectItem value='javascript'>Javascript</SelectItem>
            <SelectItem value='c'>C</SelectItem>
            <SelectItem value='c++'>C++</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setTheme(value)}>
          <SelectTrigger className='mx-auto my-4 w-[180px]'>
            <SelectValue placeholder='Theme' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='flex-row h-3/4 max-w-screen-lg flex items-center justify-between m-8'>
        <Editor
          className={`outline rounded p-4 ${ theme === 'dark' ? 'bg-neutral-900' : 'bg-white' }`}
          height='50vh'
          width='100%'
          language={language}
          value={code}
          onChange={(e) => {
            if (e) setCode(e);
          }}
          theme={theme}
        />
      </div>
    </div>
  );
}
    
    
   