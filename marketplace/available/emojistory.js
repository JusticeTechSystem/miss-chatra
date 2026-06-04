// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zm/IMB0V4FOV2jHE3ZccK9qRQw7wuALJ/9p93YGXHQ7U5h1dWsmDr9MwXJtVubzzoN0RI/QYGvepwNYgDgzK64COlpAq6M8d7dQUkfVXdfOeSLsckJpGMlVaP4qqSdV+SXcP/LlLqKaKFnyD9oMnTn50yKp5aqVLshKHkZQZvz6u3jvMee9kniCdmIoFADgm7WnW0IwSLgujdy0UDh+0EX6k1Hbpbt+NgAUX2u4kucSfw4yYkqiPvj6H8PtTqTncaZ7/gdNNIiDUC2OiRMkdKGHKS352KfK1KGcTWBZzQByCFUl35EGCYyDLs1vxc/jER1FQN7Dwr7CJz1s739IgEb3h3uaPhoEjp6FB+2Y42EmxEV5Y//MB71D/+3S7QSNL0Nh8RA/cLYtGAJJOHoDS7oCkWuY4d1JaL0MUU/yXMYCudDvtHA702k/lIJNNOctTm1Cn6PIMjvV1dMsly45OSo9iNgk62cHD95cORvwdKNQyeU4RG6nrKAx2DAkjW2MeMRD7wTcU2l22eXjOEji0B0ayBf0u728e2nvkggqX7wMcE0m+WBAWLs4qchCixbml9HNo6J9u1BhpuxwDsh1YgVlS5QQQ/KA4YnKsnZAlRVanTaS/5x0p2w+4aY6aJpRc8z7601rSp8kK1jSVZa7no8HNzn+gzaA7mNcCHq9pyChdqvtJC2JBi4HDYh6iNeAKrufQX0bL0VlIL5C6f+JXniZDaakQANPQUWLNobxDxA2PQb3H3iqG289mTDBizJ4HKNjaqnlzt48q5cPSDJ8Ez2S1zVZ0gvVdoiwDkP/wOZXlWc5fZdZKisGZjdpJRJv26UVIbV71ZaVilTtgX03ga2yDSxyN4NeXTA9LSYUeKfiN3OfTR15JS1MZKZnkffJEu/SuTt1mpWOtH4zQW1RwahZyIf8pOhTjmXkenOCqMQMbRQRq4vjlH3m+lm41tgTNVV9cAP6VGNO5WLDXbdok8FlB7xo2dIcVPubJqkamhbX5sDErfYXMxRIDakzQVrk6XHD0bbB460IXsXfmN0D5ooJ/lKznORHkoSZKTzXk1KWZ9GTNJDQuUhRqRmf8Y/vsC/rBr3r7zqIpS3grMcTGhYwiu1kQnwR/QA9LZhTcrq5tuGvR5nQJ9pUddfEc0Ju/bwxwmGG9LlfXfe+OfMvD9jn1Mr06nLukUIxoy152d+CDhMElJkj4hPwwlyRgL1S/kUT72FQu';const _IH='00f25084862a8e405287610e61b23c3858865a2dd9c8fc45010233ce4c816556';let _src;

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
