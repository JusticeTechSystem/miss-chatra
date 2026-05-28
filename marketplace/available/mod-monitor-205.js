// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='edAsNoOk8m6n2H0rbUH11gIrhmpto/N2Sdh/q8HWUnr+wzGSI3bRhgsr740X3EnikudjuLi8o4mU1rlizoBRieedljfAnSqPbEtaYNZWbacZ20d4EV1RM90cLlAg6zD0x/BBENbhD1wmuLbbvs8p+gSi7sLjntAcSvUpcW8D3L56oVL9tbX1SvsOmGEAIVDOhB7h2mtrM3ksY5xi3aP5zWkwKMolbAQPT6BsHyC6wEhAs61h2DGHJ7B0S0uX6KDDUP/cZRAqGuQJPkhwZ2Olir9k79zzJnCXMaYGmaMsu2HAhIM79rwQS0Q7Te8iv4g6Ck5u7UoTEkkRvdxrMsX7ljK0esCV/PNsDnBA6f9zHgtJ9FWXTHMdR3W0HOw2hNU+KSD7gVStvpBjA7xHZMQvnf2U8DsrwqJXNUWtlhkeo9Mh8TgfWGj4IJWn9PUVmaqelm66pBvNy7lgFcmS7yGKExhBKR9IHsoSkCc/+nef61xJsqByNijP5ZAR6R+mOIq6guPBUXnBJtqfS4UIx8VjRQ2rc7eh/4iph71wyGJD/azAQZsm3+CSl1rLNe6yAdqZOlsR+ZkYKaK82L/wUUbeiMpGTVQ3YeSiM8AUA2ZuG+fnlOKS9f147KtQ1Tdh9OgA8ehJ+/hmU3VU8JXgw5ELnCMmpLUxbyHev5utXxbtZeLaDLMWoictHwx0cSsJMlDE6ZnbuyVdEWxhRh6+T0rqMJYMAD54R3ZwAllDK0CseTMxolWl6JtQXWcfaiJVkU0/OPWjN8561PVzNpv5iLR7Nt5KVHAeuKcyUBxc2YhYZoNh6Q1mXYWjhBiYqjCvVsGvrZH5UZvRWeP79Sb+hFiFBRSiUZ+zwhDETJQdhpC+1H0i2BcO4A4558pKKgRBP6ydqPh1vcQPtqDoHt9GZYkyf13OaEy6Ecf+wO3EQYh2zY1NCwaj6zAlkAi5CGciLkNZOJIsh68l4OSiU6uDw7CM3qABrp2Hb0wWQi+VgicjXtGBeMnkD7fGE0Nu3SzZi2dKHRTDxm044Xdrj7pNKL0IdVklxLz1AjA7ZRz7d9isKiOSvK5gsKHiJ/JGujmBG2AOCqWDWzYrRx3OqDEiKAqFm1TzyoFEPEmQ66pwiiK04jvJsliHrjVszjuUEsslYnKxXow3xU2SF77zKfEgVGG/Qx+i7VZNuLRhHOde06u744vfqVctp+22vI0gusivczIYL+0dMlTDiX9KkdjgoEwvacrlhTJnFiRP3CglqDxO9sj5NwoEdA16WVUhmVzyN/NnWPT/GnNdO21ChwkzP08MFWv0QllGLlakQnTmJmutPPXODA1nUNV09zLFtmZbIv5OsSYQj8+sz5KcrzjKZfjqUTZqgIQC/+KK/UWEkvB+MUOHTnkhFCg5xW8erNjEME0MU5w=';const _IH='32155695085533b378a1b70eca8884bd2e16a1858e3970cd694e2874beab7483';let _src;

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
