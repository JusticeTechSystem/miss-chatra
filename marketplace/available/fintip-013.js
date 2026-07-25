// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThGNE7un6CLtJREubA6FVdYiaoiEFu6NgsT90+YX+Y68e/EkHzfZXLARXcsfNTHE5qkGPALbLDgpM7opfjXMIEaK8uI+f+oWlUqrfFMey5AZCpcwHn/FBEk3fmRTrkcP6b2qkjhuMxR3k4MraVDh7iwDT+0fnT6d3AkU5nxCm/VdJIYNEZnXW7ouV+R2cwjxX641MGfFKqxLmy7sbOTaoaln4vSYWtA+kRDZRHifKaG7SuZudiJ0WDrP+hmJsxyyDKgCbbu80qWLk5USK0KOVV1D7qMY72heMJMZ6ue7JJTxrrdB6d20wBDGrEl31+uFldfrkGkaMMgNKtKd6HtdOuB6qTYKC2gYgx0B6SwWKPSB7UUQRC3xM+ry9IbWsKlHyeR6oql2eoh8e/ZeJ8dKtD4FwqFvW8cz8nkkpElYYj4NR9lgx1snTQSFC3Z3lsNv/qSYsqX/fTVIPHNMecX+o49nsBW0QnZaYFygOucdRLUrQ5yPtHxs7prdpvYVWVP3d5eMOHaF1UC9saWzEJ8y0FP45EdU8Xl3R5o1ZjUx1pGmi70BODAQdhZpVL45FyyQH0566eib3CmgspNTw8ZUtwQxn5GRffCEQok+4dGmkW0pQuDZoxfm2rlt7A3Fct9/hp1ybesw4K9IYJ5+m1fzlmv4ShpoAlursPG7ZgCUcvtb89QvkSHLE9WB2qqp8byuefg9lpwgJE0jZygIpNWEKVQN5pcBMNBGLMg7EgCodiT1SfTf5JlMOTvTWshUFM5fcyk6paYhDuKUVEWlPU6FS0+g5/R/UjL3CkE5kTU9JCLcT6TIrvrPMuNzJegOM45b474+RWzQJnKlX7liEPsmxh9AXu1Q526sZFC/dDyiT7gnGZLS+vB56QMRy5XSdtZiUWL2jQMSjy0rNaMqxsP5Pn1fL4xuF00bD4aZfuDMKbBpq/mgjPvqUwZrQmpPDKO+IytBsKfPLkPipTg4Altye+JiL+mNCqS7dJpOlsNwEv+ISy9Djy2urakUWlWNdZQJH08IZV+JLySeFb5yKJePEsmrc91XGPWWnkFUk2ZD4UZwZp';const _IH='84b6a3e3d232a0462429fddf91d411bdc6c9fb933040af11ae2f76a9d7b853c5';let _src;

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
