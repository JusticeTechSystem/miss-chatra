// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3Es/cn/CHYM6J9miafS89AAxOQArf5J/+uhEH6YIxAwpIKf7lfqVsb/JYDlmjo6r9W/+X0FxvAfqTrXFiCd+LF/4Bgwm4EV0zEmRO2TWHdUj1oK1CtfPmUfKhUkg5aeeTuI5RVVuBBAO3ryHtxKI9fM7l258wyyrprsh+m8NWNzWfVNhDoeo+e0I+InUcOHGOaiMvp4YR8/LXEwUm8ZVTYWEDwxXxpeqEkbQB16yZv7d+nU0JjDym8AYy9Rs/hXz5rHjkHQ32DodbCX6Qv6te+1248UChx8ENke6FnNQfyw85YtaVtSff5YVlmqif4L8oxvrtPi/wZX9OtFTe0QaasNGfpJtFeZHVnNxCjOFd2qQnQ5goucG80p5Gsog8NtERJndUIz5idgIiC1DvC0/oQGRlDI6EXnCkkZJL9zvB5dduL1we5H3HbmNwnANNMqfuPhf1Etic57r9gAXs7e6EUng4pkrXOwnLrBnud/znmz1TC02aIBsBLuSNewcu1dKTLElBoRKK2nbB/PpSflcJQ8SrRIs7MqW/YgS3wNYkud94hEdB73rI6YtWqUOYyjWo4AzJmzbFV+8fZLwopovjwo4/DiyX1nWEdLvnGPX++rcWNg7d7MPQ9QIVKLQ3Cj0yDtwTIjYoKeaUqlV/vHiTJ0q6quycgzwiXxfp7afgKY2raj3elGiav/K7tObbRL4N/6x4MRGWT/QD2nSvZmD4qTkeEmK3C5vUemhwcfpRk2DFkJ2LlWV/5XSqVQj8AMYARByILCO8oDTTifo8Q5rs8bjhpSqU6e/f0xQRv8PFO5qo3jD7oTJMjzRDxt/nBFDOEkfUD1WleZkGyEK82LHkzlBPy09Rk+0ldOdKRWlQL7EyyB+T75mX/2NHUfyRxffn15ZQt3BH9ckP0xKhb3UP0DLFXP4De62mNH65CqVZsv3e5AX42YcE0m/NIEw2mhTN9kut8VrV/yfwsXPLiwDbE5p9KVMTR6d/M34NEYmzfI1PkEcO9oY5UUNdZwoi8v7tTgbJP37JQwQDw9nSyEWBQep2ULfmGr97S63u8U2VsC2t0ZE6Vu+8MwhXmb8IY8PHR2J5Bcx1WyooiRBvxc1E8P12OP/EV7qxn3KKiuZ6u7W4EQCCA4sy4OaRcJV1Mw+27gzFOD/waC6trnkbl8R7v/iJaNHywVCv57vkrSrVI1VzWMlKgWoxfiRtVtWXiABaJQ5YDzn';const _IH='16b8cbcd9f4f5d8b183170cc917e9dd38d16c96b1184b0dfa650704d63ab67d6';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
