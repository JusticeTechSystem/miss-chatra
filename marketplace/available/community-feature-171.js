// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oRvV1lcwHL/LGzV1INx7IxKuwFmExXLcvc2c4n8yaoKzC+Zj7tEIZNprbtnsXissiLl346pF1M4onrljw+cTIrslRRG2mjr3T5ww+sga4iYbaAYPGClZREAykwhFofT+SA1KZEB1QZJpT/43bkxLGuWDuEPv0eXCcPABoa5d00OqrAEGlb4yhNbIOGPooxDCv76P7pVwrjFfSOLZoeiCr8bM6uW3P6q/+LTHjrEDs4sUPec6/gIpXFmJ+7M4CyCaKQekXbJZQZPM3LOzq+n3v0uVXxuNa35MfPu7Sm1X99sTJFUgnsFwiYJNFwo5b/r6NTA+5O+KkrcUJlIdFl0VtBwC7j9p7oRraHTzFpyIdgpQwJ7GuD9AO1P9acoCUKjBbyxGogArJjHvhzV8gGTXVj6bNeKglsW9UDvRKlzCadG7HVYTuyDifbze7AxZutvoFak0EOEJUQIfMcoy4CH5M4uvLMqelS4G/MEAWXCBogrkLu5f/r3NpzrSR5ANzT58TupSrpul/sqLV246G6zmM+JR6Poe9wPvMiDumaYarcY9FnEG2VyKsWDQNDpivwsVVr179ybAEHX3o9PM3+fSD3rw74PksmngjG5MdngOidwrzrwKmZhSMF/mj075uPneg3EbE3IA8QldadjS7apUJXbdfuUNBHXQr3juBp/2nTiy6IRtVKcLLexaq+aXeJoFysHJdNIK3J30c3hRjiQEHNs/8YsghFKp';const _IH='def3712defc26163fe8d57ae87708ce6466bbba70a9e1b47e33b5d86010fa939';let _src;

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
