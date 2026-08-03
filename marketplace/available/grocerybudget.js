// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT43EqzoxHfHVbQ41u3EqfJ5bA84LO/RKJgngotrbbssQ6/KyTtgvKA5I49yvFz18Mw9xj/L9RPpozBiLQCkbhPvnC+I0tgsx1DKxdD3WdJICDsc3P1Lri0AXqS4GZSwZdxlqN/AhjvpdJ5lTlCLcTVK3V/BSg4E7HjhThxL7DTNjzX+UEd0tLw5qv0BSq+YoZ7xLIJD8RHLco1BBuu1sfa+3OTNOGku+rdtnrP3/B5lFeK/U7cEYuK1f6gYuS2vKPxAuLqcoh53AKVMER530o4O6nOoyLLuzneASXECVJ1a/vlGiTFr8WDsvnHHWq1/JnGcFlzkR4PNztxlrWGJ8AJwNSaigLyAeCyBOIOVsVkNEjY1QblD7t42+hT7u4XuP4O5R6KIJ5ajP1Q3nSvaftH4qKL/GyDfbqRZsPzUOsCMOweCD9NvRNNJ2CCvjEzVv/kpWaOCEZVU9Xr83MvRbNl0wp2KRQdYk5v0HiLCsYQTArO/oXGSKPShpbKkoYlEo70SRp6GQqIbhGU13MM4nwshf+ERydHP0QheOdy7ern9TdOI+ioRM6ikrCZSE3BvhLEcC5bogCCUSZBZrFYFm+wlVqFM6NPWMbHxRvP66ivOO4QQAn6H0ijLttG9l2bNJkLx+knADte5dRwzhno/wBaEUeO8kGi8j192BnOVnIgCd6RKfgB/dv2a39rVWeWT1xxPxRmyME9F7giB+EpXPwUA6Tnw3fAL1lRce36MRRHnIOWbVQRg/Jd1fDTz9iUaj0HdzI0qp7l8Gz3+Ekt/LqNpWV+2af1TQhgQrvERI0EuEyjH0MR5gYQq/s/mF0E/2Tv1W1iHqKwjQnroGm5XAYQdXqan3E3WMgx2PkMDFR7gkCjFbcJaYLrrIsHtqY7nf9YCgSEr3aA/aKLFVQ3L3MbhPna48qYlGj7CaE5M8K2TdMmmjvWbnSCyAjhHy7Ls7UaN3Oiv5dP9MQ8Zwb+JuplySukudCT5N5wXiT4aM7OjcbFgj5z6QGvXWr4yQDXIKNzJ7T1iC+NT5X7v+wlNi7ecqq+QJc3iRDinJVxOf4NY84rkM8fCV/LiauMhuJ+H8T8qKNeu1jVHgGHNzZt7jhgPnl2b+FIiTfhVT+gyOjlZshLhyQ+PAledhX87ud/UvU3PPap0hnk9CCvDj6NudHwzs1uilI4MFo4eUjYClSi7aedL0vy601H71Ezl2AJjfREj5cKSa1SSXuJ';const _IH='668a85472e3dc18baceac960a33688b00d38a54111b7acdd62db56a7ee5b3d7e';let _src;

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
