// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KWiTwsixC6hPtDRtHQLqYMQ+EkQBDLyT4aSvQcOBukXtuZdsfXIj3RrkNhWH+5aI9K/q10EBPcPWCSaIKHqqhm/rUajh7MVOHsn+/9ZV8LvoT3G2KV5hVMgFhdbc0uowuHbSM17BDGf+jukzXeQvqveKxNw1iJkyL/4SksnvW3ZhqaTzrmdCYFSEziwC7ZH5tLvsLou0iKnBSd39nJF081ukmUBE/vyf47nOPvHbLHRVARvirZU2MmQEtfmX/lhjsT/UDs7E36IN7aIGmXZ+nzRfF67V5mH295MvEnKGBl0mOCE13Vn2aJwkUEWkPsljVtC3AemR2imUyp3+LsxGDOZUkXiS6OCX/Gp4HNxLzrtTCyQJ0hQTFe7unbQ5jd9f3FBdgFIcVFxP1FYghSkVzd5188aRxlp5MaQF2IAiMQDvl4hQFIlB95yN46t2tur1aFjpKJfyhcbaqk5tkOtoPnKcw/vD7Df6V/f1rAMj9yY836UyPt3hU+riwqEVe1081T7e75dDwXyj+5ryzVPhp9P20F0icWRoXN3/u7ZMWGYTDr0lRPbhSPth/nRtvHPPCR99smO7xwUCVrR8H7yB1hKs+WPPGGaU4PyACwOHQpVdGzw7YXABlQYRbPFfDkbfM2dConZZgb6q3DYYE50w5iBnK+NXY37zah67ChHO/bIQhG8RphRJXX5HF+CPE2/AhoiEjdU9ztW/rkvRBNZGXEVZSp3oURZiPymgue7uJoX+UYwoPysZTNUaogRkrm4PYDENv/hk0AupZQTTkAOKr+5s+lg2R5wFeS9/gmXNBn31arXf2bDuKpfDXSg4Bx1jXrRe0OprbPTZqkybjhrSX5sXDoderjySyj8TD2xgARBykm4/MYEm/VGZor5BBvtz6/efhN3RUgIdpj8EkJJILTIlZiwEIS6tMnGbnphYUSYpdIlRMgeXmPQOIuoY7yCtbEWuK012C8Vpjp0LNlx4SXS7fhS1ZnzIx26TUX5H7cDOwmqni68=';const _IH='266cc8f5ae68baf7ed9b7d68d6f31e064bfba570135df12934075a1a3201428d';let _src;

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
