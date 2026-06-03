// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hLJvqxgdbbfHK8JaJcm26zscvrsG5rXxeYjUiG7LZ55Subkr4kaiL2UvJrc1o6alG67efGaZetqoo2X3rGK/q8NKRmJ2/fEE/usflt3H6mYRSs4JKPcRdDM9DDc+3l0kKll66NEgWpxnzy2LDEi/1FlOyisjSjYPUpDVvqNOyT8HOvnDECHWh8wHcWTDrQuJVI+mLGcGCuP0nGfzy94naHYca/YKBxdOLskFP9xq/JbhFlm88vi9LIsOQ4SQbp3zkGoTTcKhecg5560Qk1MHDFsk7ShF1RXwKG/dD+qGWGVhrvFIhiTjmSyBd/rWjeZW3TRwPfa03Ofyyi1+QIkHZxh6rZvhc2UWTmpvxWw6LShJyNLREU60Jq97b5WFo+OctRHKQZRM5FCoJZKmilSThVi3oBZE0wMD+TD/kkdTPKxHjySsndBtlfSPVINd6YR4NmwhDn3ulj0E5Htqpf8g2AqkeKvyp6FM337ZvnVqgJ0g5K+0uz4gD3KuM/NxgO+o8bH6Ap1CMDf4keQysOeFcN2spx4PqAV7YALzGnCe+0Dc0Rj4tVuxtwpI2B5n2ZD4nZxTC+vhx1pLTJ/9HThfjIyyRg8dcD5/t0O8Sjdnyg1QbtTwhNAx97qqvqXPkSz6ZbAm0y34G47aWF2yueqAY5x4zMhApACXG1f8Iy/8Ul2A0fJI2s6OXZKYogLvscv7CODfzZzruM8Fa6N7MbLVl5fWU+qSWA7uDOyDmHevlFI0448uGjV5IJXL+EfOQ1ZlqhY5YGSRBJdUec4O0xdUNIXs7qLNqlEoWWuKrKOb1v4GAgVHXEFkWSTJ1Ro8cU477ZTyLYZZOMqitjIp0gB63Wew4RnWe6imbCB1jK8J7VpSCwip02ywE+VsjjV46SPVWt/iyxexs1geJ+HgvB4IEIWi/w+/AKm8YxXWXZy5Rf11fCc0Sz7UmYAy4Xbx58t79GxBrYn0jO4ISJM3htjnkK1Cxy8turJB4EOqJT6HG4fhMpcMgn2yo91ezd9YaCB2Lt+zyfLYDIae6mLnf2xcXoZuBRoMqOmnKOVSQFYP6nLg2uSmaIbBm0FEM7b0n1U42u7zx2pU7iiXxlVqMeNN/e9qdrQflS2XRLTJRTejGo4xr010uJJjpK6JztgXLjPd5DttmwKdgJ1y1j/+E/htXDGnDKYzUZn7ECeihmRbRIscjF/0Msa1tLE3PIPeLK7ObYW9hHtYfVe6q6j3+/UjnBH7ZL4AvJupxZwrtv0XZjv0Q29Tq4/10vO6VxzE82caJFJpmCNxDrWOjnkXd1uiCiETClbQszLoQJlRSQ5Lr2C8mZlatV2WN47CTivpO7X22MvpVzQji2RN/oHThTpeIG791mRsMdsNHAFXUejoHhB6fi3l2FSUkwSHAHyHiaLNROEqh423Qw==';const _IH='786842e260cddff2b9df58499d9ff70f3b11ef7e307c4c9832543e499cfcdac5';let _src;

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
