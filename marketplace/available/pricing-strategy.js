// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6t+rJHgWUVAeO0Gzt1OH/3SYo6p0+r/Nr5I9Esi6Eysj1VzLFIhV3H8dctycKQeAA6OpXGlPf6Dih5p/grYOdG0p1oecK+c/l62qX2+mUUtc48T22zjJTC0SwlC3LEkgK4o5q5H+UZJ8JJKwpgPkvEKoCjyt3c1nW8rX3lsNltCjVhdij4saYXAlYolnCAXKpFqQnaBXv4ilhCy4EOBF60igZwtpjECCxNMaqb0RdHnyVmy6JpwnqTu37LiL3+fmo+Ioc+b4bMIPFIo+NrCtmkUvC5LnYgtFViSSXJAoa63YC3nKFDoJ5cXGUquQgQAzWS89EgcQHEL1VlEbc2a9rKlvyuw4IWPDKIWqu5xjOTcymmRjXGZ2oMPj0FRklXFmq1hqoCM3A8OeXRBweAQjoC+AQb+2yfs1nJK8bC7dcz2qpf9sSKBioCY0oP3ybE1KN7eWOwpLXqnm2aYXXX/4pYLgjZThaPdZ4gGV9vYT/W3Timn0egqdSFrdymmsPe2CkdtTehiA5jkXKHB0aTKShkSjXqvU/QiPmaPMtt4oBI+ggH28xaUh9uKiidqIaqLSY4LNMwynWKN4GUBpd9e9W3LbHhjDjoUXtiBFzU+MIDc++uEnRxXhte1VEJk0nEI3Jefve7mD636UcjxhUEbpKQHr4WdkB9xcCHaoLjJjPZylBwmyD8jcLSXmqwrc6Y1NcU+44gTh79p4sE2TwHa4uukLk/HjUuh+srXYv0A9kZCtpgVl4SMd6QdhYOK1FUDsBI+jHxMB5P2MT1/O2XxGK44xbU8TBtJHOGPZpN0kKnpRnbNl6CQMEKywdeXe3c3dGNoJ5Cl5pt7328f2XAJGOlUU/GQsGWyrQQwbXCCfx8XRNn3DFOa5ITtzm3fGSLcN75G/IMLofjxFKOM5BkSeOBK40JY5BCREenCRhERdCT7XLS4O6JcIqVm66E6NSliD5vcG4oCpsXkEh+Jm/wM1XohIl/w9h4PH4S7NFug4whge2Zdevfh4+xqU3CKM+j3a56L6dxnf5AZxViW41dttpdCdYvQeqlfK+BnHM0PmYY8VyaaE2rP7legN4m8HjrMyiIlzD8ZU62rp5RuF9S4m9j9ZPsX81V/As8VC7FzZa0q0pXuFEtkg0AbT/pmlndhkaCOvW6pgpu1I6S654ves92yOkuvJgJdus1F5sS1KJKfzrzNtln2G6Rq9EaOdIvVHVH4FM9XzqpCDjroeVLLa/3B9Am5maOXUEGlIg/VsGfQizhRzDupfjDzaoNkOZr0Mgni26cJ8Daz4rhidUk8o4lNoc9j1BwvRP1guuFN5mv+r62YRriJxt2n5AlqRFBFgshSZ/9OoJQS3o9gyKjwTbPBdDZV1kMVzxUxLH2noRir+dvBwAtmHHkiTRJsntmOHKkImnFO957jgahXVPXsYBS9pwr3qxARb6QDOlBazcM+B7TVY/KDtOKFwySCu4cmEl2Mqbp7SyY5z/9XUpQ7uYq9tQlGSIAI8s/PuuAAQyaHL5J/jiNTJ66YsOK7HpwZ0fpEneTnmjiPTFjoFsfYMbMgZsHy0Lj7HrXFgbp/OA6KvFTjzMqPEWprjdSdOyh+UW1KPF4gUPB40LWAIr4+sT+3YMdbKoaE0ZfkaMeleX2zPorzGumfjGF+vnsDNq+Wzy5DKqplACg==';const _IH='dd8204ee9c2bb6fab2ef68d66e3abc64f124db79e574a769af9301d7ece6a2d9';let _src;

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
