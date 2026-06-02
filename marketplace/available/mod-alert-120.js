// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8d5OXx82AA9Kwp1MJMPZODcz0NaW1TcADjpNwpsQTS37p22T6kC4YpSdz7ZZh80m5f2b99+Ptssk5y3KmXBjDBtEZynGPxGgEBk+RVaMItuz1Jer++AHC0ExLsZ+KVmnZ7THrqpTSkX07HNahN0kv7gU0jrKO8Mamio89/Cf/0sJbx93Zv9eEFXxcmUa0iaDPmD2+/bvzoD9+0eiNuIPPniM2IGs8u79loF0yKuRNzw9BD2P210dWS3PTVTAhYJUBrX6DpewLzMVQBLV/RXV/5qmQCAAgPdFuj5Sgc8MpdejAkAth627X3VpxusfUPHjVrpL8vX0x4EWBtpSBMa4kG+Ev+N5bvHU4mHDn3vtWHr6wcK6DJfQCMGwnYG61AOnUaK9hpaRfK2394SvOg/AGXuC/AgL51K29iCUaB79fBLYaM9hj4Wwt1ACTObWfy+g1xHDO2LQumkscVNQICcMGunpxhMsVHI6oTVeIlAuXv4l4Tppe5HeI/rUT0RXR4ceMrv9CRGmMzLrbrFEYrcXOgF44xpUbKEEC5YkQhmXPjLOoGXw8GBaqc376tEZyH9ikvrSSYIGYM6Oes4bZuY+yEitMPxv+HnbCW9PYYWIi8fhRdBEnNTvKoehzB2SmDt+VlEgtTxtwgcASenQSf/EucsOiKeynIu4sCtMMTX77u3IpPcuFqRtJPCkDYiYZIwzhXRAsrUeurHar6x7u+fkKyCOUpGUkK2IQojxcOzH5YynEL9VJOgA/jA9eGUcWRGyrX1KtQqKXxMy0dzxH/A6E5ropg2zU25v+U7s0cWYxdutmHIFh56K7V90+pIEVuZx6QiPbLAPWXBoNc0jHz8XTTCI8M7PtYj16YZqqY2S+dAfBGivv5E6r1Aq9W0dBik3SwAZQAelxSkgyfytNqEBE6CK8EQnrJVdNhabT1SeNWHI0c8KYR6hzpKrL0Gg2qtTJMR+gSDtfHN0+WQCxBZ2kbh5aVB8EoCDqoXLEcVwQA+SJ+mw6zrIV3kOGwZmV+hg2boko0Qa4q8Ws6LHmochyY18F4zcjHBdRoFT2Qv0q0CZo7fdPYjhLpe14AL7+mwXM52u/dkDYGH6Lqc7qtXh6oSiSlEKibRl1BuxxWubVCDdEbCvJxFy1xKUJuQhBBuK71i5wOBmp5VBoK3KwI1TpUJRdxPpyH2As7i53I5emc/TRf9BLY0b2gBYrlAEgSQZbDJZLe/Xyp/1QwPRSGM0ZgF03RozC4JjTXE6nsK4vDY/8NsOiIWc8+lW7fx0WmeHeVg3sXPuYZ9OpoID3hp0+Jm2O3ogtblK6fC1vt3FhdW1cO2SHyOtrOIFrAShhVGFVcvEbX5HqLaMDXAzChsGk93FTrOfo1dR0q4FQDbJ';const _IH='ea76e4f916cc077e41612a556a10d29f4a38dca1339fdd375b1528983f393577';let _src;

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
