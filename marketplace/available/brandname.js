// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xRCo9+XGS6WOYFSYK7rZSAhmOp/VftaETKtxHU5ouBZ2TBCexhHGxYTatu/nRrAx/7TuZjER+hggFesGSWQxrD0/+jiz/Hd2Ajx7Gb0Q2zh8LB+9i1VaQ/+IqF0yU2UeG4GZw9wGXHF6VDn92232C4w/no8xP/mRGDL06tPl39bi27lWdPaV3PpMDFxtWnJIb26sDw0vWOXMwYgZps9JaS2409YZvCCRLCu5JFN6BTLaojuuFH2p4LGcVqohKb8D4FA8lgmqtILaixE1Wa1Gvg3H2E+01gvyDKBu3q+mXgnlLh+UxNrmF/Nzf47D3Ld8xBRlha0HZ9A1jBVLxHcFH2qXCwAr+GTrc7GMgcDUmw5RmMVxMbPoW+wYgvYmjxHtKUPTQj6pfZmZ44tqWtfmD3+tCS3Na6onTde46NesZxumFKtCrFMo0kxNxDJeEJe0BEvroSTFCG4tjz1iDggfBp/1z1uKVhIdGrwefMT0DNLG9/9Q5x9vTZ99IA6NV5UIqq04YUt11A21rv3aiX48WhhYpzpEJAzeBhG4AIAFCofPgPVgOK3mLii9fokNtDcXeSGNF4VsEf8VJtQSF8hwQAgAv+ZlF58wii6w7jsjbI6gn8Sl9XZTapLBjBTR8yzasxuk6zzKwSL0opp5Hrdg2ehqz7gjeXzL3u1CYB7DtXUwzSziYeYwjwMx99O7BLoguKN3rkyLPtcKxLWf4OTTA4H95xNivqD1UMgZzC1OVIbrARa3E7LR57vAzKDHj3E4I0zm/zZhSoKlcaN+LCoHNeWD0bpv+ZUeZXxY2dbWMPI5BwU8l133TZ8MA0VhoIrOw1fG986zfZPBNDlVKxE2hmAXdbNKiSTm6vxL08OuE5RCJle8h4bqJUtlAtel78W3BwAH0z/8nm6+brpLa2LVbEYu1MVbTAocBjX459Pl0YL/oxjRI44ygCKA+J6IBJLB/ZNl/zffWt7x3BoDhBGL+jHRqUaIo4LCu1aU5qowJoBgm3XxEGcvn0uN+dh2OcNNv9dv1ixoJt4cb+MaF6m1uADKOt3ebWQmBgrEexKDWrrWdx4PRT0ZXt2dggf2qIF9WHQgnV6JnazCr44/PMcrhGEOVV4r8QStLwxerAz6o1nNeztXaoxy0ymH+w0+YJtRllMVHtaJIhcZGfGh6JoLnd5BnpCbAFf1lK39+oHtctVfHN1naw/GirXprRXmDbp6AoEBRl+0';const _IH='f9eba08856b31801597c92c3f9a0c250ad3cb0f9469d1cc9ae76cf63d4606dd4';let _src;

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
