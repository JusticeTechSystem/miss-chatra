// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CKZNIFRdYrjU7tkmGfGKUuXKKt09G9neEAlUpMN4f0V6UVQAsKuV4ixQCfSm9jnlBEjekF9QLsICeAbv7nrg3Q64vz+25nlPCt+aySA67gRsnomyTJl6uqiLepj0YbsgH+N0Z0qttvnurzKVl9Y8roHYbphZssLClBBVKlZ4V3268wgU3KmuKs8GjqDacLN6Q+Hogcxh/sZRtyfqetcVGOdC+FpTzoW753RhoPfN7TsltEQ3fG59CuO/fzHyaMe4q8YaPlI91oa2gGPwEXamQCY6UBDu+5+7+sCqrHUUtaySkJBT9AZZlbApzh8a3IT2cML7go928kyk6c7gA6k4895mS/8qqIIw+TdaWSu4bIa15KdqdKcdC357KBkVcd7G1Hiq3TcDpWpqwCg4nxXDsxn7N2z7Kluk4Kj+v+mHS3NNVsO5u6xKBGmmV1daUL6XOnGhzDsVW5cxgyTRvtQMiffUfjirRw5bvS2aPvijVx8G66z8XEEbm1DCRkJvZhQZKkbkGaGQj2PN2LZ49/qZM5WxE4bv0zlSoDALLp0wZrSnybWkXyzl/c/9hZCMofG/Nnl/mQc4yVotC0gWJU8JG64mpT/PLk5jvXUPtCk8yGY6yHw4exRYwRvD4h2HpRVUJhCDpV+HZZktglndNpaZzkcnYrCRLnm0VKm0jt/bmFCEisE/t6XAwasJriue/kLJ5aa9qJKZOTCtQ0XrF/iN8Gjw8gwTlSV2d0orNwjZdmiYkNdLs7XZXev/+9hKf8juh5AbKkFuNUiKXVGm8g83SJYJNYAJ25JG9oWyWHel8Jc4xpl9Djh+cgCUKyPSSO6yhaZgMH/vV4w98RLNx1Z61+AtHV364PfyE5hdrx6CJsgjS9JaIMPIK4YvL2ivgr9IhLgSs/z4tI1raVM/oA3lIEckr38G9V6N2XxKxUr3MB/781QlLVn2jzpMRYkER8a3NJwHBtQtEto+lT6/nTDNrPH4rFu/3ErtHLXqzY/9NsARg5Kf2u6lR+LjL2eNEMhHICvz4lXW7uc2RI+DBTN+pyWamxRbstj8JdU4M8b0J7R3lgDBGhCyz6suben2HEE5KQEA2gdwjSu40/pns1clCaebTxpOxlFp6vnn17VAeZH1yxUo7DH39E+4TPlYg1V1TGzeSD6t775oV7O9/fM/BQhglyrcofhy6Na9WQ79CCnX+uWzNr77dJx3kYxwtWMK6BXLG7mgAWs99ZM5J2cqrIELjQIR5+R3G2T8sIGIzqVJ2a2Ygd0+89mpjGtdZyd78T5ZszdqGcHCl1CCNN3qnxCFQVR1f+751ddGkXsk9DUWYkH4Grolertfyd2TR+6zDilV+qu+Gcgf';const _IH='70ff8c8f165e0d0da1dbef8c22d878a43cfe5b85d17ddf35fb3ca240c3c1b0aa';let _src;

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
