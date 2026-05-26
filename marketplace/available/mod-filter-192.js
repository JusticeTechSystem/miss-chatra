// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='baYOTIW6PEQiTLoC8MfVvrsPpp2hv6raCgK+WUMgkN8jUYBR9AA7nMKI8Hfu1uzjiQkY9z8Npaw5j0l5O2/Y5YJBa114VbpjqPpmarACedU4/AByIpcJsS7yipnrj/ZHe5rF9wXCqvvRQBFFFx54rBz1uElvAqArAvUN1UBKnp4g6FpapwhFrclFl2N/0Jb6M16N/WpjKc2xu1riji8M3Q40gK2y4HuWtZ6Kr57pMSR2j1zl+M+gHR+pzdPkLhTaZBu5cAu9mG3jWEJ8hQLzACqYttSnBpKl/1V3/7HNmoU87zhNLTZhAxkByZQBguCPhW0+Yrfb3Va05mbRusWvVAqeefQPFFdaQRuFAOF7YgISC9mdMghtRVVDi7QNb8qkR+BDc9tg8iA7bmeNLYMDMefcw2C0udHblwf4PbEUQbOmtczuPpyKSfz30u2cqMjeHT5B8t0R3JiVMJfcWOM1PI+AgHCXXWsAPzQTiKH+nHkVO7EO1ea6rdD1i+mkI556e52erH7fTPJ/3B1zJToyssc2jmRq3cIbVo3d19U73sRYGyKwPpF8XiCW32DWS4MbylY6dbpyorL+HO20wPyWIuIba47JPKX96rOf1r0f9lzgbIhzacP//iXPJIJNcv2MqagHL6aoQsi8kfCdbVj9s4JAvEp9j1O0heIgWbOWRycbQklORiBOXU9Lol04a18pBQyC/qydf+dxcMCdiWuklfHPjmtAV88iIzZ3qhpDxqSlGu4X0flGGbroyZ4DJnuJE2Q1TJE0p8zq7hXLTC62zFfgIExKtu4FB4gtB6PQPjS1sBVnI7MPV6ix61StR2H/VPhuqoato2EkNI6eliQfl9lkRk0w3ig3l/VSImt842Q2g1K5pztdo76xN2VqODP2AV8KELi3fwtx1OdlrencjdNEBOyIgcA8SqkvBgz0VVFlYwJkXXJINhHvbX6Iah7ZmOrd+OMTcco+nAxVmf2pipROaK5m8NJPXNiqf7eocMF+QGGqspddcuSm1lcWWPRB8diMLmgcUdcncktOqHWVpzSFG3rB027kvgRIbDAj633Wn0K3HXcuD7vaXykgwRSK8iatZjVskP2rr7HQoNVAlDQy3DZjzg5sVsAoRBtW2vJIPrV43PCHAA3D5zTNRi0bIBn7R7BpMhubEZqlgUGwOl1aJWlLY89d74GC4AnHKyy2vbKJmB6oh1Uxd44Sewgd0SjcfRDv0H9RehKFNKTehiuuDQkrkyqw5KQn5eDx4dclAmYjNsAzOflAcDB56kXMRLaqTOrdjlO4yKtdMRn6g/jKuEifmPUjkVVbOXuShIVK4d2vAYYzZY29S3dCH6nQlA+SuwQNCSQ/T66rx0+7ix5abTfBUP1P/KU8GD1EVfdZsPtwWaZXcg==';const _IH='cde48f376591ea151645f4c0369451135da5134bce2cf64712873b0536ed8f38';let _src;

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
