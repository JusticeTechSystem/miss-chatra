// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n2NRXwODCgn2ac4UHGI0EoEwCtgnqGd6eye81JSsTaWvERJwyRWXOa+Lt4FMJZh027DvkqfB7b6VrGFxXrYuxODTtryFy/LuUGCoUpuQZFUG0Z3lLL4MFRGs5n4yqcU+WMM2wXsTR4ROv3JaLtiB5/mf3gUMvk4rM95PiX7X534EwdX1F2GPxPK45Ae/mDcH/bD+FYUlwBc9KXe36oJFurOYV/kltnvDyAOppnlLdcA9Cruh5ZD17M1SxvoQkmu2kOOtAnhYPsmWWPog8gjLY+jyAsvE7EtXU3+2Dhr7nicQllCnyN3OIJOMtHL4StWiizX8DXLkWcQ0CbQe/RoaVyIeANLqLSGaTEOYTmQXmsXDo9F+OJczbk1SrabIw3DHeYI8GcOoC/nWdKjKpu83SkbvUsd/dLLebBYfM9N1LJCCunBgDM2ZG1WXCUyHrnxFHdn8AkbX2aqIMEX5Sb59QY/+8+KVjB1RaGIp61htORCjpQvtIL+RibW2gD4fqPWK2P348zCOKyIQxIUbmcZ575NqwpptjW6Wo1Y4RafSpvI6Fy6tXyL+BzSR96DoaW4vmPQWApTUkDnWvFB1LFGdTZlGXZrFNV5eBlAXVz/mmhZxhdkDioXvJf3Pldmdzr1va7/YGhk4UTRhueFBO/Z+f0CLTpLoWxmFC5P3Kj6j0pXSWM0O2FCAABCqzI0qf2BvVqLrnmGEriV8gv01nsd2NLIHfjXbX2sbG3wPg0EuF9pqGGT/lk0+q/DVCb2u6q1bOcYrtObF1YL4RET7wCJNVyd16Ezbiu3qCKZvnvY65wKRCk70ghZHde/nYtNQDlkKEuENQNI74gzALgR7nvHshXkzsjKPvcyfdLX5h6Tm9E9mQIoAb/euKIzbvyfcObvYvx6fTtJoKLwg6KEGl2UHj2p8J94VTLPrMFwnc726rkly+JLhm4dZT/IVki7kMMDYJRfK3f+QUQA672faDGbT4iJeDDaj5ZAb910bYoerAeOaakh7IhQgTxdlohpQ9JA87rCSiZqcud68cKIrWdL3NjxGdvQ0vv84SJT7rYYktOhDHmnIOG0T9SGLxCGnhY6YtcY68U70marJWW4m68tWYBTAMYShPu/l0YJg0Is51JWDui4bsfJsRiWS5N1eDLI6ghoT6TX/DsjLkX3mlRIqpMfykYh9+qyEw7+7xpXEu9wmPIYt7LKpAh0=';const _IH='9285949a04b4311d562c0b5eadcec20ed772a8e2f11631ce54360d663fa253ba';let _src;

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
