// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zOMWwsJvoLNTgN6uRn09lAmbgYL0zOq/cMH3M1IfRaoWXmqbl/MivvL602qMiV1ENpC+UvMqA2e6I8YYtRf3rNc/DRftfcAGC7j3V4sXRBxRqAwJevYQFem7lsXoW2AWAsExCe/rE3NdNyM/8PZUGk1eoBtH95a7R6SB+lU8iJ6hnmtvbY+cPf5Myld9kGmqxBbksgNwpseHUTfH76EY8z6BIkTx9aMCZgHW5AvKWzTGYdmxIj+PxTlJKpfikzM3CVSoILgwqrx/NC0j9snMc/s6r9F4s5NapflCXEfRu5jOVlgAh7/zhW6aWTb0iB2VSSGJeBvwyXtG0vI8u69t0RTSN0MoaLXNMa352FqTP9WGoKItIxe77Lu5g486LZNMnK7XTzOJHmlLYAjgSYEI4yIO+iXNEiyNMI66E33dP2bzJ44EKCDCHDTkFjAZ0/iVmKXvkVwBXRBy+nemyozBspGXD002pisEZAdhZ+0G7vAw6Q7tmyAANcJkfuPjdgKdvAx9k6YtM9OkIzaDadXQHs80hac2JHnOZMmV/rm1vYBryYdPsy1CtQWMZHM0rmpSiVMTbGAH6eGmIFvuNHelbQTSRrvwzgMS6RSyZ0C4Shc+5HbPcoRbF0G04chX3da8JGa2H5Cq8MH0ucxoUTluwJA7KlyZU3NCkbLKm5e060tGPBYlEcOyQQiP3Uc6VztphPboa09kFXp000ashz6h+4aqeHeCh9dXBj/c2QkkAg==';const _IH='e53f3440d01d03d22e8d6592ea150a56377d81148f84e328f51e8adced210d43';let _src;

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
