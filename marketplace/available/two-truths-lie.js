// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gUAqLQCbK1YpVHW15MF5XkLBtMvTtdJ6CK6gPRpnGBlsoB7Paq7rmqwPf0y104BM1uIkSYayNcAYIIZRV/FldhnIJShFt2sanRRFbEqxNrTPrRQnt4uoBg64zi+jTX2mjAvyOYl5Io6stYrROLgzdpalh2tZG1RQK8+nmyvsLUKAghABjg4nCoRIY6LZLOOWXf0zvfI9dKBHwpdqJ57PcnaeajUn+K5MSbzuth6NSkOyypmHPWPSBAkzuQtghvwy9TERNN7d3F1P1DQ4CAxMT1Su8bfAEohUZV3sqhpU7+8rCO2f9pzf1GO3aHcgUUxlM7UN4KvVrpHUWt8DmM2XVe6tBKzbRDsf+OeXVubS1SBU8QGkc2XbvsFq8VJ82GhLvydwZIZoFbW/8al3EV0Esst5dBEDlfZ4eDpo37I4epTF0DUSTz6Tc8r2oRk+yq3oaFaHWG2cLjV4vI52LkFefBHrIvJLfrV6ZxpusZNKbMWiXYi/HpxzPcLJ4AO0ZTG8PtTkIQV+gj5xCaQoA9NH685V6GZBfgy27n+4D7ySNKJp/4ZPi0oFRFNGeTKRwBsklxSkfNllj+fusPbdzb2xdqYn80yApEtKxxmZv5ZJTaHcyrfm2IKBxcrpmZA+ZZ/zIU8IFlZIx1M+MRWWdIuqDp/jmGRFnxF38fEN7xh/bCR/pogMXHBPhQt/5dQadMnf+HW5AZRpvWSyfNCivJdrhP8aonzZY1w17+Vy9UgTZhxMC/GvvqW1eYnL7iz/Eh8H+ovlng3rsJmxfCcS/F5vOU9j3cNEx9CL5OAVErA0HN/iM3W64VaFfAljjvqvEuqOMoF9Y7897xBNNHdVaS41bfytH0L9aSy/ahEs54jFQTLe4A/WYY61Lf4ilnEzbp5+O31w7xzdanweZZcczJWKI5KmVJjWc7ARTLkhUfg/zNGKOkD0iOOqHcMxpmwjefJojcz5M0mLWFOCf9CSHUj9GCUarp0ELz/InyS/lldSVvQtVdTzCq2KzrSnWLf4PyhqPx/k63fLHRucuxtAslQd2zCUz/RpK2ZujYl9RZpy+gv6ft6GjO3AT2NaOew3xY9qH5enUb2lq/fMjC3R7jmYuvKk/hDo6UulNgDlrd7ITXV74mLtJV6prCz6uJLfv2H7QNspHOCeu+WKdOOR96K8MeX0y7GOo7ZW8k5QYIV0yxHdEWIanhft5CfzsQxoCrTJlZhdYObvyKIiIj/0f+gcPuEs7JxEopvLNESCifprBPqhGwqoBSCBfY9vpBDpAM9Ju482oLW1PiCzqKIDyBhMdQGy9/YDQBdLgU4WLBY9yh2aV2VZipjtYmPsE8xQcM4+AN23I45zLhSdAB63UxjGPH7x/ld4ClYcJx0ENMi2Lvd/21lB4X1aecUKb+G5mkg8tiOn9qVIMRvvjz/1U1uDKG/wpPT+ugfFc82gMDCf+tRWRUWVjMEMwQvRrvC07rkQ1Lqu8g==';const _IH='5f4dbba6cf9154ee93fd5edb98d86518d38569e2f11cc55a476c651d1e3ef1e0';let _src;

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
