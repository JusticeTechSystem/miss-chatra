// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4iH0pRE7zQtNnVCZLOH4p6pLQXKhytglQG5c1etmxvgF0eA24JpZE3ii38Fg5cF3aFHTbCOintbtcK1skywfk1f5HXTnDyFsh0TZce3QuXsILCHvxymaNGsWK5HCoAU4Gzi/R2RJkaGQCKqDwmWGVee35elUudtYMInnFZpUvFWVhIf1/i8IUcm0AItkBXGk5VK+xIE1q3sLlNlYhv59csW5yNCYuAW5ucx8ZaT8tp0HBvnxPf8J/aFRBdAcx5De6JVvC65f80qDViV0IEw/jbgPETLbz0OMXR32lQoVo+qICCvfe2XWPZI1+E8vu7c79iBS5yQJf5udBE3xBAoEGs55yPqBaMi19lrnIpMBkT2nBs15BvldxWR9W5PJFBqPtPoY1q/tBmhzr6dH3YyvmhLUtxZj+oPkVfQFeQQMxQA85Zag+sTYCUDbTMVxrIpchtraS9KKHOZ0i+PBEWTXNtSEkn0gN+A1HtjrCfdxQwKQKNovKE3kYBwc6XvfmWaqHDf5XNnm7ydJZBU8w+y9hgs0tkLKDQMl+em3K5bTRRXmg5G0Y3CGfYQINKun4fQRX6A/DNeF1hzJe';const _IH='ad67a896e758fab95385fc7bf5394f8f43de6e780ca5e0cadbcd398ae891ecda';let _src;

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
