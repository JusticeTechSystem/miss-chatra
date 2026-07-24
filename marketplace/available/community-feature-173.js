// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhvBsZjk16ftS0htTjYPbmQZIMlimaHNNtQ2mnEkkjPFTqIPSvNS1HDZ8diZPOiyMEenS6lGynyMREW5Y4JPXkVGv+WE3aS2ccHZPCXvbPro2sjvTjxCB17vczk9q462+EMt+5psN86hR2ZVB+ItfMdFcKsKAqq7oKbQu1wOC9z4NycJ5/5p8kqT+OSrgVrkaVZU8UT8bAjbGKjGJ1jvZbnTHNNunz+rXkabknzUu3s2tdUocNmPq3iJAmHDPmE9oG6VNA8qMi2atOySMPmU4sooNwugFa5EzxUJ8F9M4amGMkyvP0vazOWcs7ljWhA45vAqyNNmP4bm4B/Dc+KeuPPK4XuHDSRE+AZ7fFSGoPLbUUDCVgZpx/w0q+KNq+qBnIe/RB5qaQhpaZpvZMKiuwtxpZpLW1owHoKA/ArFPgIcSPF57Rhel4Aa6dAGF0WJXt5bWBcD86xhO3T1Rvd15idD5XuuicqIFroeYUTwkMHRuwxG+FpY+eojJfF7Jql7mqIaVhj6/UVKrrNgtNAEeCPJVVP8L6pG8BIyadis4O2j/D5dbFtvO5ZTl+yqv8zIivJL2bfmL0q4SeDch48JGXzfxQxsXhjOHX045+9KG88VWY6IYda7O1hdOkW+LgnJ9vbdL0Oc0HL0Vx7mO5/i8UHmmlcUWEn9jUQ1I4RMqezYUwQMj/Tc4ZMZn29bRsrvjc+RMYVBQuonnjr5VMy9Vj3UMQqsuT5Irrs3iOlg==';const _IH='df48e1b9abb50e228345ec16e456aaf386992dd92f462ac5b18165128f7afd78';let _src;

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
