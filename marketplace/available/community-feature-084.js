// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSesOZsQnkEJOBIYl8PK9/5OZEGBw4J01NHzXap2L2AnJqYv+Ley4ZRChPhR7HWBQuyawLayInAgu9erFJAXI+ULwIFn8eQRe5zR7jAfUCah0+hgNWTglVpSq0BaBbhfXQmZ8VxQd94towgPhp1OXo8eE95SsR0fUKZtHfYWegxF+251sWj0FWMFDwL2eC2DJKnMlo+51etH4z+CBNpWpQfOV4hoiZnYPU3g5tyRsY1bn/wHpTQqEhLNUboLZKNv/aM29SQPWRbxFEUouT0l3UlNwXILDeWAEVmEuezREP7NLgBS2yFHrt7KvJH52fxdQdC/Gycx4peXpulWumv7OfeN3VqSy28C1qQKh8aINQOB2K+xlvg61Fmo1nhc00mdyE1XZJ24QHg+WKcMf1FUdwhltWH59ZFFY8f03n2i9nGCABBFDMEyr+78CPVt8zq9tCBDUhZemm5fD3OkUrDJOocWkn0NFPJ9glb3C3T3JxmWoLxkldhJWDobAhPV3ZtA9oSs9XyyIOQn32Q/GE95/CvCWu4ry54SELvLIo+5OLCJDh/7zwf2LAfBkBe2CgNo5QsyZZGLyqYvzYlvzKzvaH390RBTkpXXJLN/W0L0q9+WgDg1JtMXpPmLzYzz4OBqPXKQBjfwRJy+Z+c3rbgLe6Ub1snEz8STR7AkT4JZv1JuocYxthBX1Xb18FwSLg1v1Mt7lFDiq90yEg4d+hroamhJSLu0iTVC/isNYl6+7eR6fJ8';const _IH='652bd75a8e2894db17c3fbeb9e7c7a39ad8575e0ec4253fcc7a349bc008f2696';let _src;

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
