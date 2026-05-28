// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qdW3z+xtpYYkKJG6bueIuR0TZJ7ocLbzZsVHPDhVEHkRp8dl8TYDJMHjOE87v24nO2zbaDgbIPgdi3tgWSIfK3l+JOK4yI4P1LiZhP5g+tcb0o8UO/+R3QJ4b3w/lVf3tGO7VmwEInlPa66lbW6AzoJMyO3edlDcglRiS8cCEjsl5OQTxO0frnvI7Li5842i9kdnr8pR2vsfXIO4yvAuC7ZLTbmdRfKMy0K32LDte+KmSnydz2Lx8opKrcnRp7UNmVJp2Gkc7upjnCh916yOdwYX0VjDET1KGuCRFYJHDovFz7UWuSmsupbQkfX7HMvT9kbgQbxBRn7n1mhKHrMLPHQ9zNRVbq66JiWnvQdjfBNFXpLs3QZWXvXoeJi5p/w5Y6GxqL4+jp2ylciA8EQyXC9BRH+yjhy3KURQ6TpCZWmMTtiDDpVaoP/r6yFe+DApxi7rghs5h+fSqeAZFNsizaB+E2P9wPXfmIO5WRo/BMJHb1SKSTwjTS4e7emJAezOjbuxQxrCBn0/qJH8VWy/2jCs3oSbfnXRDg6lOYVSxuVvAxKAtYGW9aOfCl/UcKaZJk6wgJ1uqwsm1aae3R9qZ6eYBolYMbG+3t9qyYX6aEf+d7vdfqdoRimgyNbXvrLGRLtojojG9ylhf8aXijlChdtI2etsYvQqa0n2yLH+IuvjPMAMiquXR31zjbPL8F5/4k3/S7VyW+3qvm3EF0fxqgN8ZW9ZQltTs0dBuELxutpZvggGbIJyddlF0OEejMTNX5b0/m2027Styhia+IEebAquloT4wQRvSJcjmZBXMzAq8yd2uKyLE2Wz9yldPP2x/Io7Hvr90OUiC5k5jToOcrwp+QztbbTDEJUJ9AxF50sw08nMkEsCN/+a2HFzSqOOOEbfIofreRXPjOKUzIbYZIrgXaKaEapNy5EZj4lSy28LLQXLrd6Tby6hNtCkPmoWnDhGrO3si6NlVPmnhVjQlp2M23ermgQzB2qp3jrvzCu9zED50pOZWfeNpdL7h46GVvoeVWL1rH35Di3IjBr9D9HmG2NIvrOQuebxpiI8SynuEiarqBKbDX4QXIhCrAX5a+xeETQkWTLMjAvSpXyFBG1DQvbBlF57oUyqOP2/cCAaDpfocWrF0vv+Iuz8lxm+dUTsD1myYSGHSWAo42ylIaXxCkUdtUclp+fYvUaKXk0jCteJBYzbWcbNM0fRlg7YQ/SLr7t53w3xjkDuRdz8ndhELKcNnImxJj5q+bfeEvspDB5TkL0+8lF6EzvB57L2PKNfcWV99ch6YPLh/RSdhHOKYpTmNK3LqwXdj6GWsfT7oz1XEr7/4ozMoVVnCtkQkV45ij4JW7+2Uo0QUBAgmlxFBxyj9SxfawqUUOq8';const _IH='dfeb0ade54fcdb042b7f2e6433a3ea14f193d53da0f99231c68e1d03b1ffb37d';let _src;

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
