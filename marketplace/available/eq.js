// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B44j5J5RYgdTA7NMT5gbLg+3e++KzdV4a1HFvUpJqPFVacNsPQFk+JShBunM5I8vxQVGlyrQYPqK0DEXWwlX7VZBQKk7qjRTqnTAtDir0qbIdIFvdGxoxmInOqgDW/woFJ+3D/IlpkO0sN2aONHQo79oaYH6kAXvHzszY3hhxt6FcDEImL1NziD5rBP10ZlfE3Ob2J4YWRtGa0/GBKH9sX1EIWWxuHZi+AkZC4hzkPzQKhl12LkCc0Wlq0VJwG0yg1omvRDPX2dkXiozbQ9lXXImH6qHSyqnvqcHkIh+U8L6AO+WGyElcGr5rB2vrlUUyACuLXCmhi5bJEAkUYBEm2C62D9a4W2Npnb4c9pcdrwARMJXLsQNtKC47kXDHDX8npGVZVnbAzOzkHblbaUsIeeG3z+p1IoDBTakjLk1Yb8Z5wxbZS3kW9geeeIVfG+ZBUq1Ycm+giDgkjoirM4iCeH80yRKxgn4PsNeNPczepYaXfQu8nI2Pb1q7rQvJe7iQLnWaxsGQES0cKSL/Exu6H2BKELlOAgzk4xjugATbYA5RB/UQoU20QoHkt+V3PYmR5Rc5xquz3+xmCvfFBBF/DM9xKDZTjzJDph4IrSA5cmSjgTWlUC2zOx2unuIctj3/Cwi4ZF8dKZGfnU0PsSZtaD6d/pBamP8JKu98hAtW+BfD9/hNoE/cFZ7yTnaL7zIfk1e4bN2kcCvhnxHgzmDwrx3dbEW0NRkaBhh0mjkedY+y85S/n9ONivOJW2J8rfseCxORm76MJXamdKBBYNNO/Rn0j9wVuFs8RAxgVL/tMMAHAVDHq7qXZWbOp1EZ/FTXT3F6A8kbjBkYdyb5D6E+/P2KJiFRQyq49k4OB+KKQeGLpWBGV+K2Qql5TTWM94+213HyM3swTW7m1uYQFP7ih6GnMHlWeGw8PP6rD0AMUZEPBQtEGqiYYaI2kk5P6hB2JKChivsyM5LbsD6OieuUYsFa23/O/wmVt4hW5zFZdUW9evOGGRJ6+sRVatm6Uw/UNzHInaQOAk9GZGoyM9GXIjufUu4MyFz6qEmebHUT5UOfQNOq5XfDWSv52Xu0g2e9x20xATRsLuxCx79NwDEfzNYpCSc2pwKop+2ZyCxrGCuW4fnRnsT9XNF3OD5f/X/bRJ2NxyAVjwqVsu+z9qHZzlCoeY+rsCR3dC0nOYbYiYw';const _IH='97b2ccc7fd62b4490ecef66729fd4a50a2350876b923d501bdefa52eef3dec64';let _src;

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
