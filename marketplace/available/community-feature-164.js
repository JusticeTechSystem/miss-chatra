// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0l0bYL50JmEyzL4pVlfU5wsuZrtgwj919zznFfiHF/+MjdLTcZNo1oq4Pk3CWt3o9QRg0QxYFD2bbhNaDTKMTTE1dHgmHhTLbWx3oq4c8kV4WuGrAGfsRIQfF7xBy4WxjqIS8TA5RvF3w/CUIP4z4LfauiEb+8e9wTNTyNKLr15k+qmfWBKinVdiFD8LalQBpLhMTon3x4oGH/p5FTdOyv84ottmu/gGiLLvbvwj3O1ygwZXONT8GRUnqzyc1VTXXiuh74135TR0cdzFtmV/8aJzC4bZqtQZ9wTWEI3te9ghP1//FNreQelrZahbZdUO1/HG4Bapt/KV7hpRv1/BqcvU/TgTV7zKeaF59gcxsmbckqv2LNRTGIXfGYHgWImSfDCSMQbuWAQwdXMfTg67YYq/BP59Stxgyc4EGGW7pGCsNP7rOR6AX5roQ3BWp7JabOnKMpGttBhunWBYHqgE4TNOxNWXK9t2K/jTMvAjI+fAARxT+K7npiYBZLNj2FlyRKbg93XPL8YnFOahCw8LOuVsmxkT8mplqbmtEU55IcNfd9u6VzsIz7NWafnHssvcckdKLongHV8/sIY0ImgO/DfQXki6FRJjR96DgaB5UaqsuJalTZeYbRnherVYfLIm5W9kBZzkFUDvcZc1hcJe7x/Y9P7gcPzQIjVKr6PbxmKfId6P+aTXQNQGob8vwJYFRK78jCORwlkm87hSK25YqsU8DSiOoZosBt+rqTYDV3/Y8rM1W3G';const _IH='5bdd080280749be90129fc8f46784209953205254797dad04f7c51c469564330';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
