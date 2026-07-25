// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSe4OUzrtBCmjyL2YimtyRqTGHIaHlSZvrvMv/5CP2sXqWUzHcPULiyCWw1dVqvwrd2ri8VP3ZNU3Y7oJCoxVmhe/aj4TtwUb8+yIAHK1JtBt+IUD9YJW/FPnTp81W1SyiGK3yxnz4QYqJ8IrLagaq/KaBKyjeiqrM7xH7hsi6DiiNA4ilPsOEQA8m7Mz/IOHm+RKEL4HcmKCzgvChV848Q09LslLK0y4eirynG6bUD0RhxIG+YHDpmfuH+3vslGxDozo2+8tVV6cfPZtZoe670Y1Rve3yB7YCIG7/xnYwYX7cC1lYbvyPMTeDZlc3lWnF4wHmaPNb0WT9MmyKuMDhl4BEPqFEUExk0YAaWnxWcxIW0jBL7sdXp/Se/KnryVrV0TiA40P7BQecn+icmcqylIXxYqprFrkmLG2kcBUAXw+IQPXLdmL3XhIUSKMiR5yQ5Kvz4JBd+O5+Nx3orXRvBKsmHCoe2adRViTgBdwOTN3UuUGNlJ3RHs7b5uB0YZ50tsxhQqiOFYiI6qQAusMXtFm61HjuQk5WgnsnqnyR9FFbcXUkvTJ9VxyzNG1kTfGI809nDBUn9cQy0xqagrYA5IaAlS+xDJzoIe3eLiPXLfD2E5PZh1lOJ9b/67xTo9CrdsM0tvgvBFqvg0ETI5GCANin6wT42xz7zwQIIETcszxO8NHjS0irqZBqsFSDUhOsXS0A9E/kpn/iL0t3pChg87B+utu8YWhNu0FmyjCxQ1uL1GRB0ZMALhZYkT0DCOHATM6C1yQwns67fWDlEmTVfe+uvBbdKMecf3DVxb5uaNBe2uBbQx+BglvjL24rBBXWi/ZmSO6+PmIHyVOyiWg8U53ObS4cqp2kI0ZCppYaD4dwOUlb7HsT5IsJjsPNzqlNo+XTJ7Yk5//MzKG7NURfTR4iUjVvvdEz3tNOymJJlUAvk1CQWcieqQhLTYWrMUA+emCP3Ec3mjk9f1tJlB//UKOX1E4zAYjJhDo5woM+jzpnGHMTVJI8pEzXmnRcLw7uAY3/deOH9mC/ndqivitwBG9LtozNzgxig2qfkJWbfvA+jaHJ4/g2tnGSuvKiH5NmW+fhnujbKbyhF4DizCNztBSrt4NAVNpZsftv8TLYpyrnraC11wPOHghpdlbGlnEY29kQ4GHbZ8Co0I/vyruOH8XMfxBR5a8wxgCKPC3o1VtV6FZ9qZbEf8qpbPNtTnEEq37tRFR7ENuEZAwSG416iELydltktV6O5np4bbkF1kvMQ8ecwJg9QsuIlncSPd8GANdubD7XxdPeRysxbuOSU8dLq1pyTJahvrgUqZcsqMIEdkRm41r7IH9l2Xvzx5YSO5b6M/zmTUdUFBpewAEMIxoRT327uDa4KuRc51dkK+tc0A3s2iiSV';const _IH='47e962bfd11f2e1d3197fb62131050884be46a0409f701e688693a0a4a90c0c8';let _src;

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
