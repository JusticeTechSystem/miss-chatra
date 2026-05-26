// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2TwQzx6JGvws+F/G919BNDWU9ZEFj5f/E5jaF9yUnlRD2qntwqYbIqWRUhDRjwycfxASExKXY2YSKKje2zpUzpdAskGxi/7Y5jGZf6cxd/bFppitUxnuI2+pGZtpEYg3ucvO2YJx4+XaAeByt4XHXQF2zHUeZK6eE3tzF4F7xwL74PB0Gt/7beeePbKLib0X7F7sx3sBl9YT4KC/lhxH1X3bvXtJwlhe+IDdGv/VE4vuob3JQMm/dgMTnISRlehZf/eVtAEb+eHUDHmtCDyC8X76X1ZOfIaf24nYUfd3D7CLRShHWgc5T/L/EPvDdf8Ia8o8aAyLa956uuCGD4FYafdJ6uQpKNErkn/LauXA+R66JWvafdp91C93jCY3X3jzOhzlCfJ8XVRs2wHGSnjAGi93pt9IBR3Dla0iY+ftAasIoMOBr2sOtbxjCXCoiorRm196JJlaVO4pAUc9lZ8VBDtdZwFbA80IEwVky3cGwm5PlbHHcFSvqvoqGJ22WCoIA992vyuJflKLwPQplEH0ovzGjHgxEQTxO1LYU+KYvmI3hrDgIiZmlmyo7G92xzwIDr/syBs79/gREKirseI8G3v4HM3GNKNQbMxT9hTUvPc/n9WXp2TyKNr/ZrScd2yQ7rvl5HvdU+QIB1rzj5niJjfa9LAdG10Dv6oCcnFeEAaBLNZghno++QoEl/xWvCnspStKiGu34xkpf2MzZpJC7BFphWmq8Da432vHn1H44jiQikVHrvtLBFfjMtPeEzzBs4glEU5CtP23Ve7dA27I54SiXDtqC7R0GEjdC4lqN/6Yl1EJtMUTGB7ZGTs0JX4wCj0SBge3gMTqoAVKZsqN8aNSDtvXd+7Xy8HzPby8hXwKgQOnBRsAvi8PTz7zG/XYS4dCOBiJe6ftle0uhfvhG+Pq3d0tcYuq4SkBZxGQ3oAylRBP/h/GGMVvsgK9HMnV3oi0MeymF1APHtrTpX6SIQu0L71TuHO4ulvW2Ds9Xzw23GuMAFzoMZB7';const _IH='14a82c560a31408689ed15a4b868a3d5c83500a78ba8046656a020b1210d95fb';let _src;

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
