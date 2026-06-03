// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jz224VTuDm03OW6ku0bswgt6mDzMhbzWJHmdX+fyQfRcId8OnHhFfd1bDvKoLc5DU6R0C2Vld4h8nhifT/6VZC4GB6TF72huZrZbdxHctWI+vqeqKTVDwV90OwaztBcVDdXTJj3T0uuiUwv4ifV6+G8cdMUCiH0AtWbZtzlUIjvzA6YsSnCWN3wMODnBZflS0/WLgXJYTeMhKpOz19jxDxYA/fYfDow/I0PqzmPYEwUrJS+ZwywpOC2VXw9rQ9RF+msVSjSZzhCoW8r3Jncb8/9aiX4wDVQ23M/v+IuK0mQaeK/eyBG7FvsYY4EY4rn4UrZfvFshPPisWpJQ8r4zJVV8aG0iDVDPrhECIg2rzvVWYDwLlXZCXSTIwpZfCrdgd0Ey84ljx9JQlS+bkFCc7cV2cZ41vsRF8zKB45Ru9ILP2btql486tGthE1vHp7+RIDREqc10tAC0/MqE+KwrcdM0k0q3JTT1KZ9MMaYpB3ixxJ0b/zWaIIX9gJFyBA2g+GSrT1PwszlAIHV84EHEZ3ho6AI6Zbh25dPzA5th/UVwRhOrkNxu51Fk877UKdPSh43ZB1W4I3EWVFTJzeR1LI2UEPiiyVqEG3Yx7RJYMJcJaVIC9waCj3TlhLMtQxV7waFItXkOLoCZ97hiZq7c+JHCuVYLUH/lowxYCm3Pd05mMFK1LtmAqV8ec32iCjnTOBYYHF/pEYRfBtGnOtBZJNJ2IUecIcu0w4D+CxfcJELX5xkmD8LZAe8fIwO1a6vQrg/EOHZHwtzZARZXcG4SEgsA2BXtM+3OcoHvGD39HlUqTZc4U35HpGR9GdI5J5EIt7PoQlJoCBoAbP47eaEx9gKRZvEPCJLpHXH98JBqHDdIkvjkQKDMcQRKJUo1Bwvh1yTCKzdp4R2p35oSzw4Gs0fTT7cn8gIbuSGrfANYg9+GjUGk2GncaJITsl5CMUL+zmUDT5ZaDtiFlNP0eJJj8Y1zOls5rGNG';const _IH='d4553e8b9dea7e3925acc885151060e28da5f4bb42935f294bb26257ba3e36fd';let _src;

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
