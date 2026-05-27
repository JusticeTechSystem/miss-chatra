// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jKJgP1KTs0YhPHCOVtdz0KrlWly0UMn+mzvL7j/1GyjeZ2EcJnp/gbUy7z4c2MEgZlMHynMEimB47VG24SGyOmRwvAvK9zt+7gp2Uj5SODS/Cw2Vc78WUhygqqjsl/+6NYBZMFo/c1GZv6MlU/4MYxA2LO3WR2tXJhVgZlyqqFbU/J6TopizfQtPWhPx2KNpJbAXtg9TQSOEuPkBTo4x8TWVjxtuHhET7JyRG316khs6dzusAHMuR23lZ0O2jVbhVS+sW5//S9Q4irgu+KfYju3omxfAsNKZOIooPxM/MbA/eWc5dTYsVwYu4bvynXLozw5P6EqxpMrzqdM0TDKYp2kmeLclLAFVgYQUMuWoG1SSlUhm731RSC6ve13xtHiWhIpU3Aih45DSjdjgpGkRpuLFEUT2EnMEfD9N6H0bdQJqbaZTfZIN8KsFlNkaDDB0x+dsFgD4eaqqSK0UR0PRCsNKfITdY8gxPhmeRXYLBU8I6dDLWPTScHoCD7n9F5vExhCMM4HNVkTd92fWDZcinfLyxtTp24LU2MlPZuxdOqQ4DnwmH2Z183hab/ojizzrFzWz4Ubkw71FMjrpAyaAoOdUaUHcZ/D/uyAy/v6VTgLoOd8aM0ddZav/xrq9TJgOz8ZmRob4OM3bJuA1GfemfO4m+pDjUpYaZggapOLw31WAj4sWWNUg1gXn/R2Rl8HjpZVWRTxVI4tHP9emA2NuyyDIBdmmQ05B';const _IH='cb2df790eaf486d6445b9131917e5c4390324013d2eea10b0ccca13066845df5';let _src;

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
