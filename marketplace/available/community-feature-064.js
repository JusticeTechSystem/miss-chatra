// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KgUjURnbb1SkMvyMVbPm/SGGBnQ1sk+gzL5wfxTkJUeMvMXq8rUqitnO/AjP125XFIfgpMeDybYrL/abduO6Z7ECO17agy8cfIP0/pWKKfPC9LVvVtGnCDhRET5vbZ4ge0a7i3i4dqceVNyh1a06vbU37MR4e/tDYph+LfhwiBe+vB/cBdSbAOfpJ6i/B5eD8fnEAP9q6zgkuZKOyoYSjD3pR9w35sBtFiJibdr/ADF67bJIynohobe+7TI2kROUpD/FDVGxH64Rz3da87h9EbEabGzubFn0O81A0WTj2paeSgEAH/7M3nvsqfWoIfCyMzjxMqPbr2T7VgCUqqBytT9LYjY2wvgPp//yZZW30FVelYgeuSAEKh/n4n9i5ftfesuAX02yZVJsSR3ONg9cOjKAvZ0LSa5RYLRdWZu+7jVFDnkSIJjIrO1S646gWX6MRa5k6l3VoiLBe75O0XVKpV54t+PFFEu0VGe3bBicgE2rUHdjlhn95k8uSM4NuKgThmFmmeCtKTgxKs4bbIeEKFQk5wg0LgzZR9nKrYsqRxgOKfzbA3JECwrzPAEQ0qizgRO3GD69V2b4jQ0Z+RmF9osC6R37DnrRhA1ZXf2Iq3h/7Z6Xs7BENw4nkVLagzNuEKywG6DvlAPdCEOROz4jX+aBBX6fiC4lQS4bgVTFunuQmZDvs2mkY93PtADCFUlYgSaQmyuwKUB5FtIgOvfwgD8HVPIYTm0P57fRjz2VdtC3LA==';const _IH='d33153f2b0e57d02f2f52c71df2777de00cbeaddd9fd052ed19c7e7abedc9963';let _src;

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
