// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dkWSWNcjr/xxQA305f6J5KVLxRjsUffbc/jEsJ1/RSuRn/dqJzNadfUd5Iue//vtdISrBW4Au7dKzyAJU7NjcZ3UWR2nWbs34wmfvEhNFk6+Q2U9MsC6GrlHEPoQF0873t/8GNDISB41iyo3p++vcphMqGizq+YRXz2VU6xafd9w31/10uVCbMVm9v0cq528/ZfSa1ETBzPX/uBaldIM3G+6EDYt01zvqIaOB7e1vmGOZKHGwDjyVN2idLa5KeXwN0Ba5V+eEhat6PGA73WYkiYB3OdhxxPWe7BecmW5BebeXYZz9rTt+BqMB+DtNIKcQq/rcAEl/5LRQvKKySLcwz9EbLoFlf2q6rJkASAxtPLIpzrQPkbTU4JKDwpVJ9eLkslPLfqTBzFc0Xk/dklx+tolPm5Xvks6G78x9C9XDTNR3LHGpdDTjztKJSjp7o1JVOINX627tuyNj2GmDrIqMQw+tBEAdMPMX4AUWCWE7pRCiZNova4FpzNEfr6NDDgHI7mu7WWUeezWw7DrE7+S1FinLtadXsfcxldSiPbhXI0YIPl0Sc+jwk1QYyR6J82qkZ1ad4VeSJuJ0xz2vafsVy6EXjXaKBf53F6hcpq/niVvdLRDvXq1I94KPbhN07IPNc8eMTCUEEm9kp+qjhzdgZxzEfG8FmD05tuulP2/s8VsVMwR/3IzMhUIiF0Z/VBskNM5CTre0tjaaBUJMWRusyDEq9+1/qd1haN/cO+8HYSKSIJVyfW4jVk2DtoxxczVKEys1V+K2eHyXTVJQkxJChEX9Ju6rh0mudliMZmBTwk+lQKE+2EMOQ1sbCN78hX+pAXskSxBe7yKaRmqhXA1pG9sP3j/l1n/48MpWCCX1mgr02gWQ/RvUBDPnuw+1Nq9aYr42Y64FhymM0T5/G9x5UVtR3qKZM7hFq++HdUjzq5BHuCCVMzshgFMffPUpB2jWV5e6qskuLYrBhbybJfd5zv0jdhGVeNHSEf/GW3LCPvMWPbwOq8v8nLcULKUP1RbQhvtzdxhvRoqIvAT0NlVO1plUSDkCNltpgTLTZn1ljX7dV/w8Xo7S2vpG21YJ9AnK53GhONvj9TpHIiTUS5mEVyJo1f79wn3hyCjJ8dHEjgIp5Tt4fl7EuUyCDKYyR+nhGZi7PhFkN1dnKg3WTdusNibhhqeovlaxkk0fW7TVMy4sRi62CjIe0VZDsXeY2+D65IvMvwfi9Pvsx675HY+N53A';const _IH='7b04633a8c156ebfea873dbfeafea3c0fef6baed9ad853c271a94e56e38a1700';let _src;

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
