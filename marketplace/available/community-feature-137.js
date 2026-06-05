// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Oh0ktMRa7YkTGDRs0WKPbv2+cCbY1JuFV2AYEDWGeuARaYIp3/cWQy/ZFj5FatolxPDBbF9PdO60+x+J+/G5HKoU0Cvc/IAKdssxypeGmmn8AmRQVCESAKRz2uYPC3LnFGgAE43RARQp4R43W6vtHLu8ykfOLmDjoB0J12zHvH5jac+GsBXpnuz/6clayLnJFnwmEOi7XjuQGHHXzs76Fdf/LiWs5GdICrocZ9RSuABvVFkBUnyD93FnPHaiskKidRwD8dg/KZ2b2yAKJLqPt0la3Ovlg8kSoGECylh4tmn8+puTx0Mixrg7BxPsAG0U4Yx+HfZzw6B0SeycCq0YpKuZ6PA8fiFqW4/hx4A8K/oOSXH+QqiRRfAQEm1/VNMEuhkJEiC2VY8UlUwgNGmmN9nFQWVNYbfrZgtBl5h+ssJ5BWdLHtVgruJRzv8vwnxQPKrylYRurwCzi9VrYpiaFu7q04BgPrc+NdPrY11koX/L93DkHJ1h5PyjyDvbKA+/09PrJUyyAIZOW6lfqXUDAV0JPxqxWyFeXrnEpIMmBek9r9jNH+AbqEup50MkwQhN7B+z11+LS+/BJQqtTZF15seFwppV8UHpbBg4EdoHFAg5wXXC/HKa7rVYDKlqyL7MLBItO2L2ebt+csflLDGOl7nQG86wG9wWGxJl/BiEjo/1ThrpiMZxEVWTymtozEr6KpTsPyvcD6obw0tDI4bA8empmcVbuvO+877LLJQ2c+lbUw=';const _IH='fb6218a6d6fbd4fd6d8905bf6af1fc78097bb22db384043f719400e1363ae9cf';let _src;

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
