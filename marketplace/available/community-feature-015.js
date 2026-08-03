// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRU1G3AKHtz1GcbFQVw88mKgS6kALqqxJLnQ0YhJdMgudPjcY4SDb1rHsuVTIlJSi2K/JeOGhzeb5vbYA/wCvrTg1eLdqmihGoUCPwxul5VVSwIa+owvsi8FxwdtrY2YrfdB82BvwM1NF+D476VjrM3VfMpfpvLnM0mary5+W5mBIIJcxQgZHNCZtxJkaen9D9Ebgng7SRw0+exe7Kg2wX5m6+g+YzljyOqxMVCpGNZuLIfQ6fRUZHdJSpe/nKZ8jlPPncHF5YzTgrLjA+YdwRjl5UWYFgE8B17A0Gl0iAz96xPi3HbO5+0KIkQjousAcv11/bkZENa4C7W1BqPp239I47vQaPSkpvAIDs+3O8gzDxuS9wviu1QM+m2JgpTPfG1MEiW1PuXYYaq8Gp5FQ80EpNhYGja6CU7fKCFOQrZ8TMf0DACGxgNqadGGAM1jEgvfFAO/wgFgN0Hi6zFXtCRGSTbK0eWBZHGmwdoW6WYidC+h2t4wq2DhDaIq0krkrp0fQjGt2J3iBafoCBXUl+sJkLzDVEI3JMRbQy82zYAFraWAjk+mlHCaT2Bm0TC4ftau6mbChjaF+dkqlNlBKPy+xjj4FEwT20jVwFNQIKI4u5nTLpwkUhQu/Mnz91POlLkFFthzarMmwX4Sn3n8zJe/bRM1mjtiszoyG0nwymjoQExAbVJpomOXdYshdpuntvi1EM78v6O2+I+f7KBp/uVF6nTIQBkmW7HB7AYi7eNIGm6';const _IH='5793a5164150981f952032a4b7b65c254a90f7b7cbdf48e9c17bfbee085184c9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
