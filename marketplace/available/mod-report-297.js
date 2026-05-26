// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xVm+Qv7ee/CZoHi3iiRLMcmK1yPw2azhdDqPdfesrBLgETlzzyXxNxOow1mqEwk2klG6be1wcbRrVFURIEl/3B4l/NBECLgLePF4zxsKgYfY17DfpHNCddSrah1MpVrxQ3q54vembpXVtrL/pA6LhoQJjOmg9RU4vmViG+4cTbS/5bXfFmIF95p1BG5Xikw+wKGYfl8/VhqkMWHey3o0hXWa7L1Y33MM/1Y16bD7D/4PDJHN5kerCqrpUPbbHaMxhnyKggwSS/M7ItsA3zHa3ms5npyzNM3W+1/jpAIxn0htel2Di1z64Mzr1EpHdYSfORuk5qQrhW/wd1npVJ5mp4oy2VU55KorDLo1RF98tAhUoaju9Jx6JXmFQsKDPcOEF/zZPpAG+YemXKbHWvcEOw2ctlk+eNP9AlQNpEZWsChKzSTx3ZKrSZCaHSC5SbVB57gOvC+w4vBmB6uFHD0a6mWWTZ+dEFmOiyWuFtU3sYUy6scZh+XVnMHrOOJYroCiwoXEQq8eJm4eYCLBwPK8ybP64P02V7sYOyENufoporZAt23GQ4CNiLg1l4F4UJG4uj7Ze2Kc+iu4LQaPh3rW7gfg+FmuPZEI+mxGRFbHp7z8HinlGE1hjeD86HeuXsvJoEQBfXxDJtvvcvJaz7ypuZ997gFJIPeXtGMYrMBjNLleiAiWRoIyTGh1YyPdDp6xYeTPRVhIPO8aP7lGTPSAgr3o57yRgNsD37tPnxSXGoISkzaGue5AD8Ah25eMaPUPB75kqYBwWJP9V/iW6ygElUo2TXF172/QQG9VTLAlb5HYK80tjuGOaUTacK2WDmGhd5fZ27NQBCb2Gn80wHd7fyLR5UbW84dJ+ydk00FWO0P4xT55Kl2E7S41W0pL/ByTzMDispIyktGEDR68yHc3rwCDwDIZT+j6alpx5Kfsf9ahixrC5tOc7PHWrZY5jV57wYIE6dqneXdnp+lOmMOs2ueY0UOP0S6dmoEKGnKeHHGRX9I5G9qVjMdwlg7SA3ibkKnmS7pgaM3oXuStgPzNR8ezvs+XW/xTLT/brGvDyYo7g+BbLApm5mipp1+Bmm2EQwwW8M8PKWwrxSHMA6Er6Vf4p2n3UJl4pvv5IiEoQIkGXV/cKD5VWIhTcqft+2CVJENN2DdxCzuahSAlL3sjC+ztK9BgMsjQHyDFlwQd2qr61Wf7Ph4W62klvw53B763zhGbkbEiYk1V+mZoeg/Zqq5hBjasjKo5BBv3at2gec2ZhyKqY1ABLBRYfSX8FP+FcbK1ZrJFbTRS4cFqRM82HAY22c9nTseIYqZG+5T3v4CTcwd0cCtFWOWiB5MAh2RLAii3bh/WY7N4BGtMVOVCXw9pzYujjsgX8kYYJzqlTXm+rUoVmKeJWg==';const _IH='1b6ae7731396ae4f27d2e0a712a76a50ce9cb5efcf1a113f913619039c79f434';let _src;

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
