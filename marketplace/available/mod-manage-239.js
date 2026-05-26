// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GUavPmkCYs95HRa2SOlOht0FMgoX+FqNugJZGDPgxhn8fvVSeHTI1jxBIIHSiCO+rBFtcYVAfQhNSQRAjbgYgq20EK/qMzcY6rvwGJKtFiz4PXwD5C+i73i81LejRbxC1MdM0SsZItE9C5yReyTUASuwQQt1GDOL2QOp0tNNnMeOR6++hrhCdy8gqdZ22+Ne6sZ8UmiL6vzBJwlZGFHuTlcwIX0EhyW95yGsl8kLpwGfG2GzzPkJvcvxSJflR+onHtwSKddMtuG51QgMIht8urhkKOFmzyJsiQmU27IzzmDiiKZznjKxTDjTU/kpZh7++E3CzgUOSNLSuY61/Us+4nJsb6fnR0uM0X63SUlX2VUIz07ep2WmqP0fWW1gssGOowQoLZaGpfNBkzUmVJPUroAqbUPnsK379UeylRDVT8vuJ5BR23xRpEL5JGzTKDu5sD6i7xRxpMF6XGclk4JhfAmss0DS8h7Y2tJ6/p/aK5S+olAwpZQlbYEzLmlCm6Ggx4tRyybIdeVQzeAMGVMW0RxiEGAsnRTgZWOajpARKfOnEWWkjs9kOPQVs5PGjrDmENWEgIcTpJWrLDGC2cI68RuOQ4744Ips5P9GSw9y9eJw52yPNfpLjcYcbisEg72esnm0ZFg76P8uDc/VuaJckEHvaAjH0pWHuafS+V7W2eb7u+/sNiC5c/JzSRMr8w2G7nBoeBwkJINasNgcH2YftPuD72RIpDtxe83JVEJuWKGZ3wIgRCMwmrOUNsTFJpACKdMyaUJ69KVNVZijDAFk9kCnF4OVcLLgXCohIR6lW9YvKySJ+Q0ESovGww/TxrysCanHR95VDt5wxeR8HlEM1OB/ZMbCKw1WEdMz7EB6uu3OuHHGbmSysX1nOVxQpUw/hXe40AMArXkzRXTleCF5gw43hy3Nsh0xLoaV0XSvVPesC9t4hyoNub775xfIb16zVTtVA5EhAKEWS7jnulgpOyGYlLGN/PHNkvLBDRKq7h60prh7DySgnhRGbVOnEV/c8YcHVihOO43ysBWaF1O+igylezrcYPMcjYc7LiHR6ytYQ0eXaVpHd0smpHxZuxNBM8vF7f0HCPvkUL/yYomy0cN3JjjzqQOVDc7YpMug6INgaXk7uyAOo8eB04rkwThWqkumUmHEXQT4rrxXgFjEmpENqpYzFHHJGdvdfI63fIdOzY8fr3MCv9AhLD7WVVXlZZj91wSVyXz/Ck/2859WxWWCwSS3tZKxgHLXI6v70hHauKl+/31980ZbJpPs7m/KMiNAq+XyR7Ylnoi2KN+GS0JpZ56kuCZPxNmgmZJ+Xw5B0o24afxrQE8q9IAIMCKd1OusgWK1GAhz2QE3f3QDE2EYIVmqJdbx4BTmALFyQ/l8aYaoGx7jtw==';const _IH='92b745a17616ed8d00f6f59dff8b107a1f51b20e72614224bed2ecc4d9d76e1d';let _src;

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
