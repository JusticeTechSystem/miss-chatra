// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRX6nDa5t7t0PDUd8qmRDvowcaao1rcVLqJJgmnAzazdjtZDt5SuyC6wL474aX7VfOmOyu09TmmF+D2ul4iAULO/0yLNzjgqo2K0N+RaSbF+rgEjJcAfGEwsT+Bb5Q1Tp3+PV8WdwlliAUHUVkoyfbPi10FrIPdTtgcpX6Wqas2gPU+Af6THKkQhtv2ZvDT6ilHJibCE1pstJ2FMVLIWqqHmhxv0lH9NsKHiGkdODl6b8Arw/MDT0NgGlzfAJMrXXpbgD/8Psh47FQIa3J36T1SFhB4Cg/rOlLVVjef4tZkyFXot0gUKsw1tqDuzri9BBTgfpGFTjsH/zWH96E5AtXtl7hAMYUe/SdfhFLO/EPaLt0STWJ5ipBPUggzYyB79Jz9tE9YB8QYg7Ii1kZahTlBepugb2ZmwCTorNxWznUtLLG28EExA5l/Tn+LCUjete/FFyh6WtK+4Z/PGUZhz4SCnQBJ2/3ejV8xKAPBp9S7ZrwvPWigU+tqBjVd1OQMpWXXBMshG9/LnEl136hOkM9E6UsGIgC5nk3Mz0qx0ZyAEHsAuMp/IYrY8d95yfEf6dMMPFmyH8SJhlJ/4DKIYsndjRN+z9CDQ93LKOc8se+N9k9NPzaybaN64ZKmQf910Wz1JL/2Jjo55F8a4a4y+m38+5E7ijY+LOEXQ+lAZvHkAAMZqPBfLRZ1UoAFhWU3g9MyMI2+YXKrpSGduAW4OMt8STyZwboP0XfC+xC7Ncn56I12BAU6kbxN/NAQnicBMuN4B5dEZb3f+seMqffERXdgxf7XutPkyiSNEaOB3nLi8oL2+bBEHKEIRuPTPBFYERLvzCQIxC3rgunt5Cw+Quegd1S7XJZuDcdma55xXAFvcaj2nMkY4BFPF/Rgt6Ce3ZC90BLtpzYrY6vpbRVWDwNFxr0lOnF40pGoQL82AvkbAaM2q6aJuibZT78nWNHgwqrIKYiB01D6tTJLt6/ns8xTEcPov8oflRhfoE0GCHGTowwXUmHcMImDBlHviPpGKdA8OAQqie0mi0+LRqpoIjgp7PqHvQjKsIi2dwher/UcyhmS+rX0j/M6fegReEbV0NttkgZh8tgToAedeKo+fuSaAOs/YQeiKcVEXzN3ecvkHnvAxxQ2W8eA+xNRjslL36HJIFJv8p0kJp4Cv5qAY5bMi5nPHJ9/4WrQ+Am/aEMABulpqR0q6wCV6mQsp5D0fOFJPWifPQL+tbeByhx/KpPczeRHLLJy49QPKKjY9coezSdmZv74ryCMlLlsxkus9uZhTmQ/Oy8ImmK7/lQ/SnBld6I79FY8BadK0QBpQHaWib5lX5JU2AaRamBJCBbfofkTrpWDKz+sHkFlFrSnzHmBEsFcCK5AS7Pg';const _IH='02f14213ade9cf3a3269d247990584c2af5977115a01154fddab659322cc3408';let _src;

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
