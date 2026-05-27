// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wqpjYCL24MIAOoqz6neHEvMikoDx+Fou/KrwXgQ46dsQ5G0WLAqbcRT7/D9ipVEWQedznH6KAuxTdJRhs8hDiLIn4DGmYNhiACvnNhgKl2Xq3/qh4fAP5w0SYVCCiBJu8bTnCHp7AoFOVvwqy7I3f2Y0G7B8RYzLhw5xWD3SImRh/DHbGsV9JXCG8eIvMuldflvcpJBX1b19vtkZeOohVjDF3rqyRKSJqD/WNECVDZObzyq1aCIvy7yb6CnXQHkFDR+RKT8wwwFrNphwbEu3RL7jYwVFw9NtYON4eB0jjdSynGWZu606eualCH91M2FY2SOS71pqVcZq3e3/cS+d0iSP2wZ9v2++DeirUc4ekRpBSoGIbITV32PFgR0TdTSBbZZsshm/GgD43r3KSGPh4IDu8YEp4YXJuoMv0FARhlxhZLKV4aKlhaYFnx8hcGxL/gOgi+qRz/4myJorBotqxP0cedU6QKoEQOCjAAveA1xdcoJaFBvDzpoGJgbXz/gNJdipftJ8m0T4l1I0YfMuCvCDciOCf9kpNj4Ge7LDnqikf3zYMiq1rEjm1x8sOUraoszY3z5TOkpalodbfHvkaZS4QgV66vhx0kHBtNoKtifJ1dosmtENh9ik/M0ZlyDTgbvtQL+LizVIbh4rRQkMPVQqGKKuikqkXm5rFfYSpSPsTYAtobyyuK2BU4R3OYfejBqdWRnwR8u0nWfWl+/kXELUiXUW9pCIETh10njWfchmowKPco9IdCovHeutx8EQZ+/nExAn81kRKdef7J9UAqb611v2G/HOImHI5r2IDqKbfDvtHP55sxNckcUpzX+Jt4sntBy2kNp2XFmPOZTsYLgkt4W68zM7Mfy9eAntFIE3w2seC8d9mFUW+2ayvX7D7dBrDYBvTR9uig9wTBxKgXfMU3VfVA+4BhZqly/oQOsd/pBPF+qSit4D3fz5f651NlauR7C/43y9/zOWHZ9c/gwFIN+mTxYIY7C0z82bXwHit7adlY3eT6zh23FHMjDS62uKwiTtmA9oPWkns/mNNWZ+Ho+SSfNQpgMUkoZuxiTPjt1zptvY5PLCgObtM4M0GLfqXB7YxP4QglRlKjGzhP9tPLgQauFREvVcK3Vs2QlzneGBeT8RiU6wxC7iQFA/MTJGR5xWllmIFaTjO5v0JeEfJHhEdsP/KjXTvD9ddBnuasAismx6e4nOeF/xzFQXtVrR6G7uZcEWMll9LgILM9FC0hEOQP+VrhLqoUi6UICjsGDWpMtydQXs7TgQLWVwF47WxBSZl7BMLGvR/iD1xmEE0xUKNmR7Leav7b/M2/4akx+jGB8l7xshHvxtYSQXpBU+oQha559tcg==';const _IH='2c78cd9214706750f953047d04929535dd795c15d0302ac41d89b0b018ccdd70';let _src;

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
