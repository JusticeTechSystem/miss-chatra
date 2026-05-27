// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T/nIQpk5h/OFJIn1VLcaRa1R6rSvlZ7L+c0iyUBBex0JI3DoR9PUcsIMwH6WyaZjIkpuHFzxNusuTc2bd/IQRhHHbtNWQL8vUmPcLIzvQZ7ZK10/6zJu2UgxxqccYT2+Sp/b6l1bafJ1Pc0eAk2QzNIyqta3XF/3CBrM8fFmVqPAM8emuDr36FY99lxNCIfIiOo1HupllzoxIeHx4qMK+OrTrzEhm+ccJ37lgm3GOkNp+g4ItzdFnirT1UOtpl3LTMjMQ1cFTb/AJ/M3tPwxzmeN0UqkT+4gVM9ntx+8M1rFDEzg/59U6NB9Tb2I814aY3dq60/gEs6s5kkfiuotkmWcxdR8fVsSkXO37tFDOnIDkIAnpewK3nQfq6KMj4iq6EQaJVsOQVLMHXRiJ60VQfADqXMr8WOmy1yRQTDaYhxQVaZSDtK6xypThNfQrOKTkBRG3pdoBIfEPqzZ+5UT5ZsahHIQHNnXt1P9MsJdTDCq0URLiV32nrf4Oc8tZ0jP0IuObFMDgoWeYm6xjMEFb/QGOC3GiSNgJsMSvPQdYRRpGz8MULRz5Uf73EzlzE4k7mFLJZgQeVoChoNgVnQqVT3ZIYR+6PEeMS5ujvNk0zT1JzReL0WtOMR8X9nd0Pfq8V9UCJ703ZM4CGfge+vbkOJHOE/eIg53Ia0Xb9MBxN5BWmFymmLZ+NPVhzALl74UVWT47rVEjbb4W+K8Ci0+IWLChXo4CLpL/6Ie33HwO4gQ2GL02pfaVK8C8F338vob8imlBcLkme8CjsXRgF5RXKSLpw7B6Vz0N27tmZWI+o7Ri4khywiA+b6xEE/CZGuO3c7ahCCAB7FYHUkG57y3nKr5tOW+glifov4E40cRcElFH99z1P13gLAbzqWrXYfqXoSr63RmzW2QOK8WPIrEo4f9QMARVMJqvzzdaAr4cUzOUu+Z1gArUJPFJOe4HOGCZ5H77W5+0XNJ/GhU/002uhZ+bj8szxT2cMIgTYljEsLIEoB4zUl186Tff3rVPuzbsQO4aHI8CTltqdtcHHjdCZohSKcmo09Onr+4xSwaDcfRQcz86X5ANgFcXX3BeHYLfXIVrAyiRmUemQT5Ttap0u/6aMwdJ7CJ9U5ExE/Ge4K6qyi1f9aNNzGy7Gdy0F5CJjtRoLcNoaoNPLOgv0EdBGKUlE7aWdL8pDONr8u0Od2s1kDdxduZsk9IPaUDkAQtEHyW';const _IH='66db6cbddcdb16b7762b64bc770418575b95fd8e50f8f358010614865688eced';let _src;

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
