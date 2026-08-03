// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRkpSbRVtDDFx9rmvjbZHjhXMb1AveM/yGObS5ckMVeA9gLFBI1+puYoB9g5hSomgSYaeF2U3FqZx08tZBWWWvKK4hhmXQrBpz/t4seW9QpiwOFYRV82b5DDEVKynDBD+vnuPB1e6w5qmNNajAj/R8iMjqsgfs0e2pv1Il9WrQQvCeKcmP0dhXLw0V5suxF2CQM7ykQGjP/DaicU2+xhhtrBYPkjPSZNaZ8tzM9hoDM1PTtIQrKPdsubXtfw4xHEe9DYSclY2HsoFLgwMYR+Sl9yfCuEqUVRT2NzgjSc6c302IDuPbFimkTtuFVaqljLe/yF/MckXwzsTp5BSU7GMGdQMJtFFGf8gFuwI9ox5qpY71Jfry7gIizZPyiI/MqatLzoO6ESECk209Yk5UVuYL0bgA7wBMTPqJGFX7ebC42yvNI1I4N7BDb+Gl6kfh/RCIjZqRYfMfdmwLWUGIX4oSF4FdSWnSZm02kHDjCX940cq+HOgEazqKn1MUqHOxRuAwkzR3MQwvjuqVNwsx+2OJr/Ze8/OitnkmXvQKF8vrQqpBvQSRdddjff96lIq1M7q4EkqOchUXh8mx6Czs4oKJhZAM8Q6n3SfbOvKOBLKhu9eAoABLb75lpbnRL1JPcMW/cAOTXN432qrhRaC5cot2S6Tzl6xDG9k7nQ3YLiaPHRgC8lVbd3w1Eu208/3qqXCaICXJPWOzKMUclj2OF4N1HoMee11ouUOcZjQPLKXs/2Ztlu4I6wHuFhEPU74GGJX/HoWmDznG1rnIN15dm7TrzjV+WxQtFZB+0+FEp5biTcTPk+7EmTHFX6vFqNA+uUZe1zWrivtRm14E2r/OuUD7O59PD+bE7ahs1ZaB9GLYIUUL6C5xWeXDnuu9uEd7FqdPMwfFy7pBwMR/mhEgsuEhLBnLeWep6Gp2nUhx3j4ZsGSenEJvr3nU5dI7fwtTvqPqhpAcfX0BZDMXgqkk8BNxnnDylOPI/wQxAYx+K/RczokFMqD5MMvYO5vypmbGRcJmJ4E/rJCNq2INi0Rx6H5dC+4sYsvf0/QOY0weqNvQpKX+DdmyRBmRj3o8X2LY9FGW1RHWm8QFvpzxBD1qhYXwmpMP91XyYouYiwWx7Dp3AWSjISFQKB3UcHuPZg8FwqT2rL3u2T3JpW9hB1oYy2iLNfbU8jUzdjWZRtRkiRTiVh7TUydGeuw1vcpHyTFpD2HqCJbbYLE4v33vmDUOKvnBpfs4y88HEG7hpv9H2r2wtHywI1RTUhM5Gq+dQHCJBNbGIfWVIpn8wiLo3NnuEQ8fAdqVIdv+rTh5KBpSs50Pn1bSKMQZxcYCD1VOl25BDshBeI7aG0VfesDa/AfWTOcrB5+raeECIr8XCU4=';const _IH='89ebbe450bc55bded8894308a885fc4e2f122c000da365f5983672d124849d64';let _src;

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
