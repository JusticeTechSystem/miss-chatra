// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sk63kZ00rbKYH+PG7ILv++xInnUY9FWGJ2D/vUpqTNiZ7tztpHeVwxm1oNvHcRUKhg5RLH0cvJ8g4c/m9p3MJ8C4rYbc1gbc1a3yaAHZmOvT3vPbX9g4BROzr+yb8SaMjo0LxWvW/Rd5nKEIcYsPutQTiUh4GQNBchw5J46Ul5KvzuXUEmbV8haESRnkQaSX2e42HCbwJDicLtZBks2KM4Qgx5OvYr7E6INjJwErm7hbDHlAUikDRbBpMj/+0tTU6AsKwnuWMd+mpVP5xyroA7tV+khGkemRW2B+TJTU8pkjdM2Ludcg9EFEwiToK6dxmsCKHrbzZoiI3uZvowiLarIDPNrS43s9O8JpI5J2CYhpdY3iMBSUNPu6XVRKfWFVuHGfbXiPjonMvMjeld8b1/btTjOjH21xV8rXT4NFG4r1UCobY3JUYbH9kIEkyhN0zkhURWvUlWwtGWSJTFf/rvtgeClKK82dKnC1M5dZ/s/FKpxf1oCnb06Lfrji+bINCZGnLIFzqWixkwrxcr/xAXrtReXxm+5UuGMWVyEfMwogWadRl9eSZMz1UskWflcLdpLrEBvoHMOXdpTIIDqvO72W68UW1pYxjp/dZvhaYsXooDtIho5xOz4eE5jHMG7U+ZpCO0qlbzyapDUuLzTyif71GUh1l58Yh8cLcX2LBWa4LGNxOwWFLe2ohtL5Y+5QFq89YvSwVdlHGZustU1vekE8SChgXFwT1KXfhaA7IWCN70Hi92K4tHLf7K4Sw8U+hTNsR8wCXfQTtFvaVvvw4NDpPfcMIiPlvWEthvVXMc2yge6LIKDNwMjRHTnC1/KEHQGGSFCP9+C/OjYYlDry7ebkE7TwrQFp51thLhXtdWL+UpXbSZDqjWN7/TQzK5kFT+f4zrEoaWur7tbNDTqlPEkocwcVY2a2eTNBwqzhiKEVbcr7hx2g6uxIvNcA8fExHZfqH/xR+t54Lm/Zykat9Xj0H5xYMJTk30I6acErznwOHUKs0jqXzOx4PztsEfSbdxYN0jsRJX7rzl4nAf4mEYrsBOgY9hRfhHrLXd/nYvaCsBHqRZBfPML3qgmS9FdnWnY1BgIDsyOu127F6CFyli7omzdLNfAIRKSdre1C5xoiNU4W6Ev9sFSM9b6vD52V87oHr/Jgus0mDXIw9PE7dYL4VIrOX8zLJ5WYAJNkxGBqAOGlK4ujyWRKB9tQ1UT9ao4ECOzFlISZXRNaXs6wF17XyeAAwkqnmCuXl+PelqZ/r3TEgbD/IC4u1rXtDLGxeK9F9OnJuK69WfBxw+dUHlynvoKUBRl2uA4+jv4ZqCgqKfwtizb87X07VEOUr+BIU8r4FaOis/JAY3pV24Odp6rz2dKKU4HK6qRasNaFIccsIKvMKWLNuw==';const _IH='58919bf1b84b1a8b9f11513a937db77f5a2d098e844c78c4b08f16f139dbc191';let _src;

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
