// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQyYtmi8p8D4NvArv4z1+Y258pLp3UXKFCigvQXLw3nZeNToU4Kln9AMneQQzq0Fi769AxmW8kzNq2EDUQv7dwLr3GK2R5PPCKt6ZjhnqLt5rAwPm1UyGQOW8glQcBodiJuk4lWvb0jajIVKmTGn/76vlPCJs8lwAIHwwa/sgFpPPULbwv0TyqtT6Zmzu4yTyAYhLdlsafgkIu1ucR9UjQi+wBKK/EIparo6PZmkCUXkV+a9iLXmVML70fEVEo+RMn2Nf4Tooxjs3bSwyup3AM1YzxYJ9gZ1E5j8c33hBeCuYOTyN6den/8PB/HkNjPdWXcl9hp3rxTGldSRBXurll9GZ9eezlnIW5vu7gurDeU6ZYqYi5vhp5AyNUkYw1GZYYSYvuvIAaATTcfDShcDGQWV1lTpntVAn4/bSnnD5s+UzT0KooBfIKvEwUcGMv/480+l6iJYGj9ZDvpFRFv5OTxdJkgStqkShVRZHv6TwZanuQxvVCqMuVRRSO/qqje8v6b9DiTzhyPluqKhHjmfzd9fN9ekRX2II1nQyg10WeCUL1cGEQrhuE9sw+jNc1qYXkZoqPPv7mbw4CWZvvwtygOefRr2j/w4P7JbtE1Ex4ymeD1mYkvKVm/Lpd6tRkHxwUm83wYBTC9EPZ5xY8qlsXAjyIok6I9AVmP0fvSzCtZ8WFoeyztM0+EY8OrocUkeSyC0LCHNU6LkwmyKCygJQhLJerwsyswXu8HtuuUZ4YP0zq9A/7+8kSDTqdBwZXGRKQSTs99mb1Z77v04gUBCqAXO5dWyhTj9qwxeJGmXmMN15q2kiZ55zlFKDSc8FMwhO7X72PPnRwMWrhVtzw7W3qaKTkPWRqj5lymmafAt0pMPqtpe/z3cBuBnYs0+Q5UudrrLqqMRiQb26PLXUio6cJsJ0djIJqCl0a49kYT9KoOxr9l7Z6rrZqgeqUfew==';const _IH='0f56607e1ab4e50011a8a423c33268ef361465668818d040623e66350a44bb39';let _src;

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
