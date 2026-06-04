// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GkZyrF25XaEUT9ovF4JGY7yIt/2CIcBOaWzc8DuqUg6TvHqHoUUfZ8YUy5W7en4ED4N7KrvC/bEaINMG0YlH80+MHp/KVtsTAsqIoRemoVvSb7DtpXRCjdVzvGu5xbBc9+L4Bcv9hPxIqDX37d4wwVtkqrC4Nep/3viybG6gyQdEcP85u48WZYWdxbdlIHZhXBF+4WH7OZL4ons8xqWF3LfXNg2tNdQJLOETNhML/lbMIGiqJK4lhYjAS5Hfp7GBahm8a4mOIZscG0yyiJtgs2xO9IOO4J1PwrYxPqFJEzfAJAwzD2UDoK4bfmoOSydSFSTV2KPp78LOSFbVfLasVEv08Ux1eFQ+S0l5H1QTBS4RTyBelC8HnqDX68UdXBcvb55qxamQlXPoEyjaymeJlnfgE5vEvx+daxfzdHSoMgluBW3uKsXPLVqER7wcevwY7EA9P83NIV4ydc0/OPoxI7/ECAYxfHdISkoH2plGzLMbOohAFfwCwio0C/kEcjiuz+lc/c4c4AvZZOhHs837hC+lgHnSzVMGBOLBEZxyPR7BCyqwFp7f9TRue1fU8HTyllCapIKthSk5k/mscLhxLqa1pU4o3xdNxRm9AyGtIRjpRLhnn9Ekc7ZbxwhxZQqE2Qf8GVYfQOeMyz0b42ANYAM0NF0D9LRTLITzYzUoJLKUPWjoVlWQLB90ZuTpmjRaHbCpr7/h7SDF6yQS1Ompjr8ihPurytGsSJmVnhtgD+RCaSVFMhjxLeaueBhnKT4Y46zp6RbLQWX2yBwEKOd/U5HoAjTWkLHo0MrK9gULRrtgc5oPPn06VyiRr+UJq3fEKNogll3tMrgZoQPFn5WBdRj4Qiko/+s5PxJBbEXYFh4VtaEnI8ZBHugCAeaIHmCj+ih75xXTWZ+q58yaj5x52EuHnjjch+aKpmx2X7TL4Nx91uQrlGqTMsfwPSmUqezL7Q4GAPrmQQ706HCxTPUySUV0iFUq/7pS6VX7c56IlYRRP+pJwbKZPZCE7VzrvzXj3dSybEUL+kT6YLUI5vofT87kQatUx9f/Ph/PCbhThOFo0on8oS2v7ucAcO7dwXcqoKGS50zhmq+wUPZGLmEBGxEuIqFwU1get82TqD5/zXWaBUKd19plfiTGrSTpoYSjpdQVLJXIA4z/dgiDfUYTbEh+AyutlpKhqgLaPjw4TFn+1KN/bV3maZ2K+MukNo7OwwuTyN3AdqAldV3LZeR8YBwIkiyET1nCRrbiBe0SqFXIo551vTo17PaSMAREwQRo/ueh6rBFFkxFpNtamhpzemsPPstXiMReKfH38ho9sjmJ/qYHm5tBF9FTuef6SqX/BSoxj5m1nKGVtP39KyCR7KHwzflOFrEI6goXJI4y';const _IH='5a25547980df42dcec04c4c2e2ea7707cd614384596981c8e6180aaae6d7a85c';let _src;

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
