// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mCgvPAUZFWOZJw7i0ieA7CS4Uy4VO7L8xlN5NeC6P5hVrwMfZtS2pRRVVyGKJVKVWzluYOSs8XkqMdPRwqANPKPJ15qfvNbKl6K3dMCxmwYHLCRvUwkKrzEXAFKJvpjb2MWsIhetUTGOziyKJPEXPT98+YYGZeU68VqCK3Uoygs9LcxdJX0UfCfXhcjkNHiD3sm+ytGa4wMJcfuMwMHDRs25y1a0u0HBxPvUPDvizDekEPgzo6WjdEkPFTkQrAUiUNbfzrTSLs3f7f8iu3A3EXKoYvvdDmbfdOQ4NpcPt+w6tYp3JvXpVZvM7L94/KkMCXzwh5BVzIkxyFGzJO7yPTf6SgbDxHWuvPyXzVmeFerZ5r/DScaj3PVOLZ/ya9eGl0kjp1J6M7+/VAPhTJlIJmWAm+pzpBdYRDmyGyB+aaVLPRHrAVA5gS750IQXZeU3YkL+CIsCkSScz+OGlJMpmV8WuWtdQiNSFUVHoewrC/N9BsMNnd+y/+ZLjiUJz4F7jNz4jB4/PP5JcoR6w+nMDTcxVm7RW4V6Bg7Z462Fn6aPvimYOn6N2YZLtqGiuYGv+uJ0srOg1GFUTgzjqTmZyussmrO4xmR7dIYt/fnTSo+VKNIlxcAVQH8FRTZlvtZ2+aCHyeo5ToROxs7h54NX0IAAvJhXgevC4OculLcE31yJJ+TMB6YT/5Ig6DMccKnfTZnOIJ15w6WwGycfAiyfcrxxwguQiPjBbGY9XgA9eu5Vt4JrKvVfZ5fwoyirQmoaTeEeRRujbCx+8b5BUHWaL45O+kG7nsD1Zm3jPr3vc4sF4z+YGAAetPJQM/13aye0CDbZcZ6ZsclyrkR4dsilHlcjqLztBg9b69fOBoiw6a9xqYWJoR8UXrhFx9k9eGLiNP/b4Ophg7bGyG4Rc4ziGTsBypNTqWXjug+AYTpm6f7bQyeG/qPUQcRoxTsG0S4Lbh88eCJg7Y7XoWqmHs4aL8rmAHxko5r5cd1JgIt0YjBlIMwNmEynY9vW3CB66iVaBkBMAESAsWNp260soizxMqtGCnR1/IitWXxwfV3piFePNaIG9gW4kfB13Eg62rA22+Cy5sweo7+5zTbkE8/8mQO4pVVqpsrHoA9y9Ty3jgcvLV4kbZ3c/xpBiVh2dvi0j2xCv9oer2q2sFlY2XPyzeB+3z+Q051Jn3LGDjhOIw00wDX3JMWK8OakuYx5ZWZde77pEgNf6DRxly/6n3wKZFoLTAebv28Xy5BBgVcDmmepKHIXZaIO63xC/c9RHi+9IGvGkbBhcwMd1E1CIwOkh9xI8tVH9mZfdSV3IODJujadDyJHtPTU5+jHvzgPMbpNU7bPDX0ZpXONQg==';const _IH='7b00929a1310ba44c5901c01258dee9d5cfcaf9f34c48b200da435074052e3e8';let _src;

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
