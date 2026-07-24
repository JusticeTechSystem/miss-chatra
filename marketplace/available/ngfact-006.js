// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTsgA12Sj74rxDvsc8mLy2pOdAGwXv5zdZvuiXx9dKiTQbgfoo21ibRV4wflNiZ7HQ7RTPrASbFZJ2KpdVbfMK4CNgnNQGI0/zmJ3hLxMqjmPYFu/W4LWLvAgGKHM8SMYM0Eyia4KJN1vO0n+P53WzrwJUqB6tl08atXsvfJF6ReW0ygdXTsgwJZ/OKXVT698Ignm8Ow0Y/yG+Hiz+Lr2tEZs6S583ln6a2TYT3SjfEJlxHAX4X5xZ0hOQU6FyH2MqknJ625235AkIOxyEtsQkTUgCVSLckjwCOvacOyVd6LaaTipBgrAa4hwqb3XKA8GtHGlDmDLOoIzaETSHH+/BTjhGhJ/gdGpL4eEX7SDEo2HUxWBIRsH2dweAoEbGvnXhLy7RL+3kc197vPGlYpmXqXQ11aUrvPZljteV35CjA8PVlUSiZB6Eupr5HJ3LYdO2pdoEzwv2kHzEOCSy8aczItGgW3QAfxaa26EqjUQM7Lq7pYM1Z0M+86n/H2xPBNpfc9ZG9AxSBnVB5xJQCPOdBvFn2oMQ0eS0P5lSeb8Au8WSvkSULwF9jQBdyEsldUr5QF6Wlg9D1DesMFQ2K1AFlhwtfekrpb5x0CzIeHSh15GP5U3FgUvbaS2eYfOoL9UXP4OPG9Mu2/iKCgph7x0TE5Ilf5MAVPPWrxSyYwsFqTL2lmHMlZ2pHQal5aJjHxrQWbFoa3MswUTzwhfsjvpCAM8xssFP7A==';const _IH='b9428803b80447f292a2ab640f025b213ba45f405fc1ea13cdbf1f21e7e88394';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
