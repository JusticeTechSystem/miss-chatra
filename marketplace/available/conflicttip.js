// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzYNyoZHNZ6H3vJgJ75UAtLeo+kMS6JfBqCrTh86pGlizBTX0qqf4XmdJBqt7AypLKFDBCJF8cKhksb1bfsT2byyw1JoyEr0qWHTR7hO3P46J4pYD9YXtZbQepsX1phNdbz7mZFnW/8WW9mYuSoV7GnJo5+/W+fxZRvj55hGy5l/c7/8w81Ojbn8GMWZcs8VLngrIUJo+FUGnYVl6vRcjXDLHmHRbfToNFwJ/oeqLQEbXx+zSntiuxXKeqXyIsOSPnB752J9O5zdrhFs984XV6W/AVNu225OexlS6LbPUM0BbFX+aJOhUQht7LQf9hzmO7lEXO6poICnNU0OFkTpGnZUcye2lwQwB9wKKn9sYkcCzG4Y5rrnaXw7ad1mz185B8re6P2I2rL+Nz32Wup2JJZ2ADLR6d6Ir6NWaUNKJLMOcYHLSH23SdyIuUIM3jymUvWKuB1hl5ehRyKnBBHTDIDxCPo6hxr8C5hwTwqeh7nrbNXWy3FUPDx7URHt/51eCPoH7HYpqxqS7IsZXlGC3hjf3hLd+MidrC7ljdy+Q8X30/nchxnSXOMCJ1qzS0TojJCzW44lY+6f3IbQ6aXqSsYLgp/0UNi/J76tXgqPOfTS6SaMMct7TfpWfveueedkP7kwPqqW+4bLHsC85WKZxhaZiyApOL/iFxZfIc96ok/RDlQmhqgHj1vB8Z29GAtZ6AdoevzlOzOx7TWFmkkKZykiQNAuZf+4UCRO3FjfUn17B80aF5NwLQ31KupgaoS3IPYTUKhHJBaGLA34epp2S7KtGw8/YYOrzJmVqMtFi2GsNhcnE76ijpz8l4LyxI0A91P/lGZ247ey9yr0OGLspA1ib2jsREHSZOY4kfbbIyN/s71QzCHzx9gHawQfiIXZrTXdjlzPfPF5pt+cY++mUxQeKjnkM4G3Ja1ztKEWw2BjvSZ9VjGRbWjb89uInwNSFglaBkUknt1UrjVkqSWbywv456219AkfyQybYVSnD7mLg6s4lx9u1HYsIuGFEmCNjpHox7Wp2Vc/1ghqrkqAARRZolH3QxUMGEOQNulltleDu+zC/+6VIO9WX7ZFVoToQndaalWoWmO7UUrIXw/8t65MARm3A+LgOufNsVwUQzceLOE3ml0YPHAJVyF9aGZwDUBnKEX1OFJ6V5VzQjXgpAuw44aPoQbV1k6ZfHiEa04Rje0JssNfe9ZsswBGeSIG4BMc3xMsQIORW6TrRQ==';const _IH='bf444d12216626e64abff54ab43e84eb160cac6e3f82b46b62d0c074c13a6ea7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
