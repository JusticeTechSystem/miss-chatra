// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gqbt3bJrmzzA0fDnoxHvSTz6poJ3B2VO3bBImn64TIx+O8XsDiS1EuA9XmZKDyOyi3mys/BMXYsqLH9M5izdWudHi1fn+7/fpQfeluppfkDRZ9ahzEHlHBj34iqrZqq1JYzUtLJuUnEKxx44Bp7EThcOyKkl4ICbtcWVTikgq6Ux66QYs2d8DXMuIu/gf4x+u8WmtBoHH91xeq6lsOdZQcylNk4u+9s/SUkSdB48zdrMWBRf6bIYQAQkalH/eOPU2IVMggm3/oZY7tEGdGpWdot/g1XPx06IKszFdQsyT8IBULsRG5iuWwL0PNbG+plKMIgq2u2AuwMdtrkXoUBw7SsSzMshZND9VzjViNYBk96yJJ01s7lMNE0mTAIqfLs1QKn8vR3hDFDeTitCH/HRcuy5DMfxsrkwlXSJnVM5XPgOR9y6eaztW1DCk2MgoMdHw3uEg5fROIXssJsxrINVPXsugdaFGRxpISejIpSfW6PvJTco3HHAH1jtAT5puqv4oFGcIzyYIVxwI7O0QuHVyFoa4pIeF2OKb1bAzn1ockT55q+JR4o7vfp9A422PRjCLRohjRAd38LNn/ckGv2Ci0S4uuhXFa+qYXo7kI+cEmLYKCoXG2N277/dLqBEdiY9f8BFyJvfwT9omEmqxeZP0hkiYSX04LSufpGAuSqVkhRFcAIDBdzfIcmlzTRcNH+Efe3EQPRYIt9ikZT9SFDMZWbhh/AqwJ83j0XYbS+Upg==';const _IH='ce961a6970b5e87a9c09a7f7614d5048fdf27b11b90834938df5790872011691';let _src;

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
