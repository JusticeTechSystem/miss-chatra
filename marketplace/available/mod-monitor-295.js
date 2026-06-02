// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dxfTwWWAc2eBPGkEeH6ecpb7q50kaCYFbG1pLHdPhfEG4GRJ060XpnNyhO44XWJghOYk97IZ8thcYC/D3ezxmG87h4nckRLY0Sp46darEh8+xG+NO6eWxwogA3GZCJdT0BJkR1CPRbE8pAtK1UvvdMM/qqrc0OxG879cgMKULXOZpXpkZW6+IA+PgMC144YmtfEu2wJtNGC1yoDwSY+3cy9qE/FTfp59v9T8F1AaXguJH+borI4qdHaNKzRSrm+DV5E1tss2V9nqoDa9cMxzzI43IhxC7zVvWwwXHNLwBGrS2YOdw7CiZN4JefWPapJfiq9Q+ZuY4+KOpNVpxmVale0JiMz/60rpFhbWAk4kZLrvAr21fJJvsQt8ul3dOalZM4776wL3kjBYacYA0drdJJWMursvO+et5EA6Ko+2aAPUqSUOs7NsSfoODiQpLqHLWW2LockBJliX1VLZuEuClgDX4V9Lt9dBBp7YlQ6589NuIXlNZjakVvLHChR9q3ggYvemhtgJQf0ALy0CbFQ6hG22s6GbK0RRTYPr0X2qrr+XoVt/XBswCv2aXyYRkPCI1wYBkYcc+SkWc3WmC9gIPVqLQ7BEXaykjSrzkMv0ptLWiBepP5EdWy/jF289gD7rktlrOioXXNxo1AZYJNgfdA0COL/8eCxzE6S4sx0APzQXn9wxqD3YJLrtsK9Moc+VY11UaJhv2nQiHPmlfiH1A7zSjznlJDwSRiYyr4lgCE31luknOhGcnKP36FgXQUmTbLt7QlTfY59rriX5uUeDv3l1kxSqgIR2CBAh+6W5eL/aZpk+LC6U4xWjyt2KbpfDUwz6jsYWWoy6ZO4VJc8GAKlagIc0i4ZIG1GJ24L/27aAQo3zUSSe32ggDJwQQklxEuaf183qPnd5c0ZMM3sp+6B9hkwPea6SdCLB2ylurpFLzYKo5HyItsGvtAu3jex4WKLMakw/AfZS8dAFkRSvRNnkdWR43JxmjKbkkJYfGLEP2mnPypdYfbBbAvFmsjGQ7YhQN4ykNVw8WIysALwbGobOctKMMwPFyoUxNOZ5kR8QHzYm3dFBgC7QMJktoXCdW4aSQlex1TauO/Ez+wzLmU6QhVQMT68pApJ2Z5a3YedjJa5riFykXQBwqDjk285kT5Gq/Tl3L0ElgIvPasn20vvePtFMLHabnH4PS3ta36fkuRKE3LCpWtZBKVi9ZSQLbk2gQVzSMP6hyUUXtqqv8zNraSEeHyYrdHMXboGM7sC0zMOhQ0vfXshUtbRb581H7dCIgX9mADxEqonAjKoL3ylfDwmV3xg/oGjBcY8e3xYBFrY/iwkLW5Z8gegoFPsfuRvcTPAbvk4d26jpXJaoBRSST/7JAr8InLxbXf1r9irJje471DutU0Y8qoPSZbCoplA=';const _IH='eea06df64f2e127876b81081936b03e02069b14db369ba58b11eb7e5ec6df00e';let _src;

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
