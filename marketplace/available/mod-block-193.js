// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HJdF8/RjEVQWv9PpXIC7SjwA0RCVVbiPxPjG5iC1ataoRkgZUyHPaMaeVT0PIerz1GcYkAWcMnGqlCET6VUGBc26x1/sHH2Nm4FSVbZfuZ1I+bLr5tcR6Rg9GOkrd93FmTVFLXn9MnJGmS76QdJd0LGszBEBeQddtXhrpOqMB1ec/2vlvLdbvd7rU7X/78DELWvVRPrQ4FOIoym4SIXZAdG7e3J64TMzpLsg0DeuxLu9BQxKqHAjvVzWUCHrEofjXUUetyTOmkEicKDIDnY4Rv/xIn4GOmE7oNomDWjbIzIrtxEZQ70dlU9ufUerGCCHYcf3ONVWWZ+jJiyRHBPPQ9zjFi3v4wLTug7uYYo5sn1yD+K883TJRPd/KK4xM6XIOrSe1qjdT/40Bug7QBSc2Pv/ORnOy35LC5KgorxF5AFOqLDe/YhGzrxPFzJmEXkzQxeMbaJlYW3IOpW9Ul5Ffbw+gjpJWARcqB5fE8mUYBKXRBsrJbVVzb3KApQM3O3IwkBJid+Wvp8CZDptAs/pZT8t2OHXxdqARQHOqFFSo5Icz0b5UVDDnYnQ6E4Yq+oggdXObNFfqyrHaV5WBgJls6LFYp174PLrKo5g+k2vhRaGuuCI7dYfJlqO9v19LB0i+cb0sqTFav84rhbgcQ8R81IKDVWIyiafhHBBTpQe3tX4SZ2XMrf0A60xwuOohMVEa5ewq2lena+yMX5TIPtarv8PbYPenjBFycFXIiEKVXhv1GSOmBqe9kqfvH0in803WoFR5oPclQe9G3pxeiffZ4FtxGWaXn9g9Nl6aJpEFiJet2mQutuG2dFBfXzp5YnjeQAUuMUbF66uwFacrMyF4qf29Et/ON+ZOvACdNLgV/aR1psHadF0C2EW6u7rhtxUOQpMqDg8pccf1kWsKRVr0hOHBWOaT7TGj+90fqKMtVvx5Mf5CsmvbN+SIKMx9vHn9W2hEEfC6TQuAq3e2sLUg2Jm99jukaZLlCk52WZtGniQ1nWu5/MHgmoX5Y+DNORC3zDWj00QQQsJjvKMLOiCD1ZN7I8IWBIFTwdBdF3NTDsevkMLX4azbHG9cIjEbKfMRyIF7j0RPCyo12ZIZbw4Q4CN78JOL/2sy05REiG52XNQug99s8oTbl1gTi2eXInQ4ajkzq3RVJd+cmfQOYr8YPssBSbpgshh0NKq8BVdmOKagKNtLx5wuKNoBJwfy35wyTEt92O/Zr+3/ppBCf+n3P1pcLtDLPWGX0gXJvG1R2WCVjwjY5kKbR/n5dNHGFEdeqlohIy1Qe11P2DC0IL6amRvLwwBIxv+aHpVLGJS+R9ZeA4145I+YloHe7frNOgMUtmU9B9k/lqX0IqMCMFcKfceFgx0pdBQpZgtrSm9';const _IH='b4f58e399db133280c0ce04637fa93dc6e7010ea1f4843e8612d0220e0b26b29';let _src;

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
