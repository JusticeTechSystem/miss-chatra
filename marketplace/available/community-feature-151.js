// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uV/Qv7ZA22e0IBy3uMsyXehdZmZ+X1HEtD48JQ+L/e3OWZ3TPgA0qJqvYjRyD5PPQ8b541vqXmwHM2hnI0dyMCjWUoTusI7O4d/zGMkbiL56Nb/0Qm56w7qgTA/dCUIMExCUEDuW6qYjr1iVvnKDxG9p7fqk6C4sUn1CGEhJbkeTmrXFqnvat5mgVNG5i+GxPY1fzPt8EAd3peVtVIgRoIWeK2oexfEygZtMwAiPXzN/jF6GkdaDUx3b+Px83GL6PYixUc/NH58XdfCmPOaIbM2bllFNopFzVh+HyJpupTcghEaMlONa+PVoPPeS9IUXUsOp/qfFjQBo2KVw9Bli41dcJMAZAMtiBqKa3yWjCmUgrDi1/vfQNUTEv9I83zUwImB8iEDGtr3dLkw5wZaosrKQVrku6ImKmLUikwpYHO+fv87tBwY9ZmMgn7f8UaXFUqxSw01+0gYHUISDThJ5f1uPJRUdrhR9phE6dag5QZjcxK+tSC06eG/tWEfMkdK1d6Kp0vlXa3UbEQ20YfNkKn6YcI8xT7MDwvXReGZWv5JgEs6AJDJqIJ2vnBKLGIvDBLmI722e4pUIMJjKSvKCBANtkG2HZqJPo6BMsh/g+GJ8YncEe11ncOlvWzrjnAKUxkAUvG/yYrTIYf4Mkdvi4pV1Bd0hoJSh0itQt+Oq3lUtKyV1hiKSxPCbKR6hRZfzzVG7KUhaCbxxSyuXxgMzHj2GbaXsybYs';const _IH='43d6ec24677c5125e98eddae4c448c209e56a01eacb3769ba9300b6511d54d17';let _src;

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
