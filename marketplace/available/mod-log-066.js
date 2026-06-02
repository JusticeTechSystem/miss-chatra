// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QUy9txfoSgGyzfNWrzeI1N7oOlSbYwpwuw/jL2n3U+6kx5SHUsS4Z/lL4UM+CyxiqbfH7UuxKpfXQ9ybifg7BI0nVbO8K14ys++0Yl/0vzKzhBZJ+WMT6E7qEOB5dR+xJJgCJb7etOfEns5YKwlCm2O48wResjXoG9NqB7Dl1h7ApK0hKTjfhxB0+Z3/uF2xWS3imCj3ju6qqvwzP6GqhXyuHVp5EKZGZbydebx6W9AJEwzC3frUa5c4ooDogMoYZlDS8Qp8n6tDb2iRxO2pT+zGNI5hFSpSO7szvvlhM/iK6v1LYDiYPo42Tb9Bb6e79RrtvFzoUi6LyUDggI2w4gqFKFLayLSc8t5q+rNh95EP7+hcDaFRXx+exTj2qL3mqqofBhlqfWUndF5cciA60Z7Aco2MZVzy+AJ8Cu2RagmjFbt4TugN36iDKaMs9wU+fPPpA4zNY3pfjbADh1tbbAAIZp4qxKeGSZhqwznsbeUyh/LlGS2VWrbNjIn6wWuwtulS1yzkzDr8VOG/DNZ1fuakZtpc0Z1FXAzB0HyPkhbXGT7pl/9ALGdD9MrWz0I/w1GWUl5OQYQFvfvYwxoXyBjgPwtdelQnUsJDNaD+3zQql/U/Aai+s8SRMl2M0a4MvApwvf0ClxabicJ/HU5VzwhsKNqtn4HVxIHX5drrxii4vju839twa/DeOCoJ0h77Mk/6D8nOrkYZ6J3RW5bK1ppEJR0k22Dt/KoppJdtQnv7oqYfj3O7nUK+IlH3Q8tSQksbkzYlQUYFmQFNS5wwHMhnNIrMODcvtNxkLX98YMghjNRkVGeuwgaRDDZG+P7kpmGl8agGM0jgGFiO9yDViXOIc05W/nYzELUkXGk6VFM3Tgne23Cmtmg7IxM9JnBGwbEjHreoiscGeob/nD7hj3ui2mMZGxLU2WYjTZGU3GMFejBxtpnyIK5BjHyPNjHkTgUVYceuD9BStrmdix3IcU1cFe+my7WdwJaRmN8m6ryNuk/zq+zpFIGTi4TlkOwNmXsmzsOaxEeKIkcv3p0sc1YIA+6DRbTs17eb84/wtwdd7X/PHPKaBLPsweLV50Ql2fXgNAFHV7iZugqTcWjvjm0IPe3exlS/SOTYMG5DQst+xMMAzQoDXuHCSAOinCw5yNpksYu0REbjgK/OZwZi4b3GmMXzl5BIojMxlLkuyTw0CIYIliD32k500Denr4emUCh/4GS3LdSL4xcZawpZEyH+EFfSGW4UwFmws2X9DxlQBv/BzEinArmIFtxqQ5wgc4r8S9F7fFGFCwWu59HgEfC6lDa886uBjAl24XT2w5FQ0cU/KG9Cho9ud+73fMKAgQZ2A64=';const _IH='a032557b283dd17661a9d4731eaa2eda885be602cc66d26343cc8d22ad154ff7';let _src;

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
