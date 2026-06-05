// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='09RmyhR4plyDSSYerYxGsVGvhw4AP2MkyQTKPEU/lyPLddgW5eqlofyqX0NE9XVP30RS0TxGfm0vPDUd+9WdKYOcGto661gn63kpmevYoU+VKZNE9cBg9+3VPOragupTJ41ckhQEG2oGZ/Yk+kybmmppZoaZBVIWsqYQcmpi2XcegjW/0e15mDcr3J61BX1LbEsIHfoZ3J6WhzdgD80j7jl82E8xb4amCGXtXGRC/8Vk0FmOk5tZdL3UNcJBpNFI1GhvxI5wbznhv71FTCvKtWGS8Fc9ppY4evlvGKw/gITjQOq577TeoY4UxsOZpDWwNLGm4M2FOri5SPbTU6ZkovsKzLc5APJOYwEnZiri5Y3FFDewzCZNtSqWYQJDyAhSvBF15QQFTWHsf65031zdJ2qc4nNkzbBPsrT2sHO7Be8I5ElxwBZ8wLywZW+eUkWyj0wVPjamKpHayKqpYBSBL1PvT1JNP04KU/dQ64fUu5BMHYDf3HlWeCqfN3X2z0y9kT8XH/lrSSnqUN7VLVErlrdzP0gtEDbiLkK9uZPuxhaMVyuSgrIroJmtmJ1rpx75w6IZPBsQnURYwMcYkPP+2ZqOpnnjjGRKE0zeDrBNzK2qLr4Z3lkoicwxEOenkKBgWWj4UP+x+ftlRjYkudQ+mmv5wkv30twCMY2m+Sh7enFChimB+KAXDsHaaAwD24Q9bxG6SAuLYrPwJKxvQMdXQKQMaQK4eZzNzjb89t2KekguuCLHHMY15PAd8TEaGpXLPh5+v5I61/m0lDFTY2N+KpIih7Lj4uo2t37et9dxDoPbpJYZtP0S9MA12WttRCxv0X0lDSMlb8s/rNWNhOgjVs0Et9sRZFmiUquFAsBJM64rLlimDUuX9RxOV9D/DpRLG018JaTfmhxujz5pBUjvnE2hBBZ+cvl0AmzpGEsFb2rdsF3RQfmhBjwmSOKD2HsrU7/fg4ExkJN/Yrh7Y0CaLGxVj+WGA6Anpe+xJmufA71muTlvFjV2gQHkzKRRSUmLUB9B30V4aiTSK+/ODTlRTxgV7bYAtb3YMWohqaaV7tOPXQOhIHP/DqtaNnsTqtVRudAvOzto5JQboqdCNurpWDQ2dBBXY1j9Ha0+5jUmGq4L6xN1gBxyaKQ+U5BDPlQaDOrEC4K8nUXo+W3mLJmpNErDK3rZyYfAT6ZSqd3xuqFuWTy4f/nQW+Ro9qY3utfmhz4eRfX2G2zGfOb47Q==';const _IH='d15206a2188e1d0f19e6f3fe6f3992c55afd87c669a83874dd2b36e62b6dbd5b';let _src;

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
