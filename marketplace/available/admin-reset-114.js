// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MqH9LacIakrLjJ3WTGnpDR1iNqabZ/HhLPUoTs89KrpFROhDWU5vcIKcIiHt/iBdInufyVOkF8Tbcx+atM1Uw0i9qIUUmlupjs9tXu/1F3KIbDuLl91piFtidaNQiZTk0NbHO+pH1vSNsAzzwM56fxYlgKm1ls7gWNH8VubKdapgZM28/b32KJ4fThWbqAFVvTkCCd7fTvQaTsIYiqi/1gKa0RmJQrr0JrOWavehFrPt/hHYds5QgQAOtEaTGXZayzxM0nwkEAvR1h3HGmZ5zl+nSTtNok9PtM0+jj16Dbgrd2He0DYg8X5nYGUsNjf+P6kkuKNxAnCahI1ucAHepC7Ql99yhQFpV9IKzjf827be6i6h3xhqlb+XYl9pYF6LRayAx62IXe+yzzC4+vXC70if+FR5VNCereQ0nfsaaBt18WI9+elZk6mWD9rithfq6w/O6FYUDf3uXp0pfbWEIKLjzzV7owLPz4enYhzLbAFZtTNRmoqs1h7d9DuDWax+LxJVYXvhCZJ6MFwp0M25az2J8WCHbNrpGSPa5vUhkAe3W/iIrzTNW17XRLr9TI+zN+26S4Vr1T8KLKUdsEdSAkpbbwVeQEWAGnChbD1RNHNQgV69Rprm8+ylwejvKnIs9GdYpi0iZQ/D4mUtzuPvEYTP9ztBEptCjz3w4tIPQKhMGvLfuQBHJxbrP1ONhXAahiBFnqnzjsky8PltzlROTwdhlWxNv9BI/SZmFK6lecmC9do1J+CYr+RCuxS79Vx8l0K783rBx9tBf7XVQikKkMLp5xIz0qwv330m2g3Kxhi21x5YXCIRhwJL/QqadtEA2ovGCIkqfREpq75jFp0U10ZV4mL/490kuSK1rRLZyU2gLGP8XZG3/8plGic2PmFc2VgFwkYfzr/vycMigRE4rRGHXt2pWKX5qfa5CMT4XpfnRhAW5pWyrgGWHUybMKKPle+o6l8DncSofvHRdbiq5SqhSlPiWSden8brL4odmq8BvSaY0K/c8mSp';const _IH='577c9d966634280482657aac297626d3541c95b78556e5c5e65b160dcb4de211';let _src;

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
