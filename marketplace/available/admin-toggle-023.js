// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4bbUkGNjDibVir9qrZDAQmHW2kaH7fCp5lHfuRX59XEETjcFNmzBDvOoVpGMVUFtOGj5WGriuJhZch5WQJCq7v0CHSA7VpV7nNne5+Dq5C84FZHkFkjSqj42gTZz6sOL4dl434OGcveRMOmcK53aPCuyiVqgYEkfmWWy5rAkvmPVN4nxoF5aU69BsovcY9xzW9qOQReBEpUuMU0pHbJhZvh8Zy3BZ1+4JhZs0DDAnY+R+v0lCU9KbKkRrD6oA84dUWY87xc3YdNxJnDf4B0Dkh9YGExzBAGsIhrElUM5uJ6jAQWAMPgZGAqdtH7qHpxmg74IArk6PZSBN7iZgtR47lgsWXc0fOPW09jN1oUIoBkmHoYpDA1QxAdR5RNni3MooOt6UeASlAxAKmW2aemi370HAthwHSYV8rb/NuRxX62n9RP/H63gL1j50Aqen5AxLw4hVamuZIdkujAZQubg1kM7Mu9kYTIy/FwhcZtBeB1EngtmkDoEWHZFOc85htUgc5WNQ29/X8/TEvuSzheM57DlAIHM/zoAmL4UikH3S3APTAzekEjpgCMts7uCSrVLkuJZC+pdkwHw9T40JdRWMhS65pOknkEr1bFo8VoEVUNYPwAGb+DL1QfhzsQ1uTrxagMQ2xy05gvSDTT1T6qr1rHbxmeOglYh9vF7JKKUMEFGwJwS889a41QO6XjFnsh5Cg0m1WmXZDKS0qSHv5TS3yks/WMzNKSXJe/9K+UftBgqoERwB1qL0tleD44EmMxHpGbB2cSIYgHjBM2p4DREEjKvle2JG4Efmv7W6NPcafVTdi+mZFfLD2JIwgszxePsXSUncLKfC0c/5dr1eXSRnVSic50xqj/MNYK2iM4vYWvvpik3QxT34mFCQZfUDNq08/5WmJZu1TPKUFX/mSQ6h/LJ0YcoNS+74vUjG8ZeAJfLRAPICVt/+Y7l+pB5fzjbzRjVMDug2vQm6r2yiwlPP91aVd5f7BkCM3cb/unbUwpdJe0qVkv11qhqjbsA';const _IH='a31f8d138c3ff55f340f9c738f23b63fd5b7b1b332e8581f50b45c81ce45897f';let _src;

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
