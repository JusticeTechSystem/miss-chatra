// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0I0Q4ZeqiAyB0F3q9qc/qFf/0ISKWA6VdYPo+E22pq1eqaGJ+jIY0J6AJlgp9qfo8/81x2xe1e6sdyZ3anoPYL3XAIMYTGGoNxNriUEgzlZ7Emm/dw+WCEJv4d1GXJmC9lqihuiwH6A76a5WB+WRlQ8MmQkrPpDB80lCFY1YE7S5hE8+FzO0Qwk8N9/AXpEVs+myBDRMxh9m9rBJI/3IaGVe47/ydwbEfPAIKgZsOCwCnq1DP3jt6WGH7qmR2UMdWC0166t43HhJA8V8QJpnnsfajI8tEvDP+CCTL32yWZ2NawMWwLLgfPTcSPfoguslHF2CyTlus7x6Wp4l0BhoT8PtoNYqVjgoCyryS7jdUSM8ES0elLSf1wG9Pndgoa9oN5snMIKZkvpzojjugyAKKILWcxXDuWNjwqeBHV7sDL80IJEaOBZDvfYqwoDEg8diLprhmfBOGMB0lticnxXltz+HTrWrugvyrpON1OShKLHW2PYEDRAhDQgnhbVDfiQwnEG6QniF3zTx5Mo9XdD0X3ib+Z+s1qGrcDUJYwT8nyCimSW6MiPon0O7509bnSXosSEe+YgDfY7xniAl1zN/lTDLYoM11SAMfGsoBvAmk8QwwcT90C8BlzFPiTqSpubnPiDKa9WtAq9bi9KiYzpPJH5FfyOYZDRzVk11Aw789dlfcL8WS3f42HQxQf3rmTabjGpAr54b9tS2ViXfZ+uvN+AUV7tX2D3UrwTLSXWFIXAdI';const _IH='3ab39f01cfac85fae896b8d79f9333869ad9e4991ab58fcfb71159b59b36c158';let _src;

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
