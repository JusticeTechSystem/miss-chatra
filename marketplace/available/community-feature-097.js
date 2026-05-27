// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9Qwf7uJaKmfHxT9XyDLf9Bn4AvlOpa7hFFB6FePFsNdS1GPeuRMTJj7/YYq6ZPG1T34d6JZzgmRkslmCWFDl+IKIQliyHLRZ+KgWE0VGdvvSZkR46PAu1yk1VVJ0VaBt0II3CMzqXkevgrT+ATxRZrFffS2KJjGjpzccH2W7Qx4vYjH1fLdfh4HhUVxaTXSj2G1BW5+d5MZuNhbXCaACvG+5DbdfHULD2/O45t541PX8kJmUmn5OmJP87nFOJmas7d9nHqcMErmMjw5QGLGsPGUnl0CZI1hCXrSByQ1Zw8EDhpSyJegtlH2Ocn6DXZxIS3NcyepC2fLZDmt6FkvuSGmOLEc6PodN/XwgQbSqn6wvcme+jw6c23EDSpziETufhav8hz29x8/DDvI8YyZy3MZRfBAETceRY21xmFLozLaR5qbk8iqVpQciHgI38duz1/qx0L2aXfDAKJgC0UeV5VvYnDn9HvLss5CUcxqU2ICGQg/GvBrpsHxAL4YLsKUJHqhwcLyF8XNe3GqngbR23jn3IGGytrrI5FnwcxEZ7Mk4N22Q7L+rsz36rXmfSZnHk36Y/scPQ8IJbUk/E+5+1/wMJq5u6jfrwWk0t49M2BUe2TTFt1sk4NAZFFdXDN2vJkYgfJM1avAjcXQSvbT3ATVut7YSkrMprvLJImSsc05au5wbLNY9dsjPoV/cRGGds2S8zvGiX/MVv/Eln7oP0TVfyUyAiu5tpOLv+MQ2yg==';const _IH='263b84938d25e00cebeee02e8a5901614f7f51dc6c530f5aa60a30f6e9dea566';let _src;

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
