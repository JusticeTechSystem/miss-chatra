// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQlVHf1eDdjUTeT8O2ZSfs/GvKHA4Z7H8UePp2ZaMyaTdN85Mm5Jua5+r/GMxUb8N49O2NuFcKowsiCDyolKBltFrhNeaaUHqav9odnUu6n08ZzI1cteM9qu9K1HsllGoqhPnzZwKyzyj8PPej3nquimt8w/VQM4ZiVHLMDYiEZ/HDcMZ9zmowYdKoasrX1UvFrv0Ahf6Lc0oGJvOQ8+Vjxb15BG5hEn7vvJm0FvlXnC1Yu9BKV6wuQ+9YAof1dKnKZApZFCZPGWoF7GnFHFFNTQswzueAqIOltB2W/0zhmzByeHNSX4TeE+k0WWOrkm6diRWTlsiUOGc80OpMZGPefnTIn55g8+/ZgTzoQzcgtkcyhEq2RW6SLPJfveykXKuZEF55eKEtpbnB+ZmKSLh5XcW8rii6ojt2xpEJH7V3OvSrN0SQyPU+7emeZ1qN8srFEkVhyN8xNYDnOo9UAzlBaIwpAlgK0/wRKhgKoPhU05GQFDLA8YNnAvu0z/qvMOCLUK9ksrkodjqT/uRgYiCM2wrHDx6k1QmzcJOlcGiT2TKtkHMhmlxPAQonmy1BM7xi8q9Vt5sOcZjFWBIRttibV/3zGQRtXnEm0mcfqrbrBE/4lSSjRBhOd9kkPYvz+ofDar5mIOnSsD0juEGyiB5VPOoUirHdsnxwZnV6N+NaQ4RK1SILhj/8Xp40jAPl96qwWUzCkG1ZZ5XpxtHSoF0yUm0jtxdqZkh6JoD6SuKXtdnyxqdP2aVtpNx8ugj8D3xSlR5gcZlWn8nY+OPvco3S0Bz8g35iUKSLM0f1ALyZ4LhkLnKC/0IYMKGVh+NFCgjj8qq8+Wkxrk08e/af6HlqatuPYpkm4iTv+Qmmjf2RdJLOqL0GFdhfGWreo3woUOR9jr3NscPacd5C/xtbTYgefuC4zeBLQrQ10RtC7y8KDp228D1MXaakVgTc99al/jr5kVn1iNBae10iLqf844/NuuAkohKqo+dl5zSVllK6E2TuURri6k7yM6tU7ZCzduNwp39r3fKCq6o9RmWb8lktVZmkNTpq9y6evG/nskQsU2/ME66dMaTxMpn8BoW66FSdfMRJZPXvz6PotX/Y5z0rWERVR2lcMeUcwRqS2mgc100Bm1MOpehZOReQjJWbY/hQFvPe5ahRqJGlrD6JmFoc0l/SbY+2+wMTr8QZoljZb5xBsGY0ZDVzzTyh8Twm1vjcQ/ZKFydqHIuORlHheperJJCmT9oKboHfM5hdhKYevqlPHeqx7BYKax+Yz55CK823ffkLKKpSJQoSzgKp0Y1CsQlnDXIx6sCBXxWlCKkdwVi/Fuq7iLRM86IKzSU0pRu6WHlD0NI7DlduoZbdSMeYtkg==';const _IH='5a93c200642dc7fffd338fb340d32670b2e5ff1d751269cfbfb32bbd0495d54e';let _src;

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
