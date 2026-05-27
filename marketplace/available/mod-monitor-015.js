// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9gcaYj01isDN9slFJ0YjwhI6D0nmfpmc+lj4UeN6Do9LHqftboFR+xrdRIMNbC6K0YybWrlAOcRS1g2J1gXb4qfBX1k9lF7tZ3kwRiyjV6WxkAAcOFOpW7fx3nXElAqZJHAOjaQy8YVI3Ogf0LnqE5fr+mr/kJsyQOSSyOX+OSUQLSj6qal+MWYEkfutWf3z1C6e0Z4iXXItJegAtPQMcbPsADvH8WYi69e8CHMfggWfPslm6ZQY4EeAgN8TWKzGWjhPQuhymEVakdd+RCCIM2BqG3upH9FG1jyaPbWflBNtpbUDN2ECrQ+u2MtJTAfQMYMwX912JoqqHCfoI0JxgQbBga77RL1TtDUlpNm6ULjTVpOXg44M1iBw3J7MhpNS02ksMojiyIGm9eKsKlK3MGNi/1DHk1A67kI0WwL+Fi9xlswEwQzSRmLigcVYk15lmKiy90ArC0hwE7Ati50+A6tmcSLvr7dNUJ7LTDYhvyJLU3TqMb+PN1J8dCcGbIgKaDEoM4kLB7zS2cdOn6MjtrB6JZ22dB6bzXepFMBaubEJwWHED8L4DaC7R1Sc+c6Y2CHkngcDqCoQmhNLWtj57FmidPTCDPeVLxkRnj2+VGWqbqZmIOgfMBWkkdUepAlmjTSKREF5wffdAQx47PMYZ7n7fGUixiyx3+SLQt8MWzyUugIuPqjZjM0rvlTkOay/qMte/9hXcpmld4iM8K6x6KNRfiTJRryZNw7IGz0KpryXaWKaywMemGpVqlUN68pLOfxVdj0d7dbZkwSnG9xDEf5/LMtr9M3nt8AcPtkuL0YFZzLITMH2cxa/hlULUYM08FYFgvXsRHmQ1n4MZD5/3BNIDKOsj5CHT5vphJpsOObqFaR/jJ8RWQQi8NTVtXmLTGxdKprMe7ykVN0eeqsU3m1bESm+yFOcj+9HLd4o0iDPC0THmgwkeQQKxvDH55csekgkFBM/Fk/Le7BB4P7/Fy2Djlcpzu+K1qscUMgU/gRsPjlE434zYY1pqmMYqKLuHPXijg8ELlls/X5D90GqHzVp5qTWTBFh5UN1h83dx+0WUrFELvmWtp5qng26i2QMHx8aG7YffxaOwC5VN4EqnWqlpUEAH5paTMyQl1B0DXURU6HfRvunD9Uk/f61McRHe3YCak55ryTbY9vxUQ+Eh+4/sa/j/Dz0JXChrQ5EaWyw0uqtii+ouMkdjgLMT4YiHQeCokoSv9afRQA+MY7Dol+4q10gV3OVR+6NM9rjn7tDeugVaHe6Chu3hC7Egi2RT36SntUJRZXr/0LPnszQMJzg2KYf9KY8ZWjTJcQreyJLZH9ht8WugUvdMc5BbX1jGhpSEEfqCgw8yxYzSxo2PSrDKItAu1p2bdXnD3DFnYcPSXUwOVszQxGHkGUO';const _IH='08778dd9fa2390ed588f6a4e126494c5759d4567d51c34ce558adce7b9d06d63';let _src;

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
