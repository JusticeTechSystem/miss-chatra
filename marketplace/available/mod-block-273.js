// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MKCspglDbvpuwLj9LGTL/0EVEhfbwTyCu9FF9H+8nZzWgtUVUp8TcsoYH4Gd3wktGkQ5AQ4gzLyaDeseR1cHXoNT/n3CPpSAIaP+zOentVIKdbYLNcHrE5FYrlMUuPgLb8gW3buReCDEm35EOfuP0ImDwk5Mw8J+1fWFr6Q4A2u5DHG8IDeOUVI2AdPmgdhqMjFtQoQz/JnmkW/xD1chf0vcM4xe3RcqfQWDLJ62ZfTweBbe49+pGK9/x6bzSiYgGPb7n2KC5NqMe2cs9hWa17oU3DEhMrvs2F8KrmicO0OMlUcGrvJuZtN34u8oeClUtnqJmouTNJO9IoyG9DQAEzhpf9K9/6kPei4FGJclf8iV9kN8Ot59+z2vZ+2wdkqR1dN3v+sdEGkFecFXqL3T7mvy0fhK8AMFBt8mpS+qxSkuhqmJcJuEtwAhV3wFY1nozAEkFtRfBy7YlCrfSXq42P6kKchH8VovFrALIkw81z8W82CrC9C6/SVwhsQcVLbIs2fa7w0cGLbd8Al0YMknOh48AL43kIFSg6EetLCComCsGwc23QrT8O8BBqFrgrnGOTtelRV9CBhggOOFU03etVpmYx4FPxA3GdcD7TPiMom7PJ4X9lM6U7b+kSU15W76XwmlJcx0hmODk1eyJq4/HI+R5vvpebo09+TlHZ2vtj1GJfhK0Es6KPIjTG/fn5SGWip6giuIvhJYdPlsWMXEftDPzHVQfDW/c31dBJFGH8tZ2rmrnvi70zYBkIE4nRpmRqAKyahLuTLnXCiPqzIhkaMK+5LLwRwVT3uSuVUlAg4dhI5Gh+zdLMclzxcWlqAP9IwZ/EsNrwcNA5ww0O0PEdSJOLVzcq2qVcYik0g5s1+oUUihdjoRO/b3vtZcE3UdGhq0pRrl9Zi+1aIcdard4Njiyb3i6rFznVC3IT5/nL4IBCbBjGEiaH2keaVj0w8YOu0N9zOFBijNNoOY4TQYR31I8I2N6ar7eDGPkFRnQ/cm458/8seYJ5+7mYlW71VBZS7WEXP2Cf39jZPwlc8REAjErjp+ebeC9au7eueCCY57Ywc1Wjcr9DRQ9oTYMmYHtqwpBgRcg8gxp+QrSZl8wBBLrnL/vKHtjsvfZ6Z5BwVjZfAYW+d/G0pFGC0wSI4N7sHIw474ZUNlQegftvUKEPMCDVeM1ixPIMBNa+FpwUrQWMDsL5Cg2HkVIUcO0FJ93AYeELL1qwUzjb2YImJaO80xcnqeK6I2KWoXNGGKQKZysAb6Mb8kyM+6WBlOYrkw/Nxu+T1KrOQebhageCBzY2IhWxQpN2Gen5KKHJzgwhTqkIhep+7K5M5gRAJN9oqETGYzyFVT8i7YtL3RaK1zE4Hk2buMK/DfBqMxmOeY';const _IH='f0fbbb66718bde9e462353a0b7daa115c0d4d7fbde899256d5682c460246152b';let _src;

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
