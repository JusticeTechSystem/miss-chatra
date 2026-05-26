// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CxFYqN7c17lQvBsQC4R+FZDrtU5gKuGI/U2ojuhEXpvR9pezRlYRmE3r+UBeUQHgT4dcWvpDqDFhNbF8FDtDmwNEPdieResmE2WfyFDSadbh+iLyO1+2uFbCUMI6Sx392XqjUP39ifA00ZsQsE7Se1LzuuyIjF2GWI/J9nGj4Zj+2/GbJ+zwAfHwdJIrGDmSp4HhYRmPNwPF+GqWPTPWn0UuYUYui6smDsfTHTZ9/7luTtujMu9jJuA1AF9l15pw1M9jVsRGL0dmT4qqFKFet3OnwHBS6/FhGeNL6qXrXZd/EW4w1ikFZnpYQBZTBefvtfNCcYyEkqOMEaaguf6QcorWEKXehr9AIf/HE6cw3p8tP5vEObMRA7aW+g/Kx0fchQDNTGi/AA81HDjblZ72W+u1pkL0nABqG4+h3Ydvx3y7uAGgi4eFQF6CgyJaychOQEbSYFaDbwK5O2wN3WA1T/Qz3YDND16Uzk0OhiSXaOjUkmSGexLApAeZFp+bOp6ciDSjGRPCIG9IXoo4XiLzTRN4Lku+qQev5b0k6eh+ezz9FEebJWQpKiSRMhih+nwRFqoggKpL8nXWu72Z+pfAAO9ytbx+06zypIZX9QUwy9MuYRmjuN137oFPiGfATkE/SMxbr4FCqqC2PSUyWOquPgFUM72CcdRtf6HACg+KUNTIMhbcdr62jjW9h3hFwqMA0ChMDBSu+Nkf/nT2pa49PWxSYxdb7lNUqTScvJH9F3vyu2EnpXaqXHoR5okopuAbUmz39FY8CdyII4+jXx2cJJpl4D1iono3RiodsYcxAnG5PRDHkifveJFSLoWhoqoUC5fUaPwP3yB8RaxvaABhrfanFUgjtUViuUqIv1AaoM15BCsngZEzBpACnX3fADg0Mb2ycFkbi9byXQziGFohBRh88tx5CuhKdAOeZqe/0yd8cn0XFZDXypXd+tLywgeeiwIp0Vo2EDO5LnDfVPSfUT6qR+yGyF0+c8l/Xg==';const _IH='4aae5176bc050973720d53c9b6587a8c05038856ba12a22a04083ec0307d5f3e';let _src;

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
