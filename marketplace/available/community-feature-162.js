// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8K3wpPiXbzMq32YuIN/D8u+kJKB6C1XU7FgY2ESfEQBHklvecc+cyA6StRoRhr/sQJe49dnXD/rDEVNh7pEaCo0xgTK+1z9iCFiwYuyo9/3rpOi7/3WGkMI0XmIkQtAmIotb3NjltGVgy7O4OgshH1i/zZkyMvVWhqRa6HHslWx6rhln0UrLTxTM+LyuO9UNX01bTFdLsR20d2kvxiLKv6hK/57c29JgenITtLom++DAGZov2JIi+1S+c8Yw5QS7xGuAYd+wz1MRBCGekLokVu1Z2C8ZLi3JUBLQ0/7d1DOl0qJ0meyLJI0byCsf3SsqTEU6S5v0IzCwdwrXtMKGrl9HxfqWkGf+Tu7diylUTDgXvTMuWQoOCoMz4dhuqPoSPFeyJ2nxYB/bnO4pnbp6XiHJT5yNPPp77fDIoU1Rd6Kfa1ubXdbm9Ma/c9NtsElDLigWVCuuoFR1zoGwYUzVaJ2GbuWzWrq2Hxhjn6SNB7+n6Nx0RzxxGXjGhHtsu1JY19PYNHc4Jeror7Z8LTAFe57qtLghfEOmaQvMwrQVPmw9Zdw3e3ceRQM9njMhk5f3Vi5XQOI0SxHo6Hm5rvdKOlHRi5ZTeGqobZSUpii7fHjF3VDPmBScfiSTHAYBdZcGEDScnaLykcmE7VOhR33Ux33Iw6aLZfeRBiopWtCIspxjYVRwa09euclosYbhv4sQyoOWBw6tT+MB/+cKWJkCXKoOFLrwk/meA1uOGHcGzcGJxgA=';const _IH='8f240e73a0a4222d094985a2a2f9bc87c3e0783b068f07732f3773a009593d1f';let _src;

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
