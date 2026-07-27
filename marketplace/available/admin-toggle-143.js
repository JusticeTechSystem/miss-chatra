// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQInUVwJwT2KEy6iZJpj2/AcAVfzyNZLWz6YQmSHHxs+OXQH0Ydj+xd4ucaSmu68K2UiHGJnO5z9QI6V1aLnemlcsnK5Ol0lSzI69GEy74r2bkdgZLkTh4eHafLvbqOKztlVqDTlbZ+vw32ou3xbwFHwkHZMGBK1mRm8DdwiYGV5da+yWjAOjhmcMzg9jrUvXPhvOXuTkfZvt700FHL1YquuTTkpzSPfkjhIUS6DHYd/ayv6zK+d6l0tTimiwmqjaACzpoksNuPKGODkxk9+Sun1CPsXkS9g7CnkPLmOp4srx4Mv7ri2Lf9Ap/fzTTirAzr/1fn+DbhPSCevuYmBqfUKThoLJnyIgp+CzxAg0tWkRbcnDwDNnT5dN7HgzLPhgvcdpdVmhiVKwy8ZLNf15okF/1hRmbqtECUmhlBwY/cQ6QNwm+gViNxWBZ3AUVbWpKiDsppeqzOwTXt03doGMIoC/pvplDs/9FRpXaKmj75zSmOUNk7xA8opa1jVc1OWILYWI/fmHlJrTC8YZexOlljyM6rpOjjgqhVhEyJfCa3roxdQtlODRuade+OOyv4IagODkA1ZlSuIklVm695acQP7/hHKgi3VmmWPSbRzAlah/hMksNMCq8icWLjB3qlmaWy0gh+ROaEyUVS/c4N4AMHRTnR2/SYtGWKUsuFTMjp5KCR/vYFL4M6hQM4N9S3PxCjnL5sw8CJhAKm9y2QTGt8fo9jmT+s0hTG4gmoC5w88I3WpjmIxh7NPS0v2It5KhStL2WT6pFznq0FAFZyvUS35NfNFmXJwUuYkTVnO+0bFQanaBQBY+RIYZEBqpQ3eWV8LNl33YjwrLOMyMa45+Uc6AHf8ZUTijLCmASkEUiJQQhPY2InF6x9TFpXO/8Q2mJfVKb8Wu8VpzDQie8888EsTbEKv5ylIDWGIFDYQq3zCq/CjAoQoKf0uieymSqk/AWlirOKU7rST26wgqBnvVpPa2OnTFax4rgdzjeT7NV0kEGkI5LqGhGU4lIS7csdpqe3';const _IH='25aa94a9d9b8dd7d049560bc488998f1cb45c0f1afb339a47633721fe6d4aec0';let _src;

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
