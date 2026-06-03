// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='waBA0aozU6ZWa0UvUeTAwfFyvOtEyWZJETJ/UqFt1Fymg1kIhW7fT+4dJXaM66jSuUFEbJUNfCMTr1t0QZSgKFKnKb0+C0khzHoUHOfKIPxMPT8X0nddrdxJkgVHD2nUpi5R1+4bajxRYA4hLsZiycmAGIWN5HDCXIP2JGcgN7UmCcwU7p9z3Cd/xt3PmZuk2vBJAB9DdNVQ5NblsFNbxm49VrwcgSw2lEPKAI0qS6xa+5csEU9VlTNyY9F/8w9Kfhn71zZ/i6LkmD92fL9VaiA2hg+ACHjAeN2nKlnkvbMVPXxedyNmr7trzAR+8tIrHy0NxhvVENXRB+ieVcBgeyM7HGofu2zQpmWQpDqP1kbh46jXd+Jmg7F686/frrxyXjVYDjzk0tGA22vft7CejSxGZ+f0KoMIYXkoExB/UmSNkM0ryg85pZ/GsdJElmcFzTbke8cvXbkPCzzGzNmIGEgDbpWE3YifKtLgAq/Y+IfAGTRvhtADU047RRQ6XG0Qk5s5nqACbxoouuBWtDRy/JZPwRRPBDxSYL55gj80a9l7If3enCP/JJzRO/vdKDfDvXoCQWsYzZ1SrB14GfrCECY4AYjQkwhwqrNPQEwalisG528JV7eahZXqxfjp+5jO8UXrao9X0vWSa0S0yCtgKlYJ33fNnh+I2+yQI4ydd3ZRcqojjvMXs9PbKodFq+5weT/xNTp+PP3NktPHnqkVvZwgzJghsMLVDehCwrAE8rUUcSngDUUGUpLEvpOozXWwZ3GC1BAqge9DbCXrNtHF5hTk/wM0nUkLT1Zz6RRS2yUG8r5fsWQIuFFrFGjsLMtFkpguQThaRNF+23CsN/B89M6+DxSmyTwBZZ4EyTeCSQKDGRLyKGvW49AO8x/aK8/IFclqpTMZcxlvlF7ziWrGxrMYR6WOcwrIEU3N5a3AvtpPfxMos3zmGK2dSehPMtXcy7mZiHtkUdG0ZsC/jTz9qrJj0hlu1VTI2aplyRfEceWauf86sBFh+nfUakvSEMfMfwV0u7QeVY2+lw9mLvA7eLma1Yb4GzOn3qTJqQDiQOtYaZmOxJlfv6TMIRG2vP4c5kT/ph8I3jcwlwr2oacd5aR8wx4WBt5LhSiniCWdfpUkfpUd+RIW/MvaRcPcp0OL365vbY9ATIWe0A1cCNsMlM7i3E965KpHOUm5Fy4sEyKblhlVM+qINaVImFkKQpJr9vwg5rn1MyNsSd8cgnF9CrRsg7khEcdDosMS3wgC+XEN8QPMrEmmMq0Zt8CstQ2J7zuJsnaOlYcMbFjAQPE5s8+pUiOarGWC6wo1OIW5XHULU2kVIgQr2tY3iSy/W9Z1pwPDWS8vBEVTg0mG72qP0xjvoMn4yolocmgJ27QG28pionN3dSzr1LHUg/VVeJgwOK/h5b2cRW5UNkvEFhfFHDoKClYNeAp+d7QU/6loIfosT0E8mkcWi8JfVBSBxhEQQWwbp6xtRAz3qZO5a9fDQ+UhV/KiLMvawaxhFhV/qddoiJEayaCfNQGHKMox1PqajvE84bULZFzLG6lyYBVhe+KO/aYxBydzPzkZM6r002rkF9MOII2wVH7zJ9G5uAt4WP8gN9X67MdMeMUA3jIuLwwH+jRGKrRjiAnxRu1Ghc9t5ngTYqkjN402CrsGNXe4Khj1qYyX1rPdUbCb1q6coxbsCZC4oj22JvPT/zWc6dQDWJMldXAxTsp7OrdqDFu5vGzYBOBvQwoEL/OzBvABCBAi/LXQatDFpCNC7+5GrFLB33MTmcjjLiUQiXo25hJhOHiyaNd8LeIy5x5pZ+IErZo6rmTO8HQpaNQB3VPwj3Dt6ok1vE7kKt0=';const _IH='29385547c9dc63600edaa46d9a6ab0fe23bb409101a08719a7b387ec07ca5e03';let _src;

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
