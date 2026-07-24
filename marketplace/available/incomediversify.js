// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSSnOG13NR7CaRMr5OnT3ejVvkZr0QIU/9xF+tivcrpUzejQPxaATj9B63k8EK1oYeBHautHRW2ISDrsM7nDmsSgARy51CyEt9ef8q+vXzW1qHpVlsuMD2dPidWXk68wfAl4vk+T8RS4VzdffyBH4Lne/btHJACZoL4XxEMvjUX7mLKbsSv8Qqvir+jKqBYOIdGZ/x7d9ovIEaw6y1ukTM6igLee84DUnAhnVGToyT5XX4xfZjDRitR87PrWn5Ob/DMchJNeQGksHNfUXETjcqZqwWrxwSHRg8lZKTkp8BDQ8g4hKIgnAc9WZ4ZwIkBeN1rXGlP45mEEi6uaois7HtmgI8hzodYBahxGccAlpy/24FrgM7uNmSuhUiDIeodw9JzmqCRj8Cq9dlzmu7aQBuccH9LatUd/3mjpIrsjLZBer9hEioUsk4EdjTeW2h4nF/BksjX/9mB25Ki3eQKCmon3mitXMYwrfI7P2j14U07WJxaDgLkCHPMJ3gDhYClukp94IXN/IjzgvYQSot+zsBWfHcF0yvtzZ+pp/pAk07hqwWFitsOyAmj1QzGaMvsAOQ0YxSP5E0ohgKF1OqH6GamXC2WNpVZH4IEKFpCG26xkCHcJxzUj4NigQYOeUTmGYOhJJ0dnaoo9cu8EWNNSgTpH7U8fet8LHrllNu/5X8sch37kz8NotgqNdy+osLC0R4GKZsH2R8/RkolYICuyFDzI4Stm5UuFPxvcGQFL7T8Intt7tHkrQOkviDcFxfa2GA0liZPr0dRMCa72Z0B+sWOTOzcjTVH5+hF7DegnTSj6DMIvRc4VVC/RTFJnro9F3UhQnRXEiEBTZ+vl3n90x4aunDsNNj2v/YhprdzBg9bQwZIds2x3ZrOUqKUTo3ACMqQs7CShCG2aE0yltW+fwOnm85DbacycULDQgDaRu0TDwJdk6zve9kvV9CQgp/ApFNsiU2wH91FhEL1pFwoHTPX78d4NIxxIMkEOnsn5lBn1iXkKvxzNdd9/7yhnsPKoewLDa7bWc/q6iI9duMbdFpvYJjsBN3GP46C/DdCGJeOHzYX9+OI7v2pkytmLw1Srlhuippi7uz0oslkaua4tT52a9h85KA7yPrd7aGVl8mlOurz5yA/W5ouf/3ciDImPSfjnpOAXsfpPZEVc0+l1Q1O6IVU6MOeUpIMtshdSPZh6M40aBwf9uP/3NNCRUN63ST6lTA2lbvqR4g7H1fa';const _IH='0bf96f7975b3e670bfb9e84a3b463d65b9d6e40b9313a1e93bad775a9ad760c9';let _src;

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
