// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+htyBMCYqQMxUjZWQ0gWnQmc9xMt7bc/lV/CqGlLSCfaKC4NG+77jpHaUVDurp0IWqU8nXrPfYDV3vtbmgsXq/SVjJrjLbaq0R24QOINzfMDWx5XdOgmAU1M86jXzYfwMHo5S7uhLelzqkOM2WOuPBg9E2F7QV6/w8Mj8igScWKvoQ0UDHwwU474MsiONTiyRZH+Da5WGY8cazsj0MJ6u2G9DAQwsY43W00lD8Y9ctT4U6RhqPkiHL2XOl8XzXZIr61LUcDxwJO1ZTbDsBGWUpPCBb1V+tLO/EswnMG7+42JQ5BUzkj/YoSvk3r4KcuBIMjGkFSHQkPv78L68jrM89DUX4WEIH/2xuU6YERb3a2SaJR3rzmO/aC3k8kQp9+A2Kx6GSjL2MXBR3m4WvQ2njEce2/zUyi141LaR1yepaOH4+5iPKWpC66NeISrcj76daYFr3o0A9NOrqw0f5kveKMEbjmuLAv4eWj5g08htXET3VfgI208U9RcI9C0ZQvXEZg0xlzex3lZYDow2zp5XmpulbMMfSPBQXdcXQI3MPlGtLNPsGHRsmPkhR+KikRfmfmTxacICrnRwYZgtwQoACjrrIBcN0BRPlVTbrynsWRJ1f/ILWSqfPvOS9NRCeAsIFW7fnxP8LJbacuHIi7+9YSaMRHZGve2XT9VoG4g1Yn7ZHkgjF2NPrYqW+S5t4uJwKIT4jiraW4z38J8pO73I6IhATi0G/mtIgGEkvzhdyo6nAmnb4Grg5MuaODZHNhkjGWvuCSYjWa13n45s8jHU0jgdXX6PJFRxCTuW65b++W6WLYYYLjmxcqeIsumMLKNO+Zc2x5NsTtt9+7CqkIUlEdbRAK8xRCrCiX668ddjrrLR/In9iCRoMUevHoEJ2hKOcxmOwcf6QM/xnf5+7ZydBErWLVA5DdV+5maZMSXWNwi97uohirM+mPx3DosD4HEjHQQuZOYmzq9L+Qi2YDCkcBCxTTzZOwzvkozMBj9D7dX2qz0lAKNwBu27R7oLIMMEcqPEKismdtDFNScsiWXFoQUdRxgH9Dbeu+BHhpanadby55AcLAEqqVgYTPlRTBtN2SJtDXwXnTAHWAGPfWyIrRMkVYiqO5MEXAZSNF9C9aksrrkO7exkHD9PUgFcC5E0EhGlwBLsrQUqpnCf3eFHSC8ZAJvLrdtFNGwLchBndjAWS/b7+p3bOHbjINiPc79OeMw2TztaK1Bc2hmYydfab+1kBxlHZ6yjXGZXGTfG3CJ7rBN0r792vmjzUJQ6nhD3Ev9T5SMbXBmPNJeHw7zMUaav5Ow4T0z6tIb/A6plGx2pW6lL478z4+fu54vb+NwnwSP6iX3r3iFwYWI5EJoiqo5XykcrQwwc2vyRu1lHj9w8UL2pwfNSY=';const _IH='f21bf9c7511268d758c1a21777b256d0c2672172485f8d1a953b1eb742bce2d2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
