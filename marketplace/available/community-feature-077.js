// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5jWUClvyhrh0ZXn14c1QlBUQTcpUlQ6FK9PoNIWnxQG1+0tjt2OhDkqWoaJTupDmk6fi4OVEcA6pnDiJU1/lq3V0NW1hMdTavKKfpc7XG8hcZpbvB9XB8pleH85mYlYH2UPWG7aX2Fgu0qh7OFnVfn7i37oUQEEZ2IISPVJHM2Z3Cp4d7oXSa6WrX1yLGi0KKT+UeDHm38xLzzPWvHBOY5IvyzoExlm/NZZTKPnRslMhoaZq+ui5bkAubmklGwsh3Kv7UiHroFzzrsb2tFTK/e8bORwtjaIuPxfdVOS/GF5nJqLNWUkfHokUeWjt+KrsbibsZuJDz4Q7vkomLKVUQZ8APB2bNKog+LItK1dWNjLqtF7ThDGQgsbmBznRYh94IwT0VYzLzB8YHKoYkZjejulHcxaL434MxaeE3f3EzJfwMJyO3PTCYQwMfjIeVEJO6g/tV/ReLJC0B3/Ij1X/UpdKIY5zJ/9vq7kX9jYWzvyL09GeGXT6kdSpDuQnb5zggizyKrYupi6HoYqW7ZPqDmc1uVzMlIjKEHSqmgKRdbPb9jONa7ynKdPJYzs8yGRtwX5Zymp1MNsZiERFxVN6ky0T1+mytWltc03uGAL1FddnJKbX++ruEMRSEeP/1t/wYuMN4XSrOuCmz+CyU1b3lIrx9l8PBN8tAsFdCsFE4dXnScnL4ADcwyFgwmCnOMLRf2Y/h7ypXufwPEcaU3EFzROdCmejrJeHICztGsqYc';const _IH='47d58e42c5a8f176e64fe15b4423741cda07a8eea368032ee9b9ca955a3702b3';let _src;

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
