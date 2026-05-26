// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3x3ceH+5KI+ZtvJgt3pfmEemOrOGDJCXBQJ6ZFkaIteX0nMJ72gvl2IbHdoHPl+VpMEB9llELzoUw7GAXVl3qyNew41cwQ6Tmtes4QPpxLEw5oEwzJFub206R6zi6gjkxECMIShxN5Fzsc/cm6oN+C7f2uGWewUKdhbDz50sj7c5pMM5MSauoxb5ReRyoDMHW6mkBkkCOyWACnThHjupIDrNXUWVh9ceJ4O5lt385jVvcnX+Ad6e5KQ42U8hYH+PMdc24oVMe55/K5hN9vm2LvbzLErrMrldR7v5FwomzGE3m9L9V52UzYe2JrMtOxZd0YJfGXBs7QZYbbEzeEiFEikxsyqfGcD2efXkUx06k3HT6NJbaX9VOvfh55r57DbGOMO/4z5p8E7ulbdTWizv+KHJ3/Iwhew6n5ibmRhgOaLmSR5ePGjMt9awcQJd32OGbNSy3UOybeiL0030SZ4EtdyLMg1BvSxCvgOhTEdsdTIP7jQF03ii+MKf8EjenKNP6NfgeZTbe/CAfwTLXYe1wQlNbZtGtHTIeGYHF2TAds7DBC92WHvBNXliDturNRBS7Cg/XAYLG8ozTyZQ+2N7DymO4knGfIJwE0rqAeRpAhA05QPpbCT/KgkQMCjuvcp+9kUZtuXIHfZOf47fgP0vseObtbO3EIII162pXhLLocwPYD/r4JlGYVmqXxmdBN4q+A38MkP1/YqmCPbmyWszK1hWrHa4hg6lLCoX1VX9wC5PlMbj7jsBQOCLNvG0ERiVyCCWiaE0dVzZzPbkHIm1XIOCOruuKrSBC+VOhMpw0SHcT2lZpRCneix0DCH4bp1KdE70FnMYvC8T4IjEeHimiHaaGp/4Hb8AIfe4Olzd2iuQbpSunKiGgIhIOYDm86AEkemGzWNPVtaucjHVwBWH3iV3P9fAETNWMcletDHhONETTfZT/Fa/PfFmCkFd9AXWJ0vF9fzl+T6O2bKdolt/uyBvGmC+D1MKp7DMA9b911XTx4gZeZ0=';const _IH='d26e068ba0848cc7a774c2ab744da5ef0d3fbc1a065f1b7d4343829ae772788a';let _src;

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
