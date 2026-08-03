// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQl/XgeVcBuh6C5uxaIzJsCwpvDMpyMmvg3yEvD9eGxsUpy7LS3OnuJuhb3mZDi/RRMm6n9GBoY7BszvZ9CcKKEkJmBIJIFmZ4HX3grfm2RDNyq1EZVzr/l2jl+G0+bZOmeLy9dczZ4Yx61PZ+dU6v4pt+iBLLV5FVRiqVhrMwqC0za3oTTSbDo4DjYWKwwJmOzsKVZA+SCGr1DuVkIPRnax+0EKGY7k10QWXdd8o7x9CY8ZOHrh9ZB/Lm0eJimE9/DuqGG9GmVM8pvEDHvDhlw11vwIx2feyHQqmktjs5hJrCTHna4Kh9oi8o0OSVhOb7tyqoiCcHOji3ol3Qoz+CSJXK2WcOInlZS5llKVWiVAFWqSxyo4yiF3v0LsIoYm/dXqGBvYP/jthwL8Y+Zq5npSOPIoogu3CJG/Inh1M25XGFkrcQxHbwNlstr9LHC/OAp+ogqvT1CxJozlKRRgJBkqVYPc72ZD72tED6UEyv/1I5woDGwESKfyuhVR7UTA+K8ftJRLKlhVXolyyYlwoG5CwieYuxCX6A4v9DP+l3hO/4mKcu946Ytytsh0hYiSD3Zlhv0FLJL5xk0dUcAf4eQ0LW9T0zcaHS0ZYp4TTiTW104IpXdBg+O6taNxgsmA==';const _IH='fca28104731ce7bd458136936067b688ec9ae4363d368e6cf58852369a57141a';let _src;

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
