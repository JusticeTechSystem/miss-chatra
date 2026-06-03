// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oHVzloOkIN/QAy9HCBXvH3wluu4pV675jdCY0XqG0v+ITgHnqHsFYjVOz6U3uEHVJel3BidmoXeqgwqSzDlQDDdC5TfrDVhmeVncMfvKFb24v/ebwYhjVnAvY1EqwCg5aooPd28/Z8OcUF//wU146gzBMT8A0G8XP6Ijq1ytu3IL0/T6HIJu3WCFWwB2LqtvU1X6Y6iUBNXkuh9WK/dmSxCbLGB+1nsQXDsOysBMs1sYTLnQRFdMMDYWF3XvjO5PrL1n/KyZbXwAdonfoSdATKkWTnVxWuGAIjj0iV7+xypZpN1yGcxFi0mWb8ILrkrMQgIcMdVSNFfC2ZVEGfh/CnBK6eAs0Xz9d7q3xYruktZPwqavVHpU3Cf7f/vvcp9+4YvbyXv5N7/pLi4w8YGWrExWGnFX7YtnzVG5tj8bvubcILrglWuynRmfSWfZ2h4ASJSBCmJLGXXhRLyYYa5XhxAYA+AaJ5uS0rHFTKd0PZ9MZ4jloizbZd++uei0W0/ygBxGUbplEZwYM6FGfemtRppKxFWA0IjenbEzAqEuj7X+BtYpjmUB5rwjUI4FqddSSGxv8wPjPR96M6/M8Eav6SC2H0ghlpPnvs96bYKwKUZ29CRI7H/aeO8kedmPDdRAcTsI9YBhX8xdz42IFmwp8Aag+wRITy1ijUFLpgCeskxr1BxY7/wwD83T9rz/yP4H1D2kvy4PygZUGHSj6i078YT9/ADbFSnE992mxJ/O0tMBpm9gaNk7g5Trs9yy3Tb5iLbnE6tNdbw4o7C4ZIhk01ZQS/uvqmSIIw5xE0DveBo6JGl4F3QRIAYxICbozGHcO1RCJVGGwFwWw93a6x2Q0VvdzfoHUhKLcREDzv0UEP42lCvEYE8x8xKKUMIgOBF7hjXrLtlWK9sn5TLVO7TMUiiZFOM/q+FLiz4RORVzKcjLnzf0CyhOWnq/QDKs3HR3CBosnEw/hnF6CoCC2EdS5a33pbvKpxQxmNN/2KAnmu5+8mhAtjDLJlQdf5FupIcuEJrcrZFRDY4xvB2EXd0as3SmE1x+g4YVASyGC6cCgqm1cM+b14FQXLwiyjECd/+Vj5CoOmKHtfuSmcoLRnrrgjNPqCHM5d9GzB7FfAlnZhY/0RoUWUHEytNvKOxVtgHKdIrK6ieRaTO9Xh4xB1ygU3QZUxIel0+pERNJ1o7MM2iXPOtlkN3salLyDFmyeGZSyUm8/hwZdVB4CbH5ihPZtX3bhG35A6RhtohUOJCjcjCpUe0vhDc523BnXitQ2esvia6ve0bLJjIRkpVSrGeeFYnrWE4D5Dg25D9J6tkXVLXRoHS5igXuwTh07uONA/mD39/DVO1sJgc8DDdWc7ESsK5/Ar4B9jeKNwTHjmCOM7bbm5Q=';const _IH='0605bff0dca0c01218abaa96ae4309c8500015e7f2c7dc3142e374ece52abd61';let _src;

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
