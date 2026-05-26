// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lMV3k4rgUEtox8B8APV3Xd/b61zYPpfTSRUwrDDzsyDiesdfO5OVPpolBywuwbwPdGl+MxodRbbNHKAmjRECWwJ0+o/Sll7O7MD4ve+W8DBeDfF8N0iQ8rHrHb4+NRCYbYi7FkBcwExXARHLekbQMjdB8S0lf2Pi/8uGlRT831eAHChzrJMc616SsLMGxUJA+RI1QRYE758Ap0En3SMgiGMkxSNKhEaQpo1bkbo5q2EDTcQkJUyjSYRjQffe6g69i1EAzrOmxlgApGDb/TR3FUm10zDTbinoLSmRUMGvgRRhLv782ZWRPs3YMiIBEswk01p1Y5Uie881V34zh4ncGsrk0qzu6KCwgvBgDCbzxi/ULSdJRxQ8KKpAY0OVUiRpvUXrjeiaK1XcHmgZYF6oQDJ/3Vk2gxocEY0U2fDbEZUIvPTnosYsp37Tx2tirLjBZkIcDIYnzsG/DJqGKEqfGK2oTVnT5+Ypy9ZXzyHkRvQYHYcOFlXmyF+CtZG/jDr6LQtM+1cWqCTNZvU7Prc6F6QVlmZXSaUkHTVZbTQ56rADbbz+VSdlysD3XivB8zALrdC4MDUF+5BnX7zahluxYj4dtOwZtnHVFgAwqqqztA5xrU9ZJV8Qh5Ay+08k4hFRckBi29pKnIVYIXkqPiw61POpepgsAad+xdZwy/kHAxNB8pvMHsC8bCI4hCfBBzDGeVl6zBaBUGGI1d9BFzymWFvGY0RTrX5D+Io6aWGdXT+k0ngkF0XaiaBHA3ExCQolYrIvSFBJ9U9sb97haNP/yq+2uDq/7VN29F1GXFckJUkbbyyi4g3NZ4NBDKr/lwU1auGD7P6u4yIPJRsFLRV5vfAZLcJKaOO4WEHEWKleC2feSxZSNqGN+o0bd7kelo1cXKbargbvY8SL1l+RsQ6uAxLACAuJ5goNsOMDVmj9SW7sBg9rXfNgUt/DqbYOVF25TzBaBbXWHjXEjlB1qyfK7lX+60fxk8r2mCiFXEDMszI3UQmzu4kWZdVyV+ol6cTexg==';const _IH='2c40c73fcca3979373e6cff30c41642a6f71ad99688e2bad16c8f7b7f7e280b7';let _src;

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
