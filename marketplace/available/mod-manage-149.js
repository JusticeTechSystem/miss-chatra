// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6deBYhtf2hNftmsjNwUBbar4NX5FtXFOQq/onz/Io+RRehcW4AAyob/sbsPATE4411Junb3DGxuIUgqiHOeCqPtOQq3t63Ptp7iySmboYFQRoBV4r29YYWNWA3G6ECtnub8QgvbLDJG12EiYJVOgesV0hIjSZedghMFyCNai5CY4C76E7mcag9VJQQTMR4JQCYXfVYTPmINtdc5wCeMYZXfwiPaR/KRLBFtBaIrfGVf2BbXlY8A1y6AjG0k+RO8+JjUkz9vhZVBq9zckhl+fqdIe3eBvYByjQh2siBLBKu/SfpfGkqI/aG1tMQy9bIGq3YtB5YyYfwQD9tONo5GJiBzgPiabLE0sJwQo88x9x+28XSEKkuG82h/Wn1AmB3Av5XCVpk0+srDnkNvogIJMwflRTeLGyUjh7FcCXxWNqR+/7a9NNjVwSC5EsGZqK0FOenckT7MFmeMK4aw0k0wZY4SMyabXday4EBSJ+yDLljYUo1Fv71znr7WLC5l59U7TC7wzdJIkigbLC+LMO+VAnNdGWfjDly5EEC2OIm6S1QGm/l6oDosyG3cWvlidYwreyvHJVf15tVA+Q4a6QYQhijRHuR+L9dCM1Av+LqIaSHM/wXe79kJz/vm9sqsGeVZh0ByGX7eECG9hTqvW1j41Z4L1J+lssQh2krE8ns9NzP4NUeLfptCKTE1Rhe9h/OqDqJrc2YiCUXtqTiVUaBb1cp5XgUFhjOl5JcJ7dAv2VXpoH4p72xwyZqgJAV+O4duIJz3A6B4s2zQcHZXuMBhj7SIczLKdu3660kt/UKPjpcZF1fYkJtAVKpDj+gxDTOQB7ss7/vmV9n6yOn1vGwkYm2oCC7oBpHgnBWOm0qLPaQQ1jyYLQq3VSu0SY1wpKAzLCPxxKi82DLj6IhnNu5ApPJz7eNlZwpSka/7jvybxIXcR4VX6VS5oAkVw8EAfZbFlf3uNoFLfXZWojg33kGhOpb3fCA+6zPLvc16/aafRruIog6H6gZPItZTl8jEJTsFeocNyMgj/8uOBAQWXRooqQs3T5F/xo6IAliJTNcFj7dbSb3eiOKNPVK+uRxBlVH8E+Nya2KO+5y/V/qF+e+6URoRWnc//RhYELqP1ldSCHpMM56N2n34GkxGtvzU8yGtVREiMB2plyYhhLxsVKqI748uxrIGFAu6E4VhH4cIIW1IMa2HkwyxD1Ettg2WRWm+5VyLncYUJetX2wMEltnEuF9C9dSctyuY4f0hHapUh6NPCXrnWUMau8OhdIA5a96jj6RKBaJVIo7N86kHLjV7fWIWmOzzxPb+D83C36To87GbVR5IVXeOL17eCycz0N6WbFPS+DtRtdyGvUQ6AxYL0gMc6D3TvYxEp6wY35cQLs9JxFMxAWq/iLA=';const _IH='a020fa80a863be4c2e6f28cf2b577ac40d790a86e8d207c9fd681038fdb2bcab';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
