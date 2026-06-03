// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oRZs7jVSf8DpAg+xLrWFLmg0WQVXbf8qctrQsO65WchmOEdLQhIpApD5O79yakMYA9i+R4FbFIp7RTC6uBQa6Z+KkMqascgzStPS9hSeEqjYtcbNzAeOYJsSoWT5pf+3QMvgU8vsMQHGQ1nSlQshUbqm1sB18pdtRlwErgEXz3Euyf+IVNw9sULs+vF3PE6st/Rcvra4afjm9+3kZ0jZyRtKHG/1tWwXR01KiVUtVNyEJYbSzoaMFs19Ipw7mxuKnfLMKIrXvul7J5DVFGk9C7ZpOH9SYlxiZMdLSBJW4xIKT7+jo5nKYIOWvdtDL5/UzIQdGGO3bt4kmvSjWV1bEVfdFPVTx0+YiktCqziNQLeNHW61/+tZH55tcBQtIw6wDivc8Aq2fvyvOMxWo7j3Yboy6nQlC8oNJnYOOYR2KvrOgq9bWMzbMaujRX4YzEfUgeJwQO+jg2MakwIIPvwWqNvKINRF/dMiu6uZyl2d78npc76dumIuNs9VpWEuYCQkDyh7vqEPn0OYtreNZFQgJSVnSuJmFFBpoiZdBpQFZ+22gh0cnXo7uJeSkPzP20KFqC30EBAPNlefOg4jcSrOOI8I46QC10hbqwcIgHZfUx72RZYPC4stSU1L1cEOUTeHew/6YTNb3sFQ5fwyc/XpEWzHozs/lNMnIaNBl9/2m1Cfx/A7euzjPlKxlgWKzog0F6Gmakgs0nPQ60FvKd/WltotT955QIQfAs6y0xflfokDlZDjiB+nL8e9saBwWKeXf7bw8bZNM7D0pOynR6k6fcRfr0ViHtfaKGno1o9FmwXccRgz4yDiACLDz3sZxuabLf6PJo7ByqkLIqW40PxaUhI+s28GCHBY/GO7Iw0BgpO9t9t6HQ97RFcAEkzBdo+ysn3tXIU+iBhD9aOi9Id0O9yViviAEI3hf9a/wp8FO95ywh889r0iq8VnsE6+lm7VdMdHqZHhkahLkqndC7L6MQOv+/2RMUjW';const _IH='2817cf41670bac91a63ce7bfdcd132a9b0fe82b3440791036f87970996773d60';let _src;

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
