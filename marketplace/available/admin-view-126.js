// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PzfOFLgtf5sVULs6bMBETzwbGHqrm3T27VjS4RJVrUBA1IZ/9V1d/eFy00/0NJ9h/2mQDB6lEo+yMxIZjKrqkoNqiJuH9bQpjt9J83JYzDE5XPjd/JmBpplRZorMC7hfbQ//DcJujBfHofcSwntfSgCCSjL7f1VxpVQnNt6yX3PPE/7O69nyeH3qGFXrm3J4gdEawJSamXusrr71MsC92HZq6+k8hsYkISRgSU9RYnkoy0cupO8vztMKXmgI1fxLibufd14AHBzi/JYTG7vc4XIw25zedrRCpySCQYbKj2jzzd/sTLlbU7LCEDndlYdPTJFT1AaQnpQNFXTGbXPh3DUUzzZ1c/unjjLoI4OPyOShLZEi1fx2vgJ1jB70QqKo+DXNzpr1ZQpCNX10cdRbZ677wIKlN22boHVVq85DrG0Fhv0V9Bw1Q1TRlyvTYFaBvi2looDtgXmvTDvo81iGkfbXN8O4gbP1E7LmLNj2vyAcj4ymb+BBG+w98QlNEvFsCPx9QijojcRppZyz1yED75z34GXKZmTpAYWV/W3WwKTk2hXu9AGWCCJbkdbNlV4CumR1zZKUUmWZpp8TkX0fxmIM+rduPYTDz4eucA+rYADR1ODCThAkQxy4UUzY/GK+wjhfmmBhZiB2rYF7tI4sLmg47vZivb68HWhnsEFuU6RV/slsjxcR7Kx1c2v3cr83pNaEq+QFbBrwJ/mISDEOKPsqmKJic0jAdkLLGBJfqh1hbDy7XboMf9BBj031eHDKkJtmOmbrcbg7bAjUWqK/J7tK44YbAfSO3NvsvLUkxFcmpegsf4Um7MLMDgSAyT7HPmWi6+1Vx6eT/rFHn9g6DYfuTGHSeGNa5EOCr+AvPE2G72qtpSfOi4kx5SayEir3ePUEEjVQyvvGHc+G8MURcVV5T+Bhn/+3Z0fW+rcrA8ZbBg9hbtQHF/ASfQimLEByLhabfYU+L7mOnwJDlx66Alxg4qjNoGa5m7vLmyNcMHZxrcw=';const _IH='7f844b4f9b9afc244512904a708611f83ab4ac43f4e575ca71826aa7612109cd';let _src;

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
