// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CYGfND18UdAqLRfh+JXFiFQWqnA0aNVQyDx7eyj2j/VtxLZuTpqA84u9y+Ll1PqVDt6zYFCAzn8Xr/+rRuVnExhQ5Emq6CICgr9Bgmh2H1Z4bszV8d1CPGnokJT+DMq2vbDrQDVaOq4zKkE6R9Xt2DUj/bG+T7+SPRpOVyE7sfHdKz8kTBuGBMoAFEhzHAfqE2aL/V29UMhp6JlpCwZYUhBuvFs5RUJ196KfpvJZ6Pty/ItySxXNTp1X2T6ZC/fsfhAhiZ+scjg3q+zZ0yXkxbe220zLp+3UN3Sp5RZysWGdljpJ0+04sCKWMSPzRWfYNzZcLURviSOffj840CpAJI4qoqrXl3W3yW/xdgFd08pF7UXmeb4tT/AouACmdNIDCPu5rwUXpEQI0H6yESG/aFwD0ZCIgwOuvakWflCfIG7QTw4Qx71wEPHS2H69ShxGl0/Tf7hj8/RBWNbNStK56g07uVUWjttVJPRf/UvA2Z4YrI4Rn3gCq/eXnSMkufK+0k7kdKVBS4eCTsAdGLP17dcI5w05kuEuvFsamDagjKhtTkdumCw9Z8zveawSoR+YjyMWejFASEO7Wmo40U5CEfmDgyyOnOvRlyqiptaetzNtRA==';const _IH='564d02376888fdcf8dc0246a5bac11f0514ba8c4ddbe55fa2a442ec973776a94';let _src;

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
