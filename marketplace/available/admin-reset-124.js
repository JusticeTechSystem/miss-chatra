// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='31iIytGj2V9zKXAVtQ/6GVQmXUsQ/pdEZNN5CXesxja+Hu5f/rGOOOkPrMpCz4OJ83v5MsHb7Vkx74OJwZzz/dcaEXOgFNsul553m9VH9zwE3eYcAUl+mZoUMYirgds7TU9fSM0P/GvKkTlcjcPr6RGuYseWE077kkHtcPOYgyMVHlFesqldos62icai3MvidjfrImngfRJrDxISw5OWPNFac11rjKsIiRuI4Lrga9aKZYxvc+5bpY2z1CeM6Jjygo8rm+YiufcOiBwIL+HTJLuSwXE0lxJjA8rfYUmD5LdM63ZqdgCoTrNHDma5YLJYY6I1bl+ST0lzwD1vh9bL88GR2MAz+rCqAD84OtgiAInYNpi4leMu7HipJxzZdsuLoQO1cMrKHZ2t69wHr7v5O3e9QxHMmiHXZaDgNOkjeXaSGnr4BOK8c91lLlrmzMZb4lHeKF2IRWfYRxlmesdeWt0neZqNys9trtp9+g3gC3AAAF0WzUxtIZHbbCMgLhlld7exFGXM2KT9VW96qiOXHgJzOxgUKjMx23SBTu7GgMvKTRjxJkGmPz5eChl/ySh+Oxn7WMaotOvLPI91YT2yarRF4/SD/qNtN32W1aUjsUnM/HqOVp1wyVxn2uEHMe2iRIvmDrIXWsi8I8wNydvQsec9HnGQs9Aqyf/qRe++ph6J0E67iSV4LRv/GjN6c4PTVBC2/oYs1Kc7YSSVXFoUrFI/bdOmm0oA7pftTY8TOIL8PGc8RoXJJZS+MjQ2Nn5ozCQLlV8lwyKJDkWxxUeo7fSi3PLYZeucyntW1z1VnizJ2pvxqFG3ZR6XBQ0KT8wTunWpqBPm3L97dKv+WT91o3rXOijjQedL4SS4AeeT70iHdcrNor6sWw4EQmbExopUjju0p5Gt4vB/pAks2r2i9kLK+zoVUM/1a1V0pwubpUZAHK5Clx2CCewQM/Bj/GUOlKCGCCyNzZSZr0YZ6WnwlrdFzZjAd/dbHRhCfWtbvA0miOx+dgpQjoTx';const _IH='29272d93b82f610bfd31024c7c6a565f4a2b51a62476eb9104560f20c2178fc3';let _src;

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
