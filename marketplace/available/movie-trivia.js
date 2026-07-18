// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtHz7wLzdJj+zjpGS7gmEY/uuK/KIAYzkxQi8IQdjIxtrYR3go73XO13sjFfFIveprOEsGcbwSiMrm/AisWBotvIbgZsEx9YXya1afBJXWTwbOutzBwFWEADvTX1NJMaRIng+Fs+YdRU6KgoAZ6wyphYzYq7o/GNdF+CJWTeFcUJlkQinsmRkjwz9OOWrMkf1Ya3/kqWuAm2oGm2StSHhZBWsgkjNolJE7EeQe5TnZszRwGC+KkckYNpmKYoKWZB/jDKyNwV2PDFhwVTpHM1KdbLSSBlJdG3mL4BGXFVukCEz8CA0Ox47HG/6E0+P9HDCEEx7E4vpNZpoTuNJpypfB3l2irrsTGSnW6ubQdffRjj8rPCY/uDOdiZtT07qzibpmfZezu4NBNtNft0x4F1jjBb9zYxtw1O8zyksuD+weG45dQOnmD6prBON2OL0p1waxbUN+R0ptTk9t3ncEj0NrNWvMF2p4kpvuAA0KReB33V9qFy5EsjFWapDJ3/wd799U6RrZton2VbKBNXohf0+iTcT0cmb2lz4f8IvNgU8BDQlocV39e1q5MpGh1TZUypeNSREsHIs5V56N7byD9dmvwLA8pK0G7ALFRAGCdQJwDglFBN3E9aw1SEpcRUiRZaDnmwCkoP/46IoMEYNg2fWNDC/QOCQMC/VxZ8o9YZSvQIUUyqKn2hX7VqsFEYiPqMs5z6z6BspjdUgfLeVYb8aUPmrIfzFgujZYl8d9KArSu1tfJCXmA9o6ZZa/PEwpurGFTq6gpGS0qrYUQaXXdczojwlENz6OxWeLu8z8M4kWa47t+jvnOY32e2i3VDSGCJjQ5Dnvv7tlZKp00rcSo739pmhBabx1M7d/m/K0dAuwOPxVSop1YgzieYG4u4mdD1conWZJBZRCqdbWZfgtF92rcec8eWltYaYTgersFxrp5rb2Dz1WxmYHeIoVVp/0Zl1W4Ak5X1dkbLFNkC4bX6AJMq5DyD6DkNfptGHB/T/XP5ey/WfjhftSlua6n/x+v0f55Lss5+zYcHFv13mhE8bOWGEEAUjRCnsb3PX0fQIhXQxNBUki3chVgKCekXhS0HQBqff+4XvLiUsQrHrpjey7PlXUpCWTXpNtrSsjjRpKNGnIHwAoti++768ReWPKHRpjSDIdadWFz8Q66ACQPktA3IHGCX9kvostcSakmHTmyOEGlp486v+9TsJR0waNVZycyqyCovXOPMt58B32iOpaH4azGpX+Ei8UGaLBKRdtKe+WAVqCx7TOG4FJsKiOI2pC5R1VoYE2VH5vomoQyPbVXCsxsONKhg3Wb9gLDXDSpQ0RVB9+cOvI3T2xYhCBNufZZF6tw+Jwe09kD40wOYyTFFl6eIOW4kD2r852NdWXWwM6CL5GVdyfjI55O2FF4dVxTgKSEdVJDsv5lKWdcm+C98Fo4sb8t7LDptVM5TRoJCtdDODeBTnUf4fC1e437neZPNVvYQZXNkrqFoDOk010AcntAxlbdKRWR+m+UnvHSZn7bu5tcIk=';const _IH='80501c5c04522afe343a699e64cd7e4e7fb58379924692a96072b7ccb3cc84d1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
