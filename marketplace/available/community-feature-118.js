// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjdJV5G1Emya9K+Y52DhrPbz62/L6Mbj5VJd3rtjV/XwdxWbomg1PMaVy9JsbhXzGoWmwdkH22i9/7WkPOgNLbndMvj2zmz42PNULvqxwmGZCDVKTSRkM8Uc4vZK7Bfnnswz8RO7qQUU/2DqtScq0o6mmRnerod8Upx5jq5jVL5qRfxkmU4lzKgB6XmSFbaISG/fnXi2rmkIk3bBJjpxpcM2k7gSpuiStBdjDByF9bxruGqEqwQq/jdQKYwMaxXXXiDZqXeI3ke2Uj1hRb848Sij+vUWTYcFU3wUuRcCVZWl0ToShNDY4KothXY40IINKqxIAAujCKKusa4gx2QltnQVgALxHqqJMVs1N5q7tNqU4EQY8ObV+LSGX+yaK0RAZPv+q5AxTLrRKCYrIpWR49sFrSlR2nPHFfytwnIi02CPb8YGQ2rYR3tKyZyYmznyNFzD4K6DhQcjRnFvE9xat4a0Wp5nKq8KJJdl9VLsPcB2UVnKViECdL69XaPiVzNAAYNfECBrLW9J/lzUdzdd5pElCI71ryo8Dh36w7NPOs4Z2HdL9JfC29ZWAOQ24fA0g6bvISyRiIAq0PcQmLXisEXqrLdVR6T3k7SoJhE/lwe2BdPaXbOqBxMFOqhuqumHCl6pV8NExjwoHXLkoA6KgQOgydJU/6n3ajvKCuQ5FGq3X4t2t3fc1N+suj8g01q15GgXVStJ5EqYZK1cR8BfVo1uOZiUMm6FudWPv9sw==';const _IH='b23f06566157bfe4789a040edd72764f75ce5f7ccc48704f08f4f8e22d6b1ac5';let _src;

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
