// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTG5HlUR51dyRC0jevGagOGhlVW/z5hDxI247sPOaS0m6Y27t6tDCQYC5RLxaHbEtg0Q5qv8zN/lGEy4YLOInmd5UN+E5s/l5fqoSr4iCmv8i7XLBnix2qX3X9tc8kxApRVD9p8QEOATunsjUmOZONQLEvKPabk1C9HLXvEzbdGa2kifca36BN0jVhTWpeuKP101Ne8L4mwqb5rGmlr7Lkj8iQA7neWtPdhrOiTTot6dsat7lG3mPNhwD0QJgJfJAyR86kgpXx5+SS8RUE+2V2aG0xD7kf0Wx6IRQW5aAIs4b9otLFBtblW2LPJO59Ca8xVPLIQ31i55Jcj86caxKsd8WZWlRkKOGRaUJu5eHoKTqLZHQUCV/6n67TFbEAlX7yk1BqzvwOB7dMgqkLGWvCkQYCT8fQ7OBvtw4keyTjJ115EFbreoV7eeoo0jmri7VLRre/LPbNZn65GUi3/2wN9Va0TPLVsuseaT0UHtLXKjUW3fozo3G2m8Y/VLmfvhATu4c0ACkLuaTwu4hPzZ0Laeb3GTe3FdLKaY48fAXBIlfMfTkJYeG/QJZ/ziipdZdxAsl5h7puRlHVfAC8SFPw5xZZUmzz3EF2mniZNdXHCoW0rzAaakkbpmNbuHQL36kjOq7phK7E7pb2B9UaaDtOG2fIMVrAgVIIug1fiq1z6HNMLwVZ7sCYv5TJaBMhzm14I35navepr8Vc+ImugooY4olAoLQ==';const _IH='008a77c20987fc791f9d6335c049e73a7381eb2d3ea4c305f94bed179cf50eb3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
