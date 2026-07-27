// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCqmsqoKcFXl042tewi+rsNiCnQzRVnZ+I5SvYQ55L2u4dMDtbJDATiBPr1Y21RtIlT4irWJ5VM3imUnInMyvHt//uwFsNdLfsA0VtT5U/cHsHwLoDIuZYvesbhZZqfMP8Ik8zJxdvVH4RInicbJxcP2cSyiFcaFVLPDq9ZeinjyJXlWRuh5sPFyKYqiRP0USqmdL78peGD9wMm86daW6pQTn5YTpiY5K0cBqi68oB+7M92OyeqM7sVcxQ6UsyX8QjszQ9Cuaziv2dUaBlAvF/tSW3RVio4mmkIA5fcYbzqyrT7b59l6OIL+pELkkqhOaB9emUjGFZN6HoyWHhAtsiD+5wWEoReM8YQ4udV9Sz0VtokLMMG3x5lG45kNERZWWvHRNxGl4wxR/eVcQL9bO4mVvu32p7/6lAw2OXU/Fl24hgK7zRez9NDYkoJ1TY2ZYjllFPrzmu/6n+y201vDmP9yhjgSnAPftSWAg1dRH6QaGSRhERzZc7A6gkU2nQIsKbkAiAVpnXTwF8925/R8euZHsbUIc+4zcR6veTw7NagmqwhjO+gk0ovApjWwk+JbRf2Y/CzMHtrL+ay4JkKoJWJfs0Yy6xV2ykm978GNsjS9BZRAeZizWjidvPBlesw1VRCoF5M6VACuMCzLma0sMRqItMIBa9/lAYYCOBYxita1dBUYzQY/LrLdLMmtfDJpDI3q1dmQiNtuw7UoMIlxp7qLLZr1hVAP4jguVnslCvCDPA6QlTL248nGagILoigsetqhkUK8or5cTMdGgVIWe89qAcQCyalDf5ILZXy4ufU6qDv+enqSF2Jw469s6pNgzPQG0fsJUOK4XlYPAJ1E2RfTCSdsP9VST9Ote0Sv1KS8M7mDslagLcUFEAJpOBgscu+n4MF/cbiX3EXu1/dhUDPfunioXxbFzLzvqecqThVqvBIGSTBrJDghLO0b08yp4RK5SB/DkCypibLdwLmT+qqs+kYCxFbXq2oscdQWeQnSljLagKLd9tfTGsFQ42hKXwntWJTB+6ITXG6s20i6WgoGhYD6rsttZTnrArkvkpd4YK+ZbRgofkHrHF6HNJT3R8DsQYa5Il9UfkS1GTpDxdDvTIBdSvhKhwiQih/OOvts0tsqWFiJlZXrWTHCprOXzdk20ZvQYepALP0iPQ7BegZZmo7LbG7LnwzGZRNti65AaZuGz2kdk+BmkV1M3fKK8QRsUn1KLtAzC/m+uGHGU7kIYF6YR5TG4n8ZV5Ccswo0fNWhCAAFg+s7CwBxsHto843U/dvrCCxPik8ejir30Gv+fXRcjwnKRII3K9M/k1+fUM4jiqphPj57cF7cgwxv0SIyKuJOjshKIqGJYk+mdeS+cZj1S748VgY85uoRqcFYC7ImZJMmZ19Vwh6CEZicdF5s3NmBsFZbLYkqem8cZvg62xSCWFL6rPfc8y6lOdxHnpigGcrarL7dw0zI2/b8hqp2Oz3JqhgRIOnmSX029434YKJ66rz/VACJRqEQ9ia70vyCimAUblfwiBxlUmsAAWLDVeI2+7cdijG5tQrB4FNi6/AUkWEkp9NN596ymZoqGTV1IWPl361WbCzUtwtMa1sP9AuB1DXBgVShvmMMniZrccCGsKAfaETGrRZroar+ar0S5QR1chlx8ZDR+cbWAqanYQKaBOcpJSSYmtUanKAobIwqqxDLry0oZh7mQCax9PviRxdZZLvF3nrL1TGTd7Q2rOmiJa0oWTh98DBBHkTdPrs33OYv/d3JhwZtaMFkVTAGEkJQJUF6g3t1QCu59q617C+Nl4hEYDoEiSIwUvvl8Z';const _IH='75b8851b020b097d8d553a0f9dccc7c83bb2dce893c0302f1a249421d9571cd0';let _src;

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
