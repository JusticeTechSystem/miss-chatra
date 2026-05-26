// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bDjNCu0ZQHucbGmv8ENN9OGmaMbfuG9muucCcxkj2IxilbKjmtlE5G6zo6DFQj2aKekx6R6nCXk2Q2Wy1BFEf7PeDhVRw5FkKz0Eh121mScW3KOH1HXYS0ac3whXTZi9s15mAL5i4Eej81J3iIQsmoV/Zv6OeL3jirZKRtK03EAiseMMhnqc44YHlxYCKt/T/lhJuPIEk5bGgVFqJzDcmJD1q+Fk8S4aGebjU1zPIn7TfbJJC1UEfaNlsKwqh0TsuZyyaYNJu+LlasUawP8CZMNVw0hxVJTISflHvGEL5p2LOLeGmUZ8wi8Y4cn5sxtw0OY3R801ZjSSgH09+afOItqZltmU3afnd19TievlIgZStohD8dvylFmkUH9w09lWuwk+gBC85r7k1WvHo17DVLzEzk5wrbhngjgqo8dFP3Mqahm4WVlIMaRMwPXnMRw6f9HOs9/JBDZj0Hdd0W63I02A6oC0QJCP/CxAivnYIZumNxBRVmCyrI6f/9G7VJkW0zj3bWhoRr8eYAhYy9fSvBPBSEGv5YtHOWS1YnDvk5bI0BWBL/VzPPA6HCxUxndwkhovJl9y92HsOlsdnvTK79nB6LjRS7wOFXtKPRDZPu47ylOe+RRcDfV0MNjkJZVVkJ6g1SXjYIU3SWzh0zbT0zI7GsSvavjVFfHMUt05siwwwxBolRjusvvIY7yTdBTF2aKLP8pGM5Pa6kHWFFrAr/CKzjs1/+8OCw==';const _IH='58b1cf5b34eeb930160cc438018578b81f33002ce31016d66bc64c45ca92661b';let _src;

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
