// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='luhsfx5t9vgYQVwgMPdXXQSnrBoPqppil2RzvZtQlcGuHzqdN6OxaLhAhF+38Mw6mzGESh1tECdZBuaEoJl/vpI0SQNQrtAVpsBvd5evu3jmkJ9XJL/QDGW9TjEYW303ob6NuCEn9hXOxp42aGWiHj+ph97YqPPMasaijQV/jYKhVgKEB7kBw9Cy1hDHfPkIMZ7mt6SgLuOvxCVqNyhl3nbeTyeIj4StBZ66FypcYdsMZvvvMKupYYhZ94CVK7iJCkolZukishoQZHcv1pezoo+MUKl82qIEMJaaphhmVYmPsEMGewSJ0RYJGWvb2UlUJdlnENwSxqwrEPLl2pTw9/L0n4EG0rOFBP+EPkWyW9pPnTow/ZPWmFg+CcCHncj1K3j1pMWHJc9hoP0n5okCdb7MxSH2G3j58lBT8CI+W2LvctgfDxDXtjxo0ZFwFmRB0X8EFdJxXTI+bhSim6RMg+ESRE8IrLnDsXNRdFQyH5AvNNOdEDer7/LpKHjt5cVBJ4b8hWTS+1znG1RXkMJ6SM5Li7O1JFuuIwcDrFL8ziUdFAdV7lV0JdnMg1hcXpDFLXoDnGsiwUVldhaMZSPcY+o7qDBlimtHmo/mVEjx/zpZOQuVZR79KqfLcE0WU1Ci90I7G7VG/HmHNTK9p1vMVbZFIn5QqKlBxNUIT1QuVolJCDhVQILCExgqcZWb0FUVPSgx8gcV9qw60zEYifjTVcThUUVAwm6ugECGDHxXsSyS+nNB7dVNZsunF3svI8Zrh+bV/EOcSVgs0pMEN2eLKHO+TAeJjrDo5fn0RnBkTxd+gS32uoiNSSscQwvTieFUWYjgyU2yKGeCrfpt8YNQ29zwcv+Wxw4H9bvIejzfnvZAqRqw9/bozKarOhHPX5mIGBEAnTQJbtzXq5aoBABuWMKx8tEOADCXiHKQYR9EoyAYWeaEuvAm/R4iIpgS3Q4WtDz7KVNB+zCKRPnkOaLDGFzozcvM6sf2T7ve6ZJ2zuTi/vXAogde9Hl6Zr0gjnFWZ751liTwxuwnPofyFqY2KfA+kH+uVJYtunjkjvF07ZVT9bIdDQaXshWM2ifGMCemXOFLVHbzzq1aCaBeRlsNLJA0AhpstyuR0sTM0BC7LhVbNT0rQlCSEoCvkUv4fedU0VQC/10BxSiy/PK28+L8ZkQdPjkyGBcG32CUiRuy3UJ4yTs1tOg33vyuFwoXo3ivTAsCDJMsGYrX6I/1L4LfO9ZNDuHOisatvZhbML4wwiwsdGOvUGwjQcEwUgZNCS2XNDoji+bqkA5M8I9mmRwneBuz1AAA2QRm6xWNrl5G8MH5uNCO6gfQWeotcgIEoepYyCA8OcbOxZ9rfBW0Lc24Ttkg1mjFhh2Mmg28lqd4X9ZkR9Q18JN0bShgGYCNqh/opfr0dqpgH2p9NNvAB2EMOS1oRb7T7DXjjiaDrFMBOYBtrlrH4UCAQxKwGfyMcei79i945uefUZ6BBA/qVcX5ZTJlW2ZL9VcIgpIyoSzfUxfacIR9z156fLt0h9ST9ts+dW9i0XQ8FY6CA+tV6Kyy89dWHfIp7sIrUP8Kfg==';const _IH='1d3932c52d03dccbcdfdd420ec01a3a29f53f73ef3e944e72b07b65524facb7b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
