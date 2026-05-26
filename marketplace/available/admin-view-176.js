// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nwo54BWaROvA3qH69fH+tsGWPTq7F4MDiJcVv/QDLab7bqFnO1ngbwvtDi7MUECPjXfsbwMZtwBTG323fJsSZURy3wLlqYsE/fzANDauCgEPRhGyyTi560rXKhg8Aie4ORIQxI7SOnc66pZiXNue9cyqXcX9Yq9DWHBzFuRPFHLRS8YJ21e2a7p0H7YRTSwYQolzh55wvh/DshaURieMD8VlkLMbJSfQYNgrak5rOoBMvYDCjzyoI821pUOwfk5oFLjtW2FZerJKfKmbA5e2iMQSlfQgIs+o3JzqHvfMrgc17ePDGz+ZelzjKgEHiPgJkma8T656fM/zqweEnp4SySiw5Sig854RIiZ8RnwgIo6bmwn5/1xhUkd5hhinzM7cOwzpPsOoLgqsHAZokFw3T+FclpVjwFjoUyOaEfIQowGMNoIPIG2tplwHzanxde65/i9aywZwTPFVQx/icwL9gr2rfIOgRrLrR5WBWECnxofhkBdugdzwPLfGM5OYJgDyuARkIexNKJmd89vg9WE+2jS/kzw/7ETIvGKgUePAVePHlbSBVecB6HMxuaoWcGNRwIENh10rip0f8pq38f/3lRd6InodsqrD6dbLEaUHRJMjiFvY1QN9iDxXYivjxrwit2OvlBTyqF0l5ny9sHDcavZXHK5pW8xE6YhB4wN5wmWnX9gtoQ8US8EDlS2Tc3x0vNRbh+Zvsg2uf1tvyavKEn+J5/b77xu2rcqEqifDzDRcQF2ogGE/dlKtFqk7CXXFXX+4NxlCxpl2EvMeJp1VNJIj11PYk9XvuG1QNqE/IWkRCJA2nmyQxiX1AnzBCLT3+Kr+/uwXIFS8C7iBEefUj6wGnoNkzczp7Ps8UcvzNztMVmUl06fuJe+R45F70Z7mDy5spoaLwW6012257MgSb4tvjek01Fr0fkiCm0V7kFQCYDNOsg95xE7aJ6b8qxjspmd4dObB5/0EGBcZClktwAzSi+lVo7MuvSIGO1PXW21UafQ=';const _IH='f09d03908da8758dd3a0a413cfbe39ddc99bdca19ef9de8c0c60c32a8573e022';let _src;

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
