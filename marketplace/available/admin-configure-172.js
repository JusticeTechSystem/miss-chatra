// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ToyMJwESnCqDXKCF59GoqidmM0+0uEzB7siGTSQ240friH0QaeTuVdv0DXeIYC3ACMnUd2Nznq83Hmgqx6DhnblE/AlTuOtudRu2BWwrYPq6nJsuTvBzCjhqq6Is0GHHe2GVL5e+ni7FbHkqhbqWcFt2gOHE5FIux8r+H5VMfHEb3U8r31vkj8sZXqb9g2NIlGCUXgEKW1vG0a3suaa1Mk3scoCo1/V5v3oMbBe1T5Tr5iZyYJzlSggZyBaBKKwr8tVKHqKYkjUG1GJJiFiuBHiZSFcbSE3D6wLmxfl6hoMyck7vAwjDXejbcMT0Bi4NhRl558zmXdd8aHAXsQr8/QtgXMqGBoSeE8ApuILTRiR+nQAQ/KFKe5TOksPspTui+zrQ2eL+CQUVwg762LZLDKfBxAqRym+cfrb3JOooBVJbhSIhZOK1kJCaZyHuoB6aZTk3R5INxTrfD7DN+Ece2G+/cU1F1+COrzCMSx4ijZg5tCzmHAnhy9yerRdhDMgi75tv5sF9EtZ+sMGIr9Vj3aJ5vd6fINCYfL6FV2pNVlnAwgDRyPNQ55EUU9SJJg9DQ+IuACjwd0RHST02k7tgOsL7SL7WI5+8+Yc1etrS/1pKiXbGzOGz1x7KrZX/kXyuXacAq4MXCwCideVvUQ9Bvi9OH30BmwRMydoKwdI2J2BCQGUEiWSZKodw8TdRr2unrppVbUsDdUIfNKutYgjJZc96B725hEBfmKWuy7QlcapIvon6BPBDeaj6YXYOCs/TnmWO6wgs+wsTGtDp5VB+3hMQEA2UCwWrhafrfLjd5ztQzSOyIKR7KUT42i0zEH31gJu7kZrVfDUIJGcVuJfLwsF57Og6M+8HmgrWIx9+3lDLRPg6wyizVDrh51f8S2bSo5t1jVoSrKkVolTnbPS3y0KUWq3/1hAya71O2FEt39o6PCJBlV0pSRNM+OJwA/dLowix0gUUHNv7638F0hg28Qu+vaQxR5BGVFmpbRCoGQu/BnNb+MrdDA7FE9H7OuDV9OCXqcmgvLAp+f4d6ZrIV+J6KR7tCA==';const _IH='656c6489b98409d3f7a2c823801d2e6a087da6c57bde74ce4c0b5c319fd7973a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
