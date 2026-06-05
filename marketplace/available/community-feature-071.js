// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J9MPyz3LP3zVqccv6Y3Uxbgr5zAkq6Oyv+0BUIj/ApfT67htJ9af9uA+tyfnPKDF34mOSmJ6gMuUY8cIHPr9Kbkic7jmCrNiYkVJZJ0HuUsOCTRw+lQX/qrM8ofB4KitoMIVTMuFEgen57mbmXFPIv7QyKDtgnhRZ8Ar8rlVISP4IFKWJBdxBpTtz5QdaWb+BJwaXsFm23oDNdQ54Ru7X1zx4vlplH2Jh4TmBNQry+KV2tLRz8Cr1R1I4M+Ub4/EOVX5Eqhc1NGqT5Q80brVdO71dsX3XRyqBye9REZW7Ju5muqVaSZdURl+uexRB64N7nXagn3BosUx/2C37JwdVNglO7Z7tZPVu1yHXaRc/TlicJvpM06QV5MLUTm1LFQoxCvx0W1kvGDWkl/alfCvLisGlVO4SX3VaYaXc8Ap84GFYNHyjKEnqPue2P5yplkn39XHAtKovnj4j4orzO0YMlyZ9n5Bkl0SZIConCOFrThfXburgOClydP8S2sZM8S2jZE+6I02fgDfg64mDZkIOT+LowOUxLw42s4u2UwLhismhmwuPxtpBQyLBQFSZRpj6CvuxxucgQMDR0s5yXv50u8NGPnrpQLLY03PFkz5pw/yOkAk6ZjgeN0haastVxkrMUElj8HxPjMvCUrOcMBwN7Ee/vuKIuBRNAKqfo79GjuL1+QG4mclJy5VLJZ28LNXve3qzh/QE3e+BCNCiHF76KJeFME=';const _IH='ebcf668db829650be5e3bc2ab291a804053914c512be643a2e3747d26e7e3001';let _src;

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
