// components/PYQList.tsx
import React from 'react';

interface PYQ {
  name: string;
  path: string;
}

const PYQList: React.FC = () => {
  const pyqs: PYQ[] = [
    { name: 'CM MTE PYQ 2024-25', path: 'https://github.com/soham-datascience/mujcentral2.0/blob/main/public/pyqpdf/CM_MTE_Sem-I_2024.pdf' },
    { name: 'EP MTE PYQ 2024-25', path: 'https://github.com/soham-datascience/mujcentral2.0/blob/main/public/pyqpdf/EP_MTE_Sem-I_2024.pdf' },
    { name: 'BFE MTE PYQ 2024-25' , path: 'https://github.com/soham-datascience/mujcentral2.0/blob/main/public/pyqpdf/BFE_MTE_Sem-I_2024.pdf'},
    { name: 'EMM MTE PYQ 2024-25', path: 'https://github.com/soham-datascience/mujcentral2.0/blob/main/public/pyqpdf/EMM_MTE_Sem-I_2024.pdf'},
    { name: 'MFE MTE PYQ 2024-25', path: 'https://github.com/soham-datascience/mujcentral2.0/blob/main/public/pyqpdf/MFE_MTE_Sem-I_2024.pdf'}
  ];

  return (
    <div>
      <h1>Past Year Question Papers</h1>
      <ul>
        {pyqs.map((pyq, index) => (
          <li key={index}>
            <a href={pyq.path} target="_blank" rel="noopener noreferrer">
              {pyq.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PYQList;
