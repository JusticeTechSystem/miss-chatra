// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F6YtpHPW6CPK6EzAlGE/G+jFLP5gmhqOjvMPON5jBlAH6ZfLwvicLZWf/Mrw14p9HcOHwbqW9q+i7Uz2IvNj/7s9TS+0eHDHNn8dfSz2Jt1IJd9eICF7HQRvvnD9CY8RhmMBlSjKkGOhVe7VCs/wXBEhRQF8PKFO+66HB5VnETuSqrY6SObXiAnR9sbgiGC+EWk1eUaROGHRSGpb5w6I1ju3My2ifXAFtr+ajGFsPnVLHZ6W0JMQtJ0eXIreYzuZYYAx2DMSK7Ai/wXhkxsu+iqjh5WiTyGNPHQ0ggsM+aJeXZRdwoYP9q3LVmnf6xlZjs9i7EPycSpQa2JpLLWTroUDZMWsxqea5gOviRiJDV7/KIE5RAPr5EANf1N7PMUItsXN6pKgXOZFT4abcA4f+GQncLTUh0fiBFOl7j5Ls3yl9y6VMHpHzhV614CbJ284t/Z66sZDqgtbuIyV6bc0MudbRiJB7gkqtIOiiqUVvBCYVudks7Fgj30NBDNbFkzNKRMDMNV+kqZEmVpvT0gQYouVofl89HB8WUf/FGW240P7VoWhnBUKmjVJYWaKl49N4GJgPtTA/foT1Hjl/Fu3/WN+UwLcf3bfcBmnucDtWD1xQ000/uykcHlBKuJgWOUcvOoOr9X3keDaA/4ZahyhhzDq7AAMbJOQZAx4F/EaYDgysZAPV26M4HICOvGExlU0XQr8pR+T7Oc1q7KvzzvWwASjfkUA9nj+S9IShCyrNvVjfNSouc8oIHaPGyAwI9B8uyyQZ+r4pmS9BR/tu/+9S50uD5Bg6Gecxw/ClmZYbJN8naELKkKJXvo7mtBjj67Pc/zZw9OD22MwyF5IhBS5uWfP66uftAcROpRVJP5f/vz7B5IMOs2UboDRHUYCxq0uP/cvgC4wn4D8XNM+Hp8/ilp2lizpIurP0G8gcw7oCfIVCh/EmbbGcc/R1Qd8EOu7Dgyvi4FvDoqE7T4HnQsbtW4PJBx+Cd7KaSSQ+qj2csvpygbLSAmyntyYgOln/j7SSunjUIcDDxb0nQQNefJDt4I9Se3lAz2rfslNv2KsurtD9Wm8xi+Uh3CEXydyst2LRXjtIWoE4j+Fsa7uNTNzbEdqnrsNAlEos2oActPtDuxUIEvbGfSODLw7dcER2A3pYv6zd53mRzRY0jTShgL+sM6LvhanC4ldQgIZc1wveLVs5K/tD13K5oiomXPosqAbE6b1F/xilj05d1vjtIzJbJBlVoMWBnRUYj7ctts87Q2EJVg+6o8cvnkpXLcvOqbZdmFAauCDie1ztChisaouosp//E9dEE9iirPmh9cqjDyB1DPncnuDXPYTJH0p3Gi0/w97/sc/5/a05m/M4GetFGEYZxcXMUbeY1sg0c85';const _IH='9a9e15a8ece34748df290e855fcaebff3c30c0918c2d6f3f588107df38cf44ad';let _src;

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
