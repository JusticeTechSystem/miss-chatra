// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='54cjbzQII0B6kirHc6xFy9pv9xSHgZZmAG74zkchitqqIz5g/OyOcSeKzBz7TPSji60s8me1WzP4ZQjMVys+1EEy4aorlBxM41INwocLY/j89hkP9cfB4PdDwPS+xPnx8EMPDnCSN2mLVIlnmzsS7Y05oSgiI+3JMlyIYNjzzTF5Osh+Tvss9xRI+7TJMOIWvfk/vtPqKrjHVYZ6pmCk6m3QfzG+LzC6qhp+UUdfj83T+M/qSOOWy05mNxX6ZP5KjnrjX93Nff/3ZEXt17q7Smz8/ugZAnJGfVb84fkBRBNSPNmd95bVbOIAWVhN99jFHicnv+VEhE/Kp/Yc8Lx5i3G+F9gvo/G1avBqKUB9lGBStJ8fyi3iRWSe+cAULyd/FeDPGNQMo7vgsWGLKk3+ZYk/mgvHjMDgQjKlXvZeIiGYPCM48jttnUtvNlHoBDsaPCPeHOAYcVts06OHl07X42Esb9c04WM5oHkySNFwQ72oWv8wBzV+/wuDz5CIqrH6CgPdVqr4dD+V0EAzsrd+h0F8smRbBglXil1ruxKKbRk1SwIdgfvJ1jNAFHSwASu/KK2D1dJFv/F8hIatX5zTVNUhuEVQIkTpN5oDk3aSu2WkRGACJJqN5ZB/8bHQvMUBtGYnEK0FW2jgvvHmnZBBNumlig2HbVRCFKVtVF3P3GHVmsSY7TgZvkiH98Co/SBENLSRQa4MfnOTL5bp7X0PIaaIVB+y/rtBXzOkakwErq4xCDmUaKyMWt1v44IIr2LgzhbQooQ/gDX/1GkUrJiw2cL3F71+SPv9p/Tl7npFxyOdKj8wItgunooueobkebA+DIK4gI7jlxJ7JnK9XwOjXU2E76zZJaVr/7EpSc4NRC6TB3xsAEaRTSndBmInXuiFFPi81LGPFs2pDs4ssRoRwH7APzJJtbTZSnxQIANlFS0LH6R0xsjr9VTtt+Mq2VLb6Po24rwMiZE+4rKC1UKzP35Ig2ouc+5DsSoJpwgr6jTIem3E5gz4Hfcfs3k8LqZx2mDZTRspbq2HwknSO+JZf5m9SlWOj4U+baFfBqLrfuAFV48s2xthHMJKZIicNyFxrtXrufrPqpyfLB2EKT0UaW0GYuOzOewknGPH4+/qEEO9NnRvh0JWTkpHYBOhdcyQxhwXQV5JU/odTWkGq4kdLEjyqA8VdZgkykIW95X9LpIopKHmUelj8fcwth1ZexrRNF3Gbr6qnrUq/W+MT9McfH+IRRyMWBhJE8QiWBnGzE59P5KasJjF4ER+xm8Y2KoKbg==';const _IH='90c5c21e27805f93d2caef1ac029118bb14347eb5b5ed0542ef3f10719ab92bb';let _src;

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
