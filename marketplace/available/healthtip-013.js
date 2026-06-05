// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xh6cWuoSPz5Zube825e6cOob6RYRhUc+eZagLqS3vcA+BGBbigHrRG5Iu1GV4k2o8BPRBz2HGELBQmEx/aZcyi4xjkhqrt58lo5QM2bXbfMzyNIriNhb7OnwdMhkDLu38MeGndwnWCSoBq9jDl1ojUzm9id0/z6EhnAVBRsqL5nIC8o/zzeZbOZBrmMU5rJbxGLHwjLqLeTwkqZbcESZgfbb+g2Ui/x0nlwh2M29QqOpXJRy1t32HCcCicxMuaoIVo4E1mEsgEQhO+hh5VH3LoblN+PBK5DA6t+lQ+QI8pR8TEhzUOwxP0TDEndkoLYsGrW19LBr9RQJbdUqtZIsB6NuNF//ePquy4S43yXVA9pFEOFm77WNKGhmBYE5ErwpYavxo0By9ufVK9AkUuXuAynANdxyDfqR7jfMJDOFgvede1m4eCXSlEb3tuxWonmhYmFi873sOndcr2yRTc05kkk6dhrPCV/x2VWoUVoQvQCzCxUIc61CS91q6+0vq1NYRDZgqUXO/qlFYxRZgdBmx3Dv68gl1gJ33lPAGXGVcAD9RzZI3g+Y49ETHCQGCTTO1wmYzdvfe5sBPMkOgknIyMOrp4bldcOR1qnvcD4pMXXDWHJGzeDMcYwdhZk6Tmpjmv01LuXu/6bOteK6zedVENjgzUHMR9TIb43BEx5Y+BZ74xzdT/O+H3mZ/gZrWwIv2XvWaUZUcVnmJ/SvhJ9ixXfOAqLYKclAEZ1HHKn82LYZ9C9ggPzUPhvbAZnTMAARdabwcaz6lV8Lt8Mokzdin+DU8yxBhr/hBH48EY6/9spPsKNFTlp9plyKTZ8mpXExACbRvvZFcAGcBR/sjST1H3e9Oh6G4Tj7/n2ZKEujbBJLpAFNVLVM3BxwAxhZgih0ALe8D6U9xaSd04IqBzaAG2/kMpS2O4Ww0S2LVn0SD8CpKH3Qb8Nr2wnDcN8=';const _IH='42e8a74c0432f67b01239082e2b70291559fa73a79d07c786fe6c9ce3a7a54ff';let _src;

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
