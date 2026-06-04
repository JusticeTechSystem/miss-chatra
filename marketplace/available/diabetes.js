// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LkAWGCHtN9f8jBMHrpNRiqsrMtOVtVtcB3w2lMutwLx/yPRDAiroFzGaQcxu4LQZpWpJqFJUcg+wXuBodB86E17Z2KSYPMCSKfAGkUZV556xbXy1/4rakf5qhmbZFLuhpvcsWed57zF0ECOpuuin13w8zeR9H531xqQKld69jj5fkaQWmWrQvdyyGGzRGi4ePsKgyqFDlOc7XoP34rpC4P7uoGS22nEZhTV3/wSoowivW80+EYBxEvwOZoxg8G0aSM84rRcm86XNPBnrTlkAYoLtOUOMrO/ypriondQc+uXPou82A5ebZbqlE9kKRhQn1hFz13+K2TVK+/I86jQfKg6EaIOl6ZcnFeQi40EWBElw1IMtxLKV/lPIUALEYNJoxcbud5lIvGm0yX8FzRomiP57og0yC87KiJ54e8ENAaySoNFGMsdRGk1n43t0VIKW5xH058N0DGsWaWMywG+sfOGR5603JTo5pgcjXVUc2fOoZ+f1+1fL7Nne6SJSbMUfrHFrd1VZJsZE2LfXEWbVxMMnkc9l4RuaPP9/xwaMlezWB+fqHKzi4LA22F4M5i0jsFHJUp45TL2kwEoSfuqxIhvOlqzjR+WUqkzJwIgeEhonIPn7ennmrZyBBR27yUnP3uzfzYAOGHtx7aWe6423Pi+4zPCmjDM05ZlT/+X4F5yiaAYQByGMWDGyUnOdrGL6Hdzlp8YRk0MlB0T4R28v0jphp6Vnj0oYMBDDZtKuja9Xi0kGFY/0bFeGNfW7RUe1LMurTklbKIJRbZFQajmHquDlyj5+hxZHc00xHuLRoB+qmBVeO9DfiJRFxKT1U3gG1uJvry/A4bHYErqT6AjWAiAyHLMhZdMam3gTXftB/XwswGrEFpas6TTu0+6yHKf6txpQOMP3cLg/8BtW6WzRHxqTGbnwaZcMGcwa/US5fIkXPVgfJsGTZPMO5hxyUu2UuGP4GnYR4ckz5QtD+4KPkXjICb6g5SxiH29LeAt5rMDneCCoiQ8qGEQzGx+ayd8Gv+x6rJoAHNeA1934qXoAMzQdGOej7SlkiUX4HCVip8C9Ei7+pp+2bDYTCz0tg4Z5g/fohiFOaGJbHPgbrVoqggPEG3gzxEky2DP8KtNNl+tqgDIyNX17VES0gxlughTdNUrguzUvT3IASaogiKYNwq2qsBIz4BS6f8/vFX0s5j8lM/wZREhnkSIy+U7U8WJgCfs=';const _IH='99dfe2e292f3ce2b1537fc251f943e8580c8e7584d20da3a1f035d7675cc3fab';let _src;

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
