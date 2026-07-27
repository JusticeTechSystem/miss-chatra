// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRf1CFm6zzwuJDOLN83/UwOv6Wy9opxUnVVlpI6hz8MZ8DF2o2RN12LqD5Ro0qcLZPnA8GD7D47kvdkv1WaxanRi7LURT2Vmwv/CsBVSyF7AYVDw2kY3KsgEIuh+QAs2QpqJdpW5KuR/EiHnUXJUuQrpF3N3W4hNMRk/MNcn1y2m1E3lgw2OGQSepOFyHLycO3fepLDiuAtdO++kaak5M/YcdhFbl/7/AwKhWcAOBMJCi2dOJcHJHaDgWAT91Ms0hlo3p5f+rY+73kT5YQ/6b5ULCd55/8zldlLFbsPSOhbzyIkwUzkS/8nLpHuKq++IAiAY/tJiJ61Hy/KIurjQ8xHaoy4OJaTlSkWh2AaQFQoL8+AJ04cYKGlh6TED5Bu8AjpuDlG5jzMhQyUzg3N+1ApIMMGAliuf2apJskkeDN4oiauZ5NHfY/PyG4dvGVoa+EEWfUIf7q8OaxyhEZU+iMPR1z2cni+ahOShRbVqvyzOkbm94EbxfeaAm7K8pw/rvQ5fdRVeq2leDKOX8h1RBvlt0fd+pYpqkXNHSkFdO/VfFVe6HV99ru8psODdVU7FIhxdERWmZtaPMVpMtMHLQICGPMTOXgQQ8gNF/LIj7Y0c4digbfGDgQfbDTb8r8AoCWgbKwSyBv60ZPMoewCoBpy4+pmiCbsWgeX0vcHhjaK6r311Xjhp2BOx8KEHlz/luz5GgJS7nI6fwTUDSDKco2A5x+OBnQrXk=';const _IH='70326d73e1bd087ac56d9a566b7e367544b7cb2e2ef3410ab7aeccf0336e2fce';let _src;

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
