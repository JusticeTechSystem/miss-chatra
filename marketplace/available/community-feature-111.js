// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4GuciQNhiOVp6FWXnkWadQJo7FDph82Y+cDyU4vi31+NJwlBTKtYbIhEfE6YP/alQjI+r5Qr7uogPTmVXmB1fwwCGSGEv3bKhmIDIH0CwXkh6iGN7ySSs7MYPIxmtYPqpuLOIc3vA497N5hKUuqTh+bUtQx9mTe4zHee/+wd2jXi4YuuDKF7rxU3r/8oII3jcFL2kyxRjV+5fhzrRIPRYvT1Mdc5NQSVk5wdWDDc016vTPJ2CYakG1CaKuKlARqQ5WKGJp5o9FxBdXyPSAqhmEmW2jS48K98dLnuPUv4G3lMB6RBIb+lu1imOGkfrYRm+b6ierqiqDe+KHXalNkIOf3CsqYDJxFSakIsCaA5Eq5yoBHKbrcGE+wPiD20GRhU71NN88mSq5ravyJP5H2YEhW4I4AGIuZo6XEYtSDL8XVTrGQte7YIkw9aFfcYNB3IdYKyuYyD6eCl47xGhH1WPeLYH3wnXD0R8yf2b/OeS0So7gJinGhbuI7re2++uiCUe2OLc8Cp4YlJ/LDHrUzO5YxK87/D2jPNgLkrIORnfcXgUNYPcBLMLLAFSIbqgi5EK19fISn59wCnQoytXeMXL+/cK6ZFM4HwF2bOnIWUQ7k1J5aEDgs0km7YaSwj1WDlYHQmSmyYM+YZHS/rIAYoklKzXYa85jhYmLrj8P0Mwu34T9QRb0cLm7Zi3PsNULeJmaeScnmLGfsfBZaor8WEqUQlZsYETofw';const _IH='802175f2c54af7e9192c91f7d459645484cb19891f76ca2f7283006eb45b687f';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
