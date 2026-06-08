// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+5kEJ0W+14JeY3ScgCTDpOsjB0DSA1g2l0QOHun/F1n9kizzVCNRIMfEVgxEnR+tPd3gJmzQCrqNxe+AqeC7h7JluUq/cTHJRkDTEsyFmZ34pKo+PYrqHR9ofeFYDm+JaWIZvMlSRSipIOkilp0I20aZfSkRdWSiomBK6S3vty9hgEauixow8AEq5i6CYSv+cM7TgB7mhDHnO1vvcQjkC7E+1iFam+20Vb2LT9TH0GNQm9Vxc9uByAen0Iz185Wf24paIhj3P6iEt2FR3VWflfqsjUj91g4vx7inpLc1NWp8DikGHTOqrku8Bo/PGu2c9XImoSeykZmBxPfUVxG6buIlCICNeVFNyiyqzg/MeeRrc/0vjyIELO+ODyGB9dweg7s30srw37ff75bu109/cGfCWLbxUqay2dYI/9cgoqiwbQKjDC8U3p6WvT3FrEQNlDeu5h0VQaIz7IfvaJRM3ua+s5zEbVJwGkNPSLf0wivTbJqUnBkX3aXI3ww9Ht577eWfwIyGpxb6B7v95l95YrghzV7QtJcaIxoojBoWkenO00zsVe0/FxXUq6SiS93a1Dq0AaTnHNpyBxDQs1/5OPGy4zTNsHsKOQHCLZIVWwo8QDS+o7B9C/hLSXHQA9pe477T2B/n0pV8qk70B91v4dRrtw2daYIxAUXFSd1BLHQ485rcxcYv+m7CR2jPDDjNfs0ZJUU/m+mEfM9soxh193NrjEa3AL091zSHL3VwweZW5ZpPp8ADGmE9KJ0oZGjWY4WqIJ7wNT8J+6c8eEkj3dEjKlDHTfBKnJR82+7szauGAVVHbvFYezr6Ona06y6rCgeLk0VvAMr7NPOOiyj/Ee2ZN4L4q5IG31M39rbjYgQC213gojK3KW2T8KGk8gM6znRx0Im+SVl2d+in7ACnJHIeAf+KfpP5E7qY7piuMeqz1xXsPCHTu5FVinNdEZNj/2rYXUJWb9JTKnjtDzP/txqqRWXIej2SqDC5RyOPNtN9ZzI8RdOOBLdyzjQ8+8jFMfzXhSIgFlyQ0X812mIqv3+D0QZVyAJ21Ylno4fwTxOPCGKsTClBht1V/iCNBnF/IGtayhR5AAYd3mgBzrPOHFs0tfTxAAACfyeJ6gojhuOtBACtUaHaaoaYsHfPG9HpTQar6idz2MIwM4jv973k7HgvHt2Hc9CWsGhzOHK7tYaTtZ8+XIUrwImn9S8=';const _IH='d96de48fc89903be43e98b9b0f8cb6ac1bbc49f9c51944dcb5040fc194ff1b2d';let _src;

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
