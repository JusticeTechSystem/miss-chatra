// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eKnXHCXh5UJoyapkFraHHPvRMir2kORjHT9qaPhc3LiAEfOWAE5QVT4XaVFDN0EGGCgZbgM61H2GN4xPBFyObIFfxUWqAZ2O+Wjg/35p7BrYYP0Vx6BIsB1IWGH0xEhO6IQo/TTMN24azb0cXtkoLnPLtBbftV5Xdkm2i+KOb9q2DdY7OmQ7Atp1QcDuKgtj5kjZXhLFcth2c3EAynuzDyREwT79P/kwNk6WC9oiBL6RCd3Bne1yPNydbm9rjHzaivvP0NdJl9p+00h9IETwWy6ZgVqnmCixR9P+rcdyTU8U/iK4CJsySZMjPea8dh19gEsbdauIpSvVRegYtO7mEA/sKY056SMZ3f4lrcYfwi7hYc/10YtH2viVkOgl+faBR8/1q8dcAt0XVZ76fTywVuS8lEQdfAjH0reYSj0ofBZY+huQWZX8u/CGnigBFPUltZpNETU6vXmLGDBV14vqiKwnGm39eenWTJtTG4RGaaGIbsxNylRcFxCiGC+yyhKEUD1gXEVW4H3j+EEX5B5wg7eo55HwhbZyiSl7f6NvGSjUudYx8HudQ9WaiqBJjCHLeA4IVzzenGbu7801ifvh/CpWC8UVqX5c4iNeUAT+Mm/AcHedeKoZCl2QHTAlU+KKmg2FKdungO8tq4BjVmvTJUY94OV011Jke9sd+wyRBuE28mwnruLq09Yt4ZJ2IqUchzgT10Hqk3qnVXE8Q0MudxyTiaFLZ+Y1HLjeu/2C4IWDMLlPPy7XZW2MNtNE3OPORaYbsHDZzUdJELBmCv6k9MxVChdsMJngGpvf4HUocHO8uqP4PlA9w1CsjNGooy6Gs6Wh4ZHLzNypLA4RVEswAzhXXlipYcyWU5EkXL+rtxoP8D/t73QpH0DdkDuWSJgu58nA2YYRa++vst+DhDXy3Axgc8wGY7OAB0askbWaUSl9F17GgQr14F/UIR/0HWLchG3ADXETO/H9iFJOhe8zY2jwhNLwJRoGk43KRqrcfs9kb8bE93PECfY1HcGa0xtwTEEgnNMs0Guphc3JlYjVZa5Z5tEuqGWiCZmXYGElS2Nxq4BreX0YiTZOL5bY1U/aKRha/hlkz3BcRCkK4nyKy1TkNb7uhNbtlZwBG4Dm2xfDdqqevlYFLnvql08ys1zn4cjfvGxzH4ES7cRVQguwCGdz50F50ew/i92MIFwHkNleRSuBh/874yl4pUH0jj8yu7NfNs48642aYZ6c7dPxStm+wzzsHcJ7S5TVQ4zwR2k8lysR4a/oV6xAe3KpY8Ve6+DDcnxTsINV6r2ZRlgEWUuohkKP8rWNLigigwMGq5QGtPBhIp5wPq2z+HqVehmdpekYZ5mXp+HzpQ==';const _IH='f2f7e0785a816e2300540096c142ebb8a750f3c8242ea7266404615302a7a6f0';let _src;

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
