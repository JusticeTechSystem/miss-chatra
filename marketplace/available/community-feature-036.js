// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+rGWPfrQAg93in7DOCOEwYtcNPvl9Jp0OSe7WASY41hrFZW+0LZQsKtotU/7Y7V5YsX8qJSTPLooM7qp9iz4xP6wekDaUSDut0QGaP4FivkkbGhwI+Ivr2kTM+lmcGre4Q/0/c0ePONIxcITiMEhMHZoOUmuBX3TWICHc4UxMhnVGuuTe3emWpqA/lVeGfCQuYbS/kBrSXcL2LXlb+ifRwIvJ93251UFinmM+XGpgrQ/m7cO25vdl06jx9tHpJsECIx9p1Kmfo2pbDKfbWSwxYFpQewzs4yuuJyxiyl5ODoIFQWsnIhpvO552kzFDgqhuNoGcAhFe8zevGi+aLYEV2xyMbjxNQ3r7rFy6+uvb65gU0t2htIxb7wgCfqT2V7oCmNx5sDSI3w3WhGpakPPOxILsLVzxY1+Ts278cGNccS8i5wdRxuIR1zkrJ6fo2rZgf/+r8wy2PjY41SjNIPbv4omE5UjM87/lhy51S9elhbuf/bPFvPiuzamlf20if/ph2fE507WbseuLy2aLcwXPg4olu+s8ctvXrUSNJpctdSH6ODqmBsVroR2/C2dUsJ062Nd48uNu5p4am7OEwnYDfrabptO142SGU4kRauMV9ng4uAAYxhftAHWfj33n3vS+GJp5uBy9AAa+/WIk3U0Oah+4UYAk8ZM8lhQE+BIXoJhz5IGAHLIu5FTT9FA9yJMiu3Nk6E13ABx7wFVUJflCG5DMxE=';const _IH='bac2da759fd64b791b6d0698928ce4fa5cf5ac8f238da555cde4a37bcafea726';let _src;

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
