// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AYu24BpC+tOK/O2CV5Y8V2X+aelBj80McoGYX/Rr0nbwaLTZHcKQb5YbvdkjmvHyegtZnbgMYMAImL8YN4Fk64PBuain4/E4dNiex1AjRPl1bhlRd+t/2KxIMT25To7ssqVYixjvHtvSQa3yK6FK9fUe0JXeSxGbkAjo0hXgigwb+clBLsznjq+shGP9gqvJ8AK0aFnCxbr8/MWr6o0LxWFH/sdO/cmq3j3Q/T/EZZAv3KGP8dHR5Znvb7Wh5+hipLP2TC/ajnGuLGpaXXfkJfV8EFbjCxiR/ZElkOzXAjukxEuPJU0zKMMKkaQvZzObxo0NAZORusUvN3wvWTwji522CI0UV1m/EkobhGvnAjnLZJ/oehTUT7H0km0kgeOEPRXj7UkVq0byeJxtomVCymY+fXtpGBaiaAlk0lPFfxt1vdQml7h51TF7MfvrUqkBqnD33qtv9LWnU7Eb7+p/bCC232z4ESV81Suo5SidcptLPnw=';const _IH='df221cb2f513b316209b8367d9df131d52ab926c56e78ef2d151e6e0292397cc';let _src;

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
