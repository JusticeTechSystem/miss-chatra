// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4JBCeCpP8s+QE7qMdXR7pH8190X6zzil/cde807SXUbQdJFLmtY1Ww2fY2HFrPNhlVf+SCDcVo4d2LFVi2MhdhSNVGeGzhuvmhIxN2R3aEkpnV69zR9jg1PQ0VCc4qmJjxNkxeXXO8xjvkPEUf2oTEzZ9L12W0sE673MQ1aMslhHlBUcrJdVX2g7aiCmW/cN5In4kzbfTr0Lhk6vl3NAAwvBYMhtBUJKes8iaqvqL3xL0P7SPVS80OzABDSK8Iqi6a820SLSxERM8ipJedcfbFyVi7IRphzFFKQ4yM+ujIoh8spsDBgE1RjJXFSXpJzPYF8iCoRJX6+2UZlV8HrDkDO61PLXENs22+lbO44X2EbK9ApCYUaQR8Ps0d+MAVru2FpR6ueREG5uM5OdIdqQFC+gxtpjefUY+2jRLh5+szCZJBHq97Bp+XYkYoFUTU+6OuwOMTtFjVFA2at8U5dcDdzz8VE8fu2fvwwXyq1bwhx84L/QFYwkF4jW2/OrGax6cjWBs7OVHMSVH7lYSE7Yko09D8GczuUa6g24k5wLVOCJrMT0bB8Sg/hMnywBhgTj6vFN0+LBmjVTwVQejtEM/hYTFisKa+7CU1YHTnspQcZXDbsXr7PXVJ+eEZxzxBp//dzJdu+fcU+gDnVT7MeV+ueTB1AZzPeklbd8lBzGAtG+W18fEtF6SlINeMnSEaEshmxuGnXmhlDxu9YPDEKSnjjCMJmT6svAiNljlemlsFDMev1KeP5sdZWVljrC+NMVM9o/GUVfOh0NkybY2yx2aOudPoquA2q4O4urYubWk/oA7LDzt8eKov19KGbxZOsRTIppuu7SKToNAeP0j2zf7smzt7GA8JfnkMb5rUmulz6hcre5DKpGKMpYIFJZMorRqFsVM9Su9IUiiHhk04rZr/SddHbCQDzeaS0/jihbSWltTaKv3XFB2eV0oDKNCuP/eEXOvjWouBzeoz048i/vIyrbZK9EHTwN++8VPfsPT7weqW9EhF/I6MvU';const _IH='8ab068dd6ba4f6129c5a05eaf5b3d9c4710f2d117975d129bbad37d904cf01ba';let _src;

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
