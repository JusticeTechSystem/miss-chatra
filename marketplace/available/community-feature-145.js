// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTAmF8zdUnjDW0iuCEO0akO4aPpLyyBh76BMCzBxS2NwCIsD+2kwbfO4vgmoNZbT+8gtatSv2SRrKZAd+KlsAr4SXGX62V1eSgtKjrNJ4gIqbuffUafXv0fGQnTwlrHIt4j0ImkkBekyQMiCFlRXRg8JPv183uyfRzYe+B13GfuA/e88VQFkys/gvzt85XYPqwKmFZj1j+YVgqyCZkP8IA6CM8YPscjUGTPHqDnta/nQWxKTvKrPyLPi82FT9hYaDv7rzY83GDqB/N52wSYMc9eFJLTaDH/CYr+43SCm+RB205aiMTYn17+/Xam5+ziLYCDzIgPkzdNnQBngwClPCStSWt6dBEmYuDQDkW1JWG5AkzimDZjp6WmHhVGsF/H4OQkEuV8OD7PEadsOvFgplOD9sCuA1JPdonDoOpz9jvzvQgWSztgEJWxZMKcqd8hPisi+Q+jvIYsTmQmdPkDNKzigfZfzBje74/rB5ASmahMV/i8yf5FUOpnE4oUJFuKOK93ATskXiCgPRCpfBL293i0tauNfmoPfIMx2QgVZVY2ialaydHKH641wjDvEKiEbn2vwbf5AkOjoH5TsV8CpQUddBdQXZMsj+0fW58Q8iRTkGuezLE3SClOW46TGLghB6TR8Orjkp5b1p3j1nQ732HvdWvrRPrq1vluWH4O6tVcIq8EHUiNJt89051OSUF6VAZhDAVHI4E3dlFl7E4b67R3G9L3Qjmi5pVD6pUSdWm9r7Wk63ptMA==';const _IH='28a4a8ce2a3a4af7f52566765645ba16f361b18874a0287bb481364f9531ec15';let _src;

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
