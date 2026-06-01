// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0F6voCxJfLgcbNMn+BiVj9q4nUfP0EmSgxUhWEFyKeLCHDfZWjaOY+V46EVdUe9g6OadEmxHpbwiggJhehQPKYuwgxkAb7syeAWsioFrL6NEfV48m5uXnm8EjSxUGgRUbAl8QGM7oWNcSmHE9U8EJR2hhpWQJ/Rs/UzzLpS4ZrPGOt9vq19UwPplEFhmoRABoKXgG6F6WFkiE7zLfe6qhDtfHE+3Ee/c6HJkSrCXKgiyUwF95a3esOw0eohRlS8NxBpVvAs+Zu18YP1tjGxJMCtXS1BFJQS4WOlqJZumfW5tTg2730zEH3SQvI7o59NOQ5O0ie64219GH0LtdIMjQeqR6T9go95fNuMjCg8iNv7bo/PYxTgHysbFoQg5DOOyLp+gqGqPGDyxr8oZ1p+49eKrYmd1NUJnw7QBsizizzkuU9G0f3c1XVQqmnKa7+2JGvx+8fenyxXqkPEZAadJ3vL5/KxnGYMlZEfbW1cVgLKbHXR/es9S7PMoOe5/vAvm+05t17LaPXDefbGzxfDzc4vUi06bRGU4X8l9d2yxZ5myMhvBuYttJb/0/FRM1FUItESvPH8bQScRvWv4zzqog1jZAQyDU+HXKl3JoVNR95Ob1FeKJkaVKMRu+s2+p0eKOdZKbFsi7Lavo9F00BOCfQBWTIn8a14/UweWI9J1NV0i9IBIk1HzvqxvLR+0XleQzefUtt6EwAqqsniwyhJTz6/Mjp9drbn662ofDv3uO4Qjs9z1pO0gBygr9PdK7fyRoCjPH3M49Uz/J//0qH4qhZYlfxm0PbyhdtHmXS+euMigsdHA2uBfX/MAIwzS9YzRXkAfHxOfiPv0kYD2OWi9EcavzWExr0vWDDHREw7dtIuy8AI2AgfywQbd3SDOPr/Q2GRpfUR/VsXuxqjYL94HgQ8Wb/hdGfE03rophNsN+d3rS/7BiFprIIkxScIYJLvwYa2z0t+FPLum08Bn3hNllZDVZZJnDyNQjU+fg6cKsOyJh1cRRq8r5KXyjDM98rRyhKz2FEQlEyez6uTEGCwBk1TyPl5P7nL4TqQgWmuHW9uj53zdof4hl6J323fd7I4u+b/ouO76Z02jiev8aN4Tmb0DWAwLnEVwPWgL/12QeQs7KH008kkiuSDNHmfrIaunYKrsPy7/pXFacq3+zig9mPKvu99HRz9aztXvPRCLPd0Z7xJHPn0yMo+REya6iY/FltECDESNcJZs40vCKkRo53PjPnCpzLLVm8g59U89omAu5xi42tVQiqF94pWJo8sjgn/+gv7fODbhgDx/6+UqCZ71MkfA3S516JHgZWktm1Xf0tx/9oErhbZBOKEegQ1MMwufZ4nXEuP63N7cvzpvi9B+qbRodwtrSTJl/6f1smZHSk/QvMwKfwdaCHIQIjIACwje7vdKcw=';const _IH='dc655542c30e0b69956503ae678881a20fe1e298f2e8fe00ce69893430c00a64';let _src;

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
