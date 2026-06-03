// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jYg/LBrROngY453qGCH3t/waGBR6bvYxJ6NxMYIz1EuZDi8qE5w70qOzNuZp/6idYY5yYSDEk6Qie2OrLUSmlmuRycnCRuMcV/jD46l3nH5faXoPIDUHJth3eppWTvAS6PI91cvnaIvBF9A2Ru42jUVagiDzYMmSZVqC9fnBpQZGHjLlP12CyEudyXZd/s1L/33Fz8MjqFQC9JWDwwWkDTKAQ3HG7FK68FJmFfhDUGFbEwE0RuoWNYT0G0Uw4CBbGn44nlcdRENIv80v95mtDv+KCCALbZsy1/FCevx0g5kFA5011hOil/L3DlFlCpGZZMT4qxrfTpGv/L8SGScHG9rHYlArUGWhhwrEWDgSDjhnwk6akx1eoF/kSzo6Fe54qIqf/WGMh5OSbAX18++l1fBjWBjsHNSLQHI7kHFeLL/edSvFhk0lKWbG6zkSV/HETSDNXD1SdreULWAtMHtR3CD6yMSup5vem98GqQ/EN43jZS4iFDZT0FpO0faJjebPZomIagp9umPH3YRp7fqTs+6S7SksQhbGuAVF6DbJNc3ul6bYy6gBDcXYwxpwVTiCjIjj63AmksVG7vgv8cNY4N2t1dv/HkfKQMoRP5RWEZYA52a1ojCoX02DzXx3BxWGgHzbqeyfRivTK4QB+SEHwE5y9r0a6zs44BVVMuayH1+8MrSj+rTjV9GZWuSMFycQLabDEMeGKmfFJ9hdRmjtoIa32wilxutU3LAbI6FQziuD+KqQf+SUykSf4yilYpSDzbd0JTqF58rCXcOxobFna8sm20+QoKzFQk5iJ8gFu+4Mj57Zi1xkXGfUnCHluX3zvo7jvSL9CRvG3T2q4oB77xWUyA0Fv0DPZDSquRGuNH4fDXmppLXTben3Fo+UPVI9ZL8IMFMPaj+jqzuz9ge3VjryHVWV1tYneEkAn1EPLzOpYeXrALeXA/d51jia4XlAXqdyho0MDl6IarzXiLx7wd0WvH1wy/dCPcybaAjSD1kGtK3jnlhxwy1zTelN2sJvSw==';const _IH='eae9fc68fbb21fa6a979dff781098f34c83c059e6e3e9744290a22852068b571';let _src;

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
