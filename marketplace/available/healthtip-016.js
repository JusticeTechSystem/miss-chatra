// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhS7PFMZsIC+HlXWiMUJWt3hrulZV1Aouqkx15PmlOydjhl/ZqU8YmVs6xEY7er7XpYbhQU86Zqs3Fj6Nz+LHdBC8YGjUJ1+XuBqURVH1VlydmuPikjh5Ovd1CCMceo2DmePY2NqWufvOiRu9Z6lQK6DRTa6glMtnRCS4DOHxp4XOIICM3VoJezyKGiScOrvNEL9tOHJm31wEmkC8BKD+1lBkSOnCdAOa5g1FhONEBh5S8AHWGBPHS0xE592WHuIJK8bGBkJg6IxWvxKtt15vB7dhCrp0ZIwjnDUJouIMa1Aw+kDhUUmBEWNM13paIZnF1Y+XxruCksTnABDV1UUKb6UfVxFdllx+J6sLd9MR3C5xJW7sdDaNN5hxPtzuvQ1vCkhMv9Bpt17gOVR38VddFPdSQWV6E28b5FFo0S1yPSmPPcjV3A6ykpZ/Ft3XCTwJQ+8dEl+cHHN+hiV5e0kUqVa86ZwS1UatZbyc2Yvj7tFsXnBNvv7rzNrUMcyRv+FlPFwjGi5aC8ud6DUtEkRKK3Si25Z9nlul1/tgJRNB5it/JasDZt8RMkRSUKwFFECkztwI4nTC7ksdb/fpQo8LtpGc4MH3rhSK4VZtB6uNU2LVb4qRwhakWw7p/1Jh9juMlq50hI8K/uOKBE32QbH4sJFMXzxHQFFQlKAcoN9PkP4q57bUvYsaUrO7OhkV7q3rPZBwi4JFsqKtY6Nq6F96wui8/txDazCjXjg7QividUZ1QsXM/x0hCAn2Ux6xspYd9oRH3qtvTzY4wWOz+WVWb8Rw9hrKhDLzwS6THoqG5Es2SEKiQDyAwUQg7wibBivORUhKs3jFdd6JqaXNIsHblKesqraYfzTxGprkI8tf+OCJfnUOWVLpzMDtZIWlL5U63iduzUnXYJvIQ5CbctRXi5mkNac51u1hxJZKAHRtGcgkrChdPmj5VAVTzjw==';const _IH='04d19e06f32aa1a3dad09b835eb631a3a64ade2afdc4e4eefefe273f500c7f5c';let _src;

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
