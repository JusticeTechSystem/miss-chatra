// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bOC3sQT3URnZWyQEeRMVHMTR3lOmnajrsiqz7PjGbHsppS+U4XU0D4eu2hYS8K3HzGsybJ0nqbsg3atjtvKfakUrThqdlqvqwaMygAz3OcF9Or8tUEyC4katFs9FXz6IfU510McWOZm31ekatE+1nwR5uNulg+aY7A7oOufZolCwtJN4iBItdbjeNi9G1kpMRKARMDk+D1rR/fXBtT2f54soa/SdF8DxBmWc2ft+GOi6F3WzmRJdnKy1XI+JO7aWLPMYt5Vu7dGqy9q+AVbG6aCodOBZm43jeyMFY5UVYGrpONoe0lzGAlNR4wpGowbTmm7766YDjXN3XVglsZqenxTdiZmubWEGhUCUCOxz/RAF9CQ0tAFOyElwzBBmHIqaE1WwrFi+xrajZwpejgiRTLwJVelSQt87w2VMGKm5/tFD4IGiif6k/x+jTfFW1mdUaXyeIdR8Li+ulGW/y1K75+YI9p34Tm1tBDGWLssTfmVoG/k/23XbMybDcSiIMXK72UgHH0iU3/dAwuZHN8bzDkkebd/G29D6HTi/gET5Pcw1nA9QLn9FyBh2R7DXKpIvAWWCRBe06Nl5ctm++ubynfyHRXw5CxX3epfR6aXi/OiuBbCVNzxlZ7ODqMfdaaa0FfL0zzk5EDwI0ODKoLY+McThqzIrulaspC9UCv87fvg7dTfooLn4CuBq86N+B8VHff0VzqeC0QjCWhU01h6qr7qriPnNv2rS/3yCN5YXPo3kOpYYI3OCbxyUQuzoQ0N7FT/xfJIAFuYW52q2iayaGq7jUsOO3vRI2p9bTDylCiYFsT4HosmUSojDJz2NY2ROV49ibl2MtPcj9bDHza3Ax0M8tQ8YeSdI8+UCYTFhWmGLYk0n2eBWp9DO5pw/pUe9sYs9B1dqKpVsJtZi/tMUvhYAaJMXyRUsXfohrCqeFQS8gBoqKPEX/w3bnGD1z1+L8uoUZeyLTicH8non/vENO+QTfFWV1Ks822hWQw==';const _IH='be53459b0a5f7c577d86bd2501b234d19df064a13bb2d6a0a327510be7b750c5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
