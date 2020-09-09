import React from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () =>{
    const options = [
        {value: 'Rodrigo',label:'Rodrigo'},
        {value: 'Maria', label:'Maria'},               
        {value: 'Ana', label:'Ana'}
    ]

     return (
         <Container>
             <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options} />
             </ContentHeader>
         </Container>
     );
}

export default Dashboard;