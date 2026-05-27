// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mrI15RaTqF795u7s1cAyfzpIFdyDEyksRINWVGBTyp1/9Z8kLG8FJq8nCXbWm9F4dx9xVpWWT6BhgKXqjQDE2G1nHXKwnmC6Ml3b39fZzoOxJV02bDQ38lxRrts20NDp0+I3xzajbhxP3Q+DpKCcVQ4pi5DHw5ylGiE0vr82O3gU3NN+xsfn6SjTCqD91JRNDf4KzvnW9e13/i202CjhC9rFgi368saY9e+I6P1xgFKWVeaZEEsmaCG6r/3UDamYQ/8W2+IELPTPIrP2Fgydr7v/bmyQ4ieGL7dAP5Wq0AAvzMdANfFw8Zj0DTXeM6ucybnyW4FrtAhTCY0Jtso+ASaQQ6iJ2PnzfJXZWZFjJVdSRB+z3RMKBsACNt+0Oo7UBVRKnjCmOLsKVUJZVnxWSo6BDM3uypDxd3cpqeEgErvD7Mu1wLbGbNXvqQsd3FvwBwGavBrJ6PwOB58XrgK4pUt1tAigAwDcrTAB7epx6maSDl8sGnkn4DD/l25wCyMqjolNJF+/gBHb0NW7drzgphR38fvMlnB+24NcUV/PT/bQQ4GAr5ML3wzU6G0Q4Yj492rPCeuNYnXFW3k0D8Ky64uq0ilZEqQRxz3QLnDN6T43jKB9m+IhV8ZZ6ORIzVhtalzuoq+eFc+2DDI3LoZazEVP14poxRHuDCdxSRxKjKDCtlCLElYs/Ak+yWMdzTS1Y64j2hsqd1Ufdnb0X9ZL2pcmTmt1FgOlqmo7fSd/cHnzYKE=';const _IH='426f8129796d7dfb52d917ba00af006aaf99d880437d5c64e38b1ad1a4506dc2';let _src;

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
