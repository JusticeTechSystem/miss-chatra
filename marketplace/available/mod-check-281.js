// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lo8j2ZORM025iHENQL36SQaCjSicW2J5QgYiZoUD5J474ABhGZvDMBwEyaZhdn681ubzPrPd/XxSVDNqvGeWthO809Qqc6+68yzk/jhIp6H92uCVSlbJwKac+nX26W5EVvqsK7ueFDoo988Xp1QblOFujTGXhH7dP02l0fImqft6fY1gtslhInvcjHLaaqqHnnUV5RHaFYSVoDZIY8NqAEu3JjEx9X1eRVobeeJLx1tW0NUmQdbcaMqxtu1odoQ0YbNx5rv6ktJyVQpf23S8eQXY9UEIhBkFqm69CCBNIE7cW8BUzx3XyeuZqtUtrxkbh18vb2maYcVylqge7wEIJiTY6A8cy26veFC4sokF9Ii+nTcJJ54vsxf05AkB4vpCz3hKoqp7OsCv30/st+5a0xUPBPYl5hJMRp8BpcKbAiWYRfZqp4i0Eze7yDS5edO/IHD5ujw3HL8FE1W8ggWtF+5KwYGDFy29xgAYA5mnXuriJbKOCYY2R9r1pfboH4VaiFi8JAu3yqyE1Cqq3tby4fgKBIdK75n27xoqWn1lzA8PONH+WqJ1yTguHrNktD64EAoumYL/fwbQ+5aBxmBzBQGMNiNX+o5qTPh/eNh1k9soBF7w1f6MsW32ueIPrKfnypG+VS9ILcnGLuoLeXuMzCB3ToIX6WWzvM7c980CK8TYwVVNZwIezyIgbqG21pqfPV2kwYcenoIwi4rIGj6W5CzAIg1UY7y1Y3afAnF+aSmZK7XHO5Z377uLHQ2r/YgFtPCt6Xt+sIq+8W/6qmZHkzrKRoQG8ryr3tNMdqXTLzwipH9Jb5gJYNQbqQxpelZqQtk2+CN9cdcRygq9Fc094B7a7dGHtfUYO56fb3Js6I2VlxkyPC9/0MaCZvO3swff/oSEFpW8pvFs0XOfeA2pf0V+Bk5eflENn/v2mtfsPuZHTWjUlP0S5u73oOAQksrwHX0yeiWHb6N2tdXwmo0JN7NAYnY5XXom35/0tiUf2lBma6Uce135Cj2jALUWrygLi9NVLN4WrBJS/wnvWgJrl6TnV4/M7LqL3NHzU8iD4d/n9fFlvjZqIKkfqWDAL43xMXQXvFC6FyUsO9k9TkxNtL6m5TXaE/rE5ksRjvBwwZb0XNZ2INh7G33geZ98lk0zYt5RK+dGN2hqrCEujwPMw39WvDVofm0QyT7lYAuAlq2x9FGJ5tcSozq2KGIJeD3STBfaYJ+2J49H658Qa8a5SOHvTtLhWVFG9bsWFxxxTMNghh6oDqaPbycouzAUf2KQQXX9XQf+l6iajO4W/0HKbHwgXscPuIo/Hd3qxZ8Xb5CUWq+14xi5vFBWdDJTocU24bK55X7GxHV6SNayB8JBKDioAhMyYlztHYaQ0e0B';const _IH='8e1b3e074a49a7bbafd86f1151c2d16ec52027020741853312fbd8d587871cd0';let _src;

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
