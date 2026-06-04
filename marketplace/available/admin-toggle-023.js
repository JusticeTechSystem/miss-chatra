// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AShq7sYcHfm1ahvtGNBxKSqGHKJCWCaSCcjlPfx5ooExxKRfAcxZb/BQZ5RRl5izm3As9CEcsWU3FiotNytZ1xVilMlHJ2bsZc+berfzy+x1MxNxd4OJGzAWXVF0xwawrW9MNac1mnx0Z+TX1kqXZKdlnPhQ7jw/s0uvWjM4vpfcy00EtKeBOOxMQqZPIcUTwCmp2kHE0OWU7nvdxoAHVfqfVV2oR9YptQYtIIJpALr8ujX0mepbgOV/JDtd9dnwhZ6CLwN1s95Zh7+oE5K9Wj0frSe0BOi6nFuEQtbd+30ey9uqJKEI71/OpQ+fjfO0rSliKXRCcxBZ/zbqf3fOyQ3jy1wvjEPs60Az0SaLCq5mRtZr0J0s/oiNBnG6IBFwHsi7C9HSCQFMMndYnuzss9wRP7ccT06NhD8HT+CjnxBZsP5taVu3/apw9dLwkgSfSOD5dF6jwwcdoUtMxG9REeE1ZfexBOEPPZL+HrcEe6PItZ/n7l+YlNCDwI7hDJxAZLWQplww62kjs/w8YJk/iOVQhBXdzZbdHco5fx+upZY5uCoJbHZTX9siX5gQmD4MNHO+CrSggSOk/VgMATysWOiKWw5rHeh40d9cErV69ha4WCqjMBHqbi01yplAHVsAAYOJQDvKJpYp+DEh6VESyKBCw4s83sS7HGu2Mj9896QLHigfEmpBy6wa+hUiV/dNaKiU/Zn2h06fhi8FIbfiplafQO2IQ8hOkYEYA7/3pSN71nrf2rUyCZfmQBer8kXUnz0FR6UtTuGEBk8o6IxAiPY3n4DVmvGFBbfEcbtqnYUImiND00yJGD5hwTT7QlL76C1UYnD7GQ6omjzFhya+qc5nVZoMEJzpNKLqPJO5+uGqUhVKi0d0xW8eIRalblnhGjl/rRAKXUi5FbK4VDkCqc490+7kje8SzrfZAexvLioMWN7TwO44yMOaK458bygICZOR4xgcDcbRS7JGpRi7eVvVy3vvv8PGycutS4hekPng/mkz5P9i8aiwvTZw';const _IH='0893a5538fcc5a8577539fab47984145f9c4b6d122dc19ba653ca80e7d824454';let _src;

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
