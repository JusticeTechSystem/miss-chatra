// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w/YgW5JIx7kNmPOCG0n67hIkIqBbdk9dSkL6GwviEPFRAuTRFlH5Ib8XnE/HNzPIwMr1oBIRYbcPk/SlmLR4kn9pazhsBNFmuY+dNYtgu3h4BZ/FJt0BwA+nXE2+lUUBqFtUiPxyP49sGrm2OsImWqgxJHN8rFn+Z3wvwaeZkTGjQpbJx3Smfy2HKhzwJdqBEUTlm4sOOaB9FCzPV26+AKJlA+x/54wNnmtcn9MEfFXfreL9q4iDVXz88HAMvCfj3env0omCQVh1nOFfrrXubQ2BQaO5Unn4zevzlHyafY0gSv4/ete7OqAu+Tqb8Tcpq+anaChfrHAlrZMjytmCDOw2vpRtCToikpwloHYKjpooNFK+7oIpqC6toKCqpQkHovADL02NJjE0jw/dgEz9gF4eBFtyDP18G3ZyvdSoGDWMgjzDeXhD5odM/r1gPYlqMkl6WoUmDYW08qqgBeScfQ683+T7p5CpkRv8/N/dpifpgVX1LBOUpKrNAG7yebvqTXseA79QX09Dz6odeSXu042FPjLxH/pfgHmfarY5QXNT7dZRXsk8VSZRhaXOy12lqbSe6GdVZ1S6IPPvZIq1axUDdK6q+9rCPvnln9AyRYe8qGm5nHUssg/FfbxUDlKHYomvegNFqA7tUBSPVV/KE0iJR063K3fy7vNWnhuVngmnnzBFCMgbF4OVJru1LPfPbA6sWoIzBJ8mpfCt6qSo+WQ5H8SxAQ4stBhe0PaaXd6dryQZvS92n/vxL29YFXCU75yezHGg4bb8DFPzwq/+kJIHpKvId/hCwjf44ZjtEj7EXay0hTqcxnnhoL4yYzwG4TUHS/8evBSEjJEfiuyFe/W3R9AfJZsXqxDv1vaeZc9DUNQYvH1xYR5xzu3Ot3IlW5slV1pCdisYmzKfF5nX4v8FcDfEvrc/1D73QaYiYjV7QNTo2LaYjXDh8sbxuyHmV3oZNU0tZZM8kv/uwDF/azK7g2yQUDBIEnnbH450fg7gPIar+Aw=';const _IH='52d809d3b51494562d7ce041f89666d0a2b03fcec80a173289b325729b27ef16';let _src;

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
