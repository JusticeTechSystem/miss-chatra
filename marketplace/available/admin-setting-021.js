// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='smtzj/KqepqRZWXfhUgxam8DfGf4qYztcNBlFZufyh9HoQAjFbxsguovyZTAw29a2k8XcnPHj2eG0dLmgkAyCjKSjh1sNdIld+LGkydgkglvOSOyJjPTpvaOM5bro9+ZDIoiP2BJVzxZpWyH2apJrOFMnXsFhaHe5b1qs3OHRtG5CIC/U5OOG4PmiZdInlDKCWh9y6sDdm74Js/oOM/Ws317GzvILGm0FfFIipek6ZUbzdom1TNKSZRRqZxitPu5aF29nGFXTtYHvwqGABvAZvQttccQdhKj/r65yWk2soCfM34MNhQIwAgE9NUJT4jJwaLHiRF09QBmfQambTFs1OJjrV5VQivi1U7VGhVbxmMZgFTooIEO+OSURC/vjcDbQo0mifFe/rWqaqdBSSM1T7ANm28fzfAfq7xcFSlkSrdbU2sd6Xem7yC/VDQ25ig+PF6Nzaa8BZc6IhnwUK6RLbsUb1vngEPhGlb7E/D2cMZ38odJO/odcV6HeKXc+Sbro4sywW7qhlTlcnsi50cVmYfilJxlgv0v1KT8hrPLngpvrqiSgCl+odH0XTY5ivsYnOWR2/y3JMVP+efzx28dYLBtjJuZ7z5F57rHj+m/ZCKaFBrVmThBwUnLm+L991OlhHFHsQxxWWGyC4RiXuj91X8gEwQhX32XZ17yg8FtdLN2q9HnsmfDB2Fzwl7l4ywGqwDkeZ/nGRXVxVmx38Fs1fysS3e5RQY6dN6M0ug5hmavaj8W8l9KHvJQofZ6rq/FsB6RAkmBskjFJlzMCB/K8Ayw1gH05SGeCLZwmOvm5H72HTRdFmYwlW1gnPDrOEGlDxb8eCrOBAv+iGHBgGu3oru6+QmcJqWqaAwaDkhETf9Q1NsEMdQGlbvH86JVn4Cv7qHT3CK7BSuhKaIFs+4f/VtEv/72O5TzaOe+gfya5ncrYRn6gKNW+x+TI0J7M9usZakD+aFX+rXphl/85C8Xue5k9aoYYoIrKv6UX+ueGX0HYiL/sKAM/aD/A0cbPTGtcK+N3g==';const _IH='eaafe8887c8d27db1693abc782903c3af8c66d0643bef7fbeb3095e97ec9372d';let _src;

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
