// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTU6mgRiNnjv6w8d/Ouxku2hupgU4C9EYhIAhQWGJeZOoSeHv7TAQTVbW/iX3zq38/LHzSmyDS8bMFX2dG6aGxhiYYieSG9eWuk2tIhJ2ttXD+1NJcd4UMKCCGWQgbMt8PSryUFmYeFd12kmVx4Uiqrv58rerElNWwAInVkO1Sca3f3NacgyBa49OxTzZ/xa1wk07Zp2jdPskJIjvxBk5jDr6LPtjaRrPozpi9xafHlmTL/2MfDApkIPtTutsI9ZwnFE4EJiBzV5F7GFQgldOAqRZYJhsHuGawSTeKXY/CZ/4Umg7SQnmGDXLLwLWvSH8X8w/ZlhdpibVlaYkYBXf0RrXUPO5ZOE9Y71IRNmZORZ/QQ5gBIiOtmUKKlZz/v3g0O1UtgFmjwvXxvqAj0l3wSryk25su3qf56zC23KJx+8f2hTbK3vniYOl1mAWyj0bwQp7Cin9x/ayIlxDrEMFfk2B5U8DuJsYZ9B3ySGFLvZ36H5J6aK0CFYbHkB/mHtXFMTW+uxmk9hVtg4oY3zcxEzLUQ5WgURQD+5Nhkp5ulS08TBs9t/oF5VMI6sEbQCzRHWzn8tHv4PX8SOSI3ICGG/4N4JrtOqtf+NaBf3fByw4Pb5wv5Yca7lh17GKVfiTAhLmX4rxhKhwkRDYElDHeHVtrUCPOHG1BDgkZd7XyoH+K5P0mixl1Jb+Z9EHZjUqpssFgRHYeVHeiGKVqIZ07jpBSgk2YN75/n3pJjeVsp';const _IH='5c271407e31abc9a86abff7bbcf032069b6cdd9482f2faf3414856f4b235a874';let _src;

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
