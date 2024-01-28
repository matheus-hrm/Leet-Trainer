import  Editor, { useMonaco } from '@monaco-editor/react';
import { useState } from 'react';
import { ModeToggle } from './mode-toggle';
import { Separator } from './ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';


export default function CodeEditor(){
    
    const [code, setCode] = useState('#type your code...')
    const [difficulty, setDifficulty] = useState('Easy')
    
    const monaco = useMonaco();
    import('monaco-themes/themes/twilight.json')
    .then((theme ) => {
        monaco?.editor.defineTheme('twilight', theme)
        monaco?.editor.setTheme('twilight');
    });


  return (
    <div className='flex-col space-y-10'>
      <div className='flex justify-end m-4 mx-8'>
        <ModeToggle />
      </div>
      <h1 className='text-4xl text-center'>Code Editor</h1>
      <Separator className='w-1/2 mx-auto my-4' />
      <div className='flex flex-row justify-center items-center space-x-8 mt-8'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className=''>Select a Difficulty</h1>
          <Select onValueChange={(value) => setDifficulty(value)} >
            <SelectTrigger className='mx-auto my-4 w-[180px]'>
              <SelectValue placeholder="Difficulty"/>
            </SelectTrigger>
            <SelectContent >
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className=''>Select a Problem</h1>
          <Select onValueChange={(value) => setDifficulty(value)} >
            <SelectTrigger className='mx-auto my-4 w-[180px]'>
              <SelectValue placeholder="Problems"/>
            </SelectTrigger>
            <SelectContent >
              {['1','2','3','4','5','6','7','8','9','10'].map((item, key) => (
                <SelectItem value={item} key={key}>Problem {item}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-1/5 ">
        <div className='flex-col w-1/2 justify-start items-center rounded  border-zinc-800 border bg-stone-200 dark:bg-neutral-900'>
           <h1 className='text-2xl ml-8 px-4 pt-4 pb-2'>Problem Name</h1>
           <div className='flex flex-row ml-14'>
            <p className=' font-thin text-muted-foreground '>language:{``}</p>
            <p className=' font-thin text-muted-foreground  ml-8'>difficulty:  {difficulty}</p>
           </div>
           <p className='font-thin ml-8 p-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, id? Suscipit quia odit quasi debitis excepturi iure necessitatibus, libero laboriosam rem veritatis facere exercitationem nisi soluta obcaecati voluptates dolore doloribus.</p>
        </div>
      </div>
      <div className="flex-row h-3/4 max-w-screen-lg flex items-center justify-between m-8">
          <Editor 
            className="outline rounded"  
            height="50vh" 
            width="100%" 
            language="python" 
            value={code}
            onChange={(e) => {if(e) setCode(e)}}
          />
          <p className='ml-4'>{code}</p>
      </div>
    </div>
  )
}
