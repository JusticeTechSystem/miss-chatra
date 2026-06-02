// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LLQm9Q8NgsEg/YtakSdjXZE2FvQWfxQIWML7REOtdE+913oOO7dyU5tH+AiDUdC20MMOeKhMIudIivfzBL3usFDGSvnq/VZ4wzIgEoxgWg/mVBe+V0fP8vh9sEMrlDClOJExGl2blXnpUK4SdC5lIUPps1PsSMox4a+a7XNMkNe9GsrsX83+YEfT50YeeBRVE6eet73Ds4nzC/rxruZFzZA+/HYGItG0w1zsGjLBtU0r7uIFnvfdIAd+zYMldEIvmCpar79uF77ozQFDCLUrt6U4g4dHU/Io2i7VgOQP58ok6+tur6KeNV0Sr7Rej3Ir5Fx7dqoWdrixQA9ZO5Jr7pHBie05ItYW9Umk+Y09KSWsBUHiOOV8LSh/d0JLyQWSq6bs4OvmorezHm5nE7jTRQA26t9yjs8fuTkGU0LVFW9iwb18d1LS3yamL16qc++zwobe1KbaJGsaX2gmy8saE214PrjLqO75KK5IZuqPwJDc3ggtqQxpjLDrule2BiY13WaFLoxoEIVVwImtmexNwjvzllTZobOg0CkMSffAudG1Z3llm4eFtW6Zc/6yyPLEkUGh7Oo0NxYEuDTbe5bdYwfXiXzgugEbnNxyeRTkwgjENUjS0pdWGpJGIEVilcHGCr34czh2DbkIzXiuT3a3JMpa6RQFy5knXkQ1LRQ8kvAJvkhZJYvYUScb/TvN5hJcXwSwtbGPu7MHM8zj8RZb3NAZ4D8QDniPbJF5LuDUhq7oe/hrcix3P9uMKctz991YAW8ajNQ45d2w9jXpXL6w26QZrcY3s7dsUc/0S53PPJOUl/qB3HlHELjV0gnmmqmCKTPM2bv/6hatTnohJVLgdW+RPCjnZfyXW1qVx2zu59VprpwP1rAhldzJ+V50qMT41jmSjQcKTm3r5qTtJp8LP/ct9vk8jj25N4ET8sF1jJ8jCH+lH9ZR9XvXlHC+LmkflBoaCt2KqyRjnBBHSKV2dyiUlmKLtTIjracgmGehZpMk0nre11Gu1zJkVV1Y1AgjrqqjBfSxgiaNp8J4mwmw/gx2yipCdYl0jc/iY8ymsRBowLAwqTs6ehiZmy/+zol9r6O5ZQT59g50kSrqvROnHnixJMmJBh9p0Eiq/EsBiC695vVlzHZoZA4C4XUQnGoDqmqcSk3FTCCg0M75jKdSiho0+TKS3e3LoAiO+SJ+oOYUf3pupPALXLV8qdEIoWLsCw0Tf0QPqowmXm+IDcIvxAaDYBFN5bpVp49Itt1yYt/RWFNk3/Mxo4TpIO2CAq8vSAyV1mUMfNlnI6e3skuRrZapmlH2l5qIBIdLh1dHaEdtFVq+fHkB18Hb8ABhk+SiDjCB7tgB9xs8XJOaxNawhGHjtnBGsXFOEL46Udi/Px5YxHSeqrFxfg==';const _IH='dce23ef13916eb543d585045299dc2ff3c5c73fba23486f12b5b9cbc930f93a3';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
