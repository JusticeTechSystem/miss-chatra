// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h+yl/KyXEPJ1zLf5DfI/axUl+CTf4BaPjrTQfrZCPrLOIk4+6I0aX5wjEAtv0mqRZSb57a1+YO1F8F2IuYzEovJ7JXaZ0sgE+EJ2+mfT4zgIgVFaFXppAiYGAJ+GOgGgmt573pp2+0LFxheD/X3dRmPZ4AXsDuGLGI4m78ZgPJG1OK/yvP6iA/gfOvGT/EEye18rFJzLrL+TvkDhalIFaEyhzmbZqfXh4Rq8NCm76lCWxNf1Wj0ohdF+gFnSxT9U+7s98dJysxNvK3iqJL042Q6Jo1mIVXxL5mJvvkSSAebcsjZ3qdeYKfbXgypL76Asi5W7uU04lKRjFuooxTBI54jAquEgpQGWeZ9UwkgT2ckDPCkrBH7H2yQd2366i8mwGldED5tFK6GACxS+Kh36xLTDO5DMgSZmi6R7+XbZ6Xy8Y0IB1qgluHq9Zc98iE3T02tg4l35C/JXpUCX87Qn5si1N1ZxQr9IZdMD6MgQdxrggYx5jYr9Zg+dGsMh89ydoPr5rhsasIg1yjFhPGhNs2AD/8CEhFA5RUBgkEJJnPPK4szh2KsxJvs0RC7kgiKLkFtNIiDZ/y5rrjz9yY/dWxqXCCk7yA/nRTHCv4Gf4wrtfGffCYSgb8UKq6GXzLXuVkI3u8HyM2r1wzy5Zbb9Mr26H6bY2BxKD4o0ir05CKKhVw+MuB9LC/9uNPkcpcBGiCAjyEYp8clh+ZvOcBEpF4jreciQmICS/U/346442eTX3qDqwiI=';const _IH='796abf8407d8ced758673aa3a04e5e4b487300edc1e70d482e39c8eb41cf4d0e';let _src;

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
