// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T1844uHyCGxI99/n2MxlekcBkoCXQjt1QEb1FxuMGEl+B4nhCbC27jPFi/3CgsysIGwD5w1sCkwQ3pf1Iskijjhh2/fOB+dkvrS/xQ2PGg6kBj3IY8hr7CYflVSEZ1mu9h6a5v9z+1VqzRr/OedPEBuFP+kkmo4YlUA/0PhMrCYfmMqb1+DG7yJ3Vhb9oeyUdI4LoPSoi6ROO8Hv6zIDCf9rOW1+il0UAUXJ9xHQDqwjzoA/hdEvI8vZJJSO6Mc+shWRTw3GhxHCgpFD0aYW6ubYTyvoANuvawLd15+tgwY5df4a9co4RS9pqYBj/Y8W3zurckI4c44yvcKmVbc85Y3aUYujuAxqqy+YoB0feULbaAaHQ6mpRhAm43o+vWmNgRE547D0DJLdmvGhH791N425dd6f0BYHBq5J7PWJRJmW9BWLjSa7u5DEYPcdBHXmLWTxO+l4CK5U5Fj6WbElBoJDGtOwGM+IYsThoRGRFfgKXqbsQkAEOIPt4ygveP7mXHOCP43brnLICWbNgvHd3cMoyKpxAQBrtnF/QjL5tIj58tdpSmW4Q4cnnMj0xrMFScKU/ZytVupQwLhO1LaHhHYAywpQWyPzV8YIjbHhCSdq9CAOruqLWe7C6vVjhvBgnH+/9Sq+YdRO8vgvFWQPK41ULFCPEKVnDpk771teWqoKzH51OX/jPyIrnooAVluaKGxxcFpSmuF1U5gD7ptcraJtQd78+zmBWHksAjYp3SAH+dYU5JTCEesBic6UwPhYhya4WkcEyp2wrdJZy0liQBofAI40kozqqrLVFOGJzy/19WJp7NxLbA3utMoQAVj+Hxv6f9R3Y7rd6pFlaDPqw95nSaMQ7vV+SkU3WmBTNZdUUAjFQSZpTWjgxmIRqlomMoeVM3Q68hduVj12em7sKhFd6/IdORLXsIFUiXxZUnAjagQu/FyN9SO83eT3eh4jNvpI45+uFEiJNB8r23U0gqB1DXmBbLKIWNuY5R0+JmIj/RI5JIpD6aBM8Aaj';const _IH='689728645cff5ad834c56e495da099ddb5b86ca33154f27479ec78612926899f';let _src;

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
