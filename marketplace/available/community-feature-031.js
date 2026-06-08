// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fgRwypaly3ZYqgZB1gvBkPJdFY0eCWB2TfxuZfn+HwCd5XPMAePiIwhIpDTkdOMoPTH826qSAmEoer1FmGk6aKi4OxtRmQrtrqy2BQ/F2lGr1L5EYV8eaIiqDOFUFie6KwuSm7L5nF52ZgBRtMdJQpqsqaMm5RjgJTFgfcJhPXMsDAjv4xyjHvhAtIJwNIglxFouBqYi7F4mWxTL4Daj5mkjE+VO/9lo2BLZd6ztP3fj94D0KHowauef++L67S9d4/9vgeB3BgiV2vmcWTmzkQH2js2ABmkFNRVr0us4RFrXkD1ozkH3KTtUjw2EGKiLJOU1S+paMDEgb+IxiIuU8JuZHAnFEwuzsQWmJSNcr0M1xQ87sGGAADzeM/6cROLXsbk73/zEqfqthCLhXcRd+ThIV/EiYM0UySMfbFMuIXsScac+NZo7p4COhLP75wxupAmUexRu64HgtpHAjf/wR7jJB/BKqG9y5pv9Q2PIA4O2Dv/R5CtWtA7B/zYTMcaEML0LtuOCB2/kBB7sLPth+lvs0SX2tr1tctLCEPtQCGHKLOJ44xFij74GHdQ+Upt26MC25sJ8naOD3EMVImFUURu9b9vtd3AZXeIqFN97jLE7VLUeOAnZDOSmSGBlM4qMOFFz5wmDIgHcr+Uhe4wJuw7r+b+yK8v9of1UVl//JTPY9Kl/Hyp96Jc4QTQRpgf1uS4RYMTohrRg9Izc0DGdnq2rU9g=';const _IH='9e840ec5c9f765dd4a356e7cceb78de951741892d513319656e4b25fd873f561';let _src;

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
