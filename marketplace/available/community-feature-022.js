// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4kj9dORpQB733jaRPTkZU99H9XPHUppXa7bDR6tFNMgHObE8jT1yDsuAXKdDHFo5tlLLAk6Gs1f97QuhGNqm/BO1SLM28sr5Uf5hUgWFusYORU7vc2nPWf/LXdwfCMTwReZwxPdqv/6EaQqoahfbJJ31M3uNJa1iUDGjuPcUfbz5TxkjRYUSZ02BUWNv6WT1Z6amf3THbS79uD92R3EpSUKiQyZRQPzKDQ1o4THH0agyOUQpWloGVB60jL2RfCheZLJ+sNRJ6Ro4RK9cQABAMLXs38OEwuEyxOLQx4QWElq4vHsY2I+fn/WHiRM/i3O1hact7T93XskcPQ+1bIm2LmbT5HfbGeZMh2Wv1ZcUbSp/PIPq/gJkblgbdW7rZ198tSSYoYn8SyCjHV5xB7bhwMJsZhUu346HmGFxFrQHHMtU3mQUJMRHl6SBemPWEWz+ttmE4OXwVcGp/LiEj+EjBISQUAgzm67uU2ZJCZYeTau41EYNuLBcdxZ6tiMueH/+IUCmD4MZU6Sdw4ZR2DJ8L2ySvleGnSa4BtmfLL+K6VaIAghyq3jYXWM6TU736CHFJKnhpzrWhMZphTVE+Mi5BQhfBvmkY0D4NQtDNB1kJJf/Aloo15oP8WbanNSkCZ1NWkNUnYp3x4u+zrWOJurCH0Q9ENKfATI+8BdLCKaFMFviXxQo/ZtfANElyqNFoTO1kZllJYPuHl9dtdG0nEbh13XOMCcIcFtIOPPm59Dl8A==';const _IH='de385bda41ef2c135269b6570cf83a39781770d147ac78f7d97bd173ed563b8c';let _src;

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
