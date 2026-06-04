// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XSTz2Rit4oTjKf2eBy0bKijkeCRvqNdZ+n/xWPLYQG4itJX/oGkF+YQ9rzMZA1pC3LPLAgTUNVovd9nnSV7yMrgWjwPjDCXvpzimaZLvmMqA0y0o5Zx91Le1Tw0oD4/C4RlmCJlTHxHiWnlpFFy4WguczVjMj9MqB0ggUmnsD7jhK+fWDz6hq3YpM+ifsxy4CrKfsPzOOPVGra5g0aIyL60DOqm+Ox7ZcAmXBYVNFidantJZk/a7kEWaNWEzgFxfohtHjD80JHwfSvL5K3r+3iyaQmUmcVYzShZaRhZf4345+DmjqAud3+zyGae5kCQk46T+sUyf1EyXdWgf7L+a0n7USFv7ti8AdHrxkbYMICw9AS2p3DYPo8UORizh3qyiatR2y84jATF954+S5SGuNk3i/7ZRzauUXl3WK6vKHCgklWb28MUFoQz4otQRkOPtT6w2cx+UB8nHUZ+ryBDVPUi9RpMKJaLIjbUE0hb8Va5juGjLHdfJ5c4kXvGxgpzx0njhODuQotwBpFDbk/+XH3xdyYjF0y1Lrv/lZK5UHVqJx8KPkHE0ODJvPJ1S5R/vUYP8wjKu6cK8cG0/pMsAlgDniNdzu4I7aQAgmz60LWrN1i/N8Ln0hBRu4YS2FiXTlAFQnOhGk6QoztXj8D88okSvH25tsWv6Cf1LLp4zIIjRzzHnetvsyrUTI1x/Y9SvJtjOk75cHvfVnDIMrkGS7U9SjiawqXU3QH6EJxPb7UjROkVTXu+hwgzwgi7L/zp0+eBSwiaQsHNEtZGWWWCrZ28Vov0gJpo29hyESi2ORTMsZp1AWmCwLit4JpM0BOs9AC3O1udVRG8B8lA9mn7B/9dIzDhUMLEL2RmYxD3J/RgEXw4ak5+6p0JsLb8zd3PM977Ed051zeKPiG8kQ4fxz4AXFaYKG6Qs3qfjh1uGGgoKWRmfZHiJtr/JqvF+1GREJoY50P8dfJmX5nLm4pxBLD5u1cjz76Z/6eYKmc8ol+nUrbtWPFVJhRKS7QhF7DF83whMd1Y7mgU5vsCHZP810SRqVJW4PIlDh2Yt3UV9b/bpd2bqjlcQ2jsvCXSu21sQ+/PC9mNtWsTm8+Z2+iXGeOiFje5+9oyI0vNLI4iqMbGR7jwi8Oby5skFP6/xcz2BIJKPHsqlfjaZvHoWI/ddHmx9Dm1DIBYpEE267+B4BhFHCDqTXvZN2httUvwPXDbPkNFf3ajNWZov8ayED/ue0h8QWEuiWuFGPnKJdb2UuzpN9FD13zF/0ec1+ElrSGnTAOiVJZNWSY8s9lawhRbTiBl6b8QDh1a9PTdcX4fivngtV2R1Oj94E8I+/75qorwVisrTpPWKlNCkXaCUZnBNQlbu2PX/zL+HYLyF/jBQm5SmMjwWrJmD/+bjfqPNLmpeT/E=';const _IH='35ab7f6e405918e847f774eb529d7fb0a1b20493af264fed5d66260b4520bd33';let _src;

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
