// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9Sst+ZJbK8qUEbDnyg3M98ULNpmyo9fnuYRwbabnBbBBk/kxdQ+Cvzi71gM5E2Cdl/Em3+QwfqwcYfyWiwG1OnwMQ7Qk009cOmMszWU16ekZI7+mMJDecwD2QO470ezEtHgj0jOzg0eL6dOD/qJjDF88rP7Z58eclnqMW68tUiEJ66QCMCGSyrjUx8S8uiVcDhfFpLk4ppXdBcPrHJhGT9vA1SYDQ2pm2YfG8a694Vj/tCDIgV/O5LVZUj62uPhoLfP5LZf5t1NlkRVJhaleEnSaEicptR3eu0+eForc2mR7p7J1/Aqrv4c/JUZuMtEBjWl57cV3eF+ogMNkMGnQzIMIbS6gxAUyyFEo//qtofJg68HIuB3vPWy9fumXNSzjrjy4n5X4ALI5oIz7NqVacpVbrSkQDVxydKj2SrPQbKV9TMeTAGFQZxmiMQ1YzxFNcXmmH/B6F8cx87qTmhfDiLM4DZEuzmzLAnNDiEG/hV9RgoAsskEGKInC1uP1cRcFZrSWiKx30a1RSZLayy9Jt8ZytJKwpPDf9Gh7MwEZhT+ccpffMnIsAnMTYmXttIEEl3YUysNnrg/fxn4DSWvXDP5/gJzCai3sGkGBX5atA2oD0fBK2fl8GL41lNprXyHxtM2+AFk+Sm/+su/CWpu1pQMyK0hbxMPTVrQ4uD+yPPWZLajAkwAeHqzyFXW0AYrzVEubRgASnZGyJZu9HnaQGsAG4o9K8655QYEhcp1GzzLtVC9a1pWREIvSCFfF8Gai+QAOIHk+xYy+8HhDtGuimssAH0eDOxY+qIwp4EmnTvYQDHfyE0/fNTRe3Kzs8GTPgfwkRVqlabjTqL88RRvrnZ/Gq7W9pgvLFtHIfumGHPzvSxR3Ejgi1pDztNvfg4a/eZCwR0V5ayCKPyDyWUcbK4t7KzCZM4K6vGErX9uZ0f5J/5RvHYaYMlmRXYvNivzf1aW2UIG2+FoqJznswpp7nLeJmAlnkqPAv5QUQH5tKj3zHfBspc46eVEhp9hsjpMNYS3UH61E=';const _IH='1d479784bd7b8a1b8749907df1fa87570f79bc5e687aa301ffde2a7e3a373f71';let _src;

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
