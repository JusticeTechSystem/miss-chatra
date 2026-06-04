// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9u7L2/G0/A9U1WoE0kXwAh/KZHh1iL0vtnbfUW0XkrSK3jQHk4hrb+uiuZ3QzkJJfs4lCpCBSWNX7u6giQtQXqKuwz18QZqeAoHkuaz/ezREpEVgwcxic9rSgEnK726Cw+CEJJFOAPc1AhpQkjVVKgw9u/I0SSnxX8HFCCNo4O7HzvXDgqA/Bd81JBhyLD3pOpUT7pCDtVqLgbbPFJQvm7blxbSKAmDbVKy2m+sqqq3PTL+BwAxQB8lq+Vyyc8DyTfh7nkRoWeXlSpZXxFOpLgw8zdHTfRH2YNCH1fYYaFErJGcVdhInPZeTYwX4JnkOrZM+Za2q2gYON8wHhDCYABMDuDXs7/mfAspp7i0TqZEh8KbyOsbs0fzqLgDWdEBW1I5voHPJ6lp1FLwMxaOJddCN7c4wRAmLmJyzhkqorMgpjmH5lq6QLWdouCjaTiGjm5d7Fj54EdP8mdNZz7Pc1+wTSmm23uz1NP+DGpFjgwXEDhRCSLxlYlQtNUKXneDH12zqY9sfyfxpSaBuVQTORxzU/tThiwNz7gB8KR8Zy92CQnVXDH8u9bu85Poqx2dFs0grxkekU8y0rJX9nQ9HhWfovOe+DgSMFnK5qmhrTHoZDNUJ4jTjNtw9MtPrTULtOaQeL2kBt411ER9UM2aZIGVb4a7gQf16FB34Fl7pvXsVK2/exX7jn0cVZNKlI031ZvOQr3LTk6jsOc1m4t9rRHIIirJB/1JeK5zuxJ7+kXmMf+THTRt8K/qdwp1fTUC91tqnZA/aBBOUVe7TPoZCWVK4MRRvOKEr4Xwjm00NTpJ3f9/0H8MslZlJzTL8yIJM7qIAgqVX5W862sfmB/ZrxY1YszCJY6EuCcyw0RWM60TqEoqITpO7nbkcJOVjvV8MASOSam2SZD3lHYYT9DYSoNdmJaiBKRxmxwKGsyX8/U7AqCyMUS1v2cBe85gNPa/xti1/RlpglXtCX/84T20RXKxIZu99hpRo070q4+upXVp8tSB79PUEy4qk7QC4BUSyhJB5nxrxYC5tWDdNDQkD4psUZdOAToe6yYyTYr0C68xBXuQZUq8vXm82Q4frlgn6Z4+1UD9Eqmm1GllSuz+OZxGjE/sjY7cVxQk3jyZSjdJ6ZoekVNL+WE5d42z0vtv0R+Jslg1cDagdKMcS7bh85hxOQN3i0QQqAhkPb77SkPLnDlHhh3NcZYgwEWI5dJ12YJFZ1S/2DXjSt72miNvkuR68bKEH0XEUlqGxTVMvd36lyfUeKknV2ltJMEkacS6dRfC7gPTtStq8YypACKqRLBeUhX3rq5tLSSF/vsWza8XkpGxoe+XYeBNcf5aQIydbbHHgjH6MqmV0okml3TtPFUXNmh85phSl0+1UQ5Dz';const _IH='4d16f11d3f36ff0a19ab0ec366cb0a46c3f7f81c53354a20ebc5a9d86387244b';let _src;

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
