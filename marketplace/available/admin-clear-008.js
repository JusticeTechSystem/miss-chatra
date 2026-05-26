// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kSdk5YF85l3bWvf29h6ie+EJm6FgVvO5nmL3Ut905z56foo9flaxJsieiPYhrqBb7lcYc3aA/XcKc5w1b8ifxFt6TrsXzAh+0Xgl7NS+fzHjoqpEMjW62u1elFgDpebVA5/AaEnP2umpkzU+wHHUEX6m7HYpAWatuI1FBMCvE8DHaXvkc05IEyF3XbLEjMO653rPLntPjhZ4M/1B7oi79VS5k7/vNmJP2uoaVwiOXIY9FProAQTa43j6gMxZsdB4ZF9pkCvBq+2bHGJwNjHA/9CWf7HWpZ6U7T5o6WJRHs76srZzNqyBlWizoVspcLUf1YHaxctxiv9Fg4RTeWKooAdQzZQ3d5WBZDBZ8/Rsw+2KUkkeWRNZ1eIWai/fOxGM3M4NY0c26J7q8wKaOXowv5bRvaeW7COrADhiuFqrHnNLS1z2IEFGO8w3ubcWh3V2gxRVG+c9Iy4DSxggHlpLhMO1uPKyWlkZEdDmT4CUyb8yYE4NsIkRPjJdkzmMmRlUSZzK507uYo6zKOMeKlWPJBSw5bOjDzo/SvWebHzzxFJ3816wbEQjONIRDzlOgdu4b0PHurr5NjJUErBrr1smo6nPntGcVI34QJZ/K+LtRopTCHE3hnCTTbqnD7jf4Y+isI9YU6RQO//XMcPEJ4EoNyNTe94HCMIE5jiEoplt4DIfGSaMd0nb3dHkgjeoFFyNezlIp+n6XrEuxBPIJtvnHz8Q6IzTwq4M2jixEnHjfONzpG1RxPSInbVpP4C/U9FWDYlPEdAgck+ESh13pvGnLvZ1K+6gc8raSKkTTTGnnC3WFYc+F/SeQZNH3GuQBal78Bl65plelqV/4gDaXdN5toV0PLvAkctAujKe/5NuRmzXKitwJmG8R1kJ3EquSUcBtNm15SDCitZ3STKlSmi8mPjI3Jx4VnTMgyM0tV4MFQbk+/+nL1Ef2NIaGN3qgAVt4iEqFIE6z204kx/4SDbvMzMX3HIhZzjcS6HmeUVK/N6EZg==';const _IH='f76e1cfd52ee8ab69c4b97025c16c50a1af09ba4f66cb5514d2298ada539aeca';let _src;

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
