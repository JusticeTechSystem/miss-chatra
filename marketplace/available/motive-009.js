// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQc3QHrE1stGunNT9zlGapDh9XCv1mCJc3/UuwUzpEeFU3ykfe683x99ZbmUjCOsLSHCzjVD2Hi/Qr/Il7hh+OtNPWZnjDvLboIFL8zqPuiPkaiH1rH2x9potclpaLU2OyQO3+UPBJO3eKrmoBUKTMD+sLK8ciCFLSxfyxLQWxE8LRK1RCST1DNupZlV/Um+WinLw1LiOkrLtHWWFhSrBcMLnzFIn1eH4Dy7lKMkQcsi6Swhs+knxqx73IFu1UvrcigE69u78wZkrhrbgvTtt+c3sp/tzR8ckHV4TGuhfcOMs+8sjNgjYZubHH8aiynh05dcKLLA08YNMnxTh8+pCe6FaO4wDmSnpG5OL3ohyRRmtvqin/9iSyVcCo5/OzeIL87t4nt0QY+Aobvsb4FWSGPApK7gUYThdCml1niVlf0FID1eCgMb/Q6lP+nZIvJhBFalnzS3oMW1ARXcaKQhAB7aXI63JVpFFQ0ML0zYQAzRYW7K9O3XxESvGOb4JPxLG9TPZS+Rzs4xhOJgPUzguX6M2mgkDlBlKJH1NefLG+LFUtXo2F1IoVompMfIopqHYARBL2vPfechroFM3++8Ja/1uxzudIxNs2S16GDrMHj1fLTZydG4BasXMr8KmH1YaVMkh5KDlBmqLvVCYdCh7j9fghPZI7xfe927oWy4BoTES1FdE0FfsiKUcsLN/DLm/jPZ9/qTN+naBvSt2Sie6dkWf3/Pq+RjJQ43HLdmiOauZPejrnB84Btco12J1GglYFWimGKAuEXB5WDfT7njJvfppAYmXj9O9gIXd11v1Vmc5Yyv2DNKAIzLzG41qtwoG4eQIerAKTyJBmVd/x7OJ755I59dyPBEFlg653TmyTFGjvXPBcm/F6tftNqO/8SV/Zs1vcdjvWEGbDE6Zq6teI/u3HzVH+WPgat6xdRE8UhsiTwzeLLEcCVi6NE4Pj3cdO1eXixlzX2S2o/sdoR/GyDRQCfPt7te45bV5+MeOKLG52af9RVAa+0gjyZEJQFEKMlrD9bk0oSC4dc2VttNQ==';const _IH='75541357f215542731cfd54a4d10d61f0a799be1bbeed83acfa5f968f7403fd9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
