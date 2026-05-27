// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nfcg3gNQV/Y05Yd6Q55igM/yx6F+8wFkT3p7i4HkzmllbdHuzug86M8qrLj4iBrzAL2SzaurAlUvPI9JvNqNvIVdEWHXcLEzZ0+JbX24RdiyAn9Yqi+plq2zftAwI+not99fe79+6819pYMcZaSTUnK6hji8Jv2Aa6FzYo0OcHqhY7ROndrfr+MFh7zGX38LgfBuOIy/iIrNQcBe7TYrt2P3WkF+sGGBH7NaYUbGoMGPE+REbrBNKb/9suUj71s7++WYrcxil5YKxyrT/AoG7PGU/exGSPqGRI/fmhMShiX/799ayfhgfdOIh0mP7yRjE0ORsH3vqxHrMk1wjlnEOTZRqVsUD/fYllqbiNp1Osaw6D1/ftaX1I4z7f6OdyoekTK5Z9/B3XVNGn4Q3FDymP+CczDTRuw6uKXa7xEohLK7jSU9HKiACpFFJbhdkZPt4tWPYiYlzL5Fzly7euAmc/2mIQ1tiHdlebSgPwCaGsdBD9IYq+p4xweV/TrTgMen+oTkbXzszdjb+/Iywyd7F6l9H2A+53Ti1mTKKxpHji+pmfw9164OhVcmLojtDTWiX8+9p3zyHSTvL0IX6njq3IZIqMWMNoMq71gZQCDTeqlgYalN7zDT54ETBu6HLacgLkPJQBTkp7iRYw/mW8uG1CsYZuzRYLyUtP9cG26ocefq7fd8Aco349CPgUREcry7K1WKYZGI2t3fAdKsXtyrbYySx49FCX/FGHCWDyyv1JKwSWaTtSw7B1aL42di0uzBStMBkTh81x7LDe8R0uD+4K7KI2mHkpH78UWKA6kWxPEB5X/os2GBX0m5eJtIujFCU5RRFrKpJPcbznd3FZ7RCTCjMmKHV/dVkyrLfz8wJHeWrWjaK9/e2I43L16k2vFypBXwQGCzoeU7BqGhVbHRcS+kZJ1CeK3n21nGQONuwMKiaS2yFjaCrMYfM3olc3AQ1uqV+2MpaWhc4Jxh2UpbsQAIaNH0Q1vff3+ge6ZEgLRA/RtIoMCWbbyPXNKNfJp3MesbNZsakAr5cccClaj4T8OrKqbwuW7FfjLzMoVN5TPVK8KN3Ps16G5SkhUioLGz7Zt+66N/pMV/UHJZWYUg7s8uq14lwLAdz66+5TyihoFqHZ9sJd6lKNFHUSaz95CC1hLGwQLYGFdWuFZNxRz0OPL1QpRd+99Cz0fsJOzcIcLulDTqOUjvf1hI2z9tJnqVklSWIXhyNBa+cNl3nHl2oYG2ChKUEiRcW5g6FUszw9oDA6zuvud0GsvoZs1elyUQe7+/FxgpBYiawzkJzjt8srHmPnspn873/iqfPmWbr17h3fU/SHZlRpxaioyWvgl3895Z8d4ncSApcvVdclMV+HzJL+aw7lCn62O4xMEF';const _IH='ec3433e186040487e46078ce1c997dd6348e32a5b6a779c4984564012577be22';let _src;

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
