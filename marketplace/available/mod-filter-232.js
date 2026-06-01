// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyr1ULrzbbfNz/NHdhrB0ukIJScj0xercorW7cywPtaoorKid17VcypNpx9cyVjvOtuCTkGc9HMGKzz00coGj09UV0pQ2bmjqBGFSPoBeEbm7XlkhcbCF5XZGD0UNTVuJCGrsoCO8HFRvFnkTmeQynrS/yB79dOfmOF28pOPnaRs2gJKubLr2kCjc+vD8ffMfZKCgyWuB23STMcoxMEnOxnF4ua8HNK2A0OGI8srd57D93FxfWdSnamsjUy5rBfp6UbuRjtz9Pbts0+0gT/0B+M+7C2YFX4gJ2anNNLwzoCAbyOhmLgsyAEsKk8Dij6Xagl3nX755Yy24KfDBw4AwGca8tLDARFcx83Bdb00rOMchp/a2vkL7nEmeRLkEy3Bldjqa+6TmzvrR7v+Z2SyVrLWcESh/ukgXrf9Z8pXJXfJV6S96vYzKomNY8/LJx02hK6w7dKv6WsnTTUi4KqUu8HVoN22OvkjSVmwRbyhGHzn4MNgbTDOL7tAdqPbOiC7EAkCEQAOQgeQYC+br3K11ZFSGipMbQBwvwOkU8ypkZKKW19FfPcLPG94hi5dXr5gUBbnqpkxrWy4YKc2TnWddOM0ewxUi0Z16KouQiHzBrdd/YYqM/kS/mgTmJGcK915iZR4AzbeGkc+N7qViVSTX/TWcDbLCItVkcbVhQUBFFnsDZD2zjNhxCe2UfdV+hvCnbkEOkQd2MsClu3JMEH8wVsru7jBN9Wo53nf+NExCGISV7t/XFTcFcaJ9D0iO4iAFo56yxT4MpWReNbXB18VUtSwiC+mp9N+0wU6FOqwwmPE7vYx74q6rsL6FLEOtLLpLYoPbd3xfX26//tUFPRW/iLRFrRP2EqAxgrR67Qka5cWzm3/EJaJKRZz7UDoakidroEMH47XXWKRp+LLBg++xNXi9+rAlhMN3fAjDVZIcdPX0yJhsJ5OHVYc4n8Fz4+byLxCPl8P5zKnRvUaULY60iM4mI6dJPskDM2RWU8CYedPwVmPN/XmBeA2Ixx9yNaXx+GH68SXFu4+sd36YYG5Rwl6BdlJZSpE1tC9n7lzaP9IGTRy8DeWadZXNfVrwRL3xPJLtfeBGLptZ2RUZiZIuanYpJoXH6wLFdi3nre1xsgUT8bemU1jPac/YMXtg4FXNjcLwWfgs098S2QbbCMC30SUaN3U+2xovCMiDIlbC34Q6OeOdIngSNYuACM49p1fMMKVeHkPeenltXhkvH20H5hbc2w7r936tjkR+4IFShc5wPpd5YqoInE8/Mzk9zvWe+PFWZxwUuGv7Af2fXRM0rJdjVhsNTWdBLejZxwQDsHSliWBANMnnmNEYUovrl/gWdQDeNG/S0C4ujfef4Pv7Qyf6iKsvyikZ8jhjvgjksfNSbe/31STWW8=';const _IH='2ad8c0a357da7c7dc487d83a21d6dd89a14bd13e8a0197078f8cdc288709ced2';let _src;

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
