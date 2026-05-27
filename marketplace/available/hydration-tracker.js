// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oo5FggLj0SxZb+G7RI8lWykIZ8dk0piefHk+P54T1fLOtP8bexiUy7Wp6sGk5EZ8iJgI7RbBFxZTWKzmeLfzbZjpMqmsTuk1vqy8XtyPIFF2+Y8IIPtSxPqokx6qBNbU3I+kpBkNpQhistYt4l0bIi5r9mzdul8aJnqrathTr1OU6OYd3dH1naTG9flBOf0+p7hErbiGMe0iYu2uvxrBgnggK3XsdqOCVSqoo9BGi1rgk7poByUXtNXo9bsnjAwMgsno58dskzr4mLAbHHVQLoCXVmYGaner06z0Bnq2uLr2R/2Sjkm8nKIsoJpD3CpkBspHoTC7gJt9TGDmj6gIimcgZFrbZYgYE3SHO0YqmHsBYL9Cyt06lAXlhFG4ZlIGlZGQuqaxbzEyr2xDA/g0dCeNDmXxp2KvS7JK/FpGoZqcTp7um08/jW/Oyj3lRt+J13jMaMgt28LKGEGVeFe5NIJETPzi/zaJJ5d6Fycvwl3l9ZE9g/SEyj+glueBioZhWdfI09fkVY7WqRpJoS8UC0utw0jp5nP/kps1QWDVotmmsgFqTpOkuDZgL2feD4CkIiGbI/i//zSlC5IgJV5f6CJ89yfHP/8lJggPpoq4xxqo0pwmVbrnz7Yky6/8YExyYG2bsgYmuRAnx4dlcZ7twsF2hf7s4+oc9HMnTV/RAt3h+m9PXZDQqPLLN5bWsnoxHXEL6L/PO2aKnnql16p1kyUVamTjB7c/JAOkOHTkONCrNUm+6ETURRcc+NQHockJ7bS80Lr2CPzLmoOeydIzQ2FBIyn/RnRqyh7sLRDr1bRj1MRRjK9nPHv+8aqVd5m/WpVYDRJLjX/KxSqP3xNcKr6DfV35Ua7qYZmoCtkAdlBGjmAv9hxO8tQSJgcdJomB0vIU777/jVUicvmYwdqtGtglS+naOK+8ntbTTf8CahVjzRityZc/vitDk92AzgHcqnBDODSUcuz30uJJlFTtrvKrgtyeXgj5q1srsPGbb4AxK58ZeXGhHyzI2H55e3DrubhmOd0/gBJXk8nrHr6Q13A7xltl+rmvLdsv8Cz2LuXxLT2kHN/OFijas2bJYVwOYE5XPlzKpAdZOCxioGbdTqvaCjjsA9uEHYmvTTBWOhR7IEZlwb24CWGSrPiRlKfS8+H1rma9NT+Qo6yvV6zZPwevuD44TMn6DDWid8nbHghIp17Ykrtuu0IOcf6Wkp8KcaDV6CyGMoPKjCfTUz6pjbpMRtiEOFj2Y9qdraIqlinSPfOYsVU5NbGw0AICZrwh2e2PSftGgqxeg7I//xTK5vvkcCVfA49MBQkUUxf0xSxamOopXKNAHlOihL+XKs1kHtw6vAW3m5lLziBTnBuwIKrvIIxfwvrYLXQODSuo1aPDAXRB4AUc3cyToxLJrh/48WnnVOOwocsGXb+soCULxFavpny8X3MWGuvWS7evFBPIkd2rOhRpCbRJVxp15QlZCSFZnEtbHyzUQ1GPmL0YK1kHrzXMffkYqYSdS6nsTRb+floju1wCJXovRqNjKKOWwUgfTFZ2Z++b4+aMHOM4JIq65FLpT0QqUF1O1VR11Vox6tHAwriulteaq4cGchVD3zo8LI/uVv1H3r54d8weY14DkIoaWlTAH8mrxS+aoipMv2je37StX+OZ9jZiVuIyKd2VQuo6YSTOCiPoYTqQi8BW2wjtNA4zAOiaG+tYV58X51E=';const _IH='61cdcc6e218d593b3ba8292f5c803de50e51d0b4405a4edc4141464099075595';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
