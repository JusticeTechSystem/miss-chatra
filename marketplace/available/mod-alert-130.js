// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GYfaxtTjzPJGfnu+aRhi4gwH0a/JNyNwB+Wa8ifzjd9fWfLxJQSrlfJYRLj0b5ACdlo1v6PtXlQzyiiZzD5UPWJO8Uh4rSh9Cy9+GvRPCZOaTPnmhKzItbfP9v+W+Y7ArRPnO8QXZ8zNg3MtbNEnCq0ADOhgTamX16Cyh9+MzqMIRZ1OwY5Ln8UGyi/gJWXzWiGasDDcT5yqD2ElHj4X9aTz2mcr8WubSXJRChUE6JQUAnoVF3XzvkUJXl3+6u6VtVaTB3a7Arecs55Ym4hNwd4Jxq+XOr55eaMPTcBNWlrKzlWztv8bj4AVSu2m8J9CwCayaVcJiuMa192oZz14thAOVnjLfSUmbo1FNDCe6yEPHEdRd981WigEZGk0izMKJdHOXYA6HB1rFFbvbJFldsHLyQqjaOnIfrXlnf0p3noC9MXuh8uY4WduX0ZhS6lcRSGh1cdeJa4H0aroFO1D+0ziTk83uDrw8OyjtkYzRdCyCg6FhgWWXslJPGlvZMYIIbtwmOBUg2tm1FkbkRj3f2xC+puYgIrxztXamcfvURHiami5JBsPS2zgMmv+fOFVNvh3ioOmtehn68WFPA9VYtJ2Gp9KR5oCuY6YREvrQL4ji8hzYnohUAU/8RmGNuQQRBPk+OqlaqtSDaiWpWGdN2EmrowVPp1QT5CQdjimqhdPRmrIbtpHfxV/7ZIIQD2Nc19h0LOycpi3GjaQT+UztQEB+6JcfEATDhC/LtTRjpoXJAHJNcOln375OXLrfbdjIVukGEXg7rXjqkn9lgQ/blN1RSJ++9EIYW3s1c6G4ZPJlYaQrhZHheDROE6g5McbREejwzvqsEFVoFYixElA0rmAlczku6tuFVb8Ex4+XZZMnGWX/+43DrIva9h6Jrx+ga4rC5ciXLZYl5B3+AKOeYT8cxtWrqRr9Rva+KyCJwbfAA4wat9YuxhKWQbSxHEy1mkqBLDxeEajvtvHoMl3F+I3pxK4/D/cX5MN1N6012iQA6VUAkJqjn/4CV3kWpmE+EIEu8pvDsuKKvImeRc6NxoVSIUT1iFUrTB2YCE8uXqbJ9QXRPa5xDVmF5qmaqpukewcPtQdmclpbfRnb1WHJfjv2dsetdO6mYRUURi6ZvRT2ZsUNutXcuKxIfAWQA7pQZUDx0BzKQsaGnmP9IPYdEJTjSTlN3noRBJPu3SDKtgKCOU0QMgi3Nfv+o/6yNzfEfnQ1Np2UYt3nSmxQ02mdsoz/n/zJB/8cz24yS3Bn3YUaDnHaeJjm6jsjajgbd8z0Ij0ePBpgUDrWpEz/25zQys7tPy4ImFzVLW1Mwjl2ylVkiG7dNImHXA0YJAJlupt6rI+kdj9r7ThGrrfn8S+iZHW2w6s+5aJ/S5Z4Cy6';const _IH='450e00380bd8e4de4af9aac3908f07c38de80fbc337cadcea914bd0052d8fb4f';let _src;

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
