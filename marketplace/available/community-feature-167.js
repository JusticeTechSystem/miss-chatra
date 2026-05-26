// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6d9jCPGGnm/0YpjuuzBR8Y9iWy5MsGQxAEHRZXGWyQdzL5/GFzrrcUJKl6eIH6PE1GHB/BVV+lHD5Qm4C3ajpMCwAuMzZNocMduSm7F1AgSL3Y44BEg9jbHT3ihdsj0wd3pJFhh6E9zQsgbHRhEBhAQTCymM/JVz5YqdJGBvOEWaLwUyfkskc0wRmOIEp33pAr2H+7KMVjvCBmAxCq9Y7kTEaS/DrwjWHSQyTvbMo6pdUWVuSImirSyNLqTI96JtltktMlkVmEyKodWdyrQ0H0Q7vkDCCQ2N43h/wc2jROE1KOZEUE7L6wPvXHtsOi12qXEpQIBtK1GCSZtM+0bAFEaCI6Q//1JiOZy4OIdjkfrct1Ba9lkYihrTciTLqUeaSdkNnuI3zsiWhQ3zufGLtmV2DR+KFoEt24Ezb2JzhRJOCxfAI7DKpqCzRLA5MFZh6ChSPECzDMuq6iRDAGZsKKCcYs7d4m78pK9qGlmUhwx8DBLOJG8W74cphr4QXH3eJgTg4gxIixf+LVrq38yCoeHg90CLqY2yvvw7aelhSUVZFGuaWvhsNCkZ/d+w+Q10nLAKJ8ZsbQKuMRv4V5XaLhFfXD0qzGH21+A3pRKtrApcFQQdU50Frcq0t0glrq2PINxG6OH62hmJNvRq1VFkm0+lAh7CML4N26wh9h5aeQFrLTy4ZUqHmtuOp8j6k2N5SfFqSoTWipKMiyVfjEMzYxsvpjN/bhvxRSFFDuv+Vs838MA=';const _IH='aa178dd4fa60e6b46cc318cbd579f62a8c9edd7337cd50a3245977828a22d3fb';let _src;

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
