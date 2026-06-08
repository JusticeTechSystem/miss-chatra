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
  const _b64='/LPr9Va7m9Paz8ouN7Z/Pf4lbxpPToe8rZAV56O+tFYNOLAuJlagdinfYOVAgykpvVTolN8R3Oegg4yPYDffZFZxknr43r6mM28bjJ6bZ/Qn50O98gg0TqlQStAR72rx17ut5do7WFD9aV8Pxf11s7Z2nK+zd2Q2HaE/yRMp3/xKR7AuY6xQjIwf8TMf0yi+60uzi2udTso3Q3OkfRqd5P/eoOXIlVzkqGSQOzprfMQ2XRFu8/4I+uXaKuC9hD6qSM2nArJSfI+xQ/ARdj9pt6IxQ7VToRCaRrGQVg2r1jFXoHuVYFiCyLu3VMryMCzoyC6eRB8BkUfGA24kPs17p3caqt3Mu7uSCXr9B0/4fL52nHZvwHDA9sHkifDPITv0NepdT+/U+voidyVdvpOHWFrLD2vIUS+x8ZDHp2FicA1dmMDpEw2DaSHBmJ8iwhH5bOsSVi2SZUcWfVBG28jn0dbAXREPJOiF9/lL+ZP63JxC/stuXAdRxHqbDSIV+5dJuxa8z4GbinacyXqrE4oHz6i5NO00cdtRvWQf+WROpCzBJWv9M6PEysvNplu0PNYYf6LSqInCyEjNO1OkYUUYTaxsAHsjhU+huWtXUml6P6YU+1e19njrnW7YmpDzOBHh4z8kZsrY2VxINlrGGx3Pv8lr0opq4y17UC0WP2us27y7X9fSVUObUWZnw0kEgb0II+KhDQMj9ZHWcF2fva6Yo1sqjN00afLWRM9hDxKQd9e5ji0QogXEOQAbX2bFZvJvwjIioBMvOcRWkjGPeKYLe7BuEUVdJA1LZCKnX2Wt9QS9yoKx6N8f9FRTMgyj6Kc+vxb9hOLJYTtE4mBnx5w/uoSfqihBDURog7QvEUcfzCC1FWZzoMwp2m+P3JkqQ9h7Hpf22WBvdW50CwwtlmxCd4uZok+4Jf5Q/5b/FVkNU/hQRGryQwy6kwGvBmh0MMvYBW4lxSgWhk4/Aza2KecdsVdyTmTTxpIv/lb5gQSjdgxc1K2s1dIL5fSi+3RHoxRiFA==';const _IH='122f40c8201be70202c9aada31257c482b404e4bddfc190c93002365060054dd';let _src;

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
