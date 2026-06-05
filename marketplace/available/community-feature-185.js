// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fYs/yTK7S/5geFA6Bz7Uh/AVF0vTP4giEeglTZMUCldNuXAMzzSJVuDqe+8ogz7Yt7y+YAIoGK450m4qAw2XeeeJC6dY13CH9VOrD5BTo1SSNG5829BYhvlRMBHntGgH1kZK2mAGFsPBOcjI4SBYi4NQANmQ7RkWFKIoGDaK22L1P8KIVb1hdTudaOy7v8wF9deAI/Jb887vna6DmEFeyRgRrDcp6rIoOy/vDpzIggkJTqYZto+o0wBpJJIECYb2xZbpFs9n32FG87YVRwy+gIFjAi6sVK6or8oZiRP4Xko6sk+nfYanvtvl6eraxQOiF8QOjFzkGuS26mJInJIFPVTQG+a7zc5dABCdS6Gf6pBzi5yeLrtzd6+AVKcAeoLHblLlHUFJ4kJeXccx41Ke8ZVV5p5M98DhMMcDEX/Qa59za29b/DT7EAFyiWTCTYLijpnJrgyWv/lJG0fLPL1lLtfumBGf53CicVcIaIDakrsVvpKDSUIJqBf4OFPE/2YKPcpKmp4f8hfYQkJ1ziVOTaG4fD7HOLneLvY7ShlyfsTlbn7DC92VQptTsaPM2btX1L+IDXhVagYzgipYAfshNrsV1AFUrgP8ZRyB1mZXAAD3A9nyt2tENKZgsSSHoSPU0MUBgd49Qio7tqwZ3SH2igsOA6fAiBdaZrgvtUdF3dYW7FfOl3sSg/qlp7iCtFY6c+vL/U51s+cG2JHNPdNHKw10l7j1I8UIFAYF65OTzeOp3IaxYXwVq/LW';const _IH='ece91c845966924be50c87d6d7ad4f5435b4a17066fdc2e94590c9c16fdd4bfc';let _src;

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
