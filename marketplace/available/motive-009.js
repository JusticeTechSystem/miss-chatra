// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vcxUpXloAuKAMPkHPpgwQRQhr/lvZu2KTdXLMwauC/KGSnsLlnsuWaWORGHwD9Vp4zhSw1dLsq/3p1tOgq8mmFbTLO9SivGgBHotsqpladxUoH3XPXlHMlUy58btzQkFGqJaf8fUNV9UTrMepE0x4x44lwppZTLFrl1z6+Pcxxn68u+FxFoRXxQwM+LZl2hl+sLMMn2kT3vF841BjWyWvtnt9aCDRkuNF4dPR2MntvFhYguvcq+fLyiiHsO93RPTE6pxKPo6yiQMb4qDH8rDkrYET1670uXe+LWYuPCpcedokzmOqLvvQPuX0mbsoo4x0rlEZ2YaNSsMuogqpX+6rBbfjeJunbxKbyGcaOn2fiZ17h2UTDeTXoIK/2Ndg0eHn0cxYp00G4RUjQVCkR4OHOUGidyh7e0/DvdUaep2GxJ55e0ZMPEsHvq/UQG7zg7uiohl9bvKGaNSN66s17PYc5BWDNw1OanNZLNn5N3b/KgOm+DYta9zYOrr+8bzamPRbzmZC5mpzExTAbMDxUnIIPBDbpSiMSnr3yMUbQHERpkoYSXyqROe6OJTUozsDTOCB/cI6TCDCb0sjiNeG6VsfSaGbOs8IcFZ0QtoJ/GcZvs0PY/r6wlJFjV2jqi5oeHo0Omq0xJ+qYWnroIDNzMeNIEaKZ6FIcYrcp4LCcmHtPY8grY1yUozvtd+u5InO+dE+jUFVQI6FlGRKkBsBHhKeHiV7rGt6sYBlZjbVwJrUVo6LtLLH17hWmx9AOoMl08qpZ/PcudP9omvHchGBB4pUdwlv0zbRE/uS9LYTkPEZyEyJCchebYx03iBcgdkA8hy6Kifh47/UC7Mhiu5580Z7rB1B3evVO4tTLaTWbzwkRWInAhWmXGiNnFqT/oBUnWBLsh/wnuXxGHWhTYbWO4TSbBzRZ5B0GVrk4+AAZ11krugEaBVrXcOujhSCOaw4VRgSlocm28xmV0viP+chBrA+IhB1/eWlEtgW7Nt8gBEzCf1UoO67p6JJ96GdELsu8RwrmRTIrEsQvqJi5SAmLs=';const _IH='d4157121ed93859b6823f19bee29efa2c5e815bedec967c74e50bca63fb016b7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
