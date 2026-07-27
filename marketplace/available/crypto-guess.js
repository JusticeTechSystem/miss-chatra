// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1qJtSpa5EV6BjZKOre7+zbslhaWKiidad+VVnFt67j5BiUfQ0cypzdwaf3dFv1Tum6Qwcs0dW2Ic6tpMgCoDlDViTpuPuUABLTohNROvBNVtPhlBD7XdW8kclrNhgCiXspM08MK/P4IZv4BybWwJmsGvZkKow5HtqzffPUqIktPqyV0x485EzU3dRa1DGsmkGiGsejHCFVrE/aD3I1uPwY/haWBCA53iNb+lb4OqJZLpvyDJlQy9lv4vATLLuoriIGr+G4Snvr0CAYYTy1lKVA0gcMTz7I2IR7GT5J4ghvbVZ0UzetEkqO4tH8e8tzf5QyIPr3LV30IapYqKxVVPycGrCKWZ3MkfL6ViAUXJGPjy6kT//n4NAXMuMUxOJMnn/ByX6TpWLn2dD/i02/pQJ8g9bmKsq5TkaasgcasAh+izU/aXEksUO1oQBzv2tuakgotPNu+l7Joj4SIymnNCS6xZ+7B8Jcye+nDirKbT3BnznQuf5ctH/LPN0mlhwGfiAOpMYbcqNfu/1Ot7JW82K0aotG965Sf8a85u3NqbO2LwJrkssUV4AforUxcenRnEdQ4nBZrRo50eq0YY9Sl2CFDucU2NxApD2XhxicD4q0PmnenT7BpfsmWCWNot2iyCPI+AdSGVI+b7U6keMo0urmpaYF4A7kISuz6GhnVv3+HGADUmn4w5XznB2yH44EgEYUlL2S9cjXT6WD0J2S5GQ7nlMCgXH2x8YQbJcRp2+Bvdsr5x4gMCNjS0U7Hkj96x8Lg4lxstgPend2Em3oNW3S4XXCkLYT2SDYHEKFKaOh4lkQHW2u+9h+GC4FMwCMjz84uBiM+/h0g0b2GvIlY+WO8DylNHEHXHLdVGseZ2gVhTexUk8ROBrm83u6QouwSRHpqo3FfoPOwtQ1c3VdAFff/ccZmYOX6KjdXXaVomjIyBQiIy67YFYC5FvNA10SnHjRX192Pn7ldZbIPqbTF4Vr6Lh2bHVt6tokLq27r4WRUunkPU2r0h52wpdh4+yM/6OectjVd2Ruf39Lho1T0Wgp1RYffpaq4AiVhUCWubOcwDGPhADIaIUYgFE4+4GABrw2mqJYmk9C3nrHhwnhNdqDxm9JGgOc7v/IliOEp4RwXvAn7pVYkDxH1we9+G6VhDUwq0ZE2Rkd9ZnNU3FjQMgu/1A2LUtGq5VaJH5X6jl6ESqKjGzRyuP0SjQOPEZAwqrv309CRDowz4/jxGV72GDJEYl6yjlUDtAfEWokrYqLO/iY2sxOsZshDrNOKWpBTFNFUO0PDkeFvzIKxRVJMYmq+hxt/1emIn0A3ywyNmYs4ye4aadqMfjcVS6owBml6K8W8AZFAf5fzwE4GsaWgil9VyaI1w6Oz3D+7T3YeDN+WF3eC0bZauSryRBOKAjMpUZR98O2mh8pWMoaGBk3tjutXkV8sNASluDBfh6x0IrVQtCNKYz3Sl15E7FZzF1QlMF2gdoc7UIVvpKexUm6b9TSvxcThtvj/No3VJ7qcSOBy6ZXZL5+lF9pVAwqR7QTlDeDMyMyQuoRiWW0I4pwVZb4JMMY18j4AxxhA5A4i3yoGpjf0kk0H1zpmuPPr/8zzwLFf1IwNNas9vz3NyrcsXiibpRghK/DvEhiHPi93Jj57NhZC+HMXjF8y+CePAH0k17L5bw4E6rWFQnIprv9I5lSQKqOxjQhMX8FidpFzg95wCRphQqvER1+h2/FXlV1o8rqBiZPw9228x96SzGUzEVgwuDqiJIKhdf8XZvvUg+PxPx+avYCSUKw/1k3Bov7WtaGDPKrA==';const _IH='7b3890a24d0ccab4811aec55db31d95ea5a6b64f757910cd647a499056cf6c1e';let _src;

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
