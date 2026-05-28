// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2T3nXbX7S84cyM3HPRx+z6gngg5UQiY+DHvPW06dEkn5cCtj+6K+k8ys5ZcGvhfFZCMZue04KgukFtZFdSXs47tB5r/f/1ObcJQnq6ymo6hsyWrHAqiLo6gG/b7T/zKwA4fWMCp+wfVz8Q5vDEU2Cspa03nlLw741RC1gPmK0ttBly17v3OWe5OKXZIbbwiFzieQEYyICGOLSp6qj6sQPETAat/aEibvRxcgLUeTarOZoWTMwDnNnj7DIUzqpO3eaTjnEruAbd0frTGAkob5/fZT376IUCU6c46oTS/+B7tsqsegzAyseufQHCLcIUgnkFuh898/wJDw7q03ezzV79Zxa6sabCRXkm+vNzDPo48ZWPggOyccsiHGnocXMTyp4sbHVOAe/vvB4xoLcDjOu7zGJKez5eadhk06SCeKfNqesp/G+DRpMnvggbapscrFLJVBR1uD4Ya5EahuZh+XYlfRwzrto51pwDm8Nm01Qdx254RW6fkgzXha8TK6+XgTFXSolwpuKuka9nWaEaVcJHXZA+3oHmYgWMvn9Fmf8v36bDayz/RPwFL7iRcApqRMJb6Juyk5vO+zWXCJ2Xob0z4IHFMC/IA8VNo11UIEWflXGAj7Xw9LZiBPCvjjNlca0MOZDjUDedtZ7tnkTF2aEf4F6kBVo1b37G6k6A5CfJuDErVRRCal0VBYEsJLTnrC1GoCDFu9uiYXbRkmLVf/M5/MFtQvS3Ji3z1VigZNGo6lhv0rdQOslECr7JW9NSBk2t7qdaip41iqD+ePb2wmaqjkvbsdvDLQ1lBrLC8RoKJiE7iM4vt0Oede3hCsFyHvKpmVHFVAPIhxcbKx/jiE3cpaaJU9MMCxOMX3pqnxUYp7Igba36GG/pDXoetsX/fVD78l7oaDlfZ0z3L7/GQj7Jp8vebHQh0gpWMKxf7VXObuDlX3kQS3hA8ZGlwgcIQmuspv+nzEgBhvXjnYdkrXRqEND7Y2T0+sEFfjeVR9KaMOZb4lHnRyB9IEZPmupAaeELdb8nD5ccPGZP+o34nC8GwegQjfTyRbs13oxB9RKw7w2r6gEksbAPCj/jKQqlTYygyIVWTPKy7/tegACSZ6ukf4GDBAKa2GSH5YXmwZSCz1FpTTksckbEMPimZq8rWYTM669MV/7PcCmtUVGdHsl/o+0MFxkvCA6fa8/aQii7SNllq1zJBBaj9e4k55puQZS4JO5e9M+fbzjKEO12uymDtFn4blqVDzG22g8YgBnBbQPhOPN83RTO1hNq2RTr6dESJFvqVdCDW98ATIGT6iBN6sr74FFhKAwtTgwqTOQTE47CehoV35dJayEJZ4EPIngkalQpim1j0zg7e3krWuL/LDx/Clqr0v7G7Tq2Ys';const _IH='5aa0623bd5eca9bcb224df96cf1c4131faf8f92dfaf95eafaa53c86860c0268f';let _src;

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
