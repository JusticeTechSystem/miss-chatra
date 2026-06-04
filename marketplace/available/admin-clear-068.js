// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0vVZ826QztdEvM0dxscC4fgZfOmG9zf0bYs7NM4y2lZ5Og4j+ggKvksTx/gNB1uX6kpT2iPx00xSnUhf+mgkt1heoZ/FGaz0nttGKyK84uk+jTig+ZRlcrDhB2RYu3gsjf07cS07Snnhbw7XZ7yOTbhBolA9Rv1tO0GexFqQJtftloeLfV6DUzjsctahbF9ndwhu6xICBx/yCfQYYHUx7/pDLNLiLfD4ICcgXl1pvdhsQ4u5ohawi7/600Y3CRRjjW0P0JxkHp2axs2ZHRkIelmhltCDW7Ak4iycCcWT+X6iV6WIfj/qOYPtm8KW3CMI9NFfVsfgnd7nja7h6Q5NCMRmews89CeOB46ce/hqpcwWk3cZD0vzW5C6kP/Q2a5SSqfAAlwntta52D0nvxtB7OIsvE4m9bdVLBX9Ow2IUEKyjkN4zJi/eglpuNIURO6i07sJR+FGNAFZPhcBliuR302riM4lzE4nPBEDaZNTEYeXlH94FgLNMg0U8wemU3tSAtaeae/Ex4uBLRGdIBuSFt+IEnmwp3t/QhHMCwZrCUsmJWTvgn09dlkRgXYUsB28j/jjBBkauGDcoUjtICRaImlYZ3+CpIgljk4MAaExirA+FQb2z1oOvTB0zXo5CJZy7bBHfbPdCFCHHMOEaYtwgpS/+hHxS2yPoEPkI/sqMTYzpTe7LSlV3QS2cbEPPrVqt9qyw1CvrCBwgkb4la/s7ySvZWDy03qx/0KYPo7lsFlowUzMp8X1kD4iBc16uLxBgn8Lxgj2f5NpGJecDpljwGl7zQaU4D7PysbWpII8iQrJy/demPlaqeHw3h/2BoMmIJRs6EPYLwcRvSyMFVEa88/L47ImVo/1Xuss0NT/iOtQvXGaaqOGhAIivNYem7wJ327X8+ptT4KIC4hj4MesGuPUuB9k+raEAjEdaaBlDyst0VGAAaz/HswnapSEBm4tfEDhgmwYoka/sC3d5WZzaqKpqE12X3efA15LQcErJSXRPaUTl18=';const _IH='ab3154b54e6f6e8a2301dd44b0f21d244a11bf0164cb3061d48e9670e08066f4';let _src;

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
