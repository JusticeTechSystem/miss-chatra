// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='alajaByxnQG0EzSPl/NEEYUsa7nzTDGzxGcfNYph+0tnUqv5lxdHHV+DnuD2oY37ZFWj0nysbVPlE4I6ow8I2NiC0X2fvE3HqxsUc0HzlIHeW0sZ7Ofy20pwNTVhb9+EAez9DxhNKhZ0XI/MexnCJ802L1U/zVhoDfvirSdRibEhtNtHeuHazJZ0YApo1Y1rCZIvfp/hK4g1pr8VKtpU2633hoDLsrzAXZfdTrt5O88AoIAv7aGYypajKnuEPVSy9Nxe7Yd4Sg9mRk2pnGRUv1dC/ECRzdU9ZtdXzmCTdR5KZBcUHDjJ6/uPwFsz6DM1E/d/Nt5T8CirvLPTAYUVts1qLBaBADd0AqJQvOm0Cd/cASqJ6XzYRCGPCX+bJUBs7hBaRWRqwoAz9I6eymFKxm94qmwdUKsK3sD9K3RFqDHJx8oaXn0BsEnxPXA4IsNIG3xnXvXBdnL3G17xF2u5nX4VU5WC8X1rh3Mj4TndBN0xlneKutYqtkb/+gQP0r+atvh4lK4X4y9cdac4ll5siS/k6O2JJBHULvFy2+zMyaysx4cLAVHitOn6YxnHeANYbT6sSq2mHq7ZeYxvf5nXBQmnjQJAagZ2E46/XR+8/0FAtOko1FEjhui3aqIXeXM0XYwfeeRg8e2woF4zCpWuU1MbhJ/vHOKGI008riK+GvDbnPfCGSLzVhm7vjFjgnN+JH9bHUW4oBeh8IBj1GpWjug6es6PHgG6YKGeFqqrUsKZm0t+UuOE4rirt8dHxPtEGSNKOQdV/B/ioxYHjB5u0pHvl5xnRq75noQLbFKomJQOvPwB9ACX88eG/Pl7UEV/oL+bCP/ng0Z17ozeKgWcdEfQLffdcAC/4A7Pr7zcz5PZHZ5o4ErMdW/DkIexD0nOROwUQMM10hYK4JuFy/1Uo33lP1HPOzqR7gcPzmu39BhUiOKF9vZJmUsybJbz9FTI31wsYw5Wtk4+5oXZR55Lct6PXwQlXLnkDGdX7kQJFew6GnRvOp+YnrMc7cGn9YVDSXcC9mo5ydz6VHRjrDJRmatr1m/V86wEjpnvCLsUEYBMhSXxHTPVV0gOvdEJa16gA838UgRrsIP1MhY=';const _IH='f5dfe709933f96ec6e8a71ebc90ff3e4a46aaf654e66c7c8fdf8ac7942b01561';let _src;

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
