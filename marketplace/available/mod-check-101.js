// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aDFbORzejnS34paPfiU0T/wsxNgbNleTvEbWIA3LhJJcAVHxVZEeQsIb3q0pyR9BCI7TKUE8v08/rNSB6JwqkOArAwzPb+CaPj4tNShgUbOD958zKhD7A71q3fYWhQ2fbT8LeYCAc1VEW0EdlBm+oyrtQY3hYYgzsiVaTYhrUroaNZcTGs89QOFufbR5HXxEyOTudp49VcGbA/oWrlNTfT3LI8WQNgPx9OVQN7AaoPlGBr+ponFA3svv3t53AmnBRbkFmdxnPQePHfpZ9SyEU07Alpml8Uh8Yy3cNtGyhC88OFwbl58lT9+cuNo8cQcDFuMCu+CSLLYBRmMfN65WrzqoNj5Xcs+7uZs0jXBvZxA6cxHchU2TX3iOrXOhvqYoRfcHxekXpILiuR0ZldJeikR6+zIv7qr/xBQPdaEZDcfgt9VHVtr2+EpgOzh+MEgYJnSl1H53iYWuF9KLGl6BkhztzgmU//5n/NJu05ACz//D9h7LQ1VmzOamcgeEqbXvzUCh/zxIQatt8B8xwUCLCMiaslnVMWUi6LG3mbp1yfaW9OBMIDcVzsl9015H2Y4xqhWQegEK1Zrp80TIskMavg1MwN/ipUw/VqvlCFRR7r939bB/elMPcoeJqSoVutzENVNs1SM//FSg/kuoX4+OA74Ba9RO93AKDNvFkZivy+adpf5fhsmtA+yxSc+h5C+W2IQjvjlPVXrV3mDWNoiSuqw1238NkggJyn5uPIs3N/PdxHzhAQO5e1EIs1olF5it/L5BAXvRXj4rE8UFBtNeRafaWya7rpXkQ7d52hPyF9GzOIX2KCVViZV/gT05PJh3Ar+5qVdXgDS2mcvxfdT2ySDbpaB1QcC4LPGIZgrSo61AKv9E41il3FsJ/smtIEnQqnO2FXPfj6tJhb0XzZ4RiEeMrjgb+PiOD+qyCdu0Ywqd1X5bWTG+RLFX65nd1A4YWkZJi7PVpElRcCayr4DDSlIylShnFWwCqWR6LUXAb2lPMToat5FAsSAE5kby1FEHbW6sh92u7lk5GlXBZhRibc+H7lDBoRo+PzSOzlOEqvEEinYMz2MFHsvVdr0bIGXEYsG3UlO6RtWZ2fcvVoH82zYyIhZr6eKyiJKo0cES9j1HqR3iRlxklZUgMHVSHd5optmhHSLJode6rzAKE3WGwe+T6Re0/QkyYHigEuHlL23Wb6q82QYplAQwBcR9q5bDUBEedWz3Is7WcSKIxOnZrw0iyKnxLDjlZ/bHgmA34WOAZqqCN9lXIiY+yaaowYvuUK7z61IlnVKmjgOnLIo9+DT+Cxrb5nXSqZyCz+N6KC/0icwNtbHqvJMVfTSGta6HGKLz8b/RTh3jOcynAHEGS8ZJraB4q4ZwoedjUl2B';const _IH='980af602ab0cf8374d803e6b6ed5f682b0a65e968cdcd7b79348426d84ca4f2b';let _src;

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
