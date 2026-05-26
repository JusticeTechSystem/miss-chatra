// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/V+z5Md+GapIq7YBRxjsycBE9zpTH8FDk6DcrAm4pUk93aeKiIPQ/PzhNQheLUN3MZu1+OZr2G8w/n2mbb6aolkl/xiyOhA+NvZMMRpViD8fETbGVARaZWG9mBnfyT8RVv3jeKJJa6gYzEQHngTM6hKdsFfMxqO2bDaAta4HXz3Z42DzixhcbHf+plh44A1pzVSyz2YcqdMJTYZqMWma+o9st8A2Z2ZG7WFHgIbC9MH/k4LFu2I7X4zmexjrICmiFwBSYx0Xe4wQ9S40U9Fbh2hg/KU6VilGgRdCidfglnzGE1UYVij0YQqnNRUBsbo2Pmsex91Ou0J/y5NQWaH1hAAk09WE/DHRI5ERapWnWzDsbnllz72cHfxKkBczkYJkZzzGSjRHTjVVsJwejtWIL0wSnlawgmC9HsgxG2JA19O36DZ6pZHU3xNiiTVMLMU7/t6tmX3fbB+NCmRoOFq1cwM5jYPeVXX4EoYTGfuPejJiXkSKKsCkenz9M6exBSQtHR/u+eA67U8zj5Rp/9ahdoNRTPKOXjhIpydWVXtjc2VZ3Lqht78pLjwLVvpgxFV0GmLeN/YYyJIFJFpVj3n10IzZGcqvUe3Nzw/9gktrqx3bxp4CxUZbpRPbGGuEFaBvB858AfAV6OS2zrzKfSk2p0bKqJ4au/tj2i7NjJZSupplM4XYJPPctP33rRJHaex7BJp63KWuOuUNNHde1Zw9z7K6OLmmBMr3/GyZLieTjYEu3tSvJ+SJ/nq0vOmJq+TQ5invjFTxRkFnEZWsFAyKYOuc5mdL+li6GHxzozZ+VwGSc1PEAMlaOiJkVIEQEUpKEpk/33PTkcP12sC7jGbJusNqt6U3ddx11btOUq9aiNitkOnzKaGU5eGxzK9adzzW6hCwVUMi/lt+rK1/p4Hj7L3IpbazoK79ZxI1PVH4UEYrA2b5ZEmp/glzBWziRmOnhQLt/4BwuztHoHKgJsynztkQXgSzdv64mFrZz2xHtfRER9nx2lHJXhOXZs5XiPA0LmQi4ZcoSAwq4N/XhgPGezkxCMxGMIYNDpdqdudqICXfIDMdP458+dKLsxHxuZ6VFmMhBjgVRBjMLHgzyIHFE6t4e8ZpbPM6yIi9pT13W5irpH9bAdr7gWFVpm1xaPQgVxaWxNDvcGGsADcF7+TlbgBtZOsncJAlMwEI4TfHsLgy7E/rE+o/Y7QEq7W860g9k2el7uvRs0zx2c2h8jO+vrMMbrsFrPTOLU3vTg==';const _IH='a316c06648aeeeea3ef0d97b24216ece738b32c32bfabd1e497d2d2b16e6fea7';let _src;

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
