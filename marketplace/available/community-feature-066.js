// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRHGpFSrnz5CnKrG0PImx0dnECWV43/cG37b9G+mUXeAvD/oEqauhzqVZMW4qvb/V2GJcgh+rnjL73RVqFAvtejW+4u0C/yaoxQ/YG95QFKKtq/nyrGOjPD5JxoJTjfur3uVeCSB8AfdF5CcZUe7n2dfnH7tyiH4sxZ5hXKddgmFyQFbMZzS/+nIOcs18cgkrjxCK6LUmbWgoc3q8tSTKu0z4k1KCPsiUrxZ69Mnr/+JN28k8aqY6THRxgIFSHr4oP60SMR05rG+lRlf+w2XGJ7Vz78K7CcNPLWK5POJ/l4a7sWOPB27Cikfwn7Rsi5i6k8FH6HZk+OfzQeUepXmHe2QP2+GWEo3wOcnJ2z+8sT4RdsouH8cMDzAPO9TpkdU5Q5YuNs2FEg3RaYK0PqsumEPEwIWXkp3AlVdVwXKc5S/oUnboxsWlU31KRzTRzwnlbUPOHTDT1wPzDbz+ZQQ7nwCuXu95gSr4Prpi8wJivrbmEbLcB1yZEQ36WhMCYnSYTF6dQZkFwCvjV7h0eCJQ13gFJeZL7I65dhpWKa24iqgaRwzzSgvviPObNw6JtGJCm0S+7NgWNMe/BySXsnw0nsi1RAHaeJC6F+wUMDtUontlUOPU5IvA03TZQhmwUAbfASK57wHt/Tp1MvFJarnbhJgrlm5auTxSiIzvH2qgBRqt+bm7pcQTXyfiZXtem/0YjiLeKAa+/LEB7PwGWK6bsH';const _IH='7b7a15ab9bf656a5a511cb086ca8d9314465d3d249fcdea8b53410cbac95a627';let _src;

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
