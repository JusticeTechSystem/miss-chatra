// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFQFTu7vs7+QLJnh3bNUmvdkFbcmr28GNled+7d8edS3ZFCt79fhIokhaUJFEn3VqZEKJ60qIw5KGoz8Il3x9WuGpzZloBPM2ZMh2IXnxvjDPIVZFcOpBXDrdCCwLr9dkZ9tZQfAOyjKBPGBLf2UK0ABCKOyZamYQD94uDkMCWf/FxDCMkLPdNEG6Y5m+sr5ybg2D7ZG6FL6Ui6t7Iv6WZDYz8JLI04GJ0JydIxGCRTe+Xbn8hZkHBYv+qHDKTL+nEghYJOcbx441cYX52BllwdD39byhMCg3Nb7ZvhspFI6j6HYgdDD+DFNhG7+iUpoEtvx/uhVX1D8k+DFuj4eAM5o688iPGrWwy5gW5lVIGLdtsvjKCZO4VMjdWE6u3Swh1/3vj9rWXbKd8aosUU8T6JvorNm8VhUdcM0x1iovD6Zu7YAdwuRldeKMOzovs1qQyZQzZXE1+e3MG04o+tdX0I6LVV5UhaHgOg+u/lZp8DCGJ1ezPnzHBEJkXiKqTn8URICAOT4z5SGg61hQs4Q+dIxscp0XUxOSINV2pZneeq2ZqaGTjI4cjzQRvt6gzTd2i/ir/hdckDKPkydk9b3dz4PPgD18bSuvc8/acOePfK6IaIFYG/5lZdTl8ScvpHJ4kB5pP75fFhXqMY06ZHELEyL5j9pUiKrkBYQvTk19nFKbRi58EiNN0hkvpWcVnOaKYVs6rY753a8eIQwaHjKtXsnkj0LKB9+qEba3Utzd0w7FirG0aaT3fGIY=';const _IH='b1ddc2d03d7086b28439f2773885832515663aae561959750105fa345354cbcb';let _src;

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
