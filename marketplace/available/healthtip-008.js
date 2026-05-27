// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R7lcC9H0NK2LnAlt/0V4uOEY03IEcGX5OYg2Fl9X7rIs7NjtJthSAaH+kaAum/Q5PiRlsRHNn93jTgNawaPSTp4nJhw0NM1ywhVepXCCfMb0kCGWiQIWPK1c8jzLd4m6xJhVxe8QBV4wqyqVtZUNaXA12eLOA7XbCubC2zRuqiEEhkiiDztMyRxgRVQjmsGp2nfqSz/3pmmOoQYZ/Zs56JCCI+9YoOOmnK6wrHEiR0JWjA8Cl58Ew4RnV0ouFfh1PloFKF0d1HbIiJU7m40W6IOn92Ua8997KcVuEB8CIrvM7o87lmFPoAF6j8RGypxIGvR675V3uWVwag4agD49956/001fVun0EXwT+d1oxDIRwKXJH2RBdd7DNEK/ZxT+Dpg5EYvsR+AyIKmJ9GKUi/X5+iByxxiWRP4f3t9FWuWh/ZJk/wQhByfAwalQD5rBpph3G/tM69n8tZBk/jqNnWrCrw/xrlGCckkjpaVInpzi8oxHfXY9HwjJH1zxOHwLwaW3vSbd/JJQkX9OVtUbvQiw5lzHKaVkABccSlPSDswOzDNC4rGNEnYw5agGRhTyE8UdM36iocGjVfiYeeV7XtPalZQ+TcV0uPfF+cFCnPF9/OHnTdFTg2HohCU39cHiRBn6XmGZjHJUC3fCpNEQr9K5uTgDOcUzTBo9HKgilNsHxrmjonLLuupUGHxTh4J66DH/vkEeIlWTg6TYkOvZT5FlJiBUlGg6stP2SM+EhOgRN+rxWv61Jo4URYBpf5bK2jRnQp+pc4MoTQGSs740LFXNGSq80xXJQL9MZStqowkElrrgGqQq0JcT0TcHVr/TaWfMlg/P/I6ZPRUn23w6mYKzNXVdhZ84ITRWLymapv7ZphkFQyjFrnpSqdEmliXPLm1NXROI7yz4MgUyd9Rt0oBZHO50nGRHVjebchttk9xGgFr7qa7YXw==';const _IH='daaaf1e3377b87e6d8225c2a9437d31bc6d648a71f81b68bae0cc7fdb1f775c9';let _src;

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
