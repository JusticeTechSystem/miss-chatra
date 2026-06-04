// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zLdPdjztN6vWf87QGcXmHe0lwanzj5xssUkf2LhtPIpuXV12tR5Y/9UUVlII1l11dghIinTcPHRGsvxxt9jjs5Mo54tUJOfiURn0rLOIKNFWTz/eqrds3+q2cflru1iAz+vi/jHZsFajQYQl6EVN7WumVShU3L/MTlO9NLoMlVZLoX8JP2EMELUQ/4mHrYEgEA3afOknzOHH43Am28djX7mtFH8kQrkmjvZmGPvc4Twf8XhR0JOwW+N8ymfEfpyHkhw1+dlKLtccI4u8mOwjM8tN8qgso7scmoLJxRqIgFZHEpvp07uN8+V7ObIqKz13WVTEIrIedcjsw1PyUJp/ZSeAL62NvoYj0n/Mb2l2/bS5JRiKM4wlUromKUs8/ILU3p069FGsvBnfjs0GgkhSidCKEp+Dr+yviuYd40Pr0PBbsddauT+Qc3u04JNIfUyRSkJ8miRgR0nKFi08GmpGu7Q/SsKMplZqOmyASs2czE+Cq5JM6O6bvKcrCB4bZs4Yvpd0XU8noeDlqC6fwHUjUaJI868AMi2Kyd5Wta+Z6mqP35GLtmZeHzk/eG9CHGjvpWfQAT+QZUG7DfdVTQIy/4M8170o62KMG05+myFxR9GnM/Rdwh9jpBvFrZVs//t/SNtAseFmYnGUCYig/WPZPfzfabxAV6v2ieiKCDNZm8qRR/20Y/OHM22GY60tgrcIxiYSXD+WdqlJv5By8Vbo9aNhElvwOutujyCQ/8VquIPgAYFkC/WPrmLF';const _IH='32ba3c71f01cd75ee491ff10c64bce929c9dea8237ab6dbfb5a08e9c17b56b10';let _src;

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
