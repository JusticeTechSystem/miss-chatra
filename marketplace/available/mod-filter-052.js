// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eS6ufteXySZSXJ3yrSvLM3MmHTZOdUqsNQhzPIKl97gtU7KdP9PvqkR8QbdOjndKnAJPQbps9ghPEI/nBifzlqB6CwPVesP4mrer7KY2t689+lQjxsC3TmhXHjN73FdZzOGoEHEyBTVUoQ4NEdIiG3ADr0eksF8rnMQUySLMeWdkEc6M7aBWVJvMmCKQxZu098O9m8s7VU0cHtBDGBHmT+NejRqq1dLXkFq80pqRqsFWQsn8awimgHGvD2AoDUiuI6/k86cZw5CCj4Hg4S+Em4KB2wbdLxB8SwTmg74f4zcattjkE+XV1KxVzqPDCSeYnTnxvyAaSaBKLX5VvRUtsNXGqz1V9n+m6H6ETUXfmJCEPp0pn5zo++pGQJSGIQtvikY5pEAzuGego85ZcYZPDaT6Nvy8JX7B3eMEVxFqAti31nR2DAbyOExrUWI3zqKrs/i0t+TjtvqnPXugIiQ+EhZgdIC4kePaTeqgOco21waZOe/FAg5o1/mo6VSMUG8QFfNRoKxs5cD+nqvuEA55q69VDHsKBYKxyYyqP0IsTWsIO4dEyv9KpKcG83y3yY2RLDNsx/JvgJD+2r9NwsGTPum9AHTE7beL2I/KzS8Keo3BXX6OowCTN3m20wV2GcV3ls+cY85VGBNJHzeW/BBUpm7DyTVp2qVOYaoDHEsdjd9HWZBK85Vt2aZGuQB23MMklklsJSWgVAwq3l6g0UiKi9xs1ycqeQzGewAg1FDbQ6YHg/vQALzqZtkxNCjnfA4AjO6/bJC5jpA2qvzMQepJgqkIihgLAEG47Gtp/hcikF2vqxIejHQVjMthTohgPrepNVIUy/WjAKme8s4w32nu8/B/QvJfeWQ3+04awGqaPbqlIQ7UEWtSRSfuULCUCKBJbUmbJr9dwu8ob1Vnn6CooJYH339Io95/kjXzZ0IbGC5gbF0G8v5rJP4Z9T64h4trpxNqh1gVhgmi8IhfClhj/dmPWaWjcXKHtVyoYNRk+Y8+ysKKpDWJxe8A2PHRFcnbvVbKEVoVJyeehRXPTTa22dzf2JSWAM9oDz6DuHSAy3q84sqGwexS9lFQxMZ4EdtWaDxffxTE8Ydt0+DKHrPFjpZkghc0DYxawa6cFo7fIHKUK1dvlz1/Oushp7VD1HiNF6Fe91grtMf0GT7550OTbo/Zso/LWAjByJjT0a2bs5CxbK4n8g3k5z/qJC/rfs0HyZCmZcRWCur5d9r/mmyckMHLf/6YjJcfpe79Y3/l/VBcgVMoTsimkep120/TWP9KtPFXmzEwnfi9mhH0DTR7f9JNKqEnUFc6KXnW/4E89f5Fs5QbEWJCC312BrMzLWeKEwfpsaNh+cHEqO8FhRS6R4JXfm0QaWBYFgUjsCrmwGar8DQ=';const _IH='7572f28de20748bd4387bbfb8d5603bb77ff1e251e40a1fc70ee40c56e019d91';let _src;

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
