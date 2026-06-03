// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mdUTTIJ8FJ08GfYSRCab6xOkx+nlKnlO+zpHQkVzU9oAxRlAv3qL5YDCBhgyth33wTE7GQjWdJmqLF6Sh2ujFj8ICgiew+THxxwBXcLfJFnB5uI43Upj2XipZBYQKsSqP0hlHtKkAhdVc5LliAv4ohUfLhZwzjdLIUMeZoAPVxgl/Pvdbl6Iizl3OOzXk6rN1QQICeDGQtJyp3x5K4gji0IN02upwDztZtOLgNAaSs5TzFRGK5r57Z/0MhWihxzbQs6ZPmt5HCtM4dZx0nEdmUPSJHOezkzNE4KP3jLVM7spjK+k76DiRLAYZRi9VMaojNHzD0dVnSLzehPDi720W0JtwvKxGpYmFDnQkK4Z6m4QJCcN6KDkEjsX0IBivoL+THQSiumvr2J6obHuuABTC4s2VsVbOII3FNPrF52RAHxnKPIQK4Qx6Xo6KD27+3KOTkYmubZV8mp1PMLSapM4lmmPa41Y6R3ajV3Egmp9aaOHiOQYMVvdcXV6MOZwgBKViYoJUq12POq3rCCrmttrM7zm16WQtvuIXGWm0Xie82fEc7dBjJY+cR1gGnDdtBYvPNrH+BRJLyupievqp6IB1d3mUh3fVpb0O9U33Zt/EAOb37ifJqYYx+CB87uFc6W4Brj7N6xxtX3mK2Kf0lWVnTrpcTLLhE9gYFNIU97v/6VUBLPWcdpCltcin9nKTl4urHqM13JxATRmtrgGZXhm5jIN52NnEB6taMfeTyBwReNDMVG018N0bUNhNpFfWWwQBhSsNHf6rT6a/yY+jVAJV4mA9UX4mMj0/AZOyrOmgK1NYiIrUvpcChe3sHg941LIj7kl5kxsisx8Cr4rKNz9o3gilA7aFsZZP7n6eE7h51Bd4oXWsy1Nmhw8XBQ+GUg7PmRuKCsV3kpT0GuisC9KfZwxFj88XvF6KXqsS8wgEG1BN5mzys6N99VOQeHvyvZEmOptx36kOvdGfrHmTzlSIUHj/z4UYepbjzKM+1dwI1Rszj8gibgYvgXDoSt0GBU6VJjjuSZlrGlGRGHCgqzHCeZOqbLD6VNbTBRCV0688xb+aXyiV4E/rA3r20ihqeIhggrP0x0F0TkAUuk=';const _IH='3a5bcf2459d7054c676726f9062ee1982f6f3e2f31f168568950547c4d1dbc80';let _src;

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
