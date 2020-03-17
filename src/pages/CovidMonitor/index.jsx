import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, Monitor, Row, Displayer } from './styles';

export default function CovidMonitor() {
  const [imageUrl, setImageUrl] = useState('');
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);

  useEffect(() => {
    async function loadMonitor() {
      const { data } = await api.get('/api');

      setImageUrl(data.image);
      setConfirmed(data.confirmed.value);
      setRecovered(data.recovered.value);
      setDeaths(data.deaths.value);
      console.log(data);
    }

    loadMonitor();
  }, []);

  async function loadDetails(kind) {
    const { data, status } = await api.get(`/api/${kind}`);

    if (status !== 200) return;

    console.log(data);
  }

  return (
    <Container>
      <Monitor src={imageUrl} alt="Covid19" />
      <Row>
        <Displayer kind="confirmed" onClick={() => loadDetails('confirmed')}>
          {confirmed}
        </Displayer>
        <Displayer kind="recovered" onClick={() => loadDetails('recovered')}>
          {recovered}
        </Displayer>
        <Displayer kind="deaths" onClick={() => loadDetails('deaths')}>
          {deaths}
        </Displayer>
      </Row>
    </Container>
  );
}
