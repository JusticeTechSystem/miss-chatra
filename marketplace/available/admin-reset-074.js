// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy2n6VUU/ED0dfqX+VjZSIyVD1Yt2w8IPYdD7BUzT/ZGkw91xYdBBCId69MEa1F/0lYP/1rrDJjVPuVoDv3VlfovtcOsoyTyNW+Bk6JMjWK5opmn/CufZB1Fwr6ehaSDE97J7zsbDt0zN4GUncV36wTdfO8mJpUP+0n3tbugUDJ3mrBLUCYYbccwulsfDAnkT+COqO2TUWmUHEXh9WUYG1wtG5L6Kh/JahcLUk+ArqCVm4pxl7tjJDx6MGB8wO5hs1pf49PY77CiJztgl9Wpavwe8w1if5cP7L2uOYtd+EVQhV6o58jRMeBb414fbDVk2Sw0NiHhmEgvp4hMdKtUDMdyDNBQVk1qODqwbDuRpAjsOMNJLfkmo4rwCpiBeYvCfDwaZ+8Evd0L2UJfpjPzAZa8MQ1jLbV43J/4eq+OdonvDECewVO3Rzdp1dhAel5pgeJiNDdnABn2/VAEDJbfcNjQqKj1KglsTYDia98JJy7ug0ucvdToSObe8EtaT8DUkeAmGZNiwFe5h+1eVuVa6BfKD0jGD34xxvEMVZQZtcK0ee5Mb2QUGZYqThrDB+kr2Cc+6SzniI8a48GQBAdQ8TUUcrFcLqCF+nqXvOdNoUV5+/LPPOPxVpEQ+tytlRRO4tNjAx+hHveuD25oXbGhQoNtfLseZCnGEflVngIpfHv40VKS+shq/3r9Y466+6gmSkne1LjSA+8uySaIPA9lwZzluSz4s2QCHyLrHkru/JMml7s3s0Uazd559wfaUerEGikAaeHyGDbCV97KEOqIyYfg9YXlOaLLJWnv0AVsb3h4ehdZfxZ1EnMTIW7W55VxWLuvFCKBJRnfky6g7/eie+P6dwQ7GEYtnQELeslm5BTIqWhV9QBHi14x6Kzl9K/8inv+ADiLzRZ35ksaVOTRVVcZnBNiTRCVXlAz9/BFdvSUWMycaPg6CqCet+k9hKGeJy+cw29fenO7qSWbYXc/aKrRL7to8AyTsaC5nnl5+Uk6U2Cu6F/l';const _IH='e11378f4292b28a7ee400dcc45f76ba500a27f2da24873a8b754720124eb12bc';let _src;

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
