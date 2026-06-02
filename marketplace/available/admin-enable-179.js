// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lpWaxAoAsX95tWgQ1LTJ/j6Vc/czPQI4g9NH0BA/casSx3ZZ1btpWLoVa8GnaOIjZFdX7+iXECyrhCwu77erfihK5o0wVaj2uXeeyVzL+umyakytDoobscc7i1sEOPgfYjdeE6symtL3weko0SEGlM8wSHjR9XVa9XxkD/LZEUhIMzMTLkrhHGNeh9+sC2D72zhcPewZpaNsBJ5+y5XK0i1DqGUTTnRXAg++2N074Pk8n2SXGH04/Rmpm4OYtVDkVH9vrO+tuyY0weSfTyTJ9pVgkdgqTi253s+EHtVAgX3BD3VkstYoO0sGh67tGlotsCS6Q6jKN/gF9vCAadyPJTLuLxkiZ8L/8YbWpxDD8fHqTQUHN6qTQCuhgkGGPzLIcmTVw/JBWbq8F58PtfbZni9I50orHCymNv0YUDK76hpk+4byZM/KIfU00W/O6PW9+/QvzPk0Zs6IrUGEP1LHjXqFDbSsTU8T72QR8X+37H0WY1r0pKAY5Nng5/Rmj5h/HNUT2mfuHCY1iCbphdUll8Gajhh8EVY70nMYV8amtHhNgn2grSnTaQMTfmgYoUIR8AoenUO4kvBOh2TBcIh4pqS3SqzcjuNjTHxD5brbj7kXu6FWg9PlJvso4WeOph8K3mtpYN+NxAeATeOCPbljWEwfVybl4GT8SfH8kidb/PMq4HWtjUCpougUDgpKb0TFAr6TgqIlWWQse2FLo3ZzxfVxb3o0NxjeItav8g4e+dNZzVF7NcglTzsr+0ng+OKylBlcMp8VYJ8UoOHJta0vJGYpPzZwNwr3PTkeHzX+3373prBqCoOrbNm2bBD7eX2FojKEHhwWVAOyDUTjxO5meat36dfZs/Fj3AKxbkbDDa57ayzO2bV2jKze/mb37DE9LaIVP+3qF+x9NRLulnSKJajo9PAZKUTSy4FmYEQgLIg2tyWTj6KXWzo59cKuwVj0wkpcveezWFgeMLoUeoltFfzw3BQR32LfxBsj3sL00qGJ01r7ap5TPvvTdAdy4sKFqw==';const _IH='921348d753fb6ddef6241a7b0bfbedf92fc552504c8c1913bb1da7a1e8fda7e7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
