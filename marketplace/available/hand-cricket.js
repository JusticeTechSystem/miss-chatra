// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b0A8SoyKCsy3gsgzEIwzd2PAKMoq0wybH2zWc5h+FV9P6o15zs7yv9V68DQO+9SgFW/yAZMAj9pgANILi05ZYhvXatFQYno0RC6iR6BHmJZoE2spCIz4YxIsHcs9i+79sYZBowIinWuIskVqWUd/TtCVGapVTr1h1ShW2V/vW832OwBgE/uddLzyz9ACmZLfIMzoPezoBSHnv16aNJK+KBQW+npMA+SrnnJPCOPrvU/hCu/qmE80VDZ90Ty+eWnf4Dp8vxrnbaS0F64NUbQFCIOQWUHqS7Pnz4XeIJaK+2JoTWEcKLvsw3qeHnZ4yilW0CT5wnCDUQDrrWTLxjsuedMiAVuVNgI4xufsV1Tcut+CazISQYk7c8m6zte3gNxrysgc4v5GgQQY1JN4qI5EQqzGHFddSwMsBxBUc/A/Gbit4beOyF/4RuzScDd99kFP8t7lnzAwhlZ4Lm5K5tTF4tOnpCssFb/WwGO+eaIrNtycgdeK6eawOQ/IFlFOiJrCuB+xJZ0ZxKHomxMvzLeoZUVlofHRqoGgoXNAhBcM6SyXUn8EOYi73lyNBUmmvwwc2LWfgk4Xa/epGCYhXr4pJA09hEfO8rphL5nscWVt1LBDGMNxXeT8dcaea9urxUZ0DK6XnXWziw+0h5dd/VT0r2KSTDWyqB4IpoKSWLokJTcEo5diNxI6WIMbBfYwHpqjO8lFwoVomKL5lFuaHCnqKbKQgfd9E7KhG2/3pYVNtTXAcDnrAes1NsyohA23MToTI98a+LU40VQosiIM+rBEv5Pt6myL+dXrN0ENVcBRAjO6sgTsIQbKZ3lNIvnFZsuT6gdf4mjAxHzXhkV3suL0mUGSlF/2k87ixHztbD1pEkS7Y9Cz/6skhInfwdmgHguWyUPnm4DJrjueddroluHvE+xqO8Pf5fPmswb4ElHCAJpKD0jWnq5+QX5yY7i7FZKtkQysWanpCJIvTVZPcneTpYg6zqKmIwXO4e8G8xVuggOko6I6bkubkzQ4MpLE3uO6AO4VUAsP0VRi4eBYU/OGzZlCff/16yjeg6K3rKGP2F+QnJQ3CjBOlfZVOpcn5hVJ7V/NwWP/jKDOHDKanbU3i2fGqSaO8U3qeDu3CAUHBo9vsgD7TTxlRRVhKqzdA3tZEyLorMLnBT/DczEv37AYBS45TE20o25Bgp7gwivGMsH/SYj7vdgENEfnjo1gu7qtECswNApLkx3hhK4CBnRH1nD9WAD8yKIgVUPTfnqu46HNr0qeQ7p4BZRonCTIz+fVvDQx8H9GnrUIy4PK+H/dm+gmrc7vad5sr4pgeAG7VwHv51T1ouolX/8TebbkQxz1HPovRcn2aTDHH9Jel89bsQN7m3J+CXpwVMqNXldTNcL+UmYVT6E56gtARPQOsz40NMrVJEivhsp9MKWyXpNjJCLdbdGR9uE5cGZx/8vbWXRdCX18bPdwKfWErA0+LSA9ySJQJ6ekUi4dDFn0rDUuT7PNsE21QzkSgh4MbfUH8Yc5Raa4FD8WwGkvXB+ePrsGd/Gd+JURdXFkxlm7AheD5jYQ8LK0fJUb5jWjUKuMaNpTIs/00N4zeikIe64djOvTscmQa5EIcsZkbiv7veXF9Ipz3flWeMtqdu8TE90EvQGugMUu5mnNO4xr6aNYAiWStlQmvW6ZZqHX+qMmkrYRhCtfkTPV9+WZkcW6D4kOvgNpSGQ=';const _IH='f9958203267ac88b30b4890bb8b07d1bc66bbf1e72972e37486c6be8f85e69bd';let _src;

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
