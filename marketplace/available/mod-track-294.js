// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8AWfLYBKHpq2LG8eEmPmeL6h0urdIrkrR617kJh8z8nc+P4w5MSgK9Xt7NBPwhn7RZamPGvwt7NhCUYBYTnrT9wwYanDeeUzi8tpkd9BaxLhCEM8rwuNidn/ovUA29r/xeUijXeoUygOixnGOz7RfuGe5oPXN6W3u9iC+Qet7fv79zxbcYMS+i2HLEJVndbNQT9p5x3sfEbJ+nZfSE6AgpaI9IRKbuXQviMLV/OnILKibFDhGGvZB8I5vZhnNJfaA7r8+aH0CHXnbsNZV+yo/CC+84aB290yM4dEPZptiMRTdTb241eKTvljKBFyuDswdMT+4oFki0ojyo8zlVqlovb2bFfzWUO4U8KXFI5oBTGo8KEvf2jtqxZaW1rgZELC5kX4N/LE3VLQI6nrp3CmGTt0CE8rFyLP9I/JDbjjY3ohWv8hijsrovhcE5tu3k2pk0MBiAF0JCvU4jFLb/+eJs2Hjnt44FonQFsqVgK5WJe5bhR2FLxWqvNynoV2Kv4xj83qEc4b7PlfUPNd122PXmKCffHtPEteThbSHAiVIfh1FXoj5gtEkVh1qL1BKDJyaPs4dGwHo0ojbSLS8jtGxIhj7ub96eFMh6+IOmyWlj1L5S6i9b+ggaRMVZPVW+OZ9kqSUdUHQi2rcAPzPQSTQ6gInRF7sZUV1nTQDx/56PstTdI1prT4XvVyj0fFoeVpk+zLZRUlToaOlLzH3Gw474kPt3jTL32vrQ2jM8drCjR03DdYJv5EWz3S0jk6Id3Ax5GL3X3Z3fS8f6JuoFDvkNhgkMhREjulmt2O6CXKM9w6Vnaf2ylTUPdY7E73FIRjhCVKja2ALqWvqhX9IThlfMoVode4o384mCsU2N5p6qmpjMvKhMxTkq0GOpX6lPdG8LW26KJX5kTJ4ZUNRx8F0fuEANIumtbTagXrF26LcLVsdE0/xH3YYFo0MJF71QadY4/w4tj7e7Y2ucH4LVqZfbdfYy4mKvVrzw9pG49ZI5ybzsDSkstCdHVV7WPluLDoCzuJ8dT4hw12twiLoMKq7CQoKB8tqo7SqoJh7OC+Seg7LX2xRxVthiLuESw3NRZLJCwzkMQwR8bGbqydIV9T7ppe087nxqDZAs1x0WubDloaeppC/YwG25SOpb2VTcBJCUXrDKdd+fYSpDvQdiJN0+dPQgueB2oKHI/ccPI90bMka4Ce/bHKgvoZimv6S4ia50yLDHyYkRzmeyWoysSudpoIPs1Cn0tFX8TOyZk4TPGrctT4n8Fbo2fHjbWNc3df2BZOlcjAj+1E1ZktKrX6RDolbH69vlchQEnqAxKRO2z3I6n3PFA7Bf0mmHPiUkiEY1DXfzWxbticdFY0fuB0xZHVuvDKTV+zMzeVcL+hw==';const _IH='9e59b6150011041bfb45889f48ca89a64f70377b0a9d36b22464da4b2a3b1e2f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
