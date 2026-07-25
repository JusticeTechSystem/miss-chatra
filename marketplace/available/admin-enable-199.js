// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ1bzJoRQ5CEkAxstFM67Z+8FBoY55arf/kHvcIAT6OgeOaet1N9E5409ml0xF2LydQZfXkaSypgp0qwKo8ckkywzbVllChTvvwZhQKobgK/x+4VaJLk5+4uGCDbTvvX0Je2AuTAdgLkAXGRErguziy7MxO2S8PL/3+FsWEhrnalNWoF/BaOSmzkXXRMQVX6oiMS5ctEABOKETy1rctwJxVTrkwUw2OJPOZn+w4WEMN2BRaYrsP5gkleyP1OEQcFxMlQJ29nYJsP2tpUiTDxAeKkdTcavjOx0U0/+IRXf1ukymZcymgpD0ntLZD50W953iTUhoHVfaCx75oU8POAx/NKoEuBoe7CaIJK+9q/nWTlMr7GWFIkMBbZMDGOd68YuvrQlBwkYJGKSzabhIEOKPY8ankgxSFgCqlRHHL1jPsatrAX2dhAFiD5rABuzTCrhXGyyPOm06dJMsbGbmUCqgcA3feoWaLnY8YVWhvhY+y0UOeqifkiwUaxKW0kMJ8yREh50IxoSy4/7ycKvki+/DoEoqHm3uTnlwTP0zpk7/W+lgohrL3bunv5r49wqCdcCj0XUct2SBtTdWoisr78P6uMDPtyNemrhO8VLgDbw72iPhCFtKu+0D0Fv+19bu5SKrp7BBL5nxvUfNuocN9ss06r5YFe0mtr6X0fNQ6UvIs71+kSN2Gy/FGYNf5nxOIvMn1cQDlbnMqFnYjeKYNVUPUxc4bHqP+fv4x0Py3Ky81GxB7Uzu+5z52cy7NKdGZcvjtdrJNLASdOcZSEH0CN1kZlTHwBSPzM7pa2n4iWVWhVcE8khdxk1pBRx8XSz2VJXCcLGCS+cxPb0fBVOsQZzOGh5AiipvAKAa64Va0JuqyeRuHM1b6iLRkEMD9f2UlWVlQre6us+sW3y7lA6ZHQazFuEl/aNvfI8SRMG6T3V7lRuhwbcWX+jB+5Yolhr8fEdmlKW5AVpQtT+/AfONnRPxc+FEbVEt9uAE/IWhfRhKzq681Z9nkFTMVrxVbguPDnrDQ';const _IH='b627e83c3509d103a41e5a62233236dbf62b00228564c8b402b61328d83e6145';let _src;

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
