// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wvFQfKGcDEjtR+w9/blnY1Lqho/alaifgQ4Xj2XAJa3RxAkJRB6wwdfm7jE88p7y49YE6sQxslesE2QL5UlK8J7wo/H3L92FVZ+/pfOhdmmGE2kIqfkU8qc1Ez2LBjVjazD6SfXFNggBo9Ec21sljUbHjzGN3U59/Y/YxugMGtewsSxWyuFP2lFt+WhUjdI8NQ0t/zruzJ87Jb7eUdQrFuzwhVdJmZjHrlcW1IO+G8+o5LCqtN61uSDEkuE4sUpTgNB+k1cfE6dzVLeJmPjqqqfuLR5RnQ0dcxtB3hjHMqNfpkJ+u7dBBJJ+/64wNHx/iRGlzAx544L4XdsL3MliE0/4pM3u/RVUV71RvynNpIFwswa1ONhSFs0pdnP9kaOxT3ddNvc+GREc3Z2Y+jObI+c5zzgWu21Bo8fDoygNfWY7bHSWKLQQZHFQDXYcQxHsr8tQCsHYDZ08Rb3it8BK8vveApVG/UONdTwIw8xSEZdTtmTWRIgNBGjqaDVSVnaSXjj1nmmCnOM9sxCw/EDI1BSW17364dH6wnn1fay0iQyHPqeS4bCiamtqJXQWO9dVw7/X14SrUBG3IFGbY3cvK/wQdp8HnchbbvcNlNB7hFVrTRCUWvm4nihh1lbYIwrQkW/kTaucehvrXw1RqHkAM5e+9GEaunRK1PwjPUyCala0JulfEutPsj3a1sO7yj9KaUH6V4gQp2eMiM15XS+1aDtz+UMTZXFAaoSPYM8OlTKFXTcKiB04HgHtnZKAYJ2p8lThwJsB7Dsdp23DXt860+EX9ldXwBkRdLio0O+9PM5JxMSb85FD+iw2GYyxa3//tV3K36IwVGyM5xhfxoMzka6FyAvT9xYwtqMdBSaVRUUO55Cx4AvtEgqEFzes/jPeY6D++ql5iAaGoPIOl++p79G/wT+5c6khhbLqP+HhL5/rBYIh0iVFZ8NO57bNnGtXoZxjKCmCGNQkstxSlO02VKCccLr7VILWcG60lmggosFh8WAvyhXyTmiGqAWV3DR1Sjb5LGDwFSyrhV5ToincKNsxwJKNbFm86l1QJ5Ie+ApbGmJjSMP/jqpcsbHRHdeG1CczJyTeXms5W9Q6EHNVVotJcPdJTmz8hp0yhUCK1btL0uc+X5Nlsb8V9xiu/bB9jHB02odRpNBEmhD4XPU+WSxV4GYP4IXo2mptViCvyyJ7HPtc3UmGuZTVOWsGSqGV1zddElAVZumPksB7iyuPk17h0BGx30sv7K1IxQXN651nCaa7qvbCROgwZkml9rnb23dQu49eNFhyiULh6EECEeqY6FOu/v9CNE46IHz2rAaxh4fxg8K3GdvS5kGrvPvzyq5fJqZhAvHbaY66CGQR0hhJNG2zSleflhV8uzY9u9Tux7NH/D2B8Cen2Kcx21INUUQa4sAvU59ydhrugPLywJtimd3SPbiEUwcwXjup0fBONTix2IeW4Zn/jZK+ZXgmDFX/H+7AHWINmQrMgH6K8GMnZKlxtDJyKKIskBcVTf816uk1ad54VcJb+VTD/6uN2qlNZNAh25ViQFUkD7RGSihc74N9QXzH5/+sy5nurr4x+dMr/kI8q/FdGKLi8IZMbN0CYIQ13q/AwQzPuMUeo6hi3dBe+fp4Xf+DYzdutbnaPzEhFKZSo5Znf+y6fhZ/8NnM5VgIyx5Or0+d2c74HulEZ9HpaMnI2TOvJtzW1D2JGiiZzYSYI0/d';const _IH='4e9d1a1d636d572a605e783edca710197cba6480fcfbb2379401bc986746883b';let _src;

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
