// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lzbjvwjzxVfaxf9ums+sfFhmqt23xXIavDhuDo3tH0/V5xty9jZO7wU/trN9pSpuenRQTLWfQGR6NydmCYBTaY17DGyW8enA1WozlZl+G/HEGJ/ot852AeFFeO+Y5YdsK1Jmp9tnU7CMcEdoriWQgOHP3jfjSPDiwA3NtzRP40nG1Ou/sPnv//dGTIEBxvn+O5/OP6IpFZS3PpcKzSYR9LVjCNbA+jBaGWDEpmqKtOtIivUOhbREoBONurUX42U5cv7gEzhRFy6eQHyuVjdPyYl/CM7kbmhP+ICS1exK3rYZhw11G59s/8pdbO2R0hlJuzIGr5P/61IiS6zCc1QR77WAHbmdoUaVVlBpXArA9IgsDIgns85CZrgxrObFmLiI+AY1IbqrKei9eXX9JWyrhU+mqJLBnWec95+EM0is6co1/ZhaqcojOaiGpSAjC0hxETg6ftnc/06FaBUfGsDUe73dmeISDYNbxsGDshVzi41ivBVVw15Xdkuwod1+5Nyna31i6y6+hoF4p+XeqDQ97byqXCqxH+1s9H5NP85T0+YmVV5bb5i6O6JTIcOpGW9scpxXQARYh9fWNbLDKoc4hSFNa7ouecl/+9E9GCkIIy/5oRg7e15eyTzDJD7aW4X3Uda9LrZ5kvR+I5XWVxhiymkJIqGsVZ3len885IQj9mQsSLWvc8RmG259HLSezO0hx+/UzGrlVG7deF6nXW02V9edcGE=';const _IH='475d7ca888f3b654e972acd884d6146773bdfb685e515ce3a9448115a6569447';let _src;

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
