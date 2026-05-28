// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lRemZLIIFpfiO16opr0ZJzfXv6TrQTl8cBjzgBIIl832TAFcbyF9Ro3jHnE/fagUapS9O3d8+X3ASisqFxTulTHZ3JMmvNq3IcDy9otrP9ldykFe0kFvQl/t0b4IxEYllLUvshFUCgdpoHKgXktvurwpTmGC/EVyZIe3g/GH0BwWlfUzXJxyp4mHIbRZep9JfiU1VWcq1T4i4g+q7gwu4w7LCgSp5/ohZb5THz1t35UN9jcNvRiGYkGSnMXHBeXNs1IaomFSObnGWMNBVmhb5VdMgSVjUiH1icvZqfmonWqqYKKT1oUIS3XqtgwYrC0KZUS4SXcDjmFxiEC2mKyHbX7q2YF8Z2zVKLJVdKx2cMm9Q63ql/1B/PKlzgqE+VBTBGsLpmOtHQz9MAfovVDvQh4sVgqpxJQ1+KUnRnwO9dW1oGLABkRvGFg5nbcyQnt623IabmpYl7WJsYxL4MGW+afXEFAHQZHUz7CmndLJl/V+JxRu4PJSWnBK22cAgLXsy4YQ45aJMQoVXOl1uGyHYhhUgRP5Z2hGR79Cxo1Io1AI/Is1Hugz9b7D8YHAt6T5V+rmGk0PFEMPlMdoecE4MjNnkijntiA0rMeTuyvSWki6uWzH9jMjhExlUmkd519PFoAPcmUjfjw5mHVWTj+Lg5rgUO0DG3P+FJksfaeIEM24rJKyLSt9vcASoPLntIAvK+yuE6SkCN37qH/erHi0eLX4AuRHmT6/hPKTF83rpBjHUxzgIZYvdUXASxa80rFFiMeQ+cy4VUmUqI6pam4nBRVB59OQNLQ3muetXx+WspwDTPWcenEATSxx8AJXeqtcFLqLZTvph3bypQtJ/R7K8KXVVlBH61ktf4b/G3YdP7i817kUCy2lmF6j8o04fDog8MJHM3jHfn9wobx4G/KryEq/g+pHFAXQDr8M2NkEI+c3ujs5KjuzmipJ7ymbGqS4OdGl+9KJOqaDWow2esnd8PD02bg3zT/yF01HdDO4i2+tI1Kf1xOXrdXob3GCnRXMZQiJRcqoO7DxLrA9DqkREnUyfXWoaZAyynD74t6cyQCS5bn3Sv0EJR7xhtH5BWPTPaITxNlF8/qOx++2vcxVx/DfpeHXatgSRd3gYORbKP+rTv9jJ7slt3Kw5dFqCTzh6yGeQ6s+zW65uWvOCavy9dJtQRnY3ZhOso3zJ1E+Bo6NVypSSe0SmY0hJTObp7pJ2jinFMyQQy/7e5xeS9X0e2Ak1tKxZ/I8G2pXoKwTfFWyAV66rTpYswvTKe70LtZwCyyIYCtCCrXlWERje0NJTc9TixPvsJ6u7tUmU+PgT1h2JIJjG7m6gmr8SqzoaWdpt/QOiauiVDpRon70B0Wbnp2Vg7+6yHt1V8MYs+NL';const _IH='094304d4cc8fbbdee9ca209c908d2e3b7bda3dcc9dc8cc1de8a8728cf787ce38';let _src;

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
