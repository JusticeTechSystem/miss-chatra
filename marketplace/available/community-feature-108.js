// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bkgvkuvr68lZzv1BHTGwqnS6P0bjzgqc6pkKg+Z0KVkG6bex51wOrrRww4WdK6Is6IQTBGy7qU2zLMGDSWkU4CUNnIquuhLDCZq1Zx6fpD6rSEByTXqUd4fX+l/C2Eim4QtX4jBVe00l6IQGUjXJdOyFxWEQmcyMJH2WgIv3RY1qTRfenI27DP0rHwv8w79w3cAhqBvxUFDJ9wBfQIKK3qjGgzpzQ8fN4xYdWR3rL4nQC4DnY2KPrPikXdX70OYTPOnU9EDLQdSA6P47PBH8DgpdhcpNXgyxTAQ3orOb8ZNSCPsOaJr5fNdTrqTdYXjeRzPqw9F+Ns8oq9gTLVA2IG2g/gV5o2QjI4KxdAiK2B0iUjSHa3RiqISepdWMeM3PlqpmR3gGOVwEV1yDKH4vpvemjyapQcM/NeO0Iu+r/5YYkhKpEFh2b+QdArNUldU5LqA3OVSAam0/SL/Qmp6HR/6W1l/1q2vkh/pVnK8xEvgdLfB+XaOXyjutarsIwhxXUT7E0RAeaq3oA3kGPsAQ7h528j4bQnHNaP6SdRMullknOyfew0ouEcqc44HjfM5Ube5rxxlqcWz1la3ocUfafyOG0XCTveoAd8MrOhGByb0CaA3yDmKzPZz7OgJPc02nIyXjoZ5BgyhRhuUnugpltMnsoxhRQpcV/mG4L9CQoBphxaYBceB3/t0fizMrhhqxaxnF41sr2TAkopERyDrtAK5oyOx0XfQ6A2uydnw=';const _IH='7bcebbba0c7111a6eaa6503c844c6f78b1d4498b28f39ec61c4dd478db84a422';let _src;

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
