// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jU/iZjr8bletGbCGFqYpIgIs0fl6knoWCBhF0GRJYSeh7vqDYxxbM/Ezz5PVq+TCWGbnWvFQcIL/wiE/YRDhHPF53eeNpCV9agW5wsSmqwnftpbToUneL0QzEjGJwQnkpQA1y5+hA4p+RT1lGe0dxGuw1KPv/t1xG038rkkFM7YMwuU2ymZTeKCic2tXPpMf+/3IyzCy50SLJ1h5IHH1B1QLgCfbE4zGJ2HUAxJ2+IoCbSDo/YVEqh8e7NWpNxOcQwu6utEvs/4sof9feDXHQOySmVFCxIVe3OpHkuIkrcWhjOK9xzHGE/4T2H5lI1xIIMfK8eaEpw8IYebJa5fZtO0oGicxhPpLT8obAuhvm2AD3j7Dq58MFuYvpEHl4srvYmIrdbumcalKsoKod9X0TvCJP+Mjmk90HL5toLk5aVi6iS2n0pVnB5IAabsv7dkpUi1r7keoSToQ2X5PRmnM2DVYLhxt2oE35LVc87XDj4Kgd3F6unvr65BLcV73ggHld+bz3PALRbudVaieW1SwGMRF6YUy8pyryrIhiMk62RpR1A3/WBD0NmAgUqOfxZ1ztX/9ADECLfaFczMKIFi8s69EBP6AbEI8GNpQoR8CWyJeT4sLhQoJ8M+aN8MSZ+Qnl55GL9ze56k0vx1ejkPCVe3Rz0YpO6QTe1eyPWRIw7Tf5xfvspGbQUN4Kp49emojeXJTRkrftv5ObaMbBHIDmNY/IdmJ77rdOjLjrOD80D98mksMA6qqklXayeVP4NOXX3X4EXfYKq/TBEUuxvitVM0gVvhdjuhSr1Flo0RwcRY7f1uqxFmH2rMpRWc3TIvYHB/Gk9qYDIxxw19csVoEc5CbLVjXwhN2bBNJK/dCO406Xia/5GTq9VjskSGoHf+OrzcIzf3M5k95MY/HIjcc90pe/c+XuV0AfeK4PU2TyHRtX31HEvQ3tp+PAS9oADRXeOJf4zSj0o8F4WKExFiBLCI4i5hHXrIc1xmHaIA8N8GuqhgiOH84f4ew8oac/38MEQOAoQ8WgVESkD/ACf5Q8yBm6ET1CIupQptiJiwNrvViKwXSTXO4K9PrzqSH3xpI97GRSFAwDC42jAwNvS3ZTpjRyfldXuEwLPo8hZ37pfhRU42er4nyEAvD87j3eLU5UegeIyR6lbiOzkFO6oKv6q0u72Y/NUmfjUElHqlK0CB2CuxAd4YlEWJBO++oVq9lbmrqOdcwVtKOBip1ow6jnElMUt/vyK7U4lvQHZHVf7PXafMNplMsA0EAFAFedTEzN7U47OlhskyhEOS9Eots2s8utsy3zmqm2nyvqFiSuPtgewhnm+N+TQvBxDop8eD2o9nObIHvbcKeAGXvh0a+GMT9xef8BMiyWG+O62QlykxYjXUREgZYvn9TPHjFYaJXkCrgNOsBcEZo4wtA';const _IH='a397d38a344836cfb5d1102076fca9d1b94e98ee7efed0bf5fb6c12f45fc37cc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
