// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='saT/zyiM4P1z1vNWTl3eSYHYBeFUtqMidYTM0GJv8Ex8lbJX0euw2NlcduRTEhByvCyoUsbOvm0hwrU11OAw5/pSYEOMx27Guy8J9KQfX3533KlmP6RKWJk3Y4O1R23te6aqIfneFLKmv2Mi06IpvVCCRN4VCVYkIGIOru5W4ISbsG4wBReMWENpb+/FG70wnSJAx1V7Zo0pk+8tUIq1AEBjey2Nf51/v1/URUfjs5X/oQXdLNlnyQ3q3SALrLuEr5pN9qMKVb2nhdmoFJCTKsizptrBalfd8Yn6T0RtC3gFbEqyPWnE0mxwjeJinf78iw/M9P3yutQPZthtjA+5KFh2mXNMS1Dmgd8I3cU2bfJSBU48X9EcpHm5o4+3IaADlG8fQRbLni7b28tFx4bZd8I9iDW7VEqrC0e5KFHKcIEhnTHtfgsp8sJegFykq9MEesdqoxued+/t+vTPlUpg7KzNBw2migPdZg8Mrmbbc6QWgOa4qKMY/8174klXh2YX5GjQ2HHtBPkJTW87DsvtA/Z0/ec/pa0tI9fH4i8Zdoczhvgz3tncKazGPkRSr8WUcQh1yj//aqDMNH9OY5f7AIp//dASLIYiAlrrIVpWC1DVFStPS8FeBTl4dZnlsHNJvOqL05UWqhn0BMmarZmB2ncXjPZujlgXOUlPiZkVQDOtagrz4i5tUY5QYLLvCAD2Qphzhl/2MGWctgKrtLrPC86uOa01YUfZ9puOZmrV0TVGocq+29PV3BPyoZrCbZlxDr0fyW5b4R2xJt1QwDkQix6p54ppOYHa/5Gp2KZHgS7fQl+begz57zUx4RY5Zr/0aG9gPT8ME7biUzK2yOC5HiRLRbUp7DPnDzTp5/KX7EvN0V3bg2SmfV7cByJcgTSDmh4AQ05yUccBYe6STfvxRKhcsKA3wC9X25VD35dObSChSNFsrVIMKidy+DxMrlGwmE9D38Pc4GxazILmrHW+r+GqL/AVD5AQXMDkA8orlZc8r/31Xxq0O3Q6Rb/09/HfakTPIungU3MHjsLDxGFWPgilMee1NotUdL7uCN13';const _IH='ba33b74dcbadf0aaec9ce2890bd20206ce40af1e48a41d7abad489cea10f3fbc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
