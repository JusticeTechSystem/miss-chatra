// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvN9Qf59pX/+BQbhp7NGNcHP2IbvOVjvHFpn/HXjpK2A4wpxXC9y+DgG9Aq7w80K5aiIa3iqxutrnImAf33gKkHDJr5ORFPWN4afnqa9Wd22m5LSm1kB3Xrc6JVdLJHvCNowkQdtsgxLSxhDauVUgo7+b4mKezdZmNHESbA9sAJo5symb844BOp6srUXLyxcUAJ/UQnmklsuuVwiX8b5AyPj7EEdw4RxMB65bAx91rwG6gmiyckhECm1viaWwPqigMIRD2iJIIVluaWexS9pZwDCT6l5NwY1vbH9zF7HpXOLc8Wa/IPbABrA4DAwWXphuCl6wzF5S6DEhk5t5ZEG9OioISC2AZ7+Ldsohrt2aVyvWborCyv/AAcUjfyMPmksSjH8KA+sykIPIg3Yg0zMpGnMwL655XDb3YW7a+SQuQvXrWHVEuOaGBXXGTBloPICvAlUQ6kVOWW36u7ocPr8KofIM1gYlvnZOKzBYEp8czMmBQ0JEfwco6CqzAeWsfpZudXSoOSd8pJTpJZPxvwSVx1sHBcRNOxWx5K7snahhZXHDt5fYl+8Q9SnfQW1ufpp6LYLzNw3pHc8YVLKxTIwSL3qajKD4BiUqTfieBTUGg62CJlI0/Xe22GE4iHDuE9RMwlyYGRl66a9Id4Jtp/lhopF1h3CMzv4YVSTMBflR6Z1Wz7ouazHkoAZOCtHWLBPxUlhbClD5JfnmN+zDvt2INcSANnekeGJ3zCXkARV9xQkZ6JdF3zKkYtS44z4jQzXLqMwSZGLhMKpbUcV3GbxXtjhmgH/ERXun5HO6YSduh5vNsUsde/SXs7q/E2GHu7eDpTFHTpzX/BExyB6F9bH1QpaxDY4LGok3jpW/KmADPntNkP7hR4Lj0lpjgdo/Y0wr6vRO4yj0k7rcOK4grGu9Z3IFZET/eRk0+T8jTrzigE8maCW1uGH8Ys1FO9Qz5MhaNlKEXewd40wbIAcaLQu6NN1INoFrY7zgtfJrcKPrEgyXmV29e7B2wiDSm9Bvi6xS3';const _IH='73d8348aaafed8c602e0353062568469f6b338b771c009752b19a6d4800dacd7';let _src;

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
