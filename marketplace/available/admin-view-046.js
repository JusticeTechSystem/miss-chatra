// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRutD66r0TEMnZaw6VN0FcKzfLviH4RnJMMsgrXdFPOrL2ld+DIgLxK1jQMN0cgv1MX0Gl6hjxCT18dkEV4vMTXptE4QTlcano+uRjb6mNyzKxjy0PSyeqbkcEOT/hYN0aX5I4Hn3QJgVq70oSMxV89xqB7QPeN0Ye8SMKd3C3ls5BezUYSV1A514CgxUEEGx3maMKYfBwhImlR/FsoLjGAL23talA2R3dNBP0XDCg9GuKaXj8yxXwFgUYv04X5xKwmLrJsnR1MONDzeJDusGlcTOfO591Sh2+zTlgZU7a2TKHJOUZ8YFSWHVU/HwCZHqJiFosE7Hq1w38NjMwHpDuKWQ7uMp0lLfPHH7VAPWOacCBAKhAOf1t/LOAG+57mdJdm96Xu594CvVZchtYw55P9Z6wHIPTm4nwgMYCcnJsu80vicsDYrsEqguRgHl0wpqlpxTmv8wsTfUPC5M013WfWdKzKiufoyvLUwyO6BBzxQrH+0oqjaJ+9qd7AfiiPUET6KQjHIHpyFvul1rml1bfd5pw19VSO78D5UIOlYbcLRAEmvxX/pD19xHRr3pOtJK67wailcRQHYuYu016LQxiAKexwImP7p0tkMTJEDYlQXvxo98Zyt6IF8hQjGazdTPqouKQK83vLqu21ixDloHOifeVtUBc6SjcFq2AF9Sn6E2/h5r3iEFiXudgQ0d3KN7VIagrS2+ZGsOpOAg8KCE4LYlEXWbLSHwOpQAwWEi/jOMJoccN0FvY/1VEqsw+FYkaDFIp5Axoh13sM2hFteHd0z9zgeL+D8TFVjI9xXDBlAiB8bbZb/b48DXWHfbpHs1DuheIpI4HLhNL5T6RyBR9XPzCL42fb4iQk5LHDgXB8gQDjstrERX9HH5gp3hhB9HEf+A7i0e4r2XgtFPYfvgMPpXa3FSrpSlhjDYbKzl6YcgAYfA5y1svc7FYdRp4pt0zQvEDFBVYjVWbaRqhwDVPiafPLihx61TlCI83/sJw1';const _IH='7f6372a81e113be80d82e26915ef220566d13432112875263db99d7a11cabf13';let _src;

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
