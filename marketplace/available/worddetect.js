// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5NQCrNPce6ybtsXXP7AioH4vvzv7Ea5Sa6T4qoJKP895zMksNnVTegtVQXhz38YvpssTPL30DLeyoGqqyucv92/VZJ0fLWneOmjAZulqtk0j6yYa7sbGLqeLljUfO9za1YIwsxFlkls4XWq0Tt+jlqz+SDru8FtZvtLcIdLNjA/qfsfpb60Ngby8auG96cTpbLmlk3pZDkpBgMAh3VzoZ9ADbF6HNjeMhZ66wMLL4nEyowESjQmfbbOsX5+4wNjTfwZhdyvt98zxrzCa4ZNCsc+CWlWtaR15wS++JhiEGzt0ljAnzm2C5aOc5HPlpsOccsbNGZywswWKl7sizM6iI29NXOAPireSQuSnmQHQdiSUltjYu6B8H6gUmGQUojLr/6W/bhuIDHAgpb9xUBtRPcyyg704nCnZZuekqoWEThWGWLeRYijF5Iq7sXJ9pMiHWT92z6qZVyUbUFbKOGMU82L1K4ciKFXH9HrrVsCKnDeA5emdp8JWkMwG93fFjSzJhJpJi8i40/R/5vKubwo/zjs4GiX0SzfASj85EwBsB19I+r8Jowc2iip9KL7APaAHSsnJxBPjMls/p3yYwC2jPrjpOVkZR6JHWot0zLHK2H541FxKEbhGJHZaG7DOi5sEB25PC+9mFIRcAvLRqXX+a1KhibZPCj+vZ+96+4ui2wGfD0Klx5vA5PAHluXDFSt+yy7STbQRjvFUpwWHI49NklyUTBEcLRpg0vBCCC+li5zEuMzUw/UFex8K8YgDvRo3WAWbtGru6ykhYqngyNCE1Qm77ecC+YCHH1TT2Wia59b7baSZYZ3e08CKNbI+qzYnrrKM37Ujouilcoa0qj098Cp0yC1fUeudxPPm+VYDQ/kIBfD1752tl5RGw7LKOAz0m2JHBmwL8aGWP4HULngEtHngBegRcCavTe1/ZrBN5YhRRuWNXl9NFOn6tDyQtbFmvIyDGFSG5K6L4A2sE7YvRr96gPGMikYjDOQmj6IHBE5nmO25p1+BlP8Bx4GaTBjKN5yj2iBNqe6bvxG0MRAxdUF/SBIVL/vYeep7fmVxGwnMozIt597ZwfLaQAJvF9k6bl02kCmC6TeJWob6wILiRY1uO4Lt58SWZ6+OXwg97av/1GOFuK06sE06ovVLWxAAmteWVLVAqWIt3G9XEugPIvID7g6fdTniPWvOdtA8UKIAuaoGKLh/T8sJdBsswBdJ';const _IH='9f74523d7769eac0565ad5a83c1d3b495e7ed6b125f4fd75860c14dd21ca8ca7';let _src;

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
