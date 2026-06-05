// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aaLMtTMlH7D+dJKKfAf9LqC2cSFJTbFG1i+94uvtDMdmXMVgC+Qjxstem0pUz7VtXG9L3B4LyTICVWPLu1uUSkc24hnoBAI0vW6nSQY8oIfKERv46rLGU4PCCiK7qW0I7qC3GnC9r2SO/Kl2dvK8FFgdpxh5Rf40S5ebxgDViGdOxxfJAiTTbY1LRHhjOM2m1iRteF9TOP2wWYGVUjphOk/OM0fOvyISrQY1N23G0LGVwAjKMEVfi74ZKcWhnX9vjh1FftGUCanrdOZYjqGNe/t66Ul+AQe65DbsTqg1FbGHn9kYDeezMNEoDkB7yaZNe/OGXhh/xGxJyz9Yo+MW/+H36oqee+Nx3QybbxSN1hD93JMYjtXWdRdsDKUczamf0qjuRcwDT6dg0PlCtyKCJeur+LQ1oZTfuzaACRfTfHsakBC98CZr/nDqn49HUHcUNWU484guIoyA4necCYmq/hfn3ekBsj9XcIs8uYiHw9Uv/353KKDYH0QMLNbi2IJCdDX3GH+4lv2+QQdxb6mrbJvvPqGOzTuHjvA3DUNEVczl1SgL/GFZLxVs2HPMFRkGwg2c/+5mCuffd4uMffDDavYpMKch6vzoHC5T3FaeJr9bwpS+vP6JLgUQfZqi9P9xCI5+xdhZnNtPo7wBWXKRth3kfJHXVkmWxvsGz2nXWTzz5UKjh01CBRPSPidHt1M0t6plb9ZnfBDhUjB7TvRB0R2d5S+rtxHwwAHt4tUvXEqIxmXuuxXDSWQrdf2hHg14I/DRpWllU9FcGACIKhTNxzxEYaYe8c+i+1+CN4M7PPRGVaGw4cVAw/7KhZewl1IQGROX0gwS3ApPgmKPv0Goqlzw6ja+d2fPYywiNL7S9rywPKCokJF/lw8MVglY5RO9QAwDr97ChBmhHEpVrBpU5AUKdvIUUNPZ8WqpTnBYUS0eX9gK7Gkf2THsrpmgWIMxjaLncY2JgRLbsUoyD/VtNS6Hl9DIxD3S3UVTvxvqBvWdMaeLXMAna8S+93FdIZHUSnqvZZ3wPz5ydVRhxl9+CvL7xPaduTuT6ytqoazCQBSbKrVMWsgt6KAZWbyk6+Av/H+FY0CIR4u8xurmgEsiJoJp9M0Ix044uTdh0S4QR8HRfvszfcgoeAg0ZoYHFRidw1ljeKX/7fNDlXJ99GEJQY5mVp29MFuK05masmqZ+OHAq+bCiHa2lL38VTI9MeKMSGCzhdZJCxHhmvzZvgEPUpjl4z5qufiEAE5qOIoff2YDN96Oc+kRtQtitXJYFSCnTdXDUp6ATvhdTj6VEfcuBgM+tGW9Qh8s83fleBSkdvFi+W5vP79OMfLJoUKKEyFrElz0wuS9h/WhIqn1/3roeN48tz/XYFlHQqdLOPrt2ZNzLnVJwE3GEKFFv5beqyg+Tw/UuSwmrKAZqlE/';const _IH='a13ccda621fd12ad613949e5d5736e562b153ca10499dd3575ec3aff31446a7f';let _src;

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
