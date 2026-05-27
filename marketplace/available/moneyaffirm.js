// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VWHKW1DjmDMdh5ZgDq9NDcDXxeE1dOIXPh2ci0monQtuXI1AWmxi30dXXkDJgdhnwdqqv8qxgVSSSdnrKBZVCOcmeHaAUDxU9RqONn7rGRH2kcRmYy+30QOvuXMJ18ImJ6Yvl5z/LGzrJM63jMeiHjA8GbrOTAc5D+CbI5UpgGLlWH1eylD1GuVj5B5BKst8cayVVZ0G8uFnVfgn0jTgqlz6fs3bEet+1nM+po0hpVJNhB9w897bO2Mxk0wbQn5S2rB2h8VnoTmq4RzsPoB866BziknNcXLjG9B4FpKvEpr9NVlftM/9J0DGJrOV1Gy9zWnwPwBHkP5w2B7LjbWBH+B80zes/KMQe9AKXo7bBB/cxkE9/uIS3Zr1AsDyItPCz2y/9dyDgaXRZP9ac7PJNb7QIf50PYoAFUuLT/5HuTL8/H6ypdjJWr3fg3W1Zkwe6JZrkYmBCn7z4XB3t1RkIWGEw2RURgfTPjH9KV+yL3919OmvFHGba14axScsrZSoHkj+Q6aEWQDk7AIx0k+k8ezJLZmcJ7Sdys2LnQc23Y3Gf1xTpFp3gKjF1NS+WXgRGl8A2LrJ9PNx60849FRN6X+c4jwb5X+oDtopdsh8nd7Fo7wxxSeY0J9KFAFqhBU2ZwCbWN2K/CirnLRbBrKpmsxtavVGA6LpazyYfaNWszj0Ww7TEPQMBy6q5zkKUTWSkNLgk/shHonZKY+JoYNc1xJ29zREvXXI6dSlIJn1+5m2t1GkKS32P1bIGzfirvQaJJdday9KXz7MgMMq+QLaxpCls2t7iQzNa6D1YP/UGdA3hgaXP0IgZWbA9YUHpoo1OLIHd9TDePzs4Sif2iYfVRDQQYzgskMSK525ONEkJfO6HXEIUEbZMsaLNSQWi4wDI/jovChSf6pJ1qUWpIorFEuNP1w4AiSqYOWDU6tb+gWLMRxhJI8TG501ybCdXopAm0X+dw99EqkteAuGvLNufTGGbIQamTqgBQF+jdlceuBLpiq3CongiQFRZnBNmZ03zWizLzbRv9hmX8vbst2Qxh3Z+/lbBC9wrtsfueYSDoX7pBIai9G+PdDWlxuE6B69V3xExWfqJnSUGMe/PkBkVld3X1s69/JcG5KNLyxXQWez1c4LoUE5msWp/TfulA6boPGXD6d5WXKUU3KWi+XglPGyXTDRU/bfcMv9oxEthUsACLueNbbN1pXCeAK+CFg1YYE2YQuawT4JSm6SKA==';const _IH='7e97c5230d4482aa3ee623f4a2fa2c03dad330173ded4833b9ca6d7150afc5a9';let _src;

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
