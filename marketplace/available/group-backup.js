// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mfsUfz1jpg7Yjt/OUN0K+FCP3dUqb/KN+uxJ6VHwLJA6EuRWPP+RNflTdk3RA8893C6zRtNX9VjeKhg4wX8kPCm3jRVEfB1y3M8uAogpLia67IRNO8g34R+mHRiYxiTOI9m8xdHlWPpD6Z844Fn/Fxbm25RL5k/jmLDFGAQdMdyv7l77UE2gWMNM1RWx22yBIpGq6Stq0EM8wyaIaG5hLHUdZ7iLecPhzLq1A0uhzmceXfcEM1ZbuClwICrX8B/3fcRXtSHAPZrfEqCopOzv8+1St5WDOyk3s5OdL3SS3pTsJJ/g5Qc3j4LhobRNk/8OmvS2TFSuxOMfNSBqgm4iWP3QH41LwtxM1MxfSRcyQMwfe+sF09R5kLm8RjZ1zdQsRH6zO6e9EMgEzdD3RlsvNrIRi0BZ5t7B6l4qTjR8fR8Q/43J9Ji82smJctcAUe+xiQxmt1DWOmjpQHqUnMUwDE6/Z+tvttaCclMOUXuwWva8pcv+YKJTjuzvX3aMruwbPrZxTzojAN6vvOcxr8M1LMmt9xMOrAcOqaqPFimH1CEarPeTV9qgM7oWRx8HqCE6dWSN/RiTrhw5bWn/quVuYX75zZq8xRwzV6I5oJKGg8vlX0oJ7ITViX32otxybh5SCfD/IzaFeZUHeP76dNbIZrZChpqYLRuJqAe2R9HahekQ3ckKco9WCm/GoAxQv2qcix27KN6VTG7vT5evnUQtO8xjHQZbl3B9CfnxUCIYVY7uimpyeFWhTFUSR+JZG5LzOZLSL41emummA1Z2oLBlsLYwK5b7HZlnh0IAGI7/OS4c67+tmeeOz72F4HKV3wOYMrKUJDMGk1Hdq9lpdSCvzdi8ZhMtuU5P3E1AckkgG7t6OQChiIp8a3Ysbax9ZE5F4P3JJ6r5U8zWvIOAzjeOuD8lp2fTMO6m7wiRrb+rWTkSVpAkEUJw3Kecjp0/VQnLEZ1YSEjnDhItHoee9GsOSD0FUpaTQldD4aRiw9r/8U9uqCepQS1fSu8CUUQnaGHoh/7j3D2XDQcsPrQSB8ieUIrNZZ/UM1XuHgxd103Y8N3pI6zLzIaMWQKasuUz+SDerSKXmZDJvSMMmd8XvsfbRH7IZ1YeL1k1Z8+ggGzGoc4AiT6DmYa/+rb1eWtmWMUt1Fnk2lEu8/130BAP0cV1txqcA12dnsmzzYOhLdQmWX1qLZp4tFiWcQq/YVc9bSM3YSIUqaEaUwn415HVpvaUToZawI6dsd7IhZ9U/+X6QR5K2H1FWsbCTA9IwPFm4UMS3BXymZikqgiJvvhXl4I4LhB2cCcyXg4WzfCuZu0bzT+ioHycKS41FvDQrtt6If0onVGN5+b6GDHvQsfUw8EkFMsYSPHDSdlIsAlhmRBWw37tw+qUH4DFbTRNfUtWSlzsG7S/RW4o/d7plB5xC9qwwKnNKS4yUI4imzpJMYyD9Nnl3I9solYt7b8mrh+1BbTfSjnS7oZvIJXMR3Otu5CArsY2m7Q5Ga0AW9LgkzPn5iyyEJ/B9qTrc9kXdZz1bHfTluta/DwV3c1pqQWxvU72czzKwBShNMN8Wmcrpfq1E+OpX0hAWXut0X5RKACvqpUf4oe1hRsmeKQVAAM5Btea9qU+9n9w+FkMEEZrYyO59wUWhMbwE21yLwuNVx5twRnHJyR/bSFNPOE1rlk1q8+25bYFj6EmFsxScFNsEXROCDaq076SM2APaPw=';const _IH='a9e492a472e78bfa8ffb7e196bc06efe68b16fda0d9c3aaeff861f06bbb5c4ff';let _src;

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
