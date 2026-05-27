// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6Wew0zlHsuaDOXg8qAMhAIMTDZZZsU1YNMeATgu97oSNh9N7yHfEmYRVZIObN+S7PGWmW9WSqi2IbfWetdYSNWVIGv4UK6axqc3RBxSxC+8NzASi2qiKrg1IW6lp54Qf5/RGgMzIFORyW4nODbnebx+qTzDNpXSyTMGx6Ih3kqenH6LTH/QuLta2GJPN55SClXfVmhvmVz0QooyS0BZmS/nR9FJ02i0GQgaz6Tn8D9LtU8urQ34nvbrTbWPDPw0XphptALYOfinEkI1dkGtTwJArRwLoaqF7IzHvkhsHmWYsU9sx7Oz+gcO/lD2yzGN8ROQhLrXwZQnpG2fJjaLH4s9Cc3eDJcJAnBwuozxUm3xZYxDVskQx02BhPN1teFlnEA8XGj+LymBVgl1dFLbKb2LUTQhqtb7Yfqb8FSJf0CmsqjmINGX0PWWJQ9oCKWo45O00Hvoxe8nfsC3zj7A37cd3bpPrg0te+og39VmrY6aYafeZMxEpZ5uV+Bql5cXJGDHfQDMsM9GLJP6hwb4E+T1/of5JWA9fGJ8kJzqFXz8GwQqoSZvX+9rUZLzJEgpC+Ccjxm0V9YOk00f+nCqqKWiVdE4bVpe3QGvq2LXp9hrrbNNCOicyIkieOapkRwNmUB0Q9Z3TnEvPtjVaVp1OpgMBIzvdU62NYXvTDiVI3zGS71dtyo1JfYmWwDqsovCRiiY+wmz0aU1X8RAAViPZo6Chh1dhNKV+Wlxpim4=';const _IH='bae427bd6e0c8010478facad2fa784414cb628a8a4ac41b6a65ea62fbc3da33b';let _src;

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
