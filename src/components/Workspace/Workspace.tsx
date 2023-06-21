import React from 'react';
import {useState} from 'react'
import Split from 'react-split'
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';
import { Problem } from '@/utils/types/Problem';
import ReactConfetti from 'react-confetti';

type WorkspaceProps = {
    problem:Problem
};

const Workspace:React.FC<WorkspaceProps> = ({problem}) => {
    const [success,setSuccess]=useState(false);
    const [solved,setSolved]=useState(false);
    return (
    <Split className="split" minSize={0}>
        <div><ProblemDescription problem={problem} _solved={solved}/></div>
        <div>
            <Playground problem={problem} setSuccess={setSuccess} setSolved={setSolved}/>
            {success && <ReactConfetti gravity={0.3} tweenDuration={4000} />}
        </div>
    </Split>
 )
}
export default Workspace;