// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTMVj5BAgMbNuNfPUZE6yE3XDkXZxqYPohN9HXrACsQbmNfFNNQIql9Xz6LdzYEqzq5fOKDHX1NDxAhAX/VhWdqQXk26CzwsRrgDmhd3o05208Q9alhSaxlYwKDv3SxCsVs9ks6aBFCs8IQfoLvSPrDAYQsXvx60rRITkEgysbvVvN214hZIKwLhDrHTGnsuh2fPwNW35cGhZJJLd4KrGxZ6jSN/hJQGvfRhxZP69OAyEJ4czA65/cQdAxL+e/JUUyhd9cYkAj2mKN18fGfSaet2IGSLW535YptFUaa9MSwxyF01N8ErvzJuZKUuWVFFi/RwQWxN90k/ujUah2Lt7nptbEpYnAUSBA429tiNg8RJpYI4JnhF6pKlitjM6psxlaADAhlToEpSPA12r5knds4a1B1/3Pk8gBb51T/TTtMtHOIl/0yygCoxZNT3mbP1USvtChvPvwXfEmoEnFPJsspDsu650dgsreiLQ5EYfzeZb/NznPBpbk1GXqIPMgutNVxaW0GgL/RVN3xsNNRBSJaAkMwouobk2NZgYk0hov+iqGHXjbkyLxzjAH7J63dbjxCfFJiHf0JEq5MDpSBoC3OaC0k8T+hMpwdLrwj6yOGoK10e3Jdzfm/QtETCNuAMFilKW+U1oUkVHm7Jh6+D4w56NSme+4Eh1kw8/mF9caMBHfDsncM+4oY1ubevl5hbskr/USiPJ9qbzQaC/1WXuEcQtCpBDmFv0oTYH04k1FdhoaVP3rkm4WwD92cpwsAQwLaECqIPqBOllhUEnbkYFSObcROSxhwkrzqlbcdFOF/TJPhwZhB1ddBJOBSh9qeUDd5mNXXoBurj7TPGaDjS1tmJUH91pK0fevIEGZ75b8KG9n6sHKBCnGlNpjTyk+PjReNz9SguBBPdr7GQISSCwTGlww+2UYFQVcsa13P8kcq5OK6JqLQjpOBMOf2KCeSyWaluVXu7aRGg6rXOdGDds9eZARiWAzSIVP7fEegrVntXvDYEJJR0/2sgXqJtxfoZhjKyWmtUkscBTxbmUYEYh47wTK5xVhjhU/4MWC70iYOQY6dK8v0dBf8HggN0H00FRR4S19WTmpFau9s90okDw==';const _IH='28cd38ff8d0f19da066f70e53aebe9623a2c3cf2a2e8489ee1d703ec27ee9fc7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
