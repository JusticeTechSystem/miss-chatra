// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBfvZ2XqMKpUPvDFuPkPusW0BxXq5sTIVPv42OGeg07gap32qTrhiOdCgcxkSZWrZUshkkhU0iGhocyYW3QszKQPY3MvxsgbReglAr7mXqs5g1gejDVgc+xz7uDQguRtpjSWoSnBx47mVRoYoFB/nDuWDC25zBf+txt5hp9cq7isTmENkVa3mqBlBw3/eDlv6ezK+ZwYLdP973FAbTWxfF5XHsi8w6rDmn/Eb8esT2ZUR8wO+RDZfcMb5kh1Fi4zthDjPrv5ZDuWI6/GK1kMrB9KevZK2rZnacLrenAvielJUdTJxErMQWppc69oD2NJGckFXj215qtu1ON5sB0n1hWSGH8rJYyqAU2kvb/RLUblW9n0arce571gznRfsPjhHkkpHwxBz/0H5w9fWQ9E8QS5S0r8AmwYCYCM075+DQ/RmVUYLBdH6FvSi0kixnSDRNQyPYmyL90OeLjSMCBMGO0CZXjY55H5/zfHO606C2bBXdZjEZNcqPVBDwVWSM//LufaI8Ak4Dp/SFoisEgop/Kjw17ykcUa+lZY/pAhv6pHtA6RjpYdDxv6bqgO3cSnkU5idSI1tCjr/YVoD8BOUnAJmeGL6EXFDaMBjQhM2FmL23QzNe2s6ELaY3WFpZJ7D/9HudcFk+J83r1O+Rza4fvTCF5aekqkR1ZgWOPuG6h8FXzbDxuTxCzvNTROhhZ4qXZSbI7JaXA3n1i1GOGKHE9dlpgMRDkEv0xytBSE3pty6fUhNNdM+WEXgXfkiX1VkJaKDkxiRGYukY+yHsVJUKmAgl7M7996InD4lOiH+079DlWZrWUuIvCQmsOCVm0Ked1QjMxzlAn/3YXxtiLz9Ah9IKDglTMylTeawfNJvDc6pvbiNmTR/S0PFBIe2hFUMMEc4ZsQW5sD18EZc9dpjLxcBPaiO43wfkW1RnNjhZUhv2K/HbQ88et/juHn2OBPO1jbzeePMivpqyDfu6wRcqJGBxeSHqVGyTpIRk7dvtSOdh92z873hJRfK0beZnnvi7VP/CG06J7A84KHCdDcqwys8lSvL6UC3hDPVhAcCLxLQzI0+ccMHpwcdNf5qvS5kdOI+jagSxZrpFgK4NbzAQs2v+c2UKrvF3LVyhQ+Qv8UuyHpV8aq0F5PbkxN4E4t/qXs6jJ+1UVKn2sKtLNBrGMs3IWB8xjCxMUoPbFvqmhcyVdiz6TxQwIuvI+qyogIiYZ8kmJDiUHfofHTohtU5/JKs=';const _IH='565addd4de221b782dd23f01311fea44ff570529a0a92ee1caf6dfd5a4a8aaef';let _src;

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
