// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwKqZGGlTWEzE2Y4NeavOwSd9sZjWie1j2180oG+vd+UbB3zYKmZIDF2+ppXNOR/wieRo8cH6FnMff/cA4heiSk2yNStcTZCMPHipPwXtWp6h8w++Cu3bH/JxktSmdfIGrBROGmQpiabjqlcxbp6EhuM21WNE0j0bM9oU+JdTaZFChNXGqOum54f3Iu9gaELrwBA7xhDYXSI2HsLKc2MzCkupmDg3VOdZPX/bkWjdf3RmCI5F9IFn49jY/XYARpbm10jQw/YrfGc8DWg2ykXhXIjmGhxBUxA8XcGzzjsCx64O6flwiP8qC+f8vOI3gxr0DfQ1s1w7pnurDAmthePbDwurfC5snaH5NxuRtpmHr9Qtd2g0QFwGAkRmWes//axYUZTlcIzkST7uCxhnxUr/PC+CwTl5el1d8je1356nAs460zSxFNMVdduAAo+HEmjizDD5Cpal4MK/hiHDXsaLcyebZF4QrPuBK7rtZgezIKdovFScjjxqJ1iZrHRJYKBeg0E4d09v9ZUEIRadmDXJrMVqIMfzp7XX65KOOdofv7lUW/kEM/TmPAXLUBmhBG06M4M3YQ2C8ig2nCm3ahyuGZU8n2rmjSK6h/U6or0SvC4v84MVZUIiEla9WlfCymoRpeTTpYSLsZd1ZBFVtw7m9ThOfDCa87CgwQHFy675Ff6ck0+xf4fiNTklkgrndt8R/wYOSZv+ChG5XIR2DVU1202hk9GeoeHsF+yjEGB0Q0vVN4U8DlxX6bRAjQbXRRjsJ3BxTAdMY3kFzB2lWM6IW0U6y+V3fZXqxlHVSqtP/tnRuCp6xGxxvbxYlEED+SRI6QJAAiMxtTbJqlgI8PMLtBvRmAN/XaG3QPlbodP4yASyTbNYgmLBDHydyjwE4tTOTmt5svQ+yOnw4QV3josZd/Jo7Hxt1KzuYVYzL7WzHJiVAinnTCt/8afTv2Cym/QWTl7caJlJrPB+vbaDc2nmR1PBHYNuFONIOzbaHPZXVnAxy1aGnVYGnCj3KwNJ/O3qKIwQXgxRMpMGj33XlCuIl2QZXSg3QhB+YnxtH45MjezUnlRC0waMMoasex4rZDtzzW1kSReSdE2jJL2s+m0ysyTOHWHhH0X/+/TjqtgYeym0uah6Iwpfieznrhcd0bkKItHunnypD+l9Y9dDpTCLG1NpvfAXl1H+2r+pn3pCTJ50JV8NIawhIjPDSDdpPyVQzee24IcP1k3AiZtetiyPH3ayUVGHauj6egPG5xvKvLSjemrEFkPT6sqD6iH0n9ajw0K14l1ViCYfqsZ7NroG0fLKqBDLIoasEjqmgSR4dJdaqFInHGNawcmTjVFdWxqThUQASSNgHksK6AEA9a/pPRq8wP+/GFqMPzePw7mUIkvDdzCxGLthcpWl/n/Bg==';const _IH='0bc9391163203d9dd89fea600a3849bea637293337d53a6e94133ee35fe52c3f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
