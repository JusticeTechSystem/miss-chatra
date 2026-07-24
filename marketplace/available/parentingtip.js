// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXZz73QTvxgBGNOK4ittvJ4l16wMgDB0527I7Z+lBfEbFXEcO5rmnI9eQpqIMXCvzikgxsHL/0iAE7UF/Nrl5RI0TsfEyQERJp9ajhSw/DwtkGo3UjwlDmIZL29z4hv/eHPQZcinwTMVH4y200rGbaqI9PNaD/cW7+qOAaUfvhcElXAHATjtg+p6PG1yiq7SaxY5VKxrpao/uAWnzXFcxTA4tB+cqwxd3ZiLhmiQS9GHOhdx3Mr+fXonr+w/BNOkFZM6qnJXSJsaXHNpIYauVsxoeeo8YWWecproLFFl/ajnLwrMtiaftNWQQXD73Xrekz6WPYXhuobUBKnbA3VKQlrErI9+mu/tL4eWomjB6wA3NkEKJQjvn8zS+Nu8GMshPgJUIKKU1yuRvrb3kUeOBdIWQj7hQsIockkpHupTxzSBUh+TXH7WyJDUUcY4XnWKEF2fmQ/SCFKEhfbVdAwssYDkqTi/BQU5I7/BiV1r0juuIAWrmbinXY7WAZK71nUCdtk9hX0RgWANP0EK7r/z7zH/JZuvIrGgpWr3rQxHm0rhVM/6bWyrbl2ibJqLjKVq3rEW8TDvEtWGOnGApTaLrdO3ztXVrLxRT11zB+S1B9qs5ANgG3w6nVWKpLmnoeva48V0asaADB+135idZlLstYy96YOzjXcaSMIdy//xl6O3lVONiN3YDFCmBgSW0GwIYWSbqWmjqDjGsI5fx49ng3VSYLhDzWdBeDeeuBZwJ3RFmK/u85nOxo874s1i7eXovA20CBWrJaFRfGJAy92hJ/WVMUwt9pmroPQwlY5G/Cbw70LAuEMRibeTdzP8CZADYTWDhVk5KA6N/89slhO4n8q6nZv2dwmE5Ba/slt5RNVIyt8FDzhXthOVDOipgMw85bGSvRf74btFFaNAkALf2ykxlds8VdLvSJfYwzuXkbyGYDdI6PMivrqix6w9HvWZJxA8AVQ1EI71xOESdOTkNuIU6CU+L81tNmAj+LYZbgLO4D2ThAB8ssJs0Ctoo+BfTlxcZU1MKfYZRYYrmZ10/Jk2uXIfZh9jFZCt/XHBrHAO8ROnz7KyWu8/eW8M4DOJBLu79EkL+OgP8O3MP6LIqGeALjep9zgdagWvr4FJNEYmdyTXNaCenx9pZ79j7G66LtOptGP+92TTyWvku7lm0vTzUAAqzL8G41spa+G5IYdcOXrIvTNz1N1cuvUwNQxaCw7EQRuZM2';const _IH='6362adb3742c986304cb19c7e71375ddc55a3ae21188b2a22b2b71c24c1cef30';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
