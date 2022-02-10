import styled from 'styled-components';
import { device } from '../../styles/mixin';

const ContainerStyle = styled.div`
	width: 100%;
	max-width: ${device.starter_kit};
	margin: 0 auto;
`;

const ContainerFluidStyle = styled.div`
	width: 100%;
	margin: 0 auto;
`;

export { ContainerStyle, ContainerFluidStyle };
