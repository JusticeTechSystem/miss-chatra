// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ne9Q5nFoe8iB9KpvBoQAP+ltd6J9lz6mCMYupnimbUhf1Rg1XRoR7q93IlLMWH9komqDmniOg3py4hVMSI8MdHVrhvEMV1jNJGiggj1oQANTCOda5pXkN2vqeer/wbqod8VvYvNNbjcJ2vOJXEjQ5lbym4FH27geigRzQ8F7powejrksIRSIcHMSWxknx3sAQ4TFJN9UlBBX2nLXBIRHqSNuOX8GXakrGS3ex2UOCIhuYGaGoNW4A68d5tcCCXyQIrW0YkcfDyj9/lwrJUIfs5ruSSKXgOwdVdPAifN/P5nxa1nKMhanhZzMzXGbPyTVGs40YmtTv4zm/E2P9X9oDixiQsI5Y0u82mPc3tY5pRcYls6oTl3YGNhrZav7jct0thqxgmQKJsrhF8HYA6qiZdm8rRv0PbkjgOya43ACm1C/t9uloQdO88vtWUakBzzIRP1hv4gsB33pyKGryqxkMxQxnYFJ9ZMBUlQxPUiK/tS0kiXueyRX7xCt7pJCCO6CXopt0N2p639uLHSLKNaiUFwDlZ1qRXtbdSA9dQ8lnBsfc1ehFsDMU9pQWC5Rt2vDqRqGSdrub4c9PwHIT3wv6+05DgUDQjJplH9RcF7vG7CARdmYR4kBHhj7xs7szL/kZ4MKTGL09Nk+XDnQX7Ec1WI/i7B610AOvLbRWZEIY2L3fxiD6V4y7GxScM20+utSEWFZ1m8DPe9k2mqlr0cxTDrfWL4=';const _IH='65c3a868c897ccefd36169781ff5ca04561ca634cb2a5af258d983a0037932a7';let _src;

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
