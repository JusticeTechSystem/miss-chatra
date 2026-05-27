// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pBIxm0D4Jrdh/8HS/r98cXVrhNY83QDm1872QIxIM8Izu+yKwa0qUlN8rOGaqUaw0yePzXpLtwRXCCGkuC9cPPkC/Qew4SD+FjH/uu/Q8BAkoW3jR2NX5Zzt5CxepWaEfEHqsigNRwthTCUGiVvIlH5qR70c0xj/FqEa89G+jYqGLYBVhvjYt3vHOXgnNuXu+cwC4e8+rZTQax/cYThk+Dth+S/A2p+n01KOpJOZW94UV335AJ7rrp+Gby83YrYLQb2e101ybkDaH9jry15m6oMvouXkdAtYcCwbpFB0bP7I7cTXKI0TTDqaNOajzQkxJ2y+LjIohUI0iT7V/VpNxJW9NVgtnwjJXIQHfsKf836c3fpvj8ljupNFaWqXtBkCe981VWeUmCXxlZ5KoEknBckQXay+BRw6prR6tPhqQlawf/+1k/AtEWXgVA0F4w2yIi1iShAVT9xacctFNbDkJ0oY7R1Y3QHlzB8oCU7T0+8cTZNAWSSOXqJeRK46y+QYMvqsEWS+JbQVgTWkle+BesmFFgaqTnwx7l+KbbHFezruuQX560dKacPbMnVTSeR8s1u5g+EOz+y78gi2YjMNddubXf39D62Qe98vIbqSHoh2K1VOhmeO9F1RhbjosIDNIbOVcmwV89jKEy9w6AEnggbORgEbD218vrqrk9kZ7tzWxWx/nTPUQaZByxbLG42FuTr/QIBErO1sToiRc3s3S+2flwLMia6uz26c3rM6GIdNj5qxAzt55jeP';const _IH='53bd914569c594af368a3cc2ae7f9804e9668fd358f5de4437fc554ff0e45143';let _src;

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
