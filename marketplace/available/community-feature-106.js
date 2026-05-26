// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u9T56C1o7bV+bjm4gjV8aMqiq86AwuvreHsLTALFyTkI6fYCtKBRGi5VaBBPiz0MZj/nOHMaRMBS2ngsHhf9YIBNEZ+whLHrQlucOwd28pDk8obu/oADg3XayuJhQi+bMqmmlM8a414W5NkkexmQly/wXbx982lHIyiG+kPc8+Z4FNwzCld8O+Xy++Sq5hQhs/rjIODnRQ5lK9uAAxkFPjOh/BAr264BSsIm4yK14pqDAkYkkPT89N4iOKyzT+tcmV36jcMnnz36oZ5Eq/jw3wNxrB9DMDuW1jzqixF2gATdpyBnBQfXx4dKxM8QTU9edht2Mo11Lj0X4dOmPP4Z1wZXtf9S2WNV9NH9O4vRBnDjhlTw4UpwtVpbDZxQLgDDnXhccvZ9Wv7FGuYL3FeS0sI+A8Mtubq5QsFAdrUKSKhRqHueYd6onTuNCHWMZSHUhNc09N19ScksF8sGGad8gAPR59u5cPmN9eQoW3BKwmt43Z6U5I0RZEnbzfjBWK0ZGJI7CvKpf0LKzUZdolxgOjl8wmDNvWLNug8lNeR7G5ER9kghgJA4P01Rk3lfWdyuRjD6txMamxD0o4gz1La492GK/JNEEa07/Fo/UMtCaqzrD+rXwJr2eKo9rmK0aZq3TNzLXEDygVyU56R9DmcoFaY36828dzW830IYeLulURzP6shvS9QK5NQdCAV4/pEYrUXKesSEADZ7lj8rPtS0axCaU9GGd5dF';const _IH='bd865c661f47ab6baffa1d1e09db1649698052ebfc594aa296753601ba37c24d';let _src;

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
