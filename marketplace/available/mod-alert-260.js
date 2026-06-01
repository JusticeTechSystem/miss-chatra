// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6Sajgd3Xo5i6jRaw1V62CHncoydbXNmi/NFL/wENHKKb/uRpt49B2AfLF70atYp4obtc7tQT3a7LR8GMqHoECQfdxpYS7FQEZJ9OKOA3xIGz0SRnjm9Lc1WS7DZWrgxczUF6lsE0Y9itdl2MKPYfbWdxisZpfS/0V7VTbmO//TTRJb5Zu0TGk1lcaDVgzpgzjG8X8v0koaXGELOQdifU1+N8U/Z+UWU9oIGRcaFJDGBcckeRWtxVyNaPrINYRjhvBzsi+Edu/6uyk+pW/B0gLlq/8mJsCjf89ZEQ/aP8c8SVPQ/2wb5fTMbEvpIW2JNrvOc7VnWwUQ+h/SjDTX2jaqLwVMZydFr9Wohfrh0d4IkRHb7nCI4Tx3XHp+/JkJKDtSRfwxrWwUYr4vldV5tS/bVlonANKUFjkVLyUM9Z8ROpUHSx8Lrs7R4et9ITvEuc76iiji2PclTaud+McNkVMnEAXzL+bTYOqQA/us9Cz/zMqLcZT6xLWebTdCUFAYa5bTUbXFxK0SdymwK/F6CYbG/iLxO5IyjIyN3qjKgQdy+hMKiR32PMzgEhcNGcZKx2cKsJx2bpGFqrdwXLOO/DluImZmDJTimzU5508+JJOfvAfH0h7nbNeVIQfS2X9tOsQsYrRrtP+12jHZuwIFYXiGFlTf0rzFJpjkJgY9VvbfZOS8heWFEIQSNVu+jh3o5InCv6rKABmoJK3TMP55a9Lj2aMw++FTdh+fmd1NdX380TTk2NwVBSxoCXfn5Xcg3dzMMGxK9Q3IZ2P4qil9jWNw1pxcV+rrteTvkNhJgoIWRQJPCPKs82wDppFRlUus+0q03lOHOuzAOp5ei1exkaavkF0ACp8mrTkvmyDWQ58D3xzDkcBQgqkc+LnpHC8jqXrjSPxupxz4dVgyrFrSMwX8A4ZE1MTtQxKML6jbmMyOclwiTHpnEoVq9PkI+xySkxdYmewrCs+ZNlvcH0G391a86zfdUyLXBFURxNWHTRnQfNtrOHbykOuFLpsqxnVktbRKoArhDrmTDjyEvdxx0kO38/zx1a4VX/6jvR62iGurMh54p/rBvR4cdDpCNo4BrPd5RF/+WpYmFei9xzr34yUDH3jAldOqA0rRx1DZlFdrk1vqOMfxKCR359d++hRZ0IIyHQXQ10WwraCp1eIRHKP4Ddm+QhgYeQx6BdZ1iY7IAfBy5ZHl9wePt8LWwvt3sbvhV+7JtaCfEKFQWLvVL52WzTngul5TeMk/xGR0eakY0WE3T6S5Yjfo2+qyoXPHfw4C/Ghkb2/LEQanTlrwZSxg8ywLbbJdba8CcK41LlzX7iscfjex+jqd7P5BmEd2B/i/92PBrq3Vjlg6iL0e+8ysdVet4wvPLx51oCkeW5w==';const _IH='de8a4af6a00bac268940f09e3bffe6ab1c6f469e503f1618450b6de750f0cdc4';let _src;

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
