// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bkSczzacOWqKF/zz3QPwCIkCKLKxhOlka0OJDv9sxQRMShdKKw9nR6FlnNvlsz+QgC9Osvl6IZKx2lblW2eiwEoFYF8QFHysI3GXn/UnaXMAiD4xk9RvijSj1cz4W72n2Yd/bfJ6qF6aUmLl7UX9FkzrgD75fsX4Oj4X7oUtqqreNiLIpXf608CNmTDG4GFDc3y1gs+6CPErue/SbptUTyiwCcqBBO6QJCCFe3TbLzYAhLeCSRiwQteo2md6+Z7twuGn0la5ujGz/TD4NiB8z7pNKJcXyppf5HJMDNYs5V+Y3whMlwkyw1Rbu5GkfMVisqlCicqevMgfk6ak9Btjx0y6Gx3I1d31wuf+w7iCoydMTtm0LyrpykAglW5u7mJnu+14eE+bArbslpYr94VvDaF6GSNEsbpFBTkp58+Z8uK8sUx5usBRt6R/tXUexdATlhvOQhlZoRs1AZ/mXMHOZ395VE9wFBMHyEwFpA0CnP6Mk99xohTmqLxkM6rO7i4fX4ZR1Jn31zoL1VNKz5xOmOZZDDFSWOwSHHmLiar3/VMwO/j8qTpDThfEvQQRU+PcGodWe1DUTWuIOH7wQ6iN1CtoYTYCwAS9+9V/JxdcKYOPUkPBQijwLKXNbuHfGPuuLRwHp2wO9lPRPq+mDg1/82RJd611xy8LjMtw2EbCG9YrPNixOEdve0TXMJw2pFe2tlRAjDzcey1YEq4OMmz42iRZuPeSrN1qIHsUGeMS17V/KJT4j55NXKZxHcYtRvfc/3vzYtIEArgnfxBX6z0rWFJqCItk40inG1rdrSz86n9IbBpOYyZ93BoPEelA6hs/S/DLMSZzZO4e9eqmtJxT4dPhfDEvWKcvukIlKwSyVchPRwxzWD4T4ly55QlsRKntsqeAhsMNTASdkoank5FUFM+aMD+W4/Jxhc19jJobw/XJkWYU26gTRrYtC0kvdtY3tQC5cDuE8BIJX0hMkG6kVDIJrDWmUI78Lh5o80s4SUi26S0wGFyrEHo9K3ZvUsgo5u2H5gfaNJKnWbfClZRK7BQ9YxoxI0mt/llIwRraM28bAoP3A+90H0xKZrFyqrHIJA+rSZHsgoyyOpFDqnxa6NBrRWk82uj3N8a08KUPNZcYGY7n79qxN/sUiZob3tt4yNUoicRK9DVMud10WLHVihtCA/o7qt6yFX8YgxNgvlMtEM4YbULuSOFmXgcOu2vGHjid';const _IH='266dc4a0178950a7dae4289e04aee423d2996ed58306af48fd11ee189aaab912';let _src;

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
