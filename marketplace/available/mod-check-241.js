// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vwg71aELWFFfjd7nKRyTdby+ZWrVGzQR0qPCthsZvi8kUVo7+qTHTCg++/YVw7MODqMP3ItDorsqKb2DYQtvoQZkPlRXOsNlOsZQmwuQJal6MUh4/MYbsAt1XcFrUfk7V//zeKOITbSlbpl3n9nOJr1bBWoSfNe0gyOE5Nkp4hRxxhEdHgvQfEK3fTJ5QrCHO1I+rlXNaLc1K+4ljFMAiQduTEkL2u6gYsNAn4d6PtZNTD+q6ycDG5LTB3lqxSV5SEHBf7Uz4Nd2o3AtAycTMIKrK/WZ6EzuGuNeOIfXujyMSpiHBeVo/BPyYyj0rvGzfmrtUdVzkslcxVHTd3UoPo5A+dpG89GZNJkjpt0sZGomny3SBHwhfb5Ql61am9DbT7y3IqvwiUj+g3r3Kt9D1FycQHaEO8NfHHAvHBUJhzFsDt7nDHO/xspQ9YR3Am53snUIzjgcGVZdqQPByb+gK0gc6Fi1yJMWm4y8tQLgzTtVQg5PFBmolT9aOfXZpMtRTVF8K4zxN9zOZXTTakeyGcsf0rzM2ZAVm4ATh/2VxnLF85mLIFpBKBp/vxGxzG8ZRyTZhrgKMa6V/Z5MrDXRRK/W/jSPu+teNdRe30CDgWiOn981fZPSPtfC5cCG+aKqUN+ExYwDfzXH64pwlft5HGAdSfNIQDbNUJ/QYVLQizXTrRFex0bj08Fh6f5uEx5hZmWDO1pykU25EYvKW29ke/zX//3VNlX7azLuwsTguUn38x7G2LekUca0FAhm2f2B50rGYyt9IB4OsnzYQeoHtBRYFGnXh6kscL399aNC9wKRCJGXFlhERRZXoDJqAVVkzHZe1JX50SePNc+AOa24WFmzoH0IyIt2ly4qIrDVFO+vnFTPGJurZX9ZKeSDOi19kF/IoHRMDX+sFkId8o/ckLrIFCzVjwRtozesmWmNqx1OFwtt6omxBNBBM0zGCJv3oriE7VgvX8j0HjWT+fH3r+TSoSqxpMitNIU67r5D+k8mA7eWkG98VZ72oF5q1Kii3/JGg6seSMuGRY/5RnfXOFID0MMdvjTwInro81nDj1S1hc68ri1w6iTQyRcrgAWv4Qt2mIAd3992xk5YEJcS3Z/aJnICJi5T/3BVM3HsWr1AeocyEPaXWu6vrAM9BWLxCk6IprWrmTzvGB2eEurn5SclLf7oa8mPycC1DxFkaJ0BqVo531O6LdqJb1r9NlWJXyT2ygJwzqzNir+BWS/5ihEJWpWNL8Zn5vMPz5MgLJYNrHrXlBI4BjRAMkOlOnraIOWrSXc6LAFUmG1ZGp2gjZz5G1nPFcWaYcTuQgzz+1DJTaKSWIsDhiFg4V+HGofidFu5sToMdWGfewo/wc/FSzjDnvLrFwg5prbemrAE';const _IH='edcd0f3723f6cbfb6e22d24bd3064120c8e9d3e36509bb0332a16294a730e6d8';let _src;

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
