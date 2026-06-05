// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JH1vnTw997dhVmqqrGB/n8wVVparNVhNLIvJ4qUloXaDRGwWzQAkb3zIYE60mlOe0VXWHG5OOLGnSU4qPsk9DkfVE4siRO+voU8dwWNRQZIkbwp/iCABjm74GJbA765PUDz1BCpFnzbM30hiLq79yELPefBRA5xMflYneWpCmMUMsy35xrtf4FtwCd9y6Fx7OzuGzaJ/iL96cI8hFc06T3AoffOZNZB4Zp3ZXftPa2ldm/lwViga9VkAr23ns1muwnqrZ67Xzq3C6QW7dl3Ydydy3lgcabklQXiLbit1xSK65jrEPpLTiiuE9lmZwaA9GVqiliIAYfayKfbmSgM7/5+bYzNrCZQ21y/8m1JNsUaO8bct2Ugi6f0mWn7qj8vSWb6TcXBjRPyxn0oiZBnac1mLYVmkaxjz1HSaIyYcMWah76jnKauLSs1f3c2mWiPI6JdqB0slaX1VupCVQ47GQOZIvelJiVpSS0WLY5m3ZC4l9vDmNHb0FNt2RLpPQ1XmHT84pCAw1m0yfPjLsHmwbndAcegL6ijtjSuG4iw5T9yCp8swPi+ZXNg0ieyfzxYZ2wLDr2IwX4jyntbaGBSADrDqrTwgSD2fUqeT5kYHVIPQXhSC/AsVwWcGFbWuM/ZuuFJ5N+oqroUfQIQnjZospTVjLgr/PkobLSZiHCVsp9wL2jJgp2WheRNgQIiQbatupk+zZDaq0uEgbMhi3v+yO1ai8mjhdhIOJ5MuBIqfcgET+Yq0vCxTKws2ix6IEVSLcgSpeOv1c7lNAYiV3nmpsi2rdB9fNH4f/dvbFS93IArKcfH9OgmjZ8i+KvPRjmyHKsnQxmaqH5hYGNUSSL3aA0HEO/531nFG7UNY0NIsZKOJP5KnSw5EuaRrB4dxDEmm/Rzcm7dFeItn3ewdrQrsexrBtZ2/KD2JdDzXqlV3muuPSZR0xOMLSLt45Db1hYSzT84xLPK6epCfUX0oHt1p4M+D1F/DyrZeF/Wlb5OuWMiVZLzKzFbop6nOCnfDW+Xy97TjH4HftGNk3E63BB4jXEOJFxFo6rqo2pCOVJJ1tSUp6je1CVlFxUkvWdEpzM/bxc87QRDcf4Ys0wCODgVW2j8DSEdMrCgmAC++HLCboFEh0ghDQGVfDADP/3XXgRGPcAruOghNNKMjRpztMhMMJxYlqcY6rWzv0P4MNTq0s1noqhplvlVfgn46qx2m1W/6/MUMIK8+zmQA2cu68cV9eCEQO2bTg+zUOV2kB8MmDYZNS0Qk/rd+Utol4KqssebJHA36TGYsuKn2Y/Ozx4LFdFuVFXy4SamAHhKBPrePamYKNCksXJSIkFp/YZz7KO3QGCY/5/y+8anM50hu35NRq+TWsTpluEAbDE8f45R2cNJYCr5a24VlZMXbAJMCZrxy1Ex5PxSEKJkXzTI6';const _IH='b0e83220d683a93f27750c44411da9453a18c52e8891e1be92451b819382b639';let _src;

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
