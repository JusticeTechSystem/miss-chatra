// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vF6ydu9GYQiASKjbX8HeWH58JdWfE2HxsypVBEGMXKvLY1TkFUQDEkpP6hsDir9JsB2a/QRd+DYVkZcT3RU1K1eHuCeuILYfDrtDOElCV4oHrXq47ZAquRbGG5rBz1pnTMP0OrIDYvEGTjHCL3lSH0981eQm99BXUl82LGX0/o94nw7YasnEqrXag6EEa8Kc+LeiCZkHv6R3TqPee7X5Go08E2J0IiXF44haLPtKuY4rMWYIYLii9T/fMrbKFTo6KQbPoqbGZQf02etO31tG/G02lzm2RN6icCGkoyDiHCLTVa6hjvocgpx7Ok+kzoRMVtuQyUYMV+OuvDq/fFKEgMJnGI/eQcbzoJbGFxf4R6MOW7FvMNoiLFqW4R9jMh9MRT2qd2+rFti1POr9weYuFfAi+RUFJ6w6ngBM9uIFlcb4FrZ4MPj4OKMbui9QXyBAjciaEQuutQ2RCjb3SpEjNS6PmK7te+27sluVwfqvnDzi+mm5hx6ri9ZLKBhYq49aYSf/Gp9tWvps13pb4emdRQ+afYxZYYUqBKPpcJs7Iifq3WGYNwtxK8YIBg0SB30IdKTxPxg+M4roIc6qb/Y0wfqjjXgV68KXZpW4a+1ECVdPdVUyGFN9XV2qTuKWoJk44jeg9KiuDSkd8nC24a60mPpStxlGhmbz2J8ooC/guOPy3sh/S+obHoU+aww/Q9KbkNkgu/Zz+/Ji5JqrJK3tAv6ng32NhyLkgG0Td/qxhnaml5GtanFGikvr7jOa4EL7lH8ojorfxnbS6wgoAPTKy1ZuedcXAvyc0yHjJGAZGkjTVC58YX+JXQLZMCY1QrEt4CJFPeklRgtX4NaQXUxsh68ErM6HpbZzIKIlqbguvLgtSdv2pxpwDLOWF1TbgPn88NnGtl/PTol3LRm4oUPI3Vqxp2NvVEIr/OdWk2muYerJ7J8JeTAMX2mFKoJKxqZH1f5SaxOFZ+32w0KMtZ5Pr5BRtmOA8KTJwV7PF8Ii8thy2knysOm3DH8KOiNtcVq+ixCyxfkPrYEid40Bh7PVYs747vOZtCEQKDZct6zg7tvwlTF0A3seiFznYbc4hXJC8phdFsl3op3WoL3zqIFvYkIHLzf9XH8kENwdDCA7u1vzEv7KaxN/9tqbSFH3wt4umbyoHfBfkOxcnHR+sreG6LOVU7PXreVnPCw/H6DOhhuu0JgOrH4M326e0GhlGB2vZXyVCCrPtnF6FQRE';const _IH='9c22083af2e3872be899c430c8cca5d09c0fb8e3ac69fdb0924bfb8257f4030d';let _src;

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
