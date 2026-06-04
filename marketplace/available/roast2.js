// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HEiBUJLYUFYGgDQlC2HVVOE9pg5On0vJltE5sRRvEq6o+VjI/KswRNPS2+YfpQ6XqUM6kjgXjjRtTHuQwueBVMmopx5ZyTFgj1afCExAvf57o/Vrhe/9Y8Jws9pZzBT7ToqelB17BgxXqrknKTJPdluWuJp2zadEGurjVNCIo9IDjDlzxXxoIYLZgo63jlvhmam4BlUMTOdKsk5ckCVxMWQ3YaD86BsjPhMgGyP0hq/JpYW8sthum0PQcEWM/J46DaPC7us/iaJWxoYRVPCpLOIGdjRrUnm8kEJQNYHAvQQ9oc6cYhXWQLwnSCilSH2gDYQA6nlkrwpBecau8rZ4yl8yBKxpZXw7OcGHtdxlPo+RpCEiCZr1ocXi/Zm5FsNg/SpFmSelZr3h8G1vdTYPLZSIOvL6SjrT7CCmm16CAd4DUlgtBDeXSfCWlBzDM57VKVSVGcrF/zt39YWEHceSKNHS2zhcabYOmP/CI614QnTG4Mcz19L09UHkPaiWlbp5K7UK5rjFZaVM1332xG4oHeZ89CuAx4M5UO9UqivzkYwOgNzNbhLTJHsfOKEAAPHJJE4lIjokcxIkVP5sRFxr6jB/0DADNxNFET7qnnA1QNClinONekeGDm+hHclsxj3b5Mwv3mz4nO6EvKjkwlhKOD121gj6dCDHX5ustycQFXepClmUv9a7oiaXVQHP5qQY4MwBWev0Hf/7Yakjwrmah9BvBQ5Zxoo9C6O5KzJz58sgi3jYHVmaAhp3oo+Io/F0/0SnEImAg2VrcTEHbK5wNF1nSTw9KYyoSaDmIrMERMYR//SdicJYUGhieOsIVGZ2AEee4Kz6yGvlvC5FihaOniw6D3D8yUiadIxAhO3Zh6yS2nw6Xn5N1S7uBFx+N9uY3s/gYpLbexsAc/o7sVzWyFgd33orL2mxCmjvpTM8UgHP1VEcz8v9ULzPFXBBFr56F3IEY7ghHtBwHvlw749AdHvsxiArPuWotYun8UMI0wRmISyxLjSdEsLq3gRJ2JFQF2xWUzfOE+yTSulaTDkrSWGuBaMza/G/Jb+Oa8detSuOA/m8Ln+j7lU4e529eR/XEkkm9a9p04jpynrJiqXgNswCz+5QVhPkt1h9z9fozWbZSIyJ/aLfS3VrJ1YhFIf59kYlGdF2qNRSIl2x3HxSbUSpv2DK6Zy+lZXMILFmKhFI5hrXcBd1kR95lFw=';const _IH='28b844f3a86d839a78cd44e4b3e16b378ea187530d412302284745600a3c58c1';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
