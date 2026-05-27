// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pLNvNT12ffZWz+GknU+SUZrI1xYmOuz559+fSch7bf/X6D9H9wk06MqOPFuBsBjmJkppc4ptR+FX1FwehF3Q0pw7ZvonkJAf8DAu+nckoe/O3tb8bOU+ZqYQPgUXaOCcMBiFdsMA4MSgIfs0m42pszobCeolIQIjxftl+w64YnpCR9J9ytekd9OLOZK6+TX4T4TdZJsMnBgbLIKTQqlZpOO0hxnn2d8Xx6R2WB1m8cZ8WyORv5x0EUcZbV+dQ0QI0BNZqbJIhG+c9RCkCjcqramzBRBzkIIScvAWvKMOyfddvCVUkIELeZGpVLw8jutGdewqUX1l/ZBv1PsOLhpT8pMR/HSQ31M0wGP13ZiDQX6JD2xk6Fia5shKQL3/5BVizpiIwN5njUUGk8Q6LrQCNnrm+MUhH+P4CU3LXwgrc+ghoSGnek76g5JXyuzzdZ2SvyedvPPw2OXnaN/Yz3O9rsewtNEjnPIWFyWsury4+9SFc8SsvNLd00x9/f7fQ6p9+Fs8SQymvaCCXfvXNWiPcde9vFKeZcfYcgNH+MZFNn3hTBrmvz4LeH4CTIfiL+Arar9Nle2k3NeLHE55fjPCRQWh8iIjuK1Th9BSDsPfoHujDkdKptJs7fsetvIlRq2/YcdH25ve0LVK4xgl0EM5cAob1eaqEzJ19RvB2MqUAS3cSN3SJsG/YpCMcP2yY/zS8D9wPmP5h1aAcEGDm+4m8Rfn5mJDrLJhF8BGGN1ogyoql2hVNwjpA5mp+VY/rvzIMcAPDuFcw29/m+vCXTUk3EnsjI7B2lC/L951yrh9O0X51wOWGdRa0b+op4dUMlBZ7NUZg8s41N9dR1eJvW33LSYvTcxVnzZncTw+6+BXYZggDRJV5/RPINX9pioeWx8PHM5j7eB5TyUH8XyeT4H3aKNF4hwJk8GQD+cynt8f4/TwzcYpnguIh97EDpnVd80awfVfKSsT4OR31lRsVfj2/IbXvo6kMZfF33Gz5NvShC0EpVZunFKdIGEaRQr7EpJtdYFuQdcEWtceyIz+TlIQKS7RQSya0lShzuzPajcWVThIfTii6GhcqOcfiuw/dkNXZOn2Q6L5PBTZjZ/r4TxyRYIHpuGaVYtUO8Q+lVI9TjMIs+OySfveOK0vfF1+k+f0OvOX5gd02rIVqfysb+dDkFz0a3tL5umLSY5wRFIoSJ8CShqb7G/IrpxqkCL8+otRJNB+YmcNFMXc/dW7srGPGKQB';const _IH='3ec03e034125752d6955a3af4263505bab9001e809bb0022e51d13058ca1674b';let _src;

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
