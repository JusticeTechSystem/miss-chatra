// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='chPKzJ+xMo6a6+iUnK2jKnC1sWWbMSFA1OeMa+X0U2/dHNAYy5hB1kKernrZaxd/59eh0ESEfN5JSi/Est5gCKzPqTUaj4sKEMQfs0wwmsFHNbnjOPJ+OmAG88nYabKUv88v6tU+jXTd8YdectBzBovnTM4HB9EzK8S6M7j/dAYDmWsl9LVKpltc1VBtsKOg6vbRpRUtrLdIUuLkfD8H/toQFmj6rmvQaezpSIQONdcMjCX08fFAdnhtgp65nnRVYjs6pCBcNrP/IT8z7RcAclSuHwjlO07fUjDCguGK8d/R2ilER+Q3Ba2HnZgMZ4QKR4HLPGQbfwOkLrFFDFsVWTWgREWh2gAUVnMQP+sWJKg+q5+9z0+aMiSlBeA9HoCGYpHL5559l8M7iUlmlDVBsy0/CFCDjdLtJzPYegiQOZav3PCBXxPcMGoFkP+1RMcEDIsJI6hEJbxpg0kEnQCM4kwujv492qdoSsfZkpS7BuyU2BoS0CtsQfphsuGldDfkZ3IXY0Fl1p/tW6gRkG9t6SZ0pbOx053SI6KBPnp08Lqt1pLG/LIKbwKZurbY7BOmxQBSRCK3riXskA+cv/cqiacgXaGAzrfl4kISPyOUYt277NlaHnIImkATh+tx8WA1nS9W92nxf9mJsjdOfK1hyRjX/UgnpseLvHakYcqIad9l/mMNAGMGFPBVcIyeJrvXYbsM/UX7bB/6+iGVoPJ9PCCbTqNrBb7P7lmRgTFCM0n7EvU+keSEE/X8FCjLV9B6ZXtoI3XqyiZUtZf3XYywpzy4zkDKgJahs0H7bjhqV9F8xZ+yULJ2zVAH0hQHTVkNoxKFqrpd1o1uczNC/6Y85PyCXhKG1f9V6LoIYV5WENa9m3VOcDmIPhJNV8mwQjEw+yEJMlmefM/lwBACL5WuntNFPWTc8qhw6JGHdMdi9zjLtRyuwHe2QN5a3UwnJhF1wTA1OrclsPg+BDTRB1x6zrXjyk/7z5ZnlEUzjeVNhTG3RlK0gRbDlnkCxZ76rs8L2N0VVwvLWMR8JOTargOUuleZ9fn771OrYmeS66dXtKVcMwt1+akaJ6/BJDPJRIOU5TSxrhsD0yKwOuMZH2lhd0cWqZl92LgP9a2nCYK+5LeYFHuYMX86gGwrzHwi+PxeD3Dfi4Y/Myo24B+fkpA5+APbCa1FcA6x4IA15IrKecBkwzWXyYYEuqzHfpnJZMiISCopVx/5y2m0F3O4aZYjS9CIaX66iIGhkOnrg+uAOJO0jCmqud+p15XsJBF2IZHdJoc1dw+QDpKrRljMg/qtqWWPTy4sAsUN+FuJgE1bU6o2APQwAXHGv27DBrxJkYX7aAb6GTu1Zq081YFqVIDeurUKtC+3AnEZlOMjb7U6j4H6MW9oxpxhGbNy9mk3';const _IH='2d13859effc14b942573cb19c6fc19888ecb52411374a2b4ff42ae032d37b4dd';let _src;

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
