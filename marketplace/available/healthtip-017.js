// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aiPIx+bjvfvbeAdFg7AzfdBYsyktg2wKrh5zP9R9S48E36CNQftVaGVcEc4aIx27FRU90g7ZFGOvs/fE4IZIyP6Jb1VhSmGeRP0LrqyqBz3/r2W/BarEX0f5GP2wI1NBigYzkfyTIoK8Z2NRq7dM7WPx6Tl9qcGWuHrP3uRkdV5lyeQFfsMFlm5ecQG6ER6RXeQxqcbAtehiDG76JqSlU21AHvF3OylEy9AmFZP2jGTxQPNcomdZ9jpLoc4TH71NyMTVL4oAOZjS2GmyPxh2qA3FRmeAkm7P+AKCwHrA+w5V0CIgXK0FG3g5kFMUIP3cCHHLlcDk11V9OogiYbKKA4SGd2eX3Gw9wWDJlBzHpQ10WVwLe3OO7y++tVn69hDRZVbiIDlfBjnVd0MG3tYz8xttRLirqcjSK/KRg5Ls8KXpG7E8BmuFTsdBEYVD677YkSURKD243eOrAFMDjV4zUDGeOt+VRIkTXq/wGSJp05IlWRypjHFpqZdoUJrjj03WotIZ39xmeozkdrOr/rCEvPLonABt2Lv5u8Ihh8bWpBmNkHfOQDc3YGbYPJX6M07xEHFur9KTPUTlBiLcLB9/QEz5ahiO+5Oi8kZeajBVUR+Xs1c3uhRqq5c+3l1OqtxpkdH2/W2VoOxpxcaDxXQTI4dhExM6OBYmOR+HWLV5bqWanaJt/Nd4FP0bgw3bB20hgF+PnCmx+JDuRvMeP2sFcsJBAfzkbYhM1HlpYWZTp1K3nE0LXPkU0/ZnDlbMbIIhyAyGnC+SneQjP4AQtEKJvPDEuSwl5pvZCsacoIpMbJ9WhIWM/9T2bsRe51ad2aqM7h3zzAqU6ZAMlzw4qb/KKg7x4J0SmZS122KXslNQ7zCUR9KLVLGCqF2/EKmxsEykujWWCc1VvpImwn7OBMEZZnAXYSEgX3OhP0Kaiko33O76Aio7CdaODKeHQA8=';const _IH='ea766a08f4e0d1a349d741b2859d0eac583412d2fafeb3946c00e8a2ea9bde9e';let _src;

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
