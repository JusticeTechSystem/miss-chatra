// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ1g4CZuBfw1kDj+ZfhbiABM9hvdxg115P18h6+5yGT+MSw0Nea2OQVNofKC7JepR2xo1sz2QhuM0qph5FTs65DHpJBWZhzcX6LeDZFlfkFjFC/hZTQ74/rJJTxWTHtrB4PMgQFm3rHQDDA3vx59jRNbBIMOUcXgcpaEFTfcPBxzR1mO/frOm/3h3Jo43bBGxq2bKmv1busxFdRmMoq9hlsmFCD3zx0cq9U7p7DBh+2sEfjdhvrM5Ga5fLY400fsT1aZo53wB0+JnXM/FlMR+kQNAQIzIZMXInGUyZJtOV1j7VVr6P8Gew+7fqRUhlBqvmT65e/ulP5N7hqhMaMWCHiz5AercUBmPJJFez1MmYLR9NGrtFFBUL3S/rp3s6wdSBYsT7V24SwjeQEVQN7l/PpYIyNiUwZh3jwXGhRyHYDNM17B/MVpjFaf9o33lYWo8M7CFG0Q2IhcRFF51UaVbkF5WbxmfZAsDJETxLD3xQdPh7OnDPimZSwTxCqyrkWxHFTvaHzS704/TWdVh24m6CE2ngrr09qXbLJDvsgWcNns8CvnNqCqvktpEm+hJ54ye35jkD+lSfZXn7KTwzwNRFKJAA6yCL4Luh7qasPETMUrS5dtC/Pr7uYuQgEB2aI4g6JVH9ou4iHSVus5UiE9cKIenWYgXU3hjOA6R6KJbLrR6cBdLF1VCjvVrnOlwTjwWyfE3fPyjYwSu0HM5zNpHyU5H7RAPbsoiW7HJ28LqDynCUJ/g==';const _IH='41b5298c8e400e35ea0e0d7de4374e85b042aa9e1871eb1c2ad11063946fac74';let _src;

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
