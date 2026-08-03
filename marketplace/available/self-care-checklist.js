// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXxnxuqxtCCtUM3DXsDWsqLlTd3tp5Y28ehM/elueA2M/30i00icB/758zl5OCSmgvkVIXIfHt4uD3HPLbp3cJk5mi6w6SCgW2u+9bbXzxF9NIV5C0TTFW3l33GpH0qDkqX4N4PPOReDIEX7jI4nzkg4611K1v47VLae7lLJz5puvPNJcyI6DU4c9Wgc+dVQc0GRpHWFn8gu6gYNF+kwVS9o6MorzzmrsMUxPweWJyGKixVhSFRg5JdfRSTbYCHbGz1WIV9La63yY9uUgyj/NedIiUvMpChA4dcdgv0h8DZqva5y7OYaIg7zmcRLxIEosgwrKxziXpldzmtT+ZzZQMF+Gh8NCSYW3LKXfBYEIXPxvVPcT3nHOUMs08XB+0bN++K/zWICSsoQSkHsgySP/RAg8bPltoBC2K/zF7/WvnmAXWzQy4kRKRGHhCjbbGij8Yh3u1qYRT2YOg+L4KCgnsXliFFm1H3aoLkIkKk5VyVxy+QsI+PD9VRwSs6HKGXoVGYU5WJ07K5e+/dXq7vx7EgODNUYOIUveA17YNZPZDh43X3xxUMb5UaiOEWWEmnpT23KAYFQlfkc5GkWQq4IySWuRyvHFec4IaEq6xEzjFmPJkB8/Fiagthb+fy9jnlZK0AfSzcHMmU2wrvsvlP8k1y8UVDZoTXghaTiinPvg/7gVnh0l4NyVxJlEuNTbdQdmRtJgWQbUXVKHStL5t7oHaGxUOnbwOBAM3FOBIfGAPRn0mQyuuX2ajxINhqtW9X6PWBGDAq9dieOFyHTgkzsw7teZ8g8FPY3H8j6QbYpiVNiQxtC1BuFzQE+JDiczvpLkNFerkyuowzGNCuj3qMwgeu4Z2utdPv91fZMrLZ1Nh/7fS7n1NnOUm9YyIaBdQLncLaskZLZFJ0zOwMJZ/Ks2jXjQIwP3TRIzxpZqIMZot5ILUKFG8r+b52Go8Tr4l6GZ30IEa1mgy+jKmvQ/WE+avuA2hTHbangFRWZ2h+D5Fr9C+xAHOj9FdkWBb7oCY1/ECbYa/NTO+DgdPHEh+APcCfkslDs+E75pzKGmFrv1nCN8CL+GuKzcfVeZ0/506Xbm8Yw0fKlZBqynw8PjyrohOJnQ35q3Sg1x0fCBuDix9+8CQhllGrH4vLX8pQUOx5aTbFKoxwx/iRUzcIF4puf4br6y0VFlr6W5v/vGdumdhLg0vXnK4rUkBtOUZd9Tdo5czzt1B6vWATNKYm6c9PWPiNsccXVf3/wQHn6vk5lDHvD/T/7k/Eugf55/rZrQxFBaZXO0VXJ1GrqKG/peePF+VMDXuETr/lDIOYnyE3SP4dJsBkPQVuiCXRQ/0MLJ0J569fP+mTfMjOsmon9746cLxEsjgG3zyEygmgj7t7tzimJIpDTaIS3DP6je4AEpj43JJctWpnaF3+NCLDJVRgiTZLXUuufsS8Muwd2HX013GKqsjaDGyT2RXG+9LUskakV8Zl8MbUiq0FD6iOKHLPjGMfG3P9w8e/b5edwZsjGyRoxvfKWBTLicm1IXZVplWalk32fXNDVOqbWCXgWY=';const _IH='e0d4ae2f59571555a9d662b9f03b036cd0be4d332080c099230254837d0caaf5';let _src;

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
