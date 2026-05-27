// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t81z+JpfZnmSG5puBIbfQ/ghcVZ/5KGdJXTXDSxT+h35tAh8f3FJk6/kKW9eRuFNpj/xHXnWqrXzpmIr+sdjvWcwqtNXIK3wlxX/chBloPSkVF1jUdP8LofQx51DW3XBzC0FF5sJhV+lV3JDHVjzpDF9ogO2k8apQ6ZbzA4+oYtwu1dTV1r9mAk+bJapnJrPZj/h8CLumb2tKc/bhgbmfTAeSFDWFcfOruELFG/xoIQ+6k9o2t47PW+WYB2S6+5QbHZwPPAZnh4VqGu9ygj+aGcoznNTseVOpKxIbq7LHZT6lGKr7c+5rIJGGGJ9g0mjVWGZ7ncXFEfhSyjvAQvRvu6syDXmwV1uf4k6oseuVTOB0A+q8+5BETxUd5zlWMwbJ8wa0VRQpf98/FtbiPUcUf9jzgA08KZHWNurrZZwchB5oRx6Eq26W2yE06wx/xvFCbqtk71vtslQrwIlIjaRfMt31Xj7nSV3L2TjYS/OijarrKv6OVTAzOkkVbL2baGlNoghpMLVwi3vPwYxzGZq/aMhtisIS4HHDZ373RYRbt392T7izKjA6ERC0jEK+KT9Wc6HnNgozhSWjlJlbwthPyQz9MnV4pSWH9DFOLUaTsw2drQ435NrJhEWMJGHZD7ZiFPlZAFhN31Kp85GSxxt4dnVBkPZTBHfeagYPUE7qfl44ysnzC5AGOOfX5fm754AIQmY4HHJddIQ3TD0FoUdb67EB3/20leyGxuSuaQmHAJ4HB2+0RhNku8Djz+0PjdlPtjjVPBaA2V89Q2NElo7rCxlFAL7CBvItPhyhud3/mpyn8ma9SeCEMngPALDgNWi2TObEyn4Nj08xHZ1N3wAGGCuiGmHKxGo6J4dZk7LXzBRZjUK8Jf/SM15fo3vWDoVKc2WHt0xR9wGxg4iLdTeL6qWRyAh73Z6vVdcremZQ++oSQdxZ6hHLRn6jakSuA7AjJTR5hMYCDaAnGzHEBHSXP8WTRGTz73X3sOUe1jo9lxz1K+h2iZisYzY9flYUApwxcHMVRsEksaTrMf152hE6QsHw/R3kA6qOgJVKv66NTvjGElJ09eJxtiEU2WfC0/GzspNgAGH/bl1Jro=';const _IH='cd91b0a320aa4d436094d0aaafdf66a0ee7014613f2d0c78e26a0069497484f1';let _src;

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
