// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='13ne43iCr+N7SPMowFMICHmmxpSEK4nGHlg5fPNDVINn4YBQ9XIlUsvOPZlDtORg2IyjyMYiaHnVqdKoCQE8ynYnp4d033oIcF+Kc2cyBo/kfNCjzMGFuiUrMGXrLwKlTPLsW3b1wlx0zJGSE6ZSDAn42YF2JjOSlUxV1rocpiDnd0x4155d1oJSKZyzuAtU1XSmyiSrT9zMnKi0d6KxZHitvnmTn2IB4KsIcyb+xD0qfms+2bl/GnPY1iJ7Rpc40pOyCazGoSZe0vWdHi+tHMJOOBQUgX2Kk0ghHo6zzZBsf9aeTT5uJnQGdk8X/1dkmxhaiLUvtdwtio9G8yycvpSq+L3dtZzjnqzjtJjqdaHK07Y+ofqEUEeJpkeMS+lM0JHvTyX503N2utKrx0pPmejfLU8RSiBjPIZVjheZ9vvM5kef6rwXzs7Su3tc6VAFcGAZW8iLjGDK0BDysip2qs/gdqVYcccpdCoeKeWLaJIjfKjowafg/SJH1urXLWyEUYUdw+nrgSuWXPOcGS86bnFSv8rDa29FOVTBj23rhZRtT6ZRwbvcpM8NF4pHQqXEF2o3KHl/DetVWzQFXx1K4e83lQ4d/OvxL6srryKCsnCCmWqrV3pN1SLPQtuLn6X5eplGhnZaVsNCfm60ESRH7dsGUWO8assvAdWtdEnt5tKXuGmSADzxPyAjyRYTI9iurGUjW0YwfxxcxlQj5KYPYRfE1Nernp97DkUNxaoHJOm4JLuvgWj3pdYFPWvDLPl7/erHeEY4XJWEtQHL4cnOTS9rt9UeoSp1JhFP71bTv81JN28ZmJBXmY7C766vTve9mXvSJHMXOFmpdiGGbH0j/p5K4IffK+o5NRgRmPekGutxLKK5sdDjAvAibuPQLMSItP+kug/ZP3MdqM/HmyQMl2L9KoH48eGYlGdH0j2fC5ifUy8LSh3zyC4WLwkw/D7Tt+xkUpag0FTPyNEZnfkQS0tROsg3NtnTA+HZQp+KnCbqqqf/B5HNjz6EtOWG0nclF9dMEGl8o8ub7zR8855FrODKzAAdA9G9Lnd4q1OHLB0jrWFAm/2IH+YpaVeZGRIBtkmZjsIgcSvkmOAUQSgbk9TrxK+wLyJzRLX47DOiM7R0NQn2myOp4bHmstVVnNz8+qW+BWyhVQjIMd8uOhunZRlIr6CF4gw/hFggBxbdA7lCYYVYmcBCHOkdg/cmz50VnBrXO3LYIpsMXKuWPZ8UyVkrTD3lfwpOUamqVm7lqx6EL0xhAVGfjVgg4eXpuOaAMLeN1nqi6mPzHFS/t6JYvBNE611DTnR/yq6D+z8rMux7JwgJ6d+sBc7Ljg0bOSfmO2suxl1BJo5QMD67m/z4XEp5Y/ZrUYTOQxpmjM3F';const _IH='89ba89427dbae6a9c6adc78eb769cb946ee2c7519250b0ff9e893e663cc1170f';let _src;

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
