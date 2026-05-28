// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='237DCSfJp2NlN2Q4m3HCS5ePAqZH43PutITzY7QM17rxZ8gom5jE+lIE+1F8Oz0lWor1XkEjWNSotRBNVCzkArh9o719v21ByECuGovPT4hH0XmZioGEtCpZ1tXyvuM/SYfAVSBIwu3NwM/HqvNeEIuNaTv0ymhCCXE1d118kmk5I2AdinW4l612B/Fkf3BSJ6gD2p2gQ62KdcE+XZIrVqId16Rq9WsMyX3LZ3BZnggCscct/Uz5EqGiXr2eusbrefhQyTqT4P1FOXCYjFZKRXauQHBO9Fszv6tZEIVIPtIzATSdRWbC1+Hc3qam6ObS6Cazx1gg2PHb0k/Sgd5CryujDSEW5jCLfPjQTEvl41zw3CcfXFiuZPLGYTPLCMlz48MwC2sCwlvrS4U2FYB6j0qne1RSk7WD0AFkbcJNLNHeTmr35PdUOkWNkdjbuTsdf2IOkyrOTB1zsMfpnRNJEohY6L1rMP7Ppniqdv8xNcoD1oeaQaW5QErD+kZNMxoiT31Thl9JBaFh0Lk0wyBCRotOc2vFV3yEZuYhsVYENZ1gsw6UUFrEG7me76aJxKpYBPUO73UH5ui5QKO9q4b2xmSqllJozEuY/+ra0uiw2s48fZtgJPClLWNx7EQ6oMburTTmHmH2RSWEKHBIxn5HR8bwV9FT/NC8tLYLHPuVjVVVl7uFhqmwR3AacQVFVe9KAzmRJqDCwwGHUePD9ySRd5nwTpEmY2bFHx6cuv8mgqpZ9hG9RsfsDcMB';const _IH='5dcd2e65011de24a11f07220b8af3dadcc238b7bbc0ab4f465c94349a69f0cf8';let _src;

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
