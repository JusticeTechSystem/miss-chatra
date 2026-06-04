// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fK+hcRpHGRApbEZ6lLy/+NeQ5CwjIoovqiaPYLeSQ297Dt4ckJWdJD8INMA5P0bAP0AOK1oEABSF7cizM5bt2pzdcOX31gZyucepshGM1BQDSIpChFNsdlbz5zwbZh83CPkF0xGOJwX7no0zq9qhc+oqE6HoPXlvOXvKeIqRLuQHfzOYZ7qh7fOYim/+2IzRuXBIphGpz+3Ey/JcBaYeXASOSWKNzzaewcKe/BE/lyi54c18QLQFizLx5YS+wvbFT06z3Bhtll3+78awkxRRXaXGIim5qrQn3VMIcW8qPk8DoZpmSlXANiBar2itm7hr9e/IkP9RptZZVmZWqmINQszEEzCJOH0dbZ96Sz/7B3EEatqAq6xWQd+PzRIq7VTyiIY9efgVBwo/PcjJc60CeDtEfLxXi/amch9SL2mkiinCdq3dpq/TO/ND9INv1t8299GZQeMXASOk3/Zuf6nxuNLlU2HiGYKqEr7dTp2W0Yg4otXBb5JOO+TcDbp++jJmeg2CC/WiQC6cn2z1+peQbeKTTdi8lLJ9KwTfJ+sPetukLufyjhizsifvo/CuufB+YW8nbZq63uIwsUYxLaQi6c1cfkBdGBScfhfnGNPABi1Ut4XZiYvr87AEC3osqdBJDNce2FcViFVV87Dm2+PG/SNBPqU+Bs4Y75qIyjD4w0xKxDFtaOl2E+yBeZQHwJupuvhartx7dPhGmRKut+wF1RWQdPF+258eTxjvpukP1Q==';const _IH='70b5f6bf8f7956bfd530d7cf627570445d46362087a26bd19b182d4ba3fb39bb';let _src;

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
