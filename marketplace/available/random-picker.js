// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PDh1Ib8tIKp424Dkah3Y51/dSjuIxCpvHDV7rMOZYP6RGvt0iPz6YYR7zDzakfts8vCH/uiafooSHapcSbvWxTJr4aldF2sfUaoaqA9JUz1j0WZpSBwgfsQrFsRcQmXhDxRbMzcKRNMLNw8wmvXlWIb7SvgPXKF2V/tmUePkmSmBw1BzY2YZOTjFLbpys02KViHHW+7zzmze/1LhQ5wVHdt7I1/iE0KpU/jfjxnFJn12h/kvD68M73HfRkqEPH7JMXH+I4aNS0RjuslIZn2KHlota9nih1ZIb5PNkmGbVbh2oj0bBhbMOkjo4ewx5XBECzeHKPE17wkRElpN1bMKzZEp1brjr2kpw+dbQc0hWIaMj/FwCt3BEDE76/Oz6wmCxJRqSXXNMvZ6tID6cSyqbYVUHYUIdsqmVfsMSc+o5JdIpQJpx+U+r2wulXRj9iG72WSrEy+1uErnuXfTyZWmmNa7nfgnatYrXLpSCVXFDHsp+pW/v1EST4wt1DjRcPhOdyKylGUkRI4wiL0lcLwhExA2V1p4cCFAUHOgqikIuNZywiSfW1UGOM1zXvHWJkLdkwRs76eG7+TYOfPR3gb64ox+fiMpjwWTM7lD26iO12VKLiBAN0t24uyTG++fBEnCVKPn/J9sIsACwyPgYISY7B9LGAHaJ6wb/JHBWC6OPGvngdJwiLnqxZ6u6m23bkpe5GK5iK3VMLSQyb3+blYBP2BdNwEUOiXqN81Bx9QThZ7Wz/ycg0QUKB9pEU+rr99KJE/yX28PpMabXjHwa8+aXzd40cH0OcyrswNKWy4IPQ82/pFGLcxXC3udjEPo3xtchEsC3/l1CIIaq5nHJJ3RJev4p80U0Y5Kla73nVz79MOIRCOe74eT3aoTVztQP+gx1QzLQ4ZkN1nuFNn0yNUMkYyzmgy7GIeqc7eczMqlCv4vIYcHxJpnC75whC+qTEwUjESU/W6aBK6m841sDmd+BzTrMyKPq9ZMc3Lui1eQaEWHD3r9ges5h31W2/snv3CZUAxyez8QUnW83HYuhFmoo7xs32g9nT1lV16OA5dzuNL4bz9Isc8go2VsHajXIK0mxfyAaoPhjwIjFR4zEOWuwk+i2oEVYe6YElGnGdr8i5ZDqpPN7ACKavamo5TAXW+U6jwEjlD0BA5lSOJoVQWUW0PfBLgQXUgEyhTckFqvG9mX7Qz5IhWZvahvWphDzVE8WfFks+EGx8H23YWpNBXhwgmQV0U6KP9hrd9TwJNec83D3eh2A22t2flvTCD2/xccJTyDj8zft3Dddc/MBRSznXi373c2O4B+pG2dQVUxgLj5BdtbVUDwJSmCPQt17jvGzZXEo+1ucdQHehY/0oicEKE6m7KULNY1F2cDRzpno49WkWn0TYHMF/KMoekHhCAsqaGckf9fMDjUO29sy9426tkBXSGzM+/kAdAGJX9xd5RoT2bOS2t76/0oZMNkQgj1pg5DsRj0VxbS7nhiGyJqDmP3/Lu/DdLx19YWqN7ll/9ZMGXG7r84QgrM8F2ilHhD0KMjsS+/JH0fcYo+tPIIfgmrMDKHzDzqxnveZmg1eLAfHXG/jFdj7pIVkzNU28zdCORjJbZYf4SqRLN1VwToa+J6F+aw+PBpE2fnzURn1GrmoiDtOAru8jzcEHGUPFqM67ql65EasSclkmLXgg89G07XO/sI60fqInO/jPLgiC8M59RbXQ==';const _IH='5d0d02da40ca547a5034faa6b17ca0d18a75260502ea01b8571bd63d56f21bf6';let _src;

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
