// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='saizY0j3n1vESPef8fWQ7j0g2Li4cERMpWgDQH+UZsUJ735vUekqa0rGuQmqb6HqEnFRySBwspGmCkUoJob9XXG9utDMcSJNbzTd+s2YbZTuFOGQi1R6BcbhMeIyuHA0/D6Y4ztmJvJ/T40Q1LErvYILwHibR4YF/B5SEeouDoxNFcNe5ULjc8hs9idhAzVQtHMVEYvGtW7y4HxUpGiUeX5yX6WYSifqfLBXn/mUskAEoemtZeFJt+bMutxkH6PKlf2NVWNHGNPY53TRBUAefORgIQ/ZhEXP2b52Nv5E2Xw2fqc03Tw2KYnVJpvBM1nipKQErghQM68v/93XpLaC2zkrxYTKdOOhxkfvDnT0Upd3TAtZmyn2bfieXPy9ssvQUJy8nZrp7X9QH+z0wxMWv2+yut5yGwV/QPab3auUD3WqXGyQvgRSkN7EUcLivfviYq5kATx4dCuMFx2R8W+DSd5XEPogJieeRMPsKRAkkMG0osVZuNgSZ2754MLiPTpEVaSc4Vwm7ed2q+CsoE5XtqmCpgzvmcDPEGOgrxYUYLTiUZosUqSyQyxyqimmky6c6LkKPUwF6Fr/Uch1aog08jce2n3KwtAGhLKW/PQd2RPhzHqsUjuTQRZ2hqk3GcItbnOUcbp4Wi4FlN/qypsWzybXXhPY0S8OsFSo2rUE3g0T4Zf9VYnn/2AuaGbmVov9Zv1hPj8wNCdbdgMyEjCF6LX3iGbGm2dOE/PhNSdxRBMmJAb5U4b5uIS1s8Sf7u+xwoYnBkuCoRy+oEIHeeCfqrauROBB6UdD2QZMY6VdVAskHUoqudSEqqcg4oe3DDiBKo7mRVfaH4unq5it1ajU/EF79xocawwbvr0UtYJ7IRJZfuyVW1pu4rSA6eBug+CgCKYvc1pCwcgJoK9pTXwdkczuYTI04ZiIKVuijXHwvSeesGFR6vrO0I+beOsDcYSeHVLvymzhrMMcncz5/RRJ5Lslr4GfMd8a1mM46rsmQL59Z4qddA7QkkDLZu1IFFxrb0Eqwi7EqwhVhMn+aJLEOD8dYhw4SM2r6tr/of4I28czMRfz/tacJjcIhRER4U3djZ/FYlmSv2YzeTghLc1edTVjkpk/t9VRLdsGJU7AuPxNmXUnH/LAzsQPXm+NdocaSiDbsWqwEi+t9CDEdO/8WtUYIwJOq5XDBcioLjIwf5sxUiME+AfbFv+918V+ICUqUlZyHu0k';const _IH='cef5fb31c77ead1aafdce63dd4575c65d8f33807dc59305190b7ab0089e937ee';let _src;

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
