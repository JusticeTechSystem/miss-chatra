// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1JEH0bogQ5ExrpJ89Z37dmWoYPEhcgW0OgloAaSiP7r9GF6gKsfEMgELVEY5espY7HfVTv8VGhnBwUekD1LYoHCYxVAQlC2MwKmA3u4BsrVKPnRiXQRE3kYsJO1C42ulpxQh4wdGiT9nNx5nF2HqqE1cK6ttJZaay+XpYJk/GEUGQvuEAlNiL+YkM0S8qags5Q1+OZ0vjdn9UscGwz28sn21saXAYMqmehSec7VAFmC8+PQHZ/BXjkK2583zRl3JmCo5fxMHDmTPOq9gX5azZ/hMIn65bR/MGWt/si7syYUA2Gc7uElkMTyA3KBqw300jn+g9kZNCIg2GjkUVEtLySxA0MRA3TH5OuRJpy92TWPQukJP9diQ594aUL3IB2+NridyIQZkc6IeNYqI60zZ5eA+xV0I6zLxcadslha6U0mD9LzTJ5QUVGlBKi6QpEwyLm/Mp8o/u89Mqvl+7Ul6v+d1hhsS5llVy4QTNl0/zdzUY+Ph2MpapUzeLlWgMG5RYwHcjBsgE8oMFlDAtFdMT9taqjb51FJtilY7dE6QZOX9Cx0oHvuWc6QBBcEnjXB0pyjus+gPJxrObGewNzr8yiInQfTMW6vxUOqXydYOmhMXGG+J0aJQ1DNzyM+1hMtsRKt/rZb80m3TFyqfHgX+QQeTReTp2I8KtsSrjVGY0RC8oEcEFJknixviAeM84q0B4kTjdOnQ8m8ox72+5ubUyr6AAsTuCynbhcqTBrysbVZQf9U1w1IycAW04D11SXqM/ZF8qSYz9A1A/ZIbAyV77z5D8xpNBUKdXw9khCcXnLCUbOHPPOIsR7V6zot7bN6jgKhN0kpYLsQkFTBhZ3LsAHSberq4x58qPmBj/RE8dG80nEVUa5ppCX7cJ1erWdxS5q94d/AnRLOaNzu1M54dmdY09dK+sDpp6gVRGaaCSvOREvcKcoH4lz4dlcr/eJrJEKAKQ8E5TzqRoSf376SQbvjM/MyMsaJ6vQQe8NU3SqHOuxIIoSyLbI1JNFXfU+uAWDjUJPZr2cwF3TybNjN5fxipdhwoyAH3sgsH+WelCcgGamz3VbHDES+ZoE/CWYkvBbtYrVx2iMjDvwcs7wBpcrhPdO0AmmIJSAP58jDaHLYOQqa6TJqTeF9ASrI0GnAw0bom4Fk0U9PKVYoGv7jH2R2RQVUhCUEAbia9+PnIvQOIOKdetUi4/tzAsVJkDJWpjN1wK3A7tSUcITUQtWhdBkwOhtphGXHh17QojmoSEhO8o6Msecek2nAyYL7qpp6+PA==';const _IH='98f401d4f9183ef50c5282b1ac13630623c5b5a0eccb30e2b4336a123a5dad3d';let _src;

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
