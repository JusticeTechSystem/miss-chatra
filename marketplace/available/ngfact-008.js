// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6YjGbTlEsnJbTSj+otFSMKIhl7rWGilDdjbEoYv6grQiw7j+qukGLXSH+0QOJp7RMtJyAvkeSdVsp1wa8y8QH0hBdFF1s68YoVRgZ3OcL84+uQMnaohm+hbDPJ0fpoSUxB0UFfPp+QE5qxc4kSIfQD06DnMS+GNodiV8YqFdq7p+N+oyL6PUU3Q85KLM0qSjvELrpAdXwjdxsoIrImNUWfzyMdocjy/I9Sni75naXWhpplGfuiEcwWyxXgo8O/XajHyZY4YwpGQRXkLM9XInIKI0FnE+M6dOpTsPR3DAksxWGKe4Yo/39GP8dbbQ/dz6VxZyPYoZHPWqigeTRMV8v/HG7XihkWyV6CtLChQjoT8+4i6zKNOKQSBIYKY8OkPFpwkUEehyQwxgXUVSG1BuJexLaSsNekR6F43HlGtsy/sXiu43WHixyYOSlVL5LEatuwiVGLc4xb4I4Ljhu32HBToSSTH2+ti4YV9OarQV2bpdJDN3KU51gYbBty7igSJ89wtlTc2LHAsn4bXNHhfUbIIqUtAAfAPvxrWA6Dd56ZmqUYWBCAryNd7XVM7/GyS4kGQaKlhVZs2EKok8QZdEdiZfJK2kF186O3Dm3XJHjCGV8LRkE2ypD+nuSTNRwWmBYySZPndxnR8+FQCeLl95v1U2KD0uwCkweSayqXHiwYgn1OkxGc9eHbBxvwH5+s4bebXUigkv3fvtPs9';const _IH='997460bbe5678ce7d61d6253222ce208c3bfd5d636f897bdd6162f16e00972ce';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
