// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKvtd0rwC6LIxMR5sq5Q8T7Gh9inpZbyDvcHR6ai+/XMU5YmeveTYCc8n+3MU1wY65+6aLpLmTycRBKulteKE3o155V4iW9mLpvDG8rNOMzL03deNCDir+owfNjA+h3m8bySrXYNNWwfCvaxhUh5FCnQlvDt/6b6YRJMUskmBtxi6wkMwrRXWnQg4i1zHeH64vvpAAfG+sax5opsFckddaRpKWqD2cj57X1Kba5V0zh1ctecFq7uCmuYhA5vonn4698BGiY5LKSChn4TpIE29Y9/Daz0ekxVBwzLF83hVJpkT7qyDlQZb5wRBP1gExXCRNvrZS8IHMQNiEvPXNADGlppIa9mYZLoDCjqA2687mn8i96TB/V49VkC5ny727WfTwvuolJxEhQwGgTFtMff66NaiHYl4wRjNOTa3fyQ6zjad6t3vjrksFr+6PMP77r9jsXH69yGq7qAGPLLtIQbNHRYRDlfDcWzfY+gJ9RdyZ5kzc/so880+jeWau/WfBXdWqwev1xd8tVPrcQxePh8Hv9c8apXgLV04mM0miimKKC/5uH8J1a8Gu9BkCb4Bxf/oIKM867CDzdggtf5t3dW1g4SiKCqQKqX/jCjwrSMx3SIM2RDCoXDu9Vcwt/aLjyApX0/0gkYY3DbFDfeShtQESHtABfrneXmiaOfWoFPHLggEoCd864B93ryTSWcTDd5YQg77BHDehG2rfHfGMifalQ4P3DsYaLfEF9YNPd1+V';const _IH='5ccd69eac3519d46a2a7f12ec5be76bd8e7ab8082b3a8a50fea5546e2b2232e7';let _src;

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
