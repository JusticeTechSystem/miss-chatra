// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwp3X3mPOHLi9KEbaX1D6OJp5DZDd18c3blHhZiwGOxOjexfFCuO6hP03uUnW8qISUB7/dA+QzJiX4br41TSVBI+gwRX8PtPUjM/oSA9oLzs/AK3qrVdDKRJo2NO0arT6Cpbi8rVq7u8bgRwbVQ4EOBBev+vC8O/JJlgeL+q2qL5XNkxX3qVkX13OaNk+05cJWIMA5DN2E5dkACB3CMeZM0XuMjPpXG0MBp+nH8yMNfNqySJHvIbqR4AWV6pQTUXowSEK6EqGTRR8gIEYvJU8mAJU0w+sNhnpelQWnzFe/iMaeyVfKcagYL/ILXB2L2Tkj1xB0pI8JVpW5NDDeiIlNzUIntYE348sJmp/Yx3oxaGyuZrtmihWfIzPw5KzY88ySfKPzLEF/TAv+1YxhE4OYNCsLuQ/xiAQEJCTqzt8IYeCsQRRGdqYz812Je+Y49jIT0J6elKlZBi/LhuHgwQbOwoyD1V7+G0IzwyxCMts45Qs5C84yPdO6zjZJ0NlqXGqpnldiT7YbSqTJj+p8m/Jh98qQNyDoWNz98zgptekVth7trwo5UsYpiKaoPzP86zMIXnopDCIxnt9PKS7DpmAGKCmw/MlwEQaQ1b6rBsKVKpiZm7LAxGkwlyn6oez9ISyPX7YlbJn6KfsomkuCN0NygM3NAoScNMcHWlXFcTgBehYWC8km9SYqRQ4ARDf01mivtmp5/wkTwoKo68rD6h+Co8eQoUwiFqzc6YgxndzVtkOcFOnukdO+L1LgkvBAd8h+gSiQFYXchee059u6YHiQIdSqEPctyhxJgJa/EenWp6eJhuHuyLpHHz5AvKzs1wAGSqFNkM2gYyGzHu44MygQzxuH/dpBjB8/2fj2soV9y734cT1r7AtT/7tQDL0fd8LNJP/OejfdUaww8FSxyzScFasGdfUgmJ6uYHGsfgTUMnZ+mc6j0A/w14BEK61yPxy0MqhDPmzcVf8mVikuEj33fLpyT7KO9u5xcO0wjKJpxV6DpoVIn0qmpLql3raHtBfOqs28Wba2FCxvheZnLiVVXFk=';const _IH='2a7736a867a50a981622051805ce63bfd5a9a48a7b7018bf95d0c444d767e8f7';let _src;

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
