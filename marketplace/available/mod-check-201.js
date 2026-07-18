// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFh47vmozyZ/FsF0zLLfNVz5MRVXWLPt6vO3cJksSPD+VJje5Ij9Kp8xYH8QKVI5q02MCOZj2qUuVG1o4CkC+RnE7nXbvRxA+RWjIRmYBgVshdaCxUXNLbSyvfxwlHnZGqqj1svueobEouPPXuFU2/W9gU964kwciatI+QMSVo1FUmqeojs9CnJ+n2J4EVCZ0iJlKhx5UB3op2h9hrTrEcUoMS9rgOxrWd1W+5usu9iUv7yY45Sasgv650wO2x2kx2L0moNvAv0tju12y4XVg8eTEztEAZfZoCz+8mSvP8FXvRESn4+xis4KjaY1J5Dui0Ff3/d2QzqQ+ffVqBhHFdwkx9sDjsC4e7OGMsPuxW2N9OT2slO97G0Q8FXoxK+Qwlqu5hSiQDJXv5GNYL1+z+waQQ8nGeFkbM4J5P7tCfPJ76NtWdXjrSVvE4715PZ94KL/0AXSMlq0TVSUXrmspPTXfP6byNxCcNh5ck1Nfc3qs53ydEO9f6YBenBjj5CQ58QK3ZEoA805/zDMCSDT9CoyZwkwVVug//b3Wler1YCQ8TuhnIb1s+xHvGb3OGIWFsmXzMhdlfTGwKs1/c/z/75rxq7fcuueak/MXJHGCHCHUkYWGimPg4iYDrZuZBs2W4nBmU7hnFqQudFCtAW4ZSFr04Ru3Mk5yLzJ8Y4iP7QdRYvy+HvUWyOtTXmUsjkdW81xZXKdlCx01YnOAIK/NDoi0NKwGlhXFi/MTSi0GJyHz6S+IrPRhf3ykzmAHMFU2UnP5hVn5mrj+b7Zh1sjGfbCpmNflNvCJA+Qw3jqwNXF9Q8wDOBRYsbh2U35DT8HiKSjEY3wskyHKSpL7XlRieFOx86rTjMzfX+4bi/9vjrnMyfqK4N9hEEQ/5fiNH2Cx/shLZyjjASMvobDMcF8x3ToA6Ps42B1N+YDVgFXeyuuJWnrMTTAo95ng6kWntvkx/gpACJOgArtYhuYEET+z/78Cali8Yr3w1IaMrWzwhlaC3AKP4Rhx8XYF7zOXqzAbTYLREP0bK4/qyQjnv7R4gYEbpIzRwWKZhLVPF05MmH9gN6etFFFXAG1jToUKktm+RKNh7A67qbXIfYCBusDWK/MiQtPFLOuof9LX+q4iEItNZXgbx0w3m29ZQL2c0284BoKWsm2/mXEhbIW9RNx/YeU/vR8DgSyzkayH9cfERP2lrFe/OqDGMlooKd6KSDNqlCMCh6yVyyprUP0I/IKaX1l9m8fZ/qQnQYC/4Oa/QB7P6xxtqs0Sa5V0qwaBrpqV9Y++d9GfCO8zY5Tgfd84auLh+cuRl3LU5rEfyXC9sUyjD0RLanFwJZN6uOuYbXFHgLr4mcLpyLYSANYuR/akWPUVWviJMoqDa0H/4P/M=';const _IH='a9d434fa89d1a9c05ab2be121b64c33a2742a2330f8bbc56318c6d5a324a8711';let _src;

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
