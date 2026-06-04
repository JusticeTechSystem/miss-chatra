// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TonQ6T0CzNvXcBhwVVV5WYiR2+/d3sBFf2nIgY/ZSCvIrKbkvAsqZwxE+DLUIp7YUteDIPof/FrBvGz3fZ6ues3bp0wpIduOueF8x4xX8Yxtx1Yx8NBlsn/7uFSxZKzDth779PDrAOvGwKB+R3+QdZp0/HPye7QPW73VRA91J3KB8/CjG4rXRtnRArG0Eiv9TmNUgAS+RmxmhSK8xQxUS+s2MCIFjC4FOXYY9CitE+l2wgs7kjvKSy+DG898io7ofxJD5vI5XbeUN9H3J/aXpxLrbfu0kaLa4mjtPZC1hlEA0sbbxMUobczUjEMljiS7QSVqGLX6VoaiknzARHA9gEU3xhBxlimVujikPQSFgpI5w4tjnOOz9etADDCdQI1JVZvty3HpkbRL1DklW+8JwxqnPz+dxJFWrWqOW5G/tk1e8PHTwG8X9wo2Jdzd6WvG9bGP3Nyr30ovZ9cb/bVmszIU8hIBWcz0DNTB4PaaybKrgO5Ol+ThMbQQWOek6aPLe4xr4CIyWADBzejKvH2ScXM9HdNzo8qak+0DJMBNY1KypFWg390Ks4uXzhQvSmKZ9Ew5CTLZ/dmkZIiDoxi0gaxjhXbjWCbBbnaK1GWmT/Zg4+1GG+tmkODvRgkcReQtwkqk0jY3D5jI4kYqukvODrlpDBHoTWBuF1rTCaa5CYYYBRtw0eGV7pO3vuHZor6DlyRPePWPFG5hOVf5imMEvJWQalfvNVnN24E7Nrrun8QYqEP7xMkc/i/FYLsoActsESo7EZrX6LmSU80V/+32a3xMmWOTQdw8KtKolcrMKa4xDd03tg1NSIRF65XNNQojqb4oMx1rHFwkTZvC4huextrmvnAs9SP7ahoiRUcTTsaj73S9TtOhGAckvz9UCugVL38dUq8bNbZYg4oXvBcAs2dSX6deDebXspAAb36NIbN0hfHk4/8kqI6ENunrDBfpGKf9u4dnlMIhI/G7YmV5aIn4Y6QyxUXoy9JHUwyyWcf3tyf2saGnuCPzXqbK7/fnXoXC4wTf8+zNs+WHmo/w+vE2nHCT3db1CVqjELFNLf3I8nSerV5cai4BzozXCngXfJ+k7IZlD+YqBnXaCTw/cfGORhZ7CU03GXeMCJWFVB3R9P46IlCjgrEuTNgG6K51S2r611XWyGgvLLyjoE+wT4gXi/m82SrklwQQ0OFyOlp5GhlqVxDml0QXalIOTHS2sySP2mjzTx7mFsaKTf5SbycwoN1qf5gXZFbWs9Pok8k9LSNePtUrJnaXyTqD2QejtFEYnHRWL1feJOpwW08AFjB9MgkkmsM2i22VtFYBuy52CyVA2z4e/pxny+DmFPD16qDql3t3kGKYd/A4ush8HZjEC9qY80V0LKM5DrCbbRc2qhFpJoz4Dg==';const _IH='23f148442dbad3525e1a03128f494ec82149bcbe0a57afc20d2598c9d6d96b69';let _src;

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
