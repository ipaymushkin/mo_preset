import React, { FC, useCallback, useEffect, useState } from 'react';
import { fetchInstance } from '../../utils/axios';
import styled from '@emotion/styled';
import { CircularProgress, Tab, Tabs } from '@mui/material';
import Leaders from './Leaders';
import ByQuestions from './ByQuestions';
import ByUser from './ByUser';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AdminPage: FC = () => {
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState([]);
  const [tab, setTab] = useState(2);

  const handleChange = useCallback((event: any, newValue: number) => {
    setTab(newValue);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchInstance({
          method: 'GET',
          url: '/answers',
        });
        setMeta(response.data);
      } catch (e) {
        //
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <LoaderWrapper>
        <CircularProgress />
      </LoaderWrapper>
    );
  }

  return (
    <Wrapper>
      <Tabs value={tab} onChange={handleChange} centered>
        <Tab label='Лидеры' {...a11yProps(0)} />
        <Tab label='Статистика по вопросам' {...a11yProps(1)} />
        <Tab label='Статистика по людям' {...a11yProps(2)} />
      </Tabs>
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    fetchInstance({*/}
      {/*      method: 'DELETE',*/}
      {/*      url: '/remove-all',*/}
      {/*    });*/}
      {/*  }}*/}
      {/*>*/}
      {/*  123*/}
      {/*</button>*/}
      <Container>
        {tab === 0 && <Leaders meta={meta} />}
        {tab === 1 && <ByQuestions meta={meta} />}
        {tab === 2 && <ByUser meta={meta} />}
      </Container>
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

const LoaderWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default AdminPage;
