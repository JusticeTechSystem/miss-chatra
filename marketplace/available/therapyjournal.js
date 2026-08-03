// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKiViPYr1A1CYoScI1PAqOXlpSmRmkIWCJ151E12PMWZvkkEUYGXyBo1U1x3uTw6BqqYHksVrD3lQHFayT5XadIRPXzPG8PSfGUqC+wWP9xPXawP2axcsgZPmImUYhdMQ0JSzCHKDyqW/r6mVphQH8v5F6zKlfMbWwcD17pAezFpYlYbOpgd5D/WXv60WNqsw2HQ94eMQgEeaVdsRwSOe9TgdDE93ORbv5coQ6aSx8QYaTtIJ4fe30HmWt51rJzulOJxZp6Y0DmCvoTDhr9OQZtgrujc6eSZ1ltK8bwt381Y0sp2gTSyVpq3LQXKTiGGh45XQOqTGzu0C6uCvMyg3bBKOHtrvQI+OoxtyXIU1YdW9Lppb+uNGd7XYMGh4wzd6AwW4EJ77I/LdvoYvY5bBDRkTy4mlcXLe+ksnEX2Pe0VQytfWHShMv0pcmwzhU0iBtJDWD0hBBRemr1W+bIyq9sBpnehXVD3ubTj0ki5ExM+a4of3wX3KrF1ohKwsB756kuvRGl3Ji3jm2R5UQ5eajp8CXwzw38E8AS/XNVigQB1on7/eIgQUd8UujpoSqj4BLEb+Geliu43YlBVbmiCtqkioOWhVCd4OLqfaeLQKouBHiCTNHAocHQ1tU6z24+YEkCXWRGgXqVNA/7qCrAvnDDdRmkTCNGFx3YOU4nWPY48KRRAlfY5vg+7GoRNsc0lYs+L4UJDMfX2saZice1LLXQ1GvJXMApL7PHa2FCcBu1ak+vcXpeu8QZKuRSV7KV5k3DqRw/Cy+ZD3ad/pBdQhYe0Yl4kMRwAlgCLdLuU4ETOYSGyPnsjcCxmDfHK+PPSXGafz1z6UTH9WQ9OAohxrgcjzwo2OGCvT2C1dg6x6dcpmTUX8YQ8ALpTBL3v/gK1nS0MBUS6/D6nXoi4QR3PUGe8FpMpwx31RCCECb+th9tjfFqtl5QBPOrFYmF8L8VmGQj8Ga/JIO2OFf4M14Bs/6I9jjioxoWjyBXvOIw+MKvRseAE6zGv6Mu2bCpkn6jymkfmqzaJZzuKfmgvr7Fuyp+h1Mtk6dExKgOCSpHUt1EqYeEnCvwkskIlJeqjVnyNg4mOTRUycDznJ/JcGM1z97hDVyN1ID/wt4b2bkY5YzZFiZILrzAnSoUnwFd6ymwDmRu5TsDEzYh1RljsyMssX/6Q8vwb7sspt8Hp+ySiAKV7P7E9qUAka2whRGv56TEdNnpNgFv3Hxyzpaj/7SSXFeaw==';const _IH='4337e339c318fdf7b0a030391456eaaef50f994a1fab641d8fd7474c9d6baa92';let _src;

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
