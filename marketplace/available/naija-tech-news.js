// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LksXKOICI+ZmKhdpQrB3hjrVOOcuVRc3NYQ5a4VTrZ2WmAdn0o+Blwy9NQX+q84uUHreBhHfIZct1Ao1wwPcl/PMcZMCHy+L5fQJdntL3BYOO/Aex0ZMtg1vKrqHPS8uaPSemuLCGZUNKiBB8KieMei/hqeNDaEhUXp7z5yOLEu/k+FWqunagSk8Lqa5i9f86qNf58/1wKImwoh7yge6ZJIIFyd+vskdP08HO7ukU9Jm4bicFbATB+FokjbDHOuD4oGP4XXkDv6h4h35Pf8IfPV2jk1hpTXllhoddbqjEmU2Tak34tAx0yZHwlLH+OW9EpJkiFdyXV7FQqxwb7yGlDKOdbVu+ajxRJUTDUDFSVnbPrtsECs15J3trkNQxtDtRRkBGnOmqlIwdqRk2/xrthfysJVXjtlfR5oy5bjrFT40KciWWLONJrHc6WEjDYjt64CSbxKLyrUp4HSaDJtQww5q6CUkOoyUQ/ZzYVgR7us6twkILop5XNohuZx852ldYWboeqKXGvY2JGiMCWSG2kkUKf5RigcA/FUngA/xXLcAv4g8okA5jYgfiBQmFQpsaOSZzuNHvXQwHf9yAk1A9MK01oBHiMGhhXnSeESLgIVJp4hAhxJKnibMOB4ZUQdwGCq+PR8487RwTnARUdL/HVy09YhOx4fKUr8CkuMU3J6B4WlP/KUFmjh3g/6eHoxbTyij7HZT9p22gIv5eOBjU6pbsBx+44l1mQD6qnpT4ROhE1QOZBcgg9mCJWDZ+QnsUV706Vi8ZvQ7M5EAgjEP3hPW0Tz9Z79r4MeGssyIOvOZFNz6LwGCpDXYuh3UcDmsG/zFF5QVRFXpjFK0YLSOu4gZILVFzfP6kHYWFdmYoUcw1OzXy7lUokOOPu99CNW5aTD2kDG/DoSXAmxxH38BgoQ/7TrP+fUFAO59YMhrGGKgG8anBdXGxG+HZCHYYTK1V0vvZSuGVGJon3TDciMGv1xrkoGRRDe1hH3CFux07Xe9UrS5Zjcxqn32NqVlP5F+VhokUUBM3obzYcTlux/siap/4EeELy46Vo4y7OV7woRNJRI8+p0EmBy5QxVzR4/1uJgvhrMmK6D1BnZTCrs1ZLr6l5r2/vEcATw7pbniv3NNEtCUY41XvOFkvopShIAb86sA8ahbUZ7LWbl5nMcVWosW4TdIDeHk61lGLONFEbgRq1bm5o7YLD9ENEmb8mSjbKcC/W6QRLk=';const _IH='aca05ce1689723235b8d78a3e03877ae6efee2bb2c8ddfd1e2672cabdf5a0b99';let _src;

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
