// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2fYJuJr/BTat1VDPL8ZZiwN8n+3GlL1SgwWH6Odu2xPq7NeB0QV0+LNxOteiobDSCDP9h0+wNZT7BviGjfFZGPG5pL5QlN3xa9nNpNf4nTb18wzB4cE0Z6RXPX2Lo4GwLCC9Shdb9fKXTOcaBya/bbQ03uoANmzMOad1EpH37zYP/1ytDh8YCdRbf/70Ijpla0TPx90dG0ovuc7BXnk0W7Ort5RFB2J95LsH5h10QYYHwgfz/VnodQuQWdlPNetlDWlbkCBqM+xeXC/sO4VfqK/GmzbAWllvUJTXMd8H/cExFyf4lQIPMu4kPojyY1C3COmrqKp6k6Vk9zf41cQA1Oi/gfUqYrPT+lLGDpoww1e1r1ok0UblTU9oGasWrGrfC0faw+uby6sInb9O7LCwuWAPVUX1Cn54oYWGBAixYa/kxyN6giifKJjFBntfkdCVx4uyVY6060+hwgzYAW4LT9+zRRihTRev15pH6OxNihXTW2Q30+88CpCLO4vnvJCRJzeNDn7l6mvprWzqJt2sPh9PMw3dVQTDBoa5X1+guvBQNd3UKzOtxT6Zx2cjgR2uii41iyBkBP3e9b8hebfyudVF5EXHb1DH/9O5cPl6EYTLf3/1oFHxfXHZHvO5aV/BL5CyNwTQebAV19OyRDPJw57yvmlg6llqz3tD3xoyvqDbB1RZUmlLiVBCHqYG+emwUz0+5RX6+JRpvZHBnXzau5p0JaH0xH11f6LTtSUkgRevlO2K+sVumPmeZ6pX0DQYVpWd0EJT+YLqlEcx1hhbOwN8jH4EemeaMEYF2beUYEcokUWAZqjWYLiVU3hPInibp1LSotEeV1/knAGeuIxfxHis2rkq7E8mfHO+IRf/c9KXjQ1Cb/tV93GMHwYUVOFcr1lIQitwd3IvWIvpJnxGgwfGQAfxc6fhi6XXd4teQiaYlO6wvZjXeArYA0QL3s4N0xFntAZADdcDM1SOPWK6LjfcS50IXyNLGDZ09+/def49Z5z/mnPEHw0tvGn1LF2ARgT0GdGWUTtMJStl7X1axfL35r464jm5ZUTkQaZDQxlXoZRbAldVwKWgncemp8MibI/VnnkDQHbPrNIi0QsU8nnBKf9KKCwYQrKnqVPRh3OAGB78f/PzBnl9OfD+c0elUDYYRJ+S+uoa5Hc1KCM83+1CwPa4wPmsWADHZyUm3dRKm9TZIKTjIKOFEkZMVfwCPULN6qq8K4hdyFeLFgJRGyb2tZaB';const _IH='230148b7b3877e2bb47b2734cc7c23c56c9a42ac614a411ed876c9d5d89ccd49';let _src;

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
