// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s1FZJBr1ghBqR9lpIQNMnrHOLJf+rds7S6jPfxYPV70JhaNHN8MiE+GUQW7ULbjAs9m3jq15RGOsarVzOad725ft4zAyk9bazr5mCcb9/LN3PDTcn9h/98K/e4hJsAHXKrSVYRDYPBzRMhJv9g8y3i3wBIm++E2JNEU6oAPtJ9en5YEDvSybSPAL3vYzUmk3oZ0h+qDVFfTmgs9OBBbJ7zjJfvlcBOUBBzwC2uzSBnJ1ArGkCkH9i4gGa2U4JedjI7JWr+g2ON1oO25jxxa9ug7FC+ixi930gYiBATtBhkebUvKN78VCjo2cjzLrsKdfletT7bnT9fc9hha19nqs31oHxcEpiljtFq3RBTMF2oI8Qz19xlT5Z5eSsDHUdRUvX+0PME5dTcINs0WpbGUui2T2mfrRmTKqhAbWJ5jN0zzxJyWPdrjFrqXiW9vg81C8vdXq4HnBZIANyKIHAD+yphnmKDCW9ycIo5EzHO8QY/edQ87zHvMBWIChJMulSGKxnLAGDkOFu/B/wqmAUiu4KvV5mGTkZE01eHi4miONThXc/5v1bC3xmVniP+EN7pliX+muaQcoyi6WkH4B1ck/owmkaxvK1Ta2M9te3RElXAJ9zzqoLnXSgf3GrdYEFIzbqZQuFQeIXRfj79CZHPFLu9ajVCYD31efJLH7gmaaxu6MhTWDgPqLImJ06fPLSd0fvjvlANbYJVIFIRY4rna2rca3eqm8mMuHh83SLEEWGGByKLocotYl2FjqTOVANC6KIKPembmjnNqPknfm74P2/ifS5IcbP6MrFo7+EZC2dmanqpvtJbW834kWi/cw7Qj0TGklfFZrxCF5fjQfQl5IIaW1ZIzHXJwp/M17ZkObPJZBgi3WQLmcnfw1k4J6Vh+STNzWU71BQmPzU7zD3/cFvPMa6hGrmr1BOEtK1BtSlEWH4i6BnljkqTNtdIhZOL9FyT3IPP+xDAH3wAFEqdmKs+01qAiRphv7U0Oa3G4j7iIsW3Va+oxR8boGseC2';const _IH='43c1724b5126664a8b134a135c22ecd3920c245d67ff3ed3585c90681b70f31d';let _src;

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
