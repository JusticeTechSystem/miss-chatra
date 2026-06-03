// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dqADaDzLs3fmzpTqYSjYoAwL5g9Q5YSRYxe/0AqBzuY56w0N/5RwbdRFExqMXLmz8swEYbmB3814A3jMfusmsF4qngTdfS6IrJbonxnUJstf0fUjK2xrzKPqatnQgIxOlyfAMs312AD/dhUr+IR0ES1voKAE1L+XOkB7npC1uWGfFW8zxFDvq4xamAeSs2u5XL4xpoepZWTsGi1Js3Kk8A7JWMkxW5atQPJdoZpOTOXe/fqP1jLCEPBC9Ht7qAX5GYGH8qskzcLmMb+DT3ezpyUEtm02x6lVhdtf4mH9bmmWt8XG9VCX5Au2GFWhq1L2vNiw8A7X+p/kcb2cO0BdsQ+/zfs5X7Ci9l5qzOWN8RClP6nn//wy9exGujhHLlC6J221ezEJ5e6ZaJKOF81avsqssasZ1Fp1RcpdNvl3KvFqkzEboOJ24umIMn4aYVq9wyQIn4neHAOUCjwU4hy58v4ctmZPu5R/LmLUI/mL7mr3KcDnBevI0k0OsqTfYsGsicd1CERHFykXRZZ7tMPupWuF8LJEDMM4KZdgbh84r/IcUOGHUP652kqSLHZwtEQbLUtVJ2lwQB7ejYOx/9zNXK6wZ0LMlYYgptYUmzxl7jBWV+SPrurK1cf5x5KGlz+1GRX+jPaFvCC8uG7WeEsvHkCRIcRfaaIfxu9lwwAf0zkiyDRz2+CaP8/3L950R7GEEI8WjJmG8ss/wN2BxaBoz7KcVvjSF2oOxy4pjgcVOsk0ccyUCwWMVkiZU8rujKIDfzxtG4CT8cS/l/lJ2Gbn0WZ+4ajETjn3FCdrBIvY10/wPamJo3hr4Ki1uxZkTRZOPrnDXp8TvWcf3Vrtixam3w9ow7TbK031qh4WJcBnGruplx8FYA7i/jNhGng4P0hxZHvZ7grCMt1s50nBLDeVZqPeIfg/xk1F+5NB5RRxD8CR+NhlBzdsiC63CNT7LbUJzbODbCb58kkMNQkLK3LpxbdWS5rcliOmlF7NhU0snyHG3HMPBilWe/w5WDxTPk5QJzKQoFmnHrvO98XPSYPabnqEsFa2vTlQQTof5LLqzsfjw1mE8kMEwoqV6d+s7KoMkk2i0vbzJQf8NzNiBkdF8B7skIvCIqKn1GiHp0SWnXKjG5E9hhDJdKwKl1LTZhhXYcaZp59iRyCivq5iedcASCIeL+8PMgpwRoKzn3ys98u6ncdjwFSgHPubV4HooOHO';const _IH='399d4495e23305606e665062d306154053ea521462b0b32eb8d81cab8d54008a';let _src;

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
