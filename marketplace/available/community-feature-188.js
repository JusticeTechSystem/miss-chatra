// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E/GSRXJ9qsksLFb4EhKLbjt3kPvRiWqHve8nxcQqMvq8cUmDaiEyYzk0FXFi/NCLU2UtGwyeYgNbTzNYP8qvwDB8qcOoP/Cyw3KqKyHKv8dfiwfUM+Nu0idagLqEH6/OcPKYyKHGyRj5zRWDzDj0Ky+0h0xKAp1lnIWLBTIHqIvVCfBnoboEYYvCqlhEhNQfYpFk9jeNfojuSYsiBkhvDyJ92ghbBpC4NIaAjs1rx8lbh8y/CyakP/KWVS44af2wshiNzQ8gyHiDq4hLn7HXKMjy0bJUecQoeRwb3L/5icw0xmOOH114nomxuw+FH62Ie3o7Y4HZq8GJ187LNCmM+8CAHj6bTy1F5VsgbsfVKaoI6kvIJTT9dBvkHgqCNXr+QXAUK4ADcFbN0Z1/gilx/e5QjUWekATzTN5AYWxlvIYBuc6wq0D/BSchheYSLyr61O9JAtEIa9SRvApSENDZu3HztkCg5B3eP1xX4uuen56f9ilVQaDzMLH5FXkEhhazmlJ0D+mZLtW9138MG9uQG0RiC9EMD+8WPTMTiA8nOgB4lPoErtyY2y8mezTNjq3ddKEHzT2pXqydQndl1ffXYajDAA8zzyArVZaXOSorXTDQCpP0QYyKTWR4NxdjCYo7ZsV7iShJkX73VhWG8x6QD2hKg/ymPFuAHlLx8hlfWBZ0f9mE6ZwuVWa/nGwcS9W2Igqz9mS1/WqLoQilSGa/wDgN9+2fzYW5DuGgakw=';const _IH='a6aacefac0346133fadbe8077baba3c2814bdb923648bb531e01f408b54e01f3';let _src;

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
