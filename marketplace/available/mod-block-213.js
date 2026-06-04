// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GS6ojTRmqzxVWArx9I51S7WY6LANJFGnv2KDCXooq1NK7ruTUzIy8vpt27o0HY6/IptOjLfXQCm0LqIyEcaBrTn7LqLO3b3WkGYzkICgdIr2ZqqH3w4wp6CZsEInFnx5wPOJ+tU52T29CaUvdSnQjOl6c2+XmSN4bE/dxzunpXPuyC1bSx3XyroYCd4umq1dmY7E+UHqtWEDBzyw7N1CImJuDjfRWbwaQT+lcUV9nhUf2WJIRjrO0UGJf2VnN+8jbZX7EahyliIyxB+7Y0zAOhln/wjjbGzRyMFOL407G4tXnHc5h+RmU2Qug8hqj4GStyRuz2oxB46Q4HZk1rGEO42EyRTQeqZFPHs3WDV8FvyxegUPUNdNkin/Rbw2YeiuVK/s2FMivLGrOYKv/v0/B+Vju8aim3GKZU9bsuzWz+PjrzBbTZP1AI+Ajaafc14ibM0RRdnQHrtHg5pG5msnQiRoTCZOFE6xtkhiR82lWPuyx127kzYJk4BCxyUIE4E7rCzxUpqhhvDjyExsY15PgZnoFh+IHL/OSaYBOUM82KjpobC2CvScnBFmrw1E4tq+EYP0HVb6ZflEm0YqV5/d+uu6s2yHu9pdKbZ3VwFwTPBcWjVg65PhtxLAXOdoBn7wV1h5XHWgpzgKx8PX2oszWMwoUduwcImgh5jyTZ2/+/Kv7eKaupAAPtqyQLIrGJh0u59II2jCVf7edHiT4qhLPYT2DoJKOCdFjkaq88o4+dkPXkCVxBp4XYaxr/XgPTfMlE3fqBJGzBiddLwvob3uDnxlcIuizBwJiZjxIgr4gWmK14YyvyWQZcwsgbo2nnELX7S6J+rcQ5twDNBvswRmZn/nbG2NydB9NLYhy5bpvegcb3C4SKYRxb5trPPxBEAGw+mHNK7qrkBk7f+ZpM83+zUzLiEFWQ0nd+LN48IivUbY2blZoyM54Q9cO7uWu7QVMzNpSGdMCEwaS8vYjnXFVEaFhXUBsPJ9BFmwhXzgDG5Tbg9qFQp9SK4tlFNW43+NT/GEajftHklTyPZfp25+dw/mD+rEnrycfGu0ugFc63GYZbluId+iHKqZfFuukhmC9NqgdUD/3Uep9z85VUdGCGgAYVlFs4NqgQ8a/k1bLFncWANe8LjAOWAanFduS+RHx5QkCa/1noFkzo5bs96BRF0nS2zt5fYnliw1/5G1dQKp10pboF4yNqtoF9EU5P77APo74Et8JQk6EN8a6/LWD1fHDu7Ul0j7qJDWW3DoMkjCmyAVxGw0EId/MN7Eov4W6Sr7cSJWXp0Ai6er44O9dkds4Kdy+M7dMqDNKDCnUEhTd3BnHJGhThSI2m2vwEYEvFE0ICdFsWmis7Kf/1tkv1sueXlnPCLr9L+LXdAf';const _IH='29150ed7da659c0fcda688752349bab75a0894faa3c176bba017711a26a5b7eb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
