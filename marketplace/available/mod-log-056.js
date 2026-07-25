// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmGz/6s52OlWOP73p1WLbIaP2wf3YvgcMpwJ560IdO93nnGIe56wyVmqce3QtO1fC4wcOn5blEAg8f5UVqK2eqc7KTqayf2b1OVB3RqQfhXYRZN7B7TX0r7xzzaTK+ZIlPIdDNXoTXsSIrrQ6ZY0zWd8uT0dooY5MXJWOey0u82OXHt4StydHKjOQBatvTNE8vRd+e1ThLJ7vFozUiQfqWW3sS602ieI1C2Yuzi7ciHrivvXlk4uuGs75/EUjKEbD5Xb26xbbOYQ3MooQXF39DAALOOsPVfPoQSuME58MGET6XwpqOQxygOoY1DgKUpGbPh7+3HSTtY0G2SwLyYmJDSnuDA6mWxcqD7EszAWveF3CZUrF2LmexQ+plAQDztndaGmVOLaSyyk+eJtBBdGCNPGLLBNe0GF2ymUZVNt2dA9cNhkkAuNfvOjzdnGBc0R+3Ee2nEMkSqeM86LMpkBiCB9dQr6PFVSm1uFsrO+QFwfnZU5mrxiSTsSr7gi8UY70nD+2kTHS5wPpkOcBG2d1AKXfe6+bJ+R0WWa8Qp1PoKQb7cbKgiRQNdmeGyXZZ7bQxbde9LyeWNjhr74hMByzC6wsy0+fW4swPEbsHp5BZrHxRmi7eJqRk+p7h4D1Q6OWD75fzF04KFECoCftAm1cFOfiIHSyZUZye4P1Bf3gDMrHhfYksdZKcD7WhNJuD8VWetiIre1mol4fZ7QTzLwijtmdbesIlwmecWsv+8AXxrwK6pO5LljSDUL0lc8+JAL8uhmfyNYvsPgCgg7D4Y/SPF83FoxwWtkpP+6tXy+nkyv893WKifx72/HZF6K4V3rpJqfOXqL4IUp+t8H91AMk5+peWOOsRRhQYRQ0z6ijm9+5uZnBsLRRL/T90YKNHTjpsXSrBqTwXw9E7Bz6Yxt7vlLQrBSjgQi9mtHE5DL4iFMX9MYcjc33aJck5nFcG1mip7nZ6+RRFZw+oWHrvlQkzHay6yx/ftfzRJ+7uwlMbX8+aUrtLh6k3JATDzM5/MCuGXachRC5Nw6Oab+Ib9bI0szDU5IpTX1S31w1IJbujxD1wJ7NW1h1E7vUFSnjWfpx9xQg5OChEflKfX9F2/0bMROkyo5jYnafRfKbaw2DWipVpAQMooMd5FWFYwnQGUlTAhgfia40enuvNYwBO3cv8U6fL+YF3/ia0mVIbJCLA6v7OhPfqCrYrcygCvMmw798M1dp5aFHKXHqb2myJj7Y5DP+CFTzge2H55UbDQ/JX3xjj3P8HG3igP6c6FR/jt6fzf9+aarLC5Kx0ZSrbXUo/hiv8h4G3ry6w8lFDaOMUasFmzhh7TWrOYvQJ8upMFOemg2YHjw==';const _IH='3be02c09416714d79d268ff3601dcbffb843200ce47a08e67d80dff79320f61c';let _src;

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
