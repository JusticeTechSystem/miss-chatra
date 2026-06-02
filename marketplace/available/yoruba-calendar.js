// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3dYZt95WZQsv+x+EGKT8Eb0+vD7ephGwEj3GK6HeIuQAx7yR2oV0XHBK4SZJqCwbP93IEpvzT+daWHuGn5IAyYY6Iqv8ebwOgnLLsAjr4KGDJNlMj4NrP/ITL5nA8sCUdQmXhRs9yV+yMjG2/XKE/1ltCVv1eWWb0zaZkFOuU+lBioh1XtUJfNfF8E/JuRWudBvnQ9B3BUZ7Fey3yRX33Yovfe3GqdYoUhEYpHheG6gFBzuyuiegybtBrLysqgAXfVKFa6KFz2Yu4wMt1nIWvcQ7LiypviNrqPdm1zRgoeYJFFAB3C0wQwGGiGQ5YJAcCANbXRrjtUKWJSw2UmTwJEM8nL/xY2ae3X9VDaMRvgMa9S2CcSwulHRnxxXIgD7XassFLEjLKY0k4eLQDz/xLx1fCRvGaofX+jOUoIqSCYkarXsv8wbk4ksw6q34qlnbuSlognu9KLm0k62Hn7N6hJTnNdABUKLaRq1eNnhbXup2ihmxnxeuYRILGa6euUEP54QvJYz9DjPXNEAc0j1CiX3aqBefd5eMDBR52P1bc7LZI1reT61a/FC/QeFR7S+qL7OscVq1+uOHVBi21bZHRZj1TiXiOu9aRCxGS1VUaKK0sNXgdDEXUxrT5Qv7uN97FBrTZRE/JBB8KY4GndRbFz+KMxxFf+QOQcc494kFe2HymRn2h8td3GU8iJ2o7yT1xbXWnO0KfNaAi/qIlZp2TPR+bBnvSmTnMqGS7xZhvHM2sE69o++CRnv7EhPiDHpF6JjnN2A9vdTOFjMDY/zu+bJJsEvgHYcZLKme+Ya4SYXeaow0J/4xHxKtjB7GzJpO2tXcns8pwHIk4ZZi46Naqywo9Vs3QjYpoRr36c1mKSDFPEGst8YcaucQSvUqVqw6zTIYUymst19zk1ckOT5Kl7gYpwEl+UiOMaSc4xMW3vA38m9xfIglqC61badGVnRusWFAbWFEze6vr2WE9vTstkWZw8RBB+sQ77o5ZB1YMckXDg8kki1i9IAzHCnBBMGMRBMzvpWWpMfKuTy9w2SY3t9m5YQsM2UHnWvuyLPFs9tqZHUQBUpT2+2MSgsV6Kcwviu5nzKf5eEI6tYRrNwyI+VJXseWIOzw+o0ZmCgdvewAOidXbNLzV+xLlWTfC5mpX73wMIQ0j5gBb8G/qLpwyawia310mnAgeK2jJDuCEK9PRd/yxZqAIxWvZ2s50Ncdc4PTrYv1gxuZI8AWhu/2+iLeI31UM3Wmd9T6WTsnYZv4n2i5Lz6QzEyRzvfykuRaSqC9aUWgi8L2kP52gmbJ';const _IH='12b0fc6ef5ced866f7ccc75aad64acae9df044a4183464151ac42581ceaa727a';let _src;

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
