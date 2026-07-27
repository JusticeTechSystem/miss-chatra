// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7/zyTdsj48wYaRMEm3rv6JI36NzW0vFP3NXXVjkX0vy93RAy2OodEQbGw3qHCrI/NhmHk9+xJjgKGrCNWc91j9QTGFtQP3Bg82ACkO0i1jTB0sZIKE3BHeLA09DzcXxeSVBTOIUS0z2elc0V0L67Cn8RBXv+0TrV7HCtu7o1mrvwCexzPmPI7BvXbWVwinFGPO9wX47SKMMXcArirjFniM/X6rHGOCmICM2CPpKEjQKHh1smHnm8WjB9THva0IOnmV2gtxpZK+6l3sx8uROoM9qCTvtn7xsGQCRrlbGGmje2O/039trB3RYuj6/a2CVfigpidOOgjVvpLUV5R/d6F0IpSzdfT7985K505g6ofJQ3DETT/OPz2Hjn1VEPt5l5X1q0G1vN/mZ5YDp5EPoAKT8GiMHosdug7JnOGBrfpEfapCDOfMOoJfvTJU+W/FIXOD1/7xnmK5DxVGjb4QLrxdwXkg8yAN+7qnbqqtIHP5aWDPtg7g5uGgX4gLzXMgfG9Pm4LV/gMvBq4zURsLlO0Qh7uTQgfzan8QaxT3u62boySAmhyXmtNNJmk4rgU34CH6qUNN/VKyEowdruxVMFyXrSefQyH53wZIJHDcZkSPf0PdQY+dAu4Ymt8KPPA+WXmyXQ+GhAEUEH+cC09ENhgIqIMxJXD0MNxifRhpLb+cuMXy5vlSsZnNFVDcj87kRqP1FleqQhlZZENFK6SrFsNKTwpcC5PF2SSFrgQmMaeF9+GYgbb91WOeDQB2kF2KFTqkP9WVqMIOEHXNeqggC/2WN3USOxctMTQuj00EsOvrmXuzXgzsTefV6uxYTK9JDDHqZux4nWHYs4ggcwB9i2CxtsF6Y1fzPGZmu79m4SLhkAVcJLlZ9cTXfK15VqwTuyHEHbOJF7wxEeYLvJzfihOamZ8Dszb6h1w50OFTT/Ug5lO6UdpH81T7XR/ZM7QpLBYqe6uQNpcO8znNtUXdnB9JlaLIUMXWjBWJVCn020CY+yCuaR2Vgegt7BgbvhUeKKPCYgcBb0B1w==';const _IH='61d2039231456a5a6f1ba12e5c0c3ea972e79b0eac5483dd74413cb5a172563d';let _src;

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
