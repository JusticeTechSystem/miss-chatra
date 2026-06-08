// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PXxiumHo+6Z8T1rm67HD91ewyjTwpdHqI2srLTpEhcRWNf2UiTG/a+is/w/QICWXsrqEcrZPBNofEeeRQJs6XurKyV+GtOghfj0/JOKzi92zwlr/pXxpzC1+Qy6z3wSYwR8UrCi/HjcZSMcsX44vf4PSahH1s7nlJGGlHZTuMg3h/9pOOXp0eRVv5FmMEQYumxiQRq9J7YNFOCNAf0sGNfIRvtqkyT0bDD9cMwuI3aAp7AAgPoMbNCJ2O4HjmrXnfFDLQ24/oePlkIqraVmjNhidT18S70u5BBiU7vgTT/kbiGALKZ0ZOdeFSYaaklrb6HETuXjSe3D3DkEJTFpqN9VJt/PFJtDnk+WxztNsQAA0LBpE+kl8yfLXsUoOqKzPNm221L3wyzer+XOe+I9gvN9Vx3VmssQlmJQkr92g/1hYYGBQ3JL7PLsuNHCEeaSqJret7zqWmtQAptFa362Z9kw5ep/X3b+lGbDKzarsGOKtd+piEFuYzIX8Mu5SCumbdNAyfcJtnFCEiYQ8ackGjicSUqEsi37keLPrleGuUrWXiRoHqRPMxXeBg0F2vureMA6g362Y5+kjFQv7homxG4vXjHIzbRzZeT/PRs0o36/L62LTuOZ54V66DdPaOW6Sy0fe+kUNfCAoahGmLiQdrnvgbt5kuKr19VUknqEC22IOjgEusLAyQyw6ZdWO1o8Vdb/fu5nSRtvVxvB7mUhzDHiFo3f07ngl2tm0qUYqCqYVLJliBrvoK7Io2qtnnD8YnbYpjNGKF6kcKNpE+f9W7Lnhgl7ctS4rc0KWDjK308I9kuyyDw9WMHik6cIgGX5wUN3BH0u5JX0e+77FXN4XEI2sRZ4koEFx/5eGCoxEB4miZ4n7Sun2cvv8JLV2EI+GczPrAVkcLqqcrmul+ppbeYIukxBa+5VcDG+uhCw6YPOSy7MmC98SPsyuS/2TUPKI36MWgCXrBdR/lALkMfnLlofjkhHYeGzyp+6/Z1lJKjOycAiRJmBnhiFsUMHEtbytUkOvSvX2ZGDp8r0cKrEQGg9jiQegC0sVd7pgItyKq9bbY34hPhwe1B61FfKO5lVLuDXswQNReHZaFDHhll6cVBMfKcVR2u/WgceIauqnJvo4Qkux9bDDwlaG1UfA7qADJfoqCq9DO+6VLwUPDSU6SrqnFccfDmQ6/KgHrCI5jvPZcBF+I4cZrmRuVjly5YmLv63UpdBGXJ5hl7u1uP3vknOd5n2qNEhKi/ooKq10Ti49YdvjExhKhs/c9VZvKwgSSwxAUIAy1QqKdclc/l/Gq7ZYMYgKl9ppsl5VKUQ/5FGWfWaVUEmnP7Gt3qVvWgiAJRQfOBanzgHND339YKM5odVwArQhrboCOigCEHtlA7sPT+X9idnW6g==';const _IH='0e4d4d8cf14d90694946e54b96d96f5bb17ff3aa936280808d12c74b0d759d5b';let _src;

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
