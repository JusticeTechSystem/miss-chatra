// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WQeXFsQ3ygYsS9+C85tpHzN7u7i6Ibh9AkfJVst4QORtmnJ6gKA4F8B7EbJejs1d9gO2W9BVaPFFZKb5FOg/sCco8+ZcgqGJvlPWrFLsxrjgS0fMKqL0OeCWfFpoMg3yKbdc7xS99uxRiJJYXufogcY47XHdwoxKwnnt8jTdYPfIvftCt8jwymK3wZyHBn4Q/bbs4MANaeYH8ELE6RCmR/5diK8ENe6pA4PWN3IHdn7YrR2rNEK89lmOHwOnaZexNo+CLrvbrWPcc5c+duSB5+azVyNAy40ZRtOnCPH5tY78ZGchFJEAbyImDA5rwg0uy6GmqUkGUj1JfUeNgWW6hgv6LK/bI60rBDvN7/Tzn8ppB6Xw6BE+mRTz7XlJBbcvLD+9JC+CRJyywRiY87aXLxeHjm1ij8S7vCJswV/iGBsF22V4cSG7DIyK1vumAokzfSWb5dUIMk88fvKtBCESiLdxmBhjc70Dhys76b+yDITtK4mf5m7EiP8IS0otAdCKD8JLfUZh45d2Ta7mhIRqwJFS/cEj0P+aEA0VI2ERzwBZfSB/+zH/oU98+pmv6WGfpksKuZ1cIaJPav/3qajmcraeS6+jawNFGi00sQhdh+xwTsnjI4xyxf51Rsqoly3JhduPpduiUZAsbfqnW5aI9lu9ZOQGoDmI7j4tExWVi4o/p/SvPj/+RJO2oqvAYX79iKRXuNPjymEPQavA+ooLpJuSbjxjzjFU5a0idSH/BGR0ugu9Av5QT/RJ1MRd82QRQbhi2DSQQbURH4snUVqttbytF2X7VSHUFRI/70OOX3x7iBEZtg6YTgJ2+pwiRgg8ERGr1i5RBtqBz/E23sJtbbvrCycL8u2MtaA0e2g1M1qF/Y0C7TfwBVV4skoDyntCkOcMwmotoGXbjTLQ/bgSIRWPd+9wbI7NDQRGUG2txY21bOVum5ZFtkqCEAJX3BtLfl/f+TpfIM12x+fcPM3yqrRz9blTL98A9PyzdeIS8bpY9U37KAjPWFPk';const _IH='4b66aef974eb048fe15370020026412b4cc189ac01bdb1e3b2312c1592059050';let _src;

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
