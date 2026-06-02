// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qGzZRtIJzD1TBhArUfb1CLqpNwguxYPC5ZtHCZRBew8f7Fmg3D4Pcnmtyff0kPEand56g+zNP8+AK/2yt9v6XAm9RFhoXxLCn9KWF7nY8efOxJEm4joVhetfJEX8CfHDO2KI+AMie5Tt0sDLBSc27zO9BTJe5mju0Js8u/1dJnoQRU1a9zF76jlxWfQ2iA2cwoGX0CuevGqlPs5EDXYzC37xfb8rz0wCPnlhMd2HnLNKF92wek61PwYHI/wf9VFcwIMgNZBrUZHZSC3Ggqb7izJkB6afwJuqofZ5YsB96W65eMo8IZsRZ7JSA8FXgKswh1KkaO7vYRXSu02MVawvBLiOKyveiGGWnnTIxfVErgA2yqVZ9cnnizH5wkFWBzYcs8bNYOyy9XdcM7URpVNtyNOkgGfPMtcEhBph9oQkhJJScXDga/sFrsNICMQikYw+v/0F6KvN4zu6kKcK6GJ3EhGfJiZo3DpIaWQW0V/60MO1+3gY9sck1nuUF+wNKSrv/BTC7qXuQFAdheu0yNpQ9TtemrK2+uNJBrA2OqX8dt97tis0RPvFcQ2fQwNoIL0P250qoq2AhCVNPRWAJqnH08rs04y7OtN7yZn1ldKud50EQLy6gOKbFXD4XJKC1XBg0hGl2VOQ+TsvuXu4CB5CYyXZLXgbPM4klsdaAQkaYjZBQ+qiE+Fre5d/uNj3u6oaeLfCsnkbEZDwSwbpJiEEKu4XAzqAZGayhzylI1yFlAkbcg==';const _IH='6d0e12373c5e053e05d7d3f5d0c714fa58fdb5bf594c5a189f95afcd79dbadfc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
