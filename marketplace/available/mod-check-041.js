// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSthcCN/HrDguVr3+6gairaNYleNq8A16BLC8ozZ36mvVOY0nzt4Nxp3wpmFYa738RgxpTr+mZDwUUrmDe7Od1YNP+oimXXOHy5H0Y168UzzplYESUgc9GxImIaBwV5wZ+qm+dXTH8RJ/X+Xwu6K2KfxtJL+/niWJXXGWWzhcmExWTfhWIwziMRsSQEsdB2WmkbJcMJ91CG4IiQgABKUX2Yyxc9I8G+2GI7jOWCVv5Tm3eUlMX2devjsBXvdHgA+PnJAqKqDhNtFanCINWgCZEdcfYFibE2XPfZM0gIJ/ovqds+tXL7Z2+Pla3ogsj5+QnHuVQmfeKwklMA5QR28NMusc3OsPePNaolBFqiHym1OK75L+tgWkvV+e0PmWbmPWWNaZjtz0jRLF2bD5AO9aVAspMYAZIEPUz3awDLK3n2ZqZz7QBEpIhnTNz/S4EuwkLbLGrC9cRRWE99vuCrDuc6oLwnz6AVZ9Xn/2eF80EDVTHCs04mq/eSepYL4uAhBoZJ/LiAkWC4Bzk97oK/c2qavPYWScHTAWnlfRQg7TkJX3kS/QH8m6uDAM4AX/fsEZhTY5hUxxdUvxPHH6fnm0p6Y5aW791patL5m4MaSiqwU8qu/oqRfFmZ6O1De/0s2NatPnEWtS3bjTt+oIcIMsjXT/Uq/YhYOjtjeqpn6u4BaiQzd+dLxwbQMveTAtN/Qqa901pKczEodRyCznQy4jmj0CR/uynXFkvkqQHMlBx2nsuQmZPX00LyPBrmHMpR5TTI9ThOaCD4OyEeDgwJBPcgrLltjo7IdF8EjCKOQmeGCir0DzER8l/ZcJ+DAexp6036+ElyFWchZgHQTR+Tr1vrDHnl/r99K0fDEF0gXW4XRKfYNobVWmvCULUHn0IvJI+5LGPL9KoHP8tYT7jtHC4Z9FiKkCthrkq0e5gIY+ydi6Pexdrz577ayZVgY5ekD6v6GuroK3gpiCEjfPdv/riNjUSCeIJXFw9E3OYP1RI07lCZFplWWncFaqp/T6QgUon+f00TcfqvDfOV+7fBDDttNzT9drH2iMLzRnViGJXqdXQoNyVKxZlvG+qtwhl6ghEE2rCh0EtUXiB3rcdZDiqMkzxufISnuIyMyErgZEbt367FAFaXlfmBjagZwwFL4a3Qq5rlAlfNcT+zSIDMa/kVuMg+TIKwbtGiC8hxTMR+/Q3afuSDE96AJARmvTC/6LxTuu3ZZt9YraTLuoYjBoUR6cinDPUL/CnEep61d6ecwt7UmfAi2wXPpts/dyS2AcUx36Q0h/Y/vQCggEfbKF37o/iFZ1nxnI+7weH84Y8+GquhMYf8NY2x4mWwImNdGXyLbZD3j9Tt5pLiEfdkgdaqDcFIDzR07H/P';const _IH='5ba5a71fa2ee7e93df5edb4eb125bbbe2c2952d8c18a882acb980901df725623';let _src;

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
