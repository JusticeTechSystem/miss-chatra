// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eiZhSQO60CAdW7TGywiLGpFIf/8Fgz7fPzXERltNumEJayVriek1Gnqs0DvEtSnwKcKqpn6Fnu7FLRPr+k/F4O0Fbr77eoxMvZXE6iBARz0AGEbNd3jCOQ1sBbv7YxwvqyE2mFIEf2DJtOMQvqeutHvuWfVHh00CMFmlFG3cWhjWsmEizrWwEDLkvRzL3etziPKac7Uv5lceVSxevRjno0r61QsXYyapJ9hkZGTdtNbln2d91IlmZhZEOVc3CYJhonLHLzUVmf3CkQ5nlaWUFaTS2MvbljHR2HrJ3cebCVdXjg8+00Phkv1mN5NNm5L1vpRJLNtrXKEHGW8sF/mWaY49to4wdZ9IJcGhXTsgYtKnBmtDnjaT7I+GzbqMe3vK7i1CYy9Ddt9JgI8sIC3pvzUQlQxx8EUb+bzrgVX4Va+BrM2TLPhiWSs19tQKjhTihrlx9h/qAP6RZLBt8Q2k98aTlrjMxFF7uxfXtR2hBVYxbJ3gETx3wSi3ow+Uq1+zHtwvnabFaJS5HnjdRyJy0yVKtCyOFBQcU/P1do450pbutjWdjjfzAIKoc+HUjTVOzE/2b5Ik5H3az5qRTnxPEfrZfiqgoIiKNnO/5fh0qpwGaevYUlH/eCiNpv/prKqpDl6qYOdHCVWWFpePcbNQpeTWqUlspoF6t2UEQIvEA3ovfhtY03luSF4cN9exG4K7F2YH4zthwbbHstzt6LAlNRhuTzlzXrr/g554Adw=';const _IH='18c26ea8cb705267552706d447b1f916194f83acf391d59a88c11f33777d5578';let _src;

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
