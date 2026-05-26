// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xgWHes0Am5QR7bmLqOjJk2n8cY+jomLzATeReiNb/V7XNJ2rMrT2puqdbBrlak2alNs8WPX/tKLIxwrYXqI5Y6VCMJVHdm4BqCpAeM7dPWplSANZA1ADMJK55JAW8ZogdTnOod9OS89nOZyZcA6MTlWw5C0i1XWYEBkZQ3Mz5FB4jNp9ORADPUkBl77weK7hdc5gPudRVmfJIzsomDzgPzzC7EmCtUpimi6EFnkA/GpBPe83O9UpKbYYp2GQj2Kwi0rSe16XfHY7lT25vNH3XG94hTArUn8df8kc/ofMK7hWcnJ04kM+fp5BZJg2YJsR9h9l5b1tXce+fP3/5j8ie6R5y/zWc9I39Z3q68Na49uiYGeaW5k7mLk/quOPdkf9I1q+xzCTEzQKtdywRPheorGSmfET6Ot0Kqr4G/kqTXdNcX0825rVBheY0ZwHJCiXslOGO5PMNDooVpLHC+V6FI8U9r7lFj4Kn27jnl2Fo9w5qGIKPzjUkF+1h/V/ojNlG/bBk/EtM7qlZhlLXDKBrV0DilP6EMU+SrbZHBj+UtnAm/5upB82Vc3RuNsbn9SU0dsVn5v8ty06jaBBVGHasJpiK6XKmWG8bQc4BBQqs0/wD5jfa2eYqqC7jJAeBT20areI3KEJBK1XqysK779V3l8MgWOCNxqm43xjQPO07dNLEej5KZApYXpDpV3pucI+oSOvaaYGPci6BXRt/ptiGWu+XVats9edXg==';const _IH='d6ca389b5e165d387a3d63a57ea5d7d208fb62e91a189aa81ad43f4b3ea55874';let _src;

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
