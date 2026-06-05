// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7+F7WE/JaWBgYPFf1OXmLHSPgFaFriLV34D5x3Si6JKucbc3L+yEr6D3ARRi3uLhefKPdUfoEL5DUpyW0zocM3/2dMOcnE5RZrtnUWadTUKa3RpkqUFxjIv5ctZbUYpNUn0nZQ0JoZ/cSAk5kVgsjCqEQxfMw8Hu5bzDdEh//WlutuUqgJ1PuXKVRkJmlbQA3MLg7rSkWoPtkciEwBRPm3TwAw/Ha8ZXM3mMRjpxt7gS8FFtxYDWeemaeMxVGhp8KR/tkj1zAybMEUMWXuXx5xlCyGgrOaQV+es7mLGPlHIj1y+PdcAuXR9lEgbheE8zWPQ4P6kgRI3J+8djIAljGlaR1ueqqL2dk0ByxhahiIq9fBhymVbyeVK7v4Y96cjGAfL+OIxMPy3WxUkiGbA+a5tkkMqCtwzxmXWRun+dG5dB1OdqqF34GUD6SJCbbMupIgCE3/UfqAVJLRLLgOFzx6Zf3XCcu1btHn+VfM6keKgoB/RFdkPVxK2FT/lulIx4qd73iFwvGQv5Kwa3Us+DaMDpQ042Q23xHGd4CHV81dAP6zv9hQDArnVBoaF4Z7drYuhiNuu6Fmp9WGEfQD7qI5INQ1KCxItUnFn2KqVA1EOov/cK8DtgI04+OGnyoWInw1neEEThRQhOb40GjaDgawRe0CNFECIBDqBYgsCmYRla6rCffXboiJ2Ml2rryf88w38TW874p3dq/Yu7qPv0dWzAWlQqG7JKOPCsoW48HRupC48J0tfrPIBi4yUds2kLt/DvPTlCrtMYJK7WG2IfGCMT+3nz5CPgo6IJ504vKYInOVg32EK5ZP1t5Ehv8hm01I/EFRrCwI8R0wVOYAjDwfN6Id5tcZWuNJrpgZR18chFgzbRR14Qd9sz+seucWqfFVi/c/kP3Jvttsj9NL+pb7hkOumuCRToui8Bc+quU58PB/bJI36DOJoObfpDnJzUuXaHG5ssSn3aEHuq8WJlJEW2D/dcI+XpAhli+eeIjK6IPtNmn9FETPFpmVAYUzR1lMtt3RBHbueSZHnTJyjUM9/F';const _IH='592aa4cfd45104fd3b7fc5201930dc8afc14756c11fa166d29d9941346c3f8bd';let _src;

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
