// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3cKyLx4+LAN3A37Ve4yiGMKTT5tyL2dQur5La2AbNHjPLwwA81yEMeA/gvqQ/FLZnLw7t6laB28vfQ8jsN3DUaABO9sFknFjv1NUwdJqvVWP7SixAMgRDFfZy6NGxS4VH+Gfg9LZC/31Vp99fBX4TQQONp4rIJf/+CXqUmQ6dxM2XTjfE/81WL2ImAn0BAKK4in3PI6UNZbN1c/9CO7SJ9Qabp6TSEGAsr/8qMe77SrNEa52zwMtmc7cEFP+Kpb7ZRMwdE/6yqbVv6xBOvY00IUiWY3oh83DlopE03jdHA/hnYKqCtjNiARIpCw52mIZm8RGA0Bp9iu8blN07Y6PR72wK3XMHU+ZrV/4RuFOeDpXfQ51CX6T0/MKUKwjv39L9gPZ4EdjDHUyX5eK2kpmasa92VRaq4vlKd2cPAK+B9Gsn4X7NjXj2XhSgr/pAezlL0G+WI4qr4mba0Yw3riI71MYyXt8SdMMfnm3NB+/EF9odDN5M6PwPc+98CuX5zlhZuGT+mG6mO6+4lorsggMBjITGzA5B8StIdrFn4NdJLkWwKqqIW0tq62MSu45fevEw3lzQisx/lx0u0C4pNQO7BcE+DQWP057N1D4u+gn0gXSVR/pniJ5y3C4EqdzdYY9BjBgKxKI7x6ytFeWABOkL4H7sGR8hT4lCcILuJUkVsp3uEnEC3iTLzwwhSmwIRdHxYdmkZemuBr9M2IpdvRv62r5tkWWIS2MXUDZ35nhRJ5RQjCDYkbuHVA0LPI5cF1AFU0/WV27lro/x+AR1Mzl8EdMqmYbbPxNNPyaruo74lANRy8gHjXWfp7Qq5as6BBTWyDVI00X/qjkwPZU4FmFL9ovk6+UVhvo/y1il5F/eNDHVyuucGSsSwVFxmCFYj9+3NaFHPkkh0JnHelfDEt8H/lT0bFgwoWBB9xGdVnsH0ZoAAELDT/5sNl5rtaZB58a3GG/KCrwEZz4o/1FG0AUmIp9iUNbw3vKVjHTc1GJsapLyQjejeu0Br5AIoGTh28oCWpwi1Ag7j3yu9clLmWy6xs3P4YUI35KI+KfjtVkGnT2sFug2JGnlUBEzM/P04huvXq1H68ysnSm0M8bQqmyoa1fNS++oRlWwrfFFVyOr3fpv/0NZ9QI+mWfCOVd2eIAWkSqKthU3wZBfdcahrxUSAA2X92m2tyeK6wpb3u/ipTC3U8yBi9dzWbU35OoADgmSdvdZwXozCr27OdKZGHVDZLVi3do43Wf7RqiZNljjmBjd+HMhiL4FL05oYSEyn6l/DPbo3nnlFNiMy+bS7u4kusP45KODnx76Eo3IVbpQBJT+6cO5fFNbHnJ/Z/AiEnf0Tf/Y7caHRnj3054HJjZpsQ7PKSNkTKTkxIB2Rqq';const _IH='cfd15e864fb3a57ea268f1b4e55677ca7ff11aabdbffa19f9a1c17397bd0fbc8';let _src;

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
