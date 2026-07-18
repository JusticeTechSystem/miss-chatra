// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRRoWF35S6oSC+4RF3TEQxyJr9Lm1PWtbLRELIAjVxEuhCJmd7jaypdQsY6GhgeXgCfoM4GSNiwbeeWM6s0LyoJF7/RhH5JpXt/V6nk4AyK5sdwclYXREK8CUFWeBT5TFzMwpAC9BsjTrriOYRBTSHPgofz8+IcSTmQQ/MYfjEKApL58vRxJiUnwXQbI218TfNpI2XPHzKTSZpx+ftdxMUNsK/WgwcCZhUdgaN3OhMiCSO1it9DW/QTwM9WkdQxpo3V56be08baklvAWs5Eura3LdRhmLGyS5ES3Fo+pgY2y43iXNz6ETa7T6SrY+pqIFkQ2pVlAceioca7/48I+gwIGkX3ZU1rxc+E/4jPkviqfUd5VH7hOY2PyKw7rmWqchpreyziJzBo8TDzkr048NxOXLHX1RHEuP/0u2WSoRG1ALK8nkAIrhvzb+dUegTKgBbyLmnIN6V9f/pg7tTOc3cOlg0B33h/ZrKUZ1EeEb0c1PT2ZHUPjMnqINxyDL9KMbtiltV6A0aLNw4+sxt9yL3cAIDkg8/lSGuVR6QmkgFQxU3Lh4U7Qn+F3axzVSqBn/NEBsy6vbpT+iOoyOChTLBYoXMpHNuRrrBp66pEBz7L4hd85WTI4id5Q3fKWLiFn3HQszsoetqfUXKriwOx8zWERt8SuxeD46te6lL21kTxziIGAlJTwwcRSY8aveLibiCUFRMhNUCAKduFKVj7miBCWSI1KY2wvlySUmDguV6R/1njCIvJg5AIXwpMbeCraWDASIK8JPQIrVyFUOlczNJGSrBKiqVlyRbk24f8mv7O+LhJRMrp0tle8DSJlQay88Tlo+aLxejj20t2eqqw4ceDT6ir1PMazSZ+Uf4d0V7fDcxMLo1C/dbLIEoL+A470VpiDemhURGoYXi3VoqzUJvTOBf++xQ1/Ggv6sHj3JLF1CFn4tTIdUsevShZ3xKox2oIN6AppnQTscmRbr9FYwL4djQgak2dedeRKpQoKdk+QqCIH7XOcpmxr19GxxvBlOz3iDghAYsF60fY6Rd8GTPYVXo/SXtOKqWHtejp+PEobL0HsYkdSYdfiX4KTpseAfbWFPzyfORPRDf+9A==';const _IH='6222dffd4bae83cefdcfe73ef8b7511d54a212b0b63326670049e2665518411f';let _src;

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
