// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzIrdUZAGxNSKo3CsVl69UDeoRWwRfWjtnFQlglR5K/oWhMdPoIVE7VSXOqXTkuud7PQFrOI63xlnH6sFc3dZDn9ur6YMlwh1I6cCRyvoT8F4I+sDSuPH8YDBi7UZJTw3sHaz5ve5OGtdRKcul2j4fbnmUnpq6efcX/XaPOQmm2R5ceLZRzfxFLkzV3O1M2PS7qIVQpbZFL/ASvc+IjYn7qyVpqEpKavTOrtMJKqy2hwAxbEQK7U7pcjrY9bPJDmoKPMc/0LwJ2/ViZKTylEzW1BS9ne/7NnHMVREDP7PGwpAh2VUXCbUkEwOQdOoSKILC+okfVPajsOojZJHaEQJ3AqFGFw1kq/LOnKV+DhXXAGwl/w/bisdrF1g5Z6Ba6iB04PMmNLY43CRHAGO+JR5jsNPPeS8Aj+XLH9gREjYt6nXU9mqcN24vvLUcL7hOdeP5mIGjpQUQxBX7+G5sdh/Hf2tTVSaOQ1ooNSbwvaqxlBxb49NoZQ/pxszl8E0AMWP0rdHKxB1ZMMoqfiozcCn8w3jK9ZWSRfJIt62Yl7ji6OrtU6hjKiUsUVeLmwYXv7hJL86JPLpKRK4F6VtoNWvboCyrgT2C3y+VjWk5InHFnejfQZRRT3KVMznXhyboGnXotQy0B4C2sM9GWjibNVzrobKgsPaugeXiv9P6LqjyeL0WrYAQqABV3bo5cE8bDApNy/sSwRMl0RnD6VASkF19N9wS8NXAWItZbwXeJsp+jqcyxgQxaToae7P3Z7pO8O9R/DvVDfWw/8Ne99EJvFHC1FQd1Owty3nljmerSqAVCK/Fy4lk1K3gL91aXkqzivjc5uCBH7jlSBPTp+fuJwkvuBUo5w4dOmvk8OFQfP4c/atEQ/Yq4UQiD28n8AcxvMqEou8DG+m9D2n/gOr9LsJ47qJ2Czx30YSCNMXQ7lkIX0woNmhOCOhrTne31fUMc+37OOLQd3SuYcPkMI6Jfj1K2Ca+By3+01dhrO+fNHYe9qpbJKBph7hHNz8=';const _IH='08589971f6e42b90d0890c393f592c2987709635bb3bc852718ccbb3526d6938';let _src;

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
