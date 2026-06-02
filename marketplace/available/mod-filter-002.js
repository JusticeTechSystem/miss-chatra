// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='97W30U8m/kIRgbFOidunPayHkepRACnH8Vx2f8ubokoJLIcBuTn1BKvvzUs5eCmK1AGZ3KZ4aYhyn+GstU1W/uB6okIkvRXA05TzytREKjaFnyYq1YfaCCxh/Pa3zmT/49RXxoDCtjMJOPOLKkM87UJ1qkTnkAI7soT2bcJRi+DjpVjwxRijjKLOZe3lSejYLA8EVQwKVJQgIIgGlzEtS26pHuIkRzl5FYyl/fUi0mhZQah9sG6ZzvS+MydWdhGv1uOe2fgOfjcwlFyUu3Clt7+H1/K+uLNZ+N7SB5vwpX+GD3GczfbIYBD6eKJfX+Lcrenkv7iyFSAHjdcIq4CIPwCeyWPB/Zf2+nREs7/WtcHZ7LhuW9KQlPM4i1KQx6uUy2cs8iNL4DAKQmGju+w02sD5LcQT7mLrrMNmi1tTylN7SllN4uCqCMmguufCMzz7xGw1B9hgcd3I5D+2coCS8ZvtDn68lVsyQ+oWB1uQFpk9jvZb5IOaJ9v6JTeTThuEXnahjwLdm6t1G4ARFg8lUTCGpKVDcT+EA/hiAh9MBgmth2z7uhc57mA8wTCXg1d0+yorRhKzZTDtn8QcEkynwFQWFxTpVGU1aUv98G8Qsej2iJB5DVsqhecwBlV8ZlRx6LzU9aNPkN+HyXOmgrmqLo7rfUGGpQBjlklZ4ODMQr5Io++wDBnL7WTixMd+xzMVZ2TsoyVpWW4GfgrmTjU7wHs+jWBFHeh5p0D+IjQMigfD6bl9EzQgltUsW+yJBUOdKXhjGtM2pQTpfXw+pDQWbpcXAaRml/PAYkC0XjJ5stc/knxRPo1NJAISczsdS6nf8m8nCqARYoYJ7vylNLTvu4Q6ASLSi8dZISfa3FDnE41es2JCLQucdKMMcCQW4wVIOEVpv5SLuf3HYFhJi3p31FDoOi6w9YDS67xsulencDuR6HYA4xpnhMypypQ1y6iK9ItPII9zj4yKDgrevvTVE8JlAUTRHWURrGh/XZhLDHg4SomRtwJqc3U1UR6iDLTC0MfvuOZpQHoo2FWAMAW8CSjCfWB8x33p/iK0v5vMsddClP6zOKfiImB18W9O6eLEVhOVBuUBTJj2pXBYLjmWXtfsrQ0q5QBqUD4fzPBcbujiG4T0ykTO9qY/ZnA1iaw7IgNqV66RHHLLhcTbrGiIvlxQml8L6X1sxMhyzHEl6TOYYq6v7QmAVh3x+FOVIsWUnlLjRw+F1rwYkIOvq1C4Bv+P6whnMW33L6UieLlAjtTD0jonJjMjEdSA7svkA0jTqQno5i5WzxiP+qz/zU0pyyReFiwWIYKaX00VGqpKNXe1hQ5F0fjEL96HH9dh2u8GpGzOJn2goK57YOMcU+ZXcP2WlPwWcetCXjrJqg4z';const _IH='a0ea942819acf1ed2c3dd4e82d17178019b7fc1653e51b599632e85a31d6a68e';let _src;

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
