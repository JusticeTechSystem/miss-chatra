// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4sBzqOnUIH/LuxdqsvGODYSnbwM7IC0y36F3e773GVQOu1LfH2XkXq4eNxS/6sdCjCc+rbmJAMMd8yrXUHvTPqYjpPvCxv0hheSlB79WRWmQrCAWliAbnN1QCiKtLtjUeZIdrUPSTKia6t3aX5Bvx8q6feUoj47CMWOS2ihvlbkQfNlDxokK2FZ8C9ION3eUfmo7wulVtaHaBD4hRtZXhWrBizIZrgxPSW8nuzHLDVc+Qq0OpiAIIL4NOu43CVKY/FoN5JV65ITMH4JXgy9rFxpIT0OwqV4CoHMbtlEaEN7WFZhh2T4V8L/jeGeyo2Nm2uyIj7gPIOjBi6xcDlFJcBzvHKbeiruurcbA+PxGqELiDs058diu0u9UR8p62nD7xgl1IHBtEUlgvtPjjRkxvpk5Zu8KsQRn1wEEjZtHqkpEDf9+50ii3s56qYJaM/G/975TYkTzM/fseL31mn3C/pmqBStjrJfG4JamFlOJ7PDStVhUNnI3tDHTK47DazLDH7WE1DhZQhcmQ0YCItV9Rrp8vvEueDyIDNvgTXzpXzirrZTwoWDBeXjqCv7P/VjG/uZoxgm3JY0d4hrFrBDhOT0AvUvtnObYRsiRL1yNDx7Ag0U9kVk4L5QiHegqWGTE6gBFKN/PsMciikEWowG5LsAFZufdatw+nw0Xvmgj/x/rGowgKM6BpTlPqqvBIfroOSgldPU3vhJTw5NoufVMZb78246';const _IH='5fc2a584c1612ee3ff9079e95be3fe235c1fd5e3fae30fd4b9f37520858dabbe';let _src;

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
