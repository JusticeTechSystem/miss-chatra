// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rN0Hp2SscIy6oyqXin3HONIxUfK8TZBZdL+qPmxO5ucuPo8GACqYWpUPrPamrGtZ55H5Xo9QapB+MVWCbCJ3orSignXTaGvfU6U+LtILl0vKqGtap3Rz9oGwYixUKgfuQX3oveQZrWc3v0YgbZZBlIFhEqFNFHDAfqTEx8J3KgAMY3eH4kvUpMuk9hYwPiGsjIZt9ryxEvnDCfa+xHoWCbc5elt1SJm70cW2RVmMK4SdmLiWyrMokHqvFQWw5L5Rz/SiASdimr15Xebc3zYhkIt9mKervuR4yip7CBKHiburjVg4C56TkLwYEvNwrubNo992C6/KmUpSZytBy9YniFkr3UPxwkw+xKGAQXBAEoY09D7OIksGM+wv6Qi0IGzrRkKEkKWmCism+bziHgFqae2VXGgMxLwyZiQRxxP0Zb1WsszQBVTaw7aYWMfIHAqFBFPUxKdE3ceWQKifh5w1HhZIwGM4qOKvKTG6fsd+q0rq7SLMNGDKO4u5DCMNT0IXMH1kFLtVtp6lA7Q3xrMmeI+8XARyUAUB3JoD3o5PNMJka2ZVbTfTk7csp4EG3GvFwqvhfI2J4vsvh5uCnNaaQf5C5fw0bkBqP8V9D2VFY09d1W0mIH6HE+4O2mObl2vzwyTtgfyPT66lW4wOC2NST6+MTC6JqmdbUYa7HiOKOMQ1yX/TWYlILpzDJtCQgfGa28rIU7v/1WErF+ApmqIKXkBqiP4pX1I8MZTaEt9CE4ro8KerVZPXWmo7wLWgYkBdNsMcoX00QcqVwTstAvqjMMzEtZ9/ESas8ID8cUDe5LhGb05oBLESwjD+ojaPISqTKa67QWEaK7AC1L+MZj8xp8gNoAMMFvZjTeMohtjF+R29eZRIInFBlkh+tVLBqoOQQB8BFgBndUhn/CJY+dIaODBOum6MeuFN3XAaRIMCxms99vXnoqV9eXjdM/jQIa/WplaSgPMd8hSL8wgta4P6x8bQrG/cNqGC7mDIhc8pac/KvjAPSfmvpD122xE75rWrVV3cEkW/DB19x6+fo9PN1QohiOJdP+O58N6bK9OR8babA9tC41bupvmC2p6CN+e6WbQO7Iu5te6pEYoIAFNXqTz0INci/gFUJ5cAUqc2y2YjTNsv0mAJNbU0YOg3r2/SqApxchsVpaeieICwWynWYD7mLuni7G2iMhE9gT2aWS3U0v9D+nt/1uXFocMHHiS4Zfm9sgThrCAG9NbZXs6e2HhxCmVfwyK11WYSs0hI7kMAY+vEj/Da7Pr/y4aimPVRePtyBdjxmDh5+MYWM2bbm9gXClzaZBsSWQDvU8nHzCVAkZRUZDSjHzq4WxCno9sXEKUqrceck8dGJ5R3pa+CEY4A56TMMy3DIfeWa8muvjDjtj6kIX0hFg==';const _IH='e861a29ad880d2340499a85e5997498d1c696e788dd86838dbe7211ac717290d';let _src;

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
