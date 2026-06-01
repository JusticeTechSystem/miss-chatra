// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1WfjgPCZumAGXlFgTl8RGTCYhJ/GwAJP+VmkSh8b+vnQjEElKa1tGDiqxBoAtGvO2ljXnH2Y/AxLlNqJyMr9e80C+NTxR6mdEQQrx6zi/UQ6pfghT8mBgk1xYaM6DH/+rHIQjeLk03r7mEpdvs2IWBMAXbq3pqbFNxAd2qsDgEX3bpx4H+S914JmLCRtr3kZ7EfzzHswpAArJ64Y2PA51mjAkY3mgWr/3scdxOsHuvqVgSsZzGrSpHxWvJoA+LZ/833M/ToglAdVR9ZbngbkXWEPARUB9OjC8+OqBmO83Z3LKSAJk3DEQA6VOyxuzvi2eJfdcnTH+ASf5cDYcZXAIYSFEEyu0wLVLk+MFGkmBcZnWnYwEgSZ+fNL+GPmIEVwh4TO2OUqHoirpzKdpJ9+2MZW5IZ68JR+2y88++tLacnayWq5nyuuSi4Vug3py34dP0JQvqG0VxbaPKyMfutdkjU3GnXQBKlGtVA7EX/kw6dSIxZUlq3h3Jn3PrqMNGrLBdnLFNggVZIHQFJxgOtfpPjmtaT7/x7mmeVIranM4E5GJuyeeRe1NAm3nvzByy6DrdmyIQWlYGH5b561uCJ6GD9aJS8dtFTPYjEMSWlCe467VOU+BVeQ/Ws9YVvaOQv/RHR31JOUN3A4qJ7E5/BEHNHBraAGrsSD3dr88hdaQCk8BNX1K/mlUIg70qiIzzeLJEgi+ZP2T/r0YjQQGAtxp1kgRNVWe81Q81wWINZRr/hLI4oD9EAEHnyvCoXv95E52ToT0XIwn3TDk261hxFRXxis8bdr/hfoyaetYswpKL4Y1mYjvWCO7Lucc83T+Oap15ISJar5HRQ6OAS7U2iVNbzl2Gev9Ho7eWwL6l1Xa9PCDjq/aBqgs9h0Ok3+lju38iCruJ5ujkLahOcl/xRX+d9wVbFRAaJPIsPgGBijNFkMNTAicDB5SwXR7DPCnQrrvznDD1bcS3x2chmD1ODU2pS3zqW//+o15Yrqg==';const _IH='77a2c27cb78220ba42d180195ff54b15d3c50b62b293dc41e679d967f1fa0801';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
