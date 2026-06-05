// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qR54K3PSjKpXSXAecx/qfOvvLlmJSGIATbW2zJhozJ2zzj8pa1T+h0xWL4DygcefD0vi1ZQdCUnBM2ArnQFiUMmcFYpVOGASUGoBkZAdN21cgTSWeApGGErprD1+3c6dVaQ7oAy4TRk+8dQum1645UlvLpk1hDIZXeQFc/AEgG1ApBnYBDnexjEdX49ybBGPJdrXmUmdo8dpfHggAI3aYk/NZscCIO+nS/OvBj50vmbxOJbCSFX9QpiFEt8pm4chzIvswxF9YbpKo9VPzq1Vgbp8zMK/ThlyyXrfa1iyoQm+jsv7ejk76oKYXHlkE+Aefj1Axmz9JW97mot2aH0e6e/XPq1PtP/m7qC6LkthUMhCQHjip/MY9vyC3rdlsWbnbVkIAhcMJbwv2eBBRCEyGHbhKB18QxOyuH+XPXJowDAR7SC39FExlVlcgG+18jHx5I5xtpCAoa5DPI1vA5N7UlPnSpEc8N9FFmQIhj8OXYVjOh1LHnN/QXT93r4rDq+8u3VbOwjWw6TQI8V41TPNqxqvRQc+rZXYo2gA5+ERI99avxmZPqTejlUbqNYEJh86oe0tXAQmM0SqyNXKaJjoDVMM9Z7shifvgmjKtG4upa2W4Y1L0TjKTbe8TDceh20cIF7+GfuofVEwlWnp/+Kh9nGZyxcF6+OQ4WKu6qH2H3+1UK2Ojg2jeA35vSqIBcMwxhlK3q5GwzIlO4wxYhW+c2vLCAl+yZPPaTy7SEt3f//dbbfpJ3vQi54T5f04BYQtvEXtcq1E8sveV59eZaNH6WT9WPDFvUyMo+/dRiWk+liqOG1hfNCLi163tI8plg0mDFtrizQ2tXC5jObwQY5/c5Zh6IrSU2wLik4ehe1pvY7h09M8OxCjjTq6rVgd7JSBkcYPyxqJBLHPbo5MCvVgVeB7YceC4LvmLAUKlxgpCo8hjNrBs0blk701fy6i7+zE00i0yOhnZvLCXVn52jOCrl1uGxEOuffED7zCk1E5GpOP2j5m08kHGSPtFTybTYfcOPShFBukwoT+fVtbxpsqBrkcQXaLSfBaM9gzuindmvV4V1ZWDtYVBmbM6+z/rc36Y31bLIspFn/ud0QC9HRcQfWwKzBIxkL1QOn1GD2FsdI+IS1q6w/K+QUMFLfZlq1jhh/7avmGVn7rJF0nNK4j7c1gUyeBgJJZgM7bTCZxCp8LTfE06lN2HTy+QDbQMqtM6Pd+GbM2x5md1+mNM5VhwS7rFApUIbiquDgsFkoCuFGB3NtrOmJo0HdGkaK9jLwR3Oy4YuwGpvldjxjr4qfIJRrS+zQ2LxUo+MQZ1JB4RYR2dJeAABv3inM+DxvJBl26W4MHRYSZQfdARkKy7SABd4N5iMfAavYUtWvmY+YNcXNJ951S/Zgw8E8pLITEDnk1OR0wNbFMFBGOl6cJ5orZa5W3uu3zPsbNHs9QUvkPPKIzRNJ9Q3XsgQZ3qOw5l+PrWwjkXxmSTRj6UyFN53JE8zlSAadYZKR8aV69/BCXI3iIhdeKOWcvvk6OpZh6BtYltm0j14DxjL7tHw5T3U14k791yQkEnECqytrrKUHA2CpPuXyEFnAyHiP4o2H5z9/Toq0CzlFP5dWV9DFxMzHr0fqm8VGLeGVCsAgPSAzggm/HRRzCzo5gc/IIa3S1R5LsuUuyQDi2vQ==';const _IH='bb6df08933964c60eb0abad3e37813aee09dab570cbe179ad60441901aeb1684';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
