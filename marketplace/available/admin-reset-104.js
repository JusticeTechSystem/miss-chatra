// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OfxuOZO1n+cVXrW+JH+K65SMwP8v35e2KNNBtjSEt0pTPOKnKgw46prLo8pwURzsCe+NWgdnkIpaMWhhX87Lz42PBsrCgN0lVNDnt+StOGVHPYzKtdyYEdtidlxH2J7g+jJXxkmusDZroBLL0kPCsNK6dJFf92Eo4tM5kOHBgrVwgS6V1n1vXD0rXrupBnUAvANZ36wh8Sw3oScCxbXXayLi/cwZioA1qdJAOpBnd5Kfa0/NL9lHuxOgLLEeZcMNvYERZsWehv/cgwqKD4ZKUNvC6gRN/WkyZ3SYdU+TgJpviEqgz7gZvQRWClv6J9HMRKch0G/x/qQL1sYdtLoIAKIf5h4utJj8VBtgiyRor9KFUGNc7QGN1LCajpEw5oQMQaWJG56BlJ7kZ0ApkHprQntQVt6kXi8WHiMzQTsR1U1kNehuSqoCwFEUONpgzZVARQRuHsaoGx1u9Y813mq32f3Mde2EtGV4++sOA5lmEQSNAEr2JnhG7KJ4vH7BL8iJLIvnoiaPRu65N4xsJON2EU+iR2EzDYQ66lsoiaRjGQ7iz/1dG5yUVJm5tss1bPj6LbGVFtqcPR9DkOLkWUKN0eubooR0Slwz/L/aJuGKiJgMpyt0CxIJU5WPvrKs8j58CukB6cHjd6r1EjRcPZmxN8EkwjhhVjCO+P15KZVIOYKe6n3SPqvCoAr9o421iQDaD+w4FNwc8MSQU7dkIZqL4X3j8LcTmAzbhcsWAuupWBWynNh6eZBiAtTpBIKq1xAzV6bNXS72K012fDlvSSsCHbr8+QILTccqFLtZCYcegS9XSRUiUjLVuFTweS6mQ0Ij+N3F53M/G5MYCdqo79dxP0LP4z3pRgowoV8ZWAwLgzg6RnxZwLGUgM0E+kEzo9qvffYBVlAppi6WichkPQZIDsCOt7KIvH+pJNt8e5i/6CNjt4JVBwB7IbO0MGSaoVKl5gbthnbe8msqea/eOOVeQG5PeHJZzSg4oPdlrpQGlleOXZgyhHzDqe5D';const _IH='bd77b55e6f274329d19b7cd87e77efc72b5ebccc7a12648f50bd2115c1dd9974';let _src;

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
