// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7ea2ckcTskzuatwaQk3cLJW2wT8/xOfAFF/1YALleFOxhlFZNskjW9ObH8Wgoo4yoBRVaaxWddZA2mTVcP41Z3renF74tPWLAfDIt9EHp+yGfD87boIdifYmMCUW1UtiazkuOEXFp3IDUhEXQrJJguehMAAofzkiDQzfzXuZkiyxZ38vpuRiDFka6czR+T5JwQucPyf6DPyH4he8Cxu7ic3BcRLODaHprtahB6rswlyTrlBAToQnRuHL2A7sH/w/yTWw6mWOewbXC5CxEJj9bGGy4OvmlXMxhqGs1caOQvXMPyVA2qvP+GzN2csODdSjDuC4uuXdDHKeZaeqgCmFpHmJ15Lf0hRptkgJBuQEtQpWkTnpdKAYruYXGkaTwvYItrJslh2lVJe0dkdUDV0ixIruyRQO/p8MQMXIJb+HvK6QkWqNsju2YBf1O/T4Y/tBFjsFFGgDepukyj6BynyhQuZnWDrMbJgLrsrjrAIn1hnjFVtNI8bl8I7/MG9WQWG3yqqX4399BMZAhKI0lQgsbcEMPWSQuAAykPL8hIzIfFG41QaOgbNxbwvAfE4c5OF/jT3CxnHq6hYGgwP+D8anngmyM3Ezq7cTHekagq6GjaNjYiVLPasARrpDRPn9ixEIGSBexfVuc+kBwEFCxOnCsQFjOnH+KkTbNtajxQjZ922pACpo+mVA9RvrmuERDOwUX2axiT+phRigHPK0+HuEdRPIp2v5bqSEbcnlRL3Ak4Vx6Ex3S8OXwI02lNNJvqin8qPTCvKeCBASh8XtAuu0LYqK6Mkf3/7Kiw0uk4YE37Uvpsa8cHerq0eEqXHoe+Muxz4Iw7qQcqAVshD30+69+gqtZsO3aPt5eZrmc9Dkf1/0ZRMDLYibg+lw84d6NLGO2bf8XxPEEjh5FnaFa6V7q6XIgaDHNBVzGlon4STHs5UBEAyV6Sdh40KgIw40ivYu0zjddmdnRVqm4/Okp1w2od0wIV41SxJBgT0+DqapdYr1GirQqoLBvhS3PFvDXI7doYyIQA==';const _IH='08f07d13e8cfc989d502eccf3dfda30dfde047d7fe04cdd655cd1974cc244805';let _src;

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
