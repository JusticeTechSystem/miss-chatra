// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u/5B/dVkDBvrxG3QPOrfz2SJD6+9ilPqKuIVuir9Eb60babUj340wQ3AhO6m4txyFtrmVQcSOUhHC+CBzAxoQ6Ca/kUjSzKLA5hJiD0DRdo5a1+KPpvjNCYKcqsPDYtddIj59eyg2bOqkLSWe74whHUBicowoWugQtkHwrQiszq7nsBuEeRtvQyVQO71ExRf9uVpGFPZtvvLj3jf+/G+j8qxS/612z+ekj0ucNHGtoFu1UUsBNcPug6g5ZmXXoDorBZuf1UsdvTt/M3+DtJ1gw9IOt60icHeT6oSSF46sbj3mqp1QH3TYVzdcgZaCVCzHofoiYCP77M0QM4/GoavitpgvOAB5Ni0psPTKU24f9nVMy4UgQwivJ1f4khfp+k91kzLYK1JX//Psy8+QxrC0/QeBkFntmB5W2pV6sjQ5tpcQZhmLbVsjMRxdEuiycmkVppK0tMi1pGeVmyJAJXaUPza7XObhdIBtQyYH4qCfN5IRlBiFIa2u2rwgVGqx1J5FCFuVKodw+8aX0xHLHrC6ETKAm34W5zp248CI49LfGrfjA5VbJOlAIEVfQ7RcfzWvnrtRbx+7PB/Yr+Y+7hpJIlaVG3TMH0vLu3AF+QNbkyOEm6FqjvZ7MNGaUc7fBURtWlAx9JuFAvDYCp1hVzsC9VJNIiOE0+GfKjJ7M0en4mf45XkMxS7YGBqguH1gpnaY/RpiC0KJcxK7OUUM7jz88cxRvpKLHYZfkN90dK6K+nzNUBH/HhpPBrBTxOkJaIS9QvuiilQf5ZSDj1HqcYFIhaukITZ7oMKXq9acrYiBEBrpUq6zmrykvsRBRJ0hcvCXrDlHDCQnufQ+md1m0nMc2SsE9cRxDGhyWyqhIKIAqjCEZi6RLoXunVLh8Nso3Hml8M8w6EVj9/nM7Bs/D61G5fAeVZhW9RSM+Mvn2nbHB+hFMVxxLgd3u7CPbUz7I67ygzH+EwC7eCL+5JMFz1Y84+HJG+np0s1icSU6rezQh/zXLjj/TZIZa0hTmj+nqDBqVZLr9RRoXltaxZz0681qeaeYdsWJBgSQ1k/yNhTPCJQQMUvtYMn6eUBohvmLpXsI5H9NAxPr+HYY2Lgst7f8Vr38tk28M4NbK/q0HAgDTa66hdoZGwlPV8cv0ZuOWiulvbNK/zrO03rGIfDliz+5Vc9G0ai+tvCkcc5WtoN8SmTV4qVQ+KUkkfgVfgriJYnT0sNi8hJ7ovGT2xZKgcX8BJaufAUP5Wo9JY04TWfxWPQ3uEOSp/iJQt3/tGS5hliZGUQMmP2kPciG4FopuHMsHAC4CcAOh/dmlSGAXpHR2s/urx29G6r4FwBoQJ43VWucIOpy6+OpxpcEAyVORQC19Bbeu+IinoGImMohfvZ';const _IH='b0d8248f6d4fda23b435fd5dd153d201213b272a99ea562362fecb4d91d7dbc9';let _src;

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
