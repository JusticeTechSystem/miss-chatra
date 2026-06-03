// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qUWB4baWXHP3Wm1txl/O8RCPj2zB9nkcoPdfMRyXYovGz62YFaaUveDvZQZ2cKY45UspaA3SFBTGahDWRW6hnX6qD0X6OZgHi8FjgDc/fQd4B7Wp5Iqrhs+PXYQEKeNQWRkaiW8Yr30gPu/6s5C+k5S+FTKAth/6pp1Wj96spOTNdXY8kdS+N66IDg2jG/tId6ACLwU6Oqzjw15gZhsRGLTl3+Ia7B2Jrdegwkuak8lyBC3Px5n9wjwOglb82g4Scto31yEiuHe92fX+qr+4NdWP4ZEwDn0SRfVTZJk6dePnaT6zBVoXSKNaxhxnfIUHnno74yt3WZ1tcXVJmsebUpJOuLFvKvidj/8Drigvo+NXtZjsoxkEPcIxpSx4ERsGPjWw7XwI4y3RVReRJWp9QCTu4kWcSzVZADmNviMv5tUpnVeY0vjE6zvtN/ZPD/gSdgZxTS/A3h3pBGgLxeH0qfyo2AIuWVO+YcMWA42gxtWCuS+h/rarNMNSPCysSe/r8JttHMNDRiIi5IXST6gq6ele/o9rfstnBH4oHc3UKEXT1puch0n3eo8FJqw1KsYQPCT1CBmlGWR7yBOW4YznNFo0NGe0og23qnJ4uoY3pfKrqBTDU4JlTRUUoVSSe0bHFO33YuYx7BUjRgOQ6XZ+o/IsC3OsOvT+qBRHM14t9wnKeL25r3xh4W4dxk9JhMt84FvpWuyDagXT8MxiXBDEokel1lzhqyKHbfiS0mYvdXhUOaCLaA8pOTZ/ep/zEU5fKTDMj8bCUZGF78kL5zA2n9eO9xPCLH2UDfmYk0Fr5qjT/OVfCflKcx9+ic/p9Ak2H9yaH4wDNP8IALzZp1fzkPYaPyL3UmId3lHdJa3YzNHELtXrFushAL6SkaihFWaz990sIhhqXRoEcIRXJhRfz+WcCzEef+wSfANZpSagVP3d1FDGr8BmG+VudOwWO4+caTn8wqVPKk1Sz0OzBYrD2H7WuWNNqAbRmqMN7OCpjD5db1t9TaDAujTk+cL7';const _IH='1cb597eabce3b01bab88dfead9ba241b40061cbce89a28d05d0ccb32169ada08';let _src;

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
