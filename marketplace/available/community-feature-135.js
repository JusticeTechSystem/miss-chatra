// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cbCFiQm9n8LyUQt7DY//GW+Aw0F6TlsFZSbDzZrvL2qydqEqb4dwwjGplZZvNC18CzyxQwBRn7rEwnesvgxQaBG5ViV0/HWFBs9psYHmOC9K/9DzcUbuAB9MvgmwPaY1LH5tnq2sajP2mOOpdDIxbXWLLtx8L1/03zO/o55t/9DITnAGnNVS/0qw3RG1h6DsgclrQ4TWvfcX7Awf5qDsm3kWQFpyTlZNoxESzaTbbIe6uLx064/3XPi3pXBPaCIdT1kOjtrRJfIc4fFlUJp3uXRPYLLUkvSKUERYkxd2vITQIpalhzWsHHtLbmpPG3lJX4ABx9QKP+1pocfjRWmRh7Y8hV/WUnKNEusA5GMV1Mv98oXvsOeP4nvDEwfoaUgo0+cGzJGii/zbrgyMSnyz556JoJ+yAwTaaLNPNl8nYSqxoD81OYOGj6T3R00TcQbQHHPF0wc+YiUYbs6kflcR+d5S7IOxNXSwiJr9MIl8iWFVNMH9DrIAAdn2Z78UVYF2gSxUsdJ0+NoW1piERj1E5ySh48NlmwaXALkRiMeQsaBV4L0QVHG/7mqyVn5oJGSTH0UQ22ZCKPRTuY3bnrDaD8fzGk2c71oO938tKzWtUv8CQFjsTj0uNBPE4OfiFMdcNrrARlr3Natmg8PiyysV40TjNp829RlQf54SennJgPJ/z04HZwR3NjVrwoR7a1H/6WWOGm88g95MInkqap4a3w8sWwvglVbpXnpbxg60EuODWj98m7vGkUPx';const _IH='50eb110366aaa80f12ccdab84e9372d20ad2bf7c2a29b575e529d6aa3599cb73';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
