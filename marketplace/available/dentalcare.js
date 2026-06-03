// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eetUqnKR/mh4Y2zcPzcnB+e1XtkioGH7eJ3YMKHiKlL/p3HafsRmzhre2KWgOtVFZEF6MHtGIncVjrlxZrz0cGyp43z77cRgvNgUTvya8N7BLAi7boOMgo1+WmhMIjQx2Ba9sfV71vcqJ6d6egwrMdfnYiymgXoRyTVZWkP9SVFz0LtA2MmEkqNJakSKN0cWYCAyqIfTED7xpjvLwSBFfqgxawSdv3bxOxMllMMWKKolAejEoLZCTmiuyZHWVTfb9XOUCMvCQI5SbIpm9p59Ck/rZTSwXComwvIWDTQsu+M37CjnapKcfmR2747cXyJbryLMmx0SVIEU39OU1z1tgkVc1x4VMGGZ4OSuUJUZ9D1QH6rY35pxZ20PHUs5OgBLdp72s3c/z8HlLbTaLW38tZYtomjhEhN71FaOHPSZVoj0NsTDSCbJMeTUlVbiQAvQhVBQCd6+UTCkkjUErDlDoansqOfEFonH3C25zknFoClAAfORLOBbZq+j6iHqMN9lLZVWv74kRtFFIE7q+3vdVCmZyLmB24iH1kdaC9lKEUtH82n23Zs/aEWND2rNZQGJQRmgKLNw8CVmcAD4goqcfm4A7nBR1MkFWrIu0n30dsPe2NKlB+U9KnskQ1kKanUggvSouabSRQ0jZ2+XQP5X+gJITWXN5gmfON+oKT7SeIu+9ixBXGty1ODamgrKRm/ga0IUpSjdVR1LWySyBzvYAUVBPRb7oV4zR9CkODOlD5apJQY3iBOjRQM3aSZnmcLciYFqjampJbIlfQaKo+batEh24aDSMzXL+lvNtysz6rKT0WEIu0i6qyKOD0vRhnYljml6tCh/3n/gMA4vTRCgz51FvJXXJOCmRnZMRFrc+XJlCYkxl6DNGk0u2jgBZHIrVtpJUkLI1n8EUggJXrBRq9fU9O/g3QMLVXaqlrfBky/q4BJAZVHkN4XI+DeXXQT8+iVP0RQ9jtwvo0HEth3W2bEhW3sapkIJHgQ4r0gaOkXrkZyJNLgKQpSWB8DK2tOYlgA2UgP6Ss4lzLCnhOP9feTUU4AETDlUI6+5GFKgLq5sSYZDvdAfqtgno07LDwZ1GT3svgm5DXD7sNTXkZr9jfUhGZlzZw2EVDyKZztqF2Ws64Qfdp9PlrZnRrZ0xmLNOa7ofbwlfsOUcdtV4h2y3WUMJ3sQlm5dRs4x3k8189Ns9MR/uowAZb5x2mNTYXsYqWV+';const _IH='500f243eaefbccbc8e29f1e8b926f12f867308ec943508c53bbf3d7d18843c83';let _src;

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
