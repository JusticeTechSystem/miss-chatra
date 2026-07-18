// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4gyZRZWA1BRPj5dvPPkOTLifQBhBbDK4MVb/Z8/TNRWeDZYrOcrdNOGgsOHH7e18PM/Rcbr6UaWzPNn+VjWDKRo07dkJeXEeYxOdvausjGadiuZpD2wfZOKGNlLPjyzbH0YaF9zLg2hnuAPQFi0R5zB/LY7Z0MmiEZFMKmnClyXGLG9EFzVncxYnLxRrQrx3q+BArH3OU7mFEbe2BmvTLb97kQTIPg4uAP63EOQA7xylHuoGpJcCba7DoAfsRH1uXsAHYN8mSAhH1uqoRswGYG7PZGTdyj+2KPtoX0RtKo3sAuRgqNGczORFpussv7x8nl1Bw1CseknJM8AyMZ+WpXC4A7Ev1nVTKhr99i/WKoDehuN4XnS1Bd+m6WpE5VbD3gzZ+3JDRQFMB8hpnnVmbdh6+WUy49Bd0n6/dOWMlXV8PYSu88DpUZRypPk7WEMnNHq2CENQyZXszir8CZ4BKHkTK/t3RnCMqN6LG7dLB+n4Fvmk2XtfbwY5PhVLa8oCutsTqhXUWkyn/hYT7eHJABHw2P3kI59SYqPvh92YXcpcAMdDnMvqfjT6jTtzgKVcPYZPOc09ghyl2iHtJv62YJeq989ufv1vZF4YTLVGp5Xdl5mF9oW1qGE0cMQ9VTgSjBQy4rBMYGiiwbMsAp18V23heyIFEnu7Yz6eeYSN3lSbjzLp+tAmpTaibfgiwzQZdIQgQoxxml84q6qLtZLuTdQ2k+sFhQxeie/V3diLfjz+JKW6B4aGsEutqIeAIx/KPo6DQuBsrwj1iaYUl/fHxFzZK8QVT8hSvoUIZwi3ujYfVNUoo1983r730OELKFckUejYDyVwpSzNLttD7vAeIVs3G+DyhsaMtTWmstZMWiSdA49veDoKDy8KcbRWHhOnkcYL2w7IhjjsuTWrbOXRQ+RzEGTuRuHvI8cxc1NknnMuehwgS3eyeMSXSPjJee7ijfwgzT6dSNdqbF9UxZlS42gyGorMvbyLnhqSW73ALv8iO+pPNSiKmwnZriEOWYwm/gO7VNr2Sh2hlcWTFp04jA4WA/3HNSfbrZooRPhVk23qLpFM5I30cSDobjuU8orcyy42WRTsXnsSkEs8RLWQSYE0IGY6dcngxjg9NLl1h6FOSSOO4yxDcK44LYmpwD3OEhKvC+b4nMwJrGuiTzke+NsGd2UHe56rCBwLDmFdqHQ1rL5T7eIbdH9ds8xoACoHoCNMSNyYI6SkCKQcHhc2jVOvTSjoLwoXRRdD91HTIs1ea0wv+1niTFFE59S4E3znxsY38lmg17LVPHaJxsiFV3SarRiSUOlivsLRS4ks0z1CaBfJ+gAXne9LhSYCx2BMlfNTJOgs=';const _IH='6ce0585f1f77c168eb322c3a326b8549afcc9785261e07b77dccf6295ca8263e';let _src;

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
