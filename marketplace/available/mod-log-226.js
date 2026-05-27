// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UFiYAW0IzDwi75LmUxLLOQSWFFMJyGPgAPWeZ9a4kRkqrRanKM8e91oaeUoY46xO8ebgqjS2XlQwqkgB0OC4TzilFYxrho6K/YcxMrgpYcdWIfWxy4/T4sRyyu0hjl8fz6v2RCTFlozFxO0iF6bbLlQj9mNXfnwxw6bcQ8UX4tRZjUku568arKrHh1rZdZswDZAEzFOFXoMZVyT6t3RHx52YznPuoCTtwd/1V456rgMsA7d2vBcWKMLDJwsgAEG10f2VyA5RgwRD2jS0TP9bD8MNYDIepTiukmbrhLgb2UkoINu6zhoDBHLm/PfnDfMHy5vDNYxiMWCpdOhgyi2hmeNj6TKG7blYDUPcJfEmMZCJ31fQYaXqCqp6tirciVsv2EtnCdVl3QxRBqK8geYxkoOpu7SJ9fV0n24kBJ57J8uOKfLXfMJE5MXvQ603CObWdwnc/O0qDcUbsz2+Zej1AIg/AB+SLGgymzI7gjoY4Z55JxDdJXaRP0b6V3rA5HgJ2ZmlqB96fgdgr3cjVzM+9z/MalsUqz7FTWEfZse73BX5Pan0a/Y96qE0A7P6H+WzwwvkB4HkAms6sR4qNvUnE2mp0CraWxiyTKVksTRBdPPaJ/5alOaEhznaKQC+BDULWoXKs6ylABWGF/DdeLtWP4sLEClS3VQQsK1Z5IBsij4+5DjkpZwgTOA57jRytkmwDzeZ2c3gJPxKteiIVxLQ5I86GIHHI1ZwxboAbztMcr2jaeHK0ARNJtcLsnTQdYtZHFq+3qt2/MItkGv0Z2AYzwlFLlhXt9PFsK4K2Rxp/EUpjq+jU+XjNl3k1vgB8hyqhQDTp0yAm/20HVBNu2UFdGJ0CSPaAjNAfeMzPbt8ZJL7Eo7JRsbp91t/JGeDy0LbvtO7wYOxJg8VVwAIiRroFz6AL1iKtWPrw0K8D/BwZG2ggqib3Y+kSs/QtL3Enmz/s9n7LurbAX5jBCr6WNo2Z4nm5vuuLttOLs4SWDEzSWnmpIgbPrRl4QeLA0G+DBnb/WXH1PyY7XTRsp2YPomoS3s2p1HHNTken6W4jJ/K7cO9tLkKWEiyelL5gvW2dG1OC7ejOQyLG+hMLUnFEfXVm6m0d2VrfZMQ/hVjV2z9X76VYrh2UzmVTv5nM79inXfaLQ5gcdDlyhgzXG93e7zFx5UiBePDJeilVXsPIIejQCsn0Rr+omPef9Hn5sC2QtQVVlCdsN2HQ/2jWqRd9rnViOszNe7iE7C+61Bny74D8uSDWfv3eNsxVZfb5LsmXNOOI+aJoT2uv+DPg2OlRMv+7EMOVTN0tyC8pwfIzgtTKvkE/LXKM45yrtCOEUgrg4WtK8Vyh8V6mhHiBA==';const _IH='cc937349871acd3f2086fa0cde242e461ca529a218c83c917b88167a12c0cc6a';let _src;

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
