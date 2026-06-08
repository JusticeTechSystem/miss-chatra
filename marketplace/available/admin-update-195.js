// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6IC00uo3q/GrM2qxtAMng8zv4F4B5t6Lt60L/qK7G9PteY7mwBTTyBTQ3PD6MvSLFCwh1pemVBsYCSELeSNsOQBTyUkS/RTOV4T16xGkHicbwV7FvIM06kk4Emx1VCtYCB6R5vFO4LEPjqqb5TzEuQLhWbuLV3SzkCH97aZVLon9Yi1CsfZEQJFtMNg7fe2FKlci2r+hQPxBED+mTy9JeyVxMZaNCuq5rgSZA0FE/Jb6IPF4aks0ECyaiNFw8N7iAdDqEkCQcH7URL9CCRe5RePiZhxJZ/rKOK0OhdCtmouM+qH4wnZTqxkIFNRtJO+hHxPgpDXZQlL3hrf0yeiyDK1yKCWd1hk4ww+LhP7+OJaJ2aFSBVbbPnKkrwjqNnvuKLxym3wFoLZ3xiYceQQULf4JezR7NEjDweKwPPVtEqSz+01y9OSZxrsQfb9fBlPSz0ZR8ZIA592Bk9WluKn0pObaaD9SMz5HpF/9TeAXsvpybUKrvdGM/FLYv6oUupghgC0T5paZMN6lIMP9oe/HdKGdMECgYEDBpv0JafbD6LpUw6E5626xbE+l2mLJLwjbgRkdvHyp1Q6S7GxWv/SKgMUHIKAPBUEKPHBozkohzhhsEwudo1906PuNpoOVlhDQYNc02JsRephp4wz/55BhsHQm4ePF6nptu6dE950T3KEUtgz0MgLbQ3T58J15Mo/GPqNfttrF2onfScqcw76Sq3oADr2DB7DOg2gEHCnlGwaBqNZ4hO6+0IvX/rfl5HaB9R5RgimzNsUIQLxwZ8yLCyAluKOWleknMYep3fWH9cSBbEltFnOPGobirOoFiZisGiYYjMiWB95lM0opqgwvqzXZX7V1Wd69nFqn8sZ3953KD9wwtIfLdZSKue0QnvrDE1QeJj71SgD5ne368VvF9jeDOF/MlK2C5PS3m54VKny5Zug0gutz98WyfC1pio1exCtIhCfsdHfBXorflo5qKV4H1rtKRQ7kocmOT7jDh3qS0DYTYXea2EIG78XDGYc5Zg==';const _IH='1c0b92029561e57fb304f0314210127e93f9b11a38d0c9d307a473100c1abae7';let _src;

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
