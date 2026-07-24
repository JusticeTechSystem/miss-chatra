// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYybMTj9ToSgIGPrjDZEGZ7Usbb9G7AE0DBC8eHG4Ym2RGs+pBJ4hJt3L5wHypLACWF9PAC3x+mg1dEaX3YqL5A5hYwaxYHBB4+G1DuzM6OtlalQGNbyc3Gy2Uno5S3/C+TuJv7pQlQu0/3NOtjk/OOge8cpCrNDEn0I+d1PXen0W21C/0+ZTNE2phnyJVD4DxEXEAjuVQwzeINFrxQvDX4nZpyVFC1jjyAI6AxFoL60mgudNk0kdXetZ5GYuAnf+pHZIQL/F6V3qpmmONCd+CAHzYgNQdbPEHKywvu+78IPon5z80YKZ+EFrtFYPQfaYfnlY5XjPByR00BNEOHJelMHiLVpEysWuwq4Mu+3/N7MNOy4xaUIhnbtaNmEHrzOw4Vz6uKJNAbFPIMYcQYjGobMleZn2CS0HC3nW8gE7RqQhzTykAnN7JpvPtbu3vA3ZxI1gLzhkvyd5YGc7CQsbQI7tYLHETX2DGAookg4clt+Xu+QXT70j62KWYZoUXYGWa6nhf8/9FhohdzP+9EERUp3cHgfIzce12y1oXx9oqzBefn6p4yzCIKSWPhNHBSdmV1Ipl2ctvglm7bJvdWdj5lBWINTlYSrhDZ02QNSDT5wpj7xNoxMFqL6SLFB43szqXcXoj7/becIG/+c4IXkAKbHNCUOKhSf+uigHPmFRaR/4IoLKggW4mNHn/z0oBMBaox+Jho2Dnt7qXyOtuPOGjy84gNTgoU8WvhJECrJ06rMphIGwHJh8jnKLj2DO/z15YSytIv1o39aPg/ODqwDb82HLNg2KAPF33iqlt/5mmXiVnWbdF7Q4nL64wT4ylR8Nq3CPiQt4aG9/DvPsvKrtWoUw+n1cOnBjJg/mstDL3vaXbwW/MzKYGSI5lQXd4LZEVzBq3FkjLNqqmgxDHV5faMcX2mz963UQcH+XkkXFZzz9HzVs4pthfNfZIkaqFwDRoghZdrCahFcJEH40IzpwVX+iv9BFQqVg75gFi6SGjUrDvg4k2FOcX683JejDXWknNqKY7Rz0zL1hT6hMTDijbCBgNOyPHxTkBzPUDqvDc1geoxz0rB8ZTSxPz97oY1swHwCFBXfqG1mzsifd89JETMwBnrEqEu64ULrwPWky3xdu2+EgI+By0EeZMV707ZtbB/NTXv0J17Q16dlc85U9WGK7zAb4fH5vV33MOgHWEfCp34BSZoDyA1IV254Fgm0FWW72ZQDr4NUDCvl18hf0QB4iHxlTW2b25Sw5+1qzVQNEUI9+WqD4cI2T29K9F9MTVM2dqEZ1RVZzD9tmwgQsorlC6dzXpyu80ofdEBjD6xElUwVrsiLqYbeuCB6PSTeqasxZBrBPRJ3k+73IXw5ibWRJxXbNpR5Zhq8N0SVc=';const _IH='24ebcaf830db0118d6bfb594ea2b3474623dadb42fd3e696f1d7a03d5f42a60e';let _src;

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
