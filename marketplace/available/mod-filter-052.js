// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y5EkQIr2wqt/172PBnK+aJkKppR1xokfzkMUR24GdQ3cSeBxqo7BSMP5el55NyTvXwEX9eIZxmgC8mAusVrMbRBkvBH78zbfBJ7WMWU/pZ54azc7cR4cH9Ky81kKBNXdwFq1tzKYamfL/BTVZyIqAjdiCLZVao9qJY1AD/x1rcJoZxnguHY1VSFLQMFBEJ9uR91asuPk+OXPMz3sSig2FfX73I7jVtn6wdrw2zOUraQgAfz6kmMlx8lUSsTFPb/Pff7giipCli9AZ328z7svwOi/pDYXzmhJqIoS7S5es3J2hHIFP2HE2w+ogTmOK6fJeJLxy1A+o6pwe1LuMQQY/WUnyKVJFb17hstO6hPM0FYzcpQg+WcUxL8vGhxasY+qOPNaKg4RJ4BNlSR7w2H5Y22P7VTlMweRBiE4N9/8tolCdRcma0k3Iu+4SByFjRim9QryFfJY0jlxqfM9cWCm/oW9H4nCr6XbwCxYaOmP72T6DoOAv+ziT9RuuqnJd3FkeTXiJMOAmTK7HjGxsVpWnHsaRgu5AkJicCGD0LSnvMFmbrTf89SeKxwnWEcuGb7kIkvXVL+bCDsq9C5cWzNQeuI3Ng/CCxVKiizULG4ns+dvwmqY6Pt5N2+BibPedwQ7hTUfNGiH6h1u/aTmWtmyxc2RLLfS1lnKJywbzizzGKh+KrwHKWjEzl/7T65HMprnuPbugWqGTO3yG1KYW3QQtA7vnpPtSbHL9xJKoHAVz/MSlYYvZm+7CsJF4hHV89AcyGcbcXRVCxueFpAXigbBH1i0XCUTId+aP0nEYCdgOBnsBfKX74eC1r/+4+9lrWyvAgVeh6wZRvWm1vx9Pnqqm7A9Y5S+K5b+Tbr13sAd5rCKGhrg2hViROKJZLyPkEpn0fwHUIYnyew3iV7mDoKngT4wrEsUCWPTy3EflozaejKXyylJMZQTNycgzBVzOBX0F9mvRWjBsApX+JKgEyE2LqYe2mVGym6Q8/MPB3xyfe9pW+IMRPgZ+m768tpdNjtj7W294oqhSt3IblBixtpAn74K7lNghE31D+N+LPPcJRu1paUxc+Nv0B0ItH0M+KQOpNsvoZBswmdz+d5nfdRmqgbgeAXmpBqDAuPgAr4Ea3Gc8LByinM70Fnt34Cbe3yGDQNChFKv9dJQim6ih+F2fPqVKH1Psnxpmc9XXtfuOdX+QgR/v3k9JNuPAoRxBYSbU8F7gwwkYtJksfLKOWTRE4NtbRx/01adlBSpLhyg5qz3k9SKQleldWtRqA6RyxkQToEKt4bHBofiyl71IG+/qr4U1cK1dSGrhtHwDee5+Rd5SGpnGtu3w4fRo6NZ4FVVD+/YabnyAN2MMwVzjTI3evBbKBOEel8LTfCoBW0l1XOqGe8=';const _IH='cc0ca0640996a32d342a5cd764e454c620cd13f7d05722b1a40fb1167959f3fd';let _src;

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
