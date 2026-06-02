// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pmB9qdJW2ohU0agNlcLYJ0q0pdkWD4jxR30tAE1FXf1NIgc2D3VyCU0DQCrOI1psE2+XCbB5QDoXEdUfuqJJyZSyE+O/53LYO4VYLJ3q/p46qjTmsaNRi+rkSAno/4ND9vsgvUAm3RlzlGXNLP8hnF2w8/yd3/v9bx6izNEPwXbA4VoLyzgnw087z77yk41y2J8+EOwER0u5m2mhPOzzL9wbX3+5/qmzQ7RqvqfUka7/GIfkZX+ZZJ3575BpR0rfHoH4eSzz44KO2gcX43j7NkHHjZmQqfvzioIh66aM3HqctXzmdoRL3MQRbC1I1EazHhV7nFSlkg7CM2RHBuZ4ez5fR5d7HKKJbDKA+yyt/hxaWeBzkWUpL6eUQJk+8nTTr9Mlw3VrficzoyYy7M68/A1dKKySIMm11ZR9P29iiQIlaK6g7MOWYPn3m1M0zR7gVPQkKcMGamA9b6T5GNmOvbXHlxa7yVINGjfZIXqg8SVJZeRGGFZnJwF+XEv+sSPRqaf/iODHJgBcnQbPU+qwKrybJ+hwfy6lm5yC/TbiRkI695iW2L5elxb/E7k0rL2ozWlXLcqoZd0Ern8YBuPld4Jk6c7+dYrhLM0wfgTz9I/BtTaO09dFoWS5RqY+yFW0WgCGG4l3wwG9LabgtXW/3D+SWBBop/M7yMsK5qnZQfvxC9dr8m3cnpsWw5ElcBO9cv3Yxcgpjk9FB95K1l3FA+nXEwI02xlaPQj9PXgijJzKWldIKWAITp23WwuWR3PLwB8SiwsH24op/hjKmXvHtKfvhYLm0olxcMXVBtvwrYIwL3goINNzEbRsemk0gS34Uolll4q3g8D8Z20KGtUm3eURKDJvGxJk6YeWENJmfOaVNaYea9Xnd20HLK2q4B7F3p1k2IU1Olde18+7UOirx9GSGOUKW0QDKFlRaqKs3S6rdJRMjndAm6uskfHK6O1Dm4d1JuziYt2PJsFc1H7puFyDS/P5aumRcWSIyd/iUC0R488K8n0kEq112AbGQi1negNIwSG9siINYLCFYmhY1HijwRDiju2p+UhPTL00cS+IdVgvPJKT7YXL9nZLTsjPuBL2xKMfRf+uzM97K9s+lklyaeNiFf9vSjSasgKqI7ZFhJin2TWbT1sarJ6T+b+pLW8ekffTVVeKTwd4aINhjykZ59l91ylIN5WmPFmj4lsxumyHCVMXvkvrp7wV0oV+1DmEMdVMkVB0nPsbZTqtARLvLrDPr/Cv0XiSNAH+wlLpkxOjLyWftG1EQ3Zw3xHWNiqcDljQjxDf1eIFBLaXESyWjmMWc6lH1zu+Y+JtNiEsySbYFekZIHQza5MK/5sXuYSIPDHX0OxEzw5IOWGNl8Vsm3q1B7W48X70xndj';const _IH='cc9c74e7cfcb4a1f4868b04988034fabd456d96d4c5bf2097a7e05f34bbc4a58';let _src;

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
