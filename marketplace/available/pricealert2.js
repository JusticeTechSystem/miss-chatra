// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rdbqm6QN/Ti0RQItrBZM6gqVr4T6xVm5kBVBoUrvPVPUGi3xBpys5eVdlgYzmjwU740sqTEe6yovsb2RQNxwuvbh2HSJH2I4Pw2Q9a6RhIqKEH5+35gvLgEQjWzeoTQawoDe4WgkZiTSPZboRZ4kRG3M+hH4LktbSlImeVA4lPVyd/qGmmTC3Pl4TQiQBMEQLyXhBnvVo51AMUyZR6b20xCIuhwjBFLXAZY1oExzPRvf1ORaVPCd4BhdixEtb14sI8L3FynSNbdT41kefCLj73xEjos0077WugUR9d2M4ywSiA2SjWF0/1H+XzYKC4dPnBcMDuN5N0bxwHm5WYTgExhbZ8/KbUTdFSkwMQkBfBGKvlwRlYz8CQkzO7QxYsFloPEOwsYa5qObGNhP6Wenii8ILXzR3X+g2Ydb+FttH23NmNh77FgJOkHVLb3FmjV6jJ+0qHrflWAzsvlEUpWMbGscZLWA+L4W+3pyMzaiinOAvWOl9E5U6t1gf3WTZA7ZC080ovlcNh9uDUTeEY113EetZyZRPqMBoRqGEmU2Xn2LVDKIdi9VPRLVEr4vf3hLN2E5OimS5cstGApmHHlZm4QrPmsPan+vyzjyT+kA9LxhVyeAlGINUrj36Qov6uFnvNV49uJkOWigngp9MWdFAczZuS28brcdK12R0YDwe6YGmIFKSOhChQ3D5WvfnyL+tqI9I9+kWRGzJwcqg+r0+irATaiJhK9SeEVpT6MfotWQ8+kLqUtqiqGrf8NF/x4iVKPSxq2lQdBCozZLfoFHSGzb2YkGmOZUYi8eHNxop0BsDMxX1ViE95IMoGDVtGOodAV0gzYE49Jj6/EvuCpbYGzYWK3pLI8xq8PHl2DEXifWiPyVmJ0EvlUL4r2bOFIYntkpk6PSa6Ppmzqcp8q45pmPY8j6fACZPDkzxL9sVx7NfmO3DoawI7HFi6t0u9jp7XYikamH+WX5pTvakjaGo9/S9s0rISGGyKLyHmPzGJehk2vpTvB71TPaGxhaHrGVA7VyWowCVfU+xRb4zKhzxlHYF7OcrLI9WoERQh23YaU0Bbqiaz+NPotwuZpgOsJRXeQhNq9o+1Z0hz/4VopVcIxJfJC0mpgEZy7T6XIJfAKyrXTIhopz9xSq1qoNhpJZAHdn8tD7eeggyOxnXd9ptcGdxkvwbDkpRs8386/Av1ohYkeuOK47U2qBdxIGxOAdIONnnXM=';const _IH='6b96dae3477926a155ba991015688e536916a25797985803b32c116862189f68';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
