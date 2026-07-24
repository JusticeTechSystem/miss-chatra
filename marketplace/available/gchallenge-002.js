// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSSUNXfoMdG2qIR8sg9P2Ywd1lTzA9/wZuLNdwevSN0WByDUZk+yg8e+hQS7QNw3ra7zSz1obBpYfI8kj6q3zALxse4InxeOJy2IKg4V7JDmGmSKv0wBU+cckWB0WT8xsWr+i0C3Vvj5tx08VI/NYkNELmwq/zYBAsCiBoWYfvex1n3OU1xZ67Q/aEHc3EOBNFU1+Q9LeCrYMocudDdQBWOyFUO7Lmc52wOSmefpHySr1lorRrZRHLPfp77fX194GHLkxAhVb42y/MOZLQq14dD9f6SGcqMrPu9NnSPt1BAqNGei2w/aSPRpW8Lpq71gL5976xCymPhNbkcRXbZUpfyA8SNHqU2h44Q3PmzYC9x5xrWn8YMyZLVUfLaU10xGuEth/ohNpi5Lvd6Lv+YWWPKVz7rZPk1VSB8TEFPgrvR9idVF+Mc2UhXAIeKEkDP2r/n9+fEGwmYIsIERGJvNXQn3DFImFtTULftEetnpk87Qss7X/HlmPNU19GtIUJw4ksGjEIgXiaLlV8ASOi/2bVMff6zBgC32gQh2hx0iNQIdwofwg3HBZ2wQo6QX67qSVrGgtdg5PCKWe9Scw88dL/sya8HGLyhRc/6QpRIXuhKSdo/MV+fsayqVmOzvIFB12CaY2+haIzlNY2nqUClM9njWWi/vmZ3D4am';const _IH='61f75c018869a18b348bae5ac271e72ff3f4e217848abecad43c4c3be65e5e96';let _src;

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
