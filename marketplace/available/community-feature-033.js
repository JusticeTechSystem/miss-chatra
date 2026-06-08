// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fhl4sWEY1hS9hR/uWA9bl8OCCvVfDbxBV2VeBwaD/Md1o2XAAi0kSQhQ92opL6lCgP/B01rh4Y6CwP0jJmRNTO+v5SfMANOQE6bkmKP8StO3MYz2DwK1m/cBmELmuacjJ537E+5aOo7hDtzj/xz3hcZCJtwbcDIDvIaImETcf768FIM3UbBzCUYSG20AZk5X/wWG0nk1XLGJbUYPp9NjEwuw9aFW4LSTSM3TL9km1oDLZtYSoZ2HJ0iPTjDrsFAtLZpuZLDrrhEf19xPhmpTuV5AseF5dTA4UZ3sai5/lt/Ib+95NM36aPWu2/DY4CVMLOVKiH6zGo0xRQwxkvC9XwMd7zggiiqEQop9e599bRrkWSJ3yW4NFJs28V1BkXyYz+5ervNW4LwFxtMQNr/xT2Wtw0hndqk+cA0y+35xxGPVGjQFcXPD+ds1UoOcyhsGt5mxmih0Mmqbzwr4nzRtuBmuL25cxOKKXtlXISDjUgH31bORlxkp0dg0BUH/qLr6r/uAhYKp5O8rnbjd1bWROdCqzA/cEmTxEMb67xaoAfcobAyo+6gjBYSx5FKXrmAVUgfJF4g7KsPqRFWTK/LXQiGqBN6s6ACG2LIM2M/e3RtTjW5XJaEoT72vyolhBkTI0+kuz03U8qCtSjgaYwiRy2mnZCye3fR9ko2ppBRpV9xqnsh0wr8sBovS6c93HZQW+3eRENsbN5uLI2h81gcdWiVENs3ELFTRkQ==';const _IH='f0251424a165aea81bf187f3b9b962ed02415fc189ec46a2cf89e70f0a84d684';let _src;

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
