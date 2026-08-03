// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtW0UY7Gd0oITVIZLiehCbQstA4XgrDIRfd8PWD7LMxzEtaSMXrUBobPCIcoHX58LSuBAX4Rg1Ob1LlCV0Ib6wCagA5cLEfJ7IxYQlLiOm+FWibzckNAbdLo6ITptnnzP1Gyx5CXkZ+OjPU9Ul3t7QypGyJQVE/D0Jr1LIl5CQ52RmNlKTvEetu972MWdcaQLTRfJ8GZ1oyEPZtoTshUXrBbDabP5I5yeaLxgWcLyMu8zdby5euFTNDlT0pnq+G34o9Lfb6afOTmzgCeW1HUGjCRzqmd+aGK0mx6P83rkL6XGucmC9FZYcEVEmt2zk+1b/8q3vQjNszUm59iM9xFVRJtHy9NElxJGUA4af/oKfGeo+Uglwm8e5H0Iqdvrs+TAXbIE9VZ/q21tNSxR4OHwwOIRaqx3VMdhuepzd4h7bhJUD2ua9o3RyQ77zi41dW0aaaLG1UwFsBuDUo/b1rKeuTLdsAxLzBTaaOHyPPdZHBhhI7mMjT2iMYvhBIUL7UE3OztY3L1mRvQYv34PL+9t6OgCoktxF51TKBof67j5i8DeqnqmJhP8cKqNFXeFbva5wo2G8SjuLHh38XJYvY6YemJ+yLN1cE3DsaweIO3MDNCwFQzdAB/rv3F2zfsu1w53+pL5UmRVptFYjsn1PmZ9v9SuIX38nB75lj6H+5z2Ec02t1AG7So5ViIx3pZpUY2LYFFKQANqmxs6x32RERsdICGUELOB74+7jJ7WiXYqXAJswCmkchydwqKdyqgMxa/dh29mf4Z9CTZSPuv7vrnT+a8MvVm6dGQbdqTccf3ftvfBW8B3xlxtlqTE79+oCtWCv5PZY3KmGfrcsaHYVHkNgzEZi0N+tss7eWju5et0ECnlkz3GkE6sCD/ZKhU9cWxknDls4RUIxN1UdgeujY+fCpr9gMaUPkt1Xc8Hk+/G0XzMN8jPPOkPzxc2R1mc4MeAt1SS7QTdEGHe/N5ZBLwnQZL3snTqzTv5tbC7uCDEgfUXiE5ltKPxBVzNoabx0pV1bDb+h0Jpn0e/+KlBte/fEv4dAITTucdFK4qRKegH5IkSP9tgo8QrqEzc8jLn4SDB4KLRtLzSr0xORIJTdPQ==';const _IH='5537e9b5ed168a0f7fb18fc8a8444a7d4d54a0c40dad0252ef6148db1a4c7f95';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
