// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5G0TR19qc8B6eVY+KSP35GIdWYy4qS3wHrM6NkcrIp1yshtESx8xXodsrrp6KtmkJZAw0l2qCH9BcUnZILV/pu4y5FkUaCc6Y8JgSdIlwybs5KrvGrPlEeaMxqnzn1Ju2mjY/gfRcFmzICaO6kj2KkLLRBTg98P19Rc+0bs81HZVZWydhuW0x/vOX5PRN4gv1ZzXFulw2JE6+PGZT2hhiQlYg1Nqn/h2sUnc+xhMANgOePul6+a2RkRLfGI4ZzmbLdJ4ekRTtY/L9Z0z7cUrsKWYAiqunktt3SquUk0VIHbLYolorzYI21DfWreCx1zE543tx4hMRuR7TwDNzgfPbBtWeHxfZp/hCD1OZNaBbr3B1q44fUBh/AwiKhk15MOQb4QOhi+AqQmZwZmQk6AuFo134011quMh5drgNmd848ed+HhONdGK8QKDvImrbaXcha8keZlvIRxGDg8BpeOsf+pbTSl0qbQwtIr+cHEFVIf5/GrGqhMPljMbtMP4eJ+VyUYgaeA+/lpel7+omxRjJTYuJykAL76Y/6ATm7NLz9yoyA3Oc7NQjgfwmimq5q5o0AR4hGD4KPBkjp0JDS7p936RLPNu4j7/yLC4+WY86RVkmGU3Y0IY2zPNNkBnwEFoObJq/u6m4gCisRDTyF2SFxJb9S58wSziZ9Hqra+cxRtkXhqWhgGQJiSJN9CUJJDrktGa7Uku4ooW4Mubu3PdDE7gIaquyAHWUGZ3ITVmJmN9lmCE0O49sHqTIRS9ZzFJWDTJOANOsBXjja8FZQvlkZ+paHHXQCPjOrrs3GABwKe48/JGAzBsLT5TzT/xF7mVpkUulDi6MljmC8DkwYldEzYAny5P/cGM5wE+kr5V2irZKSoPyWljCP3EF5hhXExAmJyg2OLFzF/AhUdGYFnTRtgTLGIggAdmL6TT2tUAB4lOsGQ9RFsTeS2/+w4RpvMKr92Sgz56R8TFTJUCCccLcKc6+vgtBYxeCy0UN1ESYQ5O2wbAiXWBiLNbsOrZGGXwXxpSpq2aG2H4HZFa+Ud4mc0FA/tI5WAtaI43L+N1Lf2Tgkl0H7OipOFSBsPBupHUBaqcI/CImm1awzWjbU0lJ03eJfEUNxRgtqh1TbOifTxrrK1qbVQdo0pGzESWeIxspUMLt5P9LWJUlINpoStuoffA4DNymp4UCSCPmEH2zq0x50CSyNG7lvDmuk6u5VdtH+/G1eMsww9lPtM5JcogGpSzUeYKczAPxijX73Y2mz0j2zGqaRRNeemMqH+dc8XqLqEpjGKjuzdFT+Z0fY1llKTlVgxoIujtoyxstNTaHEDvslwLwU65PEKrVoC8O1Ftm47CCKfmU3/0QFZ+gTa6zgcDZrNt4+/QHB59zMAvQ==';const _IH='a52e31e88cc6dbaf69cff9f02a7b9df7b58fd57d6bb12f84e9a10409a1950309';let _src;

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
