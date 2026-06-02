// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+4LKhViZereyPGuS97nBigbsD0WsXcdy60r7DClHNZUUnAkuBORVL4HWf+oOJd0KUcoMivimr8YvuIntFFuniH3efqyigmEj1x2/mVVGM8Jj5hKCTiRUqn31PKS0fDJQARlrxqIPJSi179iTpgCbrCCLQuhXvvRH3JwBqdxURfSuHDUys74XH+P6rh08iOWJqd6gX3j2RDgcsj8EkkpRrYBHpvPOBVgIRrqE9QQ8ISlD0mwxSsiJgqAsTH4Izyfhm2sNaI92b7IaQjegL6K3kMRopIE5MMw/NjGIpZ7q2zKC1d7cNFVgIfLOsPvoAsPsBBy9OfO2Y7EL1PR5/xGiyGcpO6m+ocmHJuEEcH6OHbsDpJmLiXEunJ+GUzlkVW4ureohc1J9eOlchkXG6mEUFXx+IYYZIi45fn2KEzeV3kkeJj3S+JJAKKKyDTIysy78erx+WXRNvoi+P+gUXJJb5e/6quBxNsp0ZDJtySUCzltjBPiD5s1U/HqIz+/H7M2Khp1mNoWz3T2nsbPPh+hD5X8Kw1KsDCHQRnETKyDIjYFouIcWGZTdq9HC8bJbEeGW6Vr/8THVqb/1ko8XSGAkzeX4QgjTARhVHh67f3XRifdcrTGjxDkAQHXB5WrNFHxBXhnM0Ebkw9wvJ2vU2E2PB0z2BLVTipcpdcntc0hxVpn2C5nbxftho/RG2KGo11yjW5DKw/goX7a6h93n3ZdeMTQc99pilg1jiQqWHi1OgdD+X2L3vKXHjWgtwVcmTd/W9IpDq0KsutGJ/slT7PMHJEPXGQCo5qC3GAR4Lii+8wHRIEHzjMM8/4fEzok2MOengnkD4DRiU4wZe+g59bYuTNP/bWMEeIBhcUokrU+SG+OsYdJqNGEVW1Qw5ekZvT/eHS1MsCc+a+B4APz43IdSIVj795F4Fwtx5HDBITEzZ9CBLYrvuVxUtE/lOFh5ZZVEZvlt7TsxR6MPmJz43uThaOchg23U2x0N0sXRTNpNPIb/L/BWyY14StyIAYBXHYZfDobcWwUD1nFjVG33zJkZAeVTW05xQPqOIz+WyUN/+1cOsvyg0hIA+KVfAxLaSRGgck1OivIdp6I4rVxjOUSNL59Fz7xmyKfqxs2gk+XWGEfzE/566bK23rRelsVnv+GdG4AXNDKXbc1WwvTQqTtaeLLZimZS8V/8G1Xf9aFdLQ10ZE1FtP7fpiz6DW8AAqk36oiMHdWx';const _IH='b2cae9d5bd28660b9485541f3dd53fc4c04295834c7a28e1861296c29fa040f6';let _src;

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
