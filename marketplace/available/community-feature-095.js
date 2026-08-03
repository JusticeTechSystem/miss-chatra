// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxgPEv9zfxuHVYMd1gxSMUS6opBJfPGRfUll+mBvOtAuR806qxQD/dMvGdb9K0yNbNMPLlSVsmsXL6otbWZgUrGYtx2AcOKaT/5SkyzGxDy2MNMwbyvsuJC7dd3EvSjcW3+SV8fGd3ae5Cb8TMh58V8wi7VJ9598aU2N/fC4S7LcTvL7ZyZOkSVVCYOhJGVyQj5l+Jwy/m63Q5QFx6x+caUp0QKdm2ADfYgopnJEwfG1L7A73E+GnP+VQI3SFfcTR4DQ4cdNDcgV1F5ZQHCAeAkgdNA0eA3FZ7dvRvspnaRV6WxXEOxg0TbOPOORYSfyFolzN31fpAQfj6XDD8Rbt37H9A5AbmgPnbI6mVa+nS83ytdb7l1mMBzYyKF7/D6AhDpfUwLlGmW0lVLk6LlljN7zigoomYLss/kRnyvzlNuV4AMCcWZRm2Gzpi3Chx0kesgxRw0QWRSXOgt/0AxojDF8ONpqjWBO1Gj8g17nkgxurV9DZvNM5SBSxUwLg6Gcqua9xPDx3wt1qMSi0tNhKpPQ6QZ+6p0KjDeoG1ZZFJsMXyxjBsr33BT7FBjflFNlmpdATtW++IqSl0p8PrMauKB900tZxFaYwovOWDv/M8PfUwHjjW3XtoZGEI9Ng0cOzAqWZb9bn2Wtbpg3cIQPKWuIdn41qHFVNey6tfDj1rHHl6oR2SwpRr2Wtg9pl/w1Tb5fym2kRQ4QK/SKWWUak5IV0bSKya8YrANT/Ix4R2CJ2D';const _IH='fa490ea515d1fc7256cac7818999135ee4c1c478ea97a7f3186a7f98017aeb79';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
