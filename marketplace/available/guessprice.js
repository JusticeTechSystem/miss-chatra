// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRMYmkIMhMVjMeM9k4uRpUG5BKvB67nKr6meSM443E4XJSCcaB1Re/8/TqCbtXmCiUqzLKoP0TA9Dwnk6SQnPPuTY9XqxZ8BJXHj0vcadx0kZuHtZecMYJeBOEsTKMXQhvN5ulA5mU+Z2uDKB1ClPgSC6XRHtPhZ1TWq0ZmWCaGeToj8TjzzCjgn8aZZ23Y8aTjPvUt0mFoceRnIuUJAtQEmrus6l7PTb1KO7l7g6BxrmD08VquWLcHWNFDw+NLQAFfd6+oWfMfo59s4Fp+j+OD+Mf2yzHKbU51rlNJNTTmyp90pop6kUQndusLEPBSOMWeIcLfN3S9YWUkAozMN1f/Wx59YfTiRsvbSc2sfST7m/g6zXKZflatyU6xnW7jhGcKzTczc5r9974kWHI93gxD7ETlkzpDtXAgDnLAtvgUyxo0T3aL63NzSdQcaFYDY6z1mY3oz8Tto4s6PEYUoava6MBq9q1YJEpoBq/nyD1IDlO8xhDdr5uoWoN2OLoUt3w74bOhK5ig1LysE1pLc373IcREn85P0+1X3kZ7om5aL6FxxdhmMrrmxpi3iz0fl4Kchh3eGrihOsWKpliQQHGQsGOs05LJPpyt8tzbE3TEE0bXfhB/ODVb4ZTM35qekdMiujCb9GwhpsJMpIlhww5wQgVdpTSoVOKLcQBJi4foO98c4kLU0y30at0dYxbWbkvl2/6GgJ63qDjIf85qEDrEYHB9vUB5AY7vzk26FYNaQmbGLPw+fpeaa3WzSzlNUUid+pc02x0bQ6sjqyukEkxCYGVTw9qmzw7pFlngSm9W7VNUmYL9d9PGKRo8kQig4WgsOkA8jmDxAehDchnDJ4KSBpuoLqLwiVAKZXANLFbOUr7syJ6j4bSpuGZkEpVnruN5g1Llgc9WBENHkqB6AQbMDkd1rNAHGSJ5aqvnwEAZ6yn6lG9Ou1GR9uslJhIZefaMNZQi57ADbTrDu14eWEYg/6w4HelVNEgXee1dj0TNZQFqx9zDo6GtS2Pu5pYRg34bcmZPSB4HzPq+Pokt9z3HsZd/1DWsh8h/Ig4qNDwyK2qRRvYAnUswsNVkQnqc7VNxz7nAduSalm2Ja2AxM1rMsnIKCfyH4gkxLw0vxl7jCa1v2mVVHO6aHTDiCjVzrsq9u2FDAwJ7zne2ZTuTUc/brBelc64cLO/4mNtH/Z/V951NYhwDE+ultxfF1rrDRQP90DyWGg=';const _IH='c5c6638a3f9bbcbcb24717210c69104bcb65bf64bc41ebf32039230a97abaa99';let _src;

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
