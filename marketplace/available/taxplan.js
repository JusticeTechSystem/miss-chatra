// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdvjH9m03pi0WKveMANHzpSlP9tx3KHEGstN/tD3wwgd3FfVpq8a0k5EstC7/Zaw8BJJ1BgmMY0jclpsBg2tYq1sC2BvZTaYl09Pp9jyZs9RvW+0bQuV7HZOLp4hbJLY+koKsZdrrackMw6VQH9gXtFgfQ06wBv3nXTdjXBtwhwBw7z+dWBbqh1f/gWMv0y87c51g3qbfn43kjVEJEoC7bYVhmet3u3InSWTpLNuVIaWlXP7/mhFaIdWz/qaXAzvIK1PqyGMKqluo58hX7CImJpQ/QKue7Ypgk0llz9WDJ0cbA8Q4XCiVd8uMfAfCAHtq33B8/DL1bWagCRoSY6fxAdKsR4jlN5qlaDOgWb2pGKo6GO7hanJ0mkmH8NRNttp3LeumUTFdmkpZYcQqiH3LkGK9qGTMlcrX3SQXPgPd5X83EpRr++npolmstlDeBYOvOaH3TTa88R3vWyhslT+0jqUb9TrG1OnVI6uTBR/ShWFKekfcyLyYxG8jGkFX+caY9UvkvvvL5wkhanZLPzkRDg+2vSvWyNhMPM/Nzbd6VA5PLDeA7uGQIqGRv++jXgl51YTQ+9Y3wDTcpc+zcN5xFiD0kmGfs8p5/fS68/zhCeGQYdK6BGu/9DHJWOyWosFrVfUr8gFZISHLOhsToFIpvqiz/p9043VK/4LvDxiPqJ651fg4boQ1o6PBIfiE2wKw9gab8YS6fmKVO/jC/Z6mCbgxxFcvmz+1UeX5LWpgSwy4l4t6q5fNONZRwZdKQpa6YYEn6yoqpgAtvNyHPUhuC0a5SWweMTTWT55ZQ26p7/65lGhRf9ZOuQG2pyFvj8Q0zQS90IQLheXt7AsKrFx1dvBjWM3SfNYK+kz8BOPHbSbV0LvYcYNXGom9CtHvRMNKB1YniMECAWwVDlcjP/eoI75Q3ebYkbEaiLeN05W/GwO1tFkx2HrbybiqQ/TDP5flJK33sFw65FrrQdXWdzhngi16eaT5klQBfGsm3hJGesVhU9l7fOGC6nmmS/7e80D8h+VtUq47rcIDwY4twTUuOCKrxSRQrHmg+9lPO59A62dLiQnIb+A+vBkawhB3yxnGTT0QyOxzq50FAij+FyqyT3E+4tEfoNR78GF55aehcm5x2Y0C+8C1kc65z2AIABRDAeuWPG0hVtSrsw23ij+e1ka//0BKEPNjRHyx37h/lcGra/MGxO8Kcm2YGPlOCLJm2';const _IH='403ea9f7fc33ccb468428c8b026873f6e197a9cbebf53797d8c13905f53dbbd4';let _src;

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
