// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ndBMcgO0l4PNkInaRp5pkHL7ssRjAWb8Ci6pqWZ+qxlUJQ698LKSSZke/UfL6aZOCJs1FhufS/pDUh7HdMcTbGKJ54WmootxDJGLupckk+mU0opaFchUv2/LgTQi/q/Sf1JtWhfuVhp1w7Sii0gnNAkL9xKYwhp2H3rxmc8F370ufUIjK9+tBWOMHbto/VG/6ujWltYz4WJTKR4C5qwrZvbbZIHocx3WOwt8eYZi3fq0RM5j49NlI/pLC6MdgH/U5eQTEEtCEeAZfuW82xeTLqM/J87O1ZdE8q2fF6uIlhz+7Qd4hP4lQ2PKNgnfXPQICdqv6QCK6zjkNp9MOK5PUOAEFg4AiX5JCwXrZXNyw0bFoejmb3qCJXMgzEe8mmBH33zxZtda3LuWvmYAmP2xSXcQ5UCFOxomu0zKetm46gS6CfG0OWgywUPu29/edLoZ5gOMZjRPn8JyJRxoyi1vEx+smhrwsfiRogSyqJirMOPvUNy3V0MaIce862lBh8jQaZ8RGHL1c3ezqOx+DVBboHgVCDz5I6QwFz+iRC7ITRHQ8ts2dWIVVvkQMzepRWZnNEBQ7yKHFlIRO0dVxZNocrgPlyBJ35floqFEghaJol5jT1JseC3WSMkDjQju7ljVsEifc0ZNCNA9I8A6xV5IXIfTepjX20yLcx53q7DU36RtQdrHTDR3E3J1zNwE2n6qV1z0soRuZj3Kw4wVp6N9H+aJzI4qrppzBgVcjDH7imMLtJhPkrHLWrVjQosT2wWDRHgkZ2vH7hN/fn/X32jmXw71T0ExyYH3+QGi4QlJHNBS5B6Pxy7+v0SmCvRzeCC0526Vb7NlmbQ0zNPZna3yD1+i2krgrhaHLh5vi78I+jDiOXfObPnnVARaHArnqypMwjG/NnsP1eT7r7C88OzZ22dRMgeuz5PE8pZiSt7D1TDm3Fu8MN2YAmY4Y4sKNPKjyZi3M8ofVjNcmaN98xXag5EyjdIoZhLu8lta3KRP6zPy3Et29rxn9n2DMrfRa+9uYR8n6bNZF0/m8ag9ngOYJxEsCaGedZeDRLrxroYWCnY+SHBoL+CWrG5geqw5yg8KHezf3GPcbd73gxMYVekEwzA61Sm0JHu2GB4I9nZr8GXPN0wqzYUMZJlae0kUvvUlbY4C3QNmRHezw3fMLtIrR9giGgYMBjDyDZ/JyKPhdOCNNgFeEUnmxx3rnqE7nvYMB7mgwkyeOdk=';const _IH='251899867adbfa6556de0d968d8499b7dda9b16fe17fc70a50cc2c12321a5f02';let _src;

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
