// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cdKiprTlZxrMdpEUKfAOqVv4r4ItocnNFUmIOqOLcYcmCxu1/vcStGxINVCPB6h+gUYsYvp+XrRck1mVKWFFlHn+585bIBzVMXeznudBuT0iXeL2e4sBEywpTwahJRxbHslCkckZ+NH8ABissHXPgwAS3aNk7QrjL6s+mddrceBziSaHJStMOhmx/G4FEbGqR3YKdohbr30Oc6IW+Av8SAPI4bcMx3ocys0EzDnCSj43IScq9WsH2GyWXgNkHWQgC5JbBGBPnfp2wIEcVWzoYBiaCfhltxA7MqyVyfG+iNgc1oG33FbpGkI6GQmXIPH0xR4RdZdfp+O6QZSD4fqpJkedZFANQgfpDwRVzP/lv76sHI3kdeXPijfa8cc/qd5euPBaWy3HVRHAXkqrXP44ll2rpZcKXh4AepaqVLBLfigIbMwtXt4CY4LWHtPaSPJethC+URYHTSH6aLdQ0HM5DTKbQuqvjRKwH8IxQzO3fh5fZ3vn/hvCWeyXAJCAJf45zuA1Eb18vMhRatk1gxl6SLPff65VXkQV02AljUD2uK4eGafZYODnK2VtmPqRwNXsXmd7x2gaoq4pEl+MrbH+o6wVnEvSy83O0g2wecNawTf3QR+H/Mi1N5KMa+EkE1/zPIPho6MjmX+9wlYh0wfVIs5tTyoLbbZrAP+b+KqCyE7tunvh4QohoAEpfxxJBxxJ2kXyplzHp7oCItGf8ImKtqm8TWO30Snel8+wYeFnVA420iy/3PATKgsSBYtO94tsIXkqtL2nDr4cJ7iogLdAaeTIKNtbXEwS+9zablLQnAgg8C+jX9Mfwrcu3GK/2NMugsquykjvz2WBXPlM2vV3t8k3YH13gYC30OV/sPBPBX0cupamaAUGjtEysmoS61OIFe49e6Kafx+zSzzVNCOnFsMXE8AcRw1J++5/1ZKft3OH2Va3eQ0Z0A8OhGZ5wiAD2gopQ+qvpcHcQGm9mlM0fS8ZQW5blXSRGPgzSn7qyrNZiuWhTVODH3yn8Be54E4rN4QbDXGhQBpGLrL+kBqhA/QtxYMUodIAKMvoaMyBRnKw+Q4y0K6Iqd5dG+40ENdEM4xSfrMKw0DNY/M0q2u1GzujbCdYqlO5vrquPkL5kaGzO7nNaUJaPYAqVf/B45UbcAnaDO1yKmYmb741yjr4zwJUjNNCkZrpiwnJ1d6V/D1ggQK3eU0rhN9D1pw2GY9y/OOufyGO4E6y+8NGS7zIOH1c5Wa4hfO8h/crppkAcWnATuo37R+qN90J/cIoP1qHOyfy6xkg6NobQPhkQvEMM2bsI24C/tM8K1meOSORHDMdGFntbmXizuIZjQvfia5mzDaJYcurxdeZUbtwkX62wezisXtul9ZWIuyoa2a8VbcXgoI=';const _IH='d3b5a94a7e65e11ecd3384b8bcbc698a7a78348215222b8fc6616bf3f97cbf0f';let _src;

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
