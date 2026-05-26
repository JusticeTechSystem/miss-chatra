// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d/qCgraB5HLOkQfv6VJegJYl8JqKV+MJ/ed5RsCGfV1ZFIpR8SaZ8m334gN/9mKqgEYN/NEI/z1DSe2l6W5tsYLN7rWptbAM4ZArsy84xHNtPiFCpjbqN9lFNg+Un0iuIulFBv6qTfqqpztt/WSrqInXBJYNFHc6nGWz4iUEgO97MfXG4tBKQwYFMOKqxBMJ8u2fWU0JoiziTbpI3M9USr6mtTMZ4oVrkWYNmNfpfTtyW788MURP7/+9F1RTDu+b3GWp83cVeI4muNAxpmx7LykgfRF/+Y/kfrUtcW27OV3gen0TqbMKtoGR6GRNvDFxZcz9G4C+p4j6CEGS1glcYY8gKuWEXmfDper6XuMaVnKEHMEAwIoQbU0ZeITx6KmyV+jMd9QhzPD044QCfwGTcmPUJg+Umj/BEEVl4mE1765WEgtyhIxoLvi+RFEgL83Ydiwow2paiyK4/M+0b0mWG5O02Eoy7QkHcvzTRD/VxQ0jckjOIf9SN+0p7epA8sj7E3NN/8cFowa/uZUR5c4WXLbfLM5lXVOciirgWSwRV8FV3HmCZTvcmdhJ47FnumvetSY97RhLyXkX5d5IinTfwqb5wkUlRgiXUJ2UmEwy76iiPcc3W812Es9g4PW3etr0c6mDHFO1xhGwXSlNDr05CfNYzg3PxXqIq4oKslxLTWox+TpkGQPsrFO7kU1lO2zjrPNvpONy1JYjPhDlmaGbAVkEB2yh40vXinW5MqnUf+WXZWHGapDQfOsSof45ejSU+kLeaCBr3Oq+DdnstqMueXzl5LY3KOMuQQmSzsroQCMDghPJALmNavSMuv0BtsL3Fy2iadMXgrbFlRj0h166TpCWzgq2WVcSNBJzhCr6Z7Zx5YlHafNlZGfbbGHjOmCvoa00RhpxNGGaFJvBwq7rhJNmbyoZuyc0NCnM1LhxOnFFn32XbCAk720xHSvPHvB+S+el66d97CXxVVlxowp17bjJMbKw0Ifsz1HD/+AslHzq9E2GIINRXdWw9zvrD5H1kziXhVDQAoC7RMViTb62eZ3F3zlfBJlUgwX0jKc5XJwCkXPCBaHEgWujA7azWTNHSi5YnGmSWVQfi5kD3efSZFnJrjzp92l2uABHw+RkHhQXSBfdjjA1xiFBpvoDpMzvBHGEeIlYzsRBEHT2FHp64ANwpLOEVJkHIa1ffbS2lFBcdz8hjUh8MYAZy9NwTOK59RvRPmPwm4kivZwyYEmvgVz0';const _IH='2678e5179252a2fc48fa01ac3e843f484b729a4bb424f01e720ccaeb31456c07';let _src;

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
