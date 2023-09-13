import React from 'react';
import { useState,useEffect} from 'react'
import { AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlineSetting } from 'react-icons/ai';
import { ISettings } from '../Playground';
import SettingsModal from '@/components/Modals/SettingsModal';

type PreferenceNavProps = {
    settings:ISettings
	setSettings:React.Dispatch<React.SetStateAction<ISettings>>;
	selectedLanguage:'javascript'|'cpp';
	setSelectedLanguage:React.Dispatch<React.SetStateAction<'javascript'|'cpp'>>;
};

const PreferenceNav:React.FC<PreferenceNavProps> = ({settings,setSettings,selectedLanguage,setSelectedLanguage}) => {
    const [isFullScreen,setIsFullScreen]=useState<boolean>(false)
	const handleFullScreen=()=>{
      if(!isFullScreen)
	  {
		document.exitFullscreen();
	  }
	  else document.documentElement.requestFullscreen();
	  setIsFullScreen(!isFullScreen);
	}

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value as 'javascript' | 'cpp');
  };

    return (
        <div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full'>
            <div className='flex items-center text-white'>
				<button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2 font-medium '>
					<div className='flex items-center'>
                   <select  id="language-select" value={selectedLanguage} onChange={handleLanguageChange} className=" bg-dark-fill-2 outline-none rounded px-1 py-1">
                   <option className='bg-slate-400 text-slate-900' value="javascript">JavaScript</option>
                   <option className='bg-slate-400 text-slate-900' value="cpp">C++</option>
                   </select>
					</div>
				</button>
			</div>
            <div className="flex items-center m-2">
            <button className='preferenceBtn group' onClick={()=>setSettings({...settings,settingsModalIsOpen:true})}>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						<AiOutlineSetting/>
					</div>
					<div className='preferenceBtn-tooltip'>Settings</div>
				</button>     
            <button className='preferenceBtn group' onClick={handleFullScreen}>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg' >
						{ !isFullScreen?<AiOutlineFullscreen/>:<AiOutlineFullscreenExit/>}
					</div>
					<div className='preferenceBtn-tooltip'>Full Screen</div>
				</button>
        </div>
		{settings.settingsModalIsOpen &&<SettingsModal settings={settings} setSettings={setSettings}/>}
        </div>
    )
}
export default PreferenceNav;