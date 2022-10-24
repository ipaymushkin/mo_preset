import React, { FC, useCallback, useEffect, useState } from 'react';
import { fetchInstance } from '../../utils/axios';
import styled from '@emotion/styled';
import { Tab, Tabs } from '@mui/material';
import Leaders from './Leaders';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AdminPage: FC = () => {
  const [meta, setMeta] = useState([]);
  const [tab, setTab] = useState(0);

  const handleChange = useCallback((event: any, newValue: number) => {
    setTab(newValue);
  }, []);

  useEffect(() => {
    fetchInstance({
      method: 'GET',
      url: '/answers',
    }).then((response) => {
      setMeta(response.data);
    });
  }, []);

  return (
    <Wrapper>
      <Tabs value={tab} onChange={handleChange} centered>
        <Tab label='Лидеры' {...a11yProps(0)} />
        <Tab label='Статистика по вопросам' {...a11yProps(1)} />
        <Tab label='Статистика по людям' {...a11yProps(2)} />
      </Tabs>
      <Container>{tab === 0 && <Leaders meta={meta} />}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
`;

const Container = styled.div`
  margin-top: 20px;
`;

export default AdminPage;
