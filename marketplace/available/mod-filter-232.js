// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ub1B2OlT+6g/KKsjBPNVeCDyDUDQ8bmjqtb6d4nhwN4kh8USY3Q8X9+v3hA3RzWyQLOLhusBqCijnJduRR+lvSD31PuZE2POLnnNFjbzOtTlo1KpC3G8Tl0Ln2WzZGaWxUewv9Xw2JD/CKYAc9w0Sqm2QBWmXQagnUM/mWHgOds7sg0U3xn17XqcJw+x5i7K7cG8+N27PQVDvrkPdrqNuYqAw83lECr0ba6WaLTfqQNA5KH/bWII3yAifiWto7hcA3kfRsKPzHCxwwHJwoN85ta0d+DyLlAOyzI2Ps3ZPyZvpL7x5oQ4+LWmczHnVr6hRvXrZd2fTrNTbszQN5J1WQXOgM2dKXgSVGKfPiOUXy/gn4bSJ1HSN0Amvkgw2oUbc82Vsn6qHNxWnT4q/hfWLrspK5ZVirUwI32zT9x/VWLS8W23EKErp8Gpy6G47EVjosUeI5xoRXvaxwZxMCga40PzkrF95PPMS3E3H+8XogFU4X8m1tMwSNdyaAnVBkEY50QYiJ+UCyE5XC5GGVfsbZhdHyDwZIsRul3FD3bsUykQfmuQotUx5mzOs6BywLJCVM7F/r7ZSDS9og8zR7He/LJ8TVnHeziwxRPskC3gs1ClaU8JRU3Yi56F9WesNyT0vgN4SuoHSllz8snkp4SU86C1xvCe3HZh3s8m2ZwYAG1QpCdB3Gv82f9Dp/Cm/TVq+l24osWt27ujPJp26NapuJ8wpuuIXNvYMQ+cdvZDA5Yjt0xGr/CSyXHXJ0QyxGb/wnd+n21Ta72UjyfD50HOQ3qI692hCDXxvm/da4jYO3PP4vJTlXSg8ribPpQR6PZl0bWhkPoMlCd4UCWc5McqUtuaYjPjB5Die2y2u1T1gHPOmTINI9NQQ21/TBs9OHhcNZr1uY6Dweza8y+NZRO3RodBdlcs5iqs8GYvSTxc+tMutY0vSgiTyt8B0KgsxsWBiv9kt2fJuvk4OIxSu/pnOAPm8bZFuho+xMHZ/EIubUiaXJw2SbSPXJptW5pBeaNZ4SCIjDYidaAUIjOy7GPtgpRMJ+4tfk33L9HfRtFwBJdUrJChkhFNYsqUW7ZHcLn1ysbxxdpMLArQffu0eP+eUlBWnMebtPsIqWKvR8kSv+peAW/07wIlDdtfkattKG9X8tqnqeRR6nHWT8ODL/IMulGG5u1wsw/6raJTMvZutMtFQhfbokMLU1IVKl2AmA3wBmnjyIOASzbelq5EUU9GsDslqSBG52LfWqL2tm1u3gqO+qc60n7jzpq6KxK3i2LyFHpLca6DgXxcsBJP/Ndf01kjNCyExi2ah5xqTBGmJjUGWJmXiez461ZjyvRVgaHV3cTSXC0AxiP5Ap8Voy5x+acVZ9+oGaFRCnivvo1RZTmB/c5KFtMcCQ==';const _IH='619a7f76b24d8545751a87e6c35bb2c5a89df7a72b185991a81498aeffd53f84';let _src;

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
