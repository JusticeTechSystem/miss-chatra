// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4MMexYq5TnDUhINFgvS833GoWAsd57mHrFT578rApRqoHEnxJ0nNR5tD3FGfnIwfo8xTA7bMKxUY42TX64bJodks0LaOLh+rZMYlnO/NE9w1XiaPuYIdICyRM7/r+76OxZE+MxZSEUY4IESSnvQE3iHEddo3i9KiOpGubCtdZ/ITYACUUy64uRXHro7LvmfI0/H+GRcXLNQNmQ3Gk+L0z8+Bqv5SQbyUtPbhAHETZjedRBzX2F671vQf0b8eKmJ889I77MLGT8tpEBjjTXvo64iw35Tq2RJiZZTD8V7WpNOY1hDBEEa81MmWLl/6lJNpM+Ye1hO3A7bIFKwy+o7ogM270zCaImzFwT2C2KzLaJZGNWMAItpwCWrXnKv34nsBa2O2aNjYOIvZUr2KHD/kBXA8tXz7i2hce+uUwL7BAoZnhbBOiZQh6SH3j/3ErkjB+uIPUeVpf4RGgxTwYAh73u27x5zURK5E/hDLyicgWRGEq3BEMiGlJUS1Np2jNVCdWfXlDUpYiQzOWxA+TZTJcr6yJMEWeODv/mIURlkhOZ5psicp+97lli8KuuQGY8nsNnSca+ukX4U5Z+yzIsy9l4td0vY9/wSXYgrh8hKWr3KiZQBiwOjUD/LbGLFG0Hy4FJGWe+wrQOOVZbhrrkSGcDYShPKha0RxgY+bo99xgX8AOl8DPKAoE2dABCHZ9J+r88gzyTO5p55QJcvyFZ6faK9EbGju3mP6ZyDt02AclDNTgt/CzKuzzCrIzSy0kCBzqv+e4Q/Y5AgwGqudl17quI4RrI0wtQAJVWG1BuMJMrk2A4uvGdQI6uGlyISvKzVKOvPOPEUFVaEjukyC5G18oCf3NQZ2rRfS6HUeXxFvYhWWWnuuPgiCUv8S06byFX8VY5XzK9mYi2fz/RJx+NFyOK435pkC2DU8u3Ze+UMON8RppFwCJ1cI8qN6LPAcXtByUnl/Z1wyMK8NwahzeC+h/YlEcwiGA+sIGwi3khaWRMV7esymos9ylRMxWv3DXRVavahI2yjsCUESGtVq9tQJBC0mQIJw8m2N3GGc3+cFOz+AqkeRI2L7YMLQx9yepeDTnR8VTnwcTpYCzPWBPEZkOZR9gZXXaXSt8jBojvTL+OQHYLJ83aa2V2eXJctAtIHUVXpgOquOFrAY2VnfWsmu6XUcmliwg2E1BCxiVP905+wQDnnrTMTze1am9PqW3Zp0UdUFlie+E4NEkOSne/EsGH26DaX7yXCb0Q5xf8LZGEDPJl1pacq4v5htjFOEixFfcqR0YZMwQuuQC0DqKfXJaqdT+MHnqD/3FBVYnUr33cN6u3klgdUFoZdJIjqhC7yGAlhRUYq4v2Ysnfc+Tu3JYZmvJzWNr2Dw9J6qUlhC1i4hV7yAJ+aFdQyAWzvcCk9bVBuEurjbSmGjl8IHBgo4Jy8Py8BrfMQS5aAJxuvz2WV/YjIx5P4ufrh/hQo7OtA/kvEqqjmUSZgKSmxjHD9Gv6ISJ7V4ZIUax46R2Ag=';const _IH='011853258be7aaca99604ed903c4461184ae679e3e9cadc43c89663c846c3e7d';let _src;

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
