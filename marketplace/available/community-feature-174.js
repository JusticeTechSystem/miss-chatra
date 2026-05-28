// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2DB3EiHxn+BXoVAXNVCHuaA9zuRFDQe6BLncoAEILrH2Kae6ZZ+0JLd25PczxTCLylLnB5rJnc4h7CgCia/0saNGKxaKYpSCexEoSgRmrOCZcZJFzTNYrTBWI4p4cPWts9tlvR4RggVP+e7JMg1HA8CQqvdIpbBgWdzY5FAumCziE8vJLyZbMMmnxWWRdxWX/GvWlhGuF8gnWOZIkupg/zvQq7WEu++WAxtg4WKRr7UE8nvrfEvIj8AZdHQkXnPqBglnqPraa2pgeq+3xA2xQHGnkTo4Pw7/3CAIM+UVGxsIsQVPCsWlfdYhytTNiTyCtHqip/DSFq3F+2LJhrn8DPqaePrvCJBQiXlIzWfCksc1AKGwgHrKUEO5Z08TXgAWK/NOUaUzKSwN9OVZjMjc2/2seVWK6tFwU8N30dg3eltb8LLgnvK7elLDSbp7BFCK9y5ud3c22gA0Xrag4oUwuGdTExGo7RTSuCW38b4bu/mgxuDWwxcPMtGA1KzxbhzhFGoxkeTAG5CE5TDWI/FJSpEoW3CR8yKlK3VRgkb3/Ne2CtsH6VoZBq9XWsc1ykBMJMEsz4WZccWJRyfkrnJTq8ezQtyMvQoWUwID+NVXVQ+MaQDpAR/q7ZfFIlHKgAKgdX6dY4bH0l8Q0kKHLuiNLTlSb8pW0rAmsWg+vF+uCe7DJlLLfCb9FXXcwwiY7pVpekXbWHFfqkHusVF97FE53MqHYExeroIAbnxmsXgzNQRWFgjIrNk=';const _IH='a57f00adf4f746fa809ea442605f563a83b3ab7df8daaba59b47301d6e72d8f7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
