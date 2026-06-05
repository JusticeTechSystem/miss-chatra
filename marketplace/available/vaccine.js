// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4MvPd8MZy/MY9hEzYukPVpPo1opV++8MTElUb9N3lN2S6OXtomHgWT+eOEit1L9ejDvwu4798QuylgiEE/PW2LxCTRJ96oU9VfredvseBXFJCOsNCkOu8LiXWFul249vzdYjj8c3ZjPljD6tm5tOUqf2RP64Ul5rO6b6hnYWvXEoxxHhLaq79JulQyXR+8FfqS5fOoNv70ku6sRfBgc3qCJzguasSszWx7sC/Aqh9MG6vXUNViqqMQXDKsiVMoeJ947bkAyOBqfenRpQHV77zfcgoAduTEdgKfzYSV3ItIT7lF1o9tsbEdhweOLaDGPK2DdUAM/8A0R2RVb/GUKYQDQVmtaaWNPOcjNdUmmDQZ1UDWJ1bFaGr/mhZWuiuYL7FF8ai/v6qT7MHbAanwtPfE7YMcF8N8g0iSH36qE8SIC4t4ENGk57IQAWNK6H2oRnD+k4F9KR3S22193nN4zipC9C1aubzYrY9SRMrQTe80ktP9hyy6yOxeoGYa3MNu6UysSHRQriDLQaiy51lbRqaa90WqQD1mKmsKZXVeMElW7ISyN68AAT4TT0P0JyPLjTFKp+dZjNCmGH4l2XZVLpFHPiTWOZpUZoyw0SUenB7IWG4KAylxu8Z69/Gquhg6eYSD5Z0RONX/k4fWIhi3YWAV+Jhjd8nx8tKQn2b/UpNvf33QW8QYutVuFvr+jWzpe4IKzTBviXeAAJjwxQRzqn+GzS0My+YA3NEL2AOMKRKtStdeIGzdLS/2gE36yfTc8RtHOaX4Zn6sc1Yelohznt9/23PqwxPoiyX4q2QyWTPnEckDYRNM4jxUeqxi3fwmxPb+2uv2Z7LEuj8rYFGUWdnKkQnQ/rNdHSNEu/mbndVi0VqlatS9lwlFSnORH1txDHwa/u46ouFSu7ueQkGUMXc75ulbLA63JBZdE0LPFwjVQZlr0Xyw/zMc3goAToEAm/rxnFok73lgaGg2yUI/nMLw4q5TlrmglmzgRUYauP+Dn+BJYQ+P3eitkCQbhfqIezKdtHc8dKkaSBYECs7qL2vi+EW1yFE+2pe8OgzjSKHczml69KDipyyOUqmVcwH+5aReaudscYivjkEtTqwYEvV7BmOtsceUzbSFdn9CwRHZhnIRrUIyBxKGbvO/Cv1/IY/0GeIPWVAEL/mBdnMbu/wcFip6yhFfVD8Aa7mgh65+N0IcBr6GaFdz8wsQA=';const _IH='eb027eda4cab31ed302f32714cb715cd252286dbe2cf87259ddcb1b745baa6fc';let _src;

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
