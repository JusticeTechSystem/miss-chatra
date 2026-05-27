// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mg8q5GiRl9MkpRH7u5XAG391vkDI0q4PmcKlP/2qJBA01YQox1OWWInEan1B0KRcH97d/GKmrv/T8sQQIhkdpgjL16Qj453lLII9qMVW5yR7wbEPCq8gi0OjA62CY8+sO6hZsULkUfQSAJa4ZHmErWX0h7oZwV4uyQpCkYsiX7N2vg1bybwoItA91Mmav8dFyNCU+bwUo5eJUqo488Xv3+2hgl7Rgh6lTWVi+LjzmXlSVmCnqfO4x33b1K9sEhri5kyWSt36cS2PQgFYnkb4lc/iWkMAp8LBjuVjH8Csku81ZrttyodDkEVE2Jffq74pu4aS8fgEzSs0Asj9UdUa7H+jv+NoFIhtAhVdZkSNwNDQijI4lFC4ClHvU/dvIehnCTTYsPxUuAH4Ckk2wZ/bES8mrFTKZyzUvZPq6WGsTjOes8d39NqXC9dwrZCQPzOTB3hxa27XkiUdgwCUvPb55VA4coJI0YmuqdZKKrW+FoHmprRCsPjKyprXKfDR8rX1E8tk8ANcn3ahwVeF+eFGIqbajN6k3eMe9dp72FD5Er9NZp+ECfFAvkL7cC9XdCPKUi+LhTx8Z66d6wS5P9p5JvfAh+5FyUTJRlvDxcPhLZbRvQl1Kfhdh9HbyS5WQ39V69XmTbkKXrXYboqSnfu6cxL0CMrV9FyHdfpLvqbmLpT2goavyfFkj8rbJ49JdTGL7EPaXc2NTgx0MG6u0tW1KHSyzE94wwETzFuC60WshN7PijaIuyBWbyWBOkJZHsS11dH1R/9mxa3lrDJPfL474G5cFUuSBAwHbh33+Ss8NGqpuMMTikbdB/4sF3bYNn/U9zbVwMkcadMyXTTnK9EmJemKIdUW8uHYiHGnPF7CgKx8HjJnH3NepAdixvaBu1X/OstrFc4FLOlW6YWbtWrmVbMxtKSsnm8qKYIcTp1HgjTFsrmix2lTmD2Zu0HG6ownQ0meQcXjHhCPFMgh24Lw8/aZRN1gKJ3JXuaIchm2aA8A0oE3H91ouYNq//3zoI5EmpxjxlA8Y7R8hVOTx3fE304snAUYh95qEOPJi5lGVMK6sAItAf5ufcZMDzPPhjaKIuUv6gqHuxzIUCdfcOnKDAyWWZqMcfEquorZ9G5G2vphMawI2tMshziYpDaiy61rBi7SkVkneTdqoIOLLJ5WoNH7WYYJS+iHQFkoraBA/NfEFDEekmUYNGeA1U1vaPSiv1yxhuEVxinoE8A05AgG0KSRhRlNFms=';const _IH='33d088e3d2734b2b7a798d2a0fae1b7c200b1513826d762a00bd5d7f15486dac';let _src;

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
