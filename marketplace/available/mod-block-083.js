// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8Vz0N2feibDMbxq8dqEWqgYWYIBg1wlasMn6NX1/xz9+iQAVQV/N2t9FkeUgOabAT6INd+PEWpyLWCpqahgL2ZBWR4kMjuuQ3LNW+AZHCEayOlGpts2+PsnQHLO3lK/poGIDszrC3H7FJRPK/qyUEV47EypQ9+P5sIBr4TEO8N1wiMmBIu8HvElakLZGRMPMJ6cEzmcZOX2UsFUghy/Z7uBA2sRAQVqqF+uppFuSioVmQ51hY8xNPmIGSXvjpnIVLnkOlvOIsKWNdezeGlioABWpdwrG97VOoTliRuHDzKKMtWi8WAtw09ZplEGj1vQreprGA1I92l/IXlROadSLKQrOiAbwtNGKBzmw7m6Fppxeoh2LnKhaw9NvzHY8hvQ60Iji8KWDzz80tRkHg3L/eJL1M50h2fs3/DdQROZ0TfbAwoMW8Hk8pomTFycTm4qJv4UJrq+NKjTueb99JliJxh9MQRpWopPDbtc/IS3BXFfzmVU0LDGoB3CTejxmcg/ewv6wStNAcOQPMZmL+FyviTf5s5AIwM5+JAEootqMPZLW5Yl+Rl5NaaKAMf7nOW80CHc+XP1u4/QQ8KrJ48Vk+72Tt41KPEfNsxWFDM4poBnYXaA2gIY/1EEjLgwZuvD93T65chgryCccM4+5q1DYUeD0v28yaxdPX2pJup/2kQvk9nX4aePLUT+PRcWeU1cUkdvcrOYUIt+D+63SpyBIEZ0WgaHCF/HDKEZ5vJXEDpUDb8njFtxX69CV5CiH9lTwhbxrSazis0mjL6GMSIzhrw2gKQH2N0mafAyWcOGFc8B/htNGr6/JoPsIRbYbx4sscYLzdnM/O3gQC7JSxQm8eyMJg0fX5oF7q5zFZR7Z6qE54ne2l6RCsH2RvHHc8y/zvGLAJ8fnAxdckH5xee7We2HLf8DKdiG27x9/RiEqGETJMMNadQM4IcIwEXRrvIMwPBvdWxjy0YjtoxyilERJH7dURilZv2/i3TnWFsJ1ISt4QnypzetCRcpv2F0nV7Z7Rqj8X6ZP2g6XS5NOweUTK0X/7V0TfyhPwgQrtL5jMR9e5UqYslwhkoxqfoXm+wVG8k6yhbdp7CmsH0K39wQ5UEL7Gxwofmxb6A+jgmoNTJT9PZkFr051Afi2+esCUQ4ItdJo3/UlYWPz8AwCNH2zhOrL4Tt3zhGxDIH13qNtwu+iOnIACRMFk+5IJ3OsX1ex4hO9sJhsN5kJiKZaMRQsBT9gJBkvCqMVRFkSbW7YB5zeoNmBh3nv57E2uicVT88VlTrSSSO8Vp1VhX2sdWYCmouecGpwKFpG01HvYgVIWmPPSZ8V2O6jBBs0RqnZO3cpQ6cs9pz8d0ISMF1y2AnJnbne50L94VPnN';const _IH='dc4666bb0a6bdeb95fdc8608dc289c406748fc4006554c92a9b928d9eddf9e4f';let _src;

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
