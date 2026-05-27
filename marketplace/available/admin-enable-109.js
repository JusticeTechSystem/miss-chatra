// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F/qHiNb7UmSOkFnBgth4wvuIGcIhtjBVVrboJx9Qt4H7fBtjxN0J/Ww2pL8ERpA6WdowOZ5adAmr5TNLmBbLpsiwA713A5SB5rfFiGm5//YO1UNnbpxTi0C5n5oDWWhMrpBvzjdKwsMtzWknAJsdbD+4C/vCzh/7IyAFkEpf3QE0ukpfxX+8RiZOPiIRxYVu72hfkoWMKBK8P0fYbbA43nFv7zR+F6Q0vPXJ/VDzr6dUWnSniNCFHY8RwSnoR93gSokwcVbqV0THCquNYhQszPgMY8j7MUs71DkQORGUr5igiwrqOqciO7OXKm/JtTjA43HcHHcloOpNphPPePe1PsYSAvGir+KiFmhOEKRApAQBPS2VsKbF4vruvdfbgd4JW5BN/o8IVWy5G0pWQgxTvVfzOKpOlWrMPZnA8N1q4zeHZiODfA31J0mKPQaEx0ghFFDG5NyvMYgZcKF/O1GJfkSQZyHO3Jpgs6qBycOAnA9/0WUoopxt4ptOIqicwVC9zZ5pez+yhrbSDkc94/w5yHagQ6PMYwaBMQvuKszhDc+iPDjwqE1uVuBovHxUKTR9rx2162nZ397x+kVSXcOhdoX6ugqaBZ2PFUoPsmhWPznkjQYRZIPRrvm1RSv77jk9SQb9u1vylCabejnJ57RF7wz7ASkhTNJXGEEApnPgG0Lxg/xvxUsleig27WosijBCt0h08ufkS/0ooEQduNdf4MgZ5MCf3J8H/IhwZf65XpSTLCV7TZYVyxo5nxdhZlBAwlVZVIvcqhW11Y1ILC0PLlb25bMpE393lppNiOdYvjCqqp4AHCZbDVnMOx/3t3ktHDBv4Xkre1SS5rIJ0zX/h0QvmaXz7MfoxfHkOjIt++zunFMnhhT7OtofFDNX1sCAzkjcTRkTECmtoRp0bH41P0rgCRlhWUnODeTd86CFa0yEkj0oNU/nRiCBC5atqa9b4utsEeE7QukSycJMkClocpgi55oJ8h6Kbi650uHsxbnK1UD7Q189wBUwrOQJkmM1dA==';const _IH='5c21634b1c821f7f0c5ba3b69a6b4525ac65789718b0d704ab9523238b980074';let _src;

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
