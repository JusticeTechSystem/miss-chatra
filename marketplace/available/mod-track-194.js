// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS72g0bLzob0hOgdR1SdQxkEbahpPVcTuUzWcML8CexaidNIWyhdXQymEiva1/W1jwF/oW3SMMXNLulGL11F8h605uNNNnSE4qy95c08qROxLgIoBWCUcWplsCSjHrxKc5ruhZwfeIs6pyYmSlLVMErkIIkrra/V91iZViIUp+vRRhaNM2KbD1g58peWiFMLe6rMwEGLYnyvbrmXkenkawjKn0WhiaOWYeRSaBqFyqdzHttRhdQfawQEAFP278IldAGSV6EoIQFwk+3yi13So++2a2pt/CqJUOuxygQF0xV/mFjAo4u8s9LdS68P/+Q2yDEeQuSQ/yR+THpyX4DL2NbnC6YODKs/Rq3Yz4yP5dzFPB4T41mjPMEf4yNirg2XDh+L84x6Ufo5abbrA5YMkvtXKmbB5vSbkg2qewF9LbIkLfhiZ3vaCa1yW7QEDSUvXuAkU/tSo5iBwLhUecKONfyd8fDtoiPO6+aHUqG/g5ouxrQAKi+6TdCYDoGW4tR9/Qtvntr1gsj7heKb00I8CN2Fv5t1yKMLX3bnwgKsGM+DAjHaJakfDn5YnFxrT0PXurleHTe5PLjz1GnYhBHP9oMJ2VPqqUHh4y1WCpvodPo7c5/FpLYDAqWj+4YbUsVzgY8/IrrPQuy9hiv2y5+le2u2Q4B56Q4TGMzsKBciJhWuTF8s2QZ2wvB5GCQJpGD83crT6sKRiWRpOm9xWVZek3ZzT+weJMsKv1aXK4dVZdc6IM5Z6x9tkxyZjsSmzSGe3olIO49gCUJLtM/QhQ/k52bMYbRMUShfbjILUXWUeeFqKGn6AgAKRUNWeYwu5ojJIyTRBCua1s3wTd1AvDRYZEs2c1q4MbXlgUYH9NMpaJV0VIxxe04jdN0lNchAmUUrhe3p7cqY0iyFY44woI3h5uAxCikP6iNtSPqzP0ARGZSxfYJBUe3kXw9HRArQz0sgejT8Unggd6fiNCgiSeQXgpQklfXYJ6Dn6Ub4j+NIvycp6qDbK+d2hqFCLl56Y61VmXw2FHeIfCE7oRjwmJunwcLFDI834VMf+xX/Js/TXgT/M8c07oT/Odc90baXreMQb2VhNPGpj6BKw31bHs272RS8dpzxGV97vEHuAABnAXDe3hHoigDkSediK5jWq5MLp1CLzW1wB9mtri4CJa9MiDZi2eYNStAjZTVDsh0eLnhOHeZd0hFF3G8Y3dzM17vRW9qL685Zi6cZMDNIrKnuoHQ3WYSKF355PFyqmcOhkuSjvOsB43Uyss8/Ovh3rfFE0fji1IfqVIpO6AN+BmtspFW90NPmttNV/ZPcnymhI9sAKNsTLOW7j4XyhJznyZNod3G9o++Cpq+YcIZNd9bATqn3u1NkyDcorwIREo=';const _IH='130f121c1393dc5573471900f84da0418083336cea66787ebe2eb1713c587c9a';let _src;

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
