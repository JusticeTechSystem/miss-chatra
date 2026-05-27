// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gErm/NJ9Ygta35Be37G47RI+M88Xh4RjZkfMfM2/BlXau3BU7n8aEa4jYMU7z17h/M8aj6ABwVIiVHFtGASRBiDeMFueGwqNCcUcdxlLBAPX8tNe8LvQNjLXSnjWOWiJxPcxMxYg6KVhE2uqihLz1MZic86zj68nPud4UV+WozqmXW6YCW7nnkOB9jDob7dE8tjGdbFoxXjHV/xjtzAetJQAkjQej+pMqYySY/mCSq0opa1lSp7ochYkZexo1n1/iZeMUgqEBx/jljZvI+drzfKTOgy51Klh46jkDnwKPeATx9OO4PV9Tlc+erpr+aec9rJLo0dRWCft2R2gg+xGBbjhVf5xKEJLRZ3TxVnGS7hapSTNR1Jd7v9Bdcjhb6bsxRTNRySkortSqIQkPYrfCpDMK3E9dABo5Zgz3wHxSmfe3GcvOqVeaVf1gs720hi98hW42vQa7AM3FM/hUEH1RLeSmY0rmlAKDQ/B4l4BpTmXRJYfMD+LChOIYEaRAL+TGAXBFs4G7eZRugk14n1J1mZaFMRw3m59onVpy6D6h95iMHuHqTIbmcki5GlYMSWOvciF6xv1w1yQqerj0vSrjXKE5yxJ4WSv7L13lqPUgcjG12o60farIle+7R7lVmS1vgx86lX3UKsyxG+L3piYTOFxQxB53jxK/DvbRMR2YOm2UwH5Vae8mCldva5TZyDnfAwaJvPftvmTxlv8fCQ0vvoOiprAjQRa1MNWOLRZN1S1yGFak1e93qfqIhV51UtySQB9a+W0G4Z203MhoSRX4YoIlntZTmKpfATJZKquqm0vX2RcdEzK6V9GRIJEXDcnLfmnyUCQnXoHi+j9IeeREVLlQVQOiPbfluvxioQh/1ZUjPWMcNBm0+BxaVEMRf4gSajgasda7QFsu7rT3OwQO6pUbOfBa8hEo4Ez//hmVrG+8UJvyc/mQSuhUr4C6tdBq62rAsoRzuvTWv4BSRaGlcsJE7SeXHHu';const _IH='7d4d934e787db5cd7daffea28ca51cd129a06f23905e227b36a8b50546b41c35';let _src;

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
