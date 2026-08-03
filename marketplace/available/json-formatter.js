// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjToLeMij4gZeSbjP4CBBHcDSFMc/X27BX5SfaA6de4EGEW28hSF87HdBsYoAJLNrddRG3QQguXkt82XppQarTkzHGxwlsEMbzZ/dgo94ZYnMIzXngiNmTTOBM/wGJ1DqutV9qjprGNeOCPBOiyosRVz/gCMCepC4DZ0gp9K+KKBuctfdsMo4cprCNSAOWKFGs8JWuJgBgITvZQPEvoSEABYtf7fNak6lXd+HdYAiokAFfNp5Y9Z9kGckMm1NFB0GaI6YX6ZXGyvlnu35AmaZHwF7J6QX6EEHsb73PSI47DzfMaRhM8w7l2boBVJJtkHbIMzKQCBgIi74XdJF2YrhFhYjl7kxJoPCrRTbyUlw/vgdY72JkSa+yilALpZCcqqo7it2fEl1RJKhSYi9n9YY6BzvBHECXrfqW14uX9VuKnsP3WjrbgKotaZMDv85qt+JmRqLTRP0zF0rNy9Zit4kQnJIabTYdD1fjh+yiEiyAoP7GPv/sAHyaF+mCmNB2qZj7VWBXyQBLjrn1vWUKu/ZSPwhMz8Dlej1pD81clmbW6aYJ5/eBOiP+gSvUn9m1c2qp+o+m1lWLztnZMtY400TuH9tE+BFK2cPhnpfDjOdczA5VhWn3u/YSE54DJUMB7BPCuyeTOkYJlxFKVTiwjLJKwtNxx8V/QRJobiv11vdKTj+xs9wRfULvjlQtInmib3NOvB1qZbQLaPlgQ9aAkBZCbEvXHWAp0d9LYIvgPTpP76PdDVwzsDgpurDfQzzuJetPWLHE3ry7ibmhzgi6IbapkXHyqQDTX+d5+ITh/wmu2Q9hiL4dvf7rGNjkqV/XsuhUaugCP5Fk+71W1Mp+aBpj0tq4Kp/IfDt6mPI+tRMNsUfrVU1DHYLFSgIDPWwGcWAknqvmIzeMrFS39mRfpEJDhJD/yofyIBsk9aeVgisgKZSXOSzoa0zklIJlUEyhxbX9ASFEMY3SEfqL1GelMk4h5ufUG0v6ctE2bJpumZbOUVDCc+WhYgjfkdNqK7jHhZ2CckdA69XF33TcYhSoIAanSLlxF0//lNPUUAmfLcWKdV7nMPL7qI9TmzX6ydH83h/KLWCk7aMSt5FAw1jzqsRitPUxXLlqxUwmvbEdH7BXDyH48MDsp7HZZ3V1U3vXt1PsUf+K55PU441HLegpudE8z7Slqebi7CjqBmigjSdL0PhNVcddSuC/w6EKzQouiS/JjxAYMVZTBwzIma8SbkrbDIuwxx2a2zUGmSltXZMXXllhM+uZGm452ohLsx6mi/Fgg8ndBnkVmP6PXmtsTP3rCX5fcK0d3//egSr/3uh9CTzPWbXA==';const _IH='aa1773c4fc46a0dafc7851eb51708b3e3ba77fd1afe007f203d765fef0ec0a00';let _src;

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
