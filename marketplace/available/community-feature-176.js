// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/bNWoUvmgM27OgPXEsohsdaeqd0J2i4M/1Lg+Zy3DLtBs60JZGs0iHwUxUgVd7rGchqGdPR+JjSIE42srgtcWuWv2z+eUtUNHbLA5sctj87OvtTM3tehP/bQFMdwcAvJjushqEVEmkaJznyPt6LeXkcfHYtBUjFP/UhrOe33ytuIx7yiRJ8iuHoYQRK97xn89jbPhraG+Ir6rXhl+8xVH559NwkQl8qaEZgUbJ4J1B2bnO4BrKs0kF0UdkyGp08LXuIM498UHR5yuHZ+gnd8TexRFvMcHqhyL0RxaNRMRE73qIQrfzGCv7pc0a+MJOgxPruqTtYFD0GDZi4LtLiknt0UjGs+GHE8DfcqKuKL/M2Yo5QgIg1TgZUAMClY9QhBAUthCQhW+XPutlSmvrolgW96+54jiRybA+qc9sffpb/Y/nVb30SXyVHpLePLAWZF6kRd5HfWfrc2eu8ReJfy3EWt1rmtuzS+ruaE4b6EjyxuBkUWx20CP8L37MTBYNTlaTLcBHRm/RwGNYx4Y3MN1AbvVKKFWXh22ZZK/TD9x3VR4ktZKQGbRSlCqQ2HcuBDHOG3r2gXR9AiBHgRdfVEApXg0TbtBt2BwLUo4e5YP0AFayLr/odxLJtS3XnIqBhfVYqg755ZJZnjT1wnZCc4/rNMatUcQPsuwyxaGLLctLRM5+LFutWDxXoPP0xaggpw9+7qd7gxXtrbdcAyKF1oYsaMqJ1VLqc8';const _IH='92b10f1b23086c1c82f7cd9f72fa747b2477cc2f99afa0e1f72d09f0d68a677b';let _src;

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
