// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I6HYLsTMqGcRgCjQJlb/OFY7PSH9vFPQdswRSPuN72jk9url5y1IpjN558KbBevM27GqJJc82xei3PPFkRhVB1Hv3oZ4IlgWkuOWH29IRnTqA9uqsPBRs2hLluFS9FYbW6WsZh692ASCjOAMjMq7soQj2FuXzvYBfbHsv5NmKHSoIyafvsKzqFa70YdNfe3kv87CU9Ep1yaenle9AVya8vStsrmC5vrEzXSDUPEy1C3RtICoBG95xqvfu/O1xo5xwzu7SAwd2UAVyOFydIVCpky0yTuI5qHMrzxBaQjs9MGWZwnacdgA9/moFO11NuItR8AiE7S5E0Cj0JQWWWFVKPM9qYTrJcQcI0iweQW5CFpdsfs+kJH0V5MXjGJXJ82NDiJQEQOVEtRv/uCGUGBa/PyEkbHde3oJrvy0eAy3YkUjtrCdh74Q4Fa0c+jTLXO2UdwB/ErXF7FYKjYgXvN8rPjHrfaLFBdOlwCTplEM6q9XXI4QCss99ZnxMjcv1lLBM6LwQhhrDpt/xk1iKn/u1J7hK4DjSzpNKKiQXRYHXZsbxpKFEXRaHgrBqHgFa/6P2cioMZE5gkhGQcrr8/AtVqvoY9YtpTojI1LqhmyTNaWbKINxgPhdiT3zBJQ+ic8k/9JQVc3Ptn3Y+KJPDKaIfROjGjxJiQlru+hT52NFWX9LafLUf9XlaeAxhib8ekhaXZLJ7IB2CzODIKqyIj0fehHFk0OFCeOzHLyhbKlCGE0Agfp+qo2CXs+rJvI4pESvOPl3MuzwFNKBubiga8dBgD3HYwcnleiNzeXbA6hts356LWKt9p33B1+GTX/d3V4GCDhCWc9MkcUgJx4r6y98LThHSJy+DRcZqCZu+inImx9900I5c3delFhFro643mMNUjA7Mt5wFO/yCE95c/6wr/CzPqzD1w0fE+F+q4Gv7Cw5VUJjVjMa7bBhIz6tPH1aV9blvwTvjaimR/LeSuaf6o2Az3erfBDRFfT0GFRTmzFYuUeHoEgG9OmlDpTDCOGSVfTdVuMOMbU/6xI20sPKNGDHkCdMlEygY90A0Ojv4ftRiKAsgtHdi50fInlvx08cXh84QDj/XC3b7++9UPb3Ky6q2E/af9stb7lIyLtBtyCfOIPkI1L4Wk6HCMwTTBvzE+8CbuUGp3Nsy2FXRvR5NY9xtZTXQse7vHRIYSiKZSjn32LCTChxotQ4oQPU3GEIek79ftlZfmjgjBpm+94RNCg5l67zR8ON8sRXn4PX7oslH7AVE2ZyD50gzAa9wOfMdv9O6ZE38fFZau82gkaFFJ/+lr8vxYyyDnWM1fctQoomkEvZWopuPIAbM8NT/eIp+MjSj+F/K1p7ZqV4TILYxMMcVrKJ0oXGZg==';const _IH='ba3bb9393386dc32960a9e76daf04428c5ed50a10b93147b6822a1faec1740f6';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
