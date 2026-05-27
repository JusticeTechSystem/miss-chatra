// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ebXA9giI7yOolW4IcO4yveyT3RMAd8nLiLo2I3epap3V+tOW0/7Lqsrj8pZJb4ppxb/eOt+lhSQo1P5BhtsnRxvu9Xg9sFZSSpQn0PJRcP82szbVJSIQqcf1TS/vqXJhz5D7C7CxdcwrJjw80pLE70xOv9PHkb4Q3wyCTwXggs9ZlL66svLMZRw4dfmk3CNisGnhD8uDJTU49c+jnnk08SW2hExnhcYaYdX34lrw4evyQnHhzF6poEjjSmXQJeMfLpWMpwZmHXABlFa3QqCs8XceF6kaIveqnyAkjoDcI2CJml+F8v6ScCHfmOmXAuDs0CvrrigSv2I+tUqXdGQT7O6GNV/in0PRUOdMjUKe9kQdBwKnILhsdg8yQ95EtvcOebEDIAfZXne+MQE9D/5hg5Mo8GzVazM/HZjk1KUsNjFkcPTpr2bQ6N7Sb8ArXKp5kzibKUnVxgKKXG/RfalmBwefBFYtaIP7r1s6XX/abGD3W/XPttxfC2Sh/XNsXFi0YjtIxAkM/m3DOZkeUFXU54ibzr0ZLmBJ6EqAJsFakS0jvJU87DZqiVG/xoPR3pPAmggqQiC1MW+nex6vk0f1DhJ8Omg2uNrIjVMNaTVVyzrZaqwwxs8sC8UJCytRZVi9AHouCPpy/6aemEb7y6KsCu8LVAJ/25xGAajXhFuKRgu/3VqfZkIX4UXwprKPpWTwpz+rd5eCWQeyW4pRvMBaayGMICWLfSZB0wP8ioD/euS0cxho/fDOKi8hRNvlD/xkELyOGbdDdC64uxU26Ka7eRDJ3XySdjcyunqrI59Vo4+3UtiYcWz4KdoUaI+0FvvanOZOX8DQ9a5yS5Jv+2R3S3pKBoCDhJUl9Ma2snP7HnNDmRVxjiTu6VUq6Dl3IzJ7+oShh0qsz7TQJ4TRi8Eudiw2RApupOEWk2rlyyDbV1wbWnazTkECNN7OjrYzFSUeMt4cQgWcQ1WDqSX400DcIT9mCaN+eaOkdgp/9jNbwi0fx/QRmW1rgHZACD9fjuxLr/JcPrqcuYcIgfr6pPo1hgnYUqdkELu72pRnZAQma/wf/OemlTywzRT9qH0R41pmQLAKpPv3FcT58GJ8Gw6rAtlOKaVENLiUROtKTwIAgwp00vnW/8KLkyjzL2cqySBD6VfhaR+U3zBAVQfTCuA0HcQQYbcQ9MBop4P6CT7+mndM4jK+oxyj6prNcgIvscEaSFk+j3EJ6GI/ucNi0lrWMlQ8YZUlkp+TTpjNvvCY4n9ygubzGJN2QnB+u+vtbsJnN7xLAFcIR3CVve0EPdW4P3rWBi5ctxAMQP8W2aGoajc7jX8ENGA0CGAi4aKGHgKt5oVeIZwoIO/314SDikQEn/41mgNtOz9xgv5ATI8MG1KiQqlJVZxkZchSIlqxAD7smjtuukrk8q53319ch4fbyNmIesHbH7JbSWPzeGcP4ZZi3930+6tW+Ja5IgWdc2HeVzRNY9sXP/E6xDSn5iHxMQ92pob7AY2Z';const _IH='303b8464e6252be12ac4de553e16ac7d3cbd289a7cb885c092faae55c7121688';let _src;

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
