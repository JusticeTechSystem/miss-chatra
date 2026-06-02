// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xxm0W53OLSH3oH/Zs5ZuU6u1N7mEkIcYFRuosBJDZKxhtTCnTkmNSxOv2ZPRNkOxrMU4pTDIAFLhaRSarroTD7ABEMJZgwpOu2Xbe7+yobEbWHafiVELq7bfegAvCxRumjh4017uCqF+4QNYJGOHdZqTY/mjuECcflDGg/PFe+PE/niV2/XncYBnVny7/2wz72BrAibQ0WD+wMNN0SzinfRGQKUBh/ydiZZhP0UNNoRdsbwmEK7FomB2SjOfMQTKRrMKomuENiCxc/sYfzoygHmvtkZarMrqIQsRlvrN3pNcUby4Q2nMIfWKzjPKA7HdsLcUWbdYU+mebzUjQ5voVyNy8nE4AYYGwr3+GnACtiAoKF+CPqkFe6HSUuR943HwWbRJ9DLUkNy+co+zGyVW8iDCmLS0OdCvAh0poOhIyZN0H8N/WYj8QacHy7aM1o3iYCXPa6XuFa9+EDADMPJja/n5nFwwyuSpiEyvgdPXd7nfFQX1yWV3hxgkhY173uBhPDC5PJIZVfstoqS683OXgBDonGMiBRTKOpRXMli9R4mHGJ2Tzj3aMeN/mo5E/ymS/nCjQVFri388RjXA/6mMNDwlcWMNBQdzlMA4HBrZpwjMuCmJh/HlwZx3C6hCny2IJE6GUdVFDCnvtL3c6/ujIWEtelKIqV7TKFHXH3ttWeiwac87OhaJ7I37poyKB4roLVP7sqn3sMaHF02gvxgUb13HGUeS8W920CJyUeHEZFjY81g6vT0/mmER';const _IH='568f3007b1a27309c2c643f61d79e3118a15300bdd7527e21e09d4204f1c168b';let _src;

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
