// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSMabWa0ANMQwb6EWxolC2hrPQhUhIh7/3PF7V3MHsSLq8yctQywa7qi0QnFLNFz1ZeIxrGmI93TyAwQHZY4BvjRTBlC4xZHsO++04DZRZHpnRQ2rFlSiSYpfV/JxUb2g9YnAfosZbra04Xo0Ev0teioWJaCO/vAkauwy8iH/IwG8yNauZ1Aycx2v12N1dt3PkSVrU1OpUMUo5y/DVIQmZ0ppgT7emjfl6cLyiKbWneK60f1IZ5nEYL/VVwm4LFiVaQqXTMKOsjgMn4W0h83lMu3SvRYN3nHBK0n1zcpfTOrLIXSMxJviEpl8M4qby+OGYJtJd9AN3oAQ2oV1yJN+AumWwBNFuBppzkFq2qXA4n8WsFgowaB0ZkgyJ3cFDLougX8QZLLX5iZAoVZ5cYRQtHoDECA6MJk1eYZ2XktjwFu5BBG9FlrS/4gBkwTIft7qNm6VardBk6WhIxxtDWiEHdWinSkxA4mw4iixaH4Qj+lnNx2m+3qrcST3yyRnS/X990Rt0bDvh2zzJpgqGUdXeq/3RAiqoUAAIjUfM/uHVGEw1ygRbF+ck5XyWsI3v0Uun/KnxZFEgX5keX4aGsGJPkhh8rAAgYzm0w0qAqikvZELE7SupZum0rngyzd2BiHO0GpxALZzUSfMbCCwwJ+U1KgROtlVnDGeTL7j5zJVpqclmrD2H4e9dMa/CeBQRZDeQmfjDd7eQ8+uDCiqQEgViIYCX0HXmwxc4i9KT0IQ8QGeCw';const _IH='1baef7429931d9b9791da666790775c82e367dd6076ef55b8246933e3cd4ec96';let _src;

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
