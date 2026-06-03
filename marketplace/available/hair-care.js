// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jQmxpArZWPLk/3v7hfHG6ywTdjgijGuW1lEhsfBdnW6s4nrIsIw+9AIz6fHZ3EXdXbPouA5tNLb4cSDhMeajt7We8wxoMz+4Gwtb14Iad7L6KWW5hBxcMHIbLVtvr34bh1d6ihO+ClIZmRKrHlqNPodb/a4nzO6UYk/JCjP1FIByLmDNO9M/2h7KJ4NSGlUXKrw1mZ5zTWTOfeTsHozh76FHFtFNwiFQldNVM3QCIXX0QwG9CzWXI0bra1Sk8YIELr43BXkVQsk5Man6LH3G3xa1AoZvNge7th9BxF2WN2CaEOzLxCCQKAiC9dUK43E0Gv17brj6H4K6aHfXdVCKgc+fTymavCdbMs+ph988uljUr6F8L2dOEgnLDCWqP8/yNpdlDRbF8dcIWq3BCDvySxKXH5lt7QwIuvF30CvxtHQragOmUDV06h/SVuDd8iSMrWrwfce5x2PEyHVS7stz0TUF/4RXqQ+nhkI63uyoqk90PgwbC0S8KNayHGRZ/pAU62Z5zElPTqNLVGt+pB8B6f+7gdqI8fYm57Teud+N7noEvJw2LIygOSs1y7/fQv2Nif8TST/fNCCe84NfAMiLFdW2EGBB7yv6i76Oc3XOrYAaIfyAZCwWLHH57C6aKPX6pBFS0AedQcxj8wKXXOA+pW4t0zy1/6dg2iDHTKImjtgmb7ZVJZ6ia9F4IwHc0wgoCer+V6med0HvJTti0/DmjwR2OQxmaLlWKVohm8GoVsyU7sLQWAi5pMlxYjCNsaUbO64miT+uo48GnWdP9vww2Ns2j3dbKxTGCR/+h0YV/cuLYqQnhZuoACIqOcjj4i0rcc4I1FEFmZI0xAnFyVkcE7wzZcQmVXDj+w/tYhRPz/m3+/1oE3vKzh1T5wTNBOY7gVu9GNgBal2PYrHg514H1QZAgdJ5vArz1B5Z1sl1qBniWoOjzbZ5L9vrebfh1Cawbtcm8LxdKbAJd6PpVr8NBhMTLtNAMymB5uw3tNDaeEKxRGa0V0pvKP9At55bLnOGbePQ2WWaVI36vQBKQ7CmLBdHURZCvWbKCKUFuYWyTL/jEOumTfn+9lQlEZp+DAPQCjueGEBp3H1G9GuLt+OKEHfUrUD9HilajxnPm9Exo/ZBcZ0dILKXFaeS3OvK6xVYh34b1WhCG51LHHtbcuIcoPDRVSqfSuQYYfvstWF/tUkj0u1GlBhh5mq5RP0e8oKnS3dJ2Q/NYFVTYYFIg03Z9URCo4mJo2+eh4LAq13RCxVjpAsZPIkhGeJye7Tt/XN45LsfdiggKb63OCqcVJOav9qP3FkMQp3k6622jUCe/EYOPurcuiD4uW9s9i/69Q5pc4O8NPSsfLpeXAHveaZEX9Gvt6ahayQo5PeX4fDudPIsKZ+MteiTcUjcvYUxIiINttczSOCryLosI8Hjh/PO2II9WhVmzub0mWNQmXzrGbME/mkyz3Wx8fKw1AMr60NTFMnUUysRi2IPgRyXAWXq+Toiuo81TPwKZcb14B5neoqcBaPN5OkGYqCBGvirnjwQz5lRVKs3XSmOKgdDBDgalEUL2eV8G7xWjMrrHugULUKbBEOIc1MqeYDwgywxWn67Bc7R8cBLmSAf5XoOcMdG5GdnUo748SntQ5DjT8/4VhoHmgW47W2+n/m3H4wJc3Et3Z/kHpMcuYvL/zjh0bn5mJwbPAiyFp1dusFM7Q==';const _IH='690693e4d6e9bdcb82a8aa335191655767b0bca39658306b17ed6c9f0d6d0c43';let _src;

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
