// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SOgCqC7CWgfQ5Xw6jvL5r9JGWK5LDa6Gp00hxTSOjNvBulhp+51ycwht2ZevDmNQeUbPPHGsipi4KSNvsk7D224pamqxFTZEnV/c7sgINqjXUV04IKDirqmD0OX8Vy+hsKjAeELOVhwQZgUhzIJwAKrmjA1BFVLm0PW+JnXmgMFXtUOh8tHs8aPBWZ23gD03/82UnwgCiAIwzKVGJwVSI+dK8Hh9gHz/5HLhgQkYqPrTunmIy6bAN0TN8+XlDxEyoQO52DJihvDordbmgPem5CvyDSi8flBg1X5wCCy7GrtLko+WTKZtIH+ZXT2Rr/4QHp5a/hZwJqnl4K5eHGaV3s92r+2tMvz0AHvDpttikZ4aabBznZQb/xKC0dd9BjCUk594Z1CKRG+rOgvyuDGk3NxSSQRm6qR55hTUQ/FkGWK1MITolmBEgI4B05GoGZ0Pu0gVgD5HHUJBLmFWbqFjzSnp0t325D7asil8LiYAUDTqr9AjzX4gEffBz3V7LJXR52sJeVAYXFZtS+XSrpM+3JDmlzI0M+1kMStIE/ngAEShhAhYivt/FElIMkB8/JnU2T1EHAOWV5XIxDoO1FnNhSoiHRCfnc3FZe+GgwNMkgU/XYiSgOX0vQkcP+YtfIaUBKHBv/SoSpptOuRwvU+hsY1w03W7wiipaknM691ZGtYrcC4mQgQOgDGTWTgc/NGzqoPe/q/PHg5knWpvEgZQ1hQJBP/Xm7UsBKKJ9gk7dfPyOoJA/iiFOerYaNnKwVZgcGjae32LqV4cuYECdg0yYYitku5ezTMTUkTmJtb6iFpblDgwR9xXB4ZY3e56v6JmQU2ru7Qh7H7CtHHXG8znJFyChn3uIDHy0DflgukhyC3JrYFn7j3tmO/6zKiHQDFudGsrqhK7vD3M/N+OyWWR4id+GOLHtm0csaAYzmDopMfHBVbObsLm1K2cPe3teUvc8tqrF/yZ85a4qM6P/9jooNpzTqwFYj/x03uGka0OBa92d3NEucsoI65ELvn+YHxriSGAzVtPtr9kSW2XEYzn8RiTEfbL/edcN3Av129HI1r+bYiHub8O2xxhWst22cQFkRPdw34Z39w+5jJq2412RHcduTLKVd9a7xgnSrAn76QiBCJp0NYuTFMyfgaxGlTZ7u6xDmRV7sgxEN403PwO8tMHI2K0fTUugeiy3u+MKd2oKwM55r2HKeHppWG0AfXwQQDOWrMfDrXFtRH8ALbO/lP9qAd0IpkdAYf+9HpvoWL3E0q3oXM8FGL3ZxG1p3zzcrgVqPCHnQ94zMHcXe7RaCkyYXQgfZrxHy9rJim5/qJKAfi2qRLicQeVQAIhcqyLLoVmIWuLiI/CkyZEJZcYvcGXk2/iFT+s17PfSxCZ';const _IH='57a74e39a56646a6f0c857a1833e6e236ab61ffa8e3a0516821dd149e7ecec89';let _src;

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
