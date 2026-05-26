// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o3/FCEIvX8OM/5/I1Yrw4PAnc41X22hAndqIqC7ys4XOZji2Hc9UaJiSjbWwiqB7HTFBTCuy8MLhJCXOtKlhrYPE1wXSXbqWYrUTkDk8RXDc+YmmBdbHFz7b3xd1gwPanWCWXi50IIKBwCdUCzL9aOEWZ0M+1O6MJMBox0EEXETi1S1cPcuXOedF2Vk0wuMkEwoZAbogNHSU14o4FkEvCNR39VOMZImqb0p4rpQJKI86juXvgMtouu4rAgt1HWtijHGtz3xOJ9vatC4HV0zLbLtwxusHDFVtH1dNl7tVrxtryIbcVrtrKmFniURXmC1WpANURnEb5h3s7hdO0O0ZibzCWgqO11IDzc7lc+iUtHnGTymj/Hj2+pj91PT7aYY0C8bG+iGepSVRnJzMCbU/b8EOKl8cx/TSs23ZHb2T12AET7awhrGgZgTrixykKxG8yk5jNv0rO3KVX+q4qUzsLZKwUNWnqSw/bzNOjErfkeS50GDqdlRagieevqQutVSc7FezWXmS3rlGi+HBwt7/cq9xkvMOH523kDL3p/Z7tFKeKDJjt9/dyi+jx3tkcKB3kbodps0ktDOeCvz5OEUyV/43YhOAlcGS8997TjaJ7wxn86biC+u9PNzbOzi0+hCqdTSFpd/1+YaeJlDW4euE';const _IH='33b17c92c5f21bb75aac2c8856eb9ef205f0d7441cd536bf964b7283ae65f7ed';let _src;

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
