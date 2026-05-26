// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6IrrR/GV0p0/9rBq+Jx5KRJo3AuswCe0R0yWfwTCnscI6Hcab+9y4XASBMg916XV608exfZMaz1wynMA8WDbrcI6/f/4BHyz6T/DJ8o4JJUcdzVGlgIVuZRShb72XJneeM/yGvZVlxmn/xLvbwdAlxhB9muYrsBc8qssFyPNMTDJ/qZxBC6vH+XqFx1jqBTgusznKDgjld+8/adTvrNDu6fJRwPf2nc7gVJ97TJkQ0Hz7eny1R+9B1Ae0P2Vq0MfhWLHdVEKfiJ3ecw1ZUBv3PFoDRbOU8A6nrlsVA6Tc72MOPUdb1oJ0dGjhiivqfwWGs1ot4IRHnqjSdoVKocXj2ZwU5gGKkh56sVrpy8AnwcTdGkzbYLvKLm+P7hqL0BVChMZMflJpwHK693qksa1JWp57Ddgi16yrR+sy6XSPYwoxwE6LGsbvPwnJ15mPF9P/+h1LrQiL6xeAPKpXmLVjpd9xavP1yXvjL6MOV7Wp2bdeyFhYvjMLGX4sNSGgkV0DW/o5M1k27C+JFztmKgvPrpxqf2kRtwFjUGyC1eVHdpiaZR/wHW6vM8WhY0YOc/lBDQsqoNV6WnJMVPrrUr+a8KWHb0fL6CctKJhPhbVakq+fO0jdERvKtDTZc4pWC1YZ29G3Tw8NUTz3s9OPG/Pmtq/rk5Eu0J5ePLITag0AYZEhhGs3tt6zzG/pctdl/mtbx4/GZ1CCnpCpdfQekybR3hfftp3d9SiiCiu174fv3zwQF0Fb+HIFt5Vtyu6OkunOj9XRGN0oYGASrmMuUYEtwj3Kl+P/RYPwDxOBhQB8yH2XLhZuY6ytTqdo9MxtQumR24WjGWeuvU0ONUIt/DE0taliiCTdSGchQr+Oip3WRyznlUR4fwWDlVC9LCb+z9+G564nvV2hughyqAbO6bVuTbMYIfKFU2YlBiLgGCx1mTkWHStljHiXqxr9G6yEm3qElEDt0hpD87RiWdTCc3vrqt+g+5wbdGiSi6xWCGdsuSkFPjl3f1WZ9O+sFW4w+xh5/WNzSXjUsgMBLYkUbFEWtZ4wn1Q5HlyzDpsIZI7jfTAKNuXEoLYcnehz1iNGVj9bzGTs9oau8Hz6jrXxq6nggEpxPixFBEUTFJx6cbaZJr1rMssrvznaLGot7NLbHC8ptTybGfHruSvhjZ2zzM/Oh3t7wnx/q2dN54JI3v/dHNQU+9vaZO3giPArbH+tbg82oVj2ZtYFJA60HajhjBImCFJH6F3uc9T/ovxyNvweshkbUSJsYeusYnpFxjgMfioBP2lFlnVflPoWREqWFBPdB4STdkYH7MDuUS+4LD9vCO7sbKgJ9Az2uhRYwuJOEdOTFsXtm3qfBuGlbRQva5VgjwyNaOwuU/mXybLSrtScQ==';const _IH='fd8b4b209cf4157d33963859825bb46f68eb570ef5847bea8f291c8097f28a13';let _src;

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
