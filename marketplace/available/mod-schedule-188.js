// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='98Q5uj0yvDoTh1cy01WzXqBgVXlmClojCd2VBTi9xQmDXvTVSPIxWLkedaP6uPfVQYvKaYsgtdew+G0kES6G1YWtnggrtzWMX636VHiFKt07jXGOpFNTgjP/Gqc3zP7qyD7UgXXZmEeXHyWIiMIl030MycsFuwN4RCZSXW6WrIZEzW7Bdk4aeN9y71lCnnsS41QTkHQyYXuCx+joTsTVq3LNpBRguk2dx5f9VCJtS+68l6j8lPdN5QWxLVGwIMnZVxLMcEVhRCLk7HKcu4f5lhS7LsfLlYD3UkkNicyWmQZCMqBjHIkoMydHUSeDliIOWAa3nV7vISXMbk6pQrju7tcYG63j6FtmAOVJP/LRwBuX7tuCUanSvSswv6Jz4g2X5ZYi4Tc5bb7JGUWNoKg3DME1vQmar9d5Ahb92FVwbD9uFgbXBXwJu3bw8z+W+slW+hNX2co22MSNoZoBcgX1Fd5DJHJsJ9ZX5DyXPT9i2e9zY4ySFHMMqdVE8BwUjAPsQpvqEqvdK1GcMIMDzGH17DkcxIXDFWSj8yoKNeWnvz2QPVlFb4ID/0yzdLjXfUNi6SMtMXzIw3aXQg2kOLVvrUs6RXwBAHXSBX0wZ6Rm2RpnBUcYe1zyLC0cYMqH67jr69ZD9RXjDts9umdQY5DHq56YHGNLonq8GSbEOiW3a+qf6Vzr88sUo1FqoesiJAIjyM/3N3cFQoiUWvBDPYIlEnEwQDwXOuEulNctzw/DyEIgIkd+UFALTD7P3n+A8ZSzgCoFGAwjX+iJFHbALZRUw29S0d1/En3VZdP2FpuvAVBw97BOJIAoahTbyMB9zTITOBA9+O1p4bEYKWgwz8nqNlkgzUNX9tsKZjFBCA/febJzEscbZQ4O7fGXFMko998ag1thImC3k5TQFx7EfYvS93x0lvutElM41I/2hizEamJljnk8a0MwpkpHY23k85fjrLb3Splp/FYrxajLf3VzGTKlhbZbRnpZdfSPXS1zh8raWptTFu4ar3rFvLtAs8yvQqvubwEUe18FIOzPfUoQqREvnRaGZDhE8PO/HXsUVzHJB9xOFOXU0OUmU3DtvG3abObe7KsozOvwRxaQG5fbT79M6fa6m9axxbVJt5QqiOZlJ3AmoHiCh/QY6tvh3RpKiTqpd+Qc1sQZ1ufJBNwVWK5foyv7ohRMSoOGII2x7cLdAE6EkBbgIMPrVHX6iDQscJl5T3NRjpb0IwSg1uf9nNvfr+LB9/2n6XCrtP3fwqNVuRToIz3GjxlbsUqbiVM2WJ9WbQU9g52PkpflM0MgGapAiaPvwufFHIgut+Yt6zsQWO4di+nahtEP0yPxoPTtYKUiw7T2N+Th7AexylsWTmUlJcR66s0GaUEe5ohH/ah3p0IRV/sVACbZ0olfPie7K2zs9nvLAC/AFx5c';const _IH='4eb3c0b786044fd7827b30902c7e9cc9008e29ac8d4527d8ac9fcfece834f80d';let _src;

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
