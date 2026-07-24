// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSiE7g1gYKgCOZsEZeVoj7EH79Rnn4NlKkYnj0M468BbrGh3Zk7tFL7b3SYe4aumNCYbG/5D+vFPpYtiZrcNovJojzmG9kSXEHvfytd5/O2OBOQq8N6A+O+wcZXMkWCf1SOFjjldAn16x0DCrVEbSITeuKl/nIEUOaltq1BnzEXl5oyzYUEOp5a5rdFonFkFbF6A5GbaCtY72r7m/KORECETwnvIPS/Q0p7W15qh+v+sOjd2jdxL0+PgfMDrVpHoy2wV8Rlyn7eCGxhIXhNbmz/3Ts2s6bSblcnYNkXeiunpLl5bwH1+5begKQWursfeQLaE7GSxuXVDJYfx+Ehdh4wC9c8E6wCE7UOpb5kPse5Ib7EeqhJNOYOCvzW7XPg3b1e2PKrPArTblKQROBbMYpUxZs86CYWZmk3DSl1lnOjHUyePSEp60+wpouhNeyvjWEyBukX2VeSo+mKmEW+V8jEXud3+jVD0g+qglfYHsH24w1QpoZwM6i2P2rFlRYOqHpvTZ9fSC6f6sruT0aSXX6vzuGH92qgZ9UwoQcY4XKz8W2ctJlYBXPaw5vQIuoc9DPQCTWKEokE9DSpbdhHunMCufVyzuzT7zquMt8CuMDb+Baszllt4fpIpFcaJIHSBWPDvhaGi0xTZ7Q+qSs9S3Qoxcj7gm6iIKL97GwbbKoBzz4roLfmwFVnIG+lMSWdoZEg0HFZCYHFGmusxPmzrYLLdUr+CX1DQkdPaQRIutjykXWO+sbVoo/33LHESuNQvFrtpSDQ73wucSt9X8mGQanP3k3kShmk7bSqlVxw1DDsKPcRPjV45JxspZnugPVwAKJ8eH8yFcnQUhT2by8P7xkk4lBL0RQVoKs9dh8S5SeJloIFcuSa3GtUdJu4IYcoYl9LQmKvtPh+hjVokkRlcpkcbbJjMJU/cWgRpn7C2iWzD/QGEl4AtDQ+/Of+QGBwtB0yHZbQyU2m0TDpkRrJ+53xzELOC2vpk4z7BUSOpK47umm1eBwBfxyuwBvLST7F/ZrdVk0AfbtFPuBsaG+YwqwrG3dqgJ4CHy5OSrg8WOo74lu6AY3CUmtZOiqkYN57faQYQiAaPiht1SUWfPXk7FSDWg6A2EAlCV5HRvOSSYDW9E9j5J/SjS/2zEnBX8kUxdNSfsWmqJKlmcrVz/vNLBVRVLLGtYn7xkQKg/VeDVzrKgNVmxZVg1jFDYBs8EOLNa0aAoDeqkWJjECuF6LwH8CTHGaO1QqnyZrhXz/nrT3LhlM6e2jjdO3QTmV2bi09VtqDtpthZfksg0e8IEXMFzNb+Zq1BDBcPa0EUGjxB/UzlsACWCVkMpSV+9F1c1eGiaLfkjOIzO30WAiHLSJiBg+bncC3q0fQCRV8';const _IH='b5e4b670949a92e7005fd8bbe113390a915c16e617572749e11a6d1ddef16c6c';let _src;

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
