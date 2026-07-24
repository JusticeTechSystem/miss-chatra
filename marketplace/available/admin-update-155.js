// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRRtt07ke0EAigftfb2HrSFs1r+PSIimbTrtiRXH0ZuDQ1QcwQzRrSCT7VfBO1tCzI+6rmi72w7FNzBAm1WKP8NfBQQwSkObYg6tZnRms8oLawBQL951UTBJkHcXfBhllJWaZ41PM6zqsV0i6IGNN166goSdC+6DPPmQZri3fkXXj8eeARJxLX8DVcH5YpDTP8AkH5ckSbaaNZp91R/aqS22mSLJ8e77PNHcXh6OC5Z1dKVHeiBC4S0fAHkZkSsKYcorzo1B+IDMmwSxUNJyZRkUK0casGsMOgb0lAWKSue+GQCXwQsT2ZTnyRuhqxpk6jHckH7LBQLpmUOOIu75mus5V6cdJcPHt9YTYVr8xjXNT6slWkHxX3IsLyJDXaVXfGAlWnHhS+65PEHHb3zEOW4LUi95kjaFR3kcPuEdYCF8gyuH40GoNX/VcJOgClX25ba9jK7Kr+2WpSYrQJYpZCZLtVO2HfM8SNzqDqC0KQwXaP1yRJcw9DYTpGmJLaIEfTVayWuC6aydlApLwCP9/cVuWISEWTwhDvzZvKGbiSuuWcK4fO4jlJneidd2sUm456sT7tW6tfiXhHqaLJNVYfoWQV5V8kst+O0MfyblEuYf8xj/7W6kLtNyjWvXOL4KnT7L9btm3E9wbAcaQkJkmspp4Yoht7Q6qfsVLL0gzip4WzJcJf3Cv7Y+OqBI5skQ1C62Zm7BRjZCjf5doz2UUgcH6AjShYFcZvqlLbJbZO2wG+oM0ofvBz+O5Kvg5t9SQQM5Tdj44cCTLRGKdtJfAaGW6/p464k/bT5/nwepD/pHvNFtS/uP1Dn9Tf2WxYcbMnYRYNNjsdLAdqQnfzUopAUH4qny7+rTJZG6oL5ZGsa3O75scBOkvYBNd906hDfyU8DbItdVr5Vzs3CXEBuEblP3XDSjKFJ4is+TxZI39SLm5aqfOUpve/pyjduOCxxxOkIWPDXhcToYztgUDnxy0PrmV1bckQ+fJIyevz+q+IqSVjwjIDiH+8SlCm02KvbEvX1';const _IH='1e94fc94709eb2179532e2a587b58a01c9dba283a6dc9863ea8d359a0e91c7d4';let _src;

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
