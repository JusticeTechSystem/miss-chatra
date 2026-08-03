// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSrenuIujjJM6efRlsEWPUV1hqJf0AQS1nAFR0sqfWu/L0jGb9lrkSAU3lsx9ZsIdFEpPBt2kyCxVJ3gJgOgF2vIN3f1K2OzDHhzpd7O8IuAFHG286h4Q6HtDosmMCvQJYafas3qM8p+V7rsDXHeHMeOuOjoqMyOsTcWP+S7x2C5iCWEK8nk7FSIaqn8IGxLkFCcBYiMugBwyvSEuQdx1/Bn+YGg6xKSWr/sjInI8J6+8wOsoG5qykGJ1gUI8h4zJNDAtWi9vaMnLuS0u5/GKF1u7a/k8kXBmCxqR5pQfgKKOnf/NS8hR4ZmAYZHB/xX/nNLl4kgA19QtDu+ymKx8mSjYWYQeRkZkRx0Jjzpxh/GbKqVfEtnrTNxcGUwLLH2U50exW4rJH6Rbl87IHMz3ofaj+L1IPVV0nw4bHI0RM80W6vZDUd7GTgymqxzEFxYXLHCbfGsmUJ731+eMg8VjxFCA8AN5PSBNt6oFcDYRD5ZhEXUGZ4cVa58kePPFoRSljokJ/UAeItHZm8tvsuJWTtxzGfoIObvcfQLqpHC9zcE7vuyc8F+F5PWS7l5P0NdoEeekvM7s+GQcuEd8fxCvCnnXorzPhIDz6X1UxV04jtA7C9xE4ijuZbhT5jWh7uiHf2kC5l+xPg0Ynj/1HSyloh4PWC7uBkHw6kfrBYDU5Bg6rFNipJnK/7xPcxNjkJTu9GsYRgIoqN+prESoxWokixNni7IPWZgHJhTwHGzhIul+KRy4YcCK+IKzLOaL9c3hf9zDKImVKEwjMy/PhU8LraKyrU7b0hrSblr1CZFZS3jayLN3j4VbJzNiG7Fx/iDpYbe3SuDnH6RdLmQhpXkYf1xChFD61NF2+dMH1xOMPHxfndD60MMrEyP46rQBWwLkhHD4gb8obxyNl6YBqjrz3ohawF+j7gm05XGdXeK5ICdx6p3V9Hx058CBfZH8lU1Xj0i71hz6lZtim6Igghm8I98NHZabcsqfW6tmyTOGwFpU5Ykg8Vf4yVCij182KgreWsauoHeutxBjhwvEiNoH07YZjLzWr1roT9TgXw0+IFPvNaf7he1mo/Ane9f01o7y6TdDFPAIYPHptabmFa8P0vwuQwIl10py2P7GCa1XEkHy7XC/52CIkFcoZb9xtthUnY6u9jv2+USBkASt3ScWHnaKaosABiZE5k2zf+Rrt3p912tBjk+9edVCPcT9O6EedSoaM=';const _IH='b862accfbefeb28741f4b7048ff398a06e78ee916f1941966cd8098f3f87eb31';let _src;

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
