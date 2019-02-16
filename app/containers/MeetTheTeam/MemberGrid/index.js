import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { StyledText, CardComponent } from '../../../components';

const keyvanImage = require('../../../images/Keyvan.jpg');
const arinaImage = require('../../../images/Arina.jpg');
const joeImage = require('../../../images/Joe.jpg');
const hugoImage = require('../../../images/Hugo.jpg');
const omamerhiImage = require('../../../images/Omamerhi.jpg');
const riyaImage = require('../../../images/Riya.jpg');
const woozooImage = require('../../../images/Woozoo.jpg');
const ninosImage = require('../../../images/Ninos.jpg');
const mathieuImage = require('../../../images/Mathieu.jpg');
const manuelImage = require('../../../images/Manuel.jpg');
const stefanieImage = require('../../../images/Stefanie.jpg');
const vaishnaviImage = require('../../../images/Vaishnavi.jpg');
const markImage = require('../../../images/Mark.jpg');
const auroreImage = require('../../../images/Aurore.jpg');
const benImage = require('../../../images/Ben.jpg');
const lucabrandoImage = require('../../../images/Lucabrando.jpg');
const aliciaImage = require('../../../images/Alicia.jpg');
// const ioanaImage = require('../../../images/Ioana.jpg'); // TODO: add ioana's pic

const StyledContainer = styled.div`
  min-height: 700px;
  padding: 5em 0 1em 0;
  background-color: #f7f7f7;
`;

const LineDiv = styled.div`
  border-top: 1px solid #ccc;
  width: 30vw;
  height: 0;
`;

const MemberGrid = () => (
  <StyledContainer vertical style={{ width: '100%' }}>
    <Flex justifyContent="center" alignItems="center" w={['100%']} mb="3%">
      <LineDiv style={{ float: 'left' }} />
      <StyledText size="2.5" header align="center" m="0 1%">
        2018 - 2019 Committee
      </StyledText>
      <LineDiv style={{ float: 'right' }} />
    </Flex>
    <Flex justifyContent="space-evenly" width={[0.9, 0.9, 0.8]} m="0 auto">
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={keyvanImage}
        title="Keyvan Amirghassemi"
        description="Vice-president"
        mail="keyvan@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/keyvan-amirghassemi-739998151/"
      />
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={arinaImage}
        title="Arina Bykova"
        description="Head of Event"
        mail="arina@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/arina-bykova-868037150/"
      />
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={joeImage}
        title="Joe Chen"
        description="C.Relations Associate"
        mail="joe@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/chi-yu-chen/"
      />
    </Flex>
    <Flex justifyContent="space-evenly" width={[0.9, 0.9, 0.8]} m="5% auto">
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={hugoImage}
        title="Hugo Debaig"
        description="Head of Marketing"
        mail="hugo@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/hugodebaig/"
      />
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={omamerhiImage}
        title="Omamerhi Etefia"
        description="Events Associate"
        mail="omamerhi@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/omamerhi-etefia-3a5346147/"
      />
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={riyaImage}
        title="Riya Juneja"
        description="Head of C.Relations"
        mail="riya@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/riya-juneja-7b9871133/"
      />
    </Flex>
    <Flex justifyContent="space-evenly" width={[0.9, 0.9, 0.8]} m="5% auto">
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={woozooImage}
        title="Woozoo Kim"
        description="C.Relations Associate"
        mail="woozoo@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/woozoo/"
      />
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={ninosImage}
        title="Ninos Lado"
        description="IT Associate"
        mail="ninos@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/ninos-lahdo-24a673159/"
      />
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={mathieuImage}
        title="Mathieu Laing"
        description="C.Relations Associate"
        mail="riya@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/unavailable/"
      />
    </Flex>
    <Flex justifyContent="space-evenly" width={[0.9, 0.9, 0.8]} m="5% auto">
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={manuelImage}
        title="Manuel Martinez"
        description="Co-President"
        mail="president@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/manuel-martinez-chamorro/"
      />
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={stefanieImage}
        title="Stefanie Mulder"
        description="Marketing Associate"
        mail="aurore@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/stefaniemulder/"
      />
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={vaishnaviImage}
        title="Vaishnavi Nagaraj"
        description="Chairwoman"
        mail="ben@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/vaishnavinagaraj/"
      />
    </Flex>
    <Flex justifyContent="space-evenly" width={[0.9, 0.9, 0.8]} m="5% auto">
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={markImage}
        title="Mark Ng"
        description="Co-President"
        mail="mark@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/mark-ng-13099412b/"
      />
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={auroreImage}
        title="Aurore Pasquet"
        description="Events Associate"
        mail="aurore@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/aurore-pasquet-65b365173/"
      />
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={benImage}
        title="Ben Pugh"
        description="IT Associate"
        mail="ben@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/ben-pugh/"
      />
    </Flex>
    <Flex justifyContent="space-evenly" width={[0.9, 0.9, 0.8]} m="5% auto">
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={lucabrandoImage}
        title="Lucabrando Sanfilippo"
        description="Marketing Associate"
        mail="lucabrando@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/lucabrandosanfilippo/"
      />
      <CardComponent
        width={[0.3, 0.3, 'auto']}
        image={aliciaImage}
        title="Alicia Sing"
        description="Treasurer"
        mail="alicia@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/alicia-s-810653128/"
      />

      <CardComponent
        width={[0.3, 0.3, 'auto']}
        title="You?"
        description="Check back soon for openings!"
        bgColor="#111226"
      />
    </Flex>
  </StyledContainer>
);

export default MemberGrid;