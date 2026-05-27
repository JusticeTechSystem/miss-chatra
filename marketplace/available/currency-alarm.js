// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D6wAQ04CZmgQ17GvOPg7SE4WaF/O5ABy5rpNT/VxYmi3SQPSqq9EmdEWTTsPoD5/XFbzjbrxNG9t0e0VkT+O3N8aXpT963fUFkNn84+lCQEChMWh5raU9XUV5U0J0kzEVMu/4y5ik476fXafBP1RXPUElJ/1jg8BUXuiEXkEqK/Y+4i4XTjpguV2ue2zVLYbsvcyswbJm/Ys5Tkn/vF2tREmtPZSaJSKdn/uxKNJCEX2b7lN8311y1aXx2FUZ7ah07Y6t76PhDUtYeSNN7QqbQqbemtYQtb4X44EsTcDt418L5Pj6yBNdGONFzwYKRllqBsI2E4MIVUX/HngRBLoIvX5TLpwF8xG0pSyV8SsNGEJCRn+tgo0U0eQ830QyyR+ORiUhtbNlRXmjKuWCN0TEXKvvBplbLClpECooxfSQH0VFBaGfu77r3dwx8cAVihrSxpSzQNKFtVOu6fS1/NnrYtUfCGnwuhn54VWBqL8ORGz63huhr2NJ14xQUG2OP+GIetJjpmtzo9hpqHySWwXIyEoOW8YnURs+I3habryuSjFwPdduyZ0rNGYYjs8tIhJ41k/TcbnEsc6oPJPuwIoIlz1gj9Mv2OqeC6vQOKyDAszTgtKPrEZSuaHPVoDeRz0qrhnVq7UfuNncwrzc3bbLzou0MmDr4xDnVZk6JYGgZWtfLiscQ76xxeg0M8ncxa5OyvRWTUIsOF+RXpMxbDEWVAs7WBgD63Z73O0JR8N/Jq4NpyWvzptQsXo/tRyZDwPQBQ9jwHq66Cl4xgLKtR4I4mKyf1dvxhx8Xt5NrvUW6nc8PF2AxpaTU7qH/m+it6287sKZyo44zwrlPlVjJe88OmRhHPwjKB5c4rnO7iBtUi1rkYmM5ngSaNNwEGXjwplIXu1YGPrMKHrL+smjgvlEHCK5z5JVR1Yn/f4pH3pemN/Ahzz1f77AHVbz3hNCnIQFbpYdRS+f3W9BxLII7YonOYbhvPZAfemG4kqguvrggjLV3Lhkc0qDzW5VLOOPTy8J3pYKYkCHRbHCZ4CIt1Nbm5nvBgRAohl5pmhQKRWfqnun2jIpRMz5oB20vrOsgwpmxNQDfa92kzv3+GGPekgWmMXcJVUiZhi/rIvw2lnszMWgG1ql4FA8KMPCBSaWZbzLnORd6U/R5fDZ9hzJSss2+befTHFXmomkrvBM+ET2YR41tcc269P95iOKi63Pa3JaYJ4Ku5lPhqc94xScDO8+eWiJxo2jWIjaB15jNbz17Jmc8aPI9vvM19uHQXrwOwcZyjwQuUF7DDn8zSyT2mr7LGoQJvq1X6V08Z9KIKFN0eqd+WA8OyX92DWy7ToYvj/mBQEpkUUHuX0+tefN37Dbjxqo8JrBdVNlI7rEQXUMe/1kr39Fqp7TZH/WPH9RDJDClmdLRmvq6zxouQlTKS/Vb3xwpmOfNiCr795EJNqe+6U/wEh3Yzd5reRUO7ePYnaq3uqeOCXjFW8443H+fhUuvAlClU8IhBrDnjSja78sP5Msn2fegfr6LY0GKIIYClxWgKTnntQnRyDIUrg5a34WMPiru3BiCTh47a79/kahXLk+ZeReIsKcwjPpyUHtPWs+YkdRMFEGCYjMfQ3nNndVJK6hXfdQ4Hgq/ZwF62TFIL2fvBvccmibndvudWGBL1K7arMQUvfA45N4Ekzw/G/9eYUa4AjpMkUcPomvBSKEYK+o+dozPp464LfrKXqCWyuoQjFXlT8FprBJ3wSLHngT3mby5xLntw+UJ//i2a8qndrdrxoAhOehcR2w1QGbIq1YDQrbshzIoCaTQID43d1wwWK8Hg0f2FK/WllX+3AilhnqkgQECeocnghr93uFC8=';const _IH='72634f996f3546c79ec8fc138744a342b3f4d2c54da238d6229d582ea76ea940';let _src;

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
