// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQt5Q0fsaC3jyerYW2iaduaXIaK4mtaoDJnZBrDjTYrOAb7ol0z82OwuT9rkYxBEVaJcWVxvIbyPpBlLUMOGWQILvK74sMDo02i0RmbUAwdXvtl3LivVPYckvuYuwVstZWBvx6U3ZxmiKnYJnsLl0aSlsNqsNZapqn59Mj4XjXrRNJiG+iB/ZOcDUqM+mbHMIhiTHG+tHDzv22nm7N6SKaSsYc6rpxszjC6pR/9cGBMnBy4133wj0WlCYjqWzJPuWleFRvQEg1KpvO2Do/BxP/O4TU2uf7sWcB4QmhZTZpcrNt9H+T9poTbk8DCDG4ARBwUwbZtbJ4a5sWi288wrykpr03Erx6TXesi0Jhz6HH6KJ/ujLL3sT41pyw8HzVrGvo4mfflWFWLD51Dw/CzKMpLxYM/WS45JSV8LmnRrsXRuTVHc4MBrgt6DNFcnV//FgdwmmZBl2ySntDhNiZbYwJG/il2jJIVk0hNCbR5pYtVMyiSU0Yvq2brC9AAF5s2hKGS9WYY8O/X3TCt/9RgtNTPuQIHaftCMFap816kvrdVT0H2w99RdkRC7U/AqmuyjUou8pSTCq3p6WVUNwYghpqt2bwPUks4PjVgqKWp6wfMm4jW4qK820nqRPDCOUq3ZLpZvTFCGFZwf9Yi+U5qpVvR/loNZXkc7arDNKkZfcx6U83oUkW9n4Yln1MH1XgbKsvkue323PcgezyNLPELtL1EM3RIBCwEBGJxRxD/wdRdkS92GcLAiBHT9PhXfGfQeo2++CaCJCmN+4jKaPspFqEZfJ3RppYaW8I6L3KpHa5KvaUs0W+JUlgFjB3MP02ILldzJvcJjAuYjOuufeFJXRdnRj+PQ6feoR72ImbMDK2bx7ghWtm+rqcPRLLydTNFCzdKQFviumY6lJo4ujVdOAURIml1vW2q0RZdvacKMg8uUtSYxIipBVWpYwQrhwthfx3nDSKzlCWnShRWehkhcTygPpjQiFWZMb0SxDpTmLST2lOIfAKJ7xoiWxTXO5yF3OXX4KHKz2clhO1HpQEY1BvjDmj1WRmy7b0Z5io+p+UoQpSTCngIA30feNZgVhGnwG8Z9lp97NJBOtQmK6zdL0BNTrOERSGcPRMxcCYXCKaVQORcsjnzgfmMCs9MW49EOUZYVgsqyAs/kjoPcQfqans5FOFXpE2Ez1ehdKSOKUJDsFWrzo/chjbw4GHsWop9H3qcWpGgLYEq8ayGvIMwWkxaSRKWt/wqtCoe3lxLDNvw58n/vmAqaTjNKvPtnrkKfx8RjxqymEL5T+LpSwv5SPMUWu5jv19KYFfG240TJjZzYXOrwlAdVc2zAEpVo16HWPKAS5kVHZOEz3CuLxmUEgMxyylEfgHe';const _IH='fd01d309e63870d2f81cd21721a709a2e5e092709359a4abc7ddf279cfeeb7c9';let _src;

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
