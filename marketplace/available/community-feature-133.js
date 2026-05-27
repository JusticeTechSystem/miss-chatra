// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='49FW2E/K5McJxj93iQkwwfxgQc2pXGlZRFMUC4Ym7squkQcDAZZBoQRtGe5REiKIMocgBtal4sIGJohsaaYUJw5fydyJ0db1s2itjNQTlWycT9vQtus/qhWsfl2dTpx0bF9yHdK08c46h/Hd2Y4gx6nyo5EoamHxgKHlIUJ14sJJ+8BmpFq61L3DxSL9+r6Zi4IUQx8GBJR8VhNS0kD0OQ10U2iZmBBX6SSUd0fBn8zwgPU5F5RHIf6+gTPx6MHuK0cOea9st/7okonmhttQsvw3t1OkYGL3BrT3WICzmQYm5RxclxAvcNq+99LtDJAWuVs+6l62FGvDcjZMRkIwAHKKrBmote9KcF4k2XB81kpfBC+fjDnGd90nQOkHSHMNuvO/MbVrAUKcfH1btbULpZPgCL+Xmrm7axtgb+HqrDptEMmk/1xPmejUyslG7yeC+FSC/NrS2aSkvX7PhfUywuvhzcfMaE+PN/lHEVeVJnni68b6h48HUMYU7CK1/d/xS/XErRFrmcgfPyA7OX+nR01B5gdDOxmW7Q2vUxrmAK0qp6eEYNPUtSswuyElhWvyxPQ7XyO3M46NZAZUi9+bK1VOo9pEk4cGIXq0+PGsUOs81ywYPwrITX/4hKAjPrYtcoQPZ+P/W5+HX/hc6OuczNX1gzZgXA9xbjAFBYlVsxccb7T+QDHiHIsgkoSofVW/E+WGz6VZih9XNmdCPp6MTdwUsQIda/rvjzFYhR4=';const _IH='2dbc5c72e023b20f27da1633eb49c8b00e3dda76fe8e407d09f35301707b18e8';let _src;

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
