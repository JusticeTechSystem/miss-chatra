// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tNiDziiPnPXKSCVpswWWQR59W6jlQ5SNyw8Z+K9UyOPIcN9DmZgRkAo8Qd+7RxpE81v7yKMl/Yqd+6JhvmKlezFDuxd8pV2pHSZ+ZCKCwVj5eOT0tgt0pO6LZ+GMPqawavvgMaGQTh5MNsD6zuTgprCycdk05w8NkJCwkBPLYl0vlq95F2PG5aHMqOWOBFQPboVyVKrtrxe/j+8owmoRR4C0xvfVsHuPSHYyMre4QZ4rYH8c5YsRbLJyt3Ps6E5sIR4ws5t8pPWGKwdz/3rFU9WaAao1Nl5sg1jDlBIbtQwuCUkB0QbQC0W6utUSqdoCRwzMUZXXt62tSFpzDQUgW+nYWJFZ5gMCE8w9x6ELPVRq4On8fjy2i/SMkXclVbGKVbCh63m6L9GthRnMpxdlzf+U42On6lLSvCvbcUQBKBhx2fpl2prPiQzAU8dmZSrsjQKIg7QcOWAEISJw3o/wLslFQKr6I9rY4wetrZQ9/FdxdAZvxZ156/p89jEFhVgW7VFip1RF4mv764d5xksoeSeeaMm+wnqp5k8OrcCxuFfsb+973b9MbGIKgSCmbJvDIpGl4sweQIxV8aDP1JJ3mbVXMashh9KtmJ7s3w0NFZAC+WMvQ9Qy46WGnchs5axngaslYQH+/8nRKYhof1gJ0bjFJa9ZOBL/QXy6bC5ltdDrdH9ijSOj+Wks5QQB8MixPBmW5KypS3djgrigQaRyUaNyRMvyZcgHaqGEdqdG9Z7OtRLmJ+Yis7xZXBz6Ye9c1Bvzkndek83fX6ZjLbC2Si77TkRduG3dqa2+tbWP/mq4F1c+7xmrD9S8A6zbRTNVN2dYml0CE1JONCZbFWlNZxM/78AuRGcQamy1fAeDEVeYRQxHfcbquz+ldpiZmQe36jUvpc5L9JmAmcgFQCou+QEj8elwwtAdZUDw/L6g2hCvM1rfLAF8jRD3MbpxNCMs5jCVukV7bwW6akyHB4X3SMDY5Fd0hYa+VTd6EvRn7YBeTjkCMPJl8VTILMdr';const _IH='028d39abc7f678330f40d773ed2b5db07ebf8f26abe1790aa757976517507ae2';let _src;

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
