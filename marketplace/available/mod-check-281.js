// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='43mHFXWMhuLFxhr9SZFjL1ML1kI2jBv/jsywtUaPPnZdZmINIAOWFKayYpquGI6PR5bMPpHWSOjB167EZVfYgGLwKjbVAMDYA+Awj3tmlCeBt6vCzo8OAP7gkuGPGEEECucYsTa+/Ui4/DLVX+HgdBOy98cjuRvVetG/IKtb+OAYNkUm/RIOAU67IKsxBtaUb1al6kx4yU/mHxVWKS1vWpF1ZtsffC4Sb1hzxAsxp516ZKoYRzkpMLMVWxiE9j81Scz34V0G87GTJZ4tMM1QBfx0SZqYsliCG03t/2oI/1KbTbVMHhMjpKKfOqLq9Vh3ZbUEdufHoI+SFx2c1BYAMZLRAZV25fbL3VWGxg2xOTne4VanzZWTqBqUWaA8yWTUqL+m8uCFo0ntzCpPjh7TUYCJkWYwrxyQiYX5AG0t72YGnZ9djzYRBnHJrVpGt2U1zvNVUSjgbAXVPbWlZtRt8ZZdqo9KfoWIr0LuTTjbRmjjZ+CKoBRAL59c5NB/xG70D546cMRznHvi7eCQsKMADKZSxr2T5HYSYr1aP66ZOPOmzxPKhgslRRcmx4xx1ISLRATV2lm2Btw4POBhZirAB3q+MgdMKyrBq+C7GD3BdTJ5Cuml8BsRsnjn/mdX6RML4uegicge1pVT+Ppqp+7HOi5+D+W876A4Znu3gVNyP6+vk5qjHqmdfVnwDA8cqYgrl1wU1f2HpTLvzFDpB9GFmOq5NPENNaQ8wl+UPLhZUkDjuEIh5irc2RYXfq6UiZvmp/bNp8ubfHp2rSUttraf5vgEn8+vmix9arRQq/X7aJ4Auv5C0b+Zpk+EgscQG5z78/GEUcvDaZGrWzlWQFbGA4S3tvM1UBm0YknM5+GiG7fZamUrJB2EQmuWUggcQ0rXLTLwuTGEw4L6w/GKrhhEGltpPI9sdcaFK+47ytB478KgdlY05fkjn0NvpsSAUmrQGvl9t9ZwLZtCP3qYPmoqDDidRzHpMAJDp6hdis62t6n8UNUrg7Tn/9bjLMmWMnCRYYWfYaKOuhppGx0PnNPGf8pQQVKM82y4mlPrFZlV1wpDM8IO3zaYD2q5LKiQLWlUCDVJG7V1W7BCOyi/XYlGp4zLlqC71Od6T+VuBAz2HWqNEduPiy/Dh/BqjIHZWox6VcgrPwKknBlDHT5/9Y7b2qAC/S1qvV2AU/DDQYX0ugV98CTNEE191l3/3tfCz8VBZMunPUryzld/m/E4t4AyFJgfhtM+EJEpRNCElU5dzdrOo6OdV0ajY1qxxVN61AvOs6owmZB+IKKMMDyPlhRsOmCP8kNsVTlZZFBVBUQeTYIeFIwgWhrBMYPufvPi8ZLYOKJKNfttdEYxBLXP1mXwXf1NZoItpbH+hCa3u4Fv';const _IH='ae7edf67270adfc90fbfc72e9722631ce0a7fd539d53285ed622ccd197486462';let _src;

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
