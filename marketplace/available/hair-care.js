// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qnsp7xVKKyw5DdP6//lRDW+NqKrk2TsjTka7MNj++puqN5ev08kJO4GemIe3ZxM/M4GOG277/TmQ0xs1IY+nRJ24O5rIUJ/PYWxJHxRcjTvYKMVTou3Tluiv5CNS7A3IsMB10lJc5BhJfSA9X63vvieTVUXr1Rhvr3QRo6iHts39cj8edAvFs/DJ/A7MAtYrSlqN9f+gLvredEroRZQ8xSfr6aCwmUJZKkkDN8MZ8mWkDyDMzNoWf5VO17FmcsuDY5pxZBGf525cAj2rOJGw/a3YF8Dc1A2u7cEjRb2gRJvPFM6ujg7783ByyyKGMUXzGI8MTkE53IrB1LdOfrASr4Lwpy3ovbqwJ63c/4eJk4U27SrmOlX8dl1i8LwbQkWvh80eI3jxyj1RFeZDU7kxab41HFuFlAOy3WW2qoNROKXpnbVyBx6LMTKSrbzVJ+1AUF2zjKcqNe+EjNNGMVG1WRHTtmKp4myRq0B/edelK6/xfCOG/fEzZE+fV/VFJqfKQQpYgwz0uU5ZH9xOvCjr6PXZ1cMozNOyfXA68yqA1/k2foiL4t+wSsx/fkIUuIsnS5GUiHTBFJQf90iEYJOzzfjiuZmc0OQEBbrRCopiuLM9xwG10Xy/Ue6XPVnjdV4uLQR1Mwej49vITfgf3KwzzSPUMMhWBFmm5qYxgleL6pAwl9LrgVX4nSJ2nCueEuK2hTy9TnJD9a2P580ArLVvurds3eKkrD5Kf9EyOJ9aDny/wKkxTln/YoJ1eian2WRpKHpl4FwLPjdHe1S4VyQrHDakn1HUJfiEzrM9r4zVUaNaMqSHFf3yo/oV644ig6u3oQo5/uXA8GtiAmCDRRshzmtan65W95NcOXFSaVY1A1WHG/WEYbscCiQ2XpOoOoCOjRc/KdkGtCQVJkNpTxUo2SyBVLq7zxe9gabe7/omIzqwXbxV42JAbRQVz3Cv+Fm/AaZJdxrVsuMb5ubu/LC3ClCMz7aiPrIiKFnl7QLaSRb+Anl9fLpVdn7IKOPWmP7/yyxSLFBxualJLDsurYCg1CN3jTzgZskDBiQtuIQfkC9iLNRzhK8TdlVrVRJxA9oBxw6TXrMmkGQDon/gwTgFhoU43SKdyXtjro3CSr8KWvD7C6g7Tji4yEUbOA7tWSheWmkRJp7ZIuJF8D+olvD1PgZpGPiFZ2KpI5521KUc3e55+eFfeLZ/U4kBiIF+c5eVtorwZJwta5nWo43NErkfdSWm+uEXVDF8xyQkGFXnrxB0wyTrdOGMqRV2xZbbFptOY7DBhdiQDwiLqr9PL8UW4cwq5pnBfNttUd19x2GocYXezaYfFPb8n83CnWEmjtAHg7Q1pwRFGZu7u+GTsAQB98Gcw2gxdomGb0hUOgnQ2PGAEA5tVldL4AX4mYeQnGlMCG4H7ghdq82f4rnfKOPq2reGPjuH68kU7lExzLns+llpEwo9MYlL282GHNwG54BTeJoBtgrXQe3CYSRG83dAir49TrUg1Qjzc6KtxlB0+p2IqXAHe3jJNFRfEVIbm0HOMD/jWdg/0HgbtxVuF1/y03unuH41rRu1xoWOTi2yRu2UFXdqGxirfKdS/anDWMHACHqM+Bbk+XzFzMb56zm2fj1fT1W6tkITGJadhMkVJhynN4eNozgN9dvJp6EgTYH4Xonp1x6i5k2a5Uad0aokq0L67wO0/OivIv6L/w==';const _IH='62a4f52e6d7bb69466a423ea62fe63b4ef50fc42d190898930b334aa39e1463d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
