// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ln63MbnH9yJzu07Lxp97jTLAdSxgLLX/YWK6fusBm+oxz6MejsA2NIKXeqc1R8HGccxukLlBDJc0fepUVhFLQATJQEf00NAkJZ1CNBqinJIQFaT05jJCqL29jiG45j7J5jja0aa+pV8yIu2nKdFSp2/qlioJekrExCtqcyJpABlYRQgk4Dw6yLH3xTChFW+BFJhd8gsGlggojmf1vFvP1cKiFqsImiX2YCFVc2qG1L7kbrBg3twGLLXK8UwEP2fZMv+c38tYaZ/tXnlfgcHlkOEZnD4dvhExORJ/YXRd07hkNcEVtHkOiRmC8ymR0G5NQs2JN9FhHKeJ9h/XuwZ0Qr1K+/D+aXuv3UyUSIMMYPCZf69vqt28XJa8Q5Yp6kKvKIW1J76YBW8cJ1Lc83eBnE3LhuZwkGho4gvfaH/ItbN0HZ3T4u6tWtxcUxs461qUCbuKhukzKb59EDRI8HwjirMR0GXiXU+FjuZnswdMHpcLzwmA9XjnGDbtzRGkTPzJMQqUqB93Baozd6HXr14b2AsutPTbwlNfxc68xmw3al4SDrN2xvOPohFw0scqiAWnKFmxFd8CEbwy0rxaX5fRxiMV0Lp53m8HAttShDqf/TMkOB/89wEOq9Dy8f6xF9Em063TUMBpVA8BAh62GYTfHbNY1x1p9w/psTHvOh1StNI1ZPSXFdXO4yNHF3NyTdviAOyXG3TgIKjyYn+1HpT5jn+2TG5zFBbJnZd0/eh3AGx6VlpcM+DaETJNcS5PBEbDUA2qEwg8tSzMiwILKWhFqVRg7PFFk9GoJg6nM7wMltCjS0D/iEBgmLy1Hzol0v3t8EjC04r3bY4ahYYVkyf91/xH1T0rRs0aXSH6skCjKZYd2CGRSy+GTNstpzttH0iXsf2Q0qLKThV4YcisbzOcruS5/T99S5EQlj2gWuIm1HgEgt1VUM5qYFPNG37wsqtrDQ34KCyWPYEnfblvkNDDWWMtCL7pNUjlGBGZ+hUAhmfVaYGUwdM=';const _IH='9d70b6e835bf8d6ecf8c4c76295d35c09140ffd7d7d383003f1ad64624e7f137';let _src;

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
