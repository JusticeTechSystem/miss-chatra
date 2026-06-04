// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MuisLl0Ms1qAn6LDyWbcKv5OR15Nno3gTTvBo85Bd9e3HT6GSSvt+U/n45KIlu3Ft3nrv45nZT+I0jKLI+B81tk6tKrJfPpB2hF8Qng6pq+PITcwQV+wI0TXn6vNykKE9yAASiI+HqKaaF0nW16FAJz9f6/+SMdCjvofclpUyKKJ3sQe+KeLonuAgJf0p0qJIBqyZ3qkTx+LI1fxj50Qo/0hgA5iUsBzxWiaJ/uwrD8zUeoCC04Sg4pYDxVw4muNHpGaZECvh6ox+vatSm2KHKAXPFvtJpSJ4QYCcix5JpCDi3if8E0gl0boImIQ7dt5ytbXoAFHcEYs6UV3YYCVMp12KinnjvoPoblm8bTPWwyUdqxAfxFjuFG3cvHv/TnHUkH2nCrmIQ5R63bGDSRRPUTczfTJoJ5iRhAadieX2YkSM/WLAnT8tWmTcv4jbIf+QgGHuDzNwhDWr9G9eZ8fMe4+GICiUVX0/RIVYUIjH7f6VjcbeQY5hLGsVhFyvlxdsLemX3g5tk2FyflO1kRq/P11h0U59FLBOshAW7hCS3J7YvXUmSs5OQh5/dmJZI76yTlDIHzZLgf5KX8VsQriL9RHUeL9vjNY4StI7G2lKo/0qJsyDj3UygFYAVORI3huuj4+XVvnuwVvBT2+9a1DBpDIM3ROwEtzyYuTRLxOoOfOaQlkW15ppCN95PY3FVFUe1hPBMkYR9WCBH9vkShWO0O6Z2Z/9bi0adBcFrGUhUTYJ4sKOucJ4wd/5MpkLGv9gQwNhmdzwfvntGOigZGtXnlxrruXemEWMmmvX+EgZ3AqUElTbaCTqg4fu/wgnO5KuqheHxDLKDlVXwLI3sQsAhE1H2XqFokaWYiYULj+oL+om4L4pJm0TrfaRvhcktNwPkWi7gTH53n8+EVO5NZbNoINqFGgVjdR3PudjuovEuRqJyCsZnEyrjBlKRa/51tfbjQgPn697kg3NFCiQcVOJHtRdlIVyK2cdy8g3P3V6BWw3gmvxndrGueyPOsv99tyFWNpHYOkAp8/cWfHX5ekTRVV';const _IH='536d33e9ead90931371ec81943d4199c867a818de2e2315dd98885cc90e2da44';let _src;

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
