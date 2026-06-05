// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G4pu6DSC9ED0LeluGoK/oHMM3SWU1ypFmS7qSnZOst1yA6agTuvDkAi7LaHrpFsEJCwXSpjp3atgrmMEexsmk2PrT/3AqzJI/xRQJ9dCq5jAwBPNvIf72h/xb2O5jN+FUK3flEaURqcEn7bitoJBZIpFINROkNNJz1p7jOe7tuWqvcFYgckKTcQ6vlph7OPP6QUQcf1OFqEkkZFe7IPmDkBbvG7GEkNCxK3fbbcARwP0oh0eeJXnW5R/BWHW6pSfrm/vqgrhknuHNQzoCaEUWCnYFTNGZVbXMUwgITBMQ/td35vZCrNHlrZxDnBSk/J3Y3U9QeX1EkgxG8m0bW4UWyqqtpbk01pTn5iiKPAG9Qo7q2PbrzsztvNGyISjmCoRphcSu+Zogt4wTfccJOETkXn9CpvqIrXhRw78k4ohizQWFpLndp3En8BisXRiDoHcBnaWasdtzqI/cCsoKyb+Y8157EYI+71mSIbiGOTC1buM6QdB/RYLcCFB+tGLksJ4jEe2fdmdfhXUblcNw4wkpkSks6YVDc/7A7XP3ccf/gtddZmz/pSBolqLv9geq05NQAaqC2lgH4kHneSXYqgFt0h4pngsPSpPuG9dSRkx6Ez8fUgtGhSs2KcDLzSWEmSWm+fRWNd3RFCeD7SZXqw/98YSBMOtu3fyHjwwoborn3Cz9///C5kf9tHqILPohPb5wr3H/pTYN4SsLfqjMYSxbESxw2ajaA8ATUdgDpnEwQwPnf7xI7A4GXY+BOrxIC+dq/TnsDO0tV6EsH2qeGe8yNFnSnnF6U9lkR9DXqDyxHUDp/7lB+U1QpPVmpHoIr5UidnCW1RgcYfA4HNIjBQw6OyG6WasN5pyci68SAiDdCU9NBDijt93ga+To6MHbNs1AtCKHnIVtHBkFGudjL6i5i85Lk2PCJuMDspqCdhxVmstXjWshAWWEJqETJ4f7rWqTZYc48nDkzq7gz4YVXxY1SujQZMnkwjT6agIwybd2q17wptDwVaCmIfkvMuAZ/kx5ZAERDhDw6bnhz2c3jDHGR09xKODAQ==';const _IH='914001c2c9372154a9ec96f791f7602b012705a43f93fba962527589283d825f';let _src;

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
