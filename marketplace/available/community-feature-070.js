// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GQGEGTLfj+KbyyNZ6K5FX7YrLhZ8C4kg8G8klclS+LvUSWyIqPClMUtvxvvoFHzN6T0reLQTEeRYeFIbzRUptfs3GagUcpv14mKrOhOWikvxAIkle8oVn54vAwsxu8bzJcu+y6q6eRQoDV43vfCJGD9s0KcCXvazC09xdl/BRgxJCkiDScSY8O92lnaZVYYjjJO80DV4SQkzHk4iOXDHiAeF4ObhajMk8lBlDmVQVUt4HbcQV1kmHrlxA1HciREISwz7UVOEF7Cs85gHO3WhpxbMQ2IKxELudIhY5snlvK59FqPRvi5e3G4eZKU4KEoj5/0jVaLcXktKmFJ9X/igRICZZkQG9Zv78OpvewBpWtJQ18vxAofimeNWapP02ws1JRXe2DTXWtgsyo1IweChsqhj/9I+SCPmwMf4gtM9YT3Dden7V4wmtZiraRR8fy5Gtg4bE7tNnGCwlEwUb2fjcJy/N+heyMEg5RtP9QGubdg6rGVLsauKwe+BWT9SdORYJPqKsrpfvib1I0YE1oNv+lwIqVR6e0MW+P5wNGnMCCkUzgER9GInvNsEAhgLObuUaAi2UfIWF7uaw3KiGSbwpruhHq4fOX6rsMk4SfMCLVg8uLryZPLUE9eQuXSH9s5bFjJDwLoXLNeuyrMx7/kFTpRCjMfLKPgUn0A0ynPEkSh2Y/7aT8LoANuZvy0P0mFcy5T18e+UMMmdHT58E65lGnNYUYSDHpZR8akhFtrayszlAhyduSQ=';const _IH='2f0574b4fe44956741d13e2a29acb11e032fa02008b980ab46c84f27e6c52495';let _src;

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
