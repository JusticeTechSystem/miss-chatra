// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QCanb5MtY1XYnF0cIFAfamyqbFIujx52vL3BoAXA3o2xE89zYPemAnSzMwVImZGc5Li9MQijOnyiJEUFZi+tZZVpE61jAGH3hn/nYOtYA2AgZFCbo3d67bMnpuVg1Myt8TsfC37PDqj5dA6OObGCZv5fW5v28xPmdOWlZXcXH0M+iwy3vYF5JWrfFcL70Kt2U4I+C4a7rt/iQ7FAysM8Hu10Gn6Om3Fx5yfadMG6gju5YpHQmgC813GzB/S0m3s2i1Z9rhIFTxj5T0m5tN+1TUqEhAvd2T9WdBpFnS3H3HvAUeYvibks0TVZLa7Dnv5y7VKzdo/mvzxxpMHr6p8NenYzpcnEbIUByAbY3LVeEzUcUElcc4h06QsHJzAwCJvjPUa7DDqVJ3SbcONiOEbpWCSsmCtVMIMEWX6cJQkZf9jQDyhxpR5rmHRL9xdum0TWPKBTb/UITkbwl63YOk4QSHF2ZxgiTGaEW00yCwTFIS3nV+tjsG09cYdGLVyIkbmGBRD69nwcljfz9PemjWrgBBb+TMG4IIKx9m2CT6UpT7jROgdc/UXLE5prLRwEjyi5G8LGqY23CGR76Ru0UQD7SDeyQyZ+YQQ7voYO+4JFCZYtTiYTlOznc4TpOxVsPyVkMvn8O9cL6CbZ8N+hJduP21hz1T7TWOIsNcPDg3so2wOFSp12s+EozGGLmS62dKq2ye/ykwImHfVF10/JSDNEnRAseUZjJHZQCwMWBu/oLWbtf201egzAqJJgXjtJPQyj8f1fuuRSh36kSEI4+7OJPU0GZu0mP41DWohrisRUHwbz7hITtw1CUmo8ESHBbnKOve+iQfmo2eBP7ZfvfWqjPHRiMcuwruWuPSDDjQsiY21JYcfT0mi9eyN6xwB5iwxBp10XMdLCB/uqxHXYyCSF+HARzwzQ1h1eGGnBBrAF+KS/+tuB8xFMGWHuG3NFRK5zj3fm+Rn19YNOowSwM6ptQMsXVTSfuWGq1uYsoQv7lpOVIcC4Z7D2XpDZTpCtA7JPH9xOD6DokwjNhF7R7/ptqNi/1Kp2vhEoSjaoFPD/OzyAPfHpkblUcIdgWGp8W4bp+81Lzj8zNILtjMmBZPIXbQ5j3KfgmwK+4f6fsHAUxh0yxi04hJHPOHgNFZF1EarJfKfRSKpYjy6b5sQ7RZ4hbmeAvHlxm2uTsdExv2GmGoEZBOcUv8Sl1J63mNmjP3SFUkIp4dr8kN4=';const _IH='46e087396f08f66d389ab3b7369ec8c099c4903df597b8850742ffc3d0deff60';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
