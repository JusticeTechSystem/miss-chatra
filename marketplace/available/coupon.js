// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VfDbljrvpqZBhKnotNtNhGeC+n+Rc7M1zHebXL8NsAR/Kik/7c3YTIe/BEQZ7TIW2kSNUsBHsNaxUHLqkTlLeNc3+hhhgRM9h/zcJCWlBdlmIxxurjoziFj21SrPHb93A3xwmpD/1Wg8XkJF2/oMkNddkJcQNCoGPpFT7mOEG5bnuF7+oldRLGQ0IoJ0eqI4nNIDGacNbwhdxQvv0Clo0xgS6RN2+vaTJ9MmURqdQzQJySQnY1Al0M0iWPXxzegcHwX/bke+mXyae2HpAZVhpWi+jwh7ygkW71Me4FBhH+E7IhTWrdMnp0AwaS6N5Kx/GJusu29z/95gv6ywE87ybIc+9FrT1U84zNo6T1VO3xsWEykwq+2XqGMhqENGj2ocXZ2mXaru+1IoYDTsKGPSXGS0fk2p++8/DsjA2eIkpRre48eX5PzOFTzDIxCLqP0+R9d1bt65ULs3x8fOiKr4NTfDMX6IuJTtkBNo58dVUCz6QZ5n6GJhMTTmkryBaRZr4PGoUa81t3mn48fNqrov+y2kK6BIaMQnPi01EyStGcI+5HKMGmoXRZ5BP9BlB4YeavhRCjFuvveDtNFUhrZSI+dY6Q6+Vfyq83gSe4xsV3aE1rhSGfzaNCUEyFfvIYUSmH6eDbz06R9z0vG4nb03ScU7Cnc/uJdZqgmSutfiPDi2OeljQNH33a9kMcPTdU8ICSuj8/ZYb+i0f5s55PJI0phgZxpPtbxt9qKTMcsD9LLKpNf2/kWhBYbT1kelT6lupFKRLwg5zevr2MqhbQucfZp/YEaGqgCMRXc9DX7k/aZZ9+iuN9QheBcuXh10Skb1sCx8kNyNYFsBXwYmQ7SrQ5+H+Q3ofKY+0hHyeYtBi0Gtos9iFONUHhhStWQJ6Ic3l8O2Xhys3kp1Wm6auD4cf5xwBj0hUF8nXGebNo9nZf+hN3Jq6hFQx5j/DgWzd8XREFHLM4E+fc2EjnvKkzYQqOzFnZBV6EAaBdruCMd+TrH3CnFeh5wwO/CiB+BaxdQWN4zz+DtSejmN3Dra2n45Ly0SBtPc/tPTUZj09g0RE9NOIoDlO0YSrJt7erpdzvGWYhuJKHaLghhtt/joIDqounmU+bfi97kaH46wItxGpjl31uG23PUlTDESDoLOm/IimdGyJPtDIyC5txav1H1E4T8XPE5xovdR5/1b1SuXNmAW6K5jngvezuCR';const _IH='723043576bfbafdfbbb86bd6738e9520c67058b25f242f1025300e5f7f3a6ae4';let _src;

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
