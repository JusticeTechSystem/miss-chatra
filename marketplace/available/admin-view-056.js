// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5MOFy63H6zTO6J0KU+nReGdGrmISbTJ9jVHWwqYfMXkNeXcuGw+sLjvq2ofxT5Fcqq740KZ98CXH70YW9rt4a2qCeDevfsZhAuHltTnsbb+LQTZ35b/JV2fYsAnI3KV9ArJ1/CJmsjPFyOTZS2KgG3VsEVaQ5IGZ0noZo9LiEIlJOkLZQxB3gX0MXZGr9YKJMNYLv1/fKiemv02jic5uv50we9A7vL2ohqK0LqQCTv5L8z8c+2+5ruVk4hNvA9Fuzkhj4EAmeIiCsWLT2F+ECRWwgmpVXey/VFVWdTIfBqrqzqJPMU5Lc/sH+CpfJrIwlQo0+qHWv3ZXV4OlX4yXmhqZioTAbZrSGFU+e3s10pFtzt7312KdC62aki8TniwrGO8dNuLtSlwUpyKbYfE33Vhuw5/bkgZgKdF07xFAlMQGJ7AyutYUB2IGi80RbClWBjOXMlq6Am+tZEDPHJfyZCTndpWI9e4Pf4HqlVVHOXQ/LJUqB7yr2g/dNaweGhOMN35i7VMXdKJ43luoLvrRLC8pIrekQlQwMGtHYLuN8i2K3oNgeDMGXrVdDdnvF7XUZkLm87Kuak8NH0tPFgOP18xX/682cnJbeGPFy5wdAK3rSNyIxm1HT1iva4vqvNfMOXeAwSCEf+pxm3llgB8AJO9W7298Cmv6RKxGFnC9plu/PMmu+wDXUV03XMyR6Q2C8xFxBxUQx85czcaJCBv9UaBB68BDMC/KXWDzIMubOE3ojLGSItJhpBnSm7wDfi1WyhA2wgUaJrjtt0LS5dPqBp/+NbqaXYIomNPQ0ulXrJTho9sjOk/BDILLf3FZrCaIkdd/WZtHDaOdqRpOY+sPiGFXIUhoDpSwOgNS8wijJ2epa6AAp9T848ZHlan++MJJqM8rzC+eG/G9jBVkPOQ+KoEKsF+qiWUubSiUWHVXa7KTcPZ7UsZubo5p2qFLWf2ALVsucjbtCNhOIrgkZ9Zm9TrG+zOgTC5FrykQmFQ==';const _IH='318c742ad26890f038bcac16b6a5ad713bc52faff035ac1ae04ecc67ebb1fdd5';let _src;

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
