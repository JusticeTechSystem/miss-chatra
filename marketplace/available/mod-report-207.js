// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6H9Bmh0PwhBsfdbD1gkLMwVRUWlZduzyXfbZLMFCMXKxL5sehICu4ck1IsyBvoeD50X28+/8gvCmVVJLyCYMNgq6F7lUGF4B2kmZRawoK0jkKcH5sMzwazr/xzbAxR29B0NDduJYHvEqrLb2z5RYGwoDEfkztZavB+m9USynQqKloLvdrPSzz0TrsowsHdTOlVTaoQnuKtHA2P95r5I/VS7lJaWa+cb4gnOht4fmGzGVAaBiYTyfi/UFw8zYDBkD5BZb5IPX1Gng8IbsLOMeZKAPs1KOhyeyd0cH93y9GXAZ2gaAh2HNbmiM2P2vaSOKIrQMQYW6YYzuce8yOVGAt22H/D+N+DbZjqw1sLlrSbTIk68t3SlGDh1Pkb/mWjOKNYt9YEqTQZoAisDa8NXTFsu801Wu9V6AriSD/5W5TzTONkNVY9B8IluCrjLNO+IJCyoeh4wkzZkb0hSsWFBOvBDsxq0Yv1hXSQCAtbk7yOybaDQ5xAgfFwPp9LL5oXXmHY2txn+9H9gzrE8PdPQ2i8khhb2UJNCZ6ayFxEKwjrpYNuaIHh4vquW6Lr7fT14e/DH6y5mUjgfcQVRjKcW/XAYFCaKV40tnpylMzUonlGYikycofo3Gb71mqlJReNJSCeD2LqXfIWkUi6sp4K+nfDAopXSFRJdhb7RlH/CNLCZalHxe/o0DGfyqkypeG5Yi8BP54ndPZ6NR+pTwAsOj/vEClciFgg7zapa8yCWo0kBg9szuZi5pgNjt/cZrazRiBHXWO9UGrXNazKW0gdLZr09GfGpQWk5Png+XXX58JF+MdsAFJPc9pHeJIAo+jd6Bc6kIX45WzYE8uwdhMriqBkgBFkBh/d98gQhcWV2ucgRHhy9Yq15p7qajwnYVY/cWQ1vUuW5LtWjmcwOrmG5Z7AMuSG9Mht6FZAO5uFvKBrF6rB8xraWmMsgJT6HvnTWAtXX36Zpz5yaOoJPetVw3jdyzlPOtXWZ5UosWdstPWSFLIz+KVcOy6lsmsBdG6MOwliExFPEUXPedvq8rWF9KQB6Cno+7Ns5X9Cj1GxXS9Jp7P+WVeO/NIpvMDyLQJ7a4d0o9EkE8AC2nT3bk6VHIDkmRWz5hbS65D9Jt89/CpMGaJqj3n4bcwT+W0IuAtsHwT+S/iINbNlctEGbPJ7OP5Kdm9bus9hsxGktmYzpRH8M/Jw6yVwMOyDNQNSMn9DY03B+1IY0sV+C7xXxEGcCK2jxnSrMrTkcIV4VkY3+8ve3CAd7s3W4W8aFTDtMG78pP/A0iJMoC9ABX8iK5AsK/ufHQC9cnzDzm+pKiIEwKVzaOzK1yEOZrAJ2wIDvwjMRdPVq/msbB3QrayHTGhToTXVl1CGHB80t+OzseNGsYHiHjZgL7smax9';const _IH='fec0d5a478a70972cbc08a08ff79b9ab41ccb148468c29fbbe62753672e80662';let _src;

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
