// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7p/NPD1bvUwZRR5f1LHrKJU954VVigfNtFsrdM1X1tCIs7g9CAlVBgSVnedxAVILtfyxb1EKT5gCoX2IL+IR38EnpmloRHAMU1JVCy4KM1kDUfy3430/JrGBLt+9gTbKEY0iRnTtDHCFot26vdBO5LkzosZRc7egD7nmwOGr62/nKEFRDD/N7jL+w2FGU4WySBuxp8iY1NOCKrJtC5Q5PPcwDcoMN5u9gOAhLTdRNGwnrgufCFJdyK66EzLsXdwQGdDylugSnUek7tbffE1nXsaEcFWZbeaZS4SMd6bKc87LIbiZKjhfn+/cMySRHxi8NLuel1u9KhIJBl4kKhDz2EhufkRQowkIxYBIiOJdoyobfPpSJcOztC77W36r45IHGFsMBpLuKd+Nfu+J/QxmcxR4pOCr+ahBNTdd8UGRstYaUEp2Q3DaBe/sxz139l0HkJV40zZIC2lT1sPlOdOwr4tj5kRmBfbkBCs1y3Fvnfst+kh8TzyB+iuLMrzuG5wiv5ZeG7ZkDreZe0QvkniNLDD/K7qw4ntb0MRheEp97ycTNcWmfqHiwir3VwASzQiQvUadZ3BOB67Xt8nHxumXPPf23sNTEGhYcKzM77k7E836KTV9dHuOvrHQILe2ObBR4V2qt6zVXhZF07v1Iqx7vEGu794PQ69Z2eAXNDgXWBKGwB8UCc747ESjiExmQEFprodclTBI88jLTx94VpablZquKW+isKX8VaP898GRF2pem19rCZIhjlBwYbKGLHGfn6654MyZVru9TgPpk3i29Af9ZySDQCvo5ML5AUFoHX+i0StyDpvSYtxJ5bWJVCJIKSVWRFOE4CSQJXFuA0pZyoEUAs7eNcR5pub2hYwieN2oQpwELwXKUGOoHL+ZQd7KygS+qmu8KmpCbuB6kxEpg6r31KMfnHMwtX0RdL3fllesMblOoBoIGrV5ZTkAewUklegbRymE+AQRXguf6a8kPdkjOCSgKLlqTIRpEdq8b9vO0K3em4hGhHja5jah0SqIqedfjLwPvOprrF/ovi9QHNRZ';const _IH='487dfddcc44f276e52b48f6f8fb1d8c9790616f1937d3cf61ec3501f1a6d4387';let _src;

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
