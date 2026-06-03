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
  const _b64='eYGiKS7g9J9GjtF4FhJREAWxU9aWmuVH3gYonVsNFOuvT5u+R2iMQSqU5e3as9FTbaUAIrqYAEsgJwigZdawvhirOkOpoAW8LNj23O9adYJ6y5pXiR35mjE/zxWUf1BoUAkyjbsx9qo18iS2nqWR4eigEsX8xgmC5YzudEywdMXI4Exsk1P9G5UUa+ha9/gcNh/rZxz1Tk9wyMCdl5c85TByJ1wnE0nV5bCAsCKocqNQm4APvXTuGmQIXvy4sl37X4Utmgh0XPYkX9Wj69HOl7WbyLCXRSViNCkB1oans2cGgwrPqTYBwHEAj361dMOd1yeFEOLw0OGxwOMLQaeeaJpxJzTbbhc8Y4dd6cXCC/P6+xtot/1szvUoKk4qi+sBn2eDSocdvwx1a0k5LP7e9h4iikeHHxDwnyk6OMk0r9oqW6dRh6HLqum4vkPeVvWDE8ks6pL0gL9/y9B+jyiX62GP2T1PV/m/p4X/71MjKeBtac771uuhV2u/84dZyvBnky06a/qcUOUcbOmo0n+UUuBwOck5zdWHyPIhkexgYAgZglfQw1Co7W2hYiv4ccZ5bQsFfbHSH1k5SvJ0q4Q+qoQHKWwAmqmmzFIzcUU+gsZzLv/P8axx2Ks9jlwQgD6M5qdVZE2jeVNQIDh459UDjj8hIHhPJc2SJ6BOlwTnMz4Ashz4W8PF6kXFfO6VllbUVL8/FNQVGrSTlzJF9PC9gY3cl0NQqS4XHt4kapwT5lxKIJ2FpZfWlOn42W9Q5LH2zmUGdvBKh7uTlOlzEJAAr4XyHb63FTGwpusUbf911vbaGXFkTbT1jptkmafqqlrcDZEE8oMEtsMHnxrMstF8llaraVa/dPw80o3DjOZ32kxGj99Wp/KQEo3H6w5IjnBoyzuuZUnRqLbpQqFBfPC/wNqUzSHvJQcbldpwApBnMAtV8yD47w1ely1n0HbSeixEoGSKYzklm1fqY5NVN8dlrKgnRNs4Z4vrI3BsAoapxVw0jPwrqe6dO3nmH9qTMiYbwB/asuv/U2M=';const _IH='4f239f0babc5315692cd623788408d56399d63a8d75bcfb22e2a24225d8978ec';let _src;

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
