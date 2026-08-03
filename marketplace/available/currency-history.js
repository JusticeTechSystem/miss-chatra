// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSMcX4DPcQD8H4U3/BPi8+5lAVlY71fI4YDd1kucpZMzFMrFUS+ldK+1gLKoGxW5KD5z3ROoSdPRMQ/gjJW2F/yQv4SZD2fq8GtpF0e0Wyyk5pwm9vcoX/E4MVHxrvJQeSDpeNp/Gy6nYlDKAxOLYZdglDO34lLAikvn4VmrEXRZFIl5SQDw9nRG+J4aM99BqPA3UN1KyxW/g7Q0ew5Js8iFkMHc6uzwrxbGlyKlk4fZt2ystKbNBrcJGTI6WiLdAD32hDtmHm9nSgEYeEjPshNRzy4dr0pIKJ3wIQuZnQ9usJBY67PBBLHWli8ymwWYDNx69Pb5gJk2MS5NobAaMpscfaysecNFtR94Y3MU2euDJHtVPOMLvCZli4IYl8LWXqR0Rys2t3gRES8JQxQ7542jHols7C0N3QZKhDOkZpcXMrSbgFQ6bupwelkgXZatBGCoQYFUGTutZhBQCYtLunQUMZUG9KKOnPI1yCuDWM7TGX6W31/Lp+dO5sR99XF90Yfbaldfbi+8NID4SXEi9hIF92G1xnn6rAo8mshGQvHHuSZgZA8UiL6c57MUgHqRffpkqy51grQjgM+KKKQ44f9M679jlOIyae4smg0+vE4y7QdEF9ZmswqYSP5bGPmRKIMEbdmDuGZIWuw3WQ+ztJcXvaIyZdVXgDki58SD96D1i7pOnIVexM9GWX4b3mVFUiSjazKLGTl+XVXkJiGxe0AbzohQzyCGsXtOYzuwM2HGovi72FcLh1pe03FLT+pjIV1pg8pfSP05KvQv/X3vj3xhrN7dn0XjStQMWfwqF0GJIOsOIViEKst69rnuW+QLT2JMyv9M6PzkXycIq56ggsUw4A39otmjOvaL1VVdmP5/4QP8A9tQZRibTyIdWjcWEZLgh8cZfVSeRmtUUx98hTE2jfmjvzWwSm+Z2TH5Q==';const _IH='85902a8cc446e2da9c722625c633a9f71d28db1ad11dd74bec60b1ec2c56a887';let _src;

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
