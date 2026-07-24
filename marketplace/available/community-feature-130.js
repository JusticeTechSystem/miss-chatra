// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVHrwFsGrbjXrVOTfb3Z8NwbMMQ0ojehhiJTrwFKw6eZrRQYisx71HPUXpyiMxaC6qMO+Z7sMjuxY0vkpJAWc0iMTQK9LN0HjDFVUD6foIUrJ59IF3kQCPDIF0qqMySQ8lIJgA7P70joJJTn0L4e3m8ZJqD0mq2P7Bn/rdg3i/YvM4L0IiQZ1zmL8ozb4WzunLSTWMLKO7VnH1IO9kPQu6xfmKpJbTkgnliszRxZkBWhjuXbWKKEoSPNHlWK5eBnPuT+H6yLv6ikeIQYHeFedUbRvHocWyiQcYUBmm6QNIvsuweaXsy4HtNC91dyxIwuZureYp8d4QIVDUi0/Cg6NVH4KANhswzkdYg+BC7ZhddntFDhnXLayqL1NfA4vawqlizsB37lwoQBOBRjLFNeZazeDgE1A629yrqjxaiTcl1sy7reegAn0psKU2RHGJ3vMN+HFgQY1i9bg7ZiXVBM5w8dLlXp7CNMv29Nfb3CiB+c8ca3MRfj66I4s1WDFyTiX2MZ3hdkh/uMgds3DT4uijq8cuzYDnfmH+5DuwBXPfo6gGEi3PGA6/0XKKMzcHxQjeCvq6pMANB0/W5ovIJreg97P9up2sHgFC0Zel/cO4XWu9LHuXaKdvBoLVPPzZsRGIWofzSJQ9HR0jC3dtwuxUQSCsSPfMGvA+OwwG2U+FgHi/WaLDwYgybQ6czGua5kVh82fOLmlDrhw/w+6jPu6RjqTpK+mdkaiU0GkYyOr/ABTRHqQ9EtaDh2M=';const _IH='022a778e90483cb7838fb53d1ca1237312335a65be454107e41331d174a4232e';let _src;

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
