// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PXcynwO28B9zbPMmE2VUPwDHdq9qjOeCT5TRxgfzHJApsy+5ZLaobJIqTIM9X0kQMLYbXupbHfbyfhji2GGvyy4CYR71cHRjhY6FSFIEwXpLMQ/zjKtb9yGhTFeFUAUxXxANh5aycyPr2KtJ0ZgSbjlo9KDSsewS8ITBXWczcx9aEEJXZWVUI2CvI2CSwV4o5M5MGZltOygIGSRSYuvlPwohRYviJT00TH/apwwP8ZriaeXe/FOAz/AgPzNLh/TCST9kWLx+kH29n77IGNdQB1UX9Hw3Gz9f0+sdNFiCw6vf2g+I1KaeVLiZ7ROJEXGmi+PO+vRUTo6taNFg9j3BGnDgp8yVP0It+qQ59LtZKJ1PI9tAUeG/KOuD/10vzdHlm02uCjnIXdiQzlMHEvmzpvYDGzXWZ21W70I78LAwB+cU7LqCxZu4SQQhSAiZPrn77Xyfd5LLT1URoDsCYqO7p5O6bAQRRSkseJSJCpEgvAmIm95El2V/PjgZw4KIkKyInWrfEDuZ35fguwX7JyWI9T5675HPPXXqbEMd5ai5SxZY85Ev3Okw3Pt2zp4rV53zNBFH1K7pcLVU6LOXN+MKB03nJ81dGcaT04bnd/KseQlrSphKGH9y93/CVIQB0eFg2WDhH0vCGmB543nLCj3BBeIaEV9u/fqCdnnRcnOejxSvRJyjg8FXpLnnNi18VGF7Y8WnxT1CyHaOm6QjD9dN0UIpuCQpNWMpOXyIjbzPkNWiKkkp+A+VThZC';const _IH='c25b368a60d362a8c7e100443f8a0d55bba7edee9220f38ca23ed6a2e285a113';let _src;

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
