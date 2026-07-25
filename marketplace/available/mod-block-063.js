// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhgQ0dqXYwiUrcp7XDeIEFC++6qQKH9VpirHxKkDl9zyaPLugWxQEbBvjxAUT2cQKp6Gtainyuu8fLu7ElhYzghByJU/NhkCcfJIAw4Vf40TFE7XVJmhJKlcT32Jqiib7JuW0RKL5rFwrkWCoU2BuMZgBVW1yRec0uuWr4LhuA7S3fZaO33/2501MeCYzB9Di5BuMzD0OiVGW4znghhG0J859HQvN3AsBfMFTUlXhSfqBCkSzYt0Fc6H0A/30Rn9hmdmpmvUGWQmKDsk1ofcwEN0YC28F5IDZi91QbxHgEShGB5aeVtpEsBeNjv9WQUflEC+6SMPOU2DapYw+qKwXPmh6R62zBhQcp2OT3Vvf21L2yVYPXf8XvaAmX6eMMQrtgrxBTySynIgp97w/TifESqpz0bxKQgQntQ+A79xthIiJAuaJ1vIQPX4a90vagYouO8WQ8acIBAuVBM/EqH+dtKDgG0yvGn2gD9TAAGQt1BPFe9Gy0RI3f7pSMnH7Ub+iFbTqliS/ZjMOy0GEzPsW8xv2MmyD4JoEq4ynENCd18M4fb1MVuliWYzzmPhmxMGVmAWmwaINKX65yAa7u8Gb73kx0EOL2aAXK+XYccj2PyqBTF8etsfu5iGGevKKyxRIhVKv8/9Wcmj17f+EGXc0O6Tnt4vKZX6bd+NOKEZXBp/HSoNYHbc/zNFQ4gHQTZ595QcmZTPdl2d+PW6QgzTAuMlmzEnnC7vhhmDZnVhjjgSA5wEpAZ0/sqgwo90im+Msp5sF4NF7V6UB3S19lOADyQcNvyo4PSBSKc7OcRdCf1wio/3+eH0uGP9XKFHayFJQUbexRaNP/67KObOq2uik6fQSLAG009/cqgVzps/lusHvS13Lop4+BOYmJkhEFyT70DwlyktKrleI5ohrWo2saMEX3T2qWBSJkfPKGKb5wqi8DUUa1B9Co8HRhzM9sDbKOA+B7RN8kLy1pkBEYDE5vMSAGkcbUq4OXy737wB6O+XDtnRGa9IPvo1rNQTExTzi53aCvzNSWqG1JgD7ZtTKLgcN8PTQg5xBlWEidJkJX8X7kU+kNwa53XLnFq3qkk5x1eDs1Od88sNrXYhvB7tNWN2d4aBa826WBmgJDc2MYfPP7yBIAvbrxugdG+lTCOtCxqBtIx7C2Hupm9hAhgFN1ISq4oyiOz7fie4w0VUZRmldO5jQ7BMpULGLZ36XjUW4J4s0+P1SeJsPYYDT71C0wUFGG5Ws7A2QITkyoqAOF2JakdaW5d73pM+dJ3+X+Rf++fXVjlkmTt2ANCQJ4LmkuyIi58aFkLKuXUDH6XdKQBfN3fRM0vfwvAcqnvOz3V7PdpZHPfBPDKXjC/09dKdeVegvYHIA4vN7X';const _IH='a8b5ff8f1c3d46cfca0e7ecea762477c3aa86d4e980ce4f6096fb4ea446f86ae';let _src;

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
