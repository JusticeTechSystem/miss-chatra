// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TaXtnno/xkrdwUSuzV3w69AJINHMc+hCE+3+fLcGO3j5RItDWoXjQxopB1Rqps/+nKw3bDyAbppzou1Qi4gy2ld/yVuoA6ydnWzpmLVfsXpiTMt3tzNshFUPnhtauoWzF+Hg8oalG6pwBmR6AK3p2JP+HsJncdzig+G+K8a5mlhcAgCjRN7QnKuv2Mil0qCbIUN9m1qsS2huDM/xrCZoy1sP5kF/nzXqYxFsG8Z3NttOyfViFJ1sxHLiuWtwjSiW51RboaD8rZd00g7itjtAW0F39Lj8HD5iDGWM4jqotQJsHn6NCwB/Zo0tEp4Dz5s7giaS4Uoikc4smiRCK31KO9cRJLSnrmMcaB21M6EJN5w/pma46mvxChxVnclKe2jZWtJmPDyddfnZxMnOUeMFWXWdxmP7X0Ny2HNydsNpVKqq6NZj6D2Y2ErloSgP0LJs3iUhPNxShVrziKkXbXaW0SwdOnQfPXs/uJWd6wpqvsXRISqQXjj0EL1rkS0cmbZ5PCkcV6t5y+IF12cG41rnWEvjCroWmcCpgM7NTkiiQkWHOycW1Xc5Sb6dA7VcAedtLKOeeQOVOpRQOcEwhoe4f9rnGRXdMgKLNaat1NsPHduygTXoYxDsdFmumiB5xAtmNNtI+tbj4FKxfRUK9AvM+wzbJm7mwI8PznL5/Dt4fCz4e3XFhUJw01eP4dKeb2uudqMywWlGpSICGmgZ8/Bvearx60ZFnFb7URQzIxUOU+dS9nXE+xHf9r0gZFvg/ecZP8vdFwpBJxuToqde/xfgt8gXgsX/0Hhfk+dMBBvkBJc2B3yo8uJFZF/2ANP/iC0L4lq0jRNa0EHshPDTru8ULl4473hiDf0Mph+NQzSSoQYKA7j5fajmGG8ldNYJzsDwLDqAKTJ+YyXKIA+hYDRWoOPqUR6gZewHZ9V7OIsvKus7KNiE+Xpfm9A+d3QHdqzoREFNFCyqJIpE2qn0UJ5IElAtkpUEEB4c';const _IH='059f024561eb047c2b93ce32097270a4d6c0f2807bd8e5cdecbd80b3492ce5c0';let _src;

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
