// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CS+fjFyQUjt5DcifnWUTigcABzPuukgWuICWBJsDvuat9bOFK69xq9mLEBCHRFEktECwxuIqhXBiMLZxJVBrZINAC2BUoxsdc6S+KfNbbJ+WScM5EhtXCgS9s5X1IeNYUl/mdZhHhwyI5ziB8TxnI2IGibtbiDmRyPB8Q3EQ7AtFCBZvuZlpVx+o5qqJp9xJRjpHFkoB6ji0Se29md8dWAd4/+PwPjZ655I8oeaObypWRVuXLlpMYY96JWnjpjN8o70qzLlIbyrouHoAE9eWtXIbDbnJhp4aw1nY/fI9xw6M5P4r7FXGwRU+7oftFBK9TBWqNJFzE0iFaKOklvLyYcrMu58t4dvveQGJrTsUiUfKAUF0On4Dtb8jShPWzFO8pOpfENg6RC4otJoVWZX8Cw9zEq39w4WgLN5Am5b3TTDCGMw1sBAFayKCZvWCCkALOpHqh2/c75bDa+IiLDKS8owMUD0I5mOElDp/8moxivo4MRkP66k9TI9t3+L2bZuFUjPBMnmlShOUYd3wttks37CU8aUwJX7Pg+kzflo7gLTYN+t9BoX/WrDqgpI5GTTFOatn5mlBoZPTsyfLoloXekj9kak33Gd9fGXZRwGHhRfODeL24ocr+zCbuTUwmEXwme1LKdi95QJAc6m7xYSFEyBvZ4H7Z39wSsX9yXazIDhleBsHxSm88rPDc3GD7mVFMYSvzpdy6g83oGpu0M9yN2snoAwQvzV2zGiGFPDX9luW/wbHCArG7JkF66LJ6Y4w4QsBPCHpNzOiRvEIJluzzAQDQrkDTfeK3a6vBAG0NdCEHlU5LRxoxrddox7lh+7Sc99vMWxkW59f/9yvDdAwJL0ogu+k/r9YDCjP27eSXn8ZEOoTA/TLGR5xpNb/flPt8yAoq5tWWRt9jwcKpAagR7TRa8OOzWwb3Go5dZ+WnDz7gQv3NIElGKOBAi5UKzB2n+R4wyVwKjyH7emvJtxZaZqYh8YcY5/s8oZh7D1rcUf+gUP4E4LJaCeL';const _IH='9e6aec37dec51cc1d29d3f64bab82b24367310f01df2e5d896d7c74cf5b4f637';let _src;

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
