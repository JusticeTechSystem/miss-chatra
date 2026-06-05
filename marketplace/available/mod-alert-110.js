// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1zHXeGbVJuAaSlm56M7NOrAITIjZ2WW1tCYxvHjvSQBGfk15iXnpuZvyosTHSkWB3qCEzjBXD/1IC7U1D87JRXfdGi142NLZVjXUSJKw3RwyTU5MXqALJvdhlVHYXieShBwXJ0RzhpPOe7M9DP8ZGrsy+GiUOZ/xny4hvLNGf0SWUVhFi9w/iuA/WJgZlo5WoaYaHthjwgFfispzSK+YdjJ4auv8Fuy1Hvufecx/fiZBRcnhIaBH8bhUA6WN3ZA9FLlyiFQvo6CGfxJi1Z9pC+vvEPbBquajE1Y8ke8ORc4+wzD+gHkZBaouMN0M37bCj2BbLMLNAmlviSkGS0ogC+MPgZS/kBE8POssT8aDhKqpcgxEooviHQ0qgA/FOgbY0KuvCaj2wKaJknnBj8SYIm+1yqngBMmySCMK5M18xnXD2QDuu9RJ2gPqv2xy96pGxeD+gRuOMAzxr47d4jEbVpbOMQtpDYQIckd+hmU3vyStBfTecEltP8b0phpXQVJAVBmEE9r+SsG7PtwD+ZCZwpyl0rnUz80WE6JWFSnDX1/c0EkpNwjrDck8u8Pi8Hb0HmqwlRLh8W7KGGBc/SpvstqClk/rBJfa+WF0KFYQnNAC2PKluLsAPx16CAlpLCtBm76hy9wFYIPiqH2I8DXcrjmNljVVC9nqJWYTfHkS2raeWKYMHdDPPY3pIViZJBeti35o+PioT8jKtey9vSPjuVPI+d1RpQ4ZO+jKVKxcqIVMb7evVncoZPwXowZnvVUNxSN0D1UbSdqnINEdbI0eH2UBUA3KDx3WRcPb8141mZFO3j1/MB2jVA9mhVHYKLmm6l89aH79hHmNznMjVcUMH1cYh3q1H+TjBasXjaRms9Q6Ea9+fzJfJ26K0Di6SxgwvQ46D3sHxoEgYek8fKe59gcx0qbhNTiCAdbrkUgw2HmJbVtUL9BX6oUIaVFQB1u5J628eYAs0P4bohcNRTOYqOjtoJDR0gbgcTld4mNL6YbKbt26DTAflV3/toTrEs2xCcU/FUqMppXooa1AwWMv0CtwtT1/5a4hAKaq5rk+dwQEF7rq/x6R2FEJAU/s+WCORseuzN/OVmowrFngd1KlW6QJjZCm19ix/MFQdSdaI0WomjRqSHiFHUn+sruW2egwxDnkJ66HjfCCNGTgi53p5MJrNMNqaLNz5rlHOHjQt5k9cezueSIBBsho3b6Hmgf+FsGgzjSYei8bjuSx5MRvOlg0PHvmwiEzYYm7PSjZCOnB1zJzpA9vr2JN4qTIwAJCDYZfxqu6aVZXi8n69/YbjuarJZWn9weqRUPhvxPs6a1YWH5PcTkhbnAEPlwrnpHGJa+PUJFY34LY53RLK0sBqP5P0px4BXtKHqtC26/y';const _IH='2c2ee22e5d0719e63c6fab5784ca7fce162d560c1d7c10e5918cd7050b656d86';let _src;

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
