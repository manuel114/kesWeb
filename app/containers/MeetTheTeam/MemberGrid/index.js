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
    <Flex justifyContent="space-evenly" width={(0.8, 0.7, 0.8)} m="0 auto">
      <CardComponent
        image={keyvanImage}
        title="Keyvan Amirghassemi"
        description="Vice-president"
        mail="keyvan@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/manuel-martinez-chamorro/"
        style={{ dislay: 'flex !important', flex: 1 }}
      />
      <CardComponent
        image={arinaImage}
        title="Arina Bykova"
        description="Head of Event"
        mail="arina@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/mark-ng-13099412b/"
        style={{ margin: '0 !important' }}
      />
      <CardComponent
        image={joeImage}
        title="Joe Chen"
        description="C.Relations Associate"
        mail="joe@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/mark-ng-13099412b/"
        style={{ margin: '0 !important' }}
      />
    </Flex>
    <Flex justifyContent="space-evenly" width={(0.8, 0.7, 0.8)} m="5% auto">
      <CardComponent
        image={hugoImage}
        title="Hugo Debaig"
        description="Head of Marketing"
        mail="hugo@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/manuel-martinez-chamorro/"
        style={{ dislay: 'flex !important', flex: 1 }}
      />
      <CardComponent
        image={omamerhiImage}
        title="Omamerhi Etefia"
        description="Events Associate"
        mail="omamerhi@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/mark-ng-13099412b/"
        style={{ margin: '0 !important' }}
      />
      <CardComponent
        image={riyaImage}
        title="Riya Juneja"
        description="Head of C.Relations"
        mail="riya@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/mark-ng-13099412b/"
        style={{ margin: '0 !important' }}
      />
    </Flex>
    <Flex justifyContent="space-evenly" width={(0.8, 0.7, 0.8)} m="5% auto">
      <CardComponent
        image={woozooImage}
        title="Woozoo Kim"
        description="C.Relations Associate"
        mail="woozoo@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/manuel-martinez-chamorro/"
        style={{ dislay: 'flex !important', flex: 1 }}
      />
      <CardComponent
        image={ninosImage}
        title="Ninos Lado"
        description="IT Associate"
        mail="ninos@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/mark-ng-13099412b/"
        style={{ margin: '0 !important' }}
      />
      <CardComponent
        image={mathieuImage}
        title="Mathieu Laing"
        description="C.Relations Associate"
        mail="riya@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/mark-ng-13099412b/"
        style={{ margin: '0 !important' }}
      />
    </Flex>
    <Flex justifyContent="space-evenly" width={(0.8, 0.7, 0.8)} m="5% auto">
      <CardComponent
        image={manuelImage}
        title="Mark Ng"
        description="Co-President"
        mail="president@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/manuel-martinez-chamorro/"
        style={{ dislay: 'flex !important', flex: 1 }}
      />
      <CardComponent
        image={stefanieImage}
        title="Aurore Pasquet"
        description="Marketing Associate"
        mail="aurore@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/mark-ng-13099412b/"
        style={{ margin: '0 !important' }}
      />
      <CardComponent
        image={vaishnaviImage}
        title="Ben Pugh"
        description="Chairwoman"
        mail="ben@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/mark-ng-13099412b/"
        style={{ margin: '0 !important' }}
      />
    </Flex>
    <Flex justifyContent="space-evenly" width={(0.8, 0.7, 0.8)} m="5% auto">
      <CardComponent
        image={markImage}
        title="Mark Ng"
        description="Co-President"
        mail="mark@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/manuel-martinez-chamorro/"
        style={{ dislay: 'flex !important', flex: 1 }}
      />
      <CardComponent
        image={auroreImage}
        title="Aurore Pasquet"
        description="Events Associate"
        mail="aurore@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/mark-ng-13099412b/"
        style={{ margin: '0 !important' }}
      />
      <CardComponent
        image={benImage}
        title="Ben Pugh"
        description="IT Associate"
        mail="ben@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/mark-ng-13099412b/"
        style={{ margin: '0 !important' }}
      />
    </Flex>
    <Flex justifyContent="space-evenly" width={(0.8, 0.7, 0.8)} m="5% auto">
      <CardComponent
        image={lucabrandoImage}
        title="Lucabrando Sanfilippo"
        description="Marketing Associate"
        mail="lucabrando@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/manuel-martinez-chamorro/"
        style={{ dislay: 'flex !important', flex: 1 }}
      />
      <CardComponent
        image={aliciaImage}
        title="Alicia Sing"
        description="Treasurer"
        mail="alicia@kingsentrepreneurs.com"
        linkedin="https://www.linkedin.com/in/mark-ng-13099412b/"
      />

      <CardComponent
        title="You?"
        description="Check back soon for openings!"
        bgColor="#111226"
      />
    </Flex>
  </StyledContainer>
);

export default MemberGrid;
