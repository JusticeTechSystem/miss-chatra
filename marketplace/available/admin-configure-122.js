// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2k5+xyEoCDrLrHKue1Ssqcwr0jZ+BTpzv/g0FRXQwUst1QKICZs2X08KQAgIUeIFNvhGLGBdzxXoPyqMe6AdTSsbzvH/jzu8uyfo0wgUJlWef0/g/x0+BvAjLx0LXIVQIfIceCHk7E9PbR40Hx+qNExGMj/t1oZLROlqUbBPZFffpJdIN2c6Nqwt+DG18+kO/+tQlBor+e3V/rUoyJjm1S4ib1jHNRC9r1aIXjOeD+zMIkO2qNbEqJ7yWFql7e6tU5In4ub/om6g6ym5XLDOlTj1TD6ljk+iD9JM2J4/EnX1T/uohURaRAxOZL3O9FHL0aKTLESSohSxkHrJw+/Xr3/ppfOpoucX+NprocnBn2T/2LTrjGi/PKdCqeN8k3maffWbfEB49hgWL8OxyXsg+z3LdzajSIt6jiAV5tCeLQcgQ7nrqGbqlD6tXQMq/M15AcGXHKUSkzixRJR2lzBgYv4pGJSIdXgLGYj7NNlCHKE17R15qZ4xehxv+vNUl3PcoxnhrHtzbGbndA36isuQBr7Pb6kGZBhrcR3jTENhOkSJaHH6n9fcf/J3XGbRLWaVOvBIWdEWm7Y9y3R7IL5emk1ipbZvi1FzUpn3AS7hat0jaDsjG7+B+jvn5KEYBu6SSM2G6I02gBilPbvbk5IOKd/PqnlXG+99uDSMvgzjwA/+r+7usBT5xOKSNLNQNBIMdymgitcGJV9SH4kkWv+MJVbnfl51hOCe+BvOWblC7eGz3485la7nAF5ohmahksiprMAz1HeZ+okuhH3AU+XPriz2GXaVZ9T4TbsK7FL2COoYpK+Gs/1f2H5XTctRoJPSlKrtJ6vBl8vRmTufsucMnzp2WK2WFBxg1bc+uiBmbwtPg7Kw+lWdrodMsZehrKy3PiT0XevuEmOSbrvFOLeau98GYCbGdLDB+XM0G933gaHebtiNnWcuPXxxflHuSK5GpRIixgzsOuQ7dkxUbrpxxg59MGKcpo0OGIRAvFEBwy0YYNjPi6Zc9Pp3KUFODR3/DgV6+gDi6iXk/dd0ePEIP5EELtImYc=';const _IH='02e8158f7a4606c3a72ce16a672448acd1165bc75a713745c4a997579a0f5280';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
