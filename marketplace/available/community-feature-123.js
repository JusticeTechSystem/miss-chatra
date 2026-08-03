// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGOPcGU773zTXBUjAqNvjQfPx89sVQkqZAjI7wQvxJKpWciej/EmeseZZ48qlhDdsbFDlNjQrdYbBp7RPNw6CjB9zP7UK7exai2rG/FsrH918/AkL8T9Rbmh8gmoghfBr5lETx5zXfvDkXlCDplf/Ncbx6+EZvrLYPnWSsYJYGW60UKd5kcmXnwp5AEh438M47mPOA2BTFJuPlGxs6RJKU/Tg45Sc4o3WzEDzQoJbffCSUp0hg1AndqUeqKPHxR4gJyzpQExdpWMRdhPSEmhDguJvNWlKBzCMejyD8faZkRh/uNUJnspuF0crFGcd0sF9V7uTjCCKh+1ux6tOr8GhZ0tkeFcQMalT3TGxeAvheeJM7gCn+fwoviq2fjnI+WDZCM8X4JYWb5305iWbkMZEsuiKLY5Ao3h1Qp1XBZEkw0nIizRZ1FvWSaWxJIpEyFiuJtT+l6jPbWONMHY0NyQwA/6HJeGFiGAh0v5tv7aWPFN/HDWzHL1YmXCO/79TzMik1zzgpZGb84CqpviYsfJWeVJL0KtmrerT47GsJIS3pyI92DtSwR1rqYMUW2+4I2ct4jqH7WGwXxguI+qLB6HPxuQZs2BkAX74RESuGfa56jR0EjJy9ZauV/8XCGmFh6owFcdbDi09Km4Z5g20TfhHlvJmadskwlf6gJOqofM4a6VHqu7la+36x8+8HSt9UKWeNg2XPsOvrqwuzdwcq7A3drSE2BwSrqGNR';const _IH='4451766d325babab8149adf3bb5317f1df6f0207b55f6a94e0d2bb99d9653088';let _src;

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
