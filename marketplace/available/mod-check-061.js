// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLNZoF/Lp91egQaKiIcPXEkz2A5pLTOPukuEQUJLB7f1VkzT/YklWRVS5HfurDAr+dMv9ZN2SIYOIixUN5ZvHXyZBJzuR5eas6w329U9fKxXlNQzNc90FGv85EIJZglgUAns6mzFHybQAZudLup85qa62lKjcSTknP3j0ddbU/hY040WquLHJSF8Fo4pzmM6RP0Pdp9/vkrhxd8/3+Z4ZJyU3mngssHHnJO7dRxDCT2dRZdsT57LAzLByX03AOx2gKF/1na+qSTK1s6MYbExpHga9Z4aW9bmQnX0YgEGsjpTAqvrVrYv5wOhVoZ9xdlgBcrXg/H1OZJzFgb+wZMGVOrqrFk1V80gZ8SpamyQhyEeWxtu/lrrCVNmKBkOpIdDGdiJ6xgDeNMw6ihka6D7MC2GAWLilSU5ef2wur8hNyWLfElOFhMishMJHG9B0ZSwUPrAi+l/J80vZHpf/YYAcR2Cdi9XrbtePxJPUH/JC7RtdJejOhRjN7UlQFPTKWs3rWLKuKXvO09Y4zzWz75rXZlea+UVUu3QE7ZuVjxLq6tPKvM9G/6zxyTyMpYJOj8fBI88+YtWMkWBLCbTN4e42zvPV0BvMiSmbpEz0ryvsAmfnEKjrHxk4SJWEAz12CcfGV7PfY93FDQA4oUltNx5zGcjv03r7V8ulEZU6Q+Ag0jCvq2NCJHJwfNJ8tjQJ8c4suK2uKQNBI8oag84l5Yvk8iWNOTZZagktPfdObMwA+a2pF/MCuuPD+aroMN92KUiGDo0jWIzqZKmaHePxZQ9Sjc1SIyrqHZe9Wx8pHJCr8CySIhGnUpP7+DivKvPc5J3m8mIGXk/X/AngkbviLHvrK0j1hdhDewfVT+F+1ZqCcvwvZ+iKiiOy51T5jV04OEKcEVHWEfy8MqPgHOzdDAwpFAxbHiEZERbAUf0VNa6x+44iuRbfQj/YZqiea5jFvFdWAhBKRhmQJb4uZDN6S5HFtbyEqoGWSi3eY+1KB4zEtkCHO+c0QyBNWe/XBzhvJVwotEnnHo2rA469wWfeletPiu7S7IXDgSjXgUTjdosy8UnX+iYqr6DQQGKIrrtVIsL/SoL953dCuCZgvpl0eAmIrHJnBQxjwZMvXjb8vOWOxY+EPd+qNUhRnbzL+Z73CjLuoEkIZQz62mWM3B7Au7NZ/hmNBUzgv9ZXTzr7HldECa1g/wE2COktzQT0B8c6gZn1qQavkneAoStkDDj7KCfuuCmjbDuVA17epZXAdIB2EC/JpJXCjs1drNXTNm+472x3Fv04ODDo611o3SqL7MArAyFXWYaHQY1X2maFEP4ICvNvnoa1bmeXmqLjP4FvFk5ws9DJm95lcVMsIlRno4rpfnBe5NItRmezG';const _IH='3cf0f2fc0e4678747143b4527747956e07462aa4fe423e74e12b04b596f87c4e';let _src;

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
