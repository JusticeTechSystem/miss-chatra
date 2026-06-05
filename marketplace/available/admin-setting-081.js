// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6NsUpfqdvxluMMUAoSj3qjyrEBLMH9C7O3y2k8VFZVlTPnM3bEmdx39jgGq5awh4jex7TUzGJhh8lT5dQyoPdqth0dqPyRXOiyqogDrSy094kLpBUC4bsCwnmPACocIDr7dd4rLoqDAqMLH4NReiqvxLezsrK13t5CYLTT5VzHZVUhAUxqdo5vm1oaywtB4d8SiEccXBNP4EotrtuYweQnm00qmlI6tKhVq9Vza9PxELPYJnpaW9csOGFGYI6u6o7J2qUGNwPA8KVAG15gqqpn0Hc2MmkkSwEC5c17HI9PYbXijWPVUJpCkJJCqXIQBPtM2ZXMLvVR36Xx3fVckqVX0Z7Q/mND3ULmz+acpSza8J2R9Ki5TqOcgrp/PSGXi0plBORCgGYK6dbUBtZYm+X0LUtod+WoQu6EkdBkA5J/nA8fQQubeHAmz+xT7EJbWGDQJlCenljTt4hBWnzboMNIemHtWiSaQaDxx/4CM04ROdjmX+nIbBBk7Z9Q2d6tO4HAag3iUH5neUj0rwXzRgK4ZHQMCDuGgTEs+13b33KC7G3v/dWrLz1JcC+C7iR0Vsel2uH0BdZozoo75arLq8Lq2u0X2jIbc+PqhyfZEMX8yAoiPJZSQItO3iRn4jRYK0L6mZfgVa+b4GF5QH3e85Dqw6YjdllSKixHKcaPh54jc1TQ4IlZcXMcdymc2a+9semwvsfAVlUAgRjOVwDg0L4AjsOc/GsMDZARnpw9kjPj5i0QA+WPjw/i0AWSfYA8LqRaOhoLtbHt4Ka5+EEN/fcuRHt1Mj8Ov3EOAIvG2rSRfAHI378kTZEGmlSran0C7qoqa1rtei5tRjUdaFhvRL86L2TTs+t/wwodzDtz7DIKU4VQ/zma+l3GBc+CdfoToxSBwUXJ/ERYFr8fH3TSYNHOU56sfncKnemcAr66OsWAFejGNCxj64iIMeN46Dtrie0UEvouydAKAvLibuj/yZBjJ1eA2l5LRbH8SYHLlSgFBbijv9Fw1xrVrlzQ5YgFjaqFl+SQ==';const _IH='557301de120c1801eb564e912225c6e4272ee22fd15e30538181306709a97327';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
