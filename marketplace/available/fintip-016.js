// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='abft5kIlVxYLQdQ65wzCfvpuQ2s9VVKneBAYRKylqyeTsWm+cguEqTwDCGjAAWOZHAOkxZpJmuW6Uob0YPEN3D8pdcBdmMM3j7kmCPC17wga+RI9GP8gYmsXdnAXlFdG2cawfBscIIR0GB3V39nkaqvEFETgkzQW6SLj4wefUddvakNceWPztKP5vvPzXfLzckDLHTcwEpqanPz8qVjPvUiGlKFUQJ4ApFrBpsPaHdGixcRNsgb/KhlF+N9284x8uY8BY171C+SZIVeCU3VuggwQEIi79Moxpu5bFZCY5kxvqPl5sedXARzMFOU9IdkvDtaXdyMRHTYd4MxMWXwS5HQ3YRObLFJmoG2Im+YqaFF/uQyfS9QBlBGsaNKDgsbTcq1BAbSXSCl2r4bOKYA8EN4i7EqxJu3dFe9Ld8ZNdoPYdJZq6QO9FOe/+VIm0Vl1CxKuybeMcWPvY1QAnfU2T/oyIOVH9b4+0kOUhr/BtSOIpg233u+tKtEuZKvNQX041KG5/55KTbWIBNnM2oFDnJq5xExJNgVaNYAnCE0kiGmMSHshbI0wNMANSUA18KcSbrnr19zISXT0xfL7PrISlTzBG5uXd6mZVqZFCGBoKeXG1jOFij7+00+3tCjSdYdtqmWTPE9F0+t0NueUkhU3bJWHiBRkAMucsXjuGtoAK+26Nphirk8XV5dWPKu7qthDuy9RaryeZaLXCYpyURLuFT5YUkfQI/+ljd4lD7UVMFjLQgVxkzL9TaoCUKzNoOUQPUo/PvzSQTFR+fXnd1lkft6O6bTIbUpZ923ADRX6VUy52PMVoDpJZhPFhIJsCjHPrX3LBpa7FD9t6yhwkFs/gBlAOagl+TODrQoLroKj3YwCtwIV2mWXbOOpPfIRpTOFfBuUCAtJb33m8qYV/i3i2qziQUdu5wigmmeNTax6TCrZvWsPEetEBIKatA2eZQ3iIr6DhrbCvL1idZUWyTm56tL07FIehjbVavjbVmv/WVXuUZfxhK7Zl/en+zecjgX1oeSC4Sm9xsZQ0J0DyPKNgK7rAY37XFk5RKOqksc/sN8EKA==';const _IH='14ac37e85e4cc5a9736fb0f41e8167850f9a4f8984a13213f251c1fd33fde6a0';let _src;

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
