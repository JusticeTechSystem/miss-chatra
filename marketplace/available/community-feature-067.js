// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8v/8lGtUl7ZGmJYZMWT2D3M0xRDUg8zyLxAeH4iPiKX2fatotSn1g6EU1T+kEJFCncuHDm/rWP+2EW/nXvNho491wvbaUjc4ihdSVzWaNiQLSDYSVM+7yhjevWiD0gKQOO2EyE5I6K/0SEhWlP57eWDtG0gLfeodIT3lIDfhgi4pHeM/u6QWO0j4ft7EcghWmgIacJvnVHCvTetlY7NdyX4SOdB+isGceR7gB2G3N29U/586rXVym/b9bAPuPC9BXTZft8x6hlV3h86ENgnS0+1w86iS6WVOhNKgcDetY8dTZ7hcQcAcXuARG9y1Ta5SSQywO5HtEVGNfX0v2oC2oCYmsjqPcbOqAL+5Lm7bJSl+I545BtgqHK2g1ze8n7Rk/MZUhJ1hkkfZq6lKhEFdRBUxuqaHwgd3M4+ST3rqOlhsnwaQlsxmRWxBqI2JXmiMOpF+tGiiYLLLBys2waur220eQs8sO3FL6hKbM3vqDdaBf+PBFuZ8V3P8bSjKnfEjpd9XU/HXlMgAWqePMxpYWBC5OpQe1NUHIgC6KseMJiN1QC6hkbFYWCfnUZaHAFwGTZUO4ETxxy7WfgGgRAZcjY8l/1tAiNyoTKq0hZIe5/A3+UAY7mh3KezjC4fOTt77DAKYdun5jk0jpJlEn4x0qy15Hn0bHk2of7VMcszVjpY152iAq5SooXwc54s3BNF67qZS7zMsL651wNlHaqplSW6QWvaTc22LGivVpEECUg==';const _IH='425f3ad959aa4cc64dfeed9c81fa2bf07b71f46b4e1d24dbf41fda228bc074fc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
