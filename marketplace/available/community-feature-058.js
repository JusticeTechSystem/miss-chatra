// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/EMIWcQTtLccKbcmTnERHswOaOJcgEx+0pT1dJ1aVVFhxyamVwVzgQnSTGS5wr9STTwDgsHUtbNhBCpjmJ9oZ8SGFgqua6iDRIn3gBBCR8ZfGs9jvrYmnNZtwu+Zet5jrbM0o7YE8ayo2o3VEBo4i7v2P8jEVbd21Ya58fNLrew0HC6RMCyKcL/pKCJV+dn7IUMy18huXO7f38cxivtseNWci6KOFX1no0CqbNb09nPu7CmlP/zbKYqtrsJjJNfeKbGxdpuqNJQzZq7iTfV2JLE/a7ZSkWv8ZECu3HN2xV+9EtbBMeMm0sqByZfswqy4AV1sjiS1tY8V6xZDDvW/SM+Wq7CoF9jDqyFW7TZTrAk6HiGRxjEG8l/2nhAzIIL+mxap6h9fvini9679QeJSVY1DT+BFgxmK0qXoso2K9NcpAXqUCuGScvj3zKL0bSAHSoK2azFZy6rNc5FvZiC21N7yfEDsWuWrli0gX+wAUiSJNURs8FbNoGjasQ03O6Inqa7gRLvUVY7hqC/WzvTEvYWJFv84EQqP6mbNqSs4wRbLgwdk7CnBNLsQDbJIOGEtmxfk+/M3KsUnXvjcPERRy3WT6k9YLcZQcm7Pmj6cfaMAQ+/0mRBXqe+I7PozQKdt9gKGTK7m0Jl9480O+9GXYkMjxX7edUhjXs198F+k5eCouQcsM1jdWGcXY+1QM9F8sR0vQRNldOJSe5G7SUwnNkRm59C4cWoqFg==';const _IH='8e7098ad8f099e49974582cafaad0beb1756a141930ddd5104df52c999328621';let _src;

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
