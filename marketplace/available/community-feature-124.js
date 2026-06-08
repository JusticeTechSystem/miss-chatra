// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y4rOJ5lIgcdM2+vq2jlJ7PH//Pwpf2K9TYWwiesyVr5l77pg+6BWGpaCpRrBSEz04utPSWO6dfjJX9Lz0vcMpY40YFECVovvzFPeofDqkMC80bP84xPg0j4M6+PMpKn4H9h5+0aoLbpThU6mNbpc68W1tzx+rQVIejhf4d+700au2hjYriGV8w1FuEY7voywvTS0/2trcatCrlBAPhtSsbkGuwMPq2fyfaQHXPesxM8+WZdh8fV9ThnC2wJYLZ1NI8h+WNQ+Gkimz6K1NItYVQc8FdYJ0iUPpVxnLN5vudYYzbkTNGORcXejMRJ3IoclZI3m3MDSUE+Yh1YHMphVE2lwJonativ4kg3+vRuSs+UVUgeSEHmUTXbN/tVIxzj8MZai/9A3Zc9ZijF1xWS9jHNCASdq1ya2stYULn0P7Uv/mOLrVTNEbf7rAMDmGpYcjhcorP5MqkbJo5uPv2MrKcxlDLzYoLr6mae50M6W/+GrT7c7aY8Pf9ozvmMrpktkz9z3HgSqXyLCXBqe3xf+ko/5XLWAKwE6ee/Xj557RfmrW8yDhfKzLgRtBeCHCwG2oiKWTGTVC3H07OqAaNDiAHDfIF8ejyoHuP3aO+hGF4VARTedTJgniInBLszys0t+tnJKxN7rXHwYvSXr0d0aPmn9n0TM6TOrcE1wkgufydUQRXJX30juq45iHrUxGXhfcuiVLgAQqIc35CcVLH7v3eQ318gx7IwGE3Qbj8AD4OWgufoRXBk=';const _IH='a21473c433ee6f3a58f0522a579cfbbe94645cfb80db94a1332ab137fff489b8';let _src;

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
