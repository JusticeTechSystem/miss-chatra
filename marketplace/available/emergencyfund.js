// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AYvXFoz//u4GQcbgk9HCnMeonjuRIQqjJ7maoitodmujeWWYBfG+1nSKknlUfnxMjFr6oZWBcE2b2yIFXvQ0xLlquG/4EwfP7QQOkLO+nWBtwqvZWGLlv83/Jitb/tZoILAnNEBjWxsmi2NJqFTFCzVpr/8GPaqrvC6mhOWK0VTzB1O38LYDYxXeeivo5aOj69CTLKgUFb0AJw70nrdgdtMjfBr3q3GSWy2uT4PjEfk+rJCEmWb/1qXwTK4SiIBZvkZgTLQOxYUlMKv8jhimzs31rq/l2lvdMGWcNcdD5irVvTiyhUCH1ioZV4dnCYKhnkZmpVu/DCUCiOxyVnXBD43IoHCxsqcmHc93U9IWJn2VFmcPKSkIC2oTdgA/m76U2nGXiRBacIfE0e5NsYG4AbrM62D0d1rWDL4H+WouHqfc9zm+/ZNxMm/mTfSObNwjoWSDPT88LP8zGfsHJTP9a9smvz9Y3rLsb7gdE/VD+AEsnLToTb4QZxKsqA1jPWXNNcjOP1Q/kN6Swjl1KFFfmJewYlE1kG+SgAi2TKHU1a4Aas7NVv4lxDTASdOzLarMxlvIu1ir0IJUNrnUQFrueJnxdG+IolCxnANTmo9sdfFFFUAQ0yPXVrR45lsiuYoRedSb2/ba4ii25HEdwcfMS0pOkwzSmJWZ9V34tM5iHQQIkSBpZepWEpp2UuSRR6fimGwy/HCOd45bh69agZh4DEdxUTU2I/3AJBqtHez31Zr5GotGWNsihjsb6jDvXzBEV7ion8GxiLcGI8XUgKXELFFFhXqBXZPE/6MFvWvawlX2cjPlIg+ZbCG2GjrY2j7L2xbrVCfafrQT247zcyJLKQQtOEWjSJOggfCNBq5YKqq8Tq65CO/v8orFjv+AG9riWN9Weaeq4CdmcaQijOW/8Ydl5BeYZlwHx/zEWPekae2aOQ68MMjqco7BsmOg9PwRgHU+JdEXP/5Rw+PuovtIgiqxQbhWPicpRtB/czS0lR4//G9rRXSjMcynhtyIa9VnOGWFS/cP5CRwBlvabWbvT80kJv2Hjg7AQ+DDccz+huycsniXA5j6j76s+DcSJhrhv3jybxgmOgtd0wnw0+ZDffMZ+Za3toYxFiLK21NkxZritb+/tB3CZVzkMsI2nMpixqEg0tLDP7OsyWqAELJz9K/0DZv0T9WqzZhish+G3mWBoRH++zLWsz9RUKeyam1wKMHTug==';const _IH='de07e506dfba0d4c0baeca1c82f42370baa82c0a2fcfb86237074d9bbad67a1c';let _src;

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
