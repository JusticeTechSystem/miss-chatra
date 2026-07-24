// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYCY6H6FunnjT+JALku4wQZxX8kBe1IteDj5eytGAZdcdofJl7PTP1ZyY6Zmkm2jewHXRncD2ybx+iT97I6pattdes93l1kwF/957E+qVwb2jgSfObR68afD9O63GyVNxTDR7kqVRbWw/gxHqJ66LqLkfuiCifywSlIVqRRmGeXZCXEpBoSquO2emplZiAMuuZ2Nw4PKMREhLBVOrekI7m+XwyHwsxLwhclMawpjS7QlaMXtnh25cN1xs3XYeN/ox9oPC3js3WC6LZAUANLrZ1ttlAEqFT5L8POpbRfdNf5a5rwYjhmy66RIY3tbj8PbMrydEZJz4BRaXz8y5Illl0iGFRIzd7bhr8oYK+H+uQS3kdoN6O+nhP4GMveYFjhnObbPhB7PDwWbY28SwMM2JRzOb044C6VK/d6hCSP8FuSkX29VxSKg+61D6r/Bijwt67SkFXb67x3CEjavNEUva5jI86JbIeQfTl7DWTq/bRgyBoR1h48CfSe++k95bCx96b4mxDNeFp19wr6IrvDgCvPfzOYh0zqKVQVOP2mcdoTOPh4qesiTn1fBnwW1mxIONgX4uiSAIYcvZzOXjGM2EcJZm1sNSL/yGyXC1eI/jnEVvXUGO9DsLFKvZocBrcJFmmcCIa4mP0zos1eXtz+J9iz4YA6DBBLvISyxgPTzdYibJEwdBuZiz1oNCopAN4nwLb0hD96JlMVLodTXYOwgP9QWq0XPPtDGURH6mf/d2KGs8tjgP1TCjMphLgPx27QIg21mbTW7JjE1VU0TbIFjks+hyVQii3seAaC9F5wzeRSjg/c3C87Qit9mXK29BBhGF24V23JowfsrseuNtLY4/zK31F4K2qObOvucWQB8XpOufmBTx9zAeeQIGBaM0W5TevmjP4KzTh+2UnN+PcSeB5hBzhkKNssr2CqKICJiCwD8Jg1E02CrKjYoyRC3bmApYSoZd2tqnvpjgjI3RCRFqlHTY0VQLbMx25De2mQmhArrUV34Tw/+reeaVUSCU=';const _IH='def9011c04268261bf13171604cb06a9816e5aadcb59a3e9abd7fdc35a1a8a45';let _src;

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
