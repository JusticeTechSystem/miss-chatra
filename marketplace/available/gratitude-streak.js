// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L3D8aX+Op2IZ3V7O6rXUuia9tIbpohwYkMX1VDGIZjQLCKfzj/MECYCebWNXncXPEMYX2QD9Dq/W2Yi3YIAv/SbDw+nCMYdKWte7Hw/+n8nmzXFn+0iBK03dlpLl5O/F2Nd/JBTkTS6PcXOLthpAXttdS+XxNphAtwCYhwmstrfJmM/di/+v/M1WLFxHH/Z5RAgZUn7IO1L5vsNTRD/3r5xgxa24UI4IYg/Uv/k0bu7V/O1s78Vi0d7ASVl74FJJS4icji1aZDkulTcbF7dnqUSX+JKsL87rw5PniJjtqsw9fBpvJzqfCQPluaFtsKueuiSZjSVs2X16qvfZQp+BQ+Rm6pJhmJ+Fiuw813MsJHKj5aHoQ6JWOieW85NyPEQdBa4ZW4g4V4jZH0zb6yY3sFiC72UYvpbogXjNXMXoRG5KsU+eYzrP4T9Hs+jPS81cEfiWrnjTO8F0q0t9mH1pV9fIA6jb5eqL5R3rxLGTA8pzdbPh8za9';const _IH='66371ebebbf98ff2111eab55131ec90e7911b71fdaa6fd3a5a59a20cf0728e3d';let _src;

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
