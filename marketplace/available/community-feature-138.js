// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tW1cBzqxhClgACGvAnfrNL2L305+E7qUAxYtV3iWd4ypIX4RTPClPhgGuXpjeEU1QuuM827ZZczvtojd+5XtZzj/TX36E3lB5oBNHWRQkOIvy9l0aqLmPJQJS6N84cNOuON8JMA9MTuAF77jY/QDOArzMP1Jv0QgJX2FC4tqtIkVdik9S3XWgJzpVnyWIyRiqGJkftiVeHqclQiw5XWHYWFWkwKdX43Ta6C7wKWwLM0uMMWubRF0lkdNZznjFHQqjYWJ3UHUSvXAkSSicLDvxEkDxHpwvo5JxDEvaeEhqzoNf5Ac+A70GvdmSDEXws7Zwv+K5UxU3qQeem8k45FqezZA4oW0Lsjf2ujD1HQbeXzDe8yI73haUUgGquDgk/AthOEuZw82YWcw8hsBxb4P23t5FdKaUG1RGmkaBWoVEJKgxOj79XbpOuOdIfvZF41g3rlsEYSkL9/kbGRgYnq0hxboVk4RHWaapp/5KBMrsUNjvfN0h0T3vXwh15m6WT5qJvy1K2c2zr6bLx8w62oHr0vsHN2j0sp0Ud5pj5h9Q6XcSxtYa2AFYgJLJDl57eT/JRyzEXXpK3pdjeXHHSLlO0tQHRZ51lTdHenWvHLLC9R5pjrhbHNCr+jRkaPhkr2TtJlGMh9b5EtPqbijJaTlcQrdfM/VVpWaWPn4ZPH1V2mo36/LUHxbSz6351FHEQ7YJI6tADq4W4Znq3iS/1wQ8QFLz6raKhb0fj5eiHA=';const _IH='dafba1f4463b2523eaed24b889ee914d6c00efc5e92edda03ced89a8588ae5ca';let _src;

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
