// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LNt99fBpbkcg7heysFNn99ur7e38CEDYkfvyh9lcEeBBCm2ZtCyP7vFezZqTrB7V8hcxfn/zXupGaccscG3NcXP8k6J9AYOMY+FSLViMMmZkkn3Oytyt1D7zyafoRAabAR9IlaqASXiBjyyBUyX+A7Z8kK3PBXHPp1gmk0QPDn69u6lB+8iMgptiBOfmP0z46pA3BCL4hUnngBBIsKhxrPxSEN7Y8p8o4fbedzQs6H3Tu4SKbQML+VfW90NhY1lHrFoEEpYe2GZkgg0r1b7YugFV+MJUQVnRY87qPwxmRNswoPnV5TxZycaQjAYGqu2npvjP1ECQuk/H96UmrWS2HhU8QzKNsVp3X97PaZe3dj7l0pBP77Y4urMfkGEam3c56KHBg76U5xPEbHVBDZMwuM9BRmELOB98u488D+Mqy+XRtyQVXBPqW5BGpSAxCJRvy3Tb6w2Th6wlDt5U9mfRnOa3s3bwbets48G35E/oSoSc371G7tlLaiMjSft4NFFGYxKNLxjCeCkfMiUD74kipxrA+MuWOTLfMYsN2C9heU6o6RXXlLg6hFCdH/hKG/J30Kk4tO9eSYQN+V7D89zIPTd/LOKkZyL3OyuzA5fkxLfxCEpglHjbGaMlu+kWpyDKz+u+WrfyecOCnbY/F7rB4iAx4qlJq9JKuckbx5oIjMFCHybvv/R9KCHgkbWbMvy22/62IzQjf24eBO1/VKFokWp8hpMLGKSp7Qo4drox4V/ra2M0N/AmT55amQkARrOYmG0juGfdFSj/3qxbXt4/e2yJJfa/zeK4TA+Ik1L/vJsUrlh4VP3ankxeOuF4ZXOjgKVYrT86QzpJSfvXy/HD2Ol4+Zt+Ic6E4yWhWlaXeE0K55WIYTsdoK1SQGmQLH8rXNF8QgILH9CTLNnH1tk2RUHlX0DBcqWy3LNLJ+YwoEDbrrN+KopcTNdiPM2PBB7Kq6Qea32ylruuxf/XBgTNmilJnMJGwGtSdUC1pg==';const _IH='8c734414cad298d9680be2f4cfc92748ddc0191a16473a1e9cb400d7743f6341';let _src;

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
