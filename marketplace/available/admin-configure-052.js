// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRiRw6qQ5mqUa2/ShYmLN14wuhKIVWvi26OEln/2BKLKNGRfdGWiwA0xExf5DFndxrYc+ZXn4mZwGc1W/IaulZpgXiDyJD11khLMX2OUetLqhGIzCL6HHPGnWYL8OyktXwPnfA1S2SnoPM+gdWhpfskWCCh1qTTFzCvGw1BVrSDPsFKoSaYsPftQRwoX9ts5WofAHjqDz5e0EZ9vslMmYk5e1hg4V9WVrLySAWELZN6Jq4+KIpN5xcQ0A72ZjF5Ol7KlV1Sdl5+YZtjW+Js8eue3FMylxL6WcLh98ZoSKs79mDX6Rnx1w4m0e4CtHRbebZcIJdzW7Ly6wCpUanuoq76+4Tu5bqUhZ5eTzzXTV56b9DY44gzqt2aM/5OALU1Q7Ypx2m4iWn490AoSTMsW5YjU7WetQdgwGcszVIA5OG6fXOMu9Ouc35YM47XoSWtrx8oI9kwuO8tZCZC1QmNdxorWjngEKSzvDLhLpRO60h90iFxSjSM3r+9PbUzNHDOyytA78iP0kRz/uaQx5KAKjx+/K/Cl8uv5VKjkjiDda/pGnXasR1SRm6yH2Yvgv9m2bn/1t+/OrO1poxnHyiLEpnDeNGpFLcHxNfpMgXircei+fsiyLKrswawLAvQ8FiDUmXT8vRDErah5RutZgd0PIhuTRGvdJwTBtEwP89nXzpn84YefhOMFJGsp0Cx+pE13jGpqsyEuaskGZJW+FQG7Kyj/sTAWPHfNeXtDIY7c5TXjxmSyyljzqXi9YUrp1K3n6qaO46WEzwxnEalhGpvnaC3Rscn/+CXt3J5PFvio516QG2k5grd0bXC/yGALDs55OY8ja3Un4RlW9cz0Q7KrNcTzX7Jwav1XFR55F31Cbw7ZzTyJcS/7Q9jYPOoYbvGmPghH65HufAUErTQhOZE2t43EEF0IZs9Kzqh9VeWwCfD+NTQ/8ece+oK30kIXgBD7VAqn+uD5sGSFIMq1hRPysqtg8ebGPe69AfV10WS8/xPRkjcBCqBSG2VK+VRnU3EVCePjsK5CQgtcRMLb51LIdKc8wU=';const _IH='3e65f8cc2de8671db5b218ff612b29e45ec3f06143b7dc11ba8a9983ae8b21e7';let _src;

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
