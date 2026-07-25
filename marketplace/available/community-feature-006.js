// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6Psafo2L+0fKHm5EMPLritFFsiG0agqPeqjOpUEo2EBgkqqLgWs/e6uSu85ZDdAWN23eL5M/UNU0FAGvnqYqjS8fu6KdEVWa84c2kc9HEEmOpeIsCcsi9fkHQqP8L38Euqvghc7jWY4KZ3J8ZcsIwBu82raKGvV/w+swZZcwwljOrp5JHIfIBvB6oCcxhJk+omu+XReo4zZYk/AWr4cnedNWzZLvoX776QAEX7CbyM4JgI2qaFntUeXHy0ylmQa2MK+kQdaG5zMWgDbjTMTg7MAn3pg5aUGPnT4STb7bGqS2jwrouIhC9/yOHTXOz0IT73sClh0U2KkcgMwisdKvguFJ2cDH5x3h6KYsogPgg6JCAIv9Yxs/F/HNIA/MP8++fkG6cmqoVY0T1nEAnxy9Syp2W8BTLjiEljlFFm3LpJv0jgFTg43JHDQsvcb2cn4R/26s42RedLUpDwhDCM5A0ADyrplkLOPGSyc/u82iUCgkdqxtPhAXTyoKYShj5fEHaKt3mF7cw+U8YM7E5rF7h6YjuKkRlpwiOzIhmUHkJQbaVqvNHBWDKHRlijDMBAPgzxkz0pILy3FLPK8FGVmGFaOwiqD2XpGBLMORXYFVO2sDqTpE6XMesxFaBIfHfeFJQxDODphmaOmzRIO1z99UIi+6fa5ocjQcQd9KdrDPeuz7uJ+Jt3AD79Wj0wAStaXqeqGQRcQbAm9a/4Byu/4x7';const _IH='4bb8778fb8c3a2cc436b2352c7b832dbb9822f047356943d5734518295b340e8';let _src;

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
