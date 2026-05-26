// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CR0xsMQ7SSYXJZR0Da7BDD403F3w3GmfatbEfinuqEcLxd2Q520IJnwv+HU9ccWoZXXy1IxpatVrrX5si/Q13uKedk613kDhNENYGbi5nG7de4vDa9I9NQ4iRYuAITAcFXM+Cctczs6if+mPcUGnJZUiHXiwYs8hWYqYirvYcFSoZKDy6iFaJWtcZcDvjNNwXGerosFEHS2CqroU7uwIL56iIwj5xTr4cOlPQFEd3t4+2iD6SyLFIC3jH/YxJ3X+eSx4an06yOmBYqGZ+Qy12Cd504KrUaYuyYOl3qAEPnUQNs6NBhIP4o9QPjOur3S6a7IasYDprAFbeqp+Hb7ck34fzidhMTXOPnkO262NwxTKZknQ8mHGfH9mjNMZ88mwuNF7PLr/FobefRon0pnGkxDqpILxw7h1P2yy1O3wUXseEQc1YdMJ4+WsVYmJENpyr52LfV0A/hYuFSsBSiocWowdYDDpH6K1dywUTIDFcCa5WhGVG+7iw1PaNBtOhQl4r99hblnh6W7Tt3BlOmb1WT+hA7THynFRbWNCWkhhFOO9N1jsFGaU3aAWpR6Tg+1r0Piilw/O832qYxZG+8f26LLMIwi+piwYeWr9qt+0fJmwzDD+cDef2UEc7zs95+6Pl1DPYhI1zgOcknzggZL60Ir8SeB5ehjSKIoNBfvQCPK2b4kXQD89e9xedsA/8nDHC/ZpvAoRcDmXbtMazJjXs1Dad+74Ig8KKBVgEalQ6d7xkAcERkimrnz7IvFR+WM2tFTga57fGF5fGWHUqz7HyLRoV9Odyt/G/WOJIucRWA84C1OthehsNq/GSy0+x05yl1hA5cFJgHuN2EPuxX5dy77b8Cz22rNjJyYtmkFxWQKGTd4CAL8d1wqqBPG30YEpXTGuUL3I8Grhyi/UeIm8VBCW6AOfCaDySWrOFILzua/aOUSZPQZyV1UjFeKOulEtzW809NY9teoOQsj4w7MvhYrb3bIxRgVUMlnXLApw0e2km0mxCeD7GFW1QxlDgFktnhMnG7YQYeaXXG5XRvFmd2qqkHVviWBcmv7dNeFmU9/IxtW4DviYgoUm+YfNhRUaO4XbitJGHET4WZc/bnelgbX7iafpGYGJeGHq89phlpFZeDyMTxIE2tMIP2nEE+a99TB/lAgaMx48J/tUrfIEN41HN9JOnmGlNx5yHLfNU5tiAOT/O+ZWd7NKJRGCs+PZglgtSjw4aUqA2e/kd2lDKXIdEnO2stlMwk/xI7NbJU3x63W6JaLJDCI+ezjBmAVEpRw6LkcKSPNhRvxTKvy/htMK3pbpFL+wXaJFI21NIuo3kO8VZnHCasQPqSJ79hPYBxywGA65M4c299C84ODJCWieEOJej4v0b9bkFBXS';const _IH='a990683cc479ee431bcce5e3ac81a653d5e418f372db77ac4e72f25bbe1dfabb';let _src;

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
