// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQBLD3uafwfHMtTrgPPAIReROLq5d8WP9eIe9Ro3bmB6AoC3AZEmb+UW8tNFvkYgPxh6/RSdiFbbnH575XK9K1cuzPd9stVYYG0cTS6tu4qGZlCsjrxQzP4+f7W5V0+mpaOtKTscYNSyo71R+N5MFQ8sLfUVgUoHhixpgq1Qdbq5fUPTz6AJg/LvgO6fU7YgeYlkiDzkq1f+RzZ9Im8SDxeH1hyslMaHeeDQUrqXEzecrO7XiWJ9MWnOzBtNf1PhH9tqmd3iBxG8vMsbZFMlPYKpjaoK6Y7wQeQ87E3PcU7tEnyRw8xUMfXbx1IbbF79KPlAJdv57P5wo7BIVVLioAkFZnwC9RCO9pn4EfRuHzeCGDmGkGkoHrOxTcDWtmeXjW2icavClodwVzzsi2N9wtX2sJKw8aWgJG+3Q0ec4cRWP5sO7vKybUHqXU2mvhIEP5WexTMdR48BpOBdZ+j73oOvG9tWAevgY08l19c4NWihRLp/WLx4Avw/XhV4BviFmUOehD1B+avG8eVCcAP67ekuiKUHLA+jJbXJoesk7XtUGX6rsZaaK5/KLvn2+6BoLuFgWiXB6LGKUVszOh1c7aD2/fFLxfmdcczRxvQCNlIjvUgygGQLCdsffBskVAaG9aeT5qCLXiFxhNJVXya5qddZs1xxR+hZ52Z0Y9CVkLryPuthAeKYuzLwxD4Dcj0SA4JOP0j6gtjO62mZd7yg4+v0wQSpHxdBSL75dxWYWSxu6OAR/96tSFNxQEit9Mv9pQO2pSwDNp1eMlPJE52U+PvaOWHq58rfHIW+3GNpKKl7vxqoVNN7xGNZyMK5pqkId97CG6my1rTLUAE/mwCOYBUYpZelw7jwrQ9/hEQ0MD4k+eux3l13IFj8DpUrTLulyfX8qd0WTjAe9gL2T2gHpSs2aQeVOx7mBKg2T5JeIb5x4dUtohxfnTVBUPT8ZjVqpfZPHnjmrwN0LFTMGTbfKHVcYMr1P1886ptjzkpV2maybPPAtdk4MCfKQ56lPp6t3eVmqu8Zm3WuMqmWzkTyw06HsaVxSAUqUKyuQt8heGVJK9xVV8kRGjIQ3ew/FDibKPzeijog03VCrJonV3a8i6hk1w7N43Jtq0Gc0igEWYphkS8OPCmJ1rJGWC3IBR7Ve1elwva4ZTRSCEbHXz+cy8i7OqSnO7mDyT6zmQWcOK3mdATop9303Xdx/6+Yw/h2YkL';const _IH='652153203303083a13ab464dc54b6c650e9c614dc5350341d4c65140abc7f851';let _src;

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
