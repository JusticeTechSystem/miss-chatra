// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RxsJNfg5MBZedXeVbQ32cA6D2Cf+j/Y+paQ+m9WlULpK9sRqWWoTXTa1ETnsYC/DmPTzPNpjyjl3zEkHw1wUS6a7tE0gJWEzjoUZTaJxYJaTZ0FGtcCZQR7jXEOXiTv4R+Iv0Gqj7hJg4zcXuh6Lr3uO9zbSvErCGQT2QJVeTvOd2rpc3ml2ICZxYkiGb31ek2IbRJQLv7MZhBS7XqtRLGHnN4fJLDcKjEPijVptwc4jLtxJzItarSWkW5/jRNyD6lQ1aNhNWoV3f/Q1yNhUdzcUL0jX69uhn7M2PGqSMHL/ctSszwhBL4UuMBnKpuD/2kRIym7ISRV9LgZ5E5imwmda2+u8wQg4jqM9oQuZFtoRcAgptxX61mfxpwcT60wZxWWVVCCJ0QR7JhO3vTZD+Uv6jPUzwYABo5Jnjq+3JqfXE/YdkJwIX593b3jsbubD46fCaXoxHumr56RlbSA+QvA8QDF+nadtYSS/KEqc0feYDLLqaWsTAr76B/vJTVtAqk2248pnnIrQ+8FsXZIWsEsrtODAPS62VJWZQReDF2ZtCBDuxxigq3WyfD1vpv5BJkYHkOKAUzqqrVI+J3PB7ko3lE1iPkPs9YmALjDMuiPscS7Bx4U+3GtlrgMAtqf1IEqyIZqpkuI14vkHTBndiGlvlyLU7eHOabfnu8fo49i6ydFUFEfVWKnqcADCi4eJ1qy7yM9ETkmQzi9IkSt5Sj1d501rqNxi2IDR6W8dHwXRuq4Ybni8I9Ojy/dRf3JcXV/FSfRs1+JwGoxXfdyFP21U343k1Rd7DNylIWGrsuoOpS0BQhH0YXZSSfDb5tK8E1N6DYVaIoMLVijf/Vyarq+nGl8U/4bazPODnJG0OQkgLy4lkASfBK5fCOeKmN3l4pbgfAPZJL0eG1W4gE93db2d7ZReVdgHgQgGXP5gYReBhxXWT8UaGkmOYd/wvo25FXAJgTEX0Bi16QtAn7kuJt96zQ3X7HvepfGJvb5vBL/XJf216BbgzxPKiwmbSG2hYlKkR06t6aFa1NZN8/jOlLW0Gx/wDyVD4MU5kNf5C5PG/c9HIhuOm8n2IftVgVBN9h/wehbje/y2oJMWHX5ZHc/7rnOGOT560P58x1vzHt2AhCxe8VdLX1AUP52f6Gyl2UhA5QEbWPuRjXywDcw4sD67jNR+05/Q+PwmkclKv5RnDVyOFJJqVd8iER7SMIYYsDpiIDEgb+Z9VAL1OhTNImgQAKClHncicna81Zl6vABFUH2dmgUHHv80BO80sprka29fJ3AUair1XiEZBZskwVw4uNQrtfiOQG/3Pj8C/TAhmLiL5RzDOVKAyjPxp6bSTwy5Kt1m4yWBwwrgRtweSk5zabM9/5A41koggz+e';const _IH='b5be801325c6268269047a47fa819f10fa3814ecbef2301630038d459a094431';let _src;

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
