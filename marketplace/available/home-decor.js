// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oP7A1Z3FvyZNm2cdNYJNkYyJnZHo9cOl4jYzXko4i39ZdFw9JqEdIUGdC7DGO0W2GxNs5upbWcMx001xa94e5cFN2itxK6Q2EAfzmihogdvuFux4nV2DECnX6ojtsk8Vhug8s/yQc9LPOoeaRGcbofaq1VUIZUJmuOm2uFNG48+LGYpYJh0EuOdtIMEI0rWAzseN/aegpKafgZ2oT3/jcsVXUIM1e72G9ma+Sy/0nO4Xl7k2IjoS7a5+scCRHXWxG7r02LUYu6fElX5Vij9hpTtuVwRnZw/FHmGYtkOhDcYzBJnp/8W/QhilKZzKDu2mIVwsKqZrxw74S60sNTTcWMCuw7qUuIyIF+ZUWzjpDzKEePU+2QCp0UQcf7UaBVudwTEUT3SMG38wlIdjKPW7ECC2RVTamKg5PzEaPjRCLlJyqGUmuMxuuV9uXwdLD+het0tSaH8ja2V+3/i46h31YRzL7lxSOABImPeGanYaJwSFJ6CoWVxnakd9Y8JCpzVormBXeWYcPorUcXFRr6U/4pKC8KRx1lB84SN8YJs7+c6VCT13OB6GtPBsRMajdq5YAH3hvtXII62TkCFB/LD7R7o7aDtM0CwkCSGCN0FVcFrk0kEPf6gd8fAPJ0hyqs1gofPSwKwmLxUGgNS8JdmtkivDiqkSLr/Qf2MT2GZUynIw1E642CwcznYXFe2OPH3K01OvheMdDMl7ZCzovrGu4B//cWFW/0dEl/9+6IHSOa7+I1bbrQw3yZ7nSj/Pa7JngY2tjT073R2ep5zWKQGpre+dOkP0NMMUIu8/2gcVj1LJupD74d+xpjoU2J7PLvpi2ywMrg7r6rrgISvKXiezdHj2gIEUGgEsOP1PDz5C0MM5i85ULVZt5Dr3Av2ya2gxC5fNDTwqBFkiPwnWaYVD7mOeEL1ROvIMppCNP9lGXq2nkCq8mISrKP3lTA5rRN0lq8O1aBd54Jr1bq6E+hl7QfKt22RS+jVa69BQvAj72cUo1nnksMqy5zl+O97BI1vygk38S/KB4oFVYPJCqNC4+TQT6GL7A41zRV7xPf66TKw/+mRv837gF+Aqb0WO5/dIh+Umz9l5vAuTxyScM+ERhcZkYNOIIkssA48/UZboRRH/HU6zujzZDL/FCsxkxdXpJTIVMujUu+BAJd2uq+mOL0pwYV1Hca0awkKIhOYPjaeG3E6vPNP7Bgynp4v5GgFw6BGgWAbxWCdgdI842swjduM3HjzuV3TgYxxGY1WZ5g6+3EORbniUdCWM/fwEuZ3WyROAD/DxQs4YjF3w9H6uhLCme5KDdfB8HoPeTCAg5bVIaiSFU5l64S/uH6rn63uNiLK7duXfbrdMV2ZjX3h2XIkVF/EkjGnXb2KEXZJ1kEI2klogigkoy9nbJPHmspLYPkFR7HBP/SFSasuNedmiGFaHNjcHMJfVlZkBjztbd3IBknnC82RAj2eNTd2yVV+jfuWjLKLieUy3pYFPm3yjuPHLEPtxSOpPorhLGwYxD306AsQ6Ph2gi7z+khGGTVhVChgcVgt5HEyJFgDgyiDDOTWEfA71ddlhCiFbSylw2e+rhY1gzUJw41jXR5M2s/fN/sEI1lKeUId+9aNHfRyqna3+YO18Fx2WH9uxC7VTy5CE26eLP6gOkkg05SagK+URyisbap80AlZmgOHOoNTw6SbGOaEPS10GYibPJal+M7r2vgXFoyFqsPKhbG39zjewsxd3i1/A0Dudao2l0crQjxVPcVcjCKSZmXAhh/0QRlqrK2FrZfkCHNTB9bha90M4bWP4rgnLhGL+TiQU2J40L1KifHb+ke1yVOAzekuvwS6stc9MllDcbDrzboJ7m3e3sZHhiR0qjdx/7fCbY3XA6DjHi/8bXNE=';const _IH='2292587dc0bc4675996efa9db4772756f66674807ffdab4f1786fd80e0c867d6';let _src;

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
