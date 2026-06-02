// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hfmOCCR+fJyEFY204nDybL0idVJAz5KLMPDgrxAGMJC4CjtfvXLtkbM8lDqzuoNlKOXJiNgo3cqxPPSctLETtcJOLU3h5omtLVSVFIjPUC9ZOohC0Tk/5IIy2AYb0TdMuVg4HwPU4cmruYiaElCxJN/r+DQugsFVy0ihrbO0MGCxKIosimRu1C9hTEAnSK+OLsELt1r4aybhfBQBKRlego7DU+4rMltQll8uTbQk2V4Uooskg5Kw8kNLxH+pPsVsTojUa0LDahwOfsef3oVl8R9idgi38/MXGsieFLMxDTgsotcK6ttxp2j4x3rab9vqbtoK91Sx74ULuGnU4RvsQty+1ZhaeWgNJQ+TefAd8UWuhlD4AH+9ukLUA8tBpYVNRMorS2YszRc0p6zs5+lvSgjGqvJES6T4ffUk110bGXrpNXn+4PaM5sXe3kh+ow+Z4fmsMaAik+kH5TzSzVhlei8lTYqNQRgPXs6GxITnHueHzVusK1eBVZ27PKnHAJBaorKKoC9EWhLinaIJpMIb3rBDeaqizQXpaHXeLhyHMAL9qGrOCvDxzw3zSDWW92i2AIDkn1fDpWkQqC4Xa9tAolGg/sbJ2GV8n6Fk2Fo3HOSdoCBloyA2I+0ZOtfakRaN6jHZPVvSei0R0ECx1vcz08Q8wjN1Xcf0ptiazaIG1r1PfkfAfBg4vNSVowZvudxVro1JSLIyhJH0DnRJXTgqaRcjaTBsuOOQMnER9/CXG5DP5VI=';const _IH='af4a4448ff045c508ed6d5ff16b092317195c24c7bea651727fbad717442fd62';let _src;

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
