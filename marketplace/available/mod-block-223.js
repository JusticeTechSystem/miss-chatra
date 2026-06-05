// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fSb09zb4BLEAkmb2acjCEhiGMuntYPMAC/NTTfmNwEZFblWHmLVrxmQmGRWOPWeijB5Bnpu1B52CM3X3u/fg/ebo0rGrf6OqhaD5DUfbWF0iN+YQVtoTMpygHVxFB+QJu3mzLceHDCewWpQB/ALSZVhf21rxz9gvrnh9N6uLdk13KJ6qHT/dL0Wlawc2DxNzCCpIfqngjhgjDgu4xRIhFIN37lA335DbbyDkBdXcoEOV9S8iGpDfgzHdXIziRPB/zgMD9PNcay0AGqwRN1G3HL6PMqR1vRoT209ppOR3deB7uxSl9uMTLVbNFECf9kF2+hCyhPeqFeOV13pS57jmbIwHSqNDBhe/2bqu2QnyJdGeRbe8YvJ6QOxKHiDMvNG88DddD01K72mQIr2UXJr0jjzkeF2E2gwpiyOQkEy+YnhaVNTOIEHpncwtiiQ08/gafIqb/7O5GgGV7LkzDWQFE1h6T7VC4F73pRuUeSJADXPCVr1C4IpQvmy2v6tejcwYtbO6ZDQL75+kNL+bFQYSWd4aG3aeqIyFkAXp1YcO+TxMFORP0MYI3Fe1ZzC3qd7rkw1nE7N6SjV6Vu39yWWglr44krtNsA5uoq7CjlAaFld3nhhsBFrXDvhwD/AgycjEySSBZQstbU33EOt9qGVY+7cb5+ysaNWlOKpfH4GqMyiTckUp6eF1NgZ3u0EMaoyinKcdJvbVIqSlvliy+KeiVM7AaSPLAQDtb5q5LZvNX4u3V8JBjBhFbwLmeQ1NBFtd4qTWh6PMV/vsBAOA0kw0HRd/e5BYq+Ghvbi2rjY+jBqi6SrBIsb9D5bS6Qj9tvkBsuy7ZM7L7NzwfxAM3CPXlA9M+wi33IdYnGYIg2OVRPf7hCUo3WYW/VeoVjB97tPkpNICsXj4ey8fT00mHZFG6zre3zINi6Qy9JrJDFQJcVJkoHLPLyIPPKwizQzreWkoq7hPWrVXFie9G5OmEQ3yqIVixsfO5OMorFpyINvxcp8h9DhsbJlYwXWn3E2mT7LDtxRKtUWUld+M3qZpp/232S/+rqhUFRYXITkI6+86wzS/zp/x5RT9eaW2bHSpHLQ2j4eQrqKWSOK+0JujBWTPbNCZVXEu90gVCePm6alSWmVzb89lMnQQxLa4gz3tDpkrV2xN45RpCxgK6msReKPZJDtPXeSCsj0Xue44vdkc9BSGKZ6R5REA/1m4GSGlNb6NCtAAQ1fWgQFbAv7c28yRXDzVxmuubHXh4HDm+19bb0qN3h9oVMn7BxlCNXFhjT2JBZqIBAUr5mUSJ5f2MvfYq6qzeLhfzmxdhfuTa+VMvBJwWf8RBepKfAvgDqP2d9sBvA01+P0ZYP471CKyEMTeu2tzbP60nuEeLL6u2SsK';const _IH='11603015ab644e885eb8bebf94c37cea5209dafcf98a7dc12cc29bfd806795c0';let _src;

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
