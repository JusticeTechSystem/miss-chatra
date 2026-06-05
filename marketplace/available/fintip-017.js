// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mv0vZ8eFJsh+i5kJ485H/j/bkOuA+PgB4nDGZYvGtYa49Q8Zv+11Ru/EuZawlMhRIYDSnsTCshL/rrX5FiOaGWsEsopuu3u8PAAQjv7jm7JR0Dt7bZQaut2CtI8fHGGRXEPLDK0IbxiIASmiMOXsbSnMKsty5djAu1Z1QZ4jGKt2u1YEqj5YivJ7lBjFPqGuU1orGfBOR91fje+2y19X8cWybFN/rUvtez8f63JLUhLRfneB3mfb895aDjMw9It6dj0b4r5INhB/5Bqg5a8LprHttMjtprY1ZDPbaKB605wB+K3fo8MNOvAYHW4T/UwLf/gsnHGaXPACyR2+8inENnEj1TXHx2ua/S2A2An0PRlCQy14iABmLpN33D4F/GVXD87BMQEzewRcr2NW/xw8DrePzDAoVDrG2/Al4cJ6yAI6Tav8dErTAnrh3shz1rmJY5RccN8s4RgjryXOpZ4l/POgJ9bdZQncwW3169Fk18aaRGmZKG16wip9L4fqLlPDcovzvXXEmWJRpcRBS6343kOZDGoDVwXrX4F0jv7mjN60e+RONcRo7U+vsxlUa9HhJJl+f2Lj1mLS5SqqcoXsC6nBEHfKWBExFtUORneZ6de4fP2Sx6ShP/XNjPQXVAGcKB9JoUPFwAXtjCBALq3ORbP+Dm4e/x++GXa/aAfDdGewETKfwfCgPhNLBae+YHD+E9W19Not4gFtkK34/rYrGNHUDTa3Lq+trBA/hIkAdwR6w1Wt1uGDcvZ8yT1hogJ8v4iPs+0EQzsJMBE4GBt8IHKn7cZpDctBcMT/tS21ZVLoegz5soQ0V4j2aQC2pj4C1MLGuOCWjOlFr3PMo3ROY2XIT/6yRCLjfsZWCgb+VULjU/WhAcF/9VxMtVG9mrnE6LgsD5aq+i2ph0rvf0FxO0BbXUftBhUQN5A2nDaAfcpaSHiSFTZFkz1F4+u6US1mFFfPHj55mnMi2k4LpXBUHAACA9vsDUxYjeBKvAXUzXQk7Cw1Nf65tExxq478kdSaLvWcVDm/ZKstNd3GT+doF+gXhp7GtG62Ez7BbrR1On+KQQ==';const _IH='df83e92e5732f3174f098de3e77af861bcf0b879148526e9f9ab0c04e6076d8c';let _src;

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
