// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTM1YlZqzyzDGyQEvXNXqkmSnusAluh+BRF9dsxrIGCk/nZNH08Zk2tcyyTm0pR6JtlMc/8DxvIByQXF8KEJ1ZaliylQOf9Snut5h+DlqWMkAXX7xAHp13a1WByXS3nelUh/svjYpADcaaumbLWtWMNF8MRPPiJpbDuE80imC3QSWzQNp0cdZR609lFR/VHxXnK1sS0VliTIV1WP2ik/3K8g/H4GZXfcQaGtS3ugwYPCmsqoaW9ifBtORXD309GCzc70taqQYCpzIxxvpq4cKsAO7AzyL1Cz/vdO5RCCa4FEr5KZLyXnFv5Cb/IA4U1BS4B/5VPZBP8FqGgBPOFf8QiMa0rnu1mZRDFuVA70PHJH+iQ5w6hjaCreqrNQiGYRbp8N8opuYvBG5lkeKncn+5tx0oCpJF6BMaA3wfP72ZwN2fszonpi9Yjjl0siPOjdMCb2S1FhxotUHgavR668XlbQySVLoTtdpzJvk0PKWDQ6ESL7JYR0RQjo8lTrKtph9LCZ0LBfDi0tEIrJ334oVukB1QHzGku/fDCZ/hlumDz8jLvhZNYPVBhpLZsnLg0W+t8UUWYEaEruNO97GTkDQyqWGroLctgN70V9YkppAvrC+iLZ2p5vFafbCQdOZYkViuogojwwjcEPV3mOE7todp9t+pnQauOQrtGCyRu1Kr57/UAfZMVmE4uDhsfwPbgWzvXzoe0pa7Nop9D7Q9vxJAvN2u4XTlqQEO2svhz5VB0km04ZdjGrM08JuoQgjJ9ledB6ayYtBGXszuNQ9X3cvVR6cf/KNLPvhtAx8AjJHoQtdNBnt8yIVKG2RBvqQ0aACuBfNECIrHLJqW+gw5aAojUQWF5m4h+JMlTU7aVO2G/QJhEy/BX1NAPKWMXl9anBOcv14e9J4HOACdEyHLCaxTKE7b8Op+Jed7sNTLPdXBWdnRhuFNHcri/Pr6Qyub2BYAG0fo/1VZRe8+e/zWgjC42RiWG/9xONubu6KB4jUWCuuJ8Np9de+hta5QYo0aTqpUAsBufKdFRu9DwPvKAPA+jeY=';const _IH='0893d5755d8840742318832132d7cec0bab0038c2af2b324e3c670e6d8f1308b';let _src;

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
