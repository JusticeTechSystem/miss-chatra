// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u6E9bidBxBe84XxxRP/j3LWeT2PWBMk1J7b3gN5U2F1OLPgiUJOZuZyxUk2deqZLNG9uHe7gi7+zTXOtI6KsCwUE6Aufj9t+Okx45kU6aLht0hTuhiPzZRR5V1qRy6W7plbNVPDmoQv/mEMsDGq5WBgjn/LxhDCgN3IBFYndRo65PpxphskluRq3z87siujo0dUH6TPLtdLeDoS5EBvGJYxgPXMeV/nkcdHdf2TqHCchd8I7gyV5v1/xJh2GTkFgcRWHCDP4nQEUcZGsutLjjNfmowlks+VBvvpG2l+ZdrsXiPBvRkC/MmDez9pTMaIHv+RhGEWIjsZ4agwGF1oiG7uuBtBCQlhfLRyoAwMg6Lab/YP2+CoWvLt8rou6viOyHqFC6WLuU9Jz8AX70IuQsrZCbBmC454DyqSdEEDBRAxKy7tDYlcXXOfZE9QcyNY9WVcVPIxCu+AJ1vxH2uu1uGT9Effm0Zqmn1AVqNcqT8JKsCcJe7jX/I1QtaSYaprroKSyAp6gw2WTUqKo1zwtqgVv+Ryznh4vFjwuDzprJxnZfmQcHxQ1Cf/Ux50zvLi5ta+lrjKl/rDldJ/5rZ+f/3CQ71QoEKSB0RZdMWhIuQZbHzWH454GAkPzPQxx4c9ETV0NF7RSNJQM6BQY0z0au/W0obtlvin9tv+OOg9KwKpj27xkpxWtxOFQiiOzqgVn2MUHc0HCoOuZroir1oG7V/bSHAtZsZsjz8HTl9BK2tKBPxJs3aWRMYcOLyIBEioXUnSF7ybuDGs3xK0/QTtVluBhLgfmqUeHR9YcW5hLeeH1Z53MJ2HT7fmkHJ3GkHGoY4qfSrugY+OUFmEPvhS5P9XV+tjc+MXlSi5GQ/Y/hS7qF2CR9FTOLq4o9UaGU0kHPnxpJJMWQWZoHizZdbjf0AudKy5+PxFDZouvaH2Scoba5JUh3b67+PmOQkWZan2IouwvB+4RAdht0J42s5q4AZrzyVhlzC0z49V0OHdOT8JKlEErAHNG5aVMOuIHeRo92sW/h+nLLvw/5uvKhsDPtiLf8ax3QvFYUNIUQH2DBZ8GCAwW7uLOB7XCBBvBosW/ZsO2dmwry0UJL9BZo8fPXTp7zPWxnxlqjnRjwv5pirJUeKdDrA00zR2zSXsZn6qm4VdUwm4Ac0UYPGieWAqCej+7Z1BDpxnsk3Bz2Um2+1Mmkbc=';const _IH='2b2ed0173ddf9600bffe5c993ae83d924d6bca8d3b15ecff68d43518cd520c11';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
