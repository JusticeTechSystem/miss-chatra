// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWfpJs0gQzukiDq7nKVPw0NGzhDc+CJejD5yFpJP264vm+2DZhhday/3D5r6rq7+d4xkwgE8eciHP5jRmx+6xmKGcXTwlcvZZLWtRYmHa+Dmc0A0bVyCJi1bsnouMu6qMK8rPzJZCvL8+g6Fk5vgl6QBYHCwsR/qWv7g6pD3PxFXDHOuj3bHH/JoOxuZbbqRgwT5Qzd70WzAA47vy+GN+SUu6DRaAslPvPs9/Yi14q9i4/D2h32rxX2rZrU9dsndSjm1mUZjNmBj0tn/Oa/rnE3Y6Kk3+h9Xr7DCOHzGTW426KaLN+zsl9KNnUGCkY7LnL/0LYDTMfkIuPwfxV/2yw+2lG4MHir6cWj2ByyNkJdcQ5MLGX1QE10YL8jggK1H5CEpKFBVq3g7r7ek1eGDB383NmsOZS1kgFNE93RbpWtS7Cb9BM2W94SlICOjTBk1rqd3p8h3BM9C+dtUCvXzcHITc4KPRLVH8wP3vM8ruI40mVMH97Mtmsw5ek5/Hx49ELmAPLO2idi6vSdboPrKdZujkUats09XOjNPeO8lu0dGybpLm4z2j4ox+dv3OXFcISwFr/j77aPPJ5VK0CGWw2iRtGYY9aRMil2sVWxenioCjyz/HX3PzOs7Eh1UkD7zpA6Fa0l9P/u9zqAbTNlCs8WItsk/lws0rPCr+v5GB4/JOeFneARdG+WethYy/jHVgUCfwEdkQsQIL32TKXrLKsWKjOYpEJkLDxcj8vuq2U';const _IH='316e518334e39e2025efabeb74dfd21f1b6c07361a43fe9e4144c890e69973d3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
