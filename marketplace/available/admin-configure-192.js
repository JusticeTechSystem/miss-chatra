// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSnccK3lr8G2ulrltjcsX0Sbc2oRJepUl8qm8wIYBt9H2Ds2CjPActrU/20PExNLmDOWc4nJWvkumNQHSX+b1GQhuaSNORDA2lEhs602l/NZ7DOW8xj42pl4nxOkVugPFw/qz+QpAkDvAfmvqfwOe1waNEwM0IB9t4ARlE5pAoOtnFgxGU/uJiDwaQz3/Rka0TYjihO0YNfoH0GZbxz1qwXTOg7pkam/33SrobwA66cwovGSQY70OGGAEabU1bKhvWY9aiyR5oSuQP0SZXnLGhAqQJ8szOtN/zzE1Hmr1PGQm/yUNps2iiBcKj5JzED7Krv+wsq2tR1qb3OUSmf4Aqv98uR2hRJdL2P5lX/nXWXXnM+9NSJAAsnP6nVxRqIyqcFPA9et+RX7p8sw8VQRwl+0tPbItKj5x2FRNdGRMk+DhL3fVrkP0jIXC0SfS5akAFxL1lzUOQQrCQw0h4TYWGNTpATwO8HlKRqEiRAMXMAOq+UpJvwAeMVarMtgDfiLlGalsjz3YS4+p0aEaLe0qIQCYSyyddgS/b+rheeJ05fZFdM0q5oDe4h0LgkHvos0eqhXBlL4xwDJkvjXQvAxHzeCdt+DdkpOpLpFoYPC+XR5PXK51vTmg68+qh5xMDw6HzxF1qrFGYLKy1Wm5YUCapWo8hbh7hAYj9n1tuKzDbqbqydgeuPsS1e9kfpxjqw7MrbPHqMbGWtbeeMqkIze2jrOC0PPQtPq44HQEYL4kCYM0I6VBA4c/xpYnD2ojbj0eg3xgEhDdpCgFIG5HW4dA2JpI77Iv8MPSV3FGt1hr/P8JA6Emel6X2niv6ZsOlRXQ7LOXtemhUssTdranFxEAjTdpdXB50NUOp0kXC1hJ/doR18yTwLpU+8awHCoCxwAethUj50buqtjwmi7UfXcJIwcuCgbOBMqnPlVt7DwqnMvP2Ti3yA9LYwosoYgzzado74ubEo9yFJ5MhVfylEGrgXZJYwi3WFpz2+tvnsc2UkF2LrRYaTmUoT7itnyY8jazkhua1ePhbH5jMnsFYFmC59iKJCRvI';const _IH='7140c497c19709a9d44aacf2f8a198807b702fb133fa6f2a74f5fdc543e89af8';let _src;

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
