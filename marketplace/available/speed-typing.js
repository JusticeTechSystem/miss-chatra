// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w2JSCgEf1hM1FbNJL6YbPiTncFUIcYfmGLxA+YEQ+l3dZxpqLSdGb6Cqzl+54lDZMTpKnhrVqPVme2aUgEi0DnMYFjyzreaPN8LbusFG8Ph1rFNb9Tjfe8KCRI/noU0VUYQE4RdVA/yc++RQHs5PVoWI9GNpRP92z6HFdatLDw9FsMEg4A7EeALA4sVfoCItKuDT3u7GI9TAOjs9Xnh8C81Pe8twNxn1aZ54ST2WxKJy9tJ6+WzQWZbhuXDfhEcvsE+2rmYfr5StE6eYZnoFfyVbF3QwYkxR/eY228497Py0eH9FPgRS/VnobJ5HiB56JPhcw6oigKOF0P3v+w0bivdp6c0Hc+OsPxU8PqrocDDdUdzrc0RgM/xWqHAE97sLCILZ9P5+hUoiSZlklUOxfK+IUWClXZqkunrICLq1BEkCwCZlA3yBc48+rhaE0J9OceAI9do/hyvVa4cN4V4cG4kkl4ydWqI=';const _IH='c95c1f26f7b50f20aa78e7e2d99310a499af2e410800294fae91212cf608c8bc';let _src;

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
