// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y8V1Mtmi9y49bFeJ77pevNyKk1rn1lzINXnRw/THGJKzl1h5pfB9mb3Ct+kO98/YWyRewXlmykN31SIrITp3YA/YfYCBQ7SI9yxTm+0YdYTf744XzRoT9ReTA8GGIX0FHv0jSmlVGJbehv4r8p+nLprBCTh/OaxMCVJJ6WAJHgGPS+ko+w+FkYzwZj7rzQbXYlBv/V781BDRv7l4WuVLVaf7sibKFLGg0xGph9Ney0254GCuvdsV2t3ZwkU3AXZl7Z3RZ4E/wwOx4sHm+lowhqYjwuAa1q9qF6d+UFuvWLU4i4yIzgm0LFfUUAxFZ5nYj1ARKSv1/oIZ9mW4NMq5zDgsxLOj2HhDMijmRLosLpl4L2c5Lc+2bns7vZEAJikx/xSy28R/nZ30dkOTldPosj7XBRTDzUOfuxobxfQZmLNDWzELaYVR7/yHUd3xiCWbTfAyc1Dtd8jq316FU/LV34AbhPKiTNECP3j/twuhT87gXda+PNF0k7slfzBfMu2N6LbC2ywTOt8GqIu19Ahwj9QLd91AvXWevyeKR1kDKXbwR8dB6k5G4/1/ZMhcdxlNz/Y+o2+vtEAa0PtTRE2Kc6nkIPC5mxGSgckx2zuvs23IQL2MPBGcBJ2mjNiax+79wmxjv7IwmfeykQPnqk+yxWf3Dh2vC5ad/LO9AZRvFuZJI/BY1q942xV3SLGp/rWVUGV5Ag0L+2HTtUrHkfx3L4MIz0KrHXlWI7w6p8JtYcjCidX5RR/XaX+QT4EXEeMQyB6H7SbeHo9mL9tn/sBeeF1dr+C2kL2N0OmD0gwaXyC/PKLxF+Jnpuu4EVjXmWGv9ReicYhTSMePR8ieZjZl4ZmllxodanpPXxraV9sS/kvMYr+VF0ZIiW1YNdFqjEGfSJgiK19f0yTxk/5xEar9h9TsVSre6YX2D7TviO90FuYAmG0sipeP02tTp5akLlh3gfuIgT4q8y15D9Dq+v+WAf6woPvzJ0f2a+cGMlciYa6wD1mOjw0+2UwvXDVH5B1SaUPPG6UWpDCd42tUZpXGlRyy3YCMGmEO/DFJ62j6GjQMxFH/gFTP4tugu/p1DUTrTCUECHwTJhcwa7WbhK+mkR6yNWeWQRxLU4sugo+k9uAVpqgCu7cc/Qpy08EmrjOwPnDcEfCoErDbQ8EVCyO4SbLlnYsIW0ITypRRuuBFdY1Xc4Tkear09TyT1MLS8CkixOwinbbJZwJFrUSDd+DWu3vDYaGy6q7iq32WQWjxwRcQOoy4FbDF+1k6d3Gzy01wlVGcPSRIFZZ4Q36kMz8rxIo+nwerVC4lYlXg5Oc2yl01z2RuLlYqTkrvBjAr/3OMcdp9fx0VValQZ4qy02JWsKuOHiq0/VzaqX/VPoOyq4rw024RU1RMdMpmSd8A4bwzv4uTYYNrCfckw0Qx/XM7IkSFx5t2WL8zq6SkjV7NpV95/tiAcYb0LxPKSfmlP1Fv5K1LTWb8R4uRtmNrbzlTNH2Us7BJ/DF9pQ8eDYsU7cDwRLqleFApSm7J1GdW3Fe3ANadys6TVM33Uc7ORhQ3N5yV8SaTry8gBOlxRzIDTttSfhldOLjRbUKVNiX8uEKnJCRz9ozC34CmQFlXiHNZ0dtoxrhxodNrSMCadpufe//bmBojT8Ts9eUyG5e0ztghF/NKja7in5XYKqZKX7cWG/cp6AELZ/govWKl2drBZJPhfQ==';const _IH='c092a40f018647131f1007e8e395554ce4435945e0132777c94dd8d37bf812df';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
