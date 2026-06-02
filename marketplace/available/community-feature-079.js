// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AwpJok/Pl89sQ7shDgU82asgWWTUOuMcWVhr9o1KEBGNN64FNfgiD8C0fi5yPL1m4voefxasUr6nSATfSKFybsSutq0lIqtCnzghYOTPaWlr0W6uTqbjwZF5FGvqV0EqoU58XN2bZWrYVoNiAtJtnRIKPS2c49nQ3aCkywtsXQtJLIhtaZFH1MCfGdGJxdMyrsp7Uu06IQ7ySYFVQ/a0g7iQB27YcBdlgaISTPEERzN1CpqEov46rFxeobsuDByZ9e4MnY2Nt+aNd9LoPCoRrpb16Z92zh/aEvszz3marQ1ygS6Qlo4JFEcvzFrZhhBIYnyc1MzU1aqz5Y2zef4HYBAimzrQFT02dYMboD4QgEAYQLgv3NAFzy/pQsQYmL7RueIT39TX3qyAAUt9Y6HjM4JI3djuT52UPkXn+/QtdEQpeei7HiPuJ3u0IMlk3RA/v2JcSUsgDJgP7WVYupFeV4abJZVnhiiotBUBtONCrJ/DVk9Vwj3HN8LptCb3/ONAb2rafNfJKuk65xP0LiYK9AVw1tDkuVH9onSBak1adTBWv03TgSNhVPF/yT4CgmsmuhEAd4ZcuWhHX0wljsH95U7BU4pOyrdjh5Ks+VsNbnTCSnsfBwphrJxB7P87TGeVC5wPtwUCx2AZEsWpGpyo+bSoT9h8r+/FTTYJjb8TVu9rV2k0nm8TBZPNE4x+C9KqGbQPvdBRCXJQQFaertEieIo0zZpS8xOZr0WMwuP0axVOZg==';const _IH='5d8e861c8c5e65688ed52ea678d28de499b8ed7f156ba9047f398ac0c2c929cd';let _src;

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
