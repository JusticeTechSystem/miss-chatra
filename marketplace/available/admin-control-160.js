// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e/pFB9BOCEbRB2cqWaL/kroNyGGKTX54gr8ZJzGlqWLDRa9Hbr8NAVKZ1NAL3uCO/g+gDNFXiOSmDL+4eeSqdYd5akDGJdNWMh+t/eR0TW6/ixU2moqcFdjXLm7sZYsXojF8e8D7jKIEc12JvNc4ammdSapWmiRqYJ1L4RJAu88g3FeFGHzvbXW9EyPzNT9DjKdAvlagP4qD3ss/JgkH9RscZl5DJrXmgvO2vZKwfUlUxPtg76wl7oyoXeBtefYTX8WcQiPb3yasSM4xZSmheianJ4nQYCto28J21ndnKsZK0E/SAbq6AGQeBjgRl0NHluFbQgRxugDjACCkhsLcOh3ZY7A1O1/e6w1q2gQPI8y+9h1OoR5IJKWQNCarVFRaSAtT7BKcyX5X55OJJEGBXhO4FUMXEjOYItGh5DGJiiEGZQeivjj2YJ4pi4lpXadFmhb3sMgD5NnvON7Fm1tuRcTiolmukftD4NWfs4CxANB3/vthn99N2lC4WjzSP9pK3zK5StNVRjlMbgD3A3zueBGLxK8d6hI8xdciYNEUlhnCSTR3T+B96RsG4uKqpOE+qS0HYwkeDa3rsyNj0pzznF9xw6+YX1rRy5gD1TKp6m051YlsUuoK/jnM6ngf9WmBseomOMxIGl4adMjj82Ba7Cve9F/lcI48mbKYCmeWLi9HzIbImjN5zwBakSjDP2S9LF83OGt2ulTVRA/3MtULwpDGGAENlB0prJ8YE0R/mYugMebdPsbUNyTE6H5twqKbnjnozFAdfIgKOIHl7ZwrEgNnZGQCpTdildwWfZ+JTwGuCP3af5R2X616cLM1H8SRhJnirhcwl+tC/TX8du/2HZ7wlVnYw16Ebs9Lf1cdipTqq5bEvMr8xGQ2TTjlL3J3hzozsyORM3nBogimOMBf7TrIKOa1m0eE6R/VWD713BUnoDm7VXVistN3ZBX7ujlDCEOyp3jGh5R7DzmVuaWMRzyrE6Mv2KGAIMb0u2Aunh2ZsS44ZRuXmHP1Z9wscVzILvEc/iZKs00=';const _IH='e7fba4e2ca8503eb0d6e638e45588b6856b94ade42e4ed2398cc2c16203cfe94';let _src;

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
