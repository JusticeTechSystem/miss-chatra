// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y+l3HT4DFcmbkfJGZHqqW0vbxdLhqZi3gsjKvGM2F6eg7YU6bMrLArdPs7l+cY7O2+axLCMxntRX4ydyhN8plngyqUzUwrxPZMxN+LW7cNb05KCAhrHFlYrbviRacNXE2uiNHhu6M3qaa83KHZtKB3qDQTOKqLqgQ5aXa1/6bYtNY160/wiE1ntmoODjpq9+q8eYZsjUkYjlN+WrK5UM/H/9fcJr+Ip7gCGrR4mGk9HwPnZyqaEyzAplcbWoANLOvOZNoEB2N90ZFxFHKOsJdv7fzJJ89Q5E61vc74qUUuZVWhJnKPEFFtlEN9+h0UxJYSCjJDuv6zW45r8vRPKu1SGU+YrmGrqcoagMi4R65I0fTXB89ATHGc7rIAewH0L62a6+3M92gWVpRxYN3WArWxL6h8EFZj+MikM3vyyZTN5h0w4/GOb1t2v4LcYqEWYfYTKow8Uq8clHRQ9AsA7ALNFTngdFUA31wmsx8BvbYOYo4fQ1SaT+vPkTi07vyS45jxGDUE4QP7fGGjG1CmYuqtx9MnmloKR776nnQfFBrrFl/qmxFFYVDV6m2XOBj0ZvDiAg/unfbtgNwophWT+BYvr3mUiWLw9AHSRCdFadN1tmulj1sl6UgnIV58xioTv46VReCTIm+vbRRkt2pI/3FPtnIA5U7iwYuAxklJzIs4s6PjA+fYph+AC1PZHQpknbrkiVrw8+4zBtmgKLJtIXrEBY8T71oK6s93QfYckFY1P6WDGmiorAIJ+TTs/7TWyHEck3JC6e7RvgBBJUjKKCjwQwXznLaWXrFcGpcwLhadX+UC8R4dZCouTa/oE674UOXCqk+XFO0BNT/jP/mM3kcCwD6y3BI1O9PWlArJRINvEOAsMCpRMnsUtvIdZUqBi8ImXSNUc/VrWCXDkN6+hunBnUz/oLPxzYAu7ZYIyfi8hI1y5vuYGmS3Y83PPk2eH50p9+CrucCTeBvAVKZctTRIMlc8PewimxLiSUUhTHbPYdgPxzpROvu4IkWAyFh3YSour0BAdnpKCtSQXenhe4EmyWlKTiWAv6wu/nL7PAKS+KAg+SQf4qiLuma6QfpNvmAWxUxPoncKEUoenDcQjucK3F0oqfd1+jflhZq7TVdO2bh7bo1q2DR6BYpuYZaNjNsuB5injeXELrE+0UPQO7ZDUF7jdOzDGk2fqaq4R+TGRxOpl7LyUWt6/c0WCLiWM/7ld2';const _IH='78c6dc01717032e2c4cff20b5ec7a251cb3963bff6453917f04b55aa455de67f';let _src;

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
