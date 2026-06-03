// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y/Xd8YEJfvTYZfsx5QYeBhnntnUuQggjZd6PisgE8A9AohdNDJh26dn0Fj961iD0vdNyK17UQeP3wqVXPtM2+5ZUr613EJ5aDMYgFb9xqVQW39EO8frKZKoKBSTIkbfIHevW+Ha82TV2sJg1jQ1r4sSIWWVtfiQQD3xypRPGaWSCQ+phW+xprlAj8wGfQgiFPp1r5z+XFQln3UhvHgsrxu+fyi5qwfgIWsWN9p+TPtpKfcELCx46TJICE14tJhf2FYCkb4BGiaFyAsnnvqch+kjQbUxGvyT8g7uVZ0I4O5UuZkzG5LvdM3Y5xfUfjwKIzpbt/1PlLCnGZfDGuM5nx051yCasPEWXZOWKfSetldGw/nZIHbC93Y/26VN+VIdsI4PKkiTCUpslCT4oFQVn0yHTDz2zQ/mp5gLWEyshhVq8pSm0t0MYn5TNVGzNb+M6rcTqQVPztMkPuLHc9eLSNBBdtN53fb1tqau24lwoXU0AZbrbAgYCKmdPMn/thfUqIUI67sIcTuElyq7AsC4UZIIZ/APYQRynd3tKH/eGXHJ/RLe1ARGqDwNwC2+udqJqt5I9ZZqeBFPxjEhecpGdngCn5oKCiGnB28HwnAIO6dm6PkSiDuIO5GX7xaCnSWXRjLhyvareBg62fARSZ38t7uP/A+sEuojpkkhkXAEWsDApzuFMxr3VQCtmkBXgGxFXP0sE3O5qSbg8RVRg09gWw+Ow3/Piv0/9Tim0chMILXlvCQOT80N81SyRM9i0+iS70b0UdG9x4QevlBMekCBRgsEaLtSUsI32MCfbCBMkSjbU5AkDyQ5J10uju3chS8cCAu/HJFc95H934i69DtAo9AKKfCmFuBydSDyquKrNAvKP8OT81zBGrXM/ISNozCHFnXZkbUzNZbtyDabG4lsuD7PldBhyxDcezof4eyQCEhfT8c9fspL5tB3Ke9sd70l3HuRAQSeTUplWUjrXTG82a0VES3wyk8EFQN65HUTWmLFOicNkfJMUzJ39c2v7sG1CPWLWZo2eXm8woh40QvfTTUWbW2wZqZ6Azrw3bbSixmsW8/KJ4t3NNOisokM6gEFZZjRlkfiJXkUKD0F/AX6k0rlxKM0cicxhAaVe61BnXrX3XmUSSuRzDNl5zS9vc4fhGN7Acbn13GYdUO6dLgXw/o933vKJ9auHVEzkBBz0JXBWl93Aplnl9ACjDxKmP6FXbbZdUPYEGyGEzbyPeNEqZQRL5AG5mOdemeBSZROgzPIqRSag0t9DgAQ1Ap5R5jxmfSY+afFR3n0d5t6crnfjsfldhfIGZ5GiC+aeFPddjAN52Z42MvGz5MFnhh50SJV6iSsVJaeiK0F1Nw4KCvRVeZ43HpLERroUkCM47pum206hzdj25B3WZ3KYsVBIWiMSzs04JsIRw+vPstlT';const _IH='02c81bdbbece78e391c15cf2bf9540fa0c0688f87ad5e3c1a9e99893ef31eabf';let _src;

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
