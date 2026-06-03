// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LOvMtVG/4FYduExl0ZVG6rOmgSxFJZX/H49LTU983da3aWHIMdHOTZKyVWXBjBYsliANwsGvALphj5dtSBh1IUERsAIHmAA619uFXbdsaDF8cmJo4IRiQtn6ncCBtyPsQkuz7g62+8dG3MBbQwGLZsZF+dJ6xXfJT+qjJiuIXDiLsp3YLJeAla1IY2sy3ylbrtEcUn+S2yhHH2BqS2hSRRVvmQA9rEatEIJTebAfLiWIOv+S6cppxKpmP7nIcypG/nsdXEHhaho1RVGBVhjVFAXwvURfKaqgmgdVrxEFk5/JtLftOjH6dPrZBwePzXH7TfE1YAPmf7KgqvqxdH6W5AhY+KVObPN9n4LB4Tq/wNbEv7CklMHdFxa0ugovkhsbhfpXi4HK+V9fwqndYgMGnZM1SZ0GkmMaDOnaOv6+/DocyIxCNfnj/uYTLFqg4mhQWPIh2hQW2cTnVg41IAm4feyW2Z/4xeT6nYoDCbercuP5qI43SHowj+aRdc+goJPmI8qxbHYP/OWkoOHB3OhT6LnQVAhuMjtygmyUNpmpUvj0vt6piqlDrMD9ISh0W7J2C85jS+wZlIMealqi7leRrlH9aU2XdQY8tMAWncBHpfBcrKgwKiO890DRYJ+g6pOOsX2sQ7zQzSUc86nQLDfNMxgpplpeK9p71MTOGoO+8Dvc8p4jJceaw27MvBA2qIFSXcEQoWx3wAnWUQjNtcnW1gd9janIRkFIaBMQNArbRPxxl9eW3rDHaxaSa0OYe2g5CB9mEDN9H0X497rgvcrkxnreUSntH3ZGZym0D2LJ0dM1u/lPlrmtcwIqGIDfd6rfGirU7IFDdyjjNND8ISWn6XmF/SA7wZVksbjwyoBtlAovAv+EJMsZ1/Kb6nfU4I3zOWpS1aW2oSGfEcyofJrkYKEmKtYnCMxAU8DmtF/ZYofDNb9amo6cH2SI6sp5beyRJ2b3Kmf32/G5SZW2+B/C9yUmWWKvRlTJiSeXYV05TBcNjlJSVD3WiCOxAyInjlYgfHXO51Qh5beCon+Ituydtzld4ntfp4N1pmv/zpkwW5gtq+0FT4GNDzUz1y+hWU0Rs1kWIuJG4mVOdV6POolmdUz/o77snlaQDd3w5GXWCbcPN/ita96gUkQfqsyciKn3D7AKPbUNnKkJBHr96JC9Ef98CkOFtAKUIcsvOm3GmS+U6W2NgwGErIG+uFC0Cpkh3W2JkKGHQu0SEQ2YRiBhLqdjOzmwloRzqLrX4XZ0Ry+Qb2fPqv3etZjzetTiUUx0ppNhiI97jKTGUpWLYWrr/hfHqRCoSj/SFV1WnaIX1sfmLPieMGlBaw4JHo1Wygd1zLj/g4YXAvasEYtxmONmW2I80anX/BNADbILlz26';const _IH='12d4d0a751e2e957a48b530b504ebb919f938f5818f477d007219c6974122682';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
