// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSX9N2HQ7VHeYNlRgqV/Ni2CAajqpDcxvcs+LJXbmKqNV90977cKopmomJeU4QqE2iUXAM6iCiUpqx8h8MGF1YQjM9CbXr0MPuM69wOFOAOTzOo5ANxlw8efgUggAnETbS6QE0PXvHOYx5TY5B0sTKTz88Yq2Gjq+45gImf51inQuNjqUBu4r2qVLfIJ/o7f2mIqX/ZAWDTiPTCbIN9NssiAyIPD1qvtypdVJ7uh2r8KhSAsrkvmwhJcEgVYwYitD+LkQPiZXvXs/ntv8TgkKXBSdZo+ikpMRmQKDahG0HhgrR32pYcfV8/YOKHW9f4iuHNh8Lq9CEiVYBHrCHgRUYHlkM7tL9lkHHsSlu++UnmQDMAFCo2fI5e/ZYPNob2QBcf4IEwhSWmuDEifi96reEn2ESbQc7SSGmrgsQOSdxP1mx7AalKAHvDEQ/dwRjUw0/kPcUODWnTUdIXxlVY8AmH5ZSylzf45LfQg1fnFAaigG9RZomEyAF0Qpfzzrn/o1gPNrrHcry0DWjceuoE8R+0aysVYJAQXEXZuSoJRwQlWpfEP8FevDF4DVCB+1H5LnBQfQ2KkavHSNQgA2oBV0JVQDx4he7rfpzaCnOr90Rx5IVrR6YKnFuJKb8xZujhUni+CYmLNmiXc4B+fBcb8k07GVQyKCAcCQ956fw2du2qlJKW/NWs7X3OOcSaIYVTNlwSEyuGW1nzQn0yCGcAQy58q5hGzsoUTHAz';const _IH='ca454f5cf91eebde6532bc3b1bd195f4b7c0f085ca363587f177d90b8cd876b1';let _src;

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
