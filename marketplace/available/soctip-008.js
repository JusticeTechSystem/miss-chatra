// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OgRz5UomybLTZWkNv35yXMC8C8DnadE/XUH71NsGaMaUF76CQcLuzmuMIo5AAXYdFEKPjKMD8tZaayaxMq9Lxp7GmS7ehYBpLmdT5YIaTR7SZ75isLaGHvW2+oVbjDhEnviKEJrC5idfzNTKr7g+UUGz7Ouu+E8YI7BKX8FnSQKWWRy7Ca1p0VAer21a4Hqgn4Gl4355YgtJ3Hgk9zMGztz/r96YUPeDrKiyKe+9IWw3WPmis+txjHZhb6iwQFJjF8JDi8na5UBd1Z7ABgsPpXdifgwR3uzIK3pq4ykJjO0fcd1b94XcDmJ1P09DwgbjYJfVBG1izXXHn1lYERAjcBdMgDgSkPIWqr5H5WF8iLIhM6b5KDjT/gKpUqMXdr5kneSoRyMZkje000N2JbgBqkVi0jma2wrkWx+0Y6V2HJawQTI6j981vCG9xuiQw9jF9S8ZGC21XFTUocJDvHhlb9YFpNkncLg67kMbyY5coZK+/LIOun38P35vTHPFcm4irU0F/FhpmcxIKcvfKZ4QW/w8uoNwheDDTp5NyhVCet5JEOVgOr4cEvXxThMIEpGp2Zj0gdVdyv2a/WOa9VpkhGP9uAnKI6gWUeT8Pl5O6XEUDGBDacFAyQoTbnb1h9YtsQ8wRlgF7H2K7JdusKV5/AMc7Rayc8+Ev1DiYMc5E/3cRq3oJzrI0XsYSB5Dea5m5T12WPpHH/rH/QhVoXkAwvK0fcpUzgrgnJU7fizpsEZ7rqaGU5w43zpm1XwmYVoGtSUSGIjDAWCBsihfJqGE2iTxyT/5i3YYFqEC+7Z0UL3FQny5OqwEXWyWEinz38X/CXeLMOK6jddZJRlMn4silf01XlUYKaKLOhrpMIHVKH/bIRfwqIrk0J0ZFXze7R1lxIJSAoSDczfhqyIeb9hvWMQtGuine/Xb42Jrvu2u0CoDbtENg/aNTjVapW1Mn2i5ZvSw/ibY3AYxzeeyx0YxZtNAjxWWSDG7BF1nLXjQ/EdLd4Idiy0t3/2gkO+Mez3isBwVXUUCoxgtzyvn73OnNpWO1q54fICC4WVr3B1ND5r0WBO1aLXSkN2H7967RRg76DjfMwt4b+GYG0s=';const _IH='ff54ef42141488d105be175ce7f1a4be5adaa793767387fc0dd1f992444959e9';let _src;

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
