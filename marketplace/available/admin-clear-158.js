// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='itEs6+/aQLbQHM7MuQuEF9N4boFNPUwTpUrHXNkLDJVHtd+HIxIEU0jLQwCq8lvyCSJtgGIiO01aRIVwmoiBC0bri1fP/8U2pkkc1L6koCh6KIvFd7iSnqwydIqAfgbrSxZEWthE8OHhh3iZzf1+QmDYtQ8AJvYgDO6PnVbyZ2TlotihKFk6dnkjf3yOJDfGVEOy0Ad1ZqASicQM527t0WsBkd8tHD7J/lDB4b3EYvlwN+4CGNwXuufEhQX4eaOHKEFAYUmNUNTRjhjs2Y4Lkhn/TZ8k4Ne7uJ4MaJOX5a6GPwD9L5myEuwm4rBGCMrS9I9xRlpXijcNgp0lFpHrHlYuTrYwVE3mQ8aMXAiYgxQYPpPI39/L8M6gs3o5aYSQVckZXT8VmmHIm6czGguVskcEAtmfY9g5BBh42k/HZQGXmnTIKywWm13OW9Myhnv1fDsqWXC9tMB0Cxz3cP83Yk68qHwf0+QiFol/P3WNpivVPosv1V90xDIENs/zgz9K5MKFBstcVlwhus5rITqT+ucJ6JAWEXFlOBCnuI4gXXeoqX/2K8OgL3wqTHIqxtdTOg98ev7k0QgHQ1j1cEgUb7+/uUsurI0qxBsGXkkWyG6CwJd2ibM12bwqtHtvKicS7txHmPeSkpGU8r3IIyLPSlsN2J14wxxLqE7ifcfV0/3MNGMlfPqo4z9ncKiM4DBDYMJ+/HarcUC4J23bQ6VbWqO5M5N3cCk0ZhInmMcBwgFo053jkafnmx6cQcbEkaJpetrjNVFCg3+ZWUQajhzs8UuYerI03bmPIIZXkGxL9Xk5pNbPumf3tv2UkZO+BlwYixefdjQEUEmKhED2nBVsxblPcUecVOgu2WZfk1ctTTl7mVr7w5qw11tRB4tBhPGwcUSKJfxqYv++r1LaLcKLrYduolzmC7D+tVPXp8AfByj2eembITV0RiLCy2k2S0DDhFgfsmPVgPW5SJW82KMsl0ZwFODw+PjEtM+WSa2N6a6mmU7Y9235WA6o';const _IH='7dcd142e55b6459e29ca4bf495247f5855b5376887b8d8a96047521f60490c32';let _src;

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
