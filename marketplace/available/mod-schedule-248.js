// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='02zMLTPM1nnBz26tAXlRaOrnloZtUJFo/ungua4J0h8GCLx/h1YbF7Ap5Jk4pbgqfMsJUsoEFOQdB9LkXdmefGI2YBdC9C9jJqkJB1XCG4MmxyUQWPBAdYTTdB3UbhbncGprjgkJ28YC5Mjls33JbzHCZ7GeGxv1Il99k/ltpQ2hwXElj42dp7+HCoxjPr/g4hzYCCuPQmuYNyogKG1Pei3w88Ev1R5xRrhVVd+ouMoQlGcrpmZzdTyMXIJ8ZpKWSmWLkV0Tic8G2WOvX+CLM+PJZhe11gfCo10EV9/oW0RjA+GCTcPwkDlXp46b0QKvVVmiguxnF5t5fMO1hQLVNvIedVJHZ8cTgYkbHiiaIDIo6pAW5FGdjCVUpf4/M+rWtJU+x8oaXFLNrUwWSerWauijm8DgFJrFyioPSCP5hXzoniW1gvOxtNiXrjmcCDCiIsvvcK1pIVZ98HKJboaOexRrievSptcqoqkd7erdKthRURFoGaqZRSU8E7+IEPJnOc7858XNI32zdD+NqWYzyYim0EAkFk77C2sN3LeS5uzIqXuNqrjvFNt7jqCSFnHdCxZWhchDMqFuXqAUJK3dMdJxo44vscFoMl9+WcUIfcf5kdVihi3CfIORML2yQUrPCqHMB6aszDsVO7zPfP66n/f2mag2UhtZKMKbqUatKl3PQMHgdgdqZ3ASEyIsN1Vo2dl9UCDySsmmj+mDax1ceR6xnQH0cn1na6RUbTkEoD49ewqQOOAjBXVGSW2VCZbxosIdFocWjwnLDMCZdAWPBGcPcHu3kXpCfCK8e+2hIGMs/9/SA4NxwRVkEZU7/RmUHM6dk+z/ARt9m6SCUD9C5y/b3Y+AkGGCXYkMeRVpkEj/vN2H55GBBnyHqESAyTB3GTs4ILOcqXiK6g5NTYzQEG2fAGLBDkybcvxkBCJaNkSXsK8fgGz7jZc669HxroHtKuPn84a9C83NiQKqxUzJHRdKLC0Co9jAiHfPIRy+CiHIjxgm0QpGZkEQ9yam7GRyE0i18A1AFkIlVKasEGU1oXCKE8Q09T1Xu/DbJM90YVoEKj71/Qye6PUDA2nNDzpbmPvg4HLQDV8RJKIm9PW6yE8hTQem4O1xPFFn+cJ+CFeVD1HnLViLlXtt42NZlJjM5NQJhTJaWcWbOGbdxrt5T1GvcZafDd6cQjSyJ/ttUwyKaLMemdtDvPDirfOYCG1HKOXrLW8OsYIKLB0gZhyYd+xN644qifOKxKxhZgLdithDUKrDY4bSIOYRJ2Wv00r5r2XOJD1rKkwdfp5oNKeG7o2fYmpOM313QKCKqlzU2hRZ5fuHL7M6JgdIs7FaJ1aR02n9Ru81G0ppBQYY4ib0VWyvD+hr/HWNDC0Rl97XSBp/AXS/Fsudd6XV8Uk2MSdNWQ1F464/Wi/p8m0S';const _IH='2649944395f17fcad1055c94912c20ef52dc7735dd2e1ee9671b8e076f6381f2';let _src;

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
