// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LIglEIGYLcSpug7n6FCBrEJf4fiQnS9cnxHcyyLsbqFFr3acxrZ/sHzH4tA1uLJqzOJ1pqTsk0n31BirR/voDkUh+DyQKnWEtbCEalNft/aBJ4xnGR3DzF62dTp78fS4zLnBccQ/4AGOg/uqKlCyPq0VEFqE5wfdZ8rze/6hl++GRn0Q2rpr3pdTuS130JDM3TNxARcwxrr/hOihdz4RxeTZ8HSArGu9UtlRabsq05RKIe8hhnrH5CGe0W6zf4ghkJ0raeGYS4LxJxkMN00cjVcPDr64d7uGYF8UMwYdpwjhRGMcQ4ihYLGnLOkeLsR2rTOWsQRX0Ince1HoBCN5S2bCY/FsfR60LzsTBoIICBpqBCUoV8OcM+1WeipUoLtjX7UWKcjlQKgZ71yHRdrnhI4ok4d323bslyLw4+NgNtQksDn7xveOUhmC75SYvZlkIfsSjWICpASDbncMMCyXT7IBWaEWY+31SprqPAdb0D77UQ/boDaDLK2isYFh847Se8CRdmh3CJPP5yvQkH47aeKJ4Amqh/Gj8mJsIZFGSn4ZHWn6fOahVvLSJsIqo6PwY8ZOsHVwO1kHrRTPIrRibhr6NqINaiFZKQZZTeO1fwxGTWUdtczASUiKdptvZ0W0VFSxxNi0qCST0+9GAaFQ5qCJHyH6bLJyTcb2GnGyYKokMX8dt/wiHAndTwElRJcTbL3EdKVQlrszPBvtiY8rJpV+cVLANwJcPvRCvBOGqGA+dJ2KLaAABS2N8VcAd6SnJazUa5f46UHzsmr3g5w92ARYz85AsDze6IuSmLqivCtein2AbIN5A6afuCJBx5vadTQpMFGRmWa2NjQRUndjDiYzmmiJoLwqAZY3IZ1A7rkTp3GyiiA5JT8qLJJtxlz+x3/iO9QiXDv4tPIbMyYS+EjZ5ExhKIUXgtc0cCNQIDvylS0oXgZkNGzXmPOOg5Vp4wGm+aWYLpCVOrjW0iPLlCN/Frj8KwerlMM/4eeL7xm9JmmOD28jHq2aEhj+t/GLsuW84w==';const _IH='ee30e2b910f4c047eb1bbc3dbd6d7f268ace11482b4bf40b09c6f674509c5417';let _src;

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
