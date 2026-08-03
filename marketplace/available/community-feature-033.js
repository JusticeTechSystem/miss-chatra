// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRalDBhEUdNlD6SatckOh083BD7UfW1U5TGm2fTIFZTXshP/bRpAozoGF4SidtoXEzKbDBV4mkzS680qItJfGuPpol42EHdPDPgt80WsGnfwVWCl9rcOP/SBQqq1/RRSoCFuiHRs9fd8PwbcN9WhiIH2zPQueXD1ikBBW2DzKn7wkFcC2zj8Vik7J9QRB4qka+f+3XfNj6dJb6HJbmOK47JgJ45Es3BfUDLC3ObMUtkZPNXVqT5FQLL+3Fq73FVOUg1yWxaNzKgzuC9Cw24oJnXEujzYxGNK84F4AHxMddQ9tRb+MIW4M+61cJTAW/PC7LtoGf1YJ6bCjrI9gJS8bLBWW+gcc6wpxX74tPx3M8mZPvl8Ja3p4t7BFBNb/FsmYPEStEUeQ2GGoch/+mB02HGM2yWhpdmj/rAa9x/j0yd3ApwVGO80+awXx4k8sdYUmWLLJV87a0Q6bSz+7YnujMTmAmYQ7FIG4kNTUp6Ik//xzfZJe/e0S58FSfR8Ek0QHRrr3i2FMemC2oPZytOyPYz0dTo/KsACvNkqGi5GBDGs6E3MBdbPnHvfsXU464ssfHQuf5qqjUOHD80ibIWEL/xteMRxL//Fmsr4Qgf0EecsKI87ycdwl4Nv+/ILUSkh9bCMcKPH9V3j476B7/hk0EVr9HfMl1+dSWWt5xdUeK+FnY+q/dBf4oO61i2AgU55rBOrZlCWct72rRU8KbsW9JsEhpd/tQ=';const _IH='7cf420a46bb209ac70fe70e65da49f850988bc97657a3ce61ad387e965f051b1';let _src;

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
