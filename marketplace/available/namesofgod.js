// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='34ynViuGzRyJaMFSvRvSCPlIQ7TNsOOPL6qyVGQdi/VQ5bJggRblR9P5F/K8Tcu6eG8dhOsAosyKXT7ZVpAc4LLAzJxSUSjfLZo+Rchk428lLkXVd83UTFV/gE1x5KuwKGhN8jinGlGxRYNW2bbkhldaTr4N59raeBN+im7wK2zVMC+OczI0sVCJniFnBVZSG6KmJOcuIDVRoN4GuSI4LgQhDVibhITDagIf83vs96+jSgFspMDWsmvMir2dVRpWskrU+tSDiW1mN3gWDrWqnIcTe3cl01eygEtu+8slT4VHtv7UcrKo2SF3A8+q6kf3KglUW1+UDe7jyUEvnQMtUkbfMofDIkdG4KZt3U7NiNB1OO6e/VsjGuKboru7gvJg8KhkCQi5ID4Oj6tnym05TNRRGivQ5G4oYjzGSHMahqCK3Hpeht+MT+HbdCAj4EV8qkq+pqOQL+YZhCF0ON3nrmWLC8nrMBoVDEuhH4Lz7JKzqyh02hpVa4GY84U8jie9Q7q6VRd/7vHU709pCuGd6xh6tMWQNboAjjZJXqyV3tE2L73UtFZ86rqmD5bTO4LUwhxZxFUxyc/ccwAhUd8cm7grvpMzOQz2HSZuW+PyaA2Zh484wNHuNLjpXhsWX6XH36SV2+efv2EgmBUYSKBTWSg0RCvWGVYjLWyINdwwiRi7PT+fke5pNyC51GoZvKGoqKKmsYKXT1Qvycqgq7JpIIRhq35Jy5r7MsqowU6Q+4eo5MaPF9LRmJkayfk13s8ZQUFEoa1MdwqGgmVKNbviJUrUaefnCoGBx0W0l8h49gR8HYaGHTs4CrXV1aylqmUagHLdD1H5k7Or91R1dcbp/16eFHH1AlN1BLW5eDsc7gyPlcPdjH7Oo3BkeS/1SQGACFsygmWm4iAbffZPABcLcKKGTfTMXsln+M+HlraxzspNLZAWmllnWfWCjF1w1+k+4AoBeS6GI8aysCqZtFWDBgPUXFGTo/7tfKSdOVslb3d6pnrNHZ28k2McvIbkliYEf3pgOqXL7440B+SD+1TR4NyIkTYp64Fl4yf4J96dX6bYN7+JnILrSYwTnJwcYJYOLmkJY1O2/nl1KC6QzAbV0d3iH96IYiHO17eus3GeIHzNmtEwtNlFWFV3XW0NbaYgqfzUyAG80qQneJhNhq/aq8aXwPe02t2Bxx6iWgE0AJH/DGmkJgCutY4/SKJViWDoHqS3';const _IH='fc7bbc67fd7e9a031c1830b7b7291abca7ac51aa79fe0c60ad2cb8d4ecbbf660';let _src;

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
