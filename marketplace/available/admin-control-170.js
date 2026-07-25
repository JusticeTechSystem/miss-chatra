// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnOZCVa6YcTIUQOtjHWWyI5nbs7l/qcqNQkuf5dgPXjn/j1ms0ioR1Lihtb/Pe931iVN1SJ8Ih2+FBx/2Y0qmtaKxRo91BT62xqrWUdKn/BuHl8hfdIY0FyC/+8p7ZIzlUPzR+wlO9+Z+posrVby6G9tIGaq9PUs58QtGtUCu6CYR7k68nUBL9bkYAlbynmxqEwOXYMI0y6rPBiWmb7sRoHSjG9O7qzqRIwxz+uiTj71bH9tlt/CQAnArgAjC76Bog1B1Ipeouuv2LPyhF6t8ge1m+lD0ETSfvwNBeKD9Tneo/Gd1Pj6AZ4Q+J1/J5l8va1mjJwytfBR2Huiqb/JMUVZsbL+YQoEUkkS6yyALc16bEAvGR4fBxE5AFh3yI7ue/ZChy55wKFtHQU5LhrdiB2MTscKefY9bdknw6rFawOBSB8zclhoBGtUotbkeSkGhCD17mAIchRhhq0dyQrWRdTF5SBcATvZQmcmFuNJrTqY2em3PCs3Nc+y8QY77H5GlicAlbk+Olp7jxDHSRVoil5MD0q5YbElklq8/N7SJMY8r1HBwRnGBngtDMzHpmF1+lSebjl1gDpelS5I/zGr/UnUpKNkb+WnavCeHPnjgr6wGFDXtqoaOiOVO9/8bbB7328aixDCupH6mOjwBn4bG3aXEFZFMjkiNgapQflEtBrTnA1/pByrmqD+bRFo0XHUFTE8gY1cimbOxnV6hIUYRb2JLxsSzfZkolWCzfZYXlXuCKJEx6FSzIC5G//t60erQ+EcboC8Z+ZHALxup6hK0I5rz0NpspaQSYINaPM/rv+d0dZEjHHM/uODgIk9G3R2l2wmb/jxwo1Rr0gK5tOtWcvGTQq00Sb80gAs7AEN0LaBTUuknzn+DyxOq+ota/5Nlu/PCwtupt8v9D4Klj0o8N+zTCroqPajIOucss+6nmsSzr7mYwJ9ska72DL+6xIp0zrDDtRWOh86yN/gAt17V5XD1Qyq8tV9JisKkPS3UnIBys4zT1vxTO6LE5Ypf/C09yxxJ5a+yP0A==';const _IH='fe719ef8926477f0d33ed9dab7cfc5808be2efc4211b17eba3066840e0f704a8';let _src;

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
