// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nkn9qpU215899d6HPPw/ZhLpboPYA5vB4OfP9D4MpPNeYBscFq8N0EUSX2UV6SQs0oWlybBZJQ6FQ+WBt9mGxOPJ/4mQNdX8fna/OdsOSQEg7MCfsb5kCGD3BzIOGk4mQ94wQOJR9oLLkYtfcI7++v39CNUMocGArDEWf4lerGVOsTYFwn21huyzNKiHdmsxLedRTRBzcPm+rgrv/CmShKL8gIA8+ulXWB+k45DL+ZkIvjvTaVaqvvkHC2s795nXH/BouIEnM3Uq1jpVWrCyXniiGecIZBsj6VF+mud6VU5IIUO7NJhfow+zWh3yTBcpnushH0zDtUITxAzCz7QXAmc7tdJqrobmR+K79KQQ0lgQ2qAQODFfNyD48zrpyQ0+HEKTcNRF/3aJ9LuPImVrxx2l24aBC004F09gVjNWR6qbUWdlXSqsencl02pmhwtUEhLSy9igpDB09+DU9pvCqyBzcfWq13FvjjxWjpEITAFlWKGUwJJ5/7JUdRNj+HIIv75uPwk7xwzXNcPHF4CWk8ASp83TfpcseWUS5JlplL5jV/Ha0R0XN0zVg15zHLRkskKlZIbbZSEW6cBcyEjqenW44AANotE+VnigTI331Z9tMHCCeWS/Jv3FOZRv6U9wIZfNklg31tays+csLlJxy8vfpHAhcceR9/tR6r/dOUs7iBbk80aQ7clCD+HJufaKX8H+NlE/GQFomeoHhoX11AvL9ItF0daYJtek4xe+bP6L8inJAXeqBzGfti/8S+RGNf+2gIrmVi25F7xxIUbqBhANtEYS5OItBi/J7ONB5Yu43GbodGfld9NAI/z7ZQHr7wfA8VADRM19+ArGt9kH35M+uEvF44fmpgAaMUv+uvE5ctU2zcRbPemk/T554eqkB4yFaTcrD4Ba5Qv5zhhiZn+L+iwFL1rKBqOBTqFr98vbX1YQjqrcNvYwuuZTgs9polsfe6BD43nqJIY+SzMg6wTnl30m/b2XkKBgSIOZMWY2KCDh/zEyD4HsTFa62f5pHGWjcrjqaUSynk1QmuM6xfDTe1gCb9N11hvpFsWprLt1Ih4L6VwwkNVDMr8Ri68Bl3897i19p1V7ERcnKX/8hQyn5kH7Jxc5dZQJIStsHBlDis9i0xdg14aLivuwNyFo1ICdRHuAXcPEX3WPhvsW8wPWpokmtR1NP5SN+kqXk0wlRO1ZbXFqEbKzDoCrsmDIxJIiQN0L7w==';const _IH='90ac953fd698784e7ab691c16102cc79b82271e8580b4b153642aee40f9a4ee8';let _src;

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
