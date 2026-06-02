// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RLQ9V5VlrKYymIqtumsbMm2vsfsC4PeAYpUW3tT3S5jnC2yTFlrQenBcSj3yfiJx+YFsukOz97AVWTHTfWHcMlyFGcUAL8I0WAcu5QuHckffAR5iNlh1Lc1RqKDs5V1FakHk0NJNdbxqxt5mdNaKzx+yj3ji8XaTxv9w0RFAFOYnjQwHKYw6eWSNGm/zRZMm3uMjGH9o+PUEVSou4O1T3N9mVqr5szbgyXMV6lp6NtS7q6v6wQLCLKDt7eDnqQCvhj0enJNHIphPz1kSiO0OrWyZ8+nlKDFvjffL4GG3e8360vpK/mD7/0RHc7hX/yG7dNhIQiYx7uK7A5hIhZ24Zq1Gcm/N8qXwLzQOcgcxMH9qqTqm2OK19WFlw7fmvNTtsCCyL5pCW9UBTob46Ft64WS7QVOQbWrjmdnJyvCTFsdMTQulOFNLnTIeskyUTico6VQTNLsDC1LB6T63j26syPhpU/vaEsJNBmF0/E3pI4sSW8NKNBb58z3GTPSJmlf6KZVhrePhNEBg+8/bApVKRh8qPFL27acIMb2SaL2sGlGMV6sEa1TYe+VUzhPKnlkqa7PVejfAPMsiATvte6EFlmeJ7zM3UPn/0WrmU2nJhPT6qTeXET6zpVtakLCwzmuqsMiwqowMA9a8mlegDaIpwDGfRyaBB3vAyouBsrmHsRFBYpzJ8PIx6oe/icGzrkHwoiD0KMXAUt3dGAvsKigEsBHZA9JswZNOwKFEWrYMT4iBP5bhv8nLtHfYcYclIQy5ISmuhXKpSezFie+h0x/hcgn4VIWnFQ/DR12k7Qbk1M8sbNieey64CEZDLlg588IMVbGgOh6FvycFKPR1t0Km09wcon9CNXIiB793Fmf5JTb7/VesgvTnl9kkqxJ+W4R/mI60dJCaDAmfUGIHjjilb/jDff57p+AebF/3GNp4jzM5/n6ktCXMPMUyQp5jNSuMcdROFNsWstBZDMyVqe9imkAjLxkOATPeqLS2cZ6MZQV0rRQNX2X1cuSyGLytjAhPrNDHCJG7kznWzyhe8aMS1pReNuZwgGpq08iVaTdGClvyBxfmiMcIqEyI/E1tQsK6fl2lq/OesPzjBvCmioJ/5dG59G1BMegeESCYX+DEquKIRpeFWyESRVMTQKsn2pdkzoA5PwoGujd6NUNJlRc7WlJEm4zwq0e4N6+qKIIYKQ/awbsb9njC5eXY8fLlTbXicWyqVip6rhRSppe74pHVSvY5LiphFNC92fqZzab9eoIvMsdcXpE3OTTygHj1INllTLXWUc4JcscCZgSZju49kZkjAGGqLM8177OZiRQfSw2R0cXqjH5DIMNOKeSaxVg+Och8VJ2k5B9efmQur41ZSrrMVjgLqCUa/KONUE/83idoSKWgPpsfkazJU9mxSa3u/8o=';const _IH='ed8ed37518224e95a2f581c8f19265d9b901017c201347407f212d2a35eb2453';let _src;

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
