// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IgOT8bTo6u7NssnDE9RfPbubxxPDPZfYnGCPJ78+xhx42hhkpoAyhMxJK/LNaVh+TQZZK6hhnZoc6J4/uNkOjb8agxhh8PQep8w3SLujAjtF7TrHkEVYDZEp0HM6/ksn8kERWi2srQMnH1jF5AU48UQKsgrx7UV1o29RpyE3JXk3lUNpk+hWLIuGUuC/boaCo9dGImGM1QM8qi61rPFHeCk907f/iOxy9jahsD8CCLfKCOKa0NTvwYxmFkUWffEG93FRQb4+/TfyiieMV9zdSPdzr/i3TdztQ75n4kYCwFWQJJc2o+7QIQIqary25tu++Zvr+p9TXw4zgfJQ3J6gTpoIZ0vPhQeO0sVOYnqbgkeGIIga0iKAynOR3BVcnANezHY6F0nAjyMz3yDRZN4JKbDF+16MQL+tyasqYHMHHGuWwCvKWjG4E0UZhk+OkWuMthAiOyFL3KKqHEo8VL7x4fqfMTBE0Q36gu4lfUkuaNDxvDdThnTXzcnL5BckLiljq2jmXgsiArrG5UphAutBUFicU8nl7vpCVOk8YZjNHAvO9b+7c5zcr4Ji1U/uPqiLJhrrwwBh2nMJ0ULPseInzK4HdlznwuVhM7n+6TwO659heTVmCOiPSC4k4+h2SQehkHcwpOgfYFgoBIDMnvCMpZ8CSYNQyWKErMby6FdgSXy1DQurRjkEvUoHA4e19M8QCMS/EmnQyN9ePo69cplFXxOdMoaM5qcwmeReMbOysOxq7g9p7e7cHGA2oQFzdowh0grNvDQrwZi8HtMS7lS8aydwogcwQ8oiNxRJ0EPaAFPtOdrGh/OoHkE7lVSc9VjGfvPR0GNPiwyieVF4HIOgCdCDWcHgEGMPfEuo1hpGCYgTXUI/Wag9QLVKty76UK1y5x5OsDM+3gVsSxcrOxkIRsDETuxvdY97G4P0UqrAavQUJ9clreYk3fd414WfufGDOoQdIEE/e51XgojY8fxkSMGjcwsrIi+LumGVBcH5kwkJ13ZJNNErP2JdOnn7/eHS20+d0FguFOfLzfCETchnwjvw+hKuZDw9Omu1pdPW8E9LzxDuNfhleCqFOhw60GwjNJqMPt/JYH7ecprblFT5pjGjsrAIeoM7fIlfaKEiEUlLQF5sZe12ZvhIQUXjcP6DTchqsEyjUFiNEnRm4ov0nJMSoFlfpNTCm1GUvEhWc8j+6Zclg5vlBrcklZfvHbxRptmZ';const _IH='a02e0abb0054cc06e508a74612d9e904766fecff1a2d9800dc5c1c98764b6d39';let _src;

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
