// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSlbIt5Isod2qlfl+GUNu+KDlwettC2Q+ueN3xoZIT0JCTMhWAbPN8z8wV6/WFoUWjJfHw5cTNa63+1+OZGKxA1oqWf6KLUakgbW8xGHXn/q4gKxOPWRaJhWqV8mJCk8AfVx2WE92GYrM1v37Am/eL543SJUvd39WGR2uUyeGXnqKhseXEyysCKsNI28QqlFtu/cKn5F/UwqKd70waibfeKDKnl6683N8cY0QmE9q7T+QDsLZ//5vU41yp4IvMqGEY3kP6ycwMke5pGO+x6qkn3pSSi6o7d3midFgEltqHM4HmCfsIKEucubMb3DoWinpp+zb+S52YgXn9JocCxmWbyWw/vd8hasE+2BsbLAvs5BUH8IixqszVsi2Dy21MeDYcJSOyA5l9EPRwTE7GR+jpq/1DqTUJfwCW1TwDT9Q0lawyfz/DXCXKCeBq3+yYw74rVLweG/xmaof2hWR2Nsoa7jK6vvrcWVFw4Secu2ADRospGAa261GDApjTVZ+NHIsmyUiClL6D5LYj/qsUnKTswg33TFg7xZLp033oXWuJCXSrsvxHw6/CtNWtb4sOlVO0uMg6gwoR6UK33YEvDUXnJaM2WaO9LEY+qzCfQJ46MG0ky52LIzNiLNoxvH7uDKbfcYpwl2KlCei/ddjr71983KYRGGNa9F6G4UTyHHm1eMYITi86QJB3r7dZRUblkxpYivGOPko3t+EUYhvf7M7OcM7CbQqPLitvcYdAk1s+hmvx8hQEJfWcoyy3xbPRTa8b49yzkfnnQUv/MmiVMqqV10V7geNLyHwJ2Ue46QhcrJAtKkWq35Gy22I/avDk/cQjSNEMj5VyN/Nwt6UtV4Bu/2Nh+biheOCzzkRN7TQjQ7S+JOIJ7DzhzqbP00r2mWVCuOxK+hUmYx1xxaKXFI6j/OXp0pliIV88ff9xf2phA/dOzeUF0GA5VH+4ZatTh3MavY/3nsLlzdpdqGmGkgnXqULkRagZvM72ShX5JebsfV2DfHgZicyIq7dc=';const _IH='a257e1b7cc0b333c636905b9b5d3bebc5828ac9df23b4824a5696adfaa7b9814';let _src;

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
