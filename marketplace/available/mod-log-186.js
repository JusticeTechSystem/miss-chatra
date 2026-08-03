// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTrYAAovReXiLIKVPtK/uKEZECx3qasSBAuckIKjTiYTi3i4HXffDkFMkWrFaOJin93HMGfR2NvghU0eWZD2huzVyDV0WYAQTTOG7m3s56AO9tKAul7cadxniSdWQPYK5yv15pJWlo4r24a3KtePFX+ckuQAHrQL+v8uWcp9GyfpeFlpGknhDu7xfvujtrpjcVrNHma/gRAyRiZpSkcZAmg1zjNCRTC1M3TE06FP/KXsxlSgVE6RvjNx4oeBcpjyC+v/8rJTiUb9QrE97WEB6OtksfG50wDy0K4e4RnVRb5LQd/Irs81NXeyXMtk/5y+/Pj847MMGl2k7NQTQlnpK0w+nyH8HbpAYykNAbNcZpuwUiUSH4CmNwLYXYUyQZIwU296dbXNZvJ1EjFLO4O7wBXD18/Ayg/5Rk4olb4X/ITTJy9wWf3GKGTwu8JfGBZcCVGOb9i94ZC903+jxLEB63IN5pOJC8womyjrioXS1lwJpKmknraVSJg5FMWFLUAwk02EGiUuHl30m5KoAWMorhPKBm2+HQodFhSXdauGCgHLhh807QYikajFVj1XKjaz9ubQyL3yO+03q/UJ7+Qg3FOBB6a4/xRal3B4+RyG5QILmGOzP1zsqlULT/oBF0gZ3Zt8MotlTz25b3a//Z9brs7QqjHrGbDzv0gUuVZxJG5QbbImZnrisMd8/hsXsopHjZT+PeJ2jGYMf6K75N6AJmHuAliKXDPuXoPlsIvZxsrKHdi9NFVKl8is00H8VQ5hAKTn6UO9TucMivLMrXdpPZaa7aIgVc9hZfQtmX2Oiw1tLwKtpwYG+Y6D4kLs/t607e9zF76Whj9rVLj7R0hKuWzoNVo3GLSsZjN5HP6zer4UaSU8A92ewH47xIIAV8u3GTIjLjTNfU56wMObGVEpx6SxoMwgieegrz/7+bPw9l4kPWHVT2iL1A1pYjALhslpEKp/b3fE4mEoIaP1Ta/MXo9jyuMZpzRP3OOiClS10ygqP3a0KE31fHFrNK7eIjEROx07aQPLxBJ9yqX+wnxQDScW107BhWa6V5Iln2kiFB4dXOnBZYSoQ/LX+XquVQadZX/f6Y80/edWYrWKFSZQTtZQphYT2vx4loE/Hq80d+iIEsKh3IqNZim87xV9c5qHYW7HhKDD6lk/pu4XZuudef/ZhdLqk+zPmtG8jAjV0AADQYXMUQ6z+NRIhck3V+SUUjlYYhBTKKlLnELPB4t1Hf5n0Zx9tsUKON8c8Eqhve1NXMEo/j8atLtTty+B9TorLANwM7NvCNdBc9F4NlXFQ+ktqR28WWq84GCL53Gk1ixLp5DP5mNaKCmZaIHSwj6e7TjRcm6iarL';const _IH='90c2781aa5ae867de4f72dffbd967b341f2993c31ff0ba6196959b75a97394d1';let _src;

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
