// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS55Ue/eyWi0zzUEKPSZQdTDWua0y4+Oj2uhgRSM0UCOeqPlmS/Krr/mtYkeLaNtC5Wgj0dE/qqvxDqxDCxwnPdBeWxBFxAOH0+MfQIwimH17D47ENm84sDAY7XA5794ShbtIIP95yvNNfAfWQtLoKSBr4soOXkeqYEV2M/ZgzTd5Ep+w1/xk8bsjBB2k5GbhcoH4bxYerAZa/JiNf6Gq928HeOkZJvlKjrr7vjqMiVB/mKksAqWfxGJNCZCqfGQpnBz6iA8vBvcSSMxaUp4xObhp6FjMnng6IzCpc7DAWdkn+P0FYf5D/t2Zp1HFg3G3hwTKC2chpj8+c5COQy3b9TE3ApF3DR6JGFqX0/x/gqSZZFggX4faTricGSIruxaoszCYQGQr6HtJmZdO3mBKm5PwdDX6zEn4u3hKXP+w7Q2rOI+ziZk8EE68sVU5nj4XGxl8lAD7UsJVIgfPEKOHpaLH+M1HvyQw3/v5J6aa9K5Idq9gJuKIPo1xMUlOjxDyfblEK23c+aBh3m/9aneXCATC5n5G9XLUXDqBRiVOcwZrlxPnNM0M6WoHTqRF/Os2x+1ofw7sfk2zgyeh9a2tYw+Cwpx2AgUHXoh43aw7FD28kFB0CmEOoIJugdOKTmUUBIt56lbVIz2LqM5m8UPYXLCHzl1SXl/kbGy3nH4s9a/zoWrJPJUPG2MJMK3L9NpDMzW1v7gwVStyl2cT8V3hQzvFG8N2Dnzp83sel/XqtCwCAxn2f4lmjeE1kt1GrvDg2j/4vjGtQc9gPNxBhYbzonqU4Vim+8DPNjrhTctPtihMAdvD/cQxr1iJPnNYavGv5lDgroeOeHlK6TDq9V8YcFEAF5jchy7cRZLzZZ82JWZ02tRA10gj8sMCywn9cMGo1NZAd3LzXjCbryffQDmbo5D0i4RftMw8I5XC5/HroSJXWhYYhBd3QUGfM=';const _IH='546a0b2a859ede8a9894c71e1a79a701dc2fb5a057054e940946163819e88526';let _src;

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
