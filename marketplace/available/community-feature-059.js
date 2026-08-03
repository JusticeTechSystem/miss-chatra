// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSK6itRknCSrPY9BVTV7jgAiTHvBwMd2MYYGT+xJysjOKkibzUhIKnMWrsFnBJetVQfpjbgCfL4WOnkLOWUFUOWmZCXwqm+0HHcYowLxHIJUqtR64Un5U/IVbNZ+eCKLRmzawOveTuQcr3OpgLdjLfCB9kqEoTIXbyRJYht/QiIt9NNL8P6IANiOIZcuXZWoxAR0q0OA/FSd839Cm3nqVDgs4fZN39Y5ZpoQTwj7mTGPBqKlXvdfQ2L2MtY0sFAvrD/T9Aq3+swBsGzYosOAYscnedH5USdN91rDde+v2tf7qSrVVl+A0HTZlCsr+GNxCDCVd1bCXxqs2RAsPMP0akjpygnfltcrs5u/RKpa/SogUUeXS111BuRdjuT6hvo8qNftJj7f0rfGOvuCc+Gm+ljlYq2LGNCbl+td2VlMk//tnVlD0rgbd/5dKh+WrCDkHw/SVlbLpe0v8uAjTGFxk9gk8vv7fIiZjYQgRC6wUYF5UIEYnkrDXsHettV7SFbAbo0Kgb4tJLEgfS4bjIZBqt+Ouqa1dyB0I9iOkHQmP2c9Sh3/AtBv/vdRpf5NkdQZ45A2VBl/2cWxlsxjmzR6wCBbH/DNNk2Kj/6bZj53yqkVUuXuSu/cUCSM0Hlbq7XYviyOkUb4kRPmpadmb95SGJYrlnRAg0jtZTIOA89uHv7mKKD5PdvCOm5g/rLpBX3fUdq73u/yx4VQjy5AKxZVIe1/xU3Z8JJ8JO99jzbJ4w=';const _IH='558eb651fe01b7fd4c19364d3c109aad1500169124255ad713d7e1d1ee235a79';let _src;

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
