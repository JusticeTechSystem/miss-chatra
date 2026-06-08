// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8ZPxwn5nRHSM6jaBDEQm1yfj0nZAjZ8+vZnhXhgkhBHzeA7qrIbU5EPMumPAgBFAqX3nXrZGTSryAfwLMJRm7S9Hv+C2EmZFDROqlYRdyRp0Keu5mLt8cbUgWjlwoH8UEUBAMesmLCun/0mHAQtDjB/2rLD328kc3KzTsMFZveUutL2Jlmzf8VopNGWHe2IRdtWtQNFf51UnxmtsYAtIPyuYu/XuFQqlngS42rmnX6WFsCiMOJ5/r6qFSZPqioPhc3veeYHjvo4tXtxOFMts1u0E/qoE6n0gSHrAzrFVvjqZNAS94gl+uTzzMrtg+y9Bglt8dYrOYWjYLgumRDuhmtqzhJI6+Etx7EtZi8QA3pINahkCrByHwJf4s/48GTxrGBOinkqayz6y9CeDMp6+/NAIOqOCOKsHnS32OaNVjRhlg/Ac0cVS/vD9nGAFPwTQ0ehSJNTS0cKPm4ERhWjRT7+eYmdIut3FW9SB1NJ+JT9ZMYf0Z+SdQAjpk+Kuf1yA27kAV3MwsTOSVri/i4cp+GbS8/vKSx1EwW4koQEbOCf6ZVAXrR902zlIzA9gbOvao4ut0ymtk6k2zPs/gxUB+oY8HkU8Bdutrtu26Z4yuzwD2ogVfyOej3U4j3AOqhYjU+8PT2K4cOXAYJZBl0iKjxs4EzCIiidyBS2U6fVfSq/YFTiz4e1fx3+ULJg8Tm19EG9iMh5+4T60Oj7lzREAOoLURkTUeQP2xnfmUOEOsMxjmbdGqrD+segYZAS4ond5BRKcA+aMSWeyOo3Jsrz9w0q2MwViSw+pg4yTctycLywX69H/O+qDKuh6aoC6PKj8Wkno4pN5qyD6vME4l+6cI9GvH6jwFJTw6iflgoyfmQRoxd+Ecz9uix0+Oc7XtSOpfV2Zw+Xb0Z1xu7FU/aIV6Gy60EZi+SjCyV0wf+gPiLqXIQqD6YEjwitUiq5kCPAMIZrJPXYSV6uF053/9L+SsS9LA+Eg0vrq7fOHoanAHBjk9wKq8TqtLKPUxl/hxXAxqOT7v14ADFqQ2FQtG8DmH2hrjLcYWcD33BkVyx14I4UwzZu6k5YMmUcbC1u0kxYpl0M0KNgcOlsbUEubrb+IWgBShsEVPc88gZDh/0qfe+ElgWHSfeza9q7j9MchKFrJTF3ChdgZVCCReC4mR4sjaeeuivf95m7fkVD0ITiZr43Ymw++dltXoEvVgoSA/P1TPLeFm6dytKHtXhckfqGTIJ12Sv2baRHK81RzyJ68xTisQG0B7dZlLkOiYyC+eBF2lxF5XgHR5an4eoLnNho5eS02VZWacOFkikXRzld7t9xeZhposmqkA7eTm/Ya52koGKq6FkbQMNLNVcUaEVm2H99SW2vdLl8R7PPq0BmgINS2pHt537Z23brg9xa6';const _IH='cc65f633ad3e831530ad3f5e5e91ca9ae414329e69e506d66ea91ae636525604';let _src;

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
