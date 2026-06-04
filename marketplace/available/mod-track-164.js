// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qcdam9PjujyfdMcM9MSZ3urpTjkQUWqQZXMPhCUXr9aaEJ8+73vdhxALUqqr7za0O34mYzSLnyTzJFo8eaYS4nfjJFzBfqeOj9YinKCRklOYrG/Fequ90VAg6T29jAo998th4eefJlhkO+Ql+Srqcw/EMpsj0S/hRi9WBeSmc3yvcAbt6J20lR7Toy5OQ3qF0MCs6sboBQor5VzcVh0M85YhaGcjArC3DbOHkdWRjLFQlHHk1aDS9od2YO6Z8tdt/2jzsKdJ3Oyu2hAeAe9LKpjWDy30iAzI3ybJlmz84wLT7lwo1bBFOx+Vj3Tx61b/3565QXqS4TCt/P3nhmn5dfbFdEUXTsOMXTBInmYtZ8Xh8K5C5uQoxNhxKsvSsjDqb9IaVeL9xJNF2zQxztUeXJOhr4sX9XIpP0ASZeqBMyBYSFQAP8aLkfhHZNPi1dFo+Qp8dP/0c5vgbUaHj4k8IU9iukdBZW5a40/MuqzneUmcjzjLHJQv2vHd8uXLIbAb2ywXXFouK/cIFD/F7y2vVSGIicQBB2cvWgy8KE6dcV7WxBxT1AZbt+tBTVJxV4yWMepIxvCMcpn66UCaRmZGRB65N9ABRy10ybRqi9sI3T2x4D8Rn7HZD+gydlHxeGthp/kDBFIcrfYDAIXNIS15dZZ5ffKu15wBRWDaHlc2Hz6JWmICPIXhqvW+VuuXjx/c++JZnp0THWITsDd3z0gG1KZBxqHSUtDO/7JNuNiZF07VWmrUGLOGltxT3jJa60+iKxtqgCAXYA0zfmRKW3zzclhWTu9uWDWEAy570L1CLPfVlH1ZDYeCEjRm7Q23+EH5bRF04MwfshCLPsqMZriof6L8ZUYr1SUqtazU2vfqi5hfgU1bcOrZgLNHI9NhR8RMvYumyShyQmk824TPoTi5Us2DDOPO2CbiUIC8Rw6N1DIbcVdoaW2kSIMoI5YWFsZNreNvm+P2hC4p7JeWUCQ7yJ0zqlZ1HgjRgJtgcZJGko/rfiSdhHYVlozAqgtvoWPt3d1em6kHiBWZJjpT9IZL16GDDtzbwfn3Zixpgx+6w065k61VXxsJw3I+KgKM8XBvQzLbbJR3SFUQG1a4KCp+4AIdcE9P6PUUp2Y0AGnfltTPqlW1pAB7ufOZ8yqzLFD5lw5jRgjXrsBZY7w4E2Rq58LVGtBawZHdt0o6jVKtDT5NFRicT1zHcYglMEJFUU7w0uaTsCGtVbgZpPu8aoQ5Vp44Olgr2kIQ7xGJBpgOIT9ml/XK+Txd9Qhj26MJoB9HV8od12ku4obUvo5yxLcmNeXXBb6rnJaQiXDqabvKnF4QgV1OYnsiGpwRgaTtr13kzUO2KeOpgLfe+PyaBqqNKeW1dYvaC5nxHJwWf0mI';const _IH='ecdf181b5f6b89eedfb01ef8cceaacf178e890cf662b117ffe920370cf0e61a0';let _src;

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
