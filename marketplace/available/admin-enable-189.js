// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6hiEeR7It4ew31zO1xAxYynt87nJTMrKwCgxe8OEszH7j4z2nyUIsqO4AWgb+OJ7MrOOiS79dGSGYDUdUZKvS8b4eVzS/jdvJv1DeEK8Xzd2x58gfGQDP2Uj81wkaiTouDbivZOJD8NO+PaF1Jezuxocr90URtQqTdLgjNQIAQj3RLsUoNLO8wezXV5HCgQhqjTfGXcTK+2lFbY8/rJKGHdEutBOj5BgUYBp3m5hzaZ1o7mLahqezNrgdVQI708urAxFCt1H8YwxbkNVaklz/EmHm5jErlfxdc6l66AROrbpb1Ks8nimwmWFNONnbVG90b6h7+YjqYVfSVOpbM655fgswA5DgteNlyB/VMFLJ1N0LfBGOmN6yatqOyXzLaXjyJZhnlz1/AblXvKJaWQBOnpO+DjHIdwMy/XOikyCDyfZ4riu73EbwHz/jFvUvLwpXUuv2O71cDJldDVmAYKVWKbFazsxoHMS6FuBv20LhOhPc8zYrmqrYYHLqPvENrGpivZ4wGpkwweS6RX+WlqFwrZU0ljXEZiVuN93ZxWCBuUy5gYd315H8biMuj/PwRsth4RtLVjEfUslWAw2rh7yBfiaClKrdmu4rGbPQ5ktqDbHC6vIvD3zid6A8QDrmez6FcnuP+v1LkKFmGU5xGrqOVBBQv31uqMGzWKotYUZF2e8HUYdlrHUUhyZszW7DT6EyzjVFceaT+2UMW8UyKPWe2sTro2b7fAhD4y7OTx+iPR4oHBZw5QkJBGXqLIhB06WdsuIyCBwhpcT7UJgWnycAMe7JIORIDkPoJL1UQRwaUtE0Z96i1AaWI3OBZ/kZZzYl7E92f+HENnwJvWRZk//Ku3vtkCEFkNPKO7xjjWLPmWFCybSt44mH8V5LYhZlUn7/qFDM5ombsPT+0IVQxGRPcON1Y27q6DyFyQf6ICrTJXxn3d8p+h/pemNusqZCcJuAzTDhF1D3KpV77DATPaH2V45+bDqfWO2Xkpnd7nny80x9bA95/jkANWJ8sEbTyxXg';const _IH='c7f2192df03057a2862d6b8f88999fdafe046e50c22fbdfa21a24e7691693d20';let _src;

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
