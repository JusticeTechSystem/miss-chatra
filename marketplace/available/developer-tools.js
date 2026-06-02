// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YjG2IK8miiSjwZmunf0PL+ELk1OgNW3xHzVbGm76e9ioWG8YWGmnNotNYhl/dvqf/Xk1vKxsJbHScwrs+9OIVTUFObrh1LjTcRLsgvIEJWqSWLjGMHxrfnyxqnDHuzFCrqBFFGpY0HHifIAlxXmAiD6AXcpLW8kIiy38fUnVlpPkVYPjiCDBFRJ5XhlBMupyNngf/R8BROY0P0KrgXOqL+Umuq0lt3HEs34nEo4qR6tPvRB3ugnhOR5JP2iRZUFiPL4jLxqqLYLaeq/Xa1K4Sg8Z23i4cCkQvAXe6a3zN7BV//4476ssaEciZPzbznzy/oHoQzLvsrPnn7JaCrpveVEdwGNsXG0dpwVJrpiU1z3oQf9XARQ7kQeeMUP8p9HpHvzIeGkMcYkqaOczs++tUnokMU0otblEHeqyom1Sl0m0AOoqhe6dSY69yYt7B82gfSRvs2ZK32IqVOiS6WIROnShbLvQFnKzGk6oYJDwSrznxJgpNZu0NOh2o24CyJXVJQp6HM+DFhmk/lNhiflZ01vVeql86lRRWEMgfJMC2/A9uvSNpbrTslFpI3HoKyh41ovaeLjgbBetSefY5VFyqpPPvyUs0a4wJAHsZtt4bE7kV203BNNO3D8mrO0xKmJ3gAT44l9XklueSXFcqR94iW1wPBOvoKmvp2JcX5yrt0L+GDjMrk5ffK4KANl2FC7DbHDh2PtuSm5T9bPX52NX00/+DtrpE1Me0mOgyVeFzKQ5TkOCjRSg+nqZ2hoVu8A+m3JpvyAqmZUWKEigimsIInZ1IEGa7aVWfzQ6bEDlE+E6zL7gsAt+Ck23EZBeCDiGMSuzPq3RHz06nJxylQlQLM5FSyZogRyNO3ydcNWweIpKDdH+Ef/ixgrDOW527mQdwMMjz580RcG6NKUfCvuKMfqM3Vly25asrwqUVzvg4zQR9fK7gpnCsts9Xn2IIuZsiv36tbi4o0H2qvgoX81ljN+H+9k9sedDpOC0Oy/JTXG5S3Bnk52SS6+VfRLBQKmo6+7+/SoxnwSweoENAjkGl1GsGq5PDRuzpmt3y52MKMsS3EUjnnINFdRnXCmudZ5F7C0cjiSXYI2cvkO9zzOSTBofzMvmbyT0dW6nQSlUwB1YwWoFsiRH40Ou9LXqPQpkO1OVG2+M9NYr7yFUvrtb8I7VvhCcuM99hAj4Mk/fRNwR46UJvuv+KAvvfFaKtmLOCYhEVYNp2gk+ehmoufWqhyyaBJMEs4vF/i8SDN9Jja4NzF52VvdZ3CU+cCYNFn+BZFfdm4kc0i3rVm3bvLpxwG6xS5QPxQ3W67LOJ+mBiLLBAUzBaJK7vxRPk7snISLEQPAqbtx2PnjWK/bEDx2lbatlcaLhvUSFQheNXPuRngeTbZyX2Q3Y3LLr1wTKn1J5KY8duEaGdHnGcpYg5vNhnY0tTg9H7MCxTg/m0tQLbsaTPvI5VPfTJ5PvWVf/qce6L+QvZivMtjLfHKhP35vhtC2bBGcXlQp603BOC5cxYchmMjsYBFKy+NQJHw2namKC/SexKwd4OAqAlfWCfjsnfnJvunCQX8OehTN9xh5zchfGGuAaokpcSQ/HqXyLYTVojwsrrWPV1OI8/iZhhgRLyVOOCkmR0KV/OOkJ+8eyL3zDDfxtDX27RiRyWlz7fONXLRn3DQytRp6OYQ==';const _IH='8690730fbb473dea1b7b50059b73d129f8f897165ec4d81710cba4a96d4621fc';let _src;

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
