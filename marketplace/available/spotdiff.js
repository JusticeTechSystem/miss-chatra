// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRXRjj9YC4Q9Xre/2HC9Cstq3fUwtlUk8A0UiGO65TZ+88IyJ5UQ/OY9WAgxYd227IcuCS8Vpr88dT7oKDMxHBfttTleiOa7Zb0c0AUkY5VU39YhRrdALnLU1X2USEUrw4IcpQw4Xpo7PbJppx5gQesr9Q3JtusnvdOiSsadvhuxQmn+ta9zfAlrnu8bIurJr7HmK++dd+u115eR2MuqYW9GodG0pU0YrojG/XdiQ1uv767HkrhZvB5FINHWB7r2kbn183Mnc0eAweLJbeRs63ElUzIuWAA9YYs8xfZ5o4ArHVhXakMXlhiUx2cSK11SklaHQjrcod6vxbN9ME69Thel7rWXkljrI+P9cJBxPGjxuhahsDmQ9lLmWKSB3Ne7mc/evTIZG6c+RaJqs2TuWefeZpst0ijBZzrlw1sajArxeMBrdJ/1wMhfj/d9TCFdXy5XsLtZvmaGoGwrXYyI9m8SoVjvewBvnXia4NgQiQ4CKc/lEFGzRV/nfsbgn8lXQRXjE0OBb6sI/NAdTwYe/ImEmbHA+tp45heF7xuWr6EoJK+iVX7V2iPnNJPRtN/zLFa2sF1+N2DEFC/gdO08KGkQa0ZrzfmOcJdjsq0IjR1BX/Q6IGKHfu8rRN823Tyyly24j1L9gtyBLPOseoX2Z0ABTPer03hikri1V1ezRJ6cPAZVeWOUudFUNCI6/tXJ6DjbmtvAnVbDIv/ctGRHrfiDj1OhBfwtErRsfT2MwqE3SB+lR245a43WjtLXpRFZuwtJG9jMebd/kvjjMTc8VLZzuxTWDmIMmeV+gQ9WjZgH+Jcg6mGpGyp4rSBeWiLBKud7hq5bJl0e//5HIWDPciK/q5DKOBaD40gKGrSCjxcN7/EMOFUQ1XHLCJrVfl9BBrMjppiuc0DRwR8gVhjvUPWGvcNwZUPkjbaiZgZYVwmIyezCPvhmv2VCtE3GMdWMxrFEfpGQz06NzOVBYnK145jtDnZlk1E750k3Be0sDQa8NXduL0woCTxeAvpmSjZeaiIwmTetHJmELI1Y7Aufy7EwnH6xaXpix2zwE18n1h3ZmmSJA0mOvltg5keKoXrVo0/V90E0HmGUHV7JoA+XBkiQaA/87XgMWC3OA9xM5lR66WTfZHdJ/GQp5Odtuineg4n5LoJzea5uAjtqZdNnS4Dtb3JVky0ZXYpj8dV1aZ40i+fIY55doXkiGZqTOfV+cUX7GD2w==';const _IH='b11be782446e4b7ab74c84bc221c141d78c49dec0b7e098363b72f2c97eb3d31';let _src;

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
