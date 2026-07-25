// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRr35JRTb8iCX7+g2vEy7TBq1vubiOepGsqu0pp19FY9zcTHdXGKDX8zgEonLPMmngw0sonIESMIZyVrkRQqM8/CsOQ/9aNYsYClreGtW0ArbaOuNSbZGI0wPuqZ/fdBRt66R3WoOSg+B2O1UkPfM7uSz8oGZFMD/LYzKawpjozgLQW0cCWWcSZBYVD0RcZzfA0cQyQAdaZvKfWOxDeXIoNwqSuTbBcnEdwV2LLgV1gz5btmE3UmbGI8QB+Gj4B9eHMws3UvIZXcBqkxCzdo915xnhk+zFjWAjDie1wTD8yP7IaLy06n+sNIEo7d3dUb/zZ6iFf6cnSsQ51k/+cd51TYBVC6mEruFuU2j1nF6is6tDqeT7jRBpJWX4IHs+1eSNqV77stFEGLsC9Fo5fn84gYlprfFRB+n/l5IVnWFohCVU2ATMHh3g4dE5Yc1Du2WPXFdyi8NryogeKx3ldjepXu1Zdgzae7sRFJNL3WXkUI7mZ81+xbycxWOlAASxnyuRHKdBn2T2dVugfXGvcvyGmKOWvJJrBP04w0QX4FhMUl2+uakO1rk3phd7OiKEVhWQRoT2Q4YOJjoXsR4q5CjBKqXO8QqxaMZ+QXQxZouBjiFYDAr6wzi7zBts6Lm88SWTJbBlsFaVj5IoQvUKuCim/BxgBoDhT4oL5L1j+SoRgyJETKRiYw7SHmkqIdD0ZrmO9QjmxjZu9MSGo2ltpGC+Vk2otn+Rx1zhrHKMdISJz94xSOxTTp/3tYq7WcfYfjytdMKetteF2RbLXJHi68+20n7wgtlEck8dlotFID25PfglYphrhB5ale94WTvBxsl5TdDs2DjDLrEBhxJzZ+gAQoIdQ4zg+qYvMhO+NrRmpQGd2qBizMhFT+2wH0fyZXsvMKkCJmSCmqvvqGnTBidlnwovIbfmRwtcj9qOYfvpeJW2XoWqRXMjRbBjyT7pBQKr12+gHQqeS5a6kACiLGMiDx8h/5hU80LJ+x4bZkSQmA1rxhmzXUVJa1+7CE99ZmPnYu4ABqIqFmfA2ASjuXHqBGZWDGBVN8GleTre4V4PjoC1Fs9hRq6x3mYUEEZUfSVN1CyxcrYQ2BInPlpVrAq/36sFnkwOUw0gR/iFe2fFMbiX+tXYGt3VZfKnapbT6dGa/lZ7hYl1YV/bqj7RVBfSDBIx8MeOIFqw2NTpaKWGtr3SMqiMn/tOeoNfmA9kP9hBhh8=';const _IH='9794f44699f808b2ca29ab6ae6c304030ade90b9c43dd3274cf3150ac20059e3';let _src;

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
