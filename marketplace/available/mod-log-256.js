// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aaMOTpW5MMhn/RWLjnijfJziKmMnW2crmeyYsDdh/4BxS+RAVWKgqoIS2KBIdh0CxCirD3mmtAViEHgbQthCw3KSQqIzf2uQF+hE2zzFO0o9HYidAScl0b+1R6HOCil99vh2VKxkBq4ZDNku/1dwGkEJ+xWSVPgtG0yPY3eeuPsOyxiMMct+RtLMRl2pJujfQJvtHTQ258VxVs/KnI3k664ljAw10gpPF+ZRK94HS7j5GfxHY3BFWHLrFcPgukK3+2HtxajGbl/C2LmbD95jBW7AQzt/dx9ZpuB3wQdGsgPWigietdHB18SbXnADRCUVHUqeX4tUYldRdETkYOZz25w/RO3tE1t280F/8fwL3ET0z0LafpKNCREMG6uC1tNjAg2TP2B0dtNxCkLMdER6CWYIAhLi6JWDoErPQEojbGxW8kGcmq0qQLlaigKMtunjA70QkU3Dienu2yn2K+V9knoBrcV3qIMT56rVDmeWzVnYVSC6y9/JxOpzDnN/1hJZg8ALG+izAP4bXgcbWzj7MYiVQ4mW6E4ZSJZRTjhupF3PC13TE3Msr0gQaTvqtjIcOcZxLdHQAD0mKx8v4Jdtp/pE/lx6XwgqzavMF5jRExuBEyNWfzMK+oLieELdEObkqTHEstLb9CiBUQCV3M/02QX0xBYomYKt7MSy0fhRLOvWXOu7Sua170l0DaYgtZVEIYrFryMhajj7KSYtQZ9vyRAWLYPqUylgW7eLAywkMBUwCb5QAETDxvKC1tj373pQLo8lGxTBRglpfB+Pqga74oUvbAH3TZrkPWdQHyyA/l1d7rPHABP9qFn2Dknc7KYWC30sYC7ucZCfZPFt+Kic3NUipnIqfmUSG3+11citiqX+uITgS5DCiVZEcBVS0WPNiW1vTN7WNLKTn90+qZloaJKYgLp9KC2sPAc4aB8z8D1cF8yO6iVw/mdj26+Tp6WF1szDeedlXvCfmPI2vhIpvVt1+6KOtIt/KHo42ZTWuwDDg5v+JFLFls4C4wPyRmlqocS8yfa/tGPjNzEBkzKAvxtVOTH5prs+azx2ZOn/UwBxX6oTqfhADGaxM8ImAi/P0v5H3XwLrM5C6AkXKyb9Ep+RbcuANUfoCLVt4fh8lj6kEz+kAVNxGnGov4ukKkPnvYSyFEEiHL1MSJaFIjiJzPFWKD0ZxBugSEExcLgW+rrZaHBi/xL83zwgmrxZpc8eP3WcFe39Pcmsc4pqQXrIY30D3wI0Vt0ItaV1uu1z4z4m9Gsmb1kdJpNit5pnH02bG7joDLoskN3jdDLVYKHORtlMHrihQ8gn/uwtlFYmomv6I3Lm1gj1jz50H9wpgUUbotWQFX7GaltJ2g==';const _IH='530f3f70c496b833b925bb756b8f526fcb4d3ad439bc9c89db9cb9846d123f92';let _src;

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
