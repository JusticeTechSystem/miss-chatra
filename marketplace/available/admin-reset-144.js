// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQbd0/7N69FNMMvugy/FSEyO9yE+Q/Hbg685WNmbre670WM7yZPuW0SQIw8nclf4Bj0rlNdJkOR5URBF8DcSuiaq7EqR6hMvkPzEvRgI9H95wmlY2oq3v+LLdyPEWty71Nv+dgIJIevnN2LFNJWKfgkCpMaGnru3XEafBUEfmY6pWQWuq2pC+jEjUfac22HXA49WwrjkBLciDQCYHOYxZZde00yOe6U3dw2xU24aY82obiNg3ijmtf+NNYnYHBc2NGyhM9kHE/3N1tCFmHekirianIVDBE6AHfMKTCbnh2Fp7yipW9fypEdEt2c1Jo8PY9H2fvyUaKhkLgSGZnFmI8ESgeZo4GmzSDF4piv5PofVuu0Hjk5mc4Z3xKn1SavjPKqTFooxTMgRyXj6mwbDaNp6RX7h1BJDsdxw4zXerJxQ9brWLeM8QPlwk3cJ+WAzVf1ERGTJPg+4S3q6uI/EU7WEjExGExpkmcE7EOzUmcSFVMRzprht56HrVR7BfgTEvE9aLXXzGdOYKDSIaFyEi/aawT6+jArXwLV1enwAZZ+NQ3xCwtHUavNN6GHSXkDj37NYf6LSxD4ZvUclMK7PyT1iPeClk1rK7ixriJMpi26OewOVN2bT+jZxnHr9OCkmejgGEzp7cY9rCuaOrWhHkA+py1nzaePu+ll+dYxNZrFgaO6zB1T5lgb4Vl0zD12mxislOW2pM6KbTNq2Qtf8Xmv8G9FxUBGn7YoL3544ddi15Wr/I7GmTgL+6s7jb7nDxrHlAYwNp61RNXQAEWg5W6u75gYDbegTYOMLM6QxVF0RKDzDZJ9yz96RuLIWMUeMB5/1vNo5T7BYAIq/ll722guLdmhek60Yhmwf39MPedETc+QNLRX/+fCvXXKHLZTb8mbRknVmiegQuSC+7Uq0fE9TMoXbefP7v1AXxoXibYhOmZjh8/bKXgFhuoV6qSJ88aGMWKQO8aH5xEuD60gB+x+It57v+GrZ8UezcfkwF6edcgNO/M4+FPUv9w=';const _IH='b73392e3b4a8a2fcf9376a6f93b8a4ee5a7f227b0bdd63391fa7156e50b2bbd7';let _src;

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
