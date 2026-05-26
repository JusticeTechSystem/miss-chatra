// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E3wlxSBMzwwENVDIfZ/8QW9PCvcz5yCZPY3uGv5k8wfXuM+IdxMqa7Kb0nfnh9MiflX0pTy0Mw1yH1GFATMOxEpLFivXXAuzXq/E+XknySNYEGgYXzM+G76xOC2G8VHt0Rbln5e6hfmXcDcqMcjUj2FU33rdJ5YLZkKD4nvjOhYGY3yw9Se0mk8aOXYcQu7yRGIR1jiltPVevnniB6YS4OmPc5nom+ct7MLZrkb/2yTTEo540j7oglTuGEkCLR5n3hPlOmOFkglPfstWD2qKx7UyDITFAjucqTd+ECrPqQHWScmQjwBf6ZeIn+cRxa1MtwQTyzL6y/kLy0eSPGt0rRSaIBCgSnyLLJ6gjkAO5yyoWnKjVfttxB3FC+ojrLNUnM/ujiZ5GcauF7PEJaubBQZTqTUADCYhRO80Nl1NG/uju1XtxsS91EVGbQW7TXBKhkUviym0f46X2koyfRxjIwy55oBvP5i087iwGnDRndAFPxp7ebXQlrMxU9iGlAv1f0866Syxx0VMnBrQCOpVooUKeSOUVJJz1ArdQ8KaxOgb5CdUIEsXhvTAVGNLJ1Iy7eKbL6h1VCKae/1MOKFFFUUN/V/Et9uoxNS9MA9CRGGQdxB+MKWfEMeN57twMhLPOiMa/CKvQDOHgoJk/ToIsBnXHrWoysM8OkJk+A0Y2a5w0VG38Wafva0rfAmGFn0JW+cFAZEFRyR+3O2hVMmfZo0pgsNOuV6N5ovzOpkJ+W6vom+uoNoCos0BFWI10IMgX36Kk54C+qSnbPokWQq/GrYb0etp1NIPGxo31zlpqLxYAZc0YjijccWgjavIcAU8s08UcLwv0RUBpHbVzYXppxV0KcYQEkI2bPCfx7jdMobzZolf4UGexoRjvIItfiD4BzBZ+QNXtbQ+RRujUANokv+6vr+Cm+T5tzqmzvT8Q9aOJcU2YYShoimseeraR/emZRxP5lypch0i6glz5t0pSbpQb6hsjJb1RDMgzXYVk9DWlFG3d54kwsQmz4oLRVQ1BTZYxNNXZOg25s+4b9nsLJ9zJ0i1rdkTBvgLrtFHbsdpSimNLeDbnl6m0SXfuenZWtk3PCS3o+r7dyZErdCwzEoIq6BxjcvEKwI5eCmAcADEJfQwAkh8K60Zh4haf3xz9T5oJeDhOzEtoJ4qJJ3lA7YnC6J2UOUi17tovFgUbD6D5k5aAExqenzai5WTd9ocWqyfay4DtInQ3W2mHkJ40M+XULC/2NVQoubq/a4+FSNbeSfiNV0FnDHsDlrG91Yk+9Eyq3bdEnSKcdXlkfxqnU/h2OHH5y9UfAm4GoKFzFlx1o6KDubDne9ysGQPfwrjNjNxniZoJy0nr7lV1geseQWRsZnzWfz8cc6s2wNGdR7DYLqIWbueeRXBt66D8I/32g8VCDaoCjLW95HATuxKsRZsq6zWimiY6WF4VSdbqg==';const _IH='5039cb6ffb9a18ef0d20e347a42bd057fb3b0bffe0ce06c69a51d4a77858451c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
