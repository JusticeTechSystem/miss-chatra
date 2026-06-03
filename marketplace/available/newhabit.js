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
  const _b64='+5gVCL06H2E6Z/h8LYDTKMxTfy7MPf+E7y/UU49UqDts1NTjm5Z8gfLS3fgUP/YzXVCL7kIdqjYO++pt19kEnK8u/SGDUyXIOq6vZEyoyZb+bLueNdGXM1X8ypX1wXlS5YY/7V5YByBbqVXBkKBGkkBPB35uqZs3GrdBj7ER3RCAHyw42rmUpr4gs2Xk2d1bOnyXogJsj29Nnmoq9U9JsQW3rB4ou2pFXAdFTPPKs6riFFQmLcjoILE5J90nK4w/1GdvA/9K+WnPNsZfjdH97cTordb9q9d62tNPpLB/8k4H+YLcEzZsoBiZ59GYcneae4QzyYVpt+c8t2/MBidl0RwOGB6zGYrafAF27OIPvd5zDe561KxGw2/bWpEjO+4lJdQzzkAGhjq3giyWpYxNQpEdMXjsVMgcU9nFXwnix3zH5DkzR5K4OfS5fC/QAA2s1YsrQ0WUW7GY9dDAaRfEaxSMFXM1jkbxdfJ4+eQHfWm8JF8MXLSpyWTBBoiJnl8uYGsQwrbz6K2DsaQTYlbqDKjQEzaXyc59L7t7iXosui4wJEiSAkV/vHZOgj79wMzxtRiCq2cBMqJh1c6fbnVrKHxW2P0C+6H6E/7Q/1OiQZa0YVQzVyZL33lZ5D3TCtFcEFb337CG/0sKj29eJa7fw4ZQO/yF2dCYAKi4Ezs+5+lUp013T/fLzI0uR0sXE6Rvgk4SYvlga/iKhX1AnMvE/08Eb3jrHWPrQvOZaDRZV/r0dcQDlOm2LkyCO0EhF1IG/vKvH2vXGOxsBT1maU/tKQbXjeBQ7rfTEeKQ7QFzaDZ2AvKPd3I/e8Sfvi9TVPboshGsv25L/LUv9axM7LY0w7IhEfXdKNaoDITTNp6pK1TOWRMzwBs5VHeGRkMiRBHltUq9GNv1i6JRQYsbDpghWylltCKal62lJL4vOGS6TEIz76gHNMuKKa9XOZbwt/NO9ZY0N5I1LYYcZCZeKj3OLvWQL2vBngkkfvzBnRdRFZFRns3onFq0V9jLtrTYCwJJZORrhIAX9BWR3OAVOHPnO+Yb+VA9KsAXoVJUTT6p35RZoE8GYE6VtCzdImfuahWOdtX4+kRWbHUCTxAzLkwIIF26V2P0d9ho8JXUYCBz5io+Q5/Ou6TiyhIKFPOKVRzgOwTEqY8nXTCtxvZZkXlYlRbULvjSq/YbGthPLXCZo241RC4phi9+/a8xSVD4BacY';const _IH='48160f7e9f4f2e1ba3d38dc2198a3091c440f98745ed4dc9fa5aecfe56caa1b8';let _src;

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
