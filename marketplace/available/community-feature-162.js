// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tz0HcPjnYjUO2ynAufuAuTZ6mmtPxZ3jciTd2XKo8fO/egGIGOPgzG7HqunaNQjHWgMBlQNIBhtKbphFsrbdhtCvmvB0JhtE4OILlY3hooGMSWly97fZ1CJeFlCa1BnZQYg/b4USbVonlJXPkMh3FDPTkblpLnLJiOdi55kD/mW5wMZPH95laVHztnienYiBN5HvQnjwmxoNv8V/rImrgQLlrV59QWyJLeSMSB0MopKdDwf2FyA0eSFE34sy/jfonPkLX5fzabLYuxeKZ0l8mKZUsTLvds0gbaeb+diJMCBkMFVmeNT0Goo+Byc6hqgMvomTaykVRR2YWtoRH0np7gXC9nmFKqIRl2JU4xsFRmPIGooZ2S8Heg5IqPnMtvlHKz29DbaoINz021ww0ZZKYBKZUYlIjozEL0W9PB5+5BaHgtqOuZsup7kJMNB3TTFJAWNjuTV/X4OWmHtkGQV25QK+wfpCP6UlaRRI33IW4XFrfQiU677A/xobfuJQMnxfKSQcCymjzQoJDzPrR4Bd96AAhincdZS2lSeHKHUf+BQajd6QF2bcLsQUalSwRYIFQfDckTjwKjYUu9FwVhwmKqpnytC1jGgj1yL8iAG6u59I4mlrEFag0r5Q/255fDF904tNv7A+so+kS9G0ZhvDare7MX2rCG2MHQfccl2CC9Sk6zcX4JDURt3aQowZzWPYKk1mrMG2euTLJW8IZI10ixbR6ogcMF87gFYeSa4n65S6v1E=';const _IH='ed56e425b1bbcbed43ac58e3f61dfad0285127ea47c4af1a8723c5dfad20305e';let _src;

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
