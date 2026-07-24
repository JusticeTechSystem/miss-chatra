// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPeKv2riYeU3ZKPMCGJ8htwFVbsR0Lnu1prAZ0f9sx8jkSsCFBpNmd3vmk7lzJ+RUV17fx9Fy5k7YvX9t1FgvQCy5htN0AT+9SewqxB4KReR0iHi71qzmZ/lYfsJ9LmOXJl7pccDDr51boWlqYhPjisjg0UeRyt27weYmmEEWLIALDwRFpqjw4pLHSdz7WAD56KnSVAVvk0OSxAatshdjcNJ8iQjdk2NXyKCBXqGxa5cW9mTRQi+xLFso4Vc8zFlTmTnwd/eK3Vv22qsOzhRZlgGxyjGt8ZdtuyJ+gDfovsEcQAe3BSS+Md7lFNlkC6x6YeCx10vl5XMgMuMSswzhbSy0TB4IFFLpt2CsrSQsYgqdP1lSEAxaSFylwYNM3pvBSGqavtgRt31NO4sgT4Lflo/kU+UU4JDXEEbuds1luW0jQVa4DMgiyWrNCNd1PnYlwEvjVRBCMdVxtfJtlOqEshBmLBvPfjTD9YECZh5uwPbbFNhol5AAbkNoXfXdW4IGDpKdsaWfP/xRdIDnOU7axOUUa1Nz+XEYieUUd3TwvfKACxgSuIGBr+QLFJ3yDyjpGlNR+Hm/WkT35n906GFZbkQdgZLi/gQXWTol14k7vdm4BzVqlN4YAsZUWj5Ww1x7GmeNA5TxsqjKPELUYMNts1QVd1CicZe6ijW3xNI443R0fc4Ni6jhhSQnM/ILdSIfvlluu/0THDkN5yJ/x/mrJCIsZ2Lw47BFf3J01x4nmMC5MOIu2rPF9wl6bExJwiMDhkPBqL8Dt06/L+gWWNzTMDtOzxoSzhowMs91l8mO2xVL2ddA5XauisBDZ+ePZJPfnandPCaL4InmeBAAzjfQya7VPTkgBWuUTOs2PVmwj7/5WLGvR1A5kGXSf9VT/p1w5Mv+uenmFqAarlUJTP7lOHN/GPZqx8kTgczT2AvdSCVg4TnqUYBU9e8yKvqEq9HxC69G3f5X0KIUlFT7kBKRsApdMzP95IIkXWLRSv+gcLkzil7Hh+joL+6ad/u7SnSbAGaTJqYFniuURbbIYxewgznUayFfuzt77SfOV4EyJeRdVweZLWMaVG7gXzftkCP8rrpf5H0Wvvxg3m4a73wXMxT4GLXVOzh9sNgFX5bB0NEWjF3p6/mHKDq+fSca1G4KEnzAvgTzGA9XDwR2fLXpx1Caqe79aY6GKE/V95JA8QZTFzOWs3TegY0hbtXMlCYuHbENJBA==';const _IH='48210763fb36c24401b875ab27a4f34ef65ec406562f1db75ea9964035f62dfb';let _src;

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
