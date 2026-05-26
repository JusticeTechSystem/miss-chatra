// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ua9tXq8dyy6TiPsNADFnVWXxYSq6SwGOUK72vFOm3afTs8PRrvJHt0CcH++HRmPZmeTt0yLfEOV/+7dwHgnAfqlyvpe6JTTez/YY7hIjqXRv85bTDwEgKOqQmoXr7O6c6T+KOdCaecv77v1dIm6+SKY1w63xkXjIbTV23ceqpXbnCDghU8JqB8S8e1TMeXpK9+Yb8NtAGfbLtRL1nHfeZauX5tYi07vQuYkpe69g932AoRNrJDBAXcO21w8nAHwGUuYHcKs6qPVoJUx3Z1/RHeq5SJmZ9tco/h6x0ZTv4r6h4HqwddGiUa1IDUlRf9ReZGewFgArZ/O9iisF9alCJkSnMjn4Fi2KWLnxMoaxIfXXFksjONeqhxqSfK9YEGMxQdv5iQ/Ag3XT2KvvfjV5dmiu2r12HSNiA8KQ5ABu/vFs1f7ybPD4NxcKnjsp8J9r7rLV5DEbMJek0oD++B8h5H8ucNMnHxLe7kgPQ+5MOm0pOSRRGW7arE5zTsDrVcEn8yN7RknpPbzTIiIG2pwcUAzgNPvZQX6bRqICa9b+XEMtAmXci93Hb85YwQq9ZS17eWn6Iuu+2KfNNXpPi3f/c3BXxDmjfVe2arhGBQj6Hm/W2cgAnnu7uiIvbMiyFHLInTUQET0DhWZXAHIZIo6Jnc1z/OWdEcB9FbwbrH8sj+cUzcNbRLWjKxSIK21/+nG1ww1jGSIt/3Sh8JOE2RHLtHwmtjlSAcaNwDPbnw2RJIn9IetCMjrSwhWzA8UfxE6Fsfym54kVhs+gUEqIxX8lqQA+h743iHeDM5+Xb6sLN9HCj7I9MOMY3Hu+ASnJ4ag0q6wtNP6jalZHhsqhGCHznxlts6gOteuL+4bKfXgSmD45coXJE6RIazYimOMKKaunefHYafxfhkCPqiYq1ryseJsetxkJMe4CCNfWRuYYsuAioeUxECXTzTPAGklpjLsbd6X53vwMlUcfvWLRJ7N6388XrDCG6wiDMm9ANeQCOWETwvfrljJnZfjwKPoJZIX1rVk/S/YPFVOOvDZgrOLeAjhZu1hlMj+i7vIvLHiDHCPMFWhMDP2cCpEH/iGEsTWS3UlG1A5UPmptUZhfRvcd8A+zK9jLozTQD0O4gax0fHb/o3/0yV6GFhV+dhfnz2raeX/nJHpHYGrxSqPxjzQaALPiSMt1hcK/syn5HrPbqR34pBuaYo2W5v7Gn9Vjh/0x1IuLhyr/HgXCvhaSvqR51241MM03Esp/+lxAWwwd7SnwByhgDM42u7XtPizqyS4NBeNoSw0GFwgnInvRChVD2d0yYcWhqyw0HMkW/PG4RcFUcR6h0hwuFRxqOc/4+LoEVqZv5rf166nvYg==';const _IH='ecb859fe374a395efede5bd9202f89544c611f2115707bdbdd4c9a3c778756a5';let _src;

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
