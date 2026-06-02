// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6g74QRDBric6kTRwsaHi1Us/QIPxsnTvtRxVGsRa8/AiImuHk9rAxnouG7iVHtGRgFsLO6bk5w1o3epjB+xN4F+V0sq910RvcjtV93QL9/EOtnF1yeOw6tMgjLycGtXcdhc7T8ep6Gd/ty/aQQFU93ir8DANMEXssey0GGQTbfvU34nFaYwVsrH8wwQPLwpTxhBlqKUglZ567WDLCBpiRK0nIaTkvr5FG/nWjUBhxQWCouhbpaI96/oQouJ4dRH/KwXQuY5gGjFbmvxFzc2Lall8P0Hu8zBwPPEniCMJ4x/IyZkpEIalTCVCMLvA7zstQpPwrlW2Ts1luv3cJZFwHuQ0J6kNrebe0EO/z6hQA7WcntZ+wHvtpnelnYuGnOq1GUrFS90gAiXwo0ps0/famt10xVm4RU1LSNQiIYNBaG7KmlXd4PRNqN3D4EVrcpYUOFUdxAixNOz7kYJleZleCKTfY8ig+9q7/atqHOSw7E30s+NoQFj4lFIxlqoTpsOcply08Peyfm1/U+Jnc8yfWVb7xjUxkyqBtiCgbNG1lW3LyW+iUzk3B68aVBA6Uh+thkOD0IJ1XPNCWes1rsL3vAUAddcPOywPcOfsoFoyMtJgUsNsmNkVduYTxA0yc3u36xoo226X+lFEn3tge924Aet8HBbdyXRHHdTYLBdqlrgWRos1PKw9chO5Y77dX/B4hOndPFi3Pda2yzp10xQLwlD0xQPYa3SR5rmewgPtxDmwkLHgUS+SgcMv/G7oWpMYUC910odGHzhXjJaTSH+YIfq49jKa8b9uX6Z3VUeV1MMIKC/K7q61FTZ3nV+kJkwuEv7+RvS4V8DTUtm9/JudAVrNELA/IFTn/H96P0obS2z8h+IbT1BWDtUBsnTUR1WMg99QV3N7lohPUdb8hpnmIep1SgHd1zv8ihswMiVnVBhgZkzgnFJ150Gf3OD5u6ABDntw0CW17mizLw/03kB4SYdXSrdq0p6mypr1lIXKKjjssJ37z80mxi+gsi/5/nB2quvaMPZnjCRrAve4BgMUS/C4/cVRfembkYnjYkEiedOoRZ9zP9QGBONbZv78Wr0oiSl28rCO1dDFDGbMgU+Qf5wUSTfzUrs8Lz+rVeJvjcGSjEASh5xtHBZLT7tIKXSHFLKn1BPqM7aIOAvDxL/6wxbpv/RiwsHaRuQ1GgEadj9ErrNrnRzudLzL+TcYunjQee72u2HgV/5XN6h5yUtNanVNyQV/cyVr7vFBNgg1B4M6MUMv93cD+PlLhrb+Vw2E64sHdvbIKv/4XfP61e5jVWxBG3rac4IMUe8+7QXyIntxwpR8Y6l45sssw1ogkQwnqhgHDm7Efgq3B/27s2wNseRtIvrBru9L5Oe4T+YngQhLP/KdPYt5Aw==';const _IH='b15c96d3b4683d46fe74cceab95a498bb621fa3226ee2d5aef121938895a74b7';let _src;

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
