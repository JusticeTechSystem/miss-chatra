// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vw4H2m3bSdAu6KWzEu4S7J+ybkwmlkFUOdOxcvRQXYwheE81XhA7JZc77xvd8PdZiag8qorX0VYIwLcpTlqxoxuuSNqKABM1uoOBakW9HcSsC+tcv7Nqup48emseN2p1zEX7f4mFp/KOgtjeypUGgH7e+gdHV7z1/hdJU+7y1XZHWLynD5CFrSv41uxW9I6toRg5CNbK9e6812MW/ts9Jxr/1i3BF0Q3/vltKNGPBYqi8XDkao9uHt57LSyxaBQkspL9yhhBbj6fxDiWY6BoOdIjMzX2yF+Sd3Uk7lg6YzxlipgHLHNDdPro54jWf/S4jsvjfC3g6s/3+WOmJHQtjgGayhip3th2hWeIwfW4/Y15kDHK/sYcvval4o6gVvqcFhh+hDXf+aIuax+Rhfm7VBoVPgfHxzRhI1upPT6/0hrbnp3hVtbUxmqbQzbmhUGLW14nxGn7ABwOcUaNjr3DXt0OoXuMd099fzehESJrtM7J3Ga2CeQ/zWSGGSfb+M9ASMCWEnJ02SM9W4IZeaHpAtHrnU+MfLRgRYTRnmcpaV6w9MZku/bLE2xtASPKxOkWOtffwyUTxr5cuucFLz7OkN+zsvtu4ISt2Sa93/ZQvc2slZ6dtd+wbM15ye8QVLd2/B+1Y6BbYPQpPD8JuiSSRhgPREeZYukErcts/hCtDUB5adNq6gLvsdBBdjsJXkuXSDpi+wHgSinq6ClZ95YxnChDZXbl4beFeI3vGwPHfzzGew62hNkRuFyIqax76zhfKJdVSGOaVKIy0V1HX/lPIOsZA7RLPXrkzP2EBUS5DN/RbjVwf8lqQ0wIeR8Qr8NGnwgX4JuvZLFwcbFUGkmcJqI+mgVCKKeWms82BxQRmHyNqP4gGQ2BC0iOcUS30VOGqXPp5dhsm70KPYJMgFUt7LhWHMvPGQKWpEqwi26tF4yUxQVJN30Hqdi65LGSj6EdTSh7I+J2y/+HERZsYC2mniHan1hNjFK7uqNU3thxnRmEp0jI4PSSvYGK5HjMcuwzMTZABnFU91wykMkdSVIKH2omGlmcrQ==';const _IH='bd49b98dbfc91befc059bf5dc372f1f259dfc9c7aef9bcf01a268b5fdd75df63';let _src;

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
