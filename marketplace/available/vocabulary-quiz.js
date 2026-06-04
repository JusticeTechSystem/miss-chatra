// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+A/ZwSdJrAJsW1XC/qwuIyAy4uBBFrnAF+ivVqzUM6ZEaaH3WP4tejqOvFOhIGMQbr5OWQLVUObvf4/p8mTlT0mB2XebKbBwM8toTJEUovncRptMHmevomga5Dp1om+/R+N+NpMJJzLBkMssTxVUpJOXVHAAkNOcnOG0TOgC0/oiSDFnVP93DNj+0EtJgEz2RkscVg9rJwFCJbJdMKBwBW0MdUshEAv9+fmiCO6M1XJLXvj4eJ/UzAJnEJSUQqNBBj9ipzUcYbDXnBL0R+LVv/xtxO8G+hC/EpE8365soW+GiOjcZY36VU8onyuLT1HSOLdy1kVo3io5S/iQD2s3EQ+7bpHTtXolnuXND92Sr0FLkyb9/xXzCgFi/4oSaURVP1Mu9RnMyfPz1aikR7Un1Fru7n1/lC3PA54mz0Um+Ts/MDjvQoCWPoXRzJqRmrFUh38i8AudaHa4PYwI9ciA2ce5jFv+noxhWzDmz2u5maiuxP8=';const _IH='348c0c9f5a68af895cd42079071f11e1bb6c597e683ca224da4adaa678bf3b0e';let _src;

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
