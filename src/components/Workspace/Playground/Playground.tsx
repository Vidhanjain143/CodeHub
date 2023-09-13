import React, { useState ,useEffect} from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from 'react-split'
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { cpp } from '@codemirror/lang-cpp';
import EditorFooter from './EditorFooter';
import { Problem } from '@/utils/types/Problem';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/firebase/firebase';
import { toast } from 'react-toastify';
import { problems } from '@/utils/problems';
import { useRouter } from 'next/router';
import { javascript } from '@codemirror/lang-javascript';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import useLocalStorage from '@/hooks/useLocalStorage';
type PlaygroundProps = {
    problem:Problem;
    setSuccess:React.Dispatch<React.SetStateAction<boolean>>;
    setSolved:React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ISettings{
    fontSize:string;
    settingsModalIsOpen:boolean;
    dropDownIsOpen:boolean;
}
const Playground:React.FC<PlaygroundProps> = ({problem , setSuccess,setSolved}) => {
    const [selectedLanguage, setSelectedLanguage] = useState<'javascript' | 'cpp'>('javascript');
     const [activeTestCaseId,setActiveCaseId]=useState<number>(0);
     const starterCode=((selectedLanguage==='javascript'?problem.starterCode:problem.starterCode))
     console.log(starterCode)
     let [userCode,setUserCode]=useState<string | undefined>(starterCode);
     const [user]=useAuthState(auth);
     const { query : {pid}}=useRouter();
     const [fontSize,setFontSize]=useLocalStorage("ch-fontSize","16px")
     const [settings,setSettings]=useState<ISettings>({
        fontSize:fontSize,
        settingsModalIsOpen:false,
        dropDownIsOpen:false
     })
     const handleSubmit= async()=>{
         if(!user){
            toast.error("Please login to submit",{position:'top-center',theme:"dark",autoClose:3000});
            return;
         }
         try{
            if(selectedLanguage==='javascript')
            userCode=userCode?.slice(userCode.indexOf(problem.starterFunctionName))
            else  userCode=userCode?.slice(userCode.indexOf(problem.starterFunctionName))
            //console.log(userCode);
            const cb=new Function(`return ${userCode}`)();
            const handler=problems[pid as string].handlerFunction;
            if(typeof handler==="function"){
                const success=handler(cb);
            if(success){
                toast.success("Congrats! All test Cases passed!",{position:"top-center",autoClose:3000,theme:"dark"});
                setSuccess(true);
                setTimeout(()=>{
                setSuccess(false)
                },4000)

                const userRef=doc(firestore,"users",user.uid);
                await updateDoc(userRef,{
                    solvedProblems:arrayUnion(pid)
                })
                setSolved(true);
            }
        }
         }catch(error:any){
            if (error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")) {
				toast.error("Oops! One or more test cases failed", {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			} else {
				toast.error(error.message, {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			}
         }
     }
     
     useEffect(()=>{
      const code=localStorage.getItem(`code-${user?.uid}-${pid}`);
      if(user){
        setUserCode(code?JSON.parse(code):problem.starterCode)
      }else{
        setUserCode(problem.starterCode)
      }
     },[pid,user,problem.starterCode])
     const onChange = (value:string)=>{
        setUserCode(value);
        localStorage.setItem(`code-${user?.uid}-${pid}`,JSON.stringify(value))
     }
    
     console.log(selectedLanguage);
    return (
        <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
        <PreferenceNav settings={settings} setSettings={setSettings} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/>
        <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60,40]} minSize={60}>
            <div className='w-full overflow-auto'>
                <CodeMirror
                value={userCode}
                theme={vscodeDark}
                onChange={onChange}
                extensions={[(selectedLanguage==='javascript'?javascript():cpp())]}
                style={{fontSize:settings.fontSize}} />
                </div>
            <div className='w-full px-5 overflow-auto'>
                {/* TestCases Heading */}
                <div className="flex h-10 items-center space-x-6">
                 <div className="relative flex h-full flex-col justify-center cursor-pointer">
                    <div className='text-sm font-medium leading-5 text-white'>TestCases</div>
                    <hr className='absolute bottom-0 h-0.5 w-[19.5cm] rounded-full border-none bg-white'/>
                 </div>
                </div>
                {/* TestCases Body */}
                <div className="flex">
                    {/* Case1 */}
                 { problem.examples.map((example,index)=>(
                     <div className="mr-2 items-start mt-2 text-gray-500" key={example.id} onClick={()=>setActiveCaseId(index)}>
                     <div className="flex flex-wrap items-center gap-y-4">
                         <div className={`font-meduim items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
                         hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
                         ${activeTestCaseId==index ? "text-white":""}`}>
                             Case {index+1}
                         </div>
                     </div>
                 </div>
                 ))}
                </div>
                <div className="font-semibold my-4">
                    <p className='text-sm font-medium mt-4 text-white'> Input:</p>
                    <div className='w-full cursor-text rounded-lg px-4 border py-[10px] bg-dark-fill-3 border-transparent text-white'>
                        {problem.examples[activeTestCaseId].inputText}
                    </div>
                    <p className='text-sm font-medium mt-4 text-white'> Output:</p>
                    <div className='w-full cursor-text rounded-lg px-4 border py-[10px] bg-dark-fill-3 border-transparent text-white'>
                    {problem.examples[activeTestCaseId].outputText}
                    </div>
                </div>
            </div>
        </Split>
        <EditorFooter handleSubmit={handleSubmit}/>
        </div>
    )
}
export default Playground;