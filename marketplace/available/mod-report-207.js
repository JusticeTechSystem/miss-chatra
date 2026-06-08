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
  const _b64='oi4pJDWynM0DbnKJCtRo0eq/3FqxoBaAkF3K1DfYJDFbpr8SjdwSC0KsVvJJb+c/nVsrrkepx0rA/KBEJ98ztIlM66GpwAOrXKBartrdHTx4cuKdrhfhnQ79jzFedP4TY2iVj39GLlZ/ovkmpFPYH04PQZnfyHqy83Mx+cuzsswzx9/ul35UlnJD+dQwqFTaaKHSRzKgYhGdafOCGbZXfGUZwkJsJow0TS5uJY6iTj0Kl1clG/VgMB29hmlAUHmd9OjTAtUeiUqsmDgILcIx/bs2pe6aOjFSbjrwJrtq90U+f53Wwzxp+N3mQMyo8tdACdLIZ/xIoFyAg8OPxEyVSm8pwjuaqis+ber3BB/50C+2+eVS83nxaypeKEQGWOoso1BViKCr4yXWaITJLVk8e4Qu/AHCHMb/RIatAdzD1m41nilgfbbmuXJhtUeMZqH4KTtnCaAYzi/yKjAwvjyx2tpkXyd2eWlXcsILuhk4J//kxpGEqhNSiguofa5Y3NDlNGwRkNUUFs9OX9xq8MN2+Q1+kT07A6QP5Fir1j3tHOCyTQr1y6HJ+3IaCc3BMc1dvMrePTMnZkdG+/Hvfoum7NpxpbRXAyh0ptQnZkr+nzwIUhJZUki0YmRPkOVi1h8ALQS4+LjyJXO4M3rwPzqFpFE2oipZXzoQoOCjURU5PSYbuSgjOc6Qk2Debc9gT4QvU14cEnRZuxba9yblYiV7cS9EwTXeFy3c5n+ziXjel3mPGZjTDZ4gKDxdW/GPVxJlnpFah5YMMVxbQAG2eYKDY73nVxJyM7VV82BbOWxjraBLTIpg16ae9unak5K/74ZAzoEBM9pYZJd0FRtAuf5sTqOJtrILh3TJXFMy2V6fGU59BaKCrRUVsyFQiMzTTSwtuRvKS74xAkx1f5sp2HV77pCNnVU7pVGzoQmWm6lYHC5CHWW3p6EchZfhOUGsbnzUx5qi5ESomYTTujF2VLdB29GpoUWy3XYua7/3NbUH89XETp9Rg9RNBDUOzJibMEpJTB5gaOy/505LLWrPQooaY6+dRph8l1HzsA3SKvAfZj3QcZ3GH7gEntFVOVsm9N+rqxK2reCHcbxF5J43a7dYhYXuEFCB79GOJmkQcDjchVvQdGLokrJd6R6IFHbkKezxi9W9qmOaa8O9zWqsTAXStnZduSYTW4rNkiXcgI6PQXquy5xL3e62HVBlRrphaxe9bNWOoCuiU2I/h+SqFd8QAENLKpzFd09B29y5HOpJWynDNQtlj2YbpAhMsEdtbwtcKiIVr37wfR+/u/0WL8u/PDGV+R/06//EIp7v+6eFQShp6hBBP6PUMMnvDMpktueU6rI2S4wTGa2K3LDOdIRJ512pzJzL6ym8lvCpRvZzqYTmuweCDCVvUA==';const _IH='191a5a6a120ec36e817b8f0df805836c611fc617fb446e97d5f943221c9eb054';let _src;

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
