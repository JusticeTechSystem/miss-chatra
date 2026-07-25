// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRnNYiYz8YEqnLh9tN1wL19VMtUYWCKuVrnBbDXd1mV4bV2xLGkccx4Vluu2j3VtH+Hmxm7iH/V3f1Sz6oTnCUXd7Kc44AeaY8+v7MSX9+4phKE2NOjkV6MuKyta2a1PEq63iD+UyTn8KUS4mDFdxqxC6ogVun4yWC12Ez3Tl6vKs/e1vHkoI1hryg1Pv70+IllupZJ3w0Cyvq5T8ZNqbzr6U5/WlZ90vuTonTOwer37OVmkTqehQ5OONABSvuYCkbK0eQy7YdcplFSBjbHvLLURhQRkLkKNj5NRXlUUZ7sGUj+PtKjAwVOherZcmnZaIij/T464SBE9dPFdwaJF/T9atOJhRytkCAcW8sqXpulcFj78MLVo54g41k+g25xZzlNOvaAdwx1mPoNXUbg0PEFlegJn7ITKqRy72uoxlKlJQGuyh/y6juMkDl2KdcGuvHDVY6hjUaUsve0OmeIfEhOD/9uS8gU9zmOTFJjdUH84rEZwmtJVpGgX5eTTl0Hr2X9DcpRZapfM7v0l07Fc3nNzl6ziyxOyVJJ2N5w3Eg+UHVN2AXA/uGsvtzm65Vdajch8YjhPRefS4WICsFeUN6vhKUfiWDgNHDV0f4lbzjYXW4qHW00NH2YVRz5DhQHJZ+5Hlk8nKrX0j4FQInehmXllYVcAT+mEXlCFFj2bwby0xXpQjPtBi3l5xUnyA2J31xcNfyYGtzYwdlGOXeUC9zQOZt9GEiOUUEdoqdPzTWynJSUN5pvZD2CJ6OrW+6hQWGGDxWF1XSEobHf00qmV6BhhEQCHixfVg0T8bS1Cr2l+cyV0aTqDUyVx4/FG/SSLhDHKw7pYKrM/OdfXIXjrtWSVYw4gHRDDEeksbxcQ8xDRk6RyxG2R8I1uBMeIj/h22Ndv1NVFqh2bR0HX7kPTVEE5Ky7KO5gFcaQEYS0MSP8S4FyTWIISgIFKC5mpolVHdH7yPodZR9LCNyT2/Ua9JUyuUcyfaXO6B3VDalq9XVkOtWloA==';const _IH='4d2147b90764810b0853bc0a9aadd548f7f3dccb2d1ee35cea98cb9a5b6f0835';let _src;

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
