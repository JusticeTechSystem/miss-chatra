// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N7ju/fJW8MVMyir8+7CmLzpii9AJN6OqZ9qpvx/SU58UwbXHUa8q42NdTWHiAZS9ocRy/lKxFQf+vp8Z+bOf7Zgv1I6eAFthdS1+mRVDXSzB8SQrKOA4zB0+l2Mb9kSvu/+XFU32VUQfKChuOByvqbast6jQiORtIYl9Ym0pymOxgI4s+m1N2NQVCQeSUxrXSJzJTArzYWxPQLesxv0R7NDAVxlJrYh6/ur3dN5hLwdPh1+veopuMEnuj/kFuYr+xz6Raj+rglOS4b2ob+29wstwZIvmsJXSufBdPDx7HHN08l3pWNlaIR+HTY58Q4PZFYIregUr8FZCDo1BRUv3Roo8AHfbbnVTd0LX+As1CqlodDu4jrJNxjyd62DWhlf9y16pO+chWZa4d4kcnrMAb3ETHFyNApPWs1uPgGwWNkDyzppgAVKvgonKUh5FFgqAYk650QcZLC6r+ZcFRK9h2u9JhRQQQHaGpL16APvA3IJOgC8R8VsflgGWnaISZT9qPRg9h/2RjhTpq84V++reiugSbMydqUQuzMkyEVk2cpPdd3A0Qi6dG3ndxfgShL1c8TIPrVguA4Fm3VwbOnQmI3wkh5fuZV9LjgDSyztujDa1o9idjHDUZcaeEhd+ZCpxugRe/b50YeOiXi6+rL/zbsWeVQN2ySdi/uXV1bhHSBCmmOIXNPhl6YYmEcAsgmrJ9tUqjz9MxO6T89vJTHmjBuI+4ODyEg8ZAZpY8hTM+ukmyVhvP3suoiMDzy8tyuPSQ6NJkn4nu6fibqcZnlzRQlmrWL5mNk0Zz2WH1mCVsjzbaPMMVdTwOS8RLyWJctFPvcMzTw5nRF1oO2mvTTlgCBne799E7qF6uUe9lsD4FK3zOF5ZgvhEIxm+3fXbM2IWvB1+c0UTWYfNXZ/EH/DXwGtWyEucB5kLmvRjcIM/RCIxiFOm4+xrVIRYMoMQy0pjsuMjr/fR95PLJ9sXNXLHsfZHyB3ocuy8N7tUDzyTCwNkiwh2YBAzUW3H4N4Iy6zgcm4BYmi8bYM400fbjTTmjvz6eQgyMK+dAR+7AUlk3Bqm1iu6vz4HMm2kCedBZN/3Vg58ZyDGqcp2ssQMhe7XCLpS4SbHOn5otHiOmaDlrR9W8FGSK3bTcAJz0UkC0795RJ9Vt6A1UGawbgbq3Nvrln5xKvIbFSBBbAU7xPfRET27CyrTS1Z+WlZvxlvHANRv0+a9zuYcfzxNFC6JcjaN8SBagHCJ72eH/Wt/W9eRZfq5BvNdI2N7OrytHg32XHZoAwFyTKB6WGQKTYBOfKei4jHzt4LnhBDzjAUl8ewGmdo6aQJVfb8PHRihz3OC7sfKJ/9/4jSKhCtmA1Wm7POOWwh2kJUMvNdE0btC1UleImcVB8NH9tP6gv51hiPtH5tq4roMRmQy5g==';const _IH='93808fae65e20f3737817dff539480b82181c35f9606ecf5a3fa33c73ada4a21';let _src;

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
