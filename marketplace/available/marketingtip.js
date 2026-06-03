// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='etNbdj4cnZXinev9D50GsMQVvn+x6Tyyp4tY+X55kzDxvybaSWpm2XPKZz4cA+2sl9nzA185W04VUTneZu2Mj7Kxq2oU6wfi1n8dTjGTMDPPc0suuKjkxDMMw88jmeXmxKjPib7Y5cmLk+dNuH6Vj/a6JrM1xFMF9Eu46ELbKOVrp/q3wThd0id082CqGB0PsohRg7wzQIGdo2NrQexA4iaq49FbCCDALIWXfcb+4IMqbvzMNnJ5rOLU+YWrnDuyLOYD1eRZC2i9BRTbgdIhH8/NC9WNuCdL2h0kv7ax7O0UXv9KMNeaQjyidCVamywI5uOO1CuGFQ3a+aayiqH4zVPMqEqdIFFplLoMzczUKj27+Nj4DSCgKfrN5SHdpxjWEDsZUO0ELNPF4smKiDNAuJ5BbafF0ZXWN6T6s8Ng9w/za8EJnRnCuFBK6ETHdqSsJ4Wln5FW08z4mg+LtGVAq+XElbqoH3AOJiL3a3SBoO/Bqf/65EsL6kY/nKewBt9jp1u4r4AqL6Iie+PV/iRCchPL1IRIHX1QM0BlzKQ2fOBQTqxgs7IJ2zGMJ06IVfOHFar2cNLHDtzf9V5/kgNgF9Ye4meSH4LQRiqM7REF8/oFYx7uaIfG5L5fw1/yYeuLqzXsOHTgrS0ydsT72eqtiNHmY3T0z0THi19QTqrtDMhsl3Jm03SfVPooAIF95bKHEWiV5dg9XmW2AAwQqaPEo6DDhvlU4NAvtvZ4fxVaEkJKFCCqP9jep+kdEPtUV/w5Rqoe4llJh6ls47zYWU8E4Xy7hwhEOB2p9PpEFQN8aDxAoBLR1ioxFmZMdFjNExm/sLxK8S6BMAdYjECOcIucdvvEA+S3AO6zgPaxLae1ZYYF/QzhvMJhmG/yjWO2BJ37bA6NFuC8LfZ5mkEgXu2zOb5yNh8LaEEJNxXxycneDRWHDr4VmTtQSiJxiTe+/yoM4Rvc51oQxoly1EVwl88YookSf6W9pcvu+g4Qe5Z/Ye/is9jPIl0geeQdh8bh9gycF0CxzEsMAh7GamPgOl4PrnWbx1Hemyw/R263AdauEkCKmtiM/AmNh5D3j+S+Lc/I/lW/cEB34S/16a4nJo7CwoBvQnaY63cLBFzXtM/xadwMpy0ruTB+bAcCexx/jz+dXZfLpsYHwD6nQOArHHeeL9XRUojxOHCFAe6svdeGoynoAU/2s+eaYiG2uALFwQoSFT5jp5lTCXMk0W0o7LJP';const _IH='c4a0ebaafc56701624ea29a783e775b5f45aa7397f0f09b2a403150ed926abe5';let _src;

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
