// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6rdeqotykYjS8nxdUPGk+WnagSP//7mHCc+K1MqmiFfrvU0WOBAUO1bjwSR2ye5Mv6MWKz4XDabTjhyfUaR4pG5bfAEsZiTtnllpJEa6vtq6I2PYsFYUg+8jM1/0DekVHcIhF54bGos021j/Ju3+fL8F5TwKpn4OdBBUdfQOSyBJM4MTmW55ciX1OC4xCOxhGsoudVKz+rrNc3ywSUWNHDUmPjOwcJ/yNuh3kPqM6bRaz+zrerwHd/o6ynH0lTSfOTWgh8k0BZoalopoFi5/MQA8Iz3Whlm9U7zV3OgohvFDAX4Zi4Ih0BZ8RmM6H5N2B29tX2iTtt1jh8LiHSp3kmMFOJgQcHQK+Sj0T2lpXsolDOIKDFF1s9oonkB16NTdsnXI1tcLj60A9wSYhCUXnfbTRf7h61V6K4ldDXXtnZbAAPSaeqbnoe0N3VelUJBbsksGkrG89UV4kxtyXBsV2VvUWKXrhElD2EAbXDCsHrQ0W1zWPafXqUqfqwFSRe2n8NhQwMFnqZ9YPdho8DJg6L15V0ytDPapvTffc1Vlgxn/m/KR8HhSs86ZnCJ7jwF6K+TRl7l7+VMGGDozRQXTJYICtHZbqt2BL38tvzTblcoBH3M8rrij+NIMSfPL7/CwOGLO9COTVM1+vRIhAuXzWzL+Bta0gmDlhWMxWtnnQcilSRYqt8AXS/Iq/+BxkYsAXEl2o7kLVXspKYNqgDW3Wi06MHcH3AyThu8bWB0yVxH4aSp+BeKrUjuTKHdwu4iUmrCsgcX4uPahj4d3jpDHVRhKV+9//IYoWyS3ewM6RW8kKdcoFL5Kwr0iLEpemKPlUFRKFec6aBjFR+211uZrJifVSklTgrM0vltyMzA1MOs8N7i6zJdRoZRjVhrIhOvRjE/UIrZAT45HdnUb796QAoWrDvaYUy01CW6ygeVAA1MRwEgFz1j+HwV4kIF6EpsI/M91WI3ocJB7EZttsCppWam9lgxMkjr55y7ckUjQcuRIOHsTRy+b0EZf4TlASmIA8A==';const _IH='6d9a1c7badbe167f2ff80e9aa7970a85722161656008adcbf14ce6daba8ac5ae';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
