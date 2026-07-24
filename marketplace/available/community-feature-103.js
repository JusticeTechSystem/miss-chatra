// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT9eprtIw0GQp0gC78i7/pwKDQrEx+y2M0LSQsDaF59CoE7iRvYhmzzKoptcu6Deam0vM1T8rUG6nB7vS845jYnUJR+sanpYcTi5umS084Octp4eRxjmOmMdnXFpjmxBoG/tiZJp7Iac/wEzZ8V2PhZx+EhQ4rR+cIsRhrgP4U/RPeuWho+VC8JQpcUh2q4hoa/v6v9E4ruMzI6vGl0ShxCSbaTI7QII/cLS9ePzbda7zw8J4Nh9+VvNDKa5P7FlE8lVH1nbDg5n4AmLSpF89F8v8EhFmeB0AwVXtGqmjwZKNwo//fgguaVROZ+j96jciLoEIOo+NidYow8BFk9Q/6aEzHt/cRW41JYe0NoBC37JyLmE/5pjNsQMq+hmATvQ27uFlz3/TafKR8EBZVVPKopikSIrrd+6OgIYSHbPUipQ43Hjxc/lypBbD2ER/0wZDvo65zxEy6fFsFVWZ0TC7NnShqwDSsc3qjfWPG3YmG8582RHqsHIbYFIyDITocHxv2GVfA2LEpBJ5YQopigU+KnI3J6JL7FDVHLFW3uFUtPPiRdDqsLSmQnvJ/sySojdlMO4wnfH5Ye//0HhxOehPn0DOZ0tuu8joO+q1IJKybE9E+/1f1XA7zMtBd15GKdA3E5vb0OZ+7NHe1JjuPeALKRRHgq95KuzotAb/c7Rf8PXWgdulOR2ZxaCq/GitIxHmLhDhKl+lXf9YJeoTig56h+Axg25KSD2w23hzEIFQ==';const _IH='d7e83d8c3e86c0c42b4266ac65bc0798657b9205459c3e36c3f6e890244832a9';let _src;

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
