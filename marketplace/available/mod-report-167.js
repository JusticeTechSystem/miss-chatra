// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRbvQ+M4tmGRaXiiNEI67CgWOzJ4bpDMIoXoSvbdwDSeqEqD1yGnq3JA0YeyZqaMbUD4ksf1YMcbMp/RBsMcPjvv93rJZAzVXfz/rezw/didWrKChJ7+4nbwkBw2chlBul2uBLR7iPfOoFjDoHan4fz8PEVtSJUG5zVJTCBzFmVPDTUMc1VMe9s2GZpRd/YPwKx+o/ZnoOZz7nshChIL6YToMMiawp6vUNICK+9qHL5YXFSvE3EWV4Fr7J1dOEqKzhCaocZ95xWMWNKEYZJ7CgkXfMDB9qjV2Jtp651ZcbC7rIxItCA/FqD9QPP7klrVhIv332Sc+hND7xe5Yhaumnf8yESt5JwsGz/vkRg+tvBCon9I/msFi1NFub9x2AKDYddwVsQhVZsy36/jCc7/7eMKiZx4Miy3LWqZkVwRCEn55sY5evUlj36/D88za7+08gtpcxg8PoM63HkGcnfKz5JabiYx6ZU+0yc2n6Kd1HdSH8zOmOAYTewfXtHknr4PmjzTUmsBbLQsYNFTHQGe/xl2OglgqmEW5sjcIe3WqAvi+UzqBkvsokNOkiy1foob6o25itOO5brFAjzR/5rkDzD4DH8/4jHpIiOkOu12hrOltyFOF+zft5UxFnLqzj/cRO/a+i4IIHp5u6VUdA0kHLdvLKHlxd+cOitR5hvaOg0l3aPPocMHeG5NfGQ/nvd8I9BNLqnB+j5AQ136/DOhVgp9URN8DWooZQSGiLkrndGN7TXeWj1DmrPwzNUzwtANVYVHepxDg6ufe6kJIQd/077p/xtapnQPSptZsaXmTxS5NPHXX/gMiIHKQV8dOhgdFvNWSKObVHlSx61e6J7SiNojcXEZKoQk4q2Q8ftYzZ1J/rrH3nWAWbwTVuOy4fC/pGkhCcFzB58Uqd7E2lIcZrvfcGVl+d1eRGSNreGqus60ylodoq9z4YPjjsTVXcIsG9BbejCDkzx9zhI8SQkiMOfOOAB/jtuKxgeTIF94Nx9RNfG/MdzrsAIqbE/zI7z8HPyKBjT+1/NW35H+9Aj48FXo/5NC9M+I6VGVM/HS4e+IWsvjSXYFSJ/9EXoVJZ3zPPL4Ygq4QPjPLxc+5Nr3FjWk5Bbg/9yF9oJ6PLkzi1GGu0MCNm+ze9Qnft8ZkfXD/ZpgZlzA1TOAMiRhqQ9c0CMX2oYVYyP8ruXmOi1LkQxU449UDl5hSpxDluZhzQ/Pua/JbEP5nC2jSobH67j3LWCX/ySe5inTnAwwjphMBwJvlcx3XeWuaU2pT8vtuOiUsOLRnbUCFnpp8Ih70gkCKPWrSMYITy1OrYNQOEwwDEAxAGlVepX6x7+jzbvco7JoGb/y/4PKXDx/wQLu9dhyIZDSOo/nPKIe07VeGoTxCCWkwDpn1Edac5';const _IH='f0f4eb5abf9bb09223121d5394e645b3fd68c7f36b9cda13f014ef04419e4f93';let _src;

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
