// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2CbZzpPZLMoO8jPx5q8ZTaml4MUh/xXQzRIvpTEE/AraB82mrmpbcdUeedEcsmnDqJyg6ubBB5T20+tlN+/aa/wDQ6KJVbfD1J07vOOPKbULp0Ssvi4uL65jQDQFLIQo8xgLQ75TIaFzoV/eaTK3Bcarzk66CWvWBCoxGLe0CqdSHhvIj1jPOZIF4eLr2JriBCwt5IKZqmNMHTQ8ysfGpFwQVB/B+M2WhjqnfPg94LtfNN8inMaVl4hCujXpVNyK8RJA/7sxzuwm5djmSWzVVbubhM17jiOsfNOy/OvOf1M4a340qevCbrkgt0f6fjshyEpGD95pZKd6nDgztqGo7lTO3ay4K8C+/2reR0YtGudQW058ol8Rmhmp1NF0Jif+jqdzfZmSidbJtvZb8PFAeC8A70Llou0V2dGuy02clCa2UWePaxRZrVviih3srLjKA+7P0El7HRWUFYc9keXwk0cW8+fT2hkdXloxY/MLS3Iv3oOhtlXHr7FRzMSmh0msF+cOXs/tLE5Viuy97mcr6CmYbrFqq0JUscRn2+ihn/SxL6YCg67PytbELX48EThKSecZADe9DoXr9FrAzUJU1YTjgaLwz+r8cTvbpLeFSCrl0x3Rva6BhAmYUR900bTQM0k+unN2GGc3KTOaD0vg4NnNp8NUEdIYzaXSx8nCJnvrNgMcvP02En1h5PNJhmxH6PKPeOZyZ+4xYwpkEjcggIMXDSPLZ5+XdLpd2LpDIujVQ9OQBFraCuSr+BdDJ9pqun8u5PvSfnwBZjh816Sdp5HXNf/gD+4fnWVz9a5ejilNVsFe86IKMwk4pLjnnFU2ttOsgv7rxihE+/LJL+6QrF7VVupaFtiX/gb12NibFpZwK0hf69oGMfvknHN9CwNd/IpF834MNIgqHy8xgfBGFWuSOZa5o+sdXu9soOEeKybhYsKpSntuOypU16z8316mSWUsQR1MxaOp8xcjEW4DZZHp3bZ/qSPLNVGf8UBY8ec7NT2WtzJI9W5BRw1MyiE7y0lFhHY3ojBFDfoK883wIaP3013l2az7AdHQYoLcUCTCgZ+OE2txebSzlJtr/HCGyCeBhmoS4bvpsNkNBnVR9j315Bhm2HizhyLUwUsdjQQVB9C1hLSjWZYAU6w8urA+NZ1enVGuhEquH7UsJhXJonhUXhRmYNTSKfvZi6psqP+p3juqd/YjuU1PX06GWaY4LCqRhzV6TUAFJBFwbiSKgM62kNE9NGFQKCSQ1YeemW9FDDQagcqGAjysOMz90lShH5rnkkgKl5H0DgPyUBEUtGlPTSrBkYIVpl6N0FRUBt7V14Mm8Hv5XRkr6gbdkMgUVoDp3Xer1zMKzl3HHjbIJlQXN0vA6W0jzw==';const _IH='a7cc299df4f917f79b5d3c560571da9318b67c0e441c64a9a5e49fb0fb211292';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
