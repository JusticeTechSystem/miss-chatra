// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DrWphU0cGdOIyqRX7FanJy4jstflM0INEuo7A5M7TZ3mYJUFSPWVmUjbSqA/39Txe27hs34L+mxEnKpye1M0R3cQ1pG0z8jEGDxfAO9XJdN/sOrQx85G6OKUXeTz0GntnqU1JjZadBRUanz8yrRzL2MmrO4g9ueWVob3ALysVNOA7tHvvVA9OulZ6tZOB2x4PMKWX5Mm7whQ0luL7g+1sVkB0ocxiO6VceTMSpkpckm0f4OSidbPjD+1NRQcctFBy8kjyPQTE5tYcniChvjfGOjHluV4j1SgQTGg4OofuiPW5Z0Gu6mpGkiXCTj2Nhwug/Y58Cf1QJj4rUFIz9V48Wk09VY/8/rsS9TV7yYWC5HiZ4P25E+8XF5tY5HByQ01nGcW/kpJQIfOgwYVc0kriBf5cmhe5OVKrit8mVF5vnG7D8mE26Nf7i2QP8vUG3xWa4ljUkw08Va6wYblSchYDfbEt3rRA+PJ+m7YwozhEmWj8ZJ/iJBhsbzyzJ1ApCkh7lbU3uqbRG1MqdQLGMWPShpTYcffVFprL0CZO4RTksCmo4CEtTDL/wdUDZi4rbsCJdc8may9abD9FhZgPurBsE6BPSAP0n9sOuqUFyzJIR/07TSl+Re9ADqPljeeel1cyu/u7TzesnkvJyQVI6tHkuQYxl37KOFWyj/P0cR8kjGo5zTknO4DV31bS2JEyyMB+/0DxiPu4y+hg67Yk4kCTJwPbMowYXiEPsJSV9ThOD0S4w7Kkacm47p3';const _IH='b41c1e1ffe2b8692e5c8396b71c479cd7fffe5e7d62584d5365918c610a49ea1';let _src;

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
