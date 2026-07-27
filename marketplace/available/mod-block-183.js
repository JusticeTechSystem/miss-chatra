// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQo28fYEzGJSu6RPo1njMCIdjHZROXAi1lfyGDDBaIk0mkf1cZMM788crvPPPSpiZdbXMREnFPkF0hlsHbYpd4Fkg5pEAs98yPrjY3D+1ZgXkMjMpq+9QIeCdJZkRv4kRogoKNmadZqDoYIZRuMLcoo5xUAjzkf4lUlonRvUpnMwka7IanyLfatRA4raOi1XgDSkcnW+PhWVzsssiJ2Aozi6bxC661frT4Omd+w2jIH1/Iwg46n/vbzv0uwz7AS1PXYOmPh6UyuAfEqq8i7HL/kvRHggQSDUaoTwpBtVOfdCxRPmALGbBK0gHwsjQ7uo2IHSEOvQ4UKITLc7w+8fZw7ONOQdqDRBQPwNeblc6V/dPXOmh/ZYNOncn0OOGMzGH0PSvwKf+1gVVpDPz+I/tqcMV3pwRqyiTYQoxwSdrorSwBz6OJYZ8O5u0pa51pBPg3HwZDUXl4rMLlZdagYNjhRQ/iae63J0WJbw9mx6v+Gb7DHeplltlhqhWYaorDL7w+UZ6AcjSUV9DwNH+W5AjPEA0Kh2lHgkokjbxmwcV+ldEkPx64ni5h/9+jPXM5mh83TumHVLHuqogDY8g9IXE0dvdtkn5YO6AaLMoXXAAB0ffkWW+QJasDtTKp/Xer7teQ+1vClbFciKk3FDWCfuSURso1xwoR3xRgIShFUY3lZVkh0EjCOjfVHz2/ePeSdJ0zXaWJeAg6yCif01Sk+aK0Bi4e6lqC+Gb1eFWuS8RYurBrfZI9YmXaNeP4BupI0xm4F2H7W9m+SYeSz25nOSYMfibKCcYvNqieZfMIJQsgTeHCzmk9klDVEIuJFZONRhaUfetzAjb2acxZ+dLSP2YwBIGBvgBk9canJ+46PJYIwZadT7JaGAl1TsUn/m/tcQ7eIjrnV54cwvWIFKXb2L+QTHGlVZNg+Ijrs86O/7saikxcCZq806/881dls3TTx/oPYqVAg1H8++Bv/FuCXTWz2mFu5ys9a1hGfWV4fCSfVyDTT8RNt4B+XI4WMwczP1tnzUAvqyInL1YJwOhlULdm2WYzaSBtbh5D47Eze2YFHaFQKbb/XkzRYA+lqlhkuRusYBw3h7BfT9iWD4GytFAJzQS15LHZwCL9TETBMyZnjlSHiaZIIqLpnRdNWkj45CJDn7e0vCqtaqBHJWXia31StkjfQ91VqVPLOquoLKwAeqYLm/sZ38UErTDEtMvxsnn/r0M3BaB9VDJvcZ57ebHh8IDFi1zpH8f9DdMRB0tu7uG8bZJRdTd7LjaVIkEgdJbYWapIcigqAByk/UpfTDjoZu45OF+3kRdC+2EORu1YaPvE1Cb0N7MzdYiMhPx2MsqU1omPsVjOUX9sxYHTtuVYr+EI1D3m0wMEfus5FIzg=';const _IH='c39bf0512e11673f2077b0df830b0ead7c2cc64791838d477214a70b8e4bbc06';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
