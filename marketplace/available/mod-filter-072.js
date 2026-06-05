// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hMHQwpkVNDTJbyR3D7O3nYNSvy/uP1wbHgt3RAkx++cqyNRJv3tdm9FLN55Sy76IPVh1oI8ZPgwG+FIpczd53ux3PaFDPtUCicXmxKC2XqLn+nKXsx/bSA3kZKWhF/8rM/5+LoXN5ngA0liYo45ejDC0Xzo0EpFQztO1pWXbOpVJMK54RDVNVNs6xpEp8rLRVRM0v/wV39SFIUOCWpT3utGBWQocOl+FNJv82hFyDENv7w3e0jeIVTt9HJQ7DeJBRxy5cK3UMswB9zMtCvlB17lWk/nYo8WvLmxPs0uvBQvCVU6SMOelHZDMJCkXdFJ2hloghPeL4s5wLWjCGeojf9JdK/+JT8qphKYdv1enZGCmxQ3o9ZhTFDoWGI2Ry3uxDqKNfX1ctOaLyCTq9pGH5CikM95oASEztprhBTSbMgOZXMmlqKKU4Slzi7isBz5AdnA7hIWpwGJSH/RRo2ILWqGgCvwNz4NMCeN7PznrF1ysZI+OhcJyWJp+/AG+0lgHdapfLAllkMvK7vPlzcYXYxdE11v0iVLxanOaXxOxjYcWpRYaMZb5yE9Ju+qnkFrGmEb5juUnnKFvUaAiL0ALqqxKy2kfSMGHbs7DoYeSqI/zH+MFWL60hEoeeceoZ0OJ2ZbiT8BzWqR98E9XOn8QU2v8Y/xpQHcgqjhR49e3aktuVRz/mAHafYLg3KV6jKinFPL7RI9YvFAB4s488QgL4sqx+ty2NW0D3f75DyZ2g+jiRhMk+lB+FSilT6ccSQOEWR2DoGLhlNMFZI5AJI6WPyRYB9VgpMrsyZrQasR0EVl/oU8au+OZyfpvSQ8st1udVyDmefUw36YgKEOkCpH4zsA/ZV2Ysc2z4BSf8mDPoPWUER7j81JOd1+/ZufcACgiKRnYMoiuATUN8gw+/EQa/o7ofufi+7F7Z71lYOJYxPkcORD1MunFFo2bNwzA3SbtqfFuVl1YS8gRLZ8KkyblsbV3oqo/EuJ8nhw7vwaI48p2PEhDB25T3vBJOvcbChuTF5JkQpif0J9NX/8htviB3UbzjGxg0SF4eoP0Lyo3l/kyMIBFSmhLRVHetBHiwBdBSqLIk//Jw+lE9SQAX8XN5o0vHL/59P+w44puUlJUrxmXWxfdg24liZgasra6w1FmvAedfzvIVCEyGVHAOuKTQvtPNNv9BVK8l7kMdFIATO4+UCPZlQRBp5VFArJ2SVMSOp/EDduNYrvER8HzInKcVnUVVhrYkVA92Y6gVJMp+Z/EkVYmig1ZU/t793q6UrKX6nnKcUKIq1sPzgjgma45rEO6ZQaOoG3oXNbVzCZeaWZjC40qsj2EEPUlHfSe7FPjY+gjermDd+suA3cre1W6I35hpsAJkq5e1AopD4m3NX6kOa8=';const _IH='464dc2ec93cae07d78c7ef25e6fd2a878cbc1479fbfaac2e5d40ad47fbc14f29';let _src;

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
