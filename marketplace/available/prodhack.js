// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5o3X3ULzRvwuxOCFsxhTXJ7LMo2NX/m2d2+La5jF53gSDB1bsATC09ljfpcigrB2pCBvb5zDQM0TtuJU8AhJOGDVapPQzg3yAwF4SpLss02vRS0qVnWO8M+oLzG/Q8ITfaS5v3DaFAvgAtIr6rgtc6Ikl3Nbzo5bnZOX8fdgHB3gWRpjNJ1g+gwm1WKHmvjbL9uBOxO1YryK/iaZKjhds54bPaEF84kOI50zxYZacO9gPUwpouWdnHp5m+IKpg7AFDmmP34ZOKjcxqytVmiNm1L2+P0fwwGAFv0Ms21vv4TVF/ppxuFDRjdVeapzwdl3g7RYVbaBdBLW4DfgbRLzwwusfzGDR6VkeqdLtFEUHeKY+5iXs2fhJx/iGIisp+SbWYvbVshGjIEk+EMN7oW1UEJgiC6qQGXQq69M2iW132lTaHCAUAVDojghHA+nNmJU4+6ZhzD1zNpZeZD1K1rId2hcBmJDg/Nn++PtJVI2MHw5eq6WlWvczBlyayH6sG57yT2CZOmoJ/FiOVDJxFXVg6KW1jS07nTMfzUY7CsC5RRi436BfFPYO0mZlubYwnvu1IcALsX4lDZSWKuaDOWchv/URivC9mE9YXHo8LElq0Xg9JOI5EQciDcOYbx4F9oKQXwocsKU/Mw+wdMqeN4/v8tNA0WduI63JIiAieiGZOymi8AhXQiDvoJTc6W14j5TZKx/vqNol45c/XcHdnACcQ3Pm/gOQ1pUCf4znihoTPCmtHnkxd5cibIo/fFGXVG9P0SFw6vhG38vcdfTpze6DwshgOeY3qkBraAMC8gSh2ueig3GNYGRmQVNACyT7l3IWrpb+uxZofyFRq3T4WWpIHwM59yKKNDwEWG25rRSPiE1yDUmAxRxoar6W5l0q1O8gU8v3rN/Z0ZdhXnlRty60EaVS8U0cKnZLNNSET5rnlKvFj3UHWhwoJ5EwtzYZF2eoVMvvZUYqL+OjPUxDNv6k1BquzTJLcz7uq09YX0zaBIPOjQ2j7VEf3YsT2CeC+SNYHnCAlH6XJhILIjia8Lz1OgPjg7x7erDyeK48BbJd7stDyWR6/XiA01GpKlRRZkA85A2ATcXljypTkSlJhjMBuZLXJjMEoZ1FKsmTwx/LDT+dfapVp3Q1DcfjCq5qOqPmXvlw6rJ7HBD7yOJw3v4ZCtQvAOhB9uPKrJVfM0U+Sx1+UTdZA8R1oYFRPFSZ8ALFdIK76y';const _IH='206a34800d717baf6476384f17b28899922180ad560787b17c96ca982f160031';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
