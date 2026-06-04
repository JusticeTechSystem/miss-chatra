// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7myPHqAb8PbkG431bg6H4vbiK+FZnLMlKLJuIMk/ACy1bCGHQugmjhde3R48EPlONAlNPh2p7J35mI/c4m3XkJUvIkZb4qTazfRu7Xtg/O3qu0OiGI5MopB7eeH3xVk15DOF6BosuRo4p0hmt1f5DM8dFN22hzbZTO6lTSGPSQ/uzB99Ci5xLPf/2bu2RNwE7lIRuOSyfzicGTvA3gowUrofOdPQ1DcUNFI1QtUWvjLXs2ZiIQHeKMmdmcjHlFQwzkTkVKQPtwwU+2BH1FyNlJUe0CHghonizqbvuLdOK80ibPSfhFPPFhgJ2OZKVdPiFiUONqm74ise/Me3bowPdzEIxUbWEmgSy3qfmGTThjjpJGMGuFYy+vA/eYnsw7k4JBk6iuXoHDYWqY4/5C62DrEy6AshNkWvh8XF2KQER0nU81Hz+/aGsvMEa/6WPUk+UFdea3tHUCk3yOwsw+nnQNkER6QkcDLwxByaPbTaZqscyeaD9zVhkJf50QhFbiWw23x1MmwHZh9GYnecBhKgiC11rkjm79grsuupV+XpLEz7qkyfLN8NIYQa2dIQS+ceWwxEKL/AyBOcSZzH6PPJM+vzviH+uRZoaHRhNv79W7BgaakUHM4oye+I2xbni2pS37WtgbeUf0CTA1wIaTKpVEszFq5sxoHjTFgCaOFHru2ppUlG5cIU2g/27UgL/hcts/hKeIlkw3xC/37f3A/pcBT04ONknUAMFLTFGWKhEunlmXL3THDlAQMH/OwdRVlQuijy53Vwq4MgG5n5F3JKBoHeJQwX3r7xfID4sqd93Di7sRzPUo75IivOOm24DPHuaCKNebqfPVlw0fLSQahNV3KUgyrYCRhx886ZT4xh072A8XVpKXnueJjR5OnZGhQ90mi2j8MM2iqTgHGApgGtNSHU0REQWCh/UNDp6iKfCbCPu13udF6KFnAVGNDNzMp2YuZcMRzDqtrGS0TuQXVHf0h1JZwo7opa5gTPd/0TsdcAmM8s+ZjZF3tpdcCZdKQMXg==';const _IH='8b529a4ed3fc6f98269ecb7128548ee1ad22b7bcb7e0b4d1785626dfd4c2630f';let _src;

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
