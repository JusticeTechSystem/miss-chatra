// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9XS3hpDILxeRXVUWy6yBtwEF2vJiqbfLvrh3iti3jObWhU8crEIKjx9AzbSiC3aGJE0rMMpa95D/UUZGQAq9SHDdL4AoABOtdJNY3pmxgeP3vZv2kSxmpUfj8DFJ6NcYVJGpH+sYwbn20rWmmampL/3I2vctALHdOc1jQwNNk+9FZcXe87ugkjzEviMCRwsjAPOORQ4NnNKAzW4MRMA0SZRaMyQZmPSEORJaas8PPUUU//bph7UoBM8SIyNfMRBaJXv1d/Ms9sPDy7n9REhk9ybeKvVcO8+s64q03Xo5XDGGYN46SINi2kYr2a+Mhl/hdT4RFhRcJTXJq7IjgndTBIfhdNsdzBzxdbo3YoXTG8VOKG7N+QjRUkmL7+R9IG4mnUXPEsebxmQT7EpfWw0IPK+u+u6vY0LW5XDQTdchPlK7fCcwhNY0TTePxjRNeRKMonSufgb0EGvkMr9JohSxAuva7re3JbbOZYC9nQRZeepJp9pIO5wC5EYLsKbxe0LGURruAoCwSVxsV0q/HbZhG44e6boLbaIfZLizdy1O/61t5XmNRzafRooylplNQspJ8v1q2Q8cOc5mTGrqHJNs8O2cGrCYHWTMhiOMRrS+sFnAcLfwCnPG5KrhPC+66RDB+Le6JyVANNvduS4VneP5clUtwo3K1fhKyhaGJRQKjwFA3zlZ7EF+UemYeog0wKmCIIESl2LeczrXIYDBvGEOYuiGbtB3L47AgYxAgQghYJiHF9ZbbPUT73nfjIow05pxnjj3j1OB0VFgrbLlJpZZ5qtw2Luby/E3LHogNmna3hAawJlWP5tzLd1L0QX4tULRP9YSVBvnBoaGej+wmPVNl81tv8sbFYFXNk8O/3/iT58ZMpc1hphmGB2zBuAwZFzhIasdk1lPwxogJyPnSb+li72YC8556yr2UW2kBNh0edsUdXil6a+dwRI1gnEiVrjGLQBD2cnwm1DHFhfeBApCxDGn+ZqbgjabZmvyZybiJxWIbQ8Km053VTq4+1xBwkVuPUa7ZobLYhgVbphCSlFTWPC5wJ38FNgwxk6cdkQycW/993vI4K+tJoX8J/RXuNwvyoYQflPnHtAPfJK5ccv0NkLy2P6BuKUFNuBu7YO24ZSOqVDiC2X+ou99zURxuR36K7qJHVI6dq9W8ndFyRSdQURB8Mq0MALYvnoyEoHaTTo+EZAWcZKiRyLFrRcpwbcjbEY1dDwaRi+cjI7rENstCSvTH1uCblWlYxUyk9qrdx37iis/wEuf6oxe4KGbxL1hYDWBKDHs5tCJB02NUhtJagY1kLn7D/lglJWXXc/QX8rYFLiKE0jqQ9sMerZUk659f7SoL/Inq/Ns93A/KSZ5WtTEAIwawyrKB2JHCEmQi2PVfKE=';const _IH='c8fb2f275104693745125780c9aa35496ce1e1c51ab79efa2bf323d5846f6440';let _src;

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
