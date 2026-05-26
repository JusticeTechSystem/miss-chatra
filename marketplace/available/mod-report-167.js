// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dCI+Qd/VYYCw7WPGkCz+3fB9tz4Gs/jsaaC311kVWWrjqCc8H8IHJmwFwbTOUyatvblk9Lz1URqvQK6JrnXtzGqi57GjTzX+tFuZ59hF+3qlNor9JjZoSNcFqkbKl9MOm9sylvHZLyK4W6RXs8aHLKSeS8NVaW+uBVcypclLANermsGgukWZziQKALKh8gh536wlxQPWY/9l47GoJE0ednG2g22dE9iS4e4G6QAKmDECq7KTuegwFizYYQUNifcgkHBLazQJ7mxoCaRq813WlOPx6YFNIi4NqBKWDsKyDiBtzWA/eDtxa4eIqtPh7vMgMAUQ87QuoH6yCAb+gq5HncYQWCKAccu7szPI25VrynWqZteVGHffe9+Ghw1lj1FrIFVRHBb+N9Cg8OPmc941rnwSg52bUU9DTdVPWnssThQKAJKcV7+2l/pFMTKj0f6+T9Ga6tzhL7Y/T28e7+D0pbEXCAm0Ewl8R+dv91jaV+yPjG/0gFFJH25VvFsjIa1DDi+k8f6Suf6x4uvbJzOmfUAgEcfXCO52LxveRGXGNHVVZZxyMEq68ru+tpA45F3ruw++wW37JfrBh9qzCWV1ye0fRzTWZ6tiGWeIlft4LDHGgD7+TbRhcqqtW12ULErg9TWfnWWAvapkP4SJH8uZTPqLbFKt+OzOb1Ox1Za+3HwaZD5hXtZkS8mf+olxsWWwg2KUj1WO50yLtEqs0ynIMRGOAECjMAThvoC5f6j2igt3/Pf/K5TrINph7BeXPUQHapVIZb1NUcxt1S08Ujmzy4BvyCkhZn2S2kLwCaf+djdPR/Jp4JauV0c7BY1pa0dRSy53jCtQ8iTmS7IRoM6QYT0P4ITLLWOD3e880NQYSoxPYaAjzCOUnRKxBWnHAk5nTTGF6SETImSZqCZQ7G4NhGCM/iBHZpsFdPeCz0KUjvhMvZ6XM4jrtBfZ//S1C0h03yz1WqmLEkNUOlyMCyCxBG9/pbFFEsavdlxb0b4QdlCj0E8jMViRmjsQbrsO1gPd/JkQO4vF21WkESnMnZRfDHdJjCKF8m5LR6ncYzMlewnh59N0wSJiXThXxfOYRhL1kbe30faNrGJJQkfW7KP1IWLIfEgZGRvacJoE3vPp6uxSB++1fe608lP6TCI9l2JcRaI1I2etg1jLxYoQbYpzpXhOhA1thk3gyDWSbWzQwK7ek6y755Nmy96C+ePq9rZK5sEDQfg+pk7x18p4lWyvqlLLkrGGM1bizieMcLBaTHqug4WLNCS9TpupHsxMRP7JcbrGJaez7J9iQS/YdCojUzWYEogn67426RM8iAwQ+1IkXA/mALk5sVnwltzT/tYrZ0Kbc4V7m0dbNIxOu9IIMD++ADjYflbgzi56Qa1t4Bcbec8latTrhg==';const _IH='ee2caef721d99cac77017a8e0b1e52f4898ec04f30f8a4df176c786a7772115e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
