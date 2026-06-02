// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gKGmL5JKdcaKYUWXkou4nBL/Lt03q+w0WgQnRSW5se7mdNfC//pehli6JMeUaCczy1GLMMc6+D74GhKNzyYykVzLFQ+savQqHLwN565uAB9+rnxEAGs4SxA2uVJ94iHrsQksHy4nXRPiUcGI7nkpf5izLbOmPnC34ablLE4Y/OOIqh5mAHXIyKSpp+bNtoO2koAmjBmDq5OOGc2gSYYs9QndGLyRwao7mO0qH/eAZoeTzm1oZch6E2FO4Iz9rItjlZocLha/VkyAaeAiV/UAcRc0Yu+OZ0bdPcihX9bhtMH+yy5OwQV1YuY1YAvLKDTzKSE/CBZMJw/JS5JK8sDpeJ6n9UK6gupaeEstgV6nNEx79E56tjDBQYGzoqlGDBV67H9pln1s+Xe/lLwb7PL45WixorzG7aR2ZoJsaW1UUhIkNOURMJKg/9twlMmKC99mZnKEpABV62IKHvi/qWLu1Wj9DISMachaz+CWY/X6eXP5YOd9OWnR7V1vQCZ7U7uPF54UlgQteromzHxwh1FdcBQaaSnL2ujIuRZKpss0z5GPy+ZpbO7QrEk7DUgAj9cyT4s5lXZuKgw/TAudLBTnLFflaO2gAys7+DuaYLGpc/1Qu+m4k/6E6/NOMkkeUxfH+DaCwQMPiD13uEbRxjrxDgEbBymIsm1MbtGBGHa/cR69K5D17tBc1W6Ce/fHtnE6L9tLVWwXDPPMU6cs4DUFTNQxNppfKvtuPNkZLfMkoDaSBgITMgMFw7b/M7297F5Wth66QlZe3bB3CdDUVVttuE8N2zBL2vaeUCo6yB7up8whJ3GTIcdoS3cPOEJJD6Bo3lfuaN4AFHHy2rH6rR4ZmqxpZHyKza3mGNFH24/uezpUE7F66Gdf+8asFmGm54we0DmAxgw+HkfPD8z1Gzgo21TCsRGA2/Y4M0RIHQnL/GkCHtcudcLcYkBNEpju9PfaolkvfmqegSEnSwuyLwFjtlH+SQYf6Q3vhVIrBO4Kk4TdeV2Gic5RaAuG4gxySGkgPDJK4/NzT4ss0LXesKeLSald2AbFWURsVBj+Did/zI2B5BdTZjEbbXddmyhGcleE6cliBgRwW4qzEyBbuUn1RFsfGEJOYBnYnFsW0RwmW0YSGtCVNjpVuFTm5GWKcYD0b0zP8OZiTyWGZJoD2DM4TjsD5T/K1B6xGVFljK5oYvv0tdDiw0ihd4hRIGBEgUX+GhuW/ADNOEVwEs1AS3p+EASBjQyNmmsRBKBg5iVLCfYNJk+haBh8gstaC4t/r3Jex+8OT4Q6qckWlN2lUozk0FA5FoyHGLnQ9MSvKal4PbuY95v/Pz5foiczQqEXQ157xpR3MBaZOvBHaLwJ6GoNUQBE9Mnqjp++ndt59FH8t98imXQ69JGW+OMVRFUsHqx1dleAvPQNA5sn993n';const _IH='68f3adce3a2336df8611eb4a31ecdc6c6502e724f6b8e62cb3ebdcdd46f4f448';let _src;

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
