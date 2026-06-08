// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2Ip7uTIez919rv1x5Ck9Wyz81/GZS2xJcPvtI4ao05ZEn+JDO39QRrTv4Ntb0v1myi7aHh6IA5vsXadX1BRuvWQeexyTLfP8m30hop4YL0ImTvdJBQRMUz2Zc0tnEomM4Tem8JfUYT3XHozR794iBRcw11GZ8k5cV34PxmPMNUQaY4FjuMMdoDM6/fpVPaKKgF/NEO3gwLsq17XOLATXbOYekWl+c7QqbFiIXTUVbcC72Qzb9hzdFRsi3qmOxlLjuRMMIaFeYPaeDAkY10zuc0owSSGb7WOnEHswB0R/YwoK6/kM1HqEb8Orhzuk4cfHcj9t8GYlhb3d7v5TZfyE0SLm6v9ObI2ycdncIeFLNgOezVCIM7Hkok6KtoFQ4GQIOsMObzah8OwUeJch8gHPEBdl0a1Y4h1vL/w5oYF89zrw9BPpX7fVlLc1aHwTmZ4vH/CiFKZBa/yd3WL23JXyVzm5NmSm2mhvUhlYSx6iZrBZ8zh+JaTGV2YvphVdZkjz7F0OX4LgTYgbY8IDfB4UwmZE9gfMpEAYg1sX1FRkF/gGnyIeS0FQRNteqd5IqVN4G7HcT6w0LsV/gKeZEAeLPz4glLfiy719qLtXop1Wd0DWZxVuCcjwcXrDjAgpR95MNBp6XEKwmdHMJWX/bbmt5Ir+yNlMk8Yt52Ie07ENCZyZi3/SLLT8gjP8GGWaueAZn3Epoe5qUoEmE6w22D/iXw==';const _IH='4fc8a4acbba02ac8d20883afcda12e2048acd78e8af0f5ab379dd99476f75042';let _src;

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
