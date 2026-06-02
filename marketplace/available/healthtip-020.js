// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='otP6Y5J4PinXclJaqba1rmMhWjWKhhMrxLbX6PC+6VVAkE/LKOpGO6kFls5Vdyw27lJI1lhaPjL0lEd/AgLk2XcUjgTt+g5xMecMjtj0ReAv25ROUNb+bGPT99pu4IBbuREVT5p9MudFDmTFbDoVE6jALEcoZ4RutdTFbaR/YkQHpORsKdn0+NSKBKGDqYo/CDaNj1hySmsNaIq8I1RulSeCxUKTGd3MjDiJ77fuDibQZhacTwGsQcMUVCCxqScbBk+bd2KJTKyCa6e6CEorgAn6LHoocFVXmbZTzemEzZP7hCWhb9ccY92bPmU0bEXvz9asj4Fu6gOjBSH9RTWNukxX1Q++2fX96lFBfTzDKdZ3eTm/JKcbLicEIAHAX3hjGA/JuRFEXMNU8h2YEKvCDdK5au8/VnclJ9/B6xAbEi8lOuYP+Hgd0gGeOkYQXJImgVINoM4kDCXoH78sVFGi+HZ2tQbEVSVzAbYJKi1PIrzrpHM6AVZy2QhINb+qtfqbw9sNzfoz8MCUn/12XzUIV1+wjZUyFb35rnz3nu7BV7CzgQZOEBylAbhSnxfH1mNT1VZnszwTNUiVpqdDR/t0tIQ5kvt+uWWkNBgeKAtvaNh/LQhLh78N+sQFQKV2FrjX4/ppKhHl+KkruJCjuLk7ZCm6Um6C3PkohDyCcbuoNy1i+JjSSBXq/PdawZnz3fFQU0cACZmcRl/7cyEWAjastYZSTgcTqsj9xNTSgehiI+uduLaSb/6baxl7+bqtBM9vY9SjUlPYTFcKYC7dHzEK0zKEEW8+wmJNj5djBZyW+0KX9R5J234+Ee3mL8JDX7/fYGHDr4QASvERqb44U+2ow2Y/BFz7TusaA3kGeFh4gMyFeueHkwAm8hTey+yugeVSdXgESJdbv43uBg+6J1Cm5U07/9xwVpCVABOI45bdonaRbJdELZHvVSTWoDI=';const _IH='01f36e1bb531364962067400dad2d8e84ab5e1678bb14fecbed08981d2b29d11';let _src;

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
