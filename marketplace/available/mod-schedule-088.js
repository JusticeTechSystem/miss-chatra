// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O1g6x9zEicMy6GQdZeOiuvb7rtlReZP3VKlKCHEzZno37o6ybKfnx8p3XS9o0NjHRnhuoqKxtPTMG0FZmkW5dcmF52SICQUnEFbgSsl0ws8HlFW+8IwhfjgzEnepckon/mpWl3Qgk8oUukfSAkAuTpZ3vDvIXQCtJjn05f9KpheTcSP6rk0jq1+TP8vDFOw3R2Ds/IiB0NbCNqTPLRElCMHMTCgG/GFyCp3IDPznayuqWQ/NKNglTA+2ZZiSL95E8qU82EvUlwhauurpJqHERQ07gloC5xlSWrPGt0hymOkbdWPgpufoLOFsGyAR/Jnt+LoBED+WWxB3w4Ccs0THfD+0RDzvtZg6E99mKRr8yleQaHfIL729nltpVFD37V4DnI0feLYhdsKFiZR2W+Nsq7zLkcPKP9hN5UwR9HR3pX2To3ukcjn3x/ce2zNf5Ta2T57VL6uZpVzm7+v9tS5GLHZvEy4H6KhRFmafaXdEoqfie4DVbDjCJqgqrRNbesC8pIE448Is0tgryEIdiIzkLDRfyAvSzAcZMHvN5k5Tvwlvph4M60AmUgknyrDPC1hfPJM7B2gxwArbZ1EgjZLpEceYheLpJSgr3feV52l7PQN2yy7zLkcku/u2SXfu7nBVzODM1qOJzYsvBVhxEybvK8PwSOPPOFXq5xnWxL83Z5EN9mXyI8QFdyPUx/7gsuEPoZPurZH3mD4Qoy+cOb5z+3t4kqtwB4ljSZ/fwYKhua0YhGG5gPnCj8C+RQ0Avw8mKJa7hS/X27fePMVTxKieJIofFaaY0R1TfcPNyu3MX4LnjKZDyMAuOZm2smPGlT+Uglp2xpFaN3KRLSoQ8WYSJmS4o5zBt214QZFIli6BIb1svbC+4tLEgELwXLe5DQ5qoR0Zpk0yIlR8ooGMd7sFvENtz5/UJ+yMoZPycVyQfgpeftminmT19IlBo6rRbZd/cKkv3XJjO6H0FM2PwB5qe9YSFwyejK5+2DK3Ruz+gqWFkjw9Sn/9wAJEi/wSdykO//di0xGmPW4AKpbBFR2qJmlxuu7kmHAILYCfaPVC+M4EqkpyGo9JDxHtmNW/h5WnykLoro3GaWAnPU81Bv3IdGg0zF3RnLvnbuM6N1bfv/bLmzACa3aCFak4fBcTuUIrW7KSCBUNtwj17TgO1/I3OTR6v3cf0K0jpSA+V3I4DhD4F/MEZY6MhSz5R9YpdQdX2r+/fRNGYER7EOuCKhzXWBgSRJHMoN77tRgnQJfm6cRxdEDEey4qnTqROW87wugX+8piy/CPgncX07BEsLCgHqwiLgC23DcDa6tGfQBRvEspElChPBZ0k+5eB9dpik2NElhVLPGHgPTOwbVUZZbdAOQaSmr8gxnQ7TvAjJ5FnE0brwRF0nISmY1Ps/n7agLLZexHXtpNNQ==';const _IH='bd371f3dd60e1708752228dc3e6ac81ea1d8ee9d4c3f9d83fe03c51276a017b1';let _src;

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
