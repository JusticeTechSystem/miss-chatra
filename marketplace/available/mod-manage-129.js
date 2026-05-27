// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cpKtvt4yKlwDnQiLSjgaiwIwIRYxkYeLGuwiIpAjvsDqojz3xz9a8MoAcCt+oRM37+B+4qKZtfhSQZlSUVehyuUZ13nqDymh4dHpFuE7NqDLDahDxR0PFPU/QxdgD63mACozaWUWTNaXnDNV0bvFhi8ZCOmsNXm9H9sKUH5BZEsecg7MTOVP1gdi2kp5OlFMjlIH4TN73YqSvisjKTd0YTCzzkWqB5/kDi7wyTTa2eEOM+3gYNtIS/3bNWNeG28DmHDJsrQmX6KHqIqoILumbb3GA7YmdHFzvjCHARkLSasej7ozfhfbDaOyNOwLrjRo+panPWTTFrfH6Ji63EPga2zjW16N7UCkcJ0rUl2p/4sEq4WdOl4SmBqBHj0osdTMmB+iBnSp2Gcz0c8kle/VqUxY4ykwPdI9LbCqyVZR7ayJY/Vz1J4kpNRACkqwmuyAvt0iznSxt3P6QAv3JXejW2lr1ClX0cUGq3qmVPPmvZaf12tD0eluQ9oAU81/XLH7cUiJXiwk6AwGAfMPCyEKGBzuTIShZ0cnyUuRk8tfPdByIgPbWFf+s+v0Ybxnjy68I7hjunthQDNu/C3KutTsWncRyJNoXRTYpI18DsM2Zbn0mS7KBEJC8Uc9My/KsDLH3Te0Bkb5AeB+gzw877gXg5eYwFteHRmqJUykBffp7jTgQi6l+UZAfWBIChnsd3x/jazeD4evbGDT81a4L9Z9OmtLy1OywP0zmlKhw/+gvVhWy9X8eT8Dhikv+FthCiM8QhsK+5E+A6QVD59SrLH28xWhaGQv2VRHRP54RCq+KD1TznnsTi+GMljNn4PAZA/KvRHZN5tcfnPQkMnIJRlVW4T0+LcKKwnxPkPIcyZYjPkvYWo1J13/iQFvbNzhyCbzgrVgnnFps4C5eIoArga06RVgb0jPRt3HnG9njCIavkgJ0uZq7UIQHV7TNmeImaK68a/VINvBNNlXmhftIiVePZ5Pi60m7IU7GH6mR0fJgMup8xvkD+MrMBcdMV8UMixsYqOUlIy1viLLH2lbORRPbls10V1UBiuZ6mamSeEo63SfBZQd+rqCPhFM37bq2FYx0kKPE4BOrpb3wrVnYF/MBjGQeGCs0w0a4yqIaP53UkPW502djERNyPhDttPbllC5Mf/CVbTvif3MtdQJOMYUXk0b7LJEA+/h64/YecLdVYL/A1jmV27/NbA+MOlPjcXdtSUKvuQGjGFylRNo235uw4J7D4l+UlWezrA4PdmzFCAbMF4RcV45ziulSMEASr10b7nEK9rGL/96msDB2xnpAFHsgJASdzsLZsvliVOt1OIBf7dup8aetQSPYN4gizhw8HMY+cokznYFJTi3YTF63jpYAmc/1JYBuLNbbLziGTANN6JYczzuig==';const _IH='c9ac4da9c4d658cf08ad139e3838caaf3d875a56c0d7864bcbe2cd2cde188ae5';let _src;

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
