// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThx7ePOZKASA+BvTmxr4qyHJvqLN1g6iOkmDWpmNlKHzdYjV3HJHLz16Z8IqpiIWYnFzAnhfMd5u9Fp7tsWn8MAT/yRrGGI4Uov5xoQx3dlwFlaTqZl/7Hf1cOjNRv0wzWaBGRHeS8Jl0590jmnOJxaEN1FYXW2oow5/tk+ngpPmGxcfrh9yUSnUCldAUjDP3l3V5Tai2UvBZvPI25cKNKQc638qf0vEw2wrEeHd24YJtjPqYqIsGif+wQHPMb/3vHfdKUNuRqwHLduVDE/s7ZoNiuc4wZFQHQ9TYUntYaUfFCV89ZyWI+OldohDmbc1PGNBSyr7AzP9mq9Ks+7BRogO6bhp8smtIVb9gI+R77Psf6YhjxL+Pkm4Crwvsxtf8NXnZFE9R8wywEiNh2MXEqyAQRQ/Yd/KKKCbJ5LmXPHRDl47lbhamG2KC41JhFc2OQaY7Yl0GDDMso4Xyoobg7QlCyk/9kO9qxqgRqbo3Y+wSuzip9Q03U9gNJsSjn3o/pJ71O73HZV4Bac7Cy2r/Z4rLZrExD0QASftjiENqCqhNIEpjogXVnvwaqUKyT0GYMWfPnHtUYMlwceWM6Ew==';const _IH='7ddc059ba89909bc5a3b5ebc0c5972ef1574088fa40f1f2dbc16d4551522ad0a';let _src;

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
