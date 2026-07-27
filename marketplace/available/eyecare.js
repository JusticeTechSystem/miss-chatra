// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSuVm9OAKD6pfmWf08RVZpB7aOzIb9KJZSeYInI3hyGH2GiAdcbym7zv4RuQvbfdObyeBEkrmWsbsPqKr9CG4hF+H18AoKoo8/5oEYXBy6I9wB7RfCCyeoEsGvyuzrN581AD7jn9Uuc2Ag6Dm8vPOABAjV7Uu8PXGzLDdbZqwdmw7XulXxqJGN6N9EG6iT63Dftd94FlHbff0DMQ10DYwYGA83/mWbmkePJvW+HI8dcJJv0kXOi04ck6CTl2yQJA2fkIbbanDAQzMOZmopr2Jqty98WbVOXG3jN7tIbOVCIMa1QgnzRKZ0PCez3vK2S1PaKiEYXBr8x5BEYMXHXZhWjuUONSewSphmgMOTX29uA7uOcWTlBqQztZvnOKoYYtNXtVf8sVPWzrDnyK5vX3S8ouWPFMr5HxqgVICgcwZwnRJbbFuMSPEfJieN8kMB0xBQvt1JkqbackS2dE53lQBR/RD28KyxRAduEnfvX72r6nZv21HarzACwaSCY6C0+5CBEcqBBqC/+2OmapPTidTUFJjhZbLPPzcBmY0RfLvevrCbq5+F2zgvSxH3zmA+ZNIkNcIU36Xl2nhokorA1KxMIu9EjXjBIx0Z7Fsd+9QK45V5keg8126c53q4QsWO7khnrHTLEGiU9EoSOlXASWPTuDHVAoNBnYve4PSP6qHuz5NciERKwroAC6rR3DNH7XL6IhW8fLmu+lySd1rS5w2FZkwXZZm3aIby4LMUTlBgAbf4rSVuOxpZ50iMGeiY96eb+4Y63KBn2dOqIyV5RR7ClAJVS/jWw8XSKoYzu3R0j3GjK98YupD7rB/z91iRr2VAxtydRwr14cHHnUAZFf7QWVySPh1JJoLTxSX+2YYGRTsJetN8/10SG5lj2qW60L7rmVz0ll4pfGAxgxLPkpCjEzKazZUobVnUscEyIaqkT4Yx848J3HBRJZhZcmsRIHFsljzaaiKyUPmesACEyZk4DCiEMn5ODh8zn+vswBgdd+OlsPjB5VgdblnqgpqFzB12tNGwLbFjDMpQEL7Cn45xi3+PD47Hyl46X/3W+KwxQRer6x1Q+ZkUCavsdDeDgoy/i7Qk0dnTjDomdTkINHhjMCUy6XtPZWogVvFLRor3xmXyWhMu98oFQXiOGhBT2gA0KloxIoSu+DoCP/YPD2DpjW18mMQgfmla7c6JQxA+fHwuVVZF6/ydWXLaRUg==';const _IH='a9a290047740e5eeff5add46136b47283028c0c5ce3ea9dd687fc8091821b2a2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
