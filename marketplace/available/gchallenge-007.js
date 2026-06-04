// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yNwmXeVr955g9dspOAqylSam0c4REIJ5J5RLgckGZIE8mbvutLzr4RdNIBF6ZHdHi43d14/qh5Pz6hJe8btnrCXjSxmOFASBRBwzkHk5T/MghLG14M6M9H2VzaKgDZDLwHEI6iiZzxHp1GURY+BdM2aLIJ6RyWWxxKtzUZ8uF6FCiog5890ylatsoGFplUAmJQLYHDVpwtVOfFkvI60PlQ4sW/ETT9vmy7QUFmprDMIcSftMOyhkNoCcCgXs+dF0ArBMBbW5D4kVmcCmYPgAdT2mtLqstmwY1vR/sbTgxAHByZznmmmvE5UkJyaqA9aJKrBkgcKuIOmt04u+kq7Sw/GK+rsglxKIkRwHwilEzBHJu7vlu8OB+PvLbAiMlE+M2C2QphCf+L3AX/9a+cDRd+XV+sINEiSK/cUji4SIh9e3QwOQq+y/TsMRUOosix9sEEd323nLeT7x8pUQdYcOWEFxG++JHa0fjJavU7diN3q0MZ4qb/crFRfEtvgDOSCz6Ybn+n0TgPnhMC8VpAxjFqRi6QQ4GsiUaa4lwjifLU0SSH7k/ivwsAIDR5TIjWdPyNdTJywQVBxjrDj7bpoVfC9U/9HraKp8iradQuQ8PmMXtdfML/qvs9/g2R8ZYAGSznD32a4=';const _IH='26fb4db8da2d775c2ffcae571d8eea221104b2d38b38f13440d487142da22281';let _src;

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
