// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQti9bEOdxrB9RpaF76IFBRJvLoVdkhjYdmnLeNlF9SybsDKz7Z36Gtx41zXK052RdDrHDHk+N10azXuuGfMwMGWlNSpAB9WigOPu3p1LC+NISoIxU8aBfnoH+9B0ysMeLRAKx1jojDHQuO3bg1q+0V2Y17MNgypL9+zQV6NQMaqWMKh8D5Zgh91t5JG+PDFopqH0Zi57hq8DJCiN4gTISsnotQZ11W0EXu8seKoiqNfHBye3WrSrDfbQag7OuAFCMeYSAhUuMkeUUl3IdH42IWrK3KF7Zqa1mKzMtmy0/DstUcpgb2MZmkJgt5fO97PeDoMYv0zPnQ5xNUJYBqJqBKuEKst9Z8Sh4TwlqKdkKpGMMXoIthcOWAwuzep5Jk2yWZkTHocLgjM8p04dSrK54r5cQlLR6rsIgmAUn2jH3mVGARSV2GluQlbcqikouIeJhe28yjRp+WsJP5pwFN4CFuO6kKs4H7gV34tR557tYEAJG4mMTSoRflHdzJENl8Tv3B4h5hkzt0gMo8R/w+PACvN2VVVV0UMki39vH/7206WgjjQyrCAqZgI/GJWs6HEumVAUHcV9YefLmskAWR+dN2FF9tCZyLbYtHz5Pg+LGEY6fbHpSTDy2F12qpIoR5SeFXApo02I8WC5q03fLV9wazjc+YSM1M7y+/FOp5GcfzEk4HHudHAIjgCwVmYKy34LhB5W+hlH7gP34Qm05DfpccRApt6Nu2bIKjN7/WAWYQrlMFw2DXF9J081Vz4wc849ag50OODGdLVd4SB5fno/kbdzvOuRGFxhhnWZuUba4jl182ap2xCNJ342KDF6HprUFZsE+Ca65JxhLaTzI6YimEEWtgUp+jh8U44Ce6d4yt4+AZp88yZx9tO6lP0b+7peK/RJnIdfC3ZWRQsTy/au8iFfGcvwIH+hO4Dhod3bdKmKWD4oRAI6ry';const _IH='05f20386fc958e96760c29aec3d2dbb17c1c9f0c2b255f6ff451a26900289053';let _src;

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
