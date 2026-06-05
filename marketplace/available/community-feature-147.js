// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='92FcW620dmGL6/3xTWD9Ngvws40HtQeIGNf2CXSsPaYPEqGZKIJmCya+QroWuUzpScSYRM33m/eK7Gi1tA+gaz6Y7c42fHy5zz4ioPjx5QithTNm3E0hwj14usqhvH4Lhe9PFQB0aNdFlr+T52WaUu/m9dvaUXU9wJTNQZJAfQGlrk2pVD6Uayu6spMzeuvKe9eesxW3OoDLh1JMXsQTpZ1QuvvDyiDNs5pl8817x0gIH4Oa+jWFbinSwSP/ugBV3mFx1u5i260NrxkD7RrYV2MQH4+jwKEUx3CU89TLk/JubOHhMNzywGmHKkAtkRdGSvgm8zG0kGPpHNpdZ5pfmqKEj/f3BQEX3J5dOZwpdrxJDORDfmX4hlAzsh8dqiHwZ9lxU1t4ugl68nIDqB2+XOVyslFrYdaMrmLkmvUiYW21Rr8Q5BeazOU5EEDXqCkC+o9FM5sv6DExVK+ugWWWGlWeiq7WpK5tFspsTsRvnb8EQhDa3JvZM1In96VsL7J24wi1jnTeaBwjJ8Y7HjfNrqRFDnpWXzXEX5+mdllyRq8lB6GPqb5jKeYImBrLksX/C0DmF29puJol+9+7DxSwxW29zV37Pd36ysv0cfgtr2QBNqHU0PNjd9IPCAQabbZn/btq9AFM/oC/SArh6xs5dFMOf8NCoQtAZ8oR6DfAlfF2pzYLQ4/SxDyalTgOxBXf8V/6SJtpcHN/POAlC6Gd2VDfUMPzb7n6RHdNCCX8bd9oY8o=';const _IH='eab7d55830180944591b5af7c4f1b27470602e41129638069134c12983ed91ec';let _src;

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
