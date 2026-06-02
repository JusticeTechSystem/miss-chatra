// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RI15FV7gQx1Mp8MObrR39LV2hYb8Eo1FpQtIzgecTw2FRkCb23y1zfe2KceyXBrSh3g5FOOt7FtahCcFdMEegsrIsQpevDSojJjUxdleJsKlYYbxcRJFgb2IjUkdetS+ADxWou7lnLNOe8OtVM3UhW7nLfINsfPI4R7on1riE8PhD/w7QarzwJgTvUy6XQtKRK86l2Ix/i9RFxynaYOx+MfJWJuGYiND2cmhP+YEK+4nNpxSGfuWIQ3B8IbCCT92T0aLhgVi9Qj3qAXqUZFk4vJqtAHphMZWNeDzRHofv7FuHkhs65Oo9EKLmZFhjCdpQ0ghnhwopoLwPXz1ucuTZetwVr+pgzm8a4c+0gZxYUcpMz8ZSW16AWnqvmbAUNuWf/d/adhiMa+1mcTawZeiLyBTgYBITns0H3drX8aQb/G78U+bH8zl/m24eWF5UoFNgu/XYsrssgzlWS+Pv+l+MRbRSFFRp8TA4WCbNisrp3LH522fiw9cOkB+1pC12BErConGRM1C1nqbVn0Xjg1EsuXLU1EMHc6vqDibz1PzzO3cTZAV8XX0LLktpvke6qFJ4O7XHJfpupsEF6nT+2F7UGG+t5vw50/BcV0lgIlN5yNtua9gCheXlJrkH6sAUZdWcNLuIKdC53ZgUEwIxTmwMNIvUFP+r1OtHL9E2HgnP/3jgpOcubSjI5Z5ungONmG9VDmHqluJZduRQdeNO+NPMg3RvLl54eMTj0vlOZ9Xu2puLi0gGEagJhdXGeYtqZ6BeXmIzEFyVsPBLZajzBJCH7Spj7HOjfvxvNz9eBmojAee8Vn1S6w3MfptLZ+K3KfLyoWRLl4Nx7A5mS6GD62Y09k/yHkC22VAvRI/x5I64+85fxGesZXBnyfX7EqcsojcuMcY4Ax/6CtH9otJuMVlYRZAodY2P6T+N7Xr3b4NStZX+Yvv7WwntQ==';const _IH='f7ea0717c4cf5535e4149f3347546e51e04c217b1b4d5ec5ce21aa830a956acf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
