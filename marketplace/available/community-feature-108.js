// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/ixhakcEA2x7x1t+caCrntCOgQGRm6Q9PxOWltYbtD3l1qxGUOdX2apyqQtv4ryrTzgUuOYA7KGhT2+uldeXDVJ7LAZNsAq5V4TrgBmoxRnciFOvg4X6iPH+ukLwKjhjtkNwDGTTUMAtIKWURaHA8LAncOTY5NzY7t2x0ib7GRPF1c9370XidibImMUcWgsvZvF1VMcecCx32rWffzHfrTEw6mbDqjLw7HTTMIvHVkBs3qfL6WRDFWulk6gqqABb+6KDSJUspDjyZgZD1JgMVIZK6iLi5Z/CsBXl9uVXPdLkvw/JZ9qaI7jzqqTaFLGIt6waCFJOtQTZjDMADKzhUC6nvhFkTEXrx7WJq1KfFCGK6YidUAYq9tbsueh7pMLvzlP5H+vlOSw+ZqwlkA/yDMq5QFj9PX31kgU7klJKGrJmKxy42Tbbi83HAWiDVNKAA4dTJ152OjAvHu/L51R0vNPNYi2+oRAhIcK4NudxDPxQzGxeAan/XVThFJi7abXUKfRfcyryJ1dQiDb2finwrqoMzuT2oy69NYAC5uAxL+sDpJQQ2893d13VQa65Fk38OkS1qKJm7zVS2rhUy2XEq9KwM3aDoFOqeYgn76btzSBKtH4A2IW8RQFxz/PzUQrpQwa0bTMpNpVgcKSJTuy70G1V1+4uzw1pDbjORWnBuhkuI2tjlNunjn3Kn2TSW6XSZ6kzjH2tmORXj6dsXnqUoLp2iF3R+LyvrhBmSLX';const _IH='1e8f1518fff6985220e576248be40806e7795175148f854fe3d1ee9eee79b862';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
