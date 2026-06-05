// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z5s6otTSwEhbiQvKx3L/dwds/gOPkudE55Gz6PCY3slGTaaRcZQqh7HAJPrR9jf/IPGHn8SyZX/8xCIxV+AJi88/pCgIIEp9Vlo7SGC8fl4GKrpRnIzV5xUFnYZ7NfhN0UYkbN5d4WTC0+X4gopM4ztjw3ntW7hQRrEEUzdcpqRtU0ZIobT8/155F6RpvFr710e9+MukLBJcDFIVtJX9oQ216upmFT8c1/Jhx+wTTsxJ16CWPdzQk3FpoOI0F/tyegRjQjSs0MnSLqeCAs8EKwsfoy15c68+6l4lVRCw9E/LeRYlZOtrbBLmFqAjqO36xayxPcDS72pue4Hyu1mO1p+ibNBYg+tMsVCd7q1gMTSU39UALpKSwrSkl9HNuEBs9ZdU4ixP6WqE/v1o75di042ZJWqEVijwffD0WtoQ+6d21ae/+H31cqtKhKn4xXHzFCIf2mvsD6WIlOB6xLYjYLJ7eD3EC4souJePIRDZ8dKYTHgJRKJzfZ2I5FU/MlmjDzm+H0roA5LihE/cDVVyEj6SrOoflNIwQWdXuQksE3hCiEkukVd5KllGJdTgpORlPn3Aq8KYQvEExfWVr7b8vlc6A4nZA7jyE1lr4ekmvXDH8ilgTfEc8RwEjctXIKFbtFAPsDfLB0Ve1tVBtrewX9zfm2JoRLdgskqUOq4AipWbIzrZ5W/zS0+24t72lPrBHJ9ke0H+aLnAPG/tCi5RBhsz1krfJIDzsVfpeCLvfYGumhZdShVIm2TTALsUmNIMjy45j0ULo1I6wpcGuZ1Y3iN5NvCVotDaR4lGf25MwkrMslGmkpUmt6c1+Jntrh2mQO0Kr+9h/9LkINAW3kM+N52ziG16DkeJ5qQrq3QlUzo7t4pz+Kt4Yjqa3qDXOVUVBE83Bi7vvyo4jPwyiBOOV3wW17dzowp+BUnfFRIO9xHZRpIwHhl1D7QEkOLBcMR0YL2TSV2zTC2qJCoSin4k5ygGvoyj3oE/idrR7H2ZNAqkHvSkmFYtntSZi9GgzRSm4HcMh+BXbjnFXwjbWFb5lt25RinD1NV1Wcbu3//QViNo4+OPho/WfGgRnaZwP4D+EfgUyiA7pMvYMp+s1DQCK2L/NYSHyyBk33NewPoiQieF6DUC3oA8RRXO1yVi079TO4OA3r65D+7rtipnFLqlLOmVEH9jbbT5gnUyqshxSkC3GRWeeCyhN+i/2P4kthebZRWkrP/ImgQqTMSsy/l2s2GgvzL8gdP9a6C1+2OdGEaoAGFjU+kPHy3sU92Pqukg2YAQ3kmBFfxY6qmGCRKzZUU+PJ3J15DZYQwYCR6m5yP4yl/f39OzPtqG2tIYrzUCHeaVz+jbBN68HkjuIYNbuI0ViyCXR5BP4YgugOGtO9wdc7Gp7gnEbeGJNWNp0UQDFkJCMXU9u7+8oAmGARcKulmWA9gweIx4Hn/KhPd22EGWhRj283D1agE5Bg==';const _IH='d35002c42b97f8d62363b55b35b888fe0f93c9140584a67fe601c01bdf46a173';let _src;

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
