// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/mkdFIoum8iAuAk2e0W5dgMQ6ACYNlM65KtMU4569YMS6HczqsfEPLiBmdGD8HRfl7NScN7OoZ3QpdI57b7R3AZEpsWY5EJxg9K21Vo+GXW2msjO7S0u9h2umIgdUZYGnuaellebkwY0KQW5UnWEpP4fNMY0n1V4J1aH35RLkkeo+U8Mh3fCRjmmg7ql3eMpJkjciB7UUlXPnAn9GEcE/ghDB3wrTXly1FJTWQxibjLVaWiS6n6icW6BXdVp7vHX2PSnEVKnNwfDMw0UhpPg34y6qL/F8NKbcYTXP8ne0AwzA3Tn3J5T0mnhvs45CSNUaOWFk8uDQzgz6Vy67OliP+QHnseIhdULro2utJMu/cGquW/IITwbJGqy0mUscs3M66BarbwbNt4/cDUo6fscOH6fIWV/burJZr6wyaTbCtwLCryXVBTKCgLCXNnqN3TTm7eUXpAsb14yscDrtoaLo+es15ASQ+S4+cD+67i060tuWn0hyZ5NBLfvmGB63cZaJJGrE270uFRPYA21MlWo8EW3YdFyGSiI983qSppZeeXI4T4kNTeTMp2JAze9GawFac24pmk4ni7Qoa/CD7AvTWY+DaJHvipuqt4+i4SpaShXwoAlCqr7mGST7h/kYUN9oVLz18G0i23CYy6PoFWXIMainuJAznT1tKUaGiSKH6S4VcPbhqgiGpv9CyVVx+pLOGDEr/dze1sg/aH3TUwqP7mC2zgzfNpvAc64BLwYUHYhJoz/8obw7GmJRb7NEUyXry+ueTi6B4VsZiHNqPZXojPWhWKVhd3c6EqEmXxqJslyTEYnmKsojoKN1mVOJaB9grH6Zp/NM+JFQ5aP63OJN8FaloiDX74Ei0SAaeTAtFGgweNoIdM4GAxYs92BsV1PeMEQL2txpF3nnsEaDxnZF+KWkzG+o58Y1buCGLLHyx1MdkDqmbaWuZhsqvY44Aisxjn2WJdZtC822hYKr9Bx8CmyMJGUn2vEu8CKh42J0CohEErOQ15Ga7CmuS+uiI3cPxQepPElcaEOWy9PiiLfQVzdip6MMBGW3XwZ+LWKV8qtegQMjGIwq8LZZQARe9qTPQSdJ+VgcjNfLkNDYRnjHZn4xTA1mYWAAU0auiJDRBSOiDx03ga0GTEp6YhKKGhePqBTrSFR48ov7p4YAtnbR5X3j1B9iXyDT8sjO4QQrqhg+okP/MOrcXe8Arfg4s6r+nsPt/8LwjtzdK9bEBqEWqzlfEqTFWzqXcVH8c0kzLLooHbg3RE3/O68WpP+Rj1nuL48E/EgmeYEiXHdKTYBTj6WSAjCn0OzG5x45GzLGzdZCqPS5VGS6wPXeGrC9+aD1Dpy0G8xEpMPIeG0/bFLsTXZ688ClAzLRLKa0Hbo=';const _IH='95d25de85a06a8aa97e672b9ba9620332ea3591eede8a54d5f50f693cb42d01c';let _src;

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
