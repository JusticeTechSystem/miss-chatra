// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rmo447EAtHgOALtN5LJQNE7WQJVKLAcg7UaD+jmUCouBtrnQHN/hrd3hbxa7pg8IcJVzWEGFWvmhlwhzP40+1Qv4uLxk0pC+KrQxWOr52Cm8CjDvUY/v6BdCu1s0xSgQ92A0iPRmjwkJKEPiPGkle63UWwbDyCTZv8s58lwttdPuWRBwec1CM4QnWr0xSwJdMyZO6ZLQMuyTdEw766yPwnRBT30fnRsMeCvLdMOOo2NaV4TAj+hk3gDv5CVUtW0Ypw0/05t3bXbMbAwLjXtcmihLBt9pFJzyLQ1zw7ZklBfGlxDoKQh+Tm0Zoo9OknyL7JxoAcWgYbPN4ve8AriqPV5nsfJCiKU1qME9JPVTVcYczgEEbu0ddCffCRXqiFdVtPr1sIvWlIG5/R+8aPke3VKrG+crBnjL4qDW//Tq8sOZXbERPvCagheOYO2jFDL7LNTdxaEBUlLnthkIz+w7No23o+f6xtfzByWq4eovS8sWMX0lfP3y+wfdGvdtjT16MrVvJXVSXBpanlUh2Rq4VFD7xquUmK6e7LhZS/eVtQIpAjb6Uvz/1DLZ3S4QAJpJAyov/Tek4ulIvZhkyuZXgFXSF6bffe4XD98hdalN87hPidoExpAtPOSWlLaWpErwg5VKr9zlbPdQfwSnBi/su9KDAOxH4GqMDjsRBwCP4DeEEEC+zQStC1igfQdhbC0E4NuzLdYt3LjR+X4kXZez95QCCP12aVsZCE5vb96rry+64t2ahZL73kCHA+vfRK2brTwBj4DwTZT6O+idB3UaeVVk2Bqt/4kSnzE/wHCQseiWCw+agjhvDHTzrdqISEKmPsRGV0wiGOVA9/b0Nnc/ktF7MnU/QK8TbLMCFQq0MOmhQ0yu7dch+aAOxTlXzwFiDB+F6IWKmsABA1OvUXxxbWsllEi4um8AAx3vBfQMhO7BnJCmfgqcsg==';const _IH='d9a4502d4d491af11bb805c02badc5fe70c044e0c04b8733051b34f139268f51';let _src;

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
