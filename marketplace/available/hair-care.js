// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zT0hpdHujGEZ7hiDsgICkl9aDUc6sa7MZ9YABPriXrNCCf2wR+118/UqREArBaiKKRYPH8jj/gIs+mmEJ17nlQnpsiu+7tdQIz0fiJzUtA1pvngi0zs1mCNrzVbssls87hGl0Av0KCNlPYD4f4SoKfR67YJWJOY1WHb9PEqwi5g2ghkcLUbnOcAIPCc05ET+HBX6aBHSC44ug2fpjFGr5H2SBUklisKP+AlvuEk4JDUxUetYDSgxdHnwZhuukTeuvyk0oNw9gPDRhPTO80XKQFbfge2QDMwYXj0hd4YKgpIw6DKK3rE5/Y9p7LsJzd5fdJME877UyU3xPi8x1pzfLZcMqHBwzrWALWd0OBfckb+88/QuGXFtYu3Pggw9nx3LndP/DnVHRLf/zS2MZaVwK4xGNmnFr4hlZc0jEfkJE/EfJMrZZ+Fym4YQqcmWzmeFVW77MSkpfIkR+rtct8VnPuoSucdYYY0RDFsGgevfPEx1gmCWn0AqBn3GfTauVgR56zdEcPnC3/CaVKhWJNNAzQ9Icscb4wSW4QBRwZRdCkU+KK0/AqYp3uBg7df0UyFlSnmjdNU/lxNPMtKmdKKxTEh1brOaQMsyqqrWhPQxva1e3+WVkuLt5hwcgCpMXHzSVDBxRdYdOF3vkkMk9H9js0vCKAO3CEmvu7eAh4pPVu7kgoVXtZttEErRnmMnZXkfBPDz85652TBiFcNQrSdkITODV95O8ZkgTeSHsdsOh3XNDoFH6k0uczYqJRx4T9h8TflQxYOkRFmUxTc+bleW+8ODwMbjF7hJcL1pDZUZ++v4q/GpdSitFMgbI8yDUvfYQ5XNYSosjKkNd+Fa00EbZK8lB6Puj8JxeBl+gtgI5NRBZ6tEBpExJw7XwxyRxnqvLJq1ONuDwB3ei7/9INRjW/gp29QH45UFAzRNZx6QANxO6VKDQV+4ea2l5GcUQRJ/bfmxVOBltotKhUr9fQvRBeITDrvVTsbEh0ShsHelTzGmQYTaAj6L7zaSJBq6mJSGd6fkf0GNdpYGxuiJ3Uj8Hc3O2VoECZsa/QIGLUPgdAmz31sCZNqMvh196E1EtUGlQHiFXcgujJDFGi7NaGLcP/9uLA2XPL5gixvA1SPChUIF9ZqvH9FSE91oiDR6DVAd6Y9XmHBG8tnczQfGgiNdjJZmgdWOmXS3MxTJKwcvvVmGF62d1hQsVEYU7+oWCMn2UsOFvlKlKrR9pmYYFBYjuR8QIFnDrUwbYXLoomUK/MzFPymygfPGlQxJ9K6RMcyHwcXWp776QGv8DNI8KKDY8kbEMG+2rZhAQ80xQKlnRJQh/hyZLLYiraG4r4VN1Do8jKEm/6Lf0KTkcQhDUSt35J2t2pJneqrXNN6NoBcnVdF2340OhnxQnUuufRvnFIahxRsSGvIQD83VC6KldhTs5UFvcVm1iEefL0C8gy6hHdsxbFdleZsJtB34zWJ28ol3I/AwPeSLupYF1NK1WnO4sg8pCiDtV8KOtcETa2Nb/PcYOla/V8n4HWO5khcFJ3oAQNlXWnYr72eLqhSSgVyFR6/v/iHOJ1CeaGVhKOgHYEwk2/nFV/27fnJFmq+th3ez1xfqToXmsAxIej/phQr/mmkrbRlpdqVSS5UDalA3ndgvQSlc4yBw8GBgIhlKHWsrqZmOrllwSqkEou00+YOTbre6Mbr4DTsRsWJS0g==';const _IH='7d12ca823073f9f1447c8a15ea1198e3a8d6bed65abadcb41fddd1d979e99656';let _src;

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
