// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ugEDM3ncz9vyZuu+OReWaBWN76Ogn+87WGxzcokaf2taIZB/rQc366kLJAzgqwkpJjkjY2VIzu+hiKqCO0fFg0yhZfHCi0HvYfvADB/4yisEoOwZnqFdsHk9W2OSVeRo6D4z1jHOzKQbrpJjZEGGzvq1e3TWopPJzXEYsxpES+DhU0+XDBTVUKlara9rUOFRMvMh1ngFIWl1qfiqB65PsmbaTP+ws5HQwN9/eHgOLU0pU6qHny8KQe5aOaXf3lceAsJZA91zbKFZCo1w3AJzNxr+LCg292ztquBnkkmkepX/jQ8fh9udo/QYCb7MllVG41b1o/UCpeAe8NHYTnqFAjj1dX4IKZvWUgqr0+083WqSZO0PE5UvMfzEn3TiuqeSDgiMd5Y2khzB9WZD/AhV5YrtfVbzfHWYyqgsSWkluw/zR5/dI9ZKdjdG9LDkqrSRyFlAuWAa2aY8zRMbVFaoAP8c/5ZrGhL8mW6QnJ2WEi1pLek9m1XSX4Z3BstrOgoNtqgg4AyjYQuqsnKMKIcGU1dVm1hjx3ghPB5XWzaHUvNKoM38sS53dv5gA5appwDyY9XIaFkEJ7cURxMSfcIJnZQev7xe0dOtUvMQLym4q7cnJyfCXkzo5jCO3hLehNtxaOCyVQYnGOuSWz+ZwOnA7Y6EcL+WQ50NywDfxQImAqBadLtBeeEMaF9erKY6Y6PrprrrkvsziRBsanb0OB7g3Sga7lNFTtkbmghXX2qCUJmMsohql/DKYEoYREpiuPwyMR9QH9EmuTjGbNSVLWIdZ8wH8LK7YB5jgKg9Z793+YYz+FhCpqiileuRYhSa/Lz3lh6Hb+5N2fDjlYiY5uNLGoj46g5qtMmH4zgmhwVNlDsY1jH630ox28Ypz4tpBoUHbAp7vGMsroFCXo0WsjoalvjjsF3H8dhkdIKr+Exj33MEeY/oejX5bQV1lw68EVr3C0O+dv2hDAyYSVyn7pV1/OuzyqlII/z1CWQwe3d/AXW/jTxq3NLHUuUWQ3jBXs1sD8beg4+7J0x1vPqVjsyqTX3ZP+n0ruutJ2vtc+ZieDxetl7Gdcg+Ic8E8LU12t2O/3K9PnbGcFjeGvy8LO5LAKaisij1YaZlbqMJ9hptKjg8Ji3QNoKFJ1LD+e7fw5N8Yw+bu26Qu9JNSgIp90FsCihOyXRgpvjsX3U4IY4az3eIxQ8yfaKvBvn7jsDBGJQfaomL1qgrMV1j27yqJ31/IXCE5ttBxAxvojyvvBsGHV3c+YYnuhK8nDYoKsAcX1R73KbKPqxj0x5Ctc7DRnKAPgfPK+0c1kBd6yIKwD2NpIsTX7OYDK7tcFqjxuNPThDZ2i6cjFK8UTxMPxqzsbQNdKeiWLUPS6F0dBvGictfAnrRsVTki7/DPQ==';const _IH='71c5af74d92e3632c76e122a75ae6673310e577d1e6880ebb778abbf3b69cb19';let _src;

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
