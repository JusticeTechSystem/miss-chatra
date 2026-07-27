// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0fnzuadsiuSubnTOLQBU+5mUu0RD0/EKBTL8LelukwIsua3gjFBW5AB905wUlJf2cDe/hfgyPAB2V1qU0P6+bcnFu8mw0qXK6gSS6fEbNNSpJgCJH7LTuZkb0+NKtWR6nVFZRfT7/RzDhUidQuNEB6eTd3YavjO4rIJ0V3aHaMDIYMcohtmQRpt1Mybh8s6co9VhauIARo4s8UxBwV0IhGT18o3XT1AiNU/1Ccyifw5jZDbPVGhkdDz8qZquqvGjfp5nn8PNWt6vCnGq/6K2LUYONLhRL0zNESoMlb8VlgHZavZLt7mOZlnhruXEg5IIoW/oDxagWYrRvI2gRgZCK6nNc23izaa7TSCjmbrs0ORdcqfH6S3KKB4q/dcYsRnnSR4cWhkN6q9g5MOXyYVr/MgaRdInHRcBTGPG0/HfLE6Afvt24wQapm5p0qrw4HgUZI+GXSr8qBSxqcI2cqEqX94swYxgDt5WuDkQZ8dlXgkcCM9n6v/6HfnGO3K2w9u9Pzkop9bsSxIGJmhutJ0SYvY0zwmweajRt1UnwOM01YL3UTLCisfFbdNKTPDiBDlxuExgdWnETu8XjlFtGQ5ejH1hi6WmEH9o2I8n3JCOhZLUBr5QZN2a0I+D2igd0Zmgey1cNenKBuZpx0ZdUgN28o/OcheGd1VP93gKPyiCl/cELasyl3qQ4M1OoOVifjvU8lal5jTI2LpqUw709fV/JHEHHCssZQl4i5dB0/EEJ4MXDMqEB1yeM5FyuTtz8bLbToLgbH8VVO0s9KTAPCA0YuuYRUwnePTEjBEnt0anMyJYn1YaRy67PiAIeMAsxcEZiCHk4TQ7aZB3zh6JjLBhMTujx/2p4T6o+ncgDj4x8tkaLpLDwviYqj7IRkyeHfP61S9ccrR7fNUUeBckuH2PywONEenBklcz6QxN36WZxfPQKxJwvdNj6iiAribBW9Mt+JbOzrwCnkQCDJcxR2BOIsLT6RDU4FM7n93uAwT5lTXJTh/S1rzp8HcdBEjdyqOQW1qOZSJ7l876F+ya6NQ==';const _IH='512d4e256b90807ad46c5908d52e0512e95fa9da3b3dcc91ddc7ea828e3f25b5';let _src;

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
