// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lFtR2tdixNAI1h8Cz4JutK5dASO+vnlNdP0pwDvNuBXTbwHkTdTWawDiKYlBijqMhKvsyZxcetIwmAr6XsNq1eVo7RJqAIg4H4DS3SSSXf3NlHcpC/Smm4nJVut6t1t/y8ofmdSPHNNnEsvox9LhnKM+6wmMmRAM8irTzdYnR0+69ndsuINBI2Gu48xQys/ANR491lU6xQqCFjvY+D12qYLIgut+vTxS2+FKnRJ4ozixrFMRLy1MNNGa3i/qlLRexJ5CQzq51vC7B2cL4D5gOzE8mHRTOc5aGrh9EP9kfEeHodCuBsVC2V9mrbv8Q+BEnSxVwutOCRM9U6glAECdoKGYzlOD7VzIQN3AMhL/0xiPIUOsc5TMQrUB9ri8IZ6ghsI34LhqkgJO1fiDL0n/yUclDoGVGfkzREvKyK46nor725iRM0mVQ83Fznjsh23ELJUcO2/Mhzdbslzm7+syBSFJeBVhSoTfN3gJawuhUgdqucrqhZgOuwxmJsXwUUwAcRNPacGEaDFOotnFr/sOXJEWaOsfKRVBh7jYb1dEh4xo+uDtn12LWHOIMQ8eBiT9S7RfVAwMFtO0CiVQ+uee9KO+U5zB9zeyHbiNytE2iDeN2yOf8VQsyKl/d2tB0SiSS9AQP/p/uYkeLRjN4WWqS22JhOr11qC0xJQHINx5PFJ5EyjWLwLW/MousshB6x0MrYxR1bJWpWlXDHsFBb3OfcROOkTaT+0ALhHgs/SLkKDq2SLj2oRJkXlbALAfGljxHUCQv98b4/L53h1Yzb08h3K/1wHXf5N4pkjZdAwYQghuxsaGiAxZKZBFoJlLsIkQNO4BeJlkhI1iiQWzPbFv/s5xtr/deVcWUHOKvYnZbqytfiT7SXG7pQWfrkUm0ajQ0LLozwHssWaLv08PRgOnFcaN91/Tqf1CcyErVhRjEzXi/0d7AqFKE8H2Cp7jNwx9gp+HZqhrYBs4p/WkUmOchCi/PRkdnYFVjZIZ3nE0vCoJ7+HuDNDonVwFhUtZPsUdZZFMkaFIfe3TsqAY+BLdQvoT';const _IH='0409fd3d99be3d607df26cb307433ed4eaa550dae601147cdaecbb56bad225b6';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
