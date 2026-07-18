// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEOkL/e/Ay9es87UB4lXuso7VIaOjz1a3sid+xil3KKnxkq/BVChyWQ5yavYYCXszTOJsMLTgIu2oQM42nEBaaEqzI/0UZ4GYLtMur1UTlA7ncH5IThN9dW1pST35Xa5w0CpNqm0vzO4Vb5GXytutg0gsW9r/9bYVGLJzjp5q+CwWSK47HQwz9V8k9E1N1DxGjpaHyiq+EG6PSa85krOoVd6vWA+ZDAG27ipvxtOtyP2VYfUj+uhMgLQ1MqZ4bMgjJM6Ntz6WVNn7aCfy9py8kdcvo0xTzvDLOxCmEsMbxt7ToWU9myT7keoyx5ZavOkno06119AP/Vc5v3NFDy7R3a5De07ZSbLXM6G2mSwkf1Ie+FHvqFSBJAHU9i0kYlV/TeEg36ycI1PdmlcZsaqUNbLsVezunKHxQv1AqCm1rlI8rC/HBl2zxZXNBRQIaAHppa1KzFi+zR6M3ZGJMec9XSf7wJU5PCfPNxbNuNSW502rz1H9fJQEo6CRRSgkXR9BvNl+WPovQH1Ih0UOYd5BjCK8Qpy/UCLd06icyb8elwx8SzduvuesP6GejTz7F8TvNtOPG8MzIOxzYVyAX2d6zonHAUpd0+bd7odXRB2BKLAFUqxnuhNbQMPIBJpcWuTNyZ9UEpnSBRB34uLr5LQJyK3dnUZPtwDXNasswO3LBvA9ET5JOe2HYJpXsvHET9//MVBHPlswi0zegghjdVP6jRFJy0w==';const _IH='a1c7f2dc11ce9315ebe861f513a2ef619d1220805de1edaeae346d3a3c8ba0bd';let _src;

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
