// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0gKqZ+WaGn051aLNge/KaMYMPCeeEUChs+DtdzNcTeWQNsf7iIlNz8EqLiEMaWnBP7punvC9/Kolj4yaeCUVQ9pKLcZ2+LJmEdeUQue2RXa83rsmZSU5+RNM1JDQD3lHpEv3EztIDwvXKlh1apZ3xzYP9unPGhcIy5FXWXBpUl8FE3pQo17CV6C/Mlnrv5Q2NOLARuhRy7JOWwf7RWPs++4opsiM2Dvn2OYo8MPFD5KSYsij1G0i7/+/jRT36e6Tmcfc+8yr6xwqgu9CalrVQYLnNmDnUKUNJBrT45/eyLPehj6vHcoLOKc3rDPdtpUNxM4rTsjIM/wyGn5RS9ggX8zPCG2fPyo1ykUT+Yf7G2zYn0CzRNb7Z7+jztzRR6YdwWNgrRkOU5Z87XE23pO/UKLzETtlidoJtEsA9y1sbY5K5tiPYTeXHgmfHRI2gp6WeunNpjwrHTvntJLZble5wtvRLrAE+I6pB27qnt90PMh/JfqqdncNiGcZ26GQpFEFGP+wRSltXUKfrjaGD1WkutHKad2Lb//7zY5sHHm9fK/riqSFZTSWgzBpckY6JlcU27LVWLqLDZEa0LM0om6ev//5Z5TehV+6jd+PrIsx2ewAZ6toQlwAmOeC7LwmbbdnEo7lYWb9NZrdo8dXycUAIuqf3JHGRpig9+Tn/H9/aJkONyk7cVk85lDEeuwb5zyLGrKaB8pxMHv4/eozVNofcf/8MnKMtV+CiHvWXDih9RoC95FvGUa5QN3ch9PyHxkBQOg5N0V8khVctckyquSOYTC4EuR7DMu+TnwnzK3gX8kURUMM55PxnZMC7Aivl0USG6u9yeDXuWFJujYPWCf3wrttIj8W+6i2mrEFWw2O+WGP2UOEw/qHMOi5L6z/oLVsBRC0Ex2kFlOeHzP1RM8f+ix2t2lSdFzSr4FvlWum+kvscOuEJsdSLCC8r9WWzON1Je+2ICin/Yq8SdcMKaYxWj1Lr6wY3NxQo5AIfFSIVel9y0pFNeTNcFv2QOTFevNZ7PUqIjUpTmJCiMNwHf1evupID3RVt80AnFp2sHXerGcp4T6Vf4FtL5sMBoEB9otE7lXgNqmacH7I2e2n+jJLum1I+YLODyy5AYxCH342d/kyLb+znlBBdUe0fVmsZuKdAvRNaXuwcbJmKD+HVpzd8nA/4iTc0Yu4L9moM48LffkwmA0xM6/z/apZ6GnK/7vNtnadwKzcBHnmTat10mPdFA+dlffOoZfeBkE+7J8Sos4G9Ac/MNaA2ayouqQHAsrfn4NwJzqh6nWU+wRaouS5OPVQ8rSxT+cVFtqK7rtjluycvDTHLg+/XFkTOT2JOOswOycFPhwLbQumEgEPonXZCt2G1OZ+x2ZI79HzyLQwEtJgoBnfSBLUJA==';const _IH='d5298a562371e638b44d7d89b2a7764d1cb1adcbe53410ef1a325cf124e780a3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
