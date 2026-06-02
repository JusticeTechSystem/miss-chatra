// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4XKn016ba+PO3ouFUsNrSPQFfXu44VgX7l683HGnDPJwBcwFpbakuxCorgAYwUU1i3W59pvhoIy+hrz6IcbAjr2THry9DVNuAHtiOUS6NnEoLOuiLFuocjLqqIECRNZ/SK9SayOquFC5sIDiOvlh59WJsjqBRjdH9fzb6dbpTCMDn3x81mOmu2bNqJqB7JLnwErazd+e2jXCbD6Y/mLbPw7vmk44gc2U/060Mu31GXQv5gK+hI6y02Rh14sQC6BR0+wU5RcRl1AeuNM673uT1WL2Ko+MOyOpo3KOFmM/ijtIg7IzHThHCwK9vi/wUmQitdbLZcDAenmMcRT9eHMiq7pFr82u3gJuK+OX8/mLU0CKL+rqDESge0vhtvuwG+G9HCwI1yAl/A2LKcH6bljtv7uPpuoiBwu2XjhYfM0C26ifoLfNp5V4gmKlxN6ncJbQ6p8U1s0wbGDWZPWLeh4BZmLwxwMUmd9/6/usTuNAaNaQ7YkEs44RLP0DO+n8lCTfaI4KfOVCnPr+Tu0nmfAFrKadV8CzOT3SvoKDYfHBRCeAxBHpggOHP5vK5RcIMu/8uhH0idehrw7aL36zEg9eZKEOwyidCGKE2r85MoN5A1Ri0/1DUdA5aSAZXsul0lWyPN8P+BvBTSGvoY8ZyNk5bv2hNUZPZ+BuH440FhTSecla1o0iWiQLai0o17f6wcqTWHyJpwLl7jasLZRZe+bbTUCfjOFPZhzaD7D9tJuT+W922bVHHYQuqS8BXmv6K5MHEqigyk8ZruB0RVPY3t6xtrzHKppRxkYc0V5p2CBwJ7OMRaNFgzogL454X7euNeM9e1WAaWtA/OgBTYuQhO10eiqzw2LvaqgX00jRbVz27qolwQkfKsD0Z+VXTwXL/cBz87Wz2s1L9sqrBnCtzFbO/qwBlMLKCxMDETnyHjYqz82dYM6VF4ENeEliWzJy2bTpfBjZr9WEXwUBiP+1zs/qHCSvQaDT0Uu2dW1Y84qYooMrxB06yKBMcQwK+Urvr54Oxqg63zmFI6Ntx9Le4UOBL1C4wLJQNT9Td9vFdJbscfWYFHVWeqpAO39WQeOP1+Ci2InFC0W3oSIdag8=';const _IH='e43492058495c0e4e53ff514e2cc608b3d5a41b1be2d7d05d92ed64536087b43';let _src;

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
