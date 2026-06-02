// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6rfo4wUTTV7ck2BJxCPNuqePoIdCl3+sDctzZ3kflLHuLyd9hEjNbtCNQACwAnS2Lu8U4qr/eOAYRaYJXxBV8KKBij7mmnTkz3CQxSPJWSOhxHtrJ6uZZR+pLrPp/SE6rbl8eh58qBS7kSBszlby8iUiLtweazGrG60/ZDYp3GqVJnS9jdWK+9KVsgq/Q/2ZHVKT/EoUDrSSGgKGn4Re74ugg6TYs1Fy26gKN5vpyLTJcwwhkYDIg9jV614vthhBivXz2RmDQEk/x7taer589LdwvLxzijz8Uk+QswoVQNHmbcEW7fUcb+mXNCsU303xXfg+irtViQ8yRQwkO+1q+JR7di8Ona1qP3S2RtMh2Y4RKZmbJKlMugMByK9oIwRO8H7C59Ecb5Yoxq6BtninwLb0AgG+xAs1V+35MN6bKG7FIOelv+m+KA2/ECWXQoLkm+DYezwcASX3aDtMOpeAc0Kvj6kuruVzz2N/YqoFy53fNRWT033VVorGWrLjk/854fPnDpDK492Dj9+D7HzZs3PVxaaYl2OUYAWN1lVXp97QR6M8XxANHV9wiCPp5ekqBr5/NfRu64yLk3aIQLnFzexHPHSwma8tu6CC4BnXhBhHZbXE/WHtob3Ae4FSbaVThWW5+rGZ0pSWRV0nfwAEGOGfVVFfCwQvVOvTQukLCaj6Kr+QEaCozFQ/Pd3xYvdc/UK4MHAbFeGwR3nEsLzl7Q9ZY9h4RkWOetnQQSiwFs3vE5YOkYQpHcJ/Pm4KH69dhW+TWxGDpacXbOCVxpL252wyrVznm1qU3mO7Fq4mKscU5glj8EUTD9tV9w8b6SUaucBR0S2FVnXj2YV9QFTsa04dO77Nh3ZvREBHK6KMGpKAm2NR1uUopk6jfcf7RzPNIuMk0KfDQced5knvNlim1C+9hTdN7HJ+AhT6F8tx2ft2b1FeKcx5B8nFaIDK3k62kLT+Isvipy2uN2HVHn/mpPmC1JHS23mV2WkfCz/I+hCSUCcfaIDhdii6zj9+voG/S1ji4//9ypYLxSzx01jVTTfjYRPbQKcRJc/Q/Z9OkTJmivBv50vwEgTRAhFey0G0R2Me42Tr+wtkJp0Kv5vvskDz2H5s4jmQQ+ogeVQf/xuokPkfNtB2UDXjFz2ZZpx4/dPJVDl0rGGpITX9WPNBM7TddEiQBO8VrZWzpWPt3mv1NHxCiegttizDwEfb3AYrEarXtEv+2i2DENMIIbZiAaB6bwBPNdjaleZk1mAdEa/FwucxVbaSHv2tzgNVD50ZJFCpJm10E1BkNUamvHP8gnrtmpasZav6IOE1GZ6tnLrZFbg2nH9ChZMpJR62PUwiRqLrYVxQhFBcdA==';const _IH='d835ce40fbd878afb2591a4ba581777ad6d7a6a18a3da6a6904fa001c66135fd';let _src;

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
