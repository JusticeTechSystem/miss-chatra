// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+iwDmkF4qepJEzsAAeCPTkESVyKRjiGPq3VDeO2UWZovSN8Z4MlY2HcKJIYvp6MkaASk94dhW4ilrHVpDd3uWLXtD/1F9hd1JgIVFlS+TPx2qMXzKXLwq9cBXIzDDat9WrpzlvxCkwn8ammDVdFM+ynyPtCk6Cy4IzmLg7atjWIlwR8VKeZ4s3asE5wrphg/Lu2krccpQsxEoHC5sjuf65cornl/si0bTBrdUF2rDDqZ+Up6+x5CeP5rdpuEyvoD9pPGWyTV+CUJktt1LxJplleWGzypk+Nx6WW+YbQIj9kqmwO/o5jNYW3UeHCPiLVrcmEyaYKACopyUoEzpKnBravtuq8orbpE/DzfDWK1RtZUVJoIEj5X3aHrSZX9yAaoBLM34k9KnP/YclkhUA5bVRuWe9udW+XCcTPmT4Q2FNV8mnXhWElNoJoxlXkUVNjmrvjf7X/JRHjbapAX0WuX2Zz0FbQNMN2ago1d0tVDLqUhnGkrmp35mYljOxOwuYasqHsz0q05dORWNm+Q1cC0fQxdVc7DrAYlwkkJDOAQVukBNW1phrGeXBa0No94KyY5ZLpPrpBL4eBYX+LmiDDbEHtz9WAdWAVDsdgaWmgw3cszfefPBwsM6PVldjs2MOJUT+CN040A0D/+uf27BMJDWyXMvojRbpOPox/vQvVY6P8BbfAP/nYzZoL1HCKHaZO084P3E5dfa3WnKy0XJACPhtm04atIMJ5QOQHwhOImMPEokEQVBqSAJeiv7c1hYK4+bGNN2e7hFAaOk797SgB1pouLVmP5wYcs2JPjoOkmWcpS/8Obv9IMuO+EriPN4hTVtBUd0cqgJt3TvM0pvdaEUvojs0OoL99Zg9UwmgzIncS/03R6Bg2X6X7LiIZvt635d4qBSno2WZzP/dtpGPGqs3+2yl95AQL9jcoxFWBje3+hkuCILnlKKOiKpkGkfCD7DhFUdg1sL1/STDpFNn/i1iwo4fdu6jKolS9PpRYFY2N8afy76y4gKWtd0n2sbmWA1Qk8dC4TVMTVsYt6rbY=';const _IH='1d022a99b4480075e67a7c86f64af188bb7f9c919fc16938fef1035e4fec2168';let _src;

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
