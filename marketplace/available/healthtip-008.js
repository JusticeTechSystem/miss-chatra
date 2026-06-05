// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hJL5gCIzcE/n7YSsXhmmgPwUZS1w1p53wpkL9CIZmO5wTh4qtmXvye+GD1cBt8E1IZGbqB46+ZgAl3NtMnNKowVCMAD9+LYOw21BmJJyW0y6SM0DmnIpQ4mC/tfll6L0pQaZyns1JfcJVBtNlx2wHwYK5ttawM96XVvsJcd9vWsMtbfN/SBvD9sUg4Ct68NQbbUtGrqDnkQMndH288EcHaLEqaT5EAbiolguVPCiW+KkgCmPGYBtksQkF/omaZtrg4zL2VCZchzcfb2U0j3qN5ah9fUqxAWRXskn3HEij1CxTHe6vyjgMYzqHG9M+L19WvDNzGfaMs50IBSRwiL3Q+TlBKjulGkuz6MeVr7bfIcZTN7JKzQQYWw+d/c+8hMWwmWuXSK75QluefpWW+42egYGegjYSNLj7UIfQaNvBBwfv1atSjz78Rw1vcmSYHkR4PAhvkvG3YdxL9JgmRYR9hHt89GR0po1yJxneMPQkWU8tKgunW1gV0O+ZGjkxt2ruYWBaKQgEqR0KcHZrvHRObrHQx/ouMaFchy5TD2S00p912JSbFHiiUoWgoSR3csYFiZOZgC452WUFXcD0HMPoycAkLhT8JLeEq73Rf9aBl2pUsfjT4MKqSrgkToyAbk8R5xSY+Ub+aPYaPUzJnDXAgjl0NVTOHdjr66Sfilhforcak6joOpItSmdtOCm65wiJtO6NZi165+yCLLt51MMxj0E4Zn5w0Ew54dWbieG/QvA7wZV7bMHZSAVUMZiPli13Cnb/8ZsSakETbUFMkvZzGRN6eSqOaa1e+8Eftd3RwAh0DMl4HUD4TUesVy7pFeZklSWA77otFH0LbeOT1/J5VRAVVx5RuQc6rH+16AUVGqPwUiRkFn0cGZ3zAytQZPss2QGhDXYZcBhZf/nnmoWsJmG63eC0S7tyantDac1WueV1UARpF9f9Q==';const _IH='4ce0fd9407761a83a97bca5247585348088b66301330704c263c7229f297c158';let _src;

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
