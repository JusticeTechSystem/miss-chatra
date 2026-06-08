// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Kkga9iSDCknX9BYETgiOEQb5N8pi+BAO0OqhV8L/u1vQGKFMh/i+to8JtxmCjbaCOHzeRz7T+D+inL2amAanYzYpQuEmuRpOfFPpjeZ/rRlXXZrQyaeRYFyd7jtoQErHuTHF5bBctET9Uea5i1x/Z44G1pblIajbNQP2JCLpXexUFE+rd4elRL4yBFI21bVuNtl+HKN648d3EHbA9qhx0oRSV3tP8Lg9oEoXb4zcGvqnQRQpDa0rdrvahm+g8Se8JZQ4vD7nBX/L009tGBwmrSN4eWf+Sw6/V6iNFkPFHbox0wixuN7hxlEJclAYTzg4a7ZXWhGdUswUCpTy5iw/wCFxE3KCAU7oR/PEsI1FONKum6Lbzsm9/9T2fmD2H1cRgvWj9gG3OJN231FD2aMUKjE5p87f6nHdHxp2b+W7tpqC7e2i4Qcg1gJOduiqTvefjkUIOH3SwCNnnxnDapN0qZgyw7e36acmLhmER+3MTEhkWsxklQP04hfwAKk9pxabrDMXpfTOiTfcBHHI8vQoTaglv75HkZY1FuqgAcOwF6yIOeWR22GSgux7b7g+dvvZeRssm6inowMc0HUw4OFkMotyL7hm4IRuLMYHZffy09LfzuuG5Nc81XmxFdR2VeFVje2IXaqEAVOjmRYzl0lO3NIHtz/W7twCdua6bS1I2+jXCE0unBsrFAYlmAlZEahBvvN7tTW7Kfjz6Tw50wVHe3IzMGcO7YizWQvWvO/Eny+CLIITfHp/KIwhqfFc6ID0XXNcco4l9OtzZxBPnZcMfIU8OB0JwPgj/U0/JxC9tucFHb7ISHYY3/QPM75ufPyttKU68gVn/eMkjMrXeR2piyNhbANl9qQP39UT6LXXx1ROgaQffIxNLHYAayDENH9/eQJ93Vk7JsKy6oUVCiJI37E9neB+w6Nd6YAh3VHmqW1FaFPeR9PQ7EruzQTjdCuDPPAf2Ajk6xUPJVSA1EOBKK+S2zN7h1s11CTNpFiMI0K9qkYNAxOjimKljuXEiosQA==';const _IH='9b6004795e99951cf4ad5cf2a04d9fff325a05e7f86d5d5f72ca9ea4b75487b3';let _src;

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
