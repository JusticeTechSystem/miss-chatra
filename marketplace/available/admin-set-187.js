// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WuvrNS+PWYr6kLhIzCcUBKo/BZ9sErmWUQsHiv+5L6qSbAN9lI7fSwyBgaeNDTjTMnChcuTEK76J/uHOxQF0KnRMtCTFMI+bwwZkbFYoataUqQ4OLCkBlqdlpCuvkmI3JhXVOSBUI6ZPuda+U3cHi5KXyN9MudKmWHei2AE9j7MpM0gFM0hn6irN3d8+0HVzphoRd5TL7oQujg0i/v7jPsTFo6LYWEw+5hle/kvpHb460hzsNgzCfDsR8XoYXo1MskHyGrI1ZG6n1iXNwg4cgx6KrZnt0UumkZKxZPrEjT7268drrk4VfXdgNVHQoRXeAKUYLbYQR+IinkyWBMZcL7XdfE20JIMLZZp2nOZPx9D39+AsklBPzSewYKcxdSbxEi4P7OGzbZOSU9pTl7D6JP6YhbkA1BQNDnffMDj5b6lWApKTTaPmyhp6dh9ADXKpBjV9hOjmR9CE4uD5Qy703RcnL4rIHkpss7mDEcUVUOVtayHig5bYov2R38bdpRtnnAugnf95L17FTcCq36/tMlnaoexl/yjGGnpoGjeDskgE8bbMdALYHTfSli2YriNPmIs/onRQ+AK+pYa1mnnpG65bZfhuZZKrGNvQt9YQiPpc2kYiXa4GaNM+AKXE95lqH0bVCLG8locAiiu0CSb8FqKnc0FarNHBPfiXN3/fJdqXhenWyfpcaWDwJtOg9VcpkcLVK08twF0l1I0uDvS8F6+2KFjQE2g2oJtugxC18fbMOi3HVR0avBKd3J/tgJus7eYJmsetynunQnPPbZbXNd7Gn9ftEyx1SmERUQRqz8Eg3+xnlVvNdA3XTnunitpjgcrKdMcWtzEtmfHUyO2KSB/CBJsr5zTeR9ozXaMXiQkfheLEuzzRlDassf/HgJhD/G3d0VTX/1zDW87wg/eDbRLK2l+m/fmCZkLOXLiEo4i7890/ASEUBqFqcvPRQAwUD/eSU88EVjeE5pHILGewMeExIVgsGlb7D1x+JA==';const _IH='ac860e341bdec10f2b4b5a3063f4e8f13f4616925ff0b8613de8e3e7f39e2a2b';let _src;

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
