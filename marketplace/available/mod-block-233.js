// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GhXHHeEnhxECAjOuuPtyCkBoZ9gD9TdmFaVST3Qt7SGSJlg81zlg7pmowXZO9rK4y5W2eNnhPE8hGLW/cTGtlWfNAH70TQAtvgHVCNi8MQlsHQKJ4U4Z5NDm8svDkHLq09cPwGSSqP/peOHeqN5PXppag2s3zTOT8nI08owtjpjTAqGXTNU673WilkV5FKsUEU5CiZ0Cv343uy2vVolZC808RekJGG8GP4eJcHhLazInDEFoEEQGDZV8KNxuEm9rK91HelDbla8wsBL8ZepLR3jU7gZoR3tKxYLzEKIc8oJUyptHpB6+LVKrvZ7rY1cjSuihFGvSEZdupNLlrFoIyLLBAtDqNbn2ut1TERRYWRTbLbEOwqq3n25FRLnwUmfXWDlOfhfRncbzJRTHwNys93SefLIH1xHMXD6qUKk/sWX2tdAY9sFkzzwmkogSVm5j/1qz04mdBn0JyjCxopkgjG/O1rSQYp2RkRmGL8PxZ+9cwzoS9+WWcOm4b1O2n63KO4HOd3ZzmV33OZ4qf0bXy9TmttSgfdr1NjAzIM+htL4wnw3In0Wn6/dQaYygoxyZty/G3SUum/8sD6kR4eTPGU8lUkI39ldnvPd1BTXv25o9/zdPVodlV2HrtU7isA3GJEeySU6nnJ+YtSy1YkcY8lAHLGo944gBlGwiShg3vihZVWVRia3V1DoC7Lymh1efTI5Rj2a2lf4LssSYgrK8bccarSk4kBQvL/ouHi3WgAU4ZQCdI3Ik1ziKoUbHNEirFUQD+n+cr3EOp2DecbbUoCVJi5x5tw4UxbeFhpgxOTR+EeOnuz7kS86dXzDQIL+KNDJ47zGUguX4NTHbh0qi+V+MtFm1Buw3ZTPrRD/FrqNtB9pD9Nxe0TASLysouK/C9f3q8HKnnrixwbxjpGVvpSAJLWFMQkC60zZeGqx1rTIjsNRGXKKljWgOLXolyn6FOrnYPo+VI/Y/BpIOjKwjRdrSq/MXJCipNW5AAWJw9QFdsEbz4RNJni8eIXb1Au9LwNx17kEv+1fszKXuPCFa0GmLMfFfUcUBGx8Wxy8lIhw9Mb1kC6+HChcIsehCUwD4HOSp4UlVyeWYURWshYa0dm+dzPSofqvYewXrpz3hOFV/2P/Oi2gySkCyn2BzND3rN1Zb2pjOdEq+fqQN3r/Imr5KV2M/fLH/WuGtOLIewvx1mv4FXYpUoDAPpQFHh5yjbTmWaUoajBYiRYjBExXxTwcZTjz9lcXHI9OyN2lAUHac6DNSafuQxevdbJGbss/Z0i3OsXcp8jgHvglVlA8qAnI5yEpX5QDWk4z1UILH4u+fJkX7vh/gpvU20YvqMofiPP6A1Su811vcHz4ySwW/AhYiLDpDN8PDJ3/3RBeA';const _IH='0b461af7f42fdfd1a1ffe640114b4132e57a366abcba7b355082add1e0cae35b';let _src;

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
