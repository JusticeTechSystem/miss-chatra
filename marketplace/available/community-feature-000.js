// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HyXcnqCGfhInxVQxhPXdn7fhCmk0SXUhCfLqd2DOaMBkBCr8TQ09nU7cUdOLHRZSiPaud7J/juHMiBPUmL2HvKaMF+gZL7O/gjHHFN6AFdOz6N2tluKWFFtAlLi4X7jG131+zaK2TuG27Xm4wwhXyoI7OKvyFit2PDzkeIYSDKvfMsEV00Dl1khONB5QFRybdLMO5ndWGOJWpYnXFxyI+xvZYmcxtNvI18FrjDhH8BwVIoU11rzAo25SRL9bAPevKpHAAJf545584VPALDYg+QxwqDsWsKNvz41YTnZqxZlx0mR38zNPAOqdIx/jTzdHk5/W1dZU9zx/KOhmaYGtR5Rrk/r/socssc5V41XKDXO8IyoyKppDOwCAPzUUSmZPAlOliEcF1XnzzH+d/UvmS9tbTIkN9/XMrzsQIwVhN7me+NLxXVeqTXtqpThZk9KC86Llpc1vwP28wPEaWmi2XOlQgAdleM6zkEBiNxcUr95NAyHeE0S/WikZ6BmbCwY+ZXZDhlzddjfsDZN6L7CZA2WOIFSz1GJpxKXFJp8gHkBk72obfw0B+8aEzk+GVwsYYiioHRMC2cUhAQtueqpBrupvuxLW5mptSF4kXumLVH8yHK1gktGUnwCKzL/VnbQ93NLfCLsmElcgxzNJpKSXhi4h0fxFye27hBEBrGXmJJaUbLJ/KYlSMW0L/F4943srMWoFeupy8UvSTpTaYOVE+SY3EMLABHx/S0Oi1WfsCedJWA==';const _IH='1d564bb9eba2bc99b83b4af056594e3feef71193561274e09167697f59994948';let _src;

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
