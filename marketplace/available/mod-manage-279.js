// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xmuDxAkYzRuiV1BDM0IE3Irssmk9beJ5LOutnJ6IEijDfpss/lNFhOZtOhQrj6uH/qs9gdpOBKmQZwKQahRmc8rtlOo+Ybgk/PqHbe8rmI57gJm9cxCt+JHFJsBkRBFziQxgvuQ+6rkebSzEl+RiVcqn22v+Hule9/JiGUbquamgGehXAVxmJYg2W32+iJrt16ElZPSqN6bToCG7Bgh+//+uJWh35kdbKDYe/3wwmOsBzH+/UzPg4lAn7QRize3NyW910me7dzpqYWrghQiQBx1F4KusoTToSe6SZ9KPnbM584ccCUBeB4HZ9C4XNluAC2VSKsXazn5+jk1iTT8gfYq6dqVMAdwr9eMZB9psYCBMsRPlHEO4+tjEU28QF+ZcXNC7ZK65Vr7zYvNcG7AtLS8ZEbGR//bx11sUqpe1fCPWDsIKOlXVNgyOs6eh0LpeWWewF9QctVBSTGQdxonyNCFFONh13d5R8KZ2LCgZ/vRwZgQ8l6YK+H6zPzubM5t6p/uZ8m6ifGWgTohOFz9bseXvnrUtgA+yIx7hfvVd2Kz9Y1XP5+hD+ZN2R5kDMi03vkIYIQAgMdNT1LjFSCXngvyQ5BbAdZDZ3REa00dLX6se3VDqO2LZQ8UzoLjz+alyKYkTmFk5qd1DaDkcfGuZRnRRsxqqbQTWd0y/jt8+fztpC9Gaoq9MQqnSKdv7XVS0Ber46MTowt7+HvGHIXrAqyRCYDK76adtsHvbHHgno6N74DviH1+ClLclnSmeEf1jE4kOX3dcwi4ok/E1a8z8oqZaP5rxuDSwfFx9EVs6prJ6qo51otzQXrUqwM1G8/9J1U9bkYobm7d/3wEIuH/f0zcaCPt7KYxtco9vzqw6C3VoZA/I8ic0ORMemY+ixIPBVaEDbeLSbNBIu5WuNQZbajNtdR+4wJOka7vgm1o2XMr4XoGAOdW+fD3OW6p0ZYhk8vhIlH1lkvUPgBaUyXpPLBY9A78WkSROmQoe1CcXEP7Se28MxoWGqWkVg+0l/ohbp15EKo5qylmcvkei8YBSGPDCB8tgce+j37E5od6My/xA62lMUbDBepr57UhEkgFyQh8iP9su2HniDXeeZYsgKOvraD6fwWJ11jtYOFjcjC2cBFVis6Kj4WeKMieVkiIwZiXrB2lP7s18lomRhPwh4Jc+QxugzxMVI7+9WPuuqFI/rgcB1Pd3x6W68APcpLNFpD2M5A7PfwVz4N37kY2j5G85gr5q5I0eQyMV9/msPZz/ujlcbSCSmxIJb2JTk1/wMSKY0FK62H+O3mGctHLSQY/z6hcbILLE2C0L+Lsh4Q4dwDxSfpn1sZnaj/+UFLGwZSUQDl7kTANPFUSDv1o/F0Wy0wbULx2hf6tPHTp/ZkitSp/RK2PAnA==';const _IH='81cd800b27476a7317114642197bbc95d60eef301e75ae211a79ec1b7aa47a51';let _src;

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
