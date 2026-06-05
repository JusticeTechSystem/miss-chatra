// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q++hkIPWygQ29Tfne0kL1lIsfJtaMYyi+TSLQlxvSYBs5h3qaOFolc/0v+MNwGN1nrpgM0J+H55J+V3m6/1RVQoZzzw4qQR6VRlehfIIWH3DvB1Ril8dTKtZsUU0wNTOSFHu2iqYLKlhaLOIQ8dxp8PcOpdM1Moiy9EBnfJoBYymvgCnpQb5CIJSUPwK/gcR2Gh753B5aDTT50GLZ9sLpIT6o0SWoDhNPmABmES2uBs6+tzIvWGYDaSGSnei+SroyF52ICyosVLbFAwxWbAc8cgbB+4FJ8FYB19jPP4Z2fpxjpWmKllofDkkZjfV0K5+vR4U367QMHHQsvwLRDduCi2eDqCO23ulScBFE1a/cOpyDRMhV0n+VjZmfGxy3LqOYqqLLYxGI3HsFT5+xCHLmq3Q2gZIAnQ0PHNQHAgPrxzSbsGLUhwmSZCkaCgkf7fcH0KVSXaoSt3gfpyWF7yuvgZwN/5d1Vw2luq4RG4c4bwz9xtX9XY0x8x/TPP4D4o2IFjTY1p+8Sc527Aj1dYJCXeYmXr/otXTfepASrzP8EKvMtIcxz2bRx94TTF8tgdsccd5oAvkETUSvpFVbySjvxctrdjkqiXn/qpekhRKlVQuttIT21iQot/FESy1IREarcKIuCkpgo/BbddGhPMIs9SMVlM6q8XDCgjVZjiCwu4cw+Ji2D93rdSdmimlgAkweKyPo3yWCx+qbjqeyfZMO22/U/p1wFT9Xgo4A8b7pENFxHknqNcUBU8C';const _IH='ca68e6ec154222b47fafb1f0e933dd034bab8682ff0185b80380ade3865a9202';let _src;

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
