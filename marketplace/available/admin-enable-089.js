// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ELw+9/rVX4eOA/y+d2FRoBAAp9o6/IoWKupIj8Sw2y5Z416xP3cmOj6qbOhMEbRyqCYyrzUBcvmCp4Ll/3z/oUfZ9mmIOyoLT5MPEFoWh4BlaVlrO7Jfxh0j4HmKdR0QLz8txHQI9SdJbI+ytk7WXmRAotAE9r9WC+mKfze4oxBo7hHdEoyzbTVmKto96EpRa3AJJj4RyVmyL+HjlHyxYb2/t2gPO0QxhBvMJu78WHCvq5mEvcbb9j49l2iqCNugZpRIxFOneeD0eoP7WNut6ZzRXJP8KsUEexTRX80JbAt3rpx2W9hEZV+dtA82n7rroVYJC/rNzY0wW59aGA4DTR281Ob3Z/F0OoMGbAODB7uGK74NvNAYqFKZBdtHRsU/zV/qvWFGiMeo7QDfILcKj9l9wZRNGW80C0MnuyqK8MH2DYDEXHGAe/Of13pfFz5CZLV6i/gemH8/v1+tvcg9RDRepd2hsfyi/4ZB+xzXSvuf+R1nEcjgdWjbXmatrXMXvKBVTrvq/wIgxVhGuqrnH0jqIkCRxQBvGbIBlstKIt0gsg6hCtr9eaHTP7dS8CpzszxWxIt1meNiYFS/zFBZBAPNLvOkofbiCxnyjThr7vnaLRjS55YRDoQ0C+81GfIwkVnx0+FK3Yf20IXgF1Q7RqNqaHLg5EodRdVXVxYMdIv7Fx01CIAhRUVlPBLjKr5SGmaLAdSwxW4lakf19r70X5Yj2+9O4DbGAiby/fx4HMbbn0q2i0CKJTX0nexuxmSQ4pnEWiliZYJsLbVKu/MdTwnB3TtPiwys+HlTCqWgCrgSq9Mq8CaLhzIrYNxXjF/N6J7lmn1kbYhfVAIAl8W3Q5d1Ecn77dKyoL0/AqXV5rtV7k2FWQV+JRFYdcQ52roedOpj7hRCi5ZzJ3zfOMBs2VLRHzS64wnNO9W28ZMWbZEmgb3yL76TMOeg9XhWkuFSy8hKIKYVFKhMkPp9VS/HxAs4X9fElJpEFrJ2AGNjwaqsMek/YO2Dxjo7WHvq';const _IH='33f7e37c6a24fdc102b782be15ff96c433983603e53cfbeef856a5c51bb168ab';let _src;

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
