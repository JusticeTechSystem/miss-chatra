// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BfpdCguuSm95ivP8NLsygsCI9B5yHGhwnakY5TLiLQ8iwk8oCRpXgAJgCF8LO4RvX9p440FHd1jzwaAlIF+o5FeEzVnQm4/Kw08UZh2IZZn+macK9qzzch9Jlp2mb4Sm2A2mcwywm18tvhd+1KfttcG+ltRE7rLpk8swb/E2T1rk62Yelf73QCKym3sY78fJMgOWYjEImc+kh0BbLTPwvHw+VV2tJaQDSTCi+eA/YsiqhNf7b19XigZszkIuSEhoE6mLIf3+pmzlxZzM/Y2/Vds3EK6QPfHHHzsj0/ssZvETMbnNF0VNbsqrKZFW+JWsCv9tRfrEsW8FML37O1zQ68xabZ0DolsCjXwCfM1G5niMS6F1/CFuZ0mGmv25YfXRRyYh1FxncrbsPTWaHhWmAWUy+pkC5S2wYPPSo1Vz/ez/b+ibXk/D9cTMT6AupXVWfyFJC5UOTvz0UGBAtnvTIc5hLgbgLZ6cxVwXp0kCXxX+fdSGUf3CH1zW/yiN9sNCbe3QZhACLGJbk8DzbjiuxsZX+kIZ4p+LWU6Rz+KyBy8EA2Dk4PkRolpCDQCAhCPqgW0sNA8iQBCMwDSs7zJ93DfHQ6h6I7Dt3KsHYoqI36seIDUf88wVlY60CyHhWvoZ0EMuHF/aKCQNz8pgCMIz3WFG5IuxlSuRCTaxYKFxHZExfLFJfdzgybqxMgENOV90SRyeumigc4+Co8DKJrbnAqvYUccoXgkHbCpBdZOXFbTnOYD0ei3byETqrmoLSZm1u0NlLqxc1LP4/lA7v+x7LK+pT2TTfwzDi6B+1rxv8eT8V7ZvAleOaEt7M20aA8lQc+RjR94arwp7mD9MUhfBAVNxhRa/lbbio0cSU7AJ7WvKJRA0FBTo/tXDMBOYi+wUZ7bOYxaAEfW4XqYa10OX605ryj9EVhzVztHNh3obQ8f3LMVa9ZHVeds/vJFt8oyANMsXVwu43atT/h5tVWz3TZ91DWUJB3rNjR3QZiX0jmwnZfGCuSu3QdZBjrN5kInB937Zn6BRlme/QH/GNk0yFc5sqoFR3uSgfuzOYOmJNt31J8CRC+wKi4rXjJ22wd9LJmxNQeG3ElTUEqWViVMKfncS3OA7f1Qnvf08B1KayhPGo+1WFBq/Ez0hR7DTPHxkQVrB5wpdTTzRUIgeDlf9B5by9h3jE3DruU18lGiNCVgGDAmAZeBxXySZ7t3sccmZHn1F';const _IH='5f54b389e65861544e08b9e0e7601c0bb2d96c83c928f318c90863e1430f2589';let _src;

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
