// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSClOHafASnQeYEn9zSaR2LqExzmFEd7weYG534pASkvvF+RmGiSh1tdSvy9lI+9MpvHvjKJqYqIPJPvvi0QS9jZ/k8U5MoeYN91wm8H5qYfRlzg1jIt+9S/Vn+SFvu6SIAvMJNLQUdF4LwB2Es5mmCk3JLPPlzZcJGz+wTgPaTMMlyM9b4iT2LZQuuD4NC82AwMOtPN5vTyi/76ftQ7RIspaQNyJUl4NCG+rTfILdMFKGSU0/e2pgWzRusWjqbe4PtQqAnJ+RGmCYKIPh9D8tve/MKCCZznUl0ULtokarlZrD6Nns3moFjXhRN0q6r0KAWcXOh0FIJLehj5X69OiY9utcc1/C39n/9UzwhRePiLMFo6Zp+d6OQlfa5pYAnMjVNMP1m8ppj2CYrwg6LSFD6PgO9NdtrGb+NkUNKV/uPeMpT9ESbjUZzLDDX5n2Qu/p1v7w+0WrgE45FidFIIFLPeqJI8I3EZZ5E7y+jjsFBXawM91Fk+eSP3JQQjdd/YNd3qgi+o9T5/SSRXxOCvZJGwjJ1/xmwk6U8/nreeJ3eQQloVEWfE39RKgi2IiLXpSOzG0vr1K3i5IJtT6FEJ3CEBOhTgL76uuoU6RXRlwiGKSf5Oa+du9L61uYF9+EP2VsIkUiNMJgB0QUwFK2raYcP+D3zHTuyfcHrsfTaf9jWVZiR/ri4crEFJPpsQtz3DbqzaCgnL0h3QTd/2GBzTvvS+1Sf3b9+afnksbr+ny/ZFvSmM7MilUYASRKPlR6m7NGRcH1ViqY+Z4O0bltEbgsRUUKZcjNnRyzDq8P4Erg0gepaiB8Ah7QtIocSPlekGEYcF/Kkp6Gkjov4dLS/jsQ+Gt7+BeRhy6pVsakqnFQ8XRG1JhFnti3VvNwO457hGs4K01Uhw2/xvF5EmX+XOrzcFGNCMEsBYGUq1GRNPHB3i7VhmLWr4M9gborRm2/t9IoHeszrFPc19tOhYBIQOt9Y72owvRMDOHFHVNKIwgziqXmEnYw6zv6dkF0uWtHAvy7C4jgX7T8Sr4EGT+sotMpW7HFsxiJ549217Ag+Wwci1tKu61mgZ1KBUchmN6S655/28M5ZO5wv1w+74VRYKriqNVHHvtTAk/+XsKFJPQkY/5+iRgr0z5fnGOi8nfAMigMk/ly6mWJXcHnUllCc6g4MER4SK7dLXXsiXyA88VqRgtDXdFkQcxtW8CofgEhgK5XsMhmH38eGqDBismCtyHe2EFwjdUPd85KeUGX5NvO8CqSSOm9mheW3OoUROfya8/9d95g6Hqj1atff3jQFi+TMveyXKhSviAOP8+CefYjTs0YmoFyUE3Z06iuoI5doMzG10Uj/bVBOnoma';const _IH='e3a5a949179fa4c863caff04aaf7ac7297b205f4b1fd8ff461649c9599292523';let _src;

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
