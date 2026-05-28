// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vNG6GT99MxPfuowBCkgDsn0tCgy9QPUxiO9uuDtUsVBAtB+BHdM2mweZqCtonaTGjUf/GcagHHdpT2hho+dyHLP5zLGekHuek0CB7SFsAXikDw+ZoaxcI/4xRlJ/mpZEGrr8A8GoVyJL6v+YTOwv5SH2E6JEwpdCxV0DDmthB0/NmHos0sxgOoiRSc5urlv4lkTNi0A0CQF4wjH+iJgH1OvEGek+Piz1x7iufVsJ9LnJbz4qoPD7j43v/hj8ZKfy5GcFXi6pn2N4PCQQvnHy5mGyrbHsimnzTwQGAVUtRaJ7ifmrHami5R4eisD8IxiHOJqATbGTk8oE2+ZYDSGqyFG82lg7A37BZn4mkNfa1oaOHTAbDOk2CvZepvRTtpYsyhTqOX7+q8otPyY8h2c0nRIXQE+nZh5if8VrHKKuhMWq/TfULwGRWPP7D3QAETRXt12bhdaZhET54iEkvAh7ENC0/wtx3bLJThC7K9zAYE/kjfZOklv2593iM3Kg/yMts04IgaQ0j1yL4CjpXDpMjj1oQ71tKhHASANAFZY4v0jvNKe9eXeJ0EF4YH83GydeQa7kLKdCTcRDVmBCEvnX77SzeNA5spU9VXmu29SGiQixhlrOErx6wCrwWriwi73yAZ7H8zuW0euYBdme193z3csbyybLT4SyYDZLtTxC8JntGAcwalJumdTgTNaFgV3K/O4yai3m5KfuzkCbVewR0NXV2nxlY5j818WBmRk7uLgOdkjVjhoNJ3qzNFqAu86uHKG2Vpqx5rHN0SD8FTWe15Zj+k3yOsAk48eSR3+TKH/lehAthANBtqaTLszz7kZLB62QdPHns92zbmR61Go4uF/6cEV0AWsiYJc74NA1ZbAWwVW+KTTcTo7CAhJXJuEM6fAtbTCRzXsGcHmtFSwNPnur03y/HVuErdwEBH4HDlR3APnDf5KGjOk8sax00a/wO4wPdJTLpUJs5kgUzWt8DhTVpLVkdJf6XfI4HzCZgdPESgYGe8gWSJXsQiVKFftzgn7hwpatZltxnk8PGlPuGHbMMj5MKzR6BgHusxmPsiDyFyVpb2jRMyJ2ArjiywA7YG9dV4CNdEM/QGr0t8RR8MRfVKBi+No5pds5awztF66gOyM4ieVbx9JIQXa8RffRrAR5odsLMU6wyYiJlkpoKrSZDyNgMgGBME/OqrFaJs69aTQPk+vn8C5MrkmaJmF1uUhtE+YSOBohH8t3EwghvdheGCLmv3wNd4m+80iJnz1aMRFsW9zbDUNbzRqutKdtwmy3E5qHvM5+h+pWql8rHL/AZtbUcqs/6qKaSk4dAxWIFUMeiW7x/sJgLeLoYZUmJpjfHpq4Te5b05XBCfJ88dai6CMgk7gklidH4GNfDB2kSPCXN+YRxg==';const _IH='d2768bbf8f6f328eb0caf5c5c3ac2deca18d092c154ef8011a0fc48ecf61471d';let _src;

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
