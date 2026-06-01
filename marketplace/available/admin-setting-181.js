// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/rw7HqAjAdsErEyMJrHvUmd8km89ymw1uhKYhEqY97Kda+r5zOD7OyqfUJO59GX1KJwpldc3eixp/cHH/Zpny2vOIOhrCQ91IwdoKEE9T+AzEksTMg8o/EJL5T/NFe4u36h6jIADYDTWlZwNn3BdPg5NXXOkWv7gbkMexIzv4prRrWrvZMkucpEKD5KWnoebJg49u8/gWxVq35cx1C06HLskQ2TVrvwvOCYYTzJg8b+paAY3t9P6nloOyX4V4HGTg0sIvi+jrsM1nWAKp+/lYCrDAAqFTBKtuK8f3zXejEK0O4MbtQt/uBQpKNwd1O5cJKGR17nUUumpwC+a6AVJ3GAuy6SgQ2R6ae5VEhcVdVOQbYRaXlwGGtnXNtby3p5ywsQDz8MYRBPBI0MzUL28kEjfbuIN78sPwuhiM5vX3Au6dcwx58YT0192Y4xUJGoNzs+vDxX3+yaRvjkecfCBnx9Oj0uKPLzXiF1KA12BQ4MKx7l64t4HQ+Ja6undShhpX86N0pBxnb5ITYICd4P6ma1nm3hA4ahNjZJrI5wyjFbpD3ScuY6hdhpOyQrlJQYm9lIKpnNAu/RUC4dfnAEr5YL9EbfDJRI7ckRZxcqw6CuvfI3dXPVA5jSslHmkxBl2nqmSi6DvLjCy9NMGdsN2VrIo/MIsGpzBp5uWvCmC8+nzCIBZJbj9yQ8EKKQUg/rB+LPGZD/IttLJG+Yana/j7jAUUbQ4i65UqIliEMuJQVl+Dq9OOwlgUQq5xk0xsbLywT734cGxuRk2hdLIh86P71Nl+o7VU1j9zOJ1EkD9xz2Oqt54HQxfMXqSmyYN6qp2eF+p0lWhwNjT9T0BhV8kWvJPZRlJR/ki77c9EE8PtjGyngBypns/AAVXMvw6bHWIBWYIe8gexJqNu8rwTxa2TqJGSGOnzVMBBCMCfoeSuQATzGiobXuVYB//LfA969vtCx7brate5n6cSPlJyo5pfnd3IpgB6VfqqbSajCDvAkwCIUXDmvAPlYmkJRcmCmccUaX8ugbqDoz';const _IH='ac1d41f36f77b49a32af80c166d06ecef06f9492086d401c51ee01612bb12928';let _src;

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
