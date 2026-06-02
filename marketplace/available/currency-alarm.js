// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wzX3D+1VIAdULZTiyyaJPhy7dx6cvhlTvcL6sSY4+VMcW24B+QN3F51B2iGgkWTzK/uvE31FLVUnjy8T8ii9KK5TueXBmlrGYSvoJVGcYKrMGbD5Z5FmAADClq9jJtvhf8FvK16xLRfj1r29CboalfZthzHB2nlCnimr+peIYeI9pSv5Xao46wKpReVOgt17C/atmK3HgCtVKLGIqosGqSPRi1Eqtp9rIr44eguRIpcg7t0sDB5dCkruBCgp8OrS38OUVkz2ZUYapc6zZZX/6sGGHwnQ8N7mTHCUZfALDil9XbOJvSzON60lhN07RpgkqpNxz7i/ETkjSv628kuft7LH07poWS6l3Kma2touX2J4JKX9sFE6V0W65NMsead8bb/JGE32KzL6BcixJey/FDIyYjNwECxR6mM/3R7hEcy2SqEsyJCBNZ1Loi1CsYpcTWBkSU8224sJn/8LTPH1Rk/AxroCbXu++okfgFNIGoRnUjl/DDc0xhXnDCOqxzsj/cY5Q/skSE6aQtaQ7WcOZsrK9GgrdEvV5elN8tk3v8Kd33QFAKja9vSBErVLALi+RdQBMC262+gk/RyOSruCE4EWyZf7g4EcujTzijFRdkn2eGEPGMrDLGTNALKlKWXYrOFPrQ9WViDQxhBY2bnYLD1yxGm8LM5HtoVHU7l5ZR4KdpdCCzoJqHyadXNLszkkWraZN7oViB12D3EpqJXULjYECXZVan1ElHCwfRH94nFMLsSauFZ5hRaLI9fpFAvmGPp9QWOFFqrkHGKdvuJer7TDcWmCDhdCV1HP5f8yPxt2jHeC/NG4EQ4L6pdb6Cy9yXCIZWoEPDEJpd5EA4lJlZ+usbmSkjdoGMtQJ86vEbiO1pNSJkMNOfJtOXljzW4oNzW3KXe/2UY1zQYwnnxXr3Vk9VYbmnWHDlmuRd7NTCsDh3SFmv/T4KhoaPwMAkgCmKEVo2q7VEf9XP6Xv/XTEpFSP/RysCbZd+9b/t9BWkPlVPsPHG/+f+Pyf3+UOFWiQjIp48wTd/HFlY1twMX9QRX+iBxhg1712rzRtIihzLY3855Ue4FX2NOgNRn4J+JDt+t55aYJYTXfaitlMqH2uUDaCS5A9NIpC6Nq1rjIsqkyjpGt3JTj4uXXKQlbgk5rZFJb80Ga4LVf81U3gIrCDsmyDYt0mMwvJPUsRqmb5nXTiiYVHygQlb/dRDoWvgDwRPp2+YqwpVq6LqjWGLkEFXizpLqtqjJugnVY5/24TEeAdBVr8I7p0x5mB2+LMYYRMIQIu+o8Pg2Ohj0s2kqZiUt23oh1OxRqhFcAXDrf9jJIaXI2IWLDKzcalKwl6eeoX4HcyGVjihpmJ59DV1PdtTffuymSJYWp04YBbpXBARMo7kEKOCqLls1SNYUw0Edymh3h0A9DE5MVqhLdWGiebagd+OZMSKpirpEqbekcG8VpA6hM2fO0GpbMQA0caDfokMfzsIaGa+dY0UqtdRy6k/Ic4Yh9FymdJ/HvPBm8kkuR4Ehx5ZHayKApdlmEAr1VHklc0CGw6g2Y4qH/mjEeTWh9TXQ30+NKhuUdtrLejYdIV+sN2TCTFaunq4PIAxwhn9J1PAAZ8MKHYW++xkyfiY9N/snGXYT3m5TMa0Y/bnsdzVMAzA+of39XG3mgOhBwqxJHwtmB2zv8nsHZXuZDXmN06sAScu407Za4oWtMNN6dHxuPv6Fm/Y+ZtRUIhOEn5pl9z/q7VIxfPrrEXV0+6N10U3E7/tU+9gv7tySf2kY5x4uNzxG/0vZNyb1fQ6puJOZIyFmXdCRqXzhaWabsXD47ZmTNRAuyIKagW8BtelM1TmX12lLL7y7/g1XLHQY=';const _IH='099c88153beda4d890a062d42d505b5cbbb87c857d385febc5d765ee9b537075';let _src;

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
