// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9lIu4mvi70tTWdPFbhKsRVfOK6c2DVJHYp2InHj2ScQ0MSFcZlAC3SvBFHuVsF5Aouff+E8IqfIPfrxm9a5Ytid5M2XL3fThRVe1RLurNkXD2JSrUWLxP0IMxCMN+2H4+OeI8UGKuEwTN3sKkwBqq8R0hntQv7EbXzXEbfsoRMolBjYlIh+Uq0IWHUi4rHrtPfjOrZJkdk81/P4IO8IlG6D5ul9KsaQlGLysJcMR2PeqjV3OuSRubIK8taHeD/bKj7btvYKJFbTa7WT4GPbpKksty+L0RzEb13SYCRuJS8Iw+nWLOcIKhsDKKKbh3Ao62aFeb9ZpWZnPkUnQID2Hf2D4PkfzUohEBIAf0r/acMg/Hf3KCFcCj2BoJTA/u2dG+thIKVDAG4rMCLPGn6jsHn12mL10c6iU4sKMY7khcQuqq0p7QOlG0DYRw0dNDwALfuTFvD+FXU83NLsg9aFxWKoWrhf+fEt2hov5AiQxXv9pEnEFPX09G/L5hroyta3s9/BrQlvE5gU5Rcpz2GVrhXiTOSy47ItbuIBRRAVG5402u/uO1kOOuSv0PGtdfZiJldt2OLr+R1wIvBiz//V0GsspQg7WNtFT6d8t6p0mFC8JY0eFL/q1JXXN4hmMxymmvyeob5f1u7knVZ/TlkVXRUoGJO4nz4w09zCfly9jnl2teN6ubB5mFw3D4RtNj5xXhfLTu11ioy5MHZx95HHZiy6ZrOWGdw7aWrCiHrkAy4RqcOKZ7wc8SH27qThiK2UdrEjzOyiuVg6CEgLuxmZ3UTPBXzFmDs7Dehz6DavbaR+gld8Ko2tSPRTwNVPtmoQhU5z/hCPfKcrUChVgewsG2sU4MqDSj9xOcKfSF2aKFTu7stoR15XJ+yl9zF/jtm+na+7rDKUTDRCGW7+poxlQi7Dd8j6nY4XkhjqA+rdRVXlHWSR99OyjI1q/9dqDBkcK0UFJqG45fOyiNy94DcJH27f2LRIenuyNpcIbGv4d9E6wLvC7sgaL/xyIGi3jQ7M8I26VDQa744cKTQ8VKUVBvlpZJuWyGrc2MY0MhJTUIBr+7hY6ImbZl86FXUVa+mQzFxY6SP8WhTiGqr8xIK606j+alETEgJdpRO8XhgjMEHs59XzTb9tXSPejay06W6tksCuUmpaqq3yLAL9b3QPrgdjFxXF0y1m7R6TzoEhLlRv785o6OPfo/AnBOJrOzI47y/7JhHwUK2EXuUbt4D98BYYykaVpal7ERXlCciDfPuX4QepjzcSKBsoFzLrDR8LNh97ct6IKfMz326dKQGXrnvgpeWgHQraRJHHc/lMbqwUEQmtQegDiQgeTXuiS47MykMIkXBynStY4eCwy2qWK7e5cBWKqp+kW5kjdtPc3';const _IH='a3d901e63208c159a823af115579968f6d16b5ac87ae2dd06ce475ea33ab4591';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
