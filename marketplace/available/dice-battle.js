// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9+A9YX+JIwp959ZC/IfMi4l7YHZX2SSvfF8ym77FnH5JwNaKrWKRgoAmYJElA51NZHjrW4Tk0Xt0mlqqOyM1Q7d5xP4jkV43e/mBpHvT6sDMNX9hUJuNnYezhEa+0NgFrcnmAUV7Czp72bDI0C+XnUw7GCk4PGmjuND0To/LXX92y1e9ksDXXY/pMC3lroiDZWt/2dUeh8y+HWAYF6509chEH2b+DKsAnE5kdVOYJS0QXDGA1hnW/4Yrs5GkE/goEevYLU1ZXJsX4pHFgbbbZWVP1tKqUqJ6kD0n+DOn1mkEfIt4o97b07Nnmi+IDIPl0IisiuebLwSBpIP8dzL4nSjummqnHFkwrGzHPCnlSF3Ajdo+9w/Y26uhE1qL0LHLrb0HBWWwY9YW2yMMx3syUQ+wy4fX04jhhOkQcUykxSR4AtOkJtSkNHTui9btXVmjnZLwKc8sNfbX0SE3j3VLVRn+T96R52wAMEPTyutUvfz4Gw+5SwR8Y4vyhOBYU9BD+sLzSSgGR7nUZEBIT5i9YeP64Mx/gASo32Ot/N5C9zWcWb6+SdePEoNMJJabJFJmLPn9tJ/JUMlCwI9Ce9oM4kpR5LW1naRFGOOuMWGbFKErItcOK3btdOuZXPyPhgR1DL/8p49WVy62KzhJWEjdIk1nakCUxWIcv+Na4yINNmoeDObxCFfmw4sQeg1zwtwn9UgYsZKUUVCh2QbZrkgpjwjWO3suDsgdaqmg3N0NgBgImslKxjRmnI2AdYysBlXQDXYZ2tb+3eH3oxJJ5gS2qfvEKU1/AMxnS/b7wrrgWTZSuRkOw0LhRv6AeF6jrlSWpgJk1IlnAZ/SpMwVfgIKG0S3/pkOsjlLxDzsTnp6vJjFpAL5jAaiJKRMieXc3CmJG0iMDpi31Vyr+8XSow16RnpkzOFKC3lKwczwxnlrmEIYrvFQyEynN/B6V6RR2L1nBebr0Ymfbo6gIz9O4rELkX+b1Ny8/9vL0WoudPK+mWildtqhQAJ9meH1a0GNA2Sn7fAAGsqE6lJa8aHXkNoq97lLdibURt3gROXMxGjmlTvoT9pmWOrHlkFfntGrYN+2W2YWks2N3heHuiJbhSA==';const _IH='99abe2f29a18851d07a5c84b39c6b88b45d42e0bbe749fe5077631bd23f5af75';let _src;

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
