// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V7wPtQuil0w3TVNY5RzcV0jHTbakEp5QDTed89l0ycjMUgymiEHKMO9NWkS/wTu66o+mox81sj29wg9yIUAeNm/FjqRcqgNyDpUam4wyODyJ9MWPbtYbhljSAaNprE5VzHppQYEs5A8YIZ0p8QWSmr0W8sJOhTvrYSVXRtEcNKuiS3tYrnq8VVO7ug/sJ7UX2GhGHYngrZd9h6jerwKWKbPK9xCMbFajGwO/MHnkj9HIdxY+GyFiuySOOPPstS8994TnF/vWOUesUj8eVlCLeDx7d7IFs/SDzlR39E0j75uO4qnB9/jL3HgvHwlxHn8rACXnm3lnvi70C01SCjxldJKT8ZAu8nx+wRVN4kJAaw0mCeokeLhTvBk9rQUCfJ5ufxfMa3Hf/J+fFysv6xqURT76yxzaC4mgLHtnQaHhYnoUDNKJet1J/C1N5yvyXnOLKEhXUZOuZHOmcSLHrIWlfjG6wwvNe18/AdptOYrvYph/4XLqcB7Th4ayZdaxTTl0E11pF41QW3UYAoaT1Cs4FodvAzXJaxD8nRVgrRmMWHtpMDveLP7yzqFhkHKVNRNmG0QIOujT74cH4hkdg8anDArjCPog/aj73c/KGj51dXZI+7f+HKzWnrpEAdFVT1oF1yGdJCF+zuMDSIGAABSPIKpNeja2L+l0ZJMYSFlgm14AX7qXvpQ5Ie/A4syn3znetYrOS2im7pxJlAZoeQ+7btJTLB4Bc3c4+8Kat7ox6uA7QpGrzj0q6n4Tq04pFMBAmFoEy/kR9esfb9BgTIVi0Lxlq8X7KVXhcBEufva+CftiI/LJz6nRFRgl5lAHycf7Baqf2YylgIb1BMnvXEaCqBCKdqXYssdmT8C80Jm6L/PySzRdi7bneNyLihmksWVV88k3rjy+at2kxaeTZXguUgfszU7TBjra21Hv4wWk3YvtCQfxp05Lq0JDOEOLFdcU3FoR4u5IpFIcAr5x+DZe7/IsBm1khih2bfUqooQJWuKp0yjLHGPNIhgNeYdIIMsgg6XkYXvRCJHcOOGW6zc00mEk27a/7VEtN0L1RpTetvDjyMb9uOvRxSgSumAMOXLrm/scIoRzvTPMaQycGs7pLqS0UoRu00034C3lDRlPYS6UwiH04VgFTL0OMr/HnWDXDMIZVPe4PXqrV6y1U45/Lkl4yH59dfU/7WgPP0axMqJVzanyXQyCHo+3IVZB2fiRozo5L/tDdZYgvKt6H3RAZgvvHpQfcC7aDywsvK/K6/pJ729xDNlyIyUBQVwH9qGfDN6au9dMPQm3aYPT1Scj61Zfj+PY0SMaF1Y/WxkrKxU5AcyUkrmBbO+YTZelz95Xi0a2XOxnSeQpnoNUmpX1SixhGwwC1IvEGKIKNt1r';const _IH='f39f1165853ca79f967a4f82937f330bee398cc951426f12d76b69793008f55a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
