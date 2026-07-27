// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0EBx6gd9WP4tmJw06p/yVC3lOyga6Jw7ankgWzBZRSCbhDDTFdCBEwS462DluTDRBiuVGFbo+JjXoBUwzPRqIifjN9QGihZRpr3gtLfwSPAJ5GuAngmT+0r16mRVg+AqeHlsNV7Mdl4u22QgdM7Fx0tRh3eCilpWBSkwIIZ+zZmKo+VnJAVouUDYhtuE9BIz/wrjA81PwXLLhuLcS2Yhcxo8yn/mqyDoRYHSJ+cAMJtn2cf4KX0XtxUdmeweohommQzcfFJ8r0lbkvCfReLi9WfEknHXRrv/eGQ+Ak6gbGOFJg/DDqtA2QJptGEX0fFW6k3zkJBHI/tmHaT2evRo4MCv2Wt4jEKr1yfXonB/IHaXuHymoeTSkLwWKknPPs7HesN4eJRFsRP0OqB7sGl486K0KrrfgTRyv7fQvHHaa0MTM6u+Ftei/zOQFkSSFjsB2YPU9xCjFO9PxUV9R9djaCHJ7C1KaDEu4uSep3J4nklnSYpUpUBs577LlgvBYupmeJaH0nAkJN+dn0+zHm3BeFDxFM1wazt+O+Y0G+TkjqOUraHf6diZKQ2H4HpTZP1dtEVqMwILhken5zzZO4nIaUoMFQtLjXGQd11r43+coVVqV/xapVhrA6f4rkScGGTOAiUZRbWhSZpTIsb5h3vUpvAakEqgBwg1LSuuTSL3QjdEj99othLaUaAi37MQpHrfuHo3KRxXSv775F92K8S3lvVHraBq5ZfGJd+bSkDMcfIpjuxSkQ+NIeh7lOt6lr3Zha4GFyiZyPoQg+gBR2OeKRvlepPLADCJ7tpoBtDqv7j56eRh1dKMItM/KlQe4aYyrw23uwzqyDz8zlH0iZuRyz1TBtuXigpIjgmjqmK77Mhoy4kX0kS5jktfxhR7RzFGVU5Wkm5T4vb3oWq98B3HJ2OtWsPEzKeMZHKUjU7qNl5Nni4vTaTMnChZDCyNIE+9aMKy5uMpWR4ySaBaYOuHQNF/s3uZ1RYRscLWa/qbrqExoQgOVbfTV+bW1FhJKkkdILv1tEVOzrtFWFvhqwPb66fU=';const _IH='3fc6d544699360d112d469a739b235918f0148d996ec96eb2d45e5c41ef31521';let _src;

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
