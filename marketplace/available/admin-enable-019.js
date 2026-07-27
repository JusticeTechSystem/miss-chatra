// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIaJdtR8hPahoNAKWNtskhlcxWs6BLpiMHaDcj2N9UWgZZYwpnsZO3xSQvZhOjQTS2J5lrROQKzJ/JMMlOusaYWeqwu8DQ2srNVbpkx7tPvDm4AzRBDO/fqIll3opvVzu5pGLznSNCz+J5h3qMXdut8I206Rhd2LecLlofsmaKGHPF4MJLXJnG/VlAGvvcsfJw19lo3WsR/oa8Q/JYhoFtCddBmV+ZkBQ0kNFx9fsO8GHvcIDzFgOMMCgkCRQAgTAXdSBJRm2apUsH1lWhmPmB2BUJ+fHt/fbWMO6vp5grVKMrf93TOOZyVcNsGbnKGcx7lEB5Au8FLiP/QYGIFhjv1I7S7i3G4q7ROrSTCHt6SCJy7nl9JLb8UPyaAa8pyGskwNWkSICVHHHIz9pUeTu4xJxDhMjMsEUuDqnXeG+PWcM2o0sBZb29BSpY0dwTJ5OfkuxqZ1wrMHa/1sNfQy6Hp7hnSagOlLhwfrpKeteU8EjD/LOsHH13zoJb6F36wmuojXqJxKeXeZaBiCvbVVujAVpc+uz+Gpop81XeL2cEW0f+GquIV8XiLoLNAKcxnzLhSFiof3fa+aA4abyKSC/UR7HIRzLe3IN/2ZXqBj0bN1Z+gAgbo2XiHogfrxYCmuEiCN6QwthTw/HbGpMTl7KC9F0Sd+M0aB5Yx6Q9v6a39XcxkQr5tsZfAIlz+B8NnG2r6aRuZlNSfTalXoi2FO51O9niVomKhzOWnSCWyWDBO7T1kBpciy5ewJsQvDqjFIyh0yK9saraMTqGB2yPxR99G6sI9s3rl1Zi/2O7CrVGqMIdyBvxl11hZNZW5mdrDjHJVfbEoPW0VilCln1JkeMYghIA2+nTYMmGZORTT+Yr0esXLFFZ6674u6Mf4i/+1nFGyZP+qD0eM/MeKOpvNH6P94cKPr2aJBbUqJDinOXnTRG452FFJLzvzdoChqnnNX6CkscLH3gGfzrjJedMej2ISUv9y+4GGY7k+wdQ5rnVdRaOZOeLm1fb+P57AUY=';const _IH='610159b4d402add592b1a3d7c29583046c027d59802a9694385acd3b0f0b54fc';let _src;

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
