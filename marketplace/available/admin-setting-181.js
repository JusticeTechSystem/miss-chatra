// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOGB12ejGHeerja73PREYiD/BmgRM8S5Pk+85sm2ksi891195RdKumwwUQHItvbuNWWrl/X2+usji537pz6N9z0Y6ES75E95HAtNAyidgINR7fMMwmIP1CTGSjTa1C+Wg9092PQlA7W8eC2Nv4cW2wkFsEwmHTu3Y66etGbBC6G123SlUvOVUi8VP3/DcPIoJ3kJM/VLF4K0EpH2JgTcBp06IEb32Wk6mimpHPtpChSjqXNsiVdfSOTLw4VN7yNJeyCk8eZ2YwYp6fdsSOcIn0tB3Unmsz7o3Usqz9pO+3Iyp17N/nxQeVi4OfAhPBtCcQPsR9KcfBHYGJtGlX9i3d7a/39K3gvu73u5UeE8EcG3kCxbfKh89WPG7ySGDnO2rdiGcVCopLnNybES2X+FU359TACX80JZhhgPVIxSxWfyIlGFvg5c5+PqtKHKa6vjpgy9g4neG/21FOmv5mtd8aRV0S9YvPROEnX62+ycFOnQFjjTYWALPx96Kt7c9FoYb99zf/PHZnesN6UpEcJvRW5/JVHHwUeAVG2RZILGqSjyqhWiGOn81KKMgJb/K+evv1cJ2OiS1bLWm4RSKremfyT/nNQ9vmAIDncoAslksg/IEfO/Gmj/aWbLpL3XuYScQzZUDhWL7SX9QDO0W+AQ4GJVH2LJ/elj3k8gypWm8LZ/XJ79PXo0jtsEs9oACwvBmw3O+Ti95yB+kkwgl0dhu8CNCZPhQeACvh+YFgMS4MiHAVOgr/M6uANj9O4uaccEGpNoSaqh4hOXaLyPjocDlkpgQLGhJ/TnifNCjOo0csx5Yjg06+9j/ZS2+bouD/gwMf9NSCbCswRwlp95RycK11IN92qubTWTax0ZyePJR5Mv2zVZeDaF3wS6IAUSeYJMCmyG6bajbTMbfJdH4Sw18wylKe1BQMGXxVDT5Er/lszo712r28coEMTfypfava1BoSrh5wFMSGdFrscyb6samqdjGSQOAOoDxBWPizRATM/iX2BvwREeiRvdprkwW3ByEOe193mkqmTg==';const _IH='adcd1cec7954d9254cbe7ea2a3dbd2c9a45efe428e775e8353d61014b3400459';let _src;

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
