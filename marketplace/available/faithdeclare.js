// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cHh03N2cIKkOzOOOO4FF41oWD+RSNqL0v1foor9g8IbkK4K8C/ADHlKNYtUlaZQkknRDH5BGU9pkyiZfsbtskK8tGp89m2tLU6csbp6nhmzkhk5pu4jcx0UAHf1gmx8ZOdCpUBDdChwPgv9MCDOzwRdYJvOYeI3MkSzSODG55dhRlG4RPi1JZMh0RGXnOuhIZeuxIWhhWjoKLp33TW0iMYE56fuM48A4hG3TmqBM8ze8o8EocKQWSQ1Td+fGRXoh9Z7ifGZfTvNToZ7x52YXwyLtsilfI+FCbBiznx2I8XJf6T/Mm9CvwJozf9rmSkaQCntmZN5B993H7Z7mVwb+Bob9yjsGUKEVJHesKwNK/ke3+uKsYnu556xVi323Lb6/qNRbacKXkqbIiU6pjVRTh2LwE5VFokji9qh2Pj+GkXX1qRcpHMNQ/ifE4eJjEO+5J9yg0EMCsIjfwGn7UZOO0DLCXFJP0vzi2k8aBe2xaFVJJ9FFAGJ1wc+DFNolawDDFpB/b4gh+bkaHgci5zHU/XH70i9nP4VzBsrdo//MgaV3AuZNSfXrL/5vnuwl5hF4RHkVqb+jay87viMiPKpeA1y74pEUI8drS9eieeR4IFGM4paY7iCrtxkmzIN0zvu/oo358I7+xasBfB94SEz2tH53ZKsmA0AXHBQQP5d282wcYmEa1dwhjfE+Dkfg2VVzI1JBsn5k0GA0+1Iq8lODkxfmmz+PLmOFuJwhhk1bgtsNT+ZJj726wJ/2eTD1wU/Ko8NdC5IbXWfoRgMOtWGuo80gCEZgWnRx/WMP/sT+9ewSOeZxBVJGEAXy16L5/s2b0CAZmeCdf5DKteIqxzznd26/vCI48crbjEta+uWcw82+vEh/GbMoLw4xmpLQXCJqhFj/mOdTS6zI8Yv3StqK+lnkB5DSPhFM7S+26HBUbu4la/8xr+QO00rlE8CElTRxpChwuK+ga8fXL7M8wzERm1RtQxJr1g0hEH0KinjybimRBFYvziVWyWHApdGCAYc7uBNGjqnHhM5XPFdhI9qiR3YPf4HM6Erz1mac+9ro6UCxqW81f7OapYYZ8jrLYZApASVd657akUbg71bII6BHBJNX+Uj6r4hOjDR7nocuB8yMrHqOKcM4Xo9T4z6CilDeUusLmXoYsEULLlV7IHI675Rv1NC+NUdkyIsEI6qruoVbF3tYwClOXx/lOL0cTmI8w2i8oG5S';const _IH='2590863446b8058d792cbb1da93edd8ffa87f69b0654674608ab0bf5ed6a4db2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
