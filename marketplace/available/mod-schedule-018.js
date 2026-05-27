// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oDPAZyZdFr9GbI7qikxYioNF19Uvyu4kSBcjXhmKs8rTYQ5gfprt+AJ9oW5Pa/YtlX5KAtEO/PDqqZQOWPALljbcKHxUMBqWebHOYjHZyMNTMLKeqPxayHTQ1mFpGIwlt6IGCn6DrL6wIr+90qB0oEpdwFlobnwb4RPHMBTg6+mBAaavDWIV3wvgelgpWce3leWMl0zMcjZ54MvhAC68kEtSLdheLn47wHMDsc1p3QJ0R51UnpVVOkl4AH+KR/IggfLqeldECm8Jxy+vPwkhwC29HE5EdYfEOD7tbUmpfFIeiQOu3M59iQ86eMl0uNLaJJ6AvjRUnMGi1DVBVJUu18K3ja2MXX3EtNcNcbUp6yKCnNl0P+PaZItPSe3r5mfkesoTZ7zUH3L7zPwvQZ/QBFI0iyK1lFtXVqp8qFHomxAjmwKelQFFzsUhpY1C+RJcG0GrQM/OlSydDBnBQHKQ2u5n/Fucye/tNFR6AnqFEpn+TfNgv0NbVUckOXbB/Lqg9xCUV76im9Fz4EGarR9hpgbF2nswntj4lM5pktJvYQa25nI/yZx5GiXt54hcTlxk6DlAJ4zanVXksvqZ+wJCkq2ixRqesiFDORAh5u247MZj2HZaahLG2bVd8YZ57vgXFUi7zrTyCInJNZGcYGnoKPNc5WyCsSqU3Vu/XteVhU26yxWSnLBOS7XIAVoOM91z3HgeycBv+CN7rehOXOFnzCAlEvbXnKaoxNsjkXR8nTz2X4v0FDyEHmsYxJ7PHzqu/8qjfoeZ193TRwoNxV1zpN5OvTqcJ8JQoCpzLbglyKOMhtAHdA/upT3pFEKPwEgtovoCRQFhPp/vLtHKK2O/9ipbwY2VX3sPdILuG3rHlqfT4NzWGaXooKEWyAJnQ0Kudok8Ep95k9T2JdOU56TfxGW8VKQB7U/Mr2R8/1FD4RGTTffQ72/pUaqh3q527IYZucYKmTm3BDQcOYFM/NctUdWtahOs73mje8cqbv+lkY9KcCIjcBK5oFNPdgMjWLYd/ZtwgZcKM+hoArMqq/7GOapZLCS9Xf/XIL7jHLpA/9vMx5KKEN6nNcNuRh+V3dYU0klHgIMZXCsi6QhkQhOUfMuR+5ULtBOTwiwnliLgQWkM33vm/0c3SG1OyHQsqfqvtbtDs3+O87ep5UjQyX2yyRXHlk5IshjWkOWTLGbMX6JM9TKgQbpDIDJEJ1D5z+rLVzK7ntCdAGZd6fkrcNIAtWoJY7CD3SX3Vw1dwoRCyZQPk9O1FdbDjFoGhbw6q/fb/yNqmvhm2Qb6IP998oQWL7AFz6U0OV5SJjB0sDqNHKEpyE9isDYIRUcL7hNba00YSQthaCxRO0TKDVjlS8ueys7eCj7roYLQMrMaPXLvU+x8KozV8KI66ZsX+uA2LSoA4fixeReZVg==';const _IH='7684e8a7edb55e45345a1874fe5e72a37100f1afab918cdf9d405061eb7063c8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
