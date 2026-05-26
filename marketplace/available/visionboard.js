// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xu8Z5HTLEweNxrX8ksIvupd+fqg+jA8flLWnioEYfrcQiDnjCuwDdeyGOfpT4/grgodt/aHDHB8qb9GtcPztkJLKf7cNP5EZ9mXHIRobFjqAmYISkXannf2mfBd/TKa4J2DVro9b2oAjYG7XNzn9+G9+rryh0oTLS/iDOpmgchOpR+ku/sCf/3nHR1ZBjjeZN1e7HKfjlL8fpQBaH2QczmBjOts4VaQd1+flPPyFdwXq1AiyAVR6MDL49IrbDGNtnji9ap5TZlWqSe7nxm2HAzEmjvfskWUbi5DZF4q5YSN8YU/dMU32Hn5JzCHHIJdv451gMD4vMYqTgvr9AQeO5GW53IzIHt57BAqSTsZ328Le2e/rb7437GxsLI84XwnEIbLRnBPAPr5HKCJPLfwSEiFJk6tx6+JsXPlWY291Y8bh5yAqlVDIADYTWidzMAB8fTmVv3OmWUwQp4wzOMj6kHETtayIFGZvUw8kBjm0Lqp7Ht8F9YRagtJEJ/K9Srr6X02gjHImcyO5gXrRar8xnJFmoyAKSazIDOOqG1woRAf/BtMg2mP8QYOJqba0qLTEv2IDoDE6G49Kn9muBED+aPI84BiYAuVHnSWzIJPb33MCZNBeWvDZpB81Zb5ovScRSNNeUnaYMrMpEOeK7NaiRDiPlLqsdIP6ZOL7EK1Hb8SkAGNxuCzUL9aHxQClKaxgVgtuXnWYog916bzGeu+oi8HOYPTIb3843ZFzA7CRL4vrN/j190WwDdI1Y/O5pqDGB+JzUiNMCyGkzyfxySEqeApxUFiDTagWWMxe8owD+8kPR7sfbSmJZTIiJ0IqfWTMtyj6BK0TEm+hNvDb1e7Jt8wF7eNDLDA7FPsSJIV8H9DqghinPSLYQGxXdHP+PxV0GmKsmekut6YtAjUD0xkAuTiPOOH5Tpr2kNIptKb+AXZzUyZ68dTR+4KyoKTP7QU3cX59mALELnFzdhLhI9luajijCJFCyCDTs0S/xIaVDM2Rs9TypWsefrWsF7iojANX0YH8iZNI49dynToGJHkcuLCtV0mGVOlEVlpGbhZ1xXgACwTLrzir0I+wQ1ZcBhLmfeZtWSKtl6da3dAJ7njebDPftt4OllsJKmCpqDhs/+14qCLlLHRxHihb7pIQVo5GUos2LR5n490N9W+JOXy9fdLdXMR/ti9NRbo3XSaWI83XlCI5HZSl/PlkAfU1bDgZTES9';const _IH='63e15c71f726feefc4e5e171dca29004fb7fb178d6e71417dfd6ca900ec948e3';let _src;

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
