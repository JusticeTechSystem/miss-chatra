// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTrXxqDj+1OBHMKPEjv3BHsMaqRwMPd0/c97NG7Km+SZPOxRZGGX48f+FjbTlX5o6CpEq8hEsc3H4YbRuNqLoc+bcymEXl0kVqDQTnl01Kie6fxrvErzNp2EB1CxvbevFbtMOvgaJX6Z2/SFN2F1v2ZS8pFoDeOutdGekMyaH8SgMFc6vEiNJHoMvxH9M9QEITSbu/CrzJqNALCkcmMOLI6Cou/9der8ZS84iYWLPDIDrz7GSWhXmfAKgO/MG9d9eM1Gi0pKdLOnC/8VZ+rzNpkD5VFy8+7r0hY5Qi2ZToTFv7gOGf8ymkDPoSufnuk+XDIrTIwMhNAV/lXIjDyJGCAw0kU1yocXhlcDSEiHFZqW8TtZnWiRGmpkmLuU+xftxdxF6pKxFpfzuBRdRJLI3kGPiD5cfOE0lsgm4gO7hz6mgwFbbky/wrYcNag5E5PKEha2PZJUdck+wZvaBfBwQX8D23EHJ6maonCOVxuoEGnG/usP/Y9usRi6EHNaDr+mTJahot//pcEOrbF5y+xskA1kmAZwZ3AS/dcRheQ5SWjlLCcumIfD1B180sydA0oOgvjCiJ6sNaL2pRQq1yzzwRrEUrg+oSNrTUugdmR8Z27DrAIMa07NceDJ1HiP1MgdokM6vfHALGPKFlWW8Z3zG0xEy4sPEjpzpI9JiXJzdKT5Hl9m6CmqDN0onD0yLkBwUU5WDnglOcPdpwJ72KcUoUYUS60WIYx8j0BStiYg4ro94AD82ltNuF61VsFOuBiA9V3/b+jL6imK8TP1UM6AR8u9DvgCAvjTtpgvKp95Af+10zKe5xEsNQmXT5kY48RdrrZfHU+sHsh2Y7cFhk1jOvGAuiBrQfaWb2MXCg41Slt+8fSe2XyhJBDOQw0s6qcHh3jpxKTifciqo7OwWkKyfgTFy0Hg9guhUqml2Ni75YMal5ZceF/1nwgLq1IMNLL7ibmy8SV+qBTi2GkVOWdEy2HlUY8LOx3w08XpaCO9a8Ea9+F53wX9FqReFhs+o70lnCiUa8WXH8XUEpHVDtgTw==';const _IH='06dea9f3a696c754ca045568ccaca443204315d437031e92a5921fa17c9ef502';let _src;

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
