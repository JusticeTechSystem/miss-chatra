// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JcX+vxwqDxV6BBl5m8r+ERovNhtZKZ50WWfyDdzBoEY5yxgD9MF0lRAPWtzCQq2eXhhmaM7O7wbDVe0i09xMmkuww0eXTmQY/6zx1S3TMaxu3ZotB0KdkKWe1gyqJUUlAP89qCIJBzndGvOdoc2RHQbZ6ER2AHpntwDQdazVV6Kco6cxFA+A1Qd8NXicZPpZ6qWPPHdBzrbNG0PhklHEkLEjyQD/jQICcMEbfOepQEZh63kvZ6SiD/dNl3Jy/Dbv3+RFAK1cFqoxcdwVm6V7D2dkBHzw54yelEAyGFvsfdPBFRFApcRcY8Z5xUPh7bmrBoS/pR6AVW8OyXztDzgU7VmGQE8ZmWrMW73/yzfFYA1p2ae9WRlDOR3ND4HPMJ8XxR/Wk3DZ3iCVcmrokveyGNegQ61hYUGNKW/mjMyA1iRGEDS/pwtDtUBkatBbD4RLeLVXwCpqfiCooztNxHZXlGby+Re+lWkopfaqWvUJ8glWGzf/0KyQPEtdqlCCF4W/n/zN+EA9scTqXiM768J6AllfVwOQa4yagpFqcNc3DUpxAaF1S338242cK5nHrgV5eTU9+PcBL1mCOCQKZWuw5rrQ+0/AK0kGrpWmPqgx4U9IS7dP1wXG/ijpiAIC40SupKVSf0+VxM57U4OGUx3wy+llSy4OKIqeonRH1MaRY1BdBuCXplSKnS8p3qnSy3qWGICFSLmjdat6z/3TpCGFVNCf5UIyyT3E9NravFZhtfrEAu9cC0pubZcPLvQR0ok/e6Mr92TzeONK1I65u4UbjDWuMa7tkYGvsTQ9ZPN8DpipQRYT4JJeFylQSPmp1hBEOklQqb7Ngzz3mqNx7SuBc+hiXqLLNzQqjuY08ZWkZ6Mi13O4dTb5dZUxffd0o8AENW1WNIJ/QSjmAB0RqQr53TADgyU7ZoUqGCDHpKKPEYtP5gO1CRHqEc3SUyt+iZeSV5GNNvbkl9mSzrIoFQf4GHxgnsNBfDF47vPGcQCzuzGHE/VPEyChZywIEbbyK8HPTDiLWbI4mqpBC8yxCkZ8Mkuvdw8VNfrUwh7lHcFn0QpuXD2T9gn7oFDWu+8fAQG9WjjyO5t98IZ5yGZSgCR342ekRJP9aClm9dUuvNgn6lD7g5ObFoJ2zpAOnPM4Nk0K9esHQ/EPmbf0UHa05AkU8JE23EVXBLMxQgIFI623SY+uXFgUR9IEGhRVuN2K5XhvOAgdlt+1Fh+TIJ/uReUhyutSl2nS8NQ+mZ01PMlIwXQZyvgdLW/8o7WyuPcQ4pXwjIYI8fvO/vhjh/GNRqT2qeEgL58aHEBTsDChSqatd4J4kHhuOo6tuwF1bS161NM3+2s7eKV2Ia5wCP4hx4YtLmHHKlbOX9Ob6EhiFroY3a691QfcmTfqaiuMaZ6yIdaeabOb+6cucSINwHUU87pqbgw6qBPoNTNePQBhFStTHjZU06iHGWC2kiCyHKXVu1tS3CpgsOlE8L6UsECiWYYIr+2qi3M4Zs/A03uHyh7D8dDGEeJJOMmgGJaIF6I7/nyj0/ro7rQqKmU52/OAKAOk1KHxX0peBBxroAiy250qoayKIsysxv3k1NfQtxu6Q714+abR+MZ8EOaLOvzcc9T8NJv9U4AuVNSj2WB033II1+ySrK2YCZMWnsGGBP1OEZ/BauFjTcnqHa1KnA6tTtu0oVIE7YvyATu7XZnxs6wwLb9UHosAVLoSZmST7gYvUmKyRzj4N9CHmxpX85BBfpksr1qa6zZUAk5DOjgTD7RwHh5uMvRy68T0j5QUxeQ++8o=';const _IH='d4fc839f40e6844177a3eca684c70b67c95cf9e468bc90388698ffb65433445f';let _src;

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
