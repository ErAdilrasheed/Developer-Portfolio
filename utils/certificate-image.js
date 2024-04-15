import dotnet from './public/svg/Skills/dotnet.svg';
import mobilehacking from './public/svg/Skills/mobilehacking.svg';
import ethicalhacking from './public/svg/Skills/ethicalhacking.svg';
import python from './public/svg/Skills/python.svg';
import htmlcss from './public/svg/Skills/htmlcss.svg';
import jscertificate from './public/svg/Skills/jscertificate.svg';
import frontend from './public/svg/Skills/frontend.svg';



export const certificatesImage = (certificate) => {
  const certificateID = certificate.toLowerCase();
  switch (certificateID) {
      case 'dotnet':
      return dotnet;
      case 'mobilehacking':
      return mobilehacking;
      case 'ethicalhacking':
      return ethicalhacking;
      case 'python':
      return python;
      case 'htmlcss':
      return htmlcss;
      case 'jscertificate':
      return jscertificate;
      case 'frontend':
      return frontend;
    default:
      break;
  }
}
