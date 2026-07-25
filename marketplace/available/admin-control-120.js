// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvlFL7icSsLLZmNQf7rXgi7iIgNN3LFTCDNjzla0oCvzjNG3lH8zNPDeskS0MplSB0imThFQBiUoOwA273w2x9dL7I0bo7uczuLUTYLDtOgZEy4RHsNIsQu0OCzWKcWRy2odri6EPKydJBSciKx9DAvbFHrVsZLmWrnm7dzwlc+p/w0NKwmHSRzBh9I2Jqe9hhJtSv1gxsvGqXMXgVt4CzdT36uCTlBtnCOfYVd+aRQi5KMnPGv3+qFRkcUhBS3cEAPo/HVVMxpLViFqLHgCdgtfS87sLUD9BhhM1lMNcCd9+ofyyEmN090AwLIn8gthMiezv093Et+aQeGTCTmX57RrBQoh+OBPJc3B1cbk/v1b7SOyPzWMg+q5o/Vf1TtRubEduvV+7TOhlzP7W5kRb41abtn4TuRjOCJKH+8vJkTVLLZ6k4GVDHWy6Q5xIoTjQk9FRmta5m8vibWewqycp23I1hA+nSxBD7Ir79OTmrHRTgSKZgN+5Zi5/zTkRj+f+NA1LsNaN+L7WXLo4N38yYhbrnWJFhZSxuopuVGSxVAibWyZuRGYNYTkk4h8vSynZUDtytYTKcQyMNvp1kIX6hWsGaGHnP9k37WlaMwCqt1EYYEKNMjlviMDGV700rCl0nsZBDbHACxJHiJEGvKZKCuarMeAbStWHLBA9XkmJHhWNzoC7DcgUF/2lNZIL56jgH3NCkK3gJ5lSk2jYmx2wFW+YWvhFNFR6ei+oLawhESt+mKt3F7/o+xL7Hj+fV+ACdk9aNq+Qg69qfheVE1jkEI5u8g6la7KWwFgHbrJtVkVBg5RCDJYKhKzvPpgC7FD+ST8ILeAoRrhmys6oD7oogUlxBtfVe803QXNU94VcoFELEE19It5Zottn3otSmqm3gzt1npLigs6xz8tLIoxnIGJ6cRqoyuSfqL3oeiYZxEHUiOrwr17x7bCv2UH5njq3NgyQv4UxuO5X9YD8elCnlAVDKn9/naLBIcJDEYqKVThQNekbUfAjnAIq9Ndl8KWENuNzvI86z+g==';const _IH='10d2f4736383ecfa6c0c4c955777f1d2cf6544ea40a0cd884f4b01eca2be4566';let _src;

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
