// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QP5hhRhVFwUYxYS/S+dPVI+/t9ko/eCmqoxzQnrKU0U2RcCfHa6jdfLD5/Rr9CO/t3ta/1RTm5HnhrdFE5HM6mrAG8rr4vdASmr6Ie5ztULTdkqEWPQxS0UnLLnkDjs2qMVtDr6KPPT5f/V7qn1EeNHWWbiUQ97UOeidiWWgxiWBF08pL/V2Ogctoz6uhhiHRQTXLwKwH3yBi0+Mk0YsUjkFdKiXWoCNi6sti2Q/8L3McQXbCaPbqBD1CmQcDvorVP9O2K1ceCZgvYDcF6CfC3/wu+FKw2yAIyda4tSNG5+HXNTDYk6jzx+G8dfU2HEVOHZ0lTIsmhiJK5nrnErCmOwyDN5i7PB5/FsJhI547jj980cDPdqKuM1H/aC8G2+v2n9qWcuEyipC/aP/hNHYjDV7cRdj+ef+lw4//slJ93sTFGprAWLZ/gSP0rOrYhGlzTfgQUUT3qxwMss4DlFRWpqLRCHw+2S26nnqGNuM5R2DgIz6AABXO0jygo0VXOuGRaP427PSDWgxdYgX96w/iIKHivOizH+Xl/3J8JJPX4AnfDTp1PnbN3JBFxxr3I+8gZ9nyPMVBwZ6bOqvBs5TSV0VTC24LGKnF+DCQW2jT4zzoKm1J8hvQLQYcuRX+TaB83VPNzT/33r0c0sCxMGp3CrivDEZD7komYWp3HhmyV54Hf8T6dLZ0oTDHh9KwoN3X28AvPY24ziSN5/dPByUU7WOaWE=';const _IH='83e38545a420c5adecc9a0a9d081297ddd74974c4002be332368db3f87024413';let _src;

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
