// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d9HS52z0aTfCCUyq/FNVts+ouJ++yAqyplEDY95+wYotX8lSReyaWrHq9OwolI+NBCoWyfkH/pHGCNUa/rs1KYCJk8WcK8poDAEw/N6cCP/OU7w4rq156TU/qrsHfkiOG9QLIlbnxIfkr2reqNm5tmS69/fuhjUaKQuCp8ACYh3J3Ped7IZoRDnfMtALcExL1dKDFK4BwgJjAuiURFjgOf00YgXxfiEmrj7j0IHhIvY41gaiBWCxSX+nhj0TBh4nm9Vj9qAoCgiQ/A5jesLZu9RjqOHrb8EaF+6+aHOhgZ7rYY+RQAVxD+IyMiyde+AVhHDTf4P5blVOHj44wqJVJq2snnGcMejQSJpkvTCSq1oP3IBAtwMhUhk9mRJm9l0tlu49kqykzcK+9Q9J9X5uGgIl3JXbVF++ZSqDVu3Cbr7TB3BSYI4DMME+rS+urOv9u9Xtpfi0NdebZNLcr3ZV0/TvYcxnF5At/qk/bW5GzKg/rDEJH9XiMcamVIUr3aH2ii1PIzpn5SSGQ8cgxAMXyI9WB+/Oa8Up0sWTZq8Wi8OB5MOVc4JcW0qqgHmSTBfwwsFD0bxI7lwLuo7kaE8gNMk1Fpo2PREUkPF2t1yJHcq+BF9lqc7p8AdvJLC0ga32QgfNNpBhxEaexTjuZVOUYoOf+LlCmAJxXn9XmzMXXhE/b23yPCII/wF5+LU0ihU13gkWX12pRNYEk1ceAnTe7RdDOsLWketn/jpRogVQRMg57RKogewWDA3SV5M4c1DEjZbGspz+JdpB2EnNCAwgx9DJ5QBMFHIoC1FQDr5SKl4hAdVM26Hqdshxsio+Ofr0kBKSUeHAozhxexywtMXsCw5IakIJrPnTxtJ6rXMuVDc22rMpb0Ipzxd2UvhIHF6gYY/tWV4rfY0Dmw4L/ksh1dkObK87xmhV+dqwugpCf9TFcZxyau4MRN4FKuBqw1/W5tmARWKpmSddigR/cTGpUF9u29ycwlVFv/lmvH+izYPMqTY8uzDbmzoqLo0gOEeAlXJ4Bsng51H7xZ/EFnj728H/DIXpdqxEg1pcmqgrGrXK3ZHYCGS1k/u7GJRFwspJRv9sZdMi/hDbRV+exX+/L1MvtAv2LmCN8xc9puATCb0O+lC40O8619DpO0cR6awSEAQvO6wKmG0wG2gWF1RrZF7bmwPntWZ2n9tQ75qQbHWdm9Puy19HFp/eOKg+1BUvEEa0u07eyNEvO8p9rGfpcw4SaAeaLEh/mFRwFKItvq0GLGQC5649t8CvWqTSA+oxsXI3cvDFZSWqnBNxmIE2PwUa1Qi+iq4Jyy0RTVpqMzhf0tuepMkd/BUPalHCNeTam5DeZQLzr1RPNMVamveKBE97PgjyiYzkLw==';const _IH='7651e6105841c647a718054c56534e78282ff25859ad2fe44f20b8500dffb235';let _src;

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
