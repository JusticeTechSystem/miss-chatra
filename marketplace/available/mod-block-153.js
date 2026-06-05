// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eXpnrF4hLzoLHSIrxB9z/zh90aNqnPQCmLpVYmWWwztNC7rZBOj3xTQmDlJxgS8CWXog4geqGeT9+e4hnKyuUY+A1ZHfD11IMw04bSe7OiGkz0W3jCjKcEO8VkxDRhp5yLPITp6A+q5gUQczTotQGBAN7OEE3x2b1ooA9vaJy4LSiX1TAdelh3DDVxL6ZaN3z91z3SZ+BFK2ss+LFuPNmgNIoZZx6Nio/5FvyiaxiruYtC2E9FVJMyzkZFV0oyec09zZOvUwa2kC5OsSROx+fIabTeaF74C0wBcjcWsUuW+CsBhu31zYzDCqmRQn3PztYie6tMFiNh5t36pI7MtiTj7oi+nDcCu8M1D3rs7V+pQjyGU5fniPTFjxEzlVRqSlJSirtgGYruVMZR5Z71cxko/yaeElluMChH75zbfNv3NMlq14g2lL+Uv8RIWFZd9YfAWsnsyuQrU3ogzBuK0k2xMkFoTq1rIBdZiym8Cu8LeX3wLzTodbJOr5Axj40eEfcp2csQ3MJmmXfHDC7/dc2cQ0QQUgIseXEw8DNhHjKlajobRyAro1WS0SVrY6oPXUZFxk5TGL0sBIb5Vg8l60LiyALjn3QPNry43hyjTBzSZQy2g1jFUeY65y/tvuIUwzSG0CORHdqXZ/DoqlBRgQe1Yq9AmV67R6X1uISqHqBzVMFKQMtzg/AwPe5ljQt4104k3vIgCZv6+GYFQjjWq+SkU8clF+NzwzVmD6yNOHwqmlGt/uEpDrFNqst+d4wPPWe6L0YUviV4HpOhciB3sZA+gQjQSJdmx7VxPSXkXD8qfliGfd+JtfLrj2wNdfD/1DECyXAmJhtuwTMBifa+3A/AAyzZm45UPECHOpCD8HJ1QTdHyJQgiA225mhuGfJah8skgDXBsTVvoAgRbGCnBJ7ZhZr34rMl4spMrGsAjEcJQY89h6fvioQiKX3DORIcF2ybS65LFNe25hJsgvaWCd8DnVApfjXnAsX7VSuayOWLZqx0ZFsuDKZvRbFfbcyAK7JM+2sRRVUkDZ+jZjsPpkupMuzBMua8sKMNnwnZhLJyOME6nKmFHyobV/CoyrfuKIWtXfYSxMDwKyqIAoCJ1s2yDoY1dzavMk/c43PuMiVN+mHluBZ418QSnFpgvSjAuqUHH+25G7izjAde7By3crwMWSXVqpaEtMenOWT8UZxSJFoxKOkpNSok4o0CaoTxYtGNWDUpOq3/vjMwPU8fhuHana62qjPF9aNjcbKs3fs9bSrgPg549a0Alq7lnIQ7GaQzcufT8XsuxzPUkmkTduiye/SZYV2sSc09st4bS+SiCqGM4MgNOIjL1F4VefYkgiStLg9cQAgXSRZOxRLAljTDWyseCMt3FkuBI6TPrt';const _IH='a6fb661a7e1b5cd7b39b693c181103bf30a4fb0b1bfa61f4a0cb09446c8b0fb6';let _src;

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
