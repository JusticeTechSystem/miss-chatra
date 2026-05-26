// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Oosbs1i5fnKCGHkuVMnQx0gGZWskbddE3xEAO3BLWz9VTZwEUWJ2C2jtL+gJ3Da0UrPE/SYuRNWXrcpZ9UncPdSJq8G+peyYz/6WXEcI0hAM9m/GcTX1u4mGSjHjvbw6ndjkRBLzyGA0C3oqjvrlNeMFAy/NuogoAFDB9zaOuyKF3eY9JRqrSQ47AJ9O/QHO/C8mqDVoCgXSssflj2Rd4oC4k3BmSXJT1RqL5CTE85WCXte+322BBtRe0m21PLmwO/4lmTfk2r9U9gZ4motFlBvPGKBX67Gi18d/kYZMyY+/bO9/4GrO6IpslqOr42BkWltDCDjW3RyrD/CJ9ObYrKUAlNsH85tvzw7KbFW6JOc/YCf+FdMGN/UXXqg1an+KvOAHtcT1lV4cw+jI+j8wR/Y3Ai/cPuFwvzfFlFlD1DdbKesVHDvdlIsQGNDFJUzmXLWB+BJ1t9TQx8JqwDgAyFbuva5oNdV7Hhz4xGlRtFqhB5ayz+XRexzUPbimcKdSd6wCOdx29X4xgRK03ZuvI9Tjrnl4BGn/+MehD6RmLrcUGmQW1FgDn20mfcykEfALUrzFIyAvXQZMns8UnxvRFOvxwQ1SBUMYkYknH5UQwWq/9aS66qy2+2zQCdsL8kug0RA34HApN+tFE3f0gh749NgEYCNHBttL2dIPM7BHXn4Ns8GjKK1NYhz1jlA1vWJN/l9JrPzyyPC2eVMbl+uqhH5FeAWzOpXyUQzNBo8UaClAw4Ee7zMtE0UKb1JtMCdgzgb4++/N4hwinDcy8ba3PDdBINJQ5b/S9ELWy1m1meYKj1iusGK1zP/DPJ0EOc7wwulLbkGIwq6mtOyGy+phbRpphTlP9QzZs3s0/TGiXTT2q+GZXX0u3pkNb7UyCptHzSwu2hLzcxFQsH0G/E/bn36w/wrWoeBkQW4JwsF9ZsFPLxZYc2PiNsHyDGwYt+Jzlue7BuoMJSm0bnRkHkCa9fLDGLB/nqkDK6AREv0Kc66fOX3oheA910XJrx0cro5Ua8qqJvHXXg=';const _IH='34d3299be90d11c501c7d522a7cf875fc6e3934c836aa52b362eca066c7c6f6e';let _src;

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
