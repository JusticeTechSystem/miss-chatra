// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v5SivNoyyTIXJgju8BGno/KHKNnhT1pug/0s3cpKSI4iDTgXkiKXHQ/PMVfrtl+FQ40pkCC1Zkdyrc8E1qGgVbw3EFWDpl7lsH1v+iTL0C8HHulbhSGOBeJOcVA99OtkNrzt+n3hZHauYsAUYX8V1j5Ib7Lo7fe/E265bL4b7jOPvmbQs7Ji8M2+o6mVRfOhtttyC0zafJ1/SiZ+1d5AgLUNLj7YlVtT0w0ugn175KSOw+JmN3I5i1FnuRC0PvFFuhgUt+0S+Fk5r9PAcQ+ck1awXgE86s6/UV8KBcR6inzgGBIPQtriecKeYrbWblCdUbc2fJSRp7ovMA2V+ypvb0lJV9MigJwlchFmct42VJ8WBRWOV0GqEXNTiCVm144o8pt4KLNsFs2suYzLNwtr98fy+oeshiVrf6s+lONtrE3yxIMpp+Cl6N5hUPL/LZChXhoNWUJwRRQrwlODNEL4b71678k4LRh0WRukIkYwhkjgrH5inua09MUcW6kZNn0Jdw1hv2CnDR4jyZfLG0B66JnXQHTPDAwbAPYvcVtd8eG8X0s/3Oo4N/IveMHJ8IbfDAMVBQctqQmLW4p/h9O5oP8FwvGoasVBALDC1WXyF53rLymj1GfLPAm4sJbhsbL6srienCVW9tumWp0sm1xyDd5/6CS8fGKYTKNdVuSalwbf0CqXpTjIWItYCSsqTiccjKyt9BP+pdY1MneXkolKaCaRWRlNN54FLahTzYSRiYsg3pDJUqa43Xjb1gHtlNCzlF6I1zIQyE/C8NZug3iNCF85W0buMBSl7v/5NIdcRg5dquHVNyPNvoTLM0RWFXddcGJfXAVkdGHgoMS7nhu/QJHPVHCgctY9McvgovuGxP+zfUHv6wn4p0I07+F6kBSbqHfKjNBtmnL/e46T2i7NwLMwo54mFz4SnCzeWuyykm+JaUrV1HAjleQcYciHFtUh/eFGm0xRThxSV5J2qgus3XE+RvY3lhtONUHEhpcf1yeUyEtG4xMOYLQzX/32v9SRdpJP9jyBXgjfOCaskC590m4hLzA5Ltn4hDu0tDxXYkvlh6dR0Z96S6leyt7cpDtPzfn6tAEjx0aGTS8B3hHkQbLCKII1Wj6yGLdSNOW9pEydsxhMxqxyx9jPGjIwtHmuiiv5BmR7FN4Hr/sqAMaLvZmxZ/TYIj5D6L8o/HA2e3P3jCPIopLAaV2U7WfaXrjB1FduDUkz1EGvl0dcnd7prstVcIG0aH7qcgEwv5m4NMQSLm608rAs/i+45W1F/wKq5Fy0V6XLts4NG3xrc10JIfBb2dV83daaP4Ms/Z2lQBqHmo1N4+slA+fMGwc1Ekun+jTCm2sloqnDySWFiqP9JUqZwwZUiDWSVd9y6wvb';const _IH='97b995ecc415f42181f9ee27822250d23b9d79991466e18d99864c16ce2ceed5';let _src;

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
