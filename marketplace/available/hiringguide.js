// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qZlh9LXBMn2ayqGbiiFJG4TMdbgfDOxHCWAIcKWVLzjwDy3VblxQTgXK9duBF8h4O/xVa+NoJYuwewcn0tZ5w5ZsCV+uSCU3LDe+DnmPSdfa84g2rLSAhlQRs+ymgEp1o/wiIflSPirYYTmOD/RggCfcN0doPZdJpNag79cSrT4B9Oz7QySiXTDQ+bzXi0+KwSeH1Vl1WWfK74wxNdSfptxPJ4kSzWMfbZv9TJj73xEbNFcSBGScz6k2TMo7nqHg2Km5329z/fGpvYDGiJXLU5AiZDJt5MV6NdlAQ2wlbGby5uozH7gKUmr9X/DvkM4dfbYWEOeM5JuVoSiSSmFYcAGzPp0nWZMC6j38q/GbYgknzpV7U9+1hRqP5kRYnpDA5TN+vKr5SI4kYykGL41J96bKW33QabAKbUDQeokLMYN08QXmgNFI0IZa0jJDPILUChca2lM6e5P6vm8k7usjRb9Ooz7mwvVQGuNUmUjsnOa5O0N68NIjTR+gfZ84A3HJtirfA68c5PdwTOkLZI1n0OVdtOZhXCv3XgEIyg0xLJ6bfRg1FzrBcI2Xw+stPLX27oWt7DFHuFxNVR0YRMRJikB0+mKVsduSrCLz7Vmpr3rcYBUjuvSBjkQPG5itTJGJiiHjVh8ZGfJ9XjedfBOHvV2DsiiEVaw9UbFxShM8bNmeRgnc25s4wS2UdeMd0NqqXRWQluTX3m6w7FqW7FBwWZiLvJSOSs/N73muawnblh4r/v0w+ax70cfaGQTFFhMoaDfSzsPA/bINdUvw6InciQ3FPADxE529qlaWDmH9y+yqv3jhpaeFd/cxQtowcnEXesF+fjuZd/oXCuxwSt08akuw580zSCsRh2RBCTH3mARulHgUz1iGOXLOaftzduiQNXUZ6XB8+lE3JEcW6EeW3UBQP8eBEjuGShf8mACVkUR/nRMhGKTKI6T2q8c1kdpagiSe9Vpy2Y1VJhUahxyOyPvJAKg6J5Wab8N4MIVmvnIWkAy5JTA+zjBZYacd9bV2GBrAKYyfpCZ0ruwJ0DvhgSan8crPquxE3BEN2cl11Bha3p0PBr9TRe4BWjFDQyDIHYljKAyGt1BDtnsKgTkPtNHBYqwNxeAtKmDy0wnNEFH0DZwFcjjaUAXduKUgrCzKJNzw9C8/ZSISY2DKdjIA+96ZOeSFN/xcnUceHQTl2A1zM/rEr62MeEpz9AaehAPaQQ==';const _IH='d8f532b5e87df19f91fced924a43aa6f0b92e360c5526520d4e11a9b2016eebd';let _src;

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
