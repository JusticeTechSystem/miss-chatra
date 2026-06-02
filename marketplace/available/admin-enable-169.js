// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zw6cA321s+LI1TrNoXXCsaK6uZXp8Bv6uVbPrgfxcqiOSufc6+gmnZ+7Caf/lHrCFByJEdUdT+ND0YeV7jhBUHHNCvY2nxkNp9DqBm7+9D/weiVFqj8uo1PojeKlnQGRMb4ZIgbXnHO3WvDmLjMZq1x+XICIaleij9tOr+xnUAWugSNpRSrU2qX+1JoPQLgd6z/E9QTrZCsQhuQW79u0/8d5Xde9y5kw1pAwy2Ml3ta1Vn8Tu9GJK5pqT72uo55z6Ohynm2n4APwiZQn2jl60mGOVNwL5AYo+ckFE6CtOo9GKvwp0Li4oM/k/J14rGOnuA+dLQP2GX6kFi7etHW4WRTA5RiDvjg0BbVXOTFj03ZSSdZMj06+Kzd/fRuYyeAI3nr/pC8nyf8eCTugh509O3AXjVkQCQw1CjkOAlZSoGfISFi+YbJipe6BXwhRTJxYJT1VEnfL4r/Aw1eoDo3pg11QjftZcBtdQkF2QnvCG8ehsi4rGeTbMRY3ENQG5GofJxogZIFzbjfUUpj0mJ6PdjSstluzhyRe2p6WP7OMEAaimdZ+jVKf51+oe10A8TyWS07XFurqHj27EzwZqaHBjF9LessTm6vYS8VKWxkkk5VID5KZAFgZk2gpdELLD2sKY/CDMrHA6MoIyb1/eWEmgfNpBoWxDujscs7AhefiD3Jc7D6XGPiiZLKU/8nx8SSpTKXJDFMj1s3kvFN3N2QHIhbL7Pdh0g8z7ilPIPpPldKPdCa2uU2aL7K/qqsdhdzE1x8JgQIjSO4/7izgteQ7ZRZZEGYyGkz5TqPI34WBpfKmPWWB8nSnN9vhfuTCki4IfDIG+xZTnalzV3N8hz24ZUIGSSipeVBX3xfHZsLA4ZNg0UzGDXx99Cahs6QgHh+DpsuFvQ15KrdJBKNhWioPp3OglJjSodotn8Yq7pnnCXrZkJmXxB93d29EPwZTXJFL1XvmMATnSmwu0pq/1wGTmfTj16bUzIL2kaU5Dwziew+/MbJM0yI9/q+oRs05HoZxfg==';const _IH='f8d0ec4896330382b9b5a88d40c4e4e2be8233f5db1b15329677ce17f0d9d1ef';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
