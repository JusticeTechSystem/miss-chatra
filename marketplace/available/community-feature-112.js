// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7+BcbFW/IzX5X6t79iZn1JOEPLCBr0hg/0x9QlpgNIYBcZTqf8ibk4DA+Lyz3uFtz+JPuU6NgKSqFKJSjDkQ/j3HJt96fjNqZFCfwDAXaI3M9YtR9FjsYIGT8kfEyYMGV+mbThvvOm64KGyETp5FXSexQWVLGZ5Crs0t/SLcruwPe0C8rPp6ha43WUa9PX9MZO15cgU+HTXSq7Nlts+kKJ7I60u4DIi4cPu3StpnQoMPa924gtjvtgGVjqk6jd4CnGQssb7bbuGFbADv09dEGxDe5jVl95RjpF/xrPeWDcd4iH3YjyohtRXTaEiWOQQOl/f9x0SvqT/SIdFul9krU//Y5R5JOAIcAgoi2IsQri+WFY0LqkR7IRHs05iMgsHb8V6Otzjkmouu8kpl1sKisauqZkC/hISBGob4ed0jSh8PID/nvz4U0u7zp/j2f2CaXu+oUq+HO+1NZXJlISsxANsbKuMr49UhwIA5/+X3kysINUu/45e+tIYd62B4hzqGward3YB7vyv0lSjvp9O11jUqmnh97cFyR/fz7xd0s0VPmqdf7pSR4WMpYgVkb9taxcqrglUhsHuLBd0Ndnk1VbPm/Yl13wAWRTIT0kusJqXkttg6E/2EYE2+J2waRHdeYeoaN8dkkUprGOFv5l618SNZykfMY/Jc1dZVY6fLqkPaPtUcPvtFDFjS9jJgJZ5Mni1elllYgmN5pUVu94CQfjO5vEEeHY48Tu0txhfYV';const _IH='61ecef2da83b318cc886f397536e9fc05f1a0ebbf6f35cb9e240b8aae0e4f0fb';let _src;

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
