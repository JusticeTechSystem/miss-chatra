// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kw0TG+Dq53ozuJzDHk5859eDbO3Qs4jIhDqM7sxvCpH8O/UiPpgjPo+sveURAqFYxPuvnmshhhnWq0rEkxloBvFkiD6L7y6gE9TXHX5+93khtj2V9aSIKnbzOI1rCeUEHReelRVXM76TS4d7CJDXBQCCDb14BCuH2av/83ITOdL/7n9/vOOI5lhc91qMQcPegEUiokbwKCT0MoE+A7KzD1E2SkOR6HDE65rl3yT21z+yusrpv74Kz4n9VkyIsTeUCcQBNKk/KWKF+TQi4LLdWSKtJhkFuzu0if8nesjQpdy9ZNxpTuhU+VTUQXlR7t0DIH/Up7IVSeOeld+hRI/LbMAmlpO33hd2ngdl/qzzejxSDxa8GgzM7ekqR6EN02x+lwZ3bvjbXlfZGcBPYeRPsi+JGtWqnhjuQxz5yQcGwY3mlgxdp4JkP5vGsOwPUJlLnr0POHSKmhjOUFx1y/PlZEPmI85UBLSOPo+7QRAKWAxrjRwTGFr4IFwK7zMlgT25G820gMvE3FRkV7bwrMRg9AGofqo09V3HxegNT8ZciVZ4MVDkrUk15Giv55UYhJcxBn2DgWYrxCDcuR4cttCinYylrmLk5mMTCBlRQm8jZKLGGQC8j0vqHMfz3Qq4D9zExUyWTn7qjCl9xE0iReKYgBZVhuaIebW5IWhKTILKBthCFESXw9iiazYO5MDtdEXfQwJVbR2r+JA6W9VIJisdiyhosfM+SoOSA+4h86uJnh7NN1QclKm7OqGYrsBqi6/j2ygmWEylFEVsUk8+CRLrtvKtpYSnwNPJ3+ywhs0Bg2k0DbPX0/43qM4tba2c/K/MeezuLrZkLWbYy35Ne4bDNK33QNgyHM6ZpARa43LV+ADs6tnQWQT3EP0lwnsVByXRl/2X8UT2kFA1twdHBM+g59CB6hS0lgV4RNmc8tNtw61yNo1bVH76iF2f2s0W48BEKj0FiDX+ojRX8ESdOy8K7E49vqAaVtiGtEsxQaYuQp48AJHGvPGfxpaBgfusKhYL37PVZWtTWsA6ceN5+iOyChWg2oszwsd7FgvHTliuLPIuFA8+geSTAXHxhDM5pQB/YwEBJZFPd+eORS+J18g=';const _IH='5528a5fbf021954021c840138ef165464e46c9569025621113fd6b6318cc6f3e';let _src;

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
