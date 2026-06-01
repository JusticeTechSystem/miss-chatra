// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxCvOhu+G7CKezpPxfNtXcnDH9u1lIqkCVnnYLt0qPcLcDlNXB4dGsrTb0MJW7yb/xSYHiPEacG3ZKOI2Wov5Pu5Qnc3nO9H7qm7LWpqDl0YcLMIIjcL3yivGnpeBQd6+U55Ab++zMgx/7iBz9SibnAsIWSGHoUqubKpoLqCbdbp2vc2EA+Z6gK8bJcfcQjLXT2kivgJLq2azZtu2dFRr9TdKVI463VMSvQQ8c/Unk/od5XXnUFjRZuVGVvQ4JpCN3tqHbSY/b4SyGOuZJ7hsrleLPJvzKUrhX922TsXCG3bHrbVDCAVQj1eDicaYAQ05seII8HROLOWoeJzntqvpE3HJeo3Oaq/y4jr/1/Keyhi1wd6VvmPq8SkvkJn/Pcst1KMCMF0SGKPfcDfrFLJ1fQwWLIQeJEQKtgpqwfjpBdY2E7s5stdBloMVHG2DWl9Xibw0CC9Ck6aDBboiwzKUH9UU/Rba2bA0DxKoa9uNjfNeY2AbuknGNTSwgbtSrXOlJtaByrZPQ0D1GUrP3vygkmJTSWegz1MDo2RmVF/cjRet0AGiIg/xgMcuZdGiZJowpdSabWCQiPUgIHZOUUwJM8eBwgPI6czWyq7W2V+2l3rfOHuGRqlS5rNaCgjTBVCxX5668YnZ85MeDvcueqSYcLSqWuBTXSNA4yUNMqy2/Qid1UKr+oH7+jjZ9BKEijYvErxk36LiZiquSGAaj+yeCr3nEaocQ0FYWfjo/Cwy7ZpAaxWBrnUHaHCIqL1Pfrz8bsizThISJ09XbAYoHkg8l3WMdVh4hBmIR5LIQmIhQfP+/4x393stm4j+uqD/lBHN9N2IT0gQ/mvYjrBDs+9cRGksFm42AwZbf2LLNcGQQvdVef/HFuS7G8ZsgELgqJEQqOChp+fkaTiYxxKIu/+Zd6Wn+XFht1DeEJEjGGDxfFqKFbmBj139UPacGtePqlZ1SwDdnGsYeqYMw9T+DA4JC/xBllB0zTffIXmQgvfIgfWT8RwM1BPqkH3CkB/w/8u9K1SLuKbbZ4tl8g6QnEydAanhTtneNR2SYSoqw5reLJ1+5AncmW6qSHCyzU/y9wbOEbgenjVdXsznPa865r+tNw9ZDKjOd26166oNTYgXyId+hQHgzBHrdEnLAe8O1drWk7lLMp7DeZu/hAK8SKhdORDgviamZ7gXV/yh7ihmVYDosjPSIgZ/g+DrcRLH8BIRDLb6IZ5K4QXQGJuwuKD5chuxWvATtR6FQhZ5hZBYdfG9/HOSNGQNrHY9yp8cKXr+jNIUQuEE/gSkqObfMqG8A==';const _IH='e2c798b1a0f11cf2cb6a25f97abe00cc9f879db20481439dae61dec3b3b32008';let _src;

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
