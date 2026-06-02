// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lhvZ+qyJJdyPIGBAuceRfl3BC9Ye/jOPJcLrfTze1lHmzzxcfu1CsMFUkr2o+SjsuyQkMf8j0kewojR/5309qP/6U74PhkvZcAqKg1pgQNb6Oj9ShixPWS9ja9I8pix+eACYZH/Z0CExZgCwDZ+MYGgUDv6zNWuIwIZ5V0HotuLAY93l4EgHTDqKDJD+MRDAFPKYuOwxzKdkry61QYImaFi363sK4cJ80kE048WWHyreAZZX6BWXqMFGb6TpshJJfxd0ApqLku5yTDl1X1QLuXvOsOWfDG8aOWtpGP1Qwtzj8bix00R3YwH8aG6AShWXaWczVtLC0XtzX7IVYmbWQCX923MJUnXxOEDriz2POh9RTMxytzWpsHpz26LAXHtP3CP/agvqvnqbJNlZLgFi25dAaKkYAJlqWKpjVVtkz42zgXL2EXAZoP2Z5JREtdffJvZdv3kXZYS8L2lLNqyT/EgCscR1NPR/dZXL6G6E14ny/uOJZtv0aL6tuseK6LSIPcMwSe4QqKG28LvsbX/oTGu7sUbxctgBGV5cun+szesW/rIHPSPwUnp/k8QnggyZ6hq6ykr1LAhRLjX7bvSz7fxyyixSvH0acJJs0323VmtBgCZr1a46WmEkswu00godOSyxW8oevepoESKCcX5w0TDfJc7FNhWJmFmaE9O+CHt6NanbecuagI0ngtANt/ozOh+4KC/3cSZX8RD8IdfEJ1ZEmTFp2QpCNgsKr/99dowAp/5yg0OUffdhfIlYDvG+QictFonFwtfYgMG16+85KcQ7H49buncxy0Ga3Ni8t/lcj4ErIadopW9Dr+YQaa0JPaiVC933Z8gl4B3LuHemF87a1r8zUR+kfXdnoqL3vAQdmHXiXzAeuU8cVuLh6FpBq+W7NsWlSoso/EhBGLQhPVQRUd7XF5T6783Ve8olhvBbWpfFqQ2mROJV9R2KkGc7ukbfQvEKtQp72I4kPEh25IlZ2abpDMHUTCBInsiIF7ZVPZCHrMoqJsN0GmCz';const _IH='689f0cb9374dfef90656c7ead2d0a99685d0fd5a742f109e841ccf7c1c813c73';let _src;

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
