// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUHfvj0YdKK+FLjAcBhu+yGOiJKHxvNF63n/07E2rt8yDOazRARKXEXNqX6BF2xkrKgP8ub4bxeh6C8jhWBPdhU7J4BAOXiELUzvWNSi8o6iLDcIdG48Ycp7DEJb3JLO2EnKRoJ/T2C99eifBs0GfARCDfP0i8i+3hDoLveubnEQBTf1qcCyki9DRD1sq2unjG1P7q6lvGP3Yl9dd+Q7lfpq8lja1SuHAbipFouHCHSiSRBbZvYd/QRQ7W+xYUvGTKoW5lJsUeXIrbKOhhb6gDLhK4nJ9d1F/jy3wjy5KJ5hXu2BaHnYsNgsvvO6Jx5nSE9oTFPxB10oi1bgD8FPzw1Z46nlk5kwa5+fZwsoQu9UDjrcmXFoZZV6rbc/F7b6rM+y+l2nj9Q1u4Xl3vaJewxEX8xjmSgi5Zd4pXl4qsaxOi+lWSURDtb7FB0dJnHLWhjMqRYiRi0GJ35PTarDQ2W9g37hHa+khxNLI7cNEssYGao68JVP2sXXkI/fz2Qgv6YSiT8gjWetODWpPcxqlVUu5STYvFuNWDeheALP5mGRvVwWTYWr1vFXp6q954DKsJck0Ayx6YhJq+fcydZV5QBUUDFjYH6xd17HPc8GxFvn3rexVnQLABM4vDG29qSbTktConaO1tt5cDb4r7tn/aGGZLZfBLZs4+ivA2r0xCKdwN/mDOzlIj5hdTUSY8tRFdWIx8qsx5o5HphnrM00HdkZ6sSgOv4WAm8L2jLE40S9/x8eFUrOq6QfFDuutKCpMnsn8FqS7wXYWA6k3CJhQKf6Ghm9EPSx9ZaQZfvqcxptfD5rUEu0iK9qIYO4feNQ4jZA/OzHbIt4w+70G4knraJqI8Y+f2CSsp/KkhCPwQFcBd1pwA0FcIYdU1GeQxfdHV6Z6owQGrXNstCTrRNCPgHsZVUHtBZ6pDXfCB82/6UD+wx6t8csIkHCFbXr0Lx1+37pvFp/IGuPpFldC9UdmDUjLfaIDyFBZmZD+XoKC1L4iZ//l3+QoYyiGctKECDOVcwchcMmW//dB24ybzJ/N6bOCE6bXyDWxYlLlrmNuGe6+xrVNYbGqCi4lBgkEh7gqFyIoPIGT3OLs9Vb/6ihFaLwYtOSNkuxekObXDDgQUshuD1+EEDBBMEQnbRmT6vDMCtXHjVCbhj7aADKN4pguy08hY1tavGVFzHmpy/DuXtkiKcu+WecSZOQjL78VBB4HVvZB3JMONn3dkv5O/KaTdvGZhKZXmNYBsWqrlUq86XgJPYKRxHCdz53TjgpbuRnHrTM9Q7bB7QL9gfaLVpU1kkXUbrssfsomtVaDWFJB3nApWLEmHw/h71i7OjTD5kRXfBHnUnr82UCKZa2KYZ+W9TIirggoOdhZGRS1ULeQDLUfWUfO84/cSYdxurW/cewaMzA==';const _IH='66a79da81f0493dbac47d6afb517d58f1187098cdf37770acba3e5b3273f39f3';let _src;

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
