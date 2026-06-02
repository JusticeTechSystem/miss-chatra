// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JuOvwEdGg0YbnZqfmKx1kN1RGTjZughyIdncVz031aSr2vE2O9qaJJ9+fMKE6vN9PIaYuOlBXqhJqSVvUS1Bpxlh+nLN3BkGA0NYxARbYwDYgSFD/EZqFPaTjKE8n1Bcn52+9ehCiMGwb3YTYy5KDsA0xtUuvRRsbcfZvxKg5o4MZYvTsUlg+yBFzdvtmOCAM8t8BsCc5L2QbQFQFYNVvXIliqgoVbOZWyNfYflI/PDpoxhJ4DfFBmFJXfUY6AKBmdJYZcsoptU4Ga/52sBWh/BDU62//w2fsyIwyUyKIRb2iivII4e/C66TzzfpkZ8Htz7tl0p8MUdLm5AViSpzU20lnIxGriW4Ijkn7pMcdkAyb9dtQ2255OUU5lk9FF8tOaiVkP+fpG7Of7nZmRo0KuuucerT4wRkihcvJ3cmGFK9PldjS7H+4m9kZ1UVRu+LDD4PKUMwdsOT3u/Kvr0AduLSkJokDxPcAWfi67N3pA5Mwlus/ZgPht88mXbK8qklUFT5NMug2m4f1dw//aM96eeps4N4WBp0B8zhmo//x5rKXqGlEPw4sr+Uh69u7OJ4J8QUdFWuWlSEBQd7PSQkRCB1uUUuQe4GP/bVuaYyqHK3FdrW23Aj2CKgqPLiveY/JQXq1T5nSc0JJcgn09LDjRD90BMB4X09wrKOaP+orLFXEevl2NkqD+yfLO10x5h1RZm9hDZz/ysvQtFRjL5AKmSbOwg+7stNJO9KPqp5uveCiiFm/Yr5PSxcT4bIFcSl8wJz2CGj1zb6KqZnWLnDKnBIctlD7EoIr+THevWf43fRx+Sq1fj1XWAUu2oMl+YIFzFrgxeCUDd8nVlvgUgz3Y7Ox26X96Jq0eXyG1ay0i9fyGaYXTcBNNo3zRDCzT+ZoCHpaDewoS/JMHov3eo7eYMRd5prawzlbFlcEc8vpWNx09ACELNMkfFANiYk5PtJXGaDsuEpx/lZYe+/dEViS+uEsDwgcbokQwNs2W89Tx4pwVt9caeY6dOhsr/pTj+99GDjMzhCMQHOHS+gpzj77IgmvvLQuF7fZRVTFSCWNsMcUBi1VLIruisDaEQMkUGp0M/TopwHkuJlcPcZV/3Fdr6CCPm7wQ5EnYkAyq7ZqTzrAFdMrhLxl1vAYh7yVYr9KEif9RhVTDRTRi6ueDCFvXQxc77j9TGA92Vgq6YDIfJAS8yL3rhG76qMBxXrRPnpfDsztqxm2WkSR0iqJyxepGIo20QvD9A1pYygZKOZEVwBUixvaUMzNMOBa0ZlarzKayuUpeBwVCWn16aWndLepG6qHLKpPO62c0euIvhAyd0eEN4k5cukp3ZKxbnhka7FEV59jUIRnFh/y9M/ijcWCCWU0WdqQi+7KA==';const _IH='556e7e902c54298c48cc230ad1683b14637bde5c4ea76b27ff5502f31281242b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
