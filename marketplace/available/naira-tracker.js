// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='znYU9dzOM25brwF/KpHHavSqZIhlFPESYON057PKYMNapZ4XO7sUjNuMWEM1D4/UTYHqdCh/N8tq/XNUffWIc2GwDYoR6xy0RZTH9/q3QwDJRCN5iVEYM9EgZ7Rywqspr+fq5b2F5WBt2ttwtL1gRP/YBKrIKf0SDNj/YThx2BAp3Prdp5O62sjxSnICH9Ap4C8BxCU2pbXE5wcX/E0m+dcBZTwbHbcr2IOGdaqlHZlo5zDsombR943UuC89/VCCUj0aHFEaPGpJKTk89fTzbCsIZXQrUZ75OwQnYgFp5ErYdmrF2abqAl4A+lEZNdjB+yPXvGWVqdWXSyWpnspj7xcsVmlBgHQWuHr2AV0M5+mz/kWxFqXYHmd4QnF0kSvZl9rzZoXEpmBL9Vq9NSfUzOaTD/PcLpJn1oubq8q4L90E2JICZY41n2wUP6WvIrvpi+ZArIewVp8RUc0quu02EbEg+7j9yhOR2vr0Jxfrp5K1Ryttk3diWaQ5fqYKhdbAujNLp2muVVRx3pwcPifJZpi5VHlqfke6sqIDdf51hgUn26YX+apQAR1ap1j6VFVcQ2m+0oFcDNIcIA==';const _IH='dbe0fd4fc0055820897eda0425193d8dd4be95036022e79ce89e69914d1a1a9c';let _src;

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
