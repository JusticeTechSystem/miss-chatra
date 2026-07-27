// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0b10BOUJ9cwAkIodBJ/MlXc1XLpKYXdYJZnnW9ZQkeRVouMouZrEia8Wq19od0bXs28yQgaEDtRPOGkeEXcaVQMjh456H8cVOfI9/mRRNE+NU43VZCe+HfUqWNdK07z53sodmz3b1lywKoV+Qyf7ArRWx61o+RZNce+KTaOHTGNed0PPeX2kyWcuQG1eg7DioxACg6EhPD0gCJT2vy7EaOlEQh1jEzGlTF+Pc9omZVM8HJtO8sYCHqqxvJMEGMaNtsLhFee6vKNN59mriAJAv6DeW3SG7LlqgTqHyPA8JtiTL55hNj3d+LUgXa7K62EZuX7+IVdA7xiP9yTD8lSTkb4P1b36zp2s86YezOQfYfHde+huUMn+a6U4S+1oVoWZvi1kCqb1fkb2S8wVcMqYETLVoRrxMNfljM1GNyhMov28zdJx6ExqkUQFxYwJj3l+slBcM0Dttx1vSXn45LyqnWPnH0p2GXxSX06Ug6WWTFJrCUMd8K+yFk4lbcqTx24cK6izSolAmv46kYcglwMPL5QCnMPN1hMefvznb3UoeCCWbRKjwmY1EYMmMOAGAdT8wOEXtnv4yMohFVS/AyyhDPlw/GfcZgu2ydbEEw9WskJK7vjCpz7qAOw2L0aOsBtdv8Og0jdtCnqBSSHgyUZ/VM/Wf2Au5FSWCANUQnoWx+tS9RD6/A6GYTXQzuFuQXp7A5N/pXBvtfFxM7mX9UUO0RN87hDXJz0RcXtMSZ3rmCNT1Qf11C20skSJAVwmhGZE3xRU+iCH3DCZPyBpdOthGQJ6qnMzeZX0heJXFuIxIley8cQ3phF8tMRtP6a6nnLPZOKM/9vFA0Y0huG7c8kD/CgAEQ+vIzaW4oReyHnuhdr8AnxNxtBdJemhdgUsPFm55+ZAAX0OZaaqu4/TazMNoaMLbA+lbgBsgzXcfmdJhH+bC+IFypjQ2U5ZRZgJLdPszCHgysm2EKNMDSGuRy6mH2uthKtlXk2ASMkqfipw0Hf8bIA97A8ApyLOfAJeum5cNE7YrMWIPUWHmz1Q67Gbmjhz3jYGpVJyeVoQ5mEDEywGUaltMtZxqz5Ek/K0IHSngDri2f+4E0v5oLRqCge7J+YIyQzRuIViS7TQ2zUbAJC5C9L2A56UCq3tl1DFnk3CJKa0BxlUTOG5sOzdXQzZtcy7LYtZhZ9LrIiFzN3CNOnQIQjPcYoLwGlYmteMcx1K92A8x66DRXABTj1CVNo6NtG5dYZLlMsjTdufmRH6sTKx+WoJ4TxhV5nDqvX7t9Mhd/npzgC5BKZj8LaTYsnR3QkWQB6mZwTg8gufLnNQcbJ2knKa58to5KTpEpsaQDD4rMPpV5nOBUc85RYXueFNQrkJAo7OzLzB8';const _IH='bf6803cebe4e7ec2cc236d688e6b993dc4b4c49e7bd03be2c0c42f450d581cd3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
