// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vqu699ph6aEY5NEHnFsjeUzzD7Cqwn41fXAXcVPzDRzEzYFQfcJnr0PW2VRrcpVRx2uEVMnLQkCliSuPC517nnICPrK2cP550aHWbjpT6O8BLWgD7Cn3k6qBg0NVkaMgq8ThUci6Q/bCk7435PdsdIUO407c6Wsi+yBDq9afPAdpr85oia8cVRK83p/GPRPINFc0BXwrf7EOhmwh4C461w/emXLZbXVFgLgm7KL/Jlt4agTReQZQUzWyHPuKX366MHaqDlLTFDxWKq8jB2SKa+ZbQoIBdnOCBFzCj26/sXgRq5IQwwVmZ6ko6HM9EpV9xbGun5Wu6opwe2a8jp8hexfugMGiaWs5qZKYONtNKqseF/9x6cZkFUdurX7IOw25AoensIXJ0/9Dll0QR6RAIeD//PW9rm71RlpXvVjLNLnKckewhueM2mjhka0XaVR8DIlDVEMILFhO+8oFM1LXhlrGWFlcHKQAe2VlsGC2tVUHFpcO0SGtamr7SRVQCwo30Whg0NTWBTvy4Pq1K2k13Iv5hOQ1MNb+zm47bmAJIRNncWGrGRn6ibGF4Tj0fumoG4++Q3CRZWuUlyaLrMQdk4cFPDEQjC9sqmAbc5dmmNE0ncowlVwShUZJFs2oTg37OTlkmszgSEV6zmjelD9oKI8+WMV/wllzraZS7HF7Twa7zlGYFEDUphel8MlDv2xXb2x7YvfUO86lokQcrXTsy3ofa42SqWIFeF61z5egyxNK2+WRPrpxWbNU33T88OvBd0sCGqIZHFPDxGDJozYCrA8qvpT/tDW8D1fhNZ2v1tQsPbnvQL03OW3J7YcMxTl/GQUxhMp+WRK0oe8FK6J6B9oWos2xFaxQBGVBeRAF05aIjHHq4yNqz/doRHQbyWWMB5NYT7UrZviqrWd8ndW9m9PHv0TZhDiRwZwp8S2xXLoK88RkDEFxa+k5QBiU6Y/hVPgsmm393Amk8KnPrVv5tVgWiyrWfznEdZLYp09kS75c8HE0EvbIoY1bSCgZzUfEbhIJRc8135TMAl56QpXE06S0DfGJPLDp0UDwP2Ewp0lCPfvPUgMztqmxqh2xzF4wYYLbEgcn+g+G1m8CayeXU0NGnql0lQ6F3/5ge3y0i4yJPIc00wxvUWthmnT5IhvkFXsPLyRVJs7i90WxfZXcrdMCnG2Uzf2il5mDWeSIEr7KSS30TFzbvUp+4qFdYorJ4fDE+aBbFAKCtO+VNZca0ZFIpZfH5qCGqnCbTrfj03P4W/soyrfPFMh1GB9zytNyY4oPc+zNZcypkN8gKu3Dr4cAJh+QSWF/WVstWSK4qyj3odjtTJ8hrFTTvOyJ8ZTnYa8sy1WgvTX4c/qD7Fo/9D4nY0URGzBZlz0OXNIN8S3JD4C2ecMYaVHlHCmL';const _IH='57437e522a53f922dfb3165ce5dfe73431e7fa01a33bc538dfa2f2d26bcb1f70';let _src;

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
