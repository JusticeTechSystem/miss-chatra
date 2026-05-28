// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ayx1tuesmH4lMrGUYxyYuXXQ4YO1+57UxoS145+FpZaiE6yuqqOsVsV+f3IZ3CV0w/fuPVddKg3wzJz6eCsCtNh4NkLgPGj1V8vYJLKQjMdJ53Rl9V+8xfq88yxQ2LIxa+/KeRABRTG+0K3RdYa9ZRY1F+ZD7FzN42IxM9v9CPfSb1QXRywJkEgermzp5+78OGwkC1/OeYnDzM3xAJfammcUBK7FDYgGIk83I5085WTVfAocTWdT6POVldjgO+q6EU+rDGoWYIcjSifGKHiJFdbvYZ6I2B2oX5NGBtYfMOq+omH0dusbhAxS16fU7RRb3oCJ35eHMCegZqWarI+/8VZZydBznMQEfO7QAPWXeSfWlifju6hZlvEN0y5GEsFoxnR9nAhNFRyBG2ujJQmiK9LnyzUQtnsAsS/7Bi7WwyHCyiuyq+Gv0KIib8X2STHUwHkO0HE8RaBX/By+ZskEFnxjVs48K+XKeO+EfzKtNPTayDfOPGiIsaoJKsL1XYreuOZESeM4Jm8Pt2NNf1ALVlckMJIeR5oiFTrwy/vx6tv8+k0NoRDOakICWTadHLYjcpOyAMJAIhKZ4zb7o736K8oKHxWWZm1I9M41O3Dq4MfoNIpjC8MoaEQls5uU9cAusbMgTxavEkuh3S5J9WdkOQK50Q1948DVCq5Ko5ZfNlsMhlg+j7Ed2ddMUO7ZxsxvJmtVvPzQDipFaN6nCs1dp0mUo410fM9rzWxcPqoLRiH1FaNrslZRJc4bKbx1oX4afE8ifOUxVMWttpZHyCiWBdzbqGvtrxlrXz5Ry0G+/SzTcv5LZ4xHVkzJwrh/w9KnQZ6hbGsOEkX8F9JEbd/OXBI0QNig050e6t0UEHWAnpblTIhd2t2GxQGoqyBvux46fn5LLykmjbd11Hg8cqzTfgnW6tQ8gkOQVEiT34q8E6HCXS39aUagmkiM3TZE5TFcP0lvGzJ/1Lf97RmoYuJl/XGSeeho/E1Wp6YS/Klph6u05GYSua4pBJ8sE2sVW3wynkw9Wt4nt8vIyFS9dG8oMlYxLb/Y7IcSQw49+EhAFB9I6kz+mO8E/TKLA5JwEVzvne5sprlf0toasYPAMSLpPlkTS7yklwxp/YJyoZ7Q6wIY3OsbvxYH0GLRC7435t4LYqX3i8UzzoAPOg7RtFUcqkuphUfQ2p6iqJVa5bP+BSh4QjEvtjFVQaJvB3H+tL/HX9SuUXWFa0I2Q6JWuK1l9Ldg/gNYJGyNLfOttD7Qam5FFhhmzpzJwNmJ9zeHoL4yVVQr9EuIdwfJ3EexLCXxW7XGdy4scIVXAlUq/DBCqBXsck362LomlKzlgldHAC89ai8G2slxFb5dmOt0D3jKN7xXGO+BeMyPNtYeilbn';const _IH='218bc6cf4ee272a399d8cc180516be32bb396617f4dc95af98381c291b935ddb';let _src;

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
