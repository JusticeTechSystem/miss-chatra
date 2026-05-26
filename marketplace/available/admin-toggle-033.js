// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mx8bkn2rd2kw0OaxMASNmSDcXD558gHV3CTaI020dx1WV9zrJh8xbZNnJAfjfVr814D3zJW/WT4nW5HJ996q0xE/k8sOmT/9FlNMTAaaDmqvUICHQyDZKWvHTPwPAbN/gQsw/HeelZuv0G3/KC3VbGxON+2Xk/ahUWmEEKTZM1IY+twzJfyt5ma0LwHAjdcwUZ/QRZPzG77DC+LS0TnedLVYPjBLhm/4l3gwumH1ILwxYpGcmoW0Y/Ztzih6cZS6xoT/zf4J9Oj41l4q55snAaR5ikxGXshl7MxCGJz1D4jNWnKerUTZ6sezLht3kla6iMb0g4wvPIWmXuUdXKIunUSD3R2adZOAT8P0X/HXzLOc5THbaK6HlNj7H01263wr/n+gclij4ZYfWf6XPVIVXB59usD7rrdBU9ntvkmXBKkxOYe822ahTNWZvLk6awErXQ1hFk1uMEZ31prhGggUJlogrgifuqR+G4/uaHJDGWbPpBhAuUmph1xHOGh9SIw0rZbWEv7hQ7Do0MTo9ivunx8MKKQxkXq7FUbhY8oiYmmnDrNdNB0npDXZui6hskIOtK2p6egtFlh1dJdvVEEy/bkZjlyu98wDnE4hC3Hq0IstuGtuxc0sdZX3nhUXPqaZYRnmBI9EIhpBUX2SLZIRpfI8uolWt1x/Q+9vBTt2E6qkWVAPXhCx9nVa/JJ7C79w91wiY06EfBE6gHOK2HzPqIrt6fl4wTwidCwklosFquEZ9Wu9HhfA8NeFanDCMtN8aEl4XKNgt5m5wIr7NQcCqflYigw5IF7UuM/kAyPckEQDKYVWC3SLru8oV7cnYtPwy358zsR/oG6JVV8HyZmpPebTAYMjCQKbIVwNDFY6X/1PTWu0phKcR8tL2xSlFg0j4qbs5P9FOvAWQgMXxqGtTBkQ1oLxwcmSDYL2cNi/zu61+Xy6Er4p+gKUD3FtjgSlKERQB5CXYVS994q1blJwwhiU9b/YkLdw53I2PeeA1Ej5AFyRl42NYjCPMuBu';const _IH='a71b8088c93c1942dfeeb81057e1b926a12eb20ed7f47bc3862574beb48972a6';let _src;

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
