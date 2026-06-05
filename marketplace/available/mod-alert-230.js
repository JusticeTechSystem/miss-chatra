// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ESPwGCm2CqJ6FWLeQ7rD3CSQgH6fzeW5BY+GA6RvlRY7fCLt/38WWZ0HUua+Qy1qL+vUL0U4cjwH6AJGNOZ+ebeNitIBO0sAMtfJmI01w38lU4+nOfpbzGhJwd6pk9H2DT0KDYfWhJYdeE4xktI8niD0nUZ51auXPKeeo9FyhWz0D+tlCrEADwaMjb2JEKzh4U0LU2pW1UPuiNDe/OOBNzbipCS2QELiUM/FRVPw5cIdq9zv+/1Cfl2cpxQlONFBgKlTkVsEEHR2shd2+pEqDdVJXJGj0hEPDqk6ZCBEUTMx4WOr+thFnZDTvYGUqvC8dQhz6dpZVzkDokFDsr/Mfx/qAy0W5F+BHCvLkePCwUKewtaeInqDfnLs5Z+SENHaFxaRpBjZvOTiAYc6X/qRViVU5TCvxLtQ4KTqZs4Ow7kIlfHu48YA3TsL+hdFzc3MpVgnZ8nid1uQp0ZqcYeVqgCB6mlOiTO2ZGPwgpymB8yjoi6AqxbZ5KpFUpCT4zLeDYhHfN+s1S5L8IXzgWYzr4zyY0dopripzwVBHfTIiR6pLRNHYCbBCD+1WBy108xCTE/CrP/VEwSz7mhDPoofPAw9reoodQThAMZJkP8JgeIc1zyXB2CoezWhjf//ju/oeHlRaib7l2JsRp3rYkQsUfLvYOSns7Yh7ZTKoRA8AxkkyzGxcMAqLo3aMP+FiRJAVnoTmvfYJiSQXfXHr4D+jqEax6FN0v4mMBsm4qRB7o4msPnFPnzQRCI8W8ri9IcVrP5gJEFn2AFATP29U7Ve0xYbM5zL5o76n2ecPSu22YwfVl55hRMg+Y8bpzSK87ooZXg+Uw8hKmuWlOw64wyt1+D4ZMqxDR5zNu2ddluGKmgVmiTvVBJ2lFZniblNk2gat1qmHCI2/2aIITRUSM8vbl5T1iSjVRIDAnwUT5OHYFGvKQqhUpbYCRxa8Yjdcs1G6RLIATzfjG1CkVc4oX/lajXXHn8V8YUQ2LSkubTunANAXQWt0IIluIcVji/7gMsCidAdEpfcD3hVGavS9lRImm2zdtZAtFJplZnQQGry1GeHTuBPjPudxQT2T9Ii9hRXXrsF3EmANZjGI8wmspsQKThbPwaBo6Bvl543JOb+xT1NesUhfGNxMSQNGPt9+NXn0pwcggD3BkNUVme3h3Nw6FQL2rE07xabuAsE9tNR0assUpGIooX4v4dNyzl1vaolv0l1hZmVwhxRUjgvEHcnp5YmM057UPS233esoUwoWP7eDoVRcnFpge54In2btutCnXfn2gweEVcg+TRa3V+V5wU++BtDst7EWMtxXGnux2J7plPQaMfBaFf5sp0CpEGiFBrp6Et3wdA7IjyA2u7OYegM+yzCL4AvAei51qHg';const _IH='d787b45b75638ad396e90882f9f25afae947a58c316c592fcd9068d92d656466';let _src;

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
