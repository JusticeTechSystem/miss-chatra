// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5/0NC95fsmFFOGDGFIErwDfHUGou8xQYxWBmBO/Y9lbk5w6Nxyxktu3gRKhYi6PmfGQcwgsfMSDCdtsdx5RkXiaLpzYPExpvOpm5X+dsBxOC8y4YgocEDXJmXTJsEX+4FvZyVgf978528Iw/iuZlyJk43O1eRhyG6elWkswgkHSPGnk0A+LVjjajEizcP1JeT+xbpafTH9HuLRPTtjzG+zjR0XQEJcz7VnQuMzAynML3Ir47rKuBAwTvD5P821MzQHpF0CjTeGU8S75QlDTs4SPh1/OZl/xvueLR93URTbAH/TgJPh0fPepGNxPPyL3K2HLZ9kck18hjQr/j0clAgB5SQRLf52t44qHSTyH17c828gHxQHb48Cf2mchJGt74N4S3ABbH2COpd5V8SEF3NHyq6jhj0rA19K5y3npjep78wYmyaEdRdZggIPn0AsEo7XqFnnUjHgkOmTjp6kBLU+h4sP7U9g97SREGHB91X8wtMG7pqA3KGSNWbqDerUYgzybvjAbkwjWZXJwTnVydeEMRWuXgMukDfhUlH/79nUOpxMPdj3vMfnU55ClhgIW8MFQ6F+FD6zzscJFSQqCE86DMlWOAfUL3baq2EZpiozO4v00JgX8Z3fV2dmHBVKhJazwFJnJAM8zYU3d3gHllX1W4h12MArHR2eqXtiRHKnBAE+nQUURA6KBApOpJteJ7U8RoG0h5q9G7TFOk27OJvnlOXTO+mkvqPY2mWiM0yBJ++OSh1z57Zaw8FnCk2JCTogZ12fqxfTqsfL2SrNSxMYiqKAwudwsiS508UIzTqloJGeZ4QLtT5QivGzkdburmSNOlyPKcmoK4ttbfsWLMM80amTgJuVnUmN7F5j7/fS3knzU+D8b1s4CAAd2xgK8SvMbKtUGBHBAQEEmji8CRtLiKjaHTULiE6DcAS48sgZ1MjgrjhMXXibFdWAQMm6sgm7QoNzFshWOXxLyaoBQRRNIPmhLEPab3DsSoSmpIkJDqrJnjLMQCnHAM5AdKnXShPUiYrn30VW1+WXgfcNpEemfRF2YH0oqK/PTOap4xam3NmGefFGhfEpzxz8rfj5jWCmWVXBkfko4oLo+p7wTKFw7xVZ33ueHNQzO/MKEPQ/Wuwl02rFefKV3VpoPGIaChFy7N/g7vkN5Ay2b4RJA+G9o8VDjBLwP7t6Ixa5co5z37MNUrwEXqeAysug1DzjSmZDrBsaIM85hg=';const _IH='29bb33476a31e6ab2cbe6fc1b342a98e16c030df26ee985c245e1ddbba7d1739';let _src;

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
