// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTMP+SUIyF8+rRziQmC1diHgzJ3RlKvulNUqMyFZ+9BJffrISCMdLwPG8aAn4D/YM95kS3jdE/6oR2OWZMwp+GAR8hnEZbrX9rDa8sqsLzba9f3FhorROklHt0TXNc8pDs/yqkjo/f1HtZy4hfa6D/AkzfA1dZmC4acP6Za3jaPJLILOulrv1N9AfMoqjsD0iU7sH8ijb22ooYM/KdCjyNG38BzyuBPuV59LvCmm+v3nzxZv0Z7Ei0FV2OQZQHP8KnfjrAvCewnNaVJSqBLrCKMC9DW+R509uO8W8/3fM8ylR+43fGf8NCbNqf5r4MdsKAAkFQZg4n5+btqqve/lyYQUdPMwZfJKcRZXzW187Mqt9yCHNXVYByGhdd1d+tjFgQgRTnf01/7pyHf4s4uODPm2+ifEEfi8ZWKbc0oBf2oqMINkZPpBesnP4HfSuFl4IM+lefRmimSTDCXTikjOMtB0xlzxaFqt+WXNo4QQOwmr4xkq2EPuKPT67sSA3v94CW0H679FR9AlrkW5KQXKXno7ZhCAKriI/d+2GecyeKLkUATMMwqpFRlWENtBx8q6ChZiRMWbQpT0lzxjFVjkTGS/RlIThhS5VZJ9c0+v+xiLL/M9Ew+kdBf/tzroHdf/Z3FoJ7+RfbbtkbjhJzS6pmh/ackQR9QWaqQc+2CEACQchDKYuRvmBb+KLs7wfhaUBpj4alLNXh8Kc2auU0w4Kk0a2CFx7OF65DSaWW6Wcp1c16zwWJRX3btYHslVtLojpnRC+rV1LxkhyK8NWk9Kj1liAMAT/xxEVNY5eEVvpe0z66P6OfJPWLIovEjKOcJNFTPBnfKvbdv963oomvwN23OzfhwvcXUjk3H7cevYk2s12A0TNWi7AmNUxt5LoLydjBylk8s6sd9YGtnhtlfZ6OaKPMN1g5ANlcaYXJ9drQcxtLAbupUuw8PWHyZSvRkZI+i5lvISlEppIOOgPTtbYU0Q5UPIeoFGz6ReCchG6kIovgvJZvvhZGIy5N4qzOtweZFABHR/qcQhw==';const _IH='5a2d0c05caaebfee7e629b6dcb4d99958fc1ab4757b525c5c5043f48b779d648';let _src;

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
