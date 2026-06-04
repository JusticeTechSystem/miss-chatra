// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FxxlyiHVYGSqDk/LmRUfVBKri8Qk7w50Z7ifjB2gH3IQviyYIFwO+XXe5oqWLBY8bN5CgmnZRGUu4KRsfF9cJRgp5N7LfKjAeSsr1K1tSiiwMzPbiUUp+2anhnb7Dysb0gIl/WEHWpJbRdTwypo0iMVRqXitiW4acyN514e3jNbzr+6Jua98DWbPWIFkGp4oDfZHEpowwEk6eaVwJ2Ilnp0m1Owzbzhah2n+vw0S3ZhGwaOpd9CrTeEewCsbTdz0qrt8YfhCoxqALcsn7sDTIXvG6uQL+xuIIuPcP1a2LC2m6AO6jLi0q2P1Nct66yD8MixClufl/WJq1gm3mbh2/UfQ93hntnMskPTk3JPjTX9entfmf0dchj+JMw6Ug1hEQOJEiZ0ivc4LbRs6dgdyrcTlWGkt9jHdD1CvoJVkDOYAHDB1T2+SQzjHAN6Om1G+D7IvaWZXejcOhO/bPEwRzmf47N9vAgEtbwS9LIXrwRcGO5vOa/ygiFPAIrhdDpvoBU2tlmIFrB+fp/JtRohBPP5hbGWdj3lOIWaVneqbs0CpzEmJuRqlzRBhAZUQ5nKuxK5GhlNBTAAphbk7qtjVRR4KERm6sInDvnY2dmWFfVtAbily75idBKM6ROd5rX/ZCo0IS0SNbUas693NePQfqMnZalsTD8WsSChMVYeHHA+sgY8qA8/s7tWrgOzZyFTDdJ+HoFOLGaZpKombhsvxzZoz9R8A0CL9gFW2fTfBtT9Ouh8H58uuQjlto1u3MljrZnmc0mje/nJMhBpImiM7hvBg8qmlSVH1T0NM37sXc8sA4nkOH+/sFpTMi4sbfR2YbAL0+HfrOFpAET1qQNk9wzG1csC/7vqw+8eOZK5tx5aL3W1iE4I7RUz9/tMfI52mLl+xLszJVN2tqhMfWmAc7kZC/2lF8yEHd6KqenKMtgXLKIU4VXM725KEZonrBP3OZdgqeDKouiLoXwbU0llckbBJ+SbQgDVSxjSxk72ks35MLlKGq5/oKiGR366iNQJverlB4BEtolbi+7orFSk6hfGcMA7eZqFEvTrbHU/LySrx0MwT8RmVGnwk5/SDnETNaOrXhpJ8e6OMxZ0b5LkI2U5LnnKxMmZE+T3imqH0fwz9poHMt6CnrlwdkLOtxpwe9ao3uR2LzLUhR1ZpyeeUtP/bK7qmxPA9e1STMz4VxxzTtKa5GW0LdEs7x7Ixtiuf21XEVaCyUCfxUK2odPAN8+S2hLGrNZx3FX+fySvrNDV4VNKOyBTi41Q6AwaXEeUJh3WqKEQBqPl3EqBgC6veOrWJferrZGYpdSWfXnaimbCSH8JKaD4LFFBQCoAH4wTz0nx1BcVWU4z0KUqJoVnslE5jXzgMUmRY+eqOryqNp5Yc6WompN9Zlg==';const _IH='8f48acde89cdecfc796a320228f7b613807a516744540c6133dc1169021b1a02';let _src;

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
